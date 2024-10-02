import axios from 'axios';
import { createHmac } from 'crypto';
import { NextResponse } from 'next/server';

const { PAYMENT_MERCHANT_ID, WAYFORPAY_SECRET_KEY } = process.env;
if (!WAYFORPAY_SECRET_KEY) {
  throw new Error('WAYFORPAY_SECRET_KEY is not defined');
}
const paymentSignatureGenerator = (data: any) => {
  const merchantAccount = PAYMENT_MERCHANT_ID || '';
  const params = [
    merchantAccount,
    data.merchantDomainName, // obj.merchantDomainName,
    data.orderReference, //obj.orderReference,order_id
    data.orderDate,
    data.amount,
    data.currency,
    data.productName,
    data.productCount,
    data.productPrice,
  ];

  const valuesString = params.join(';');

  const signature = createHmac('md5', WAYFORPAY_SECRET_KEY)
    .update(valuesString, 'utf8')
    .digest('hex');

  return signature;
};

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const merchantAccount = PAYMENT_MERCHANT_ID || '';
    const merchantSignature = paymentSignatureGenerator(data);
    const url = 'https://api.wayforpay.com/api';
    //const url = 'https://secure.wayforpay.com/pay?behavior=true';
    const body = {
      ...data,
      merchantAccount,
      merchantSignature,
    };
    //console.log('in handler body', body);
    const response = await axios.post(url, body, {
      headers: {
        'Content-Type': 'application/json',
        acceptCharset: 'utf-8',
      },
    });
    const responseData = response.data;

    if (responseData.invoiceUrl) {
      return NextResponse.json(responseData);
    } else {
      return NextResponse.json(
        { message: 'Request failed with error ' + responseData },
        { status: responseData.reasonCode || 400 }
      );
    }
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      { message: `Can't get payment url`, error: error.message },
      { status: 500 }
    );
  }
}
