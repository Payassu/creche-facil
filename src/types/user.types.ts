export const USER_ROLE = {
  PARENT: 'PARENT',
  INSTITUTION: 'INSTITUTION',
} as const;

export type UserRole = typeof USER_ROLE[keyof typeof USER_ROLE];

export type User = {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
};
