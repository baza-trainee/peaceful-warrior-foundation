// api/route.js
import axios from 'axios';

const { PAYMENT_MERCHANT_ID, WAYFORPAY_SECRET_KEY } = process.env;

const paymentSignatureGenerator = (data) => {
  const merchantAccount = PAYMENT_MERCHANT_ID || '';
  const params = [
    merchantAccount,
    merchantDomainName, // obj.merchantDomainName,
    orderReference, //obj.orderReference,order_id
    orderDate,
    amount,
    currency,
    productName,
    productCount,
    productPrice,
  ];

  const valuesString = params.join(';');
  const signature = createHmac('md5', WAYFORPAY_SECRET_KEY)
    .update(valuesString, 'utf8')
    .digest('hex');

  return signature;
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const merchantSignature = paymentSignatureGenerator(req.body);
      const url = 'https://api.wayforpay.com/api';

      const body = {
        ...req.body,
        merchantAccount,
        merchantSignature,
      };

      const response = await axios.post(url, body);
      const data = response.data;

      if (data.invoiceUrl) {
        res.status(200).json(data);
      } else {
        res.status(data.reasonCode).send('Request failed with error ' + data);
      }
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: `Can't get payment url`, error: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
