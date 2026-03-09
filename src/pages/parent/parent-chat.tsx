import type React from 'react';
import { useState } from 'react';
import { Input } from '@/components/ui/input.tsx';
import { ScrollArea } from '@/components/ui/scroll-area.tsx';
import { Avatar, AvatarFallback } from '@/components/ui/avatar.tsx';
import { Button } from '@/components/ui/button.tsx';
import { Paperclip, Send } from 'lucide-react';
import DashboardShell from '@/pages/shared/dashboard-shell.tsx';
import { PARENT_DASHBOARD_LINKS } from '@/constants/parent-dashboard.tsx';

const conversations = [
  {
    id: 1,
    name: 'Sunshine Montessori Academy',
    initials: 'SM',
    lastMessage: 'Congratulations! We are pleased to offer your child...',
    time: '2h ago',
    unread: true,
  },
  {
    id: 2,
    name: 'Bright Horizons Preschool',
    initials: 'BH',
    lastMessage: 'Thank you for your application. We would like to...',
    time: '1d ago',
    unread: true,
  },
  {
    id: 3,
    name: 'Little Explorers Daycare',
    initials: 'LE',
    lastMessage: 'We have received your application and are currently...',
    time: '3d ago',
    unread: false,
  },
];

const chatMessages = [
  {
    id: 1,
    sender: 'them',
    name: 'Sunshine Montessori Academy',
    text: 'Thank you for applying to Sunshine Montessori! We have reviewed your application for Emma.',
    time: 'Feb 27, 10:30 AM',
  },
  {
    id: 2,
    sender: 'me',
    name: 'Jane Doe',
    text: "Thank you for the quick response! I'm very excited about the possibility of Emma joining your program.",
    time: 'Feb 27, 11:15 AM',
  },
  {
    id: 3,
    sender: 'them',
    name: 'Sunshine Montessori Academy',
    text: 'We would love to invite you and Emma for a tour of our facility. Would March 3rd or March 5th work for you?',
    time: 'Feb 28, 9:00 AM',
  },
  {
    id: 4,
    sender: 'me',
    name: 'Jane Doe',
    text: 'March 5th works perfectly! What time should we arrive?',
    time: 'Feb 28, 9:45 AM',
  },
  {
    id: 5,
    sender: 'them',
    name: 'Sunshine Montessori Academy',
    text: 'Well...',
    time: 'Mar 1, 2:00 PM',
  },
  {
    id: 6,
    sender: 'them',
    name: 'Sunshine Montessori Academy',
    text: 'Congratulations! We are pleased to offer your child a spot in our Toddler Program starting April 1st. Please review the enrollment documents sent to your email.',
    time: 'Mar 1, 2:00 PM',
  },
];

const ParentChat: React.FC = () => {
  const [selected, setSelected] = useState(conversations[0]);
  const [showChat, setShowChat] = useState(false);

  return (
    <DashboardShell links={PARENT_DASHBOARD_LINKS}>
      <div className="flex flex-col gap-6">
        <div>
          <h2 className="font-serif text-2xl text-foreground">Messages</h2>
          <p className="mt-1 text-muted-foreground">
            Communicate with child care institutions.
          </p>
        </div>

        <div className="flex h-[600px] overflow-hidden border border-border bg-card">
          {/* Conversation List */}
          <div
            className={`flex-[0.4] w-full flex-col border-r border-border md:flex md:w-80 shrink-0 ${showChat ? 'hidden' : 'flex'}`}
          >
            <div className="border-b border-border p-4">
              <Input
                placeholder="Search conversations..."
                className="bg-muted/50"
              />
            </div>
            <ScrollArea className="flex-1">
              {conversations.map((conv) => (
                <Button
                  key={conv.id}
                  onClick={() => {
                    setSelected(conv);
                    setShowChat(true);
                  }}
                  className={`flex h-full w-full items-start gap-3 border-b border-border p-4 text-left transition-colors hover:bg-muted/50 ${
                    selected.id === conv.id ? 'bg-secondary' : 'bg-primary/15'
                  }`}
                >
                  <Avatar className="h-10 w-10 ">
                    <AvatarFallback className="bg-primary/10 text-primary text-sm">
                      {conv.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <p
                        className={`text-sm truncate ${conv.unread ? 'font-semibold text-card-foreground' : 'text-card-foreground'}`}
                      >
                        {conv.name}
                      </p>
                      <span className="text-xs text-muted-foreground shrink-0">
                        {conv.time}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground text-wrap">
                      {conv.lastMessage}
                    </p>
                  </div>
                  {conv.unread && (
                    <span className="my-auto h-2.5 w-2.5 rounded-full border border-secondary bg-blue-500 shrink-0" />
                  )}
                </Button>
              ))}
            </ScrollArea>
          </div>

          {/* Chat Area */}
          <div
            className={`flex-1 flex-col ${showChat ? 'flex' : 'hidden md:flex'}`}
          >
            {/* Chat Header */}
            <div className="flex items-center gap-3 border-b border-border p-4">
              <Button
                onClick={() => setShowChat(false)}
                className="text-sm text-primary md:hidden"
              >
                Back
              </Button>
              <Avatar className="h-9 w-9">
                <AvatarFallback className="bg-primary/10 text-primary text-sm">
                  {selected.initials}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-semibold text-card-foreground">
                  {selected.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  Usually responds within 24 hours
                </p>
              </div>
            </div>

            {/* Messages */}
            <ScrollArea className="flex-1 p-4 border overflow-scroll">
              <div className="flex flex-col gap-4">
                {chatMessages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-xl px-4 py-3 ${
                        msg.sender === 'me'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted text-foreground'
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{msg.text}</p>
                      <p
                        className={`mt-1.5 text-xs ${
                          msg.sender === 'me'
                            ? 'text-primary-foreground/70'
                            : 'text-muted-foreground'
                        }`}
                      >
                        {msg.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            {/* Input */}
            <div className="border-t border-border p-4">
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="shrink-0 text-muted-foreground"
                  aria-label="Attach file"
                >
                  <Paperclip className="h-4 w-4" />
                </Button>
                <Input placeholder="Type a message..." className="flex-1" />
                <Button
                  size="icon"
                  className="shrink-0 bg-primary text-primary-foreground hover:bg-primary/90"
                  aria-label="Send message"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
};

export default ParentChat;
