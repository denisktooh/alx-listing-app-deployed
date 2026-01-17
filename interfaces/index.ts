import { Url } from "next/dist/shared/lib/router/router";

export interface CardProps {
  title: string;
  subtitle?: string;
  imageUrl?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
}

interface Address {
  state: string;
  city: string;
  country: string;
}

interface Offers {
  bed: string;
  shower: string;
  occupants: string;
}

export interface Reviews {
  id: number;
  reviewerName: string;
  rating: number;
  comment: string;
}

export interface PropertyProps {
  id: number;
  name: string;
  address: Address;
  rating: number;
  category: string[];
  price: number;
  offers: Offers;
  image: Url;
  discount: string;
  reviews?: Reviews[];
}

export interface ReviewSectionProps {
  propertyId: number;
}
