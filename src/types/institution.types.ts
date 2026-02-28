export type Institution = {
  id: string;
  name: string;
  description: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
  email: string;
  website?: string;
  photos: string[];
  ownerId: string;
  averageRating: number;
  totalReviews: number;
  createdAt: Date;
  updatedAt: Date;
};
