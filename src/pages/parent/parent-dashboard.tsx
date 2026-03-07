import { Link, useLocation } from 'react-router-dom';
import { FileText, LayoutDashboard, MessageCircle, User } from 'lucide-react';
import { Button } from '@/components/ui/button.tsx';
import { Badge } from '@/components/ui/badge.tsx';
import { Avatar, AvatarFallback } from '@/components/ui/avatar.tsx';

const parentLinks = [
  { href: '/parent/dashboard', label: 'Overview', icon: LayoutDashboard },
  {
    href: '/parent/dashboard/applications',
    label: 'Applications',
    icon: FileText,
    badge: 3,
  },
  {
    href: '/parent/dashboard/messages',
    label: 'Messages',
    icon: MessageCircle,
    badge: 2,
  },
  { href: '/parent/dashboard/profile', label: 'Profile', icon: User },
];

export default function ParentDashboard() {
  const location = useLocation();

  return (
    <div className="flex min-h-screen">
      {/* Sidebar - Desktop */}
      <aside className="hidden w-64 shrink-0 flex-col border-r border-sidebar-border bg-sidebar lg:flex">
        <nav className="flex-1 px-3 py-4" aria-label="Dashboard navigation">
          <div className="flex flex-col gap-1">
            {parentLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`flex items-center justify-between rounded-lg px-3 py-2.5 text-sm transition-colors ${
                    isActive
                      ? 'bg-sidebar-accent text-sidebar-accent-foreground font-medium'
                      : 'text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground'
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <link.icon className="h-4 w-4" />
                    {link.label}
                  </span>
                  {link.badge && (
                    <Badge className="bg-accent text-accent-foreground text-xs h-5 min-w-5 px-1.5 flex items-center justify-center">
                      {link.badge}
                    </Badge>
                  )}
                </Link>
              );
            })}
          </div>
        </nav>

        <div className="border-t border-sidebar-border p-4">
          <div className="flex items-center gap-3">
            <Avatar className="h-9 w-9">
              <AvatarFallback className="bg-sidebar-accent text-sidebar-accent-foreground text-sm">
                JD
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-sidebar-foreground truncate">
                Jane Doe
              </p>
              <p className="text-xs text-sidebar-foreground/60 truncate">
                Parent Account
              </p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="text-sidebar-foreground/60 hover:text-sidebar-foreground shrink-0"
            >
              <Link to="/login" aria-label="Log out">
                {/*<LogOut className="h-4 w-4" />*/}
              </Link>
            </Button>
          </div>
        </div>
      </aside>
    </div>
  );
}
