
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  PlusCircle, 
  FileText, 
  Download, 
  UserPlus,
  Clock,
  DollarSign
} from "lucide-react";

export const QuickActions = () => {
  const actions = [
    {
      title: "Add Employee",
      description: "Register new employee",
      icon: UserPlus,
      color: "blue"
    },
    {
      title: "Process Payroll",
      description: "Generate monthly payroll",
      icon: DollarSign,
      color: "green"
    },
    {
      title: "Leave Applications",
      description: "Review pending leaves",
      icon: Clock,
      color: "orange"
    },
    {
      title: "Generate Report",
      description: "Export department reports",
      icon: Download,
      color: "purple"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "hover:bg-blue-50 text-blue-700",
      green: "hover:bg-green-50 text-green-700",
      orange: "hover:bg-orange-50 text-orange-700",
      purple: "hover:bg-purple-50 text-purple-700"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <PlusCircle className="h-5 w-5 mr-2 text-blue-600" />
          Quick Actions
        </CardTitle>
        <CardDescription>
          Common tasks and shortcuts
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {actions.map((action, index) => {
          const Icon = action.icon;
          return (
            <Button
              key={index}
              variant="ghost"
              className={`w-full justify-start p-4 h-auto ${getColorClasses(action.color)}`}
            >
              <Icon className="h-5 w-5 mr-3" />
              <div className="text-left">
                <div className="font-medium">{action.title}</div>
                <div className="text-sm text-gray-500">{action.description}</div>
              </div>
            </Button>
          );
        })}
      </CardContent>
    </Card>
  );
};
