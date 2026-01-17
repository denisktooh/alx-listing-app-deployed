import type { NextApiRequest, NextApiResponse } from 'next';
import { Reviews } from '@/interfaces';

const reviews: Reviews[] = [
  {
    id: 1,
    reviewerName: 'Alice',
    rating: 5,
    comment: 'Amazing place! Highly recommend.'
  },
  {
    id: 2,
    reviewerName: 'Bob',
    rating: 4,
    comment: 'Very comfortable and clean.'
  },
  {
    id: 3,
    reviewerName: 'Charlie',
    rating: 3,
    comment: 'Good value for the price.'
  }
];

export default function handler(req: NextApiRequest, res: NextApiResponse<Reviews[]>) {
  res.status(200).json(reviews);
}
