
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AppLayout } from "@/components/layout/AppLayout";
import { DashboardStats } from "@/components/dashboard/DashboardStats";
import { AttendanceChart } from "@/components/dashboard/AttendanceChart";
import { RecentActivities } from "@/components/dashboard/RecentActivities";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { PayrollOverview } from "@/components/dashboard/PayrollOverview";
import { useNavigate } from "react-router-dom";
import { Users, Calendar, Award, DollarSign, Package, MessageSquare, BarChart3, TrendingUp } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const quickAccessCards = [
    {
      title: "Employee Management",
      description: "Manage employee records, service books, and promotions",
      icon: Users,
      path: "/employees",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      title: "Attendance & Time",
      description: "Track attendance, shifts, and overtime",
      icon: Calendar,
      path: "/attendance",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      iconColor: "text-green-600"
    },
    {
      title: "Performance (APAR)",
      description: "Annual performance assessments and reviews",
      icon: Award,
      path: "/performance",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600"
    },
    {
      title: "Payroll & Finance",
      description: "Salary management, TDS, and benefits",
      icon: DollarSign,
      path: "/payroll",
      color: "from-emerald-500 to-emerald-600",
      bgColor: "bg-emerald-50",
      iconColor: "text-emerald-600"
    },
    {
      title: "Asset Management",
      description: "Track and manage organizational assets",
      icon: Package,
      path: "/assets",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600"
    },
    {
      title: "Reports & Analytics",
      description: "Comprehensive reporting and insights",
      icon: BarChart3,
      path: "/reports",
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
      iconColor: "text-indigo-600"
    }
  ];

  return (
    <AppLayout>
      <div className="space-y-8">
        {/* Dashboard Stats */}
        <DashboardStats />

        {/* Quick Access Cards */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Access</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickAccessCards.map((card) => (
              <Card 
                key={card.path} 
                className="cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-0 shadow-md"
                onClick={() => navigate(card.path)}
              >
                <CardHeader className={`${card.bgColor} border-b`}>
                  <div className="flex items-center">
                    <div className={`p-3 rounded-lg bg-white shadow-sm`}>
                      <card.icon className={`h-6 w-6 ${card.iconColor}`} />
                    </div>
                    <div className="ml-4">
                      <CardTitle className="text-gray-900 text-lg">{card.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {card.description}
                  </CardDescription>
                  <Button 
                    variant="ghost" 
                    className={`mt-4 w-full ${card.iconColor} hover:bg-gray-50`}
                  >
                    Access Module
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <QuickActions />

        {/* Charts and Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <AttendanceChart />
          <PayrollOverview />
        </div>

        {/* Recent Activities */}
        <RecentActivities />
      </div>
    </AppLayout>
  );
};

export default Index;
