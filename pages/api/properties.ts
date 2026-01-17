import type { NextApiRequest, NextApiResponse } from 'next';
import { PropertyProps } from '@/interfaces';
import { PROPERTYLISTINGSAMPLE } from '@/constants';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<PropertyProps[]>
) {
  res.status(200).json(PROPERTYLISTINGSAMPLE);
}
