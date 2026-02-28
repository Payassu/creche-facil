import type { User } from './user.types';

export type Review = {
  id: string;
  parentId: string;
  institutionId: string;
  rating: number;
  comment: string;
  createdAt: Date;
  updatedAt: Date;
  parent?: User;
};
