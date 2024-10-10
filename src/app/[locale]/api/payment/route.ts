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
    data.merchantDomainName,
    data.orderReference,
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
    const orderReference = `id-${Date.now()}`;
    const orderDate = Math.floor(Date.now() / 1000);
    const merchantSignature = paymentSignatureGenerator({
      ...data,
      orderReference,
      orderDate,
    });

    const paymentData = {
      merchantAccount: PAYMENT_MERCHANT_ID,
      merchantSignature: merchantSignature,
      // transactionType: 'CREATE_INVOICE',
      merchantDomainName: data.merchantDomainName,
      apiVersion: 1,
      authorizationType: 'SimpleSignature',
      defaultPaymentSystem: 'card',
      orderReference: orderReference,
      orderDate: orderDate,
      amount: data.amount,
      language: data.language,
      currency: data.currency,
      productName: data.productName,
      productCount: data.productCount,
      productPrice: data.productPrice,
      regularMode: data.regularMode,
      //regularAmount,
      // paymentSystems: 'card;googlePay;applePay;privat24', //for later

      //serviceUrl: `${window.location.origin}/${currentLocale}/api/payment/complete`,
    };

    return NextResponse.json(paymentData);
  } catch (error: any) {
    console.error('Error generating payment data:', error);
    return NextResponse.json(
      { message: 'Failed to generate payment data' },
      { status: 500 }
    );
  }
}
