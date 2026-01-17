import type { NextApiRequest, NextApiResponse } from 'next';
import { PROPERTYLISTINGSAMPLE } from '@/constants';
import { PropertyProps } from '@/interfaces';

export default function handler(req: NextApiRequest, res: NextApiResponse<PropertyProps | { error: string }>) {
  const { id } = req.query;
  const propertyId = Number(id);
  const property = PROPERTYLISTINGSAMPLE.find((p) => p.id === propertyId);

  if (!property) {
    res.status(404).json({ error: 'Property not found' });
    return;
  }

  res.status(200).json(property);
}
