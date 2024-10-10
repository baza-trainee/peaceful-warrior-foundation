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
    const merchantSignature = paymentSignatureGenerator(data);

    return NextResponse.json({ merchantSignature });
  } catch (error: any) {
    console.error('Error generating signature:', error);
    return NextResponse.json(
      { message: 'Failed to generate signature' },
      { status: 500 }
    );
  }
}
