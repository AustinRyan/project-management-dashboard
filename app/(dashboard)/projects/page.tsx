'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Plus,
  Search,
  Clock,
  CheckCircle2,
  AlertCircle,
  MoreVertical,
} from 'lucide-react';

const projects = [
  {
    name: 'Website Redesign',
    description: 'Modernizing the company website with new design system',
    status: 'In Progress',
    progress: 65,
    dueDate: '2024-04-15',
    priority: 'High',
    team: ['JD', 'AS', 'RK'],
  },
  {
    name: 'Mobile App Development',
    description: 'Building a cross-platform mobile application',
    status: 'On Track',
    progress: 42,
    dueDate: '2024-05-01',
    priority: 'Medium',
    team: ['JD', 'AS'],
  },
  {
    name: 'Marketing Campaign',
    description: 'Q2 Digital Marketing Campaign',
    status: 'At Risk',
    progress: 28,
    dueDate: '2024-04-30',
    priority: 'High',
    team: ['JD', 'RK'],
  },
  {
    name: 'Data Analytics Platform',
    description: 'Internal analytics dashboard development',
    status: 'On Track',
    progress: 89,
    dueDate: '2024-04-10',
    priority: 'Medium',
    team: ['AS', 'RK'],
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'In Progress':
      return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
    case 'On Track':
      return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
    case 'At Risk':
      return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
    default:
      return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
  }
};

const getPriorityIcon = (priority: string) => {
  switch (priority) {
    case 'High':
      return <AlertCircle className="h-4 w-4 text-red-500" />;
    case 'Medium':
      return <Clock className="h-4 w-4 text-yellow-500" />;
    case 'Low':
      return <CheckCircle2 className="h-4 w-4 text-green-500" />;
    default:
      return null;
  }
};

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
          <p className="text-sm text-muted-foreground">
            Manage and track all your ongoing projects
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> New Project
        </Button>
      </div>

      <div className="flex items-center space-x-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search projects..."
            className="pl-8"
          />
        </div>
        <Button variant="outline">Filter</Button>
      </div>

      <div className="grid gap-4">
        {projects.map((project, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-lg font-medium">
                {project.name}
              </CardTitle>
              <div className="flex items-center space-x-2">
                <Badge
                  variant="secondary"
                  className={getStatusColor(project.status)}
                >
                  {project.status}
                </Badge>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex -space-x-2">
                      {project.team.map((member, i) => (
                        <div
                          key={i}
                          className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-background bg-muted font-semibold"
                        >
                          {member}
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      {getPriorityIcon(project.priority)}
                      <span>{project.priority} Priority</span>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Due {new Date(project.dueDate).toLocaleDateString()}
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Progress</span>
                    <span>{project.progress}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted">
                    <div
                      className="h-full rounded-full bg-primary"
                      style={{ width: `${project.progress}%` }}
                    />
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