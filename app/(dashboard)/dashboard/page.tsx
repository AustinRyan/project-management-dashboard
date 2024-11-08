'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  ArrowDownRight,
  Calendar as CalendarIcon,
  CheckCircle2,
  Clock,
  Users,
  MoreVertical,
  Plus,
  Star,
  Filter,
} from 'lucide-react';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Line, LineChart } from 'recharts';

const stats = [
  {
    title: 'Active Projects',
    value: '12',
    icon: Activity,
    trend: '+2.5%',
    trendUp: true,
    description: '3 projects due this week',
  },
  {
    title: 'Team Members',
    value: '24',
    icon: Users,
    trend: '+4.1%',
    trendUp: true,
    description: '8 active now',
  },
  {
    title: 'Tasks Completed',
    value: '842',
    icon: CheckCircle2,
    trend: '+12.8%',
    trendUp: true,
    description: '92% completion rate',
  },
  {
    title: 'Hours Tracked',
    value: '1,240',
    icon: Clock,
    trend: '-1.2%',
    trendUp: false,
    description: 'Last 30 days',
  },
];

const chartData = [
  { name: 'Jan', total: 1200 },
  { name: 'Feb', total: 900 },
  { name: 'Mar', total: 1600 },
  { name: 'Apr', total: 1400 },
  { name: 'May', total: 2100 },
  { name: 'Jun', total: 1800 },
];

const performanceData = [
  { name: 'Mon', performance: 85 },
  { name: 'Tue', performance: 92 },
  { name: 'Wed', performance: 89 },
  { name: 'Thu', performance: 94 },
  { name: 'Fri', performance: 91 },
  { name: 'Sat', performance: 85 },
  { name: 'Sun', performance: 88 },
];

const initialActivity = [
  {
    title: 'Website Redesign',
    description: 'New milestone achieved',
    timestamp: '2 hours ago',
    important: true,
  },
  {
    title: 'Mobile App Development',
    description: 'Sprint planning completed',
    timestamp: '4 hours ago',
    important: false,
  },
  {
    title: 'Marketing Campaign',
    description: 'Campaign assets approved',
    timestamp: '6 hours ago',
    important: true,
  },
];

export default function DashboardPage() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [recentActivity, setRecentActivity] = useState(initialActivity);
  const [timeframe, setTimeframe] = useState('weekly');

  const toggleImportant = (index: number) => {
    setRecentActivity(prev => 
      prev.map((item, i) => 
        i === index ? { ...item, important: !item.important } : item
      )
    );
  };

  const addActivity = () => {
    const newActivity = {
      title: 'New Activity',
      description: 'Activity description',
      timestamp: 'Just now',
      important: false,
    };
    setRecentActivity(prev => [newActivity, ...prev]);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="space-y-1">
          <h2 className="text-3xl font-bold tracking-tight">Welcome back, John</h2>
          <p className="text-muted-foreground">
            Here's what's happening with your projects today.
          </p>
        </div>
        <div className="flex gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" /> Quick Add
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create New Item</DialogTitle>
                <DialogDescription>
                  Quickly add a new project, task, or event.
                </DialogDescription>
              </DialogHeader>
              {/* Quick add form would go here */}
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className={`flex items-center text-sm ${
                    stat.trendUp ? 'text-green-500' : 'text-red-500'
                  }`}>
                    {stat.trendUp ? (
                      <ArrowUpRight className="h-4 w-4" />
                    ) : (
                      <ArrowDownRight className="h-4 w-4" />
                    )}
                    {stat.trend}
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Performance Overview</CardTitle>
            <Tabs
              value={timeframe}
              onValueChange={setTimeframe}
              className="w-[200px]"
            >
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="weekly">Weekly</TabsTrigger>
                <TabsTrigger value="monthly">Monthly</TabsTrigger>
              </TabsList>
            </Tabs>
          </CardHeader>
          <CardContent>
            <div className="h-[240px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={performanceData}>
                  <XAxis
                    dataKey="name"
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `${value}%`}
                  />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="performance"
                    stroke="hsl(var(--primary))"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-3">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Team Calendar</span>
              <Button variant="ghost" size="sm">
                <CalendarIcon className="h-4 w-4 mr-2" />
                View All
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              className="rounded-md border"
            />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Recent Activity
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={addActivity}>
                <Plus className="h-4 w-4 mr-2" />
                Add Activity
              </Button>
              <Button variant="ghost" size="sm">
                View All
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[300px] pr-4">
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between border-b last:border-0 pb-4 last:pb-0"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-medium">{activity.title}</h4>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6"
                        onClick={() => toggleImportant(index)}
                      >
                        <Star
                          className={`h-4 w-4 ${
                            activity.important
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-muted-foreground'
                          }`}
                        />
                      </Button>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {activity.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">
                      {activity.timestamp}
                    </span>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
}