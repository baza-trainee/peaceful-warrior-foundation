import axios from 'axios';
import { createHmac } from 'crypto';
import { NextResponse } from 'next/server';

const { PAYMENT_MERCHANT_ID, WAYFORPAY_SECRET_KEY } = process.env;

const paymentSignatureGenerator = (data) => {
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
console.log("params",params)
  const valuesString = params.join(';');
  console.log('Values string for HMAC:', valuesString);
  const signature = createHmac('md5', WAYFORPAY_SECRET_KEY)
    .update(valuesString, 'utf8')
    .digest('hex');
  console.log('in handler signature', signature);
  return signature;
};

export async function POST(req) {
  console.log('Received request at /api/payment');

  //   const { PAYMENT_MERCHANT_ID, WAYFORPAY_SECRET_KEY } = process.env;

  // Логи переменных окружения

  try {
    const data = await req.json();
    const merchantAccount = PAYMENT_MERCHANT_ID || '';
    const merchantSignature = paymentSignatureGenerator(data);
    const url = 'https://api.wayforpay.com/api';

    const body = {
      ...data,
      merchantAccount,
      merchantSignature,
    };
    console.log('in handler body', body);
    const response = await axios.post(url, body, {
      headers: {
        'Content-Type': 'application/json',
        acceptCharset: 'utf-8',
      },
    });
    const responseData = response.data;
    console.log('invoiceUrl', responseData);
    if (responseData.invoiceUrl) {
      return NextResponse.json(responseData);
    } else {
      //   const statusCode = responseData.reasonCode || 400;
      //   if (statusCode < 200 || statusCode > 599) {
      //     statusCode = 400;
      //   }
      return NextResponse.json(
        { message: 'Request failed with error ' + responseData },
        { status: statusCode }
      );
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: `Can't get payment url`, error: error.message },
      { status: 500 }
    );
  }
}
