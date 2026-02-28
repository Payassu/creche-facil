import type { User } from './user.types';

export interface Message {
  id: string;
  senderId: string;
  recipientId: string;
  institutionId: string;
  subject: string;
  content: string;
  read: boolean;
  createdAt: Date;
  sender?: User;
}
