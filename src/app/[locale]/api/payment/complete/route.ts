// import { NextResponse } from 'next/server';

// export async function POST(req: Request) {
//   try {
//     const paymentResult = await req.json();

//     const isSuccess = paymentResult.status === 'Approved';
//     if (isSuccess) {
//       return NextResponse.redirect(new URL('/?payment=success', req.url));
//     } else {
//       return NextResponse.redirect(new URL('/?payment=failure', req.url));
//     }
//   } catch (error: any) {
//     console.error('Error processing payment:', error);
//     return NextResponse.json(
//       { message: 'Failed to process payment', error: error.message },
//       { status: 500 }
//     );
//   }
// }

// export async function OPTIONS() {
//   return NextResponse.json({ message: 'Method Allowed' }, { status: 200 });
// }
