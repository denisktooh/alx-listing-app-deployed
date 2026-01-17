import type { NextApiRequest, NextApiResponse } from 'next';
import { PropertyProps } from '@/interfaces';
import { PROPERTYLISTINGSAMPLE } from '@/constants';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const bookingDetails = {
    propertyName: "Villa Arrecife Beach House",
    price: 7500,
    bookingFee: 65,
    totalNights: 3,
    startDate: "24 August 2024",
  };
  res.status(200).json(bookingDetails);
}
