import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const paymentResult = req.body;

    // Обработка данных из paymentResult

    res.status(200).json({ message: 'Payment processed successfully' });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
