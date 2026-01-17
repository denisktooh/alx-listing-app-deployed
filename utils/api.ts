import axios from 'axios';
import type { PropertyProps } from '@/interfaces';

export async function getAllProperties(): Promise<PropertyProps[]> {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/properties`);
  return response.data;
}

export async function getPropertyById(id: string | string[] | undefined) {
  if (!id) return null;
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/properties/${id}`
  );
  return response.data;
}

export async function createBooking(bookingData: any) {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/bookings`,
    bookingData
  );
  return response.data;
}
