
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Bell, 
  CheckCircle, 
  Clock, 
  AlertCircle,
  User,
  FileText,
  DollarSign
} from "lucide-react";

export const RecentActivities = () => {
  const activities = [
    {
      id: 1,
      type: "leave",
      title: "Leave application approved",
      description: "Rajesh Kumar's casual leave for 2 days approved",
      time: "2 hours ago",
      status: "approved",
      icon: CheckCircle
    },
    {
      id: 2,
      type: "payroll",
      title: "Payroll processed",
      description: "March 2024 payroll completed for IT Department",
      time: "4 hours ago",
      status: "completed",
      icon: DollarSign
    },
    {
      id: 3,
      type: "employee",
      title: "New employee onboarded",
      description: "Priya Sharma joined as Software Developer",
      time: "1 day ago",
      status: "new",
      icon: User
    },
    {
      id: 4,
      type: "grievance",
      title: "Grievance submitted",
      description: "Complaint regarding office facilities - Ticket #GR-2024-156",
      time: "2 days ago",
      status: "pending",
      icon: AlertCircle
    },
    {
      id: 5,
      type: "report",
      title: "Monthly report generated",
      description: "Attendance report for February 2024 exported",
      time: "3 days ago",
      status: "completed",
      icon: FileText
    }
  ];

  const getStatusBadge = (status: string) => {
    const statusMap = {
      approved: { variant: "default", label: "Approved", color: "bg-green-100 text-green-800" },
      completed: { variant: "default", label: "Completed", color: "bg-blue-100 text-blue-800" },
      pending: { variant: "secondary", label: "Pending", color: "bg-orange-100 text-orange-800" },
      new: { variant: "default", label: "New", color: "bg-purple-100 text-purple-800" }
    };
    const config = statusMap[status as keyof typeof statusMap] || statusMap.pending;
    return (
      <Badge className={config.color} variant="secondary">
        {config.label}
      </Badge>
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Bell className="h-5 w-5 mr-2 text-blue-600" />
          Recent Activities
        </CardTitle>
        <CardDescription>
          Latest updates and notifications
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => {
            const Icon = activity.icon;
            return (
              <div key={activity.id} className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex-shrink-0">
                  <div className="p-2 bg-blue-50 rounded-full">
                    <Icon className="h-4 w-4 text-blue-600" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm font-medium text-gray-900">
                      {activity.title}
                    </p>
                    {getStatusBadge(activity.status)}
                  </div>
                  <p className="text-sm text-gray-600 mb-1">
                    {activity.description}
                  </p>
                  <p className="text-xs text-gray-500 flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {activity.time}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};
