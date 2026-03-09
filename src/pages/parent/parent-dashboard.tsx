import {
  FileText,
  MessageCircle,
  Clock,
  CheckCircle,
  XCircle,
  Search,
  ArrowRight,
  Star,
  MapPin,
} from 'lucide-react';
import DashboardShell from '@/pages/shared/dashboard-shell.tsx';
import { Button } from '@/components/ui/button.tsx';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card.tsx';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge.tsx';
import { Progress } from '@/components/ui/progress.tsx';
import { PARENT_DASHBOARD_LINKS } from '@/constants/parent-dashboard.tsx';

const stats = [
  {
    label: 'Active Applications',
    value: '3',
    icon: FileText,
    color: 'text-primary',
  },
  {
    label: 'Unread Messages',
    value: '2',
    icon: MessageCircle,
    color: 'text-foreground',
  },
  { label: 'Pending Review', value: '1', icon: Clock, color: 'text-chart-4' },
  { label: 'Accepted', value: '1', icon: CheckCircle, color: 'text-chart-3' },
];

const applications = [
  {
    id: 1,
    center: 'Sunshine Montessori Academy',
    location: 'Downtown, Brooklyn',
    status: 'accepted',
    date: 'Feb 15, 2026',
    progress: 100,
  },
  {
    id: 2,
    center: 'Bright Horizons Preschool',
    location: 'Upper West Side, Manhattan',
    status: 'pending',
    date: 'Feb 22, 2026',
    progress: 60,
  },
  {
    id: 3,
    center: 'Little Explorers Daycare',
    location: 'Park Slope, Brooklyn',
    status: 'in-review',
    date: 'Feb 28, 2026',
    progress: 35,
  },
];

const messages = [
  {
    id: 1,
    from: 'Sunshine Montessori Academy',
    preview:
      'Congratulations! We are pleased to offer your child a spot in our...',
    time: '2 hours ago',
    unread: true,
  },
  {
    id: 2,
    from: 'Bright Horizons Preschool',
    preview:
      'Thank you for your application. We would like to schedule a tour...',
    time: 'Yesterday',
    unread: true,
  },
  {
    id: 3,
    from: 'Little Explorers Daycare',
    preview: 'We have received your application and are currently reviewing...',
    time: '3 days ago',
    unread: false,
  },
];

const statusConfig: Record<
  string,
  { label: string; className: string; icon: typeof CheckCircle }
> = {
  accepted: {
    label: 'Accepted',
    className: 'bg-chart-3/10 text-chart-3',
    icon: CheckCircle,
  },
  pending: {
    label: 'Pending',
    className: 'bg-chart-4/10 text-chart-4',
    icon: Clock,
  },
  'in-review': {
    label: 'In Review',
    className: 'bg-primary/10 text-primary',
    icon: Clock,
  },
  rejected: {
    label: 'Rejected',
    className: 'bg-destructive/10 text-destructive',
    icon: XCircle,
  },
};

const ParentDashboard: React.FC = () => {
  return (
    <DashboardShell links={PARENT_DASHBOARD_LINKS}>
      <div className="flex-1 overflow-y-auto bg-background p-4 lg:p-8">
        <div className="flex flex-col gap-6">
          {/* Welcome */}
          <div>
            <h2 className="font-serif text-2xl text-foreground">
              Welcome back, Jane
            </h2>
            <p className="mt-1 text-muted-foreground">
              {"Here's an overview of your child care search journey."}
            </p>
          </div>

          {/* Stats */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <Card key={stat.label}>
                <CardContent className="flex items-center gap-4 p-5">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-lg bg-muted ${stat.color}`}
                  >
                    <stat.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-card-foreground">
                      {stat.value}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* Recent Applications */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-lg">Recent Applications</CardTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                  className="text-primary"
                >
                  <Link to="/parent/applications">
                    View All <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </Link>
                </Button>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                {applications.map((app) => {
                  const config = statusConfig[app.status];
                  return (
                    <div
                      key={app.id}
                      className="rounded-lg border border-border p-4"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h4 className="font-medium text-card-foreground">
                            {app.center}
                          </h4>
                          <p className="mt-0.5 flex items-center gap-1 text-xs text-muted-foreground">
                            <MapPin className="h-3 w-3" /> {app.location}
                          </p>
                        </div>
                        <Badge className={config.className}>
                          <config.icon className="mr-1 h-3 w-3" />
                          {config.label}
                        </Badge>
                      </div>
                      <div className="mt-3">
                        <div className="flex items-center justify-between text-xs text-muted-foreground mb-1.5">
                          <span>Applied: {app.date}</span>
                          <span>{app.progress}%</span>
                        </div>
                        <Progress value={app.progress} className="h-1.5" />
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Recent Messages */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-lg">Recent Messages</CardTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                  className="text-primary"
                >
                  <Link to="/parent/messages">
                    View All <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </Link>
                </Button>
              </CardHeader>
              <CardContent className="flex flex-col gap-3">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`rounded-lg border p-4 transition-colors hover:bg-muted/50 cursor-pointer ${
                      msg.unread
                        ? 'border-primary/30 bg-primary/5'
                        : 'border-border'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="font-medium text-card-foreground text-sm">
                        {msg.unread && (
                          <span className="mr-1.5 inline-block h-2 w-2 rounded-full bg-primary" />
                        )}
                        {msg.from}
                      </h4>
                      <span className="text-xs text-muted-foreground shrink-0">
                        {msg.time}
                      </span>
                    </div>
                    <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2">
                      {msg.preview}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <Card>
            <CardContent className="flex flex-col items-center gap-4 p-6 sm:flex-row sm:justify-center">
              <Button
                asChild
                className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Link to="/search">
                  <Search className="h-4 w-4" /> Search More Centers
                </Link>
              </Button>
              <Button
                variant="outline"
                asChild
                className="gap-2 border-primary/30 text-primary"
              >
                <Link to="/parent/profile">
                  <Star className="h-4 w-4" /> Complete Your Profile
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardShell>
  );
};

export default ParentDashboard;
