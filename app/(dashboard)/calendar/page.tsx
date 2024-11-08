'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const events = [
  {
    title: 'Team Meeting',
    time: '09:00 AM',
    type: 'meeting',
  },
  {
    title: 'Project Review',
    time: '11:30 AM',
    type: 'review',
  },
  {
    title: 'Client Call',
    time: '02:00 PM',
    type: 'call',
  },
  {
    title: 'Sprint Planning',
    time: '04:00 PM',
    type: 'planning',
  },
];

const getEventColor = (type: string) => {
  switch (type) {
    case 'meeting':
      return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
    case 'review':
      return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
    case 'call':
      return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
    case 'planning':
      return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300';
    default:
      return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
  }
};

export default function CalendarPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">Calendar</h2>
          <p className="text-sm text-muted-foreground">
            Schedule and manage your team's events
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add Event
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-[1fr_300px]">
        <Card>
          <CardContent className="p-6">
            <Calendar
              mode="single"
              className="rounded-md border"
              selected={new Date()}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Today's Schedule</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {events.map((event, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between border-b last:border-0 pb-4 last:pb-0"
                >
                  <div className="space-y-1">
                    <p className="font-medium">{event.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {event.time}
                    </p>
                  </div>
                  <Badge
                    variant="secondary"
                    className={getEventColor(event.type)}
                  >
                    {event.type}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}