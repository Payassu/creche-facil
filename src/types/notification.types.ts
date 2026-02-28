export const NOTIFICATION_TYPE = {
  APPLICATION_RECEIVED: 'APPLICATION_RECEIVED',
  APPLICATION_STATUS_CHANGED: 'APPLICATION_STATUS_CHANGED',
  NEW_MESSAGE: 'NEW_MESSAGE',
  NEW_REVIEW: 'NEW_REVIEW',
} as const;

export type NotificationType = typeof NOTIFICATION_TYPE[keyof typeof NOTIFICATION_TYPE];

export interface Notification {
  id: string;
  userId: string;
  type: NotificationType;
  title: string;
  message: string;
  read: boolean;
  relatedId?: string; // ID of related application, message, etc.
  createdAt: Date;
}
