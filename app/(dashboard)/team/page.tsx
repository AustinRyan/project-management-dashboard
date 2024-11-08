'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Plus,
  Search,
  Mail,
  Phone,
  MapPin,
  MoreVertical,
} from 'lucide-react';

const team = [
  {
    name: 'John Doe',
    role: 'Project Manager',
    email: 'john@example.com',
    phone: '+1 234 567 890',
    location: 'New York, USA',
    avatar: 'JD',
    status: 'Active',
    projects: 8,
  },
  {
    name: 'Alice Smith',
    role: 'Senior Developer',
    email: 'alice@example.com',
    phone: '+1 234 567 891',
    location: 'San Francisco, USA',
    avatar: 'AS',
    status: 'In Meeting',
    projects: 5,
  },
  {
    name: 'Robert King',
    role: 'UI/UX Designer',
    email: 'robert@example.com',
    phone: '+1 234 567 892',
    location: 'London, UK',
    avatar: 'RK',
    status: 'Away',
    projects: 6,
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Active':
      return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
    case 'In Meeting':
      return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
    case 'Away':
      return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
    default:
      return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
  }
};

export default function TeamPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">Team</h2>
          <p className="text-sm text-muted-foreground">
            Manage your team members and their roles
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add Member
        </Button>
      </div>

      <div className="flex items-center space-x-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search team members..."
            className="pl-8"
          />
        </div>
        <Button variant="outline">Filter</Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {team.map((member, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div className="flex items-center space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted font-semibold">
                  {member.avatar}
                </div>
                <div>
                  <CardTitle className="text-base font-medium">
                    {member.name}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {member.role}
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="icon">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <Badge
                    variant="secondary"
                    className={getStatusColor(member.status)}
                  >
                    {member.status}
                  </Badge>
                  <span className="text-sm text-muted-foreground">
                    {member.projects} Projects
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Mail className="mr-2 h-4 w-4" />
                    {member.email}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Phone className="mr-2 h-4 w-4" />
                    {member.phone}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="mr-2 h-4 w-4" />
                    {member.location}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}