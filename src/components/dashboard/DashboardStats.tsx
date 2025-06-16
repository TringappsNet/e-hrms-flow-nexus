
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  Users, 
  UserCheck, 
  Calendar, 
  TrendingUp,
  Clock,
  FileText
} from "lucide-react";

export const DashboardStats = () => {
  const stats = [
    {
      title: "Total Employees",
      value: "12,847",
      change: "+2.5%",
      changeType: "positive" as const,
      icon: Users,
      color: "blue"
    },
    {
      title: "Present Today",
      value: "11,234",
      change: "87.4%",
      changeType: "neutral" as const,
      icon: UserCheck,
      color: "green"
    },
    {
      title: "Pending Leaves",
      value: "156",
      change: "-12%",
      changeType: "positive" as const,
      icon: Calendar,
      color: "orange"
    },
    {
      title: "Active Grievances",
      value: "23",
      change: "-8.2%",
      changeType: "positive" as const,
      icon: FileText,
      color: "red"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "text-blue-600 bg-blue-50",
      green: "text-green-600 bg-green-50",
      orange: "text-orange-600 bg-orange-50",
      red: "text-red-600 bg-red-50"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <Card key={index} className="hover:shadow-md transition-shadow duration-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">
                    {stat.title}
                  </p>
                  <p className="text-2xl font-bold text-gray-900">
                    {stat.value}
                  </p>
                  <div className="flex items-center mt-2">
                    <TrendingUp className={`h-4 w-4 mr-1 ${
                      stat.changeType === 'positive' ? 'text-green-600' : 
                      stat.changeType === 'neutral' ? 'text-gray-600' : 'text-red-600'
                    }`} />
                    <span className={`text-sm font-medium ${
                      stat.changeType === 'positive' ? 'text-green-600' : 
                      stat.changeType === 'neutral' ? 'text-gray-600' : 'text-red-600'
                    }`}>
                      {stat.change}
                    </span>
                  </div>
                </div>
                <div className={`p-3 rounded-full ${getColorClasses(stat.color)}`}>
                  <Icon className="h-6 w-6" />
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};
