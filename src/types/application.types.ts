import type { User } from './user.types';
import type { Institution } from './institution.types';

export const APPLICATION_STATUS = {
  PENDING: 'PENDING',
  UNDER_REVIEW: 'UNDER_REVIEW',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED',
} as const;

export type ApplicationStatus = typeof APPLICATION_STATUS[keyof typeof APPLICATION_STATUS];

export type ApplicationField = {
  id: string;
  institutionId: string;
  fieldName: string;
  fieldType: 'text' | 'number' | 'date' | 'file' | 'textarea' | 'select';
  required: boolean;
  options?: string[]; // For select fields
  order: number;
};

export type Application = {
  id: string;
  parentId: string;
  institutionId: string;
  status: ApplicationStatus;
  submittedData: Record<string, string | number | boolean | string[]>;
  documents: string[];
  createdAt: Date;
  updatedAt: Date;
  parent?: User;
  institution?: Institution;
};
