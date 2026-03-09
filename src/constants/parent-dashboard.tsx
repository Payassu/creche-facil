import { FileText, LayoutDashboard, MessageCircle, User } from 'lucide-react';

export const PARENT_DASHBOARD_LINKS = [
  { href: '/parent/dashboard', label: 'Overview', icon: LayoutDashboard },
  {
    href: '/parent/applications',
    label: 'Applications',
    icon: FileText,
    badge: 3,
  },
  {
    href: '/parent/chat',
    label: 'Messages',
    icon: MessageCircle,
    badge: 2,
  },
  { href: '/parent/profile', label: 'Profile', icon: User },
];
