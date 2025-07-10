
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AppLayout } from "@/components/layout/AppLayout";
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { 
  User, 
  Calendar, 
  FileText, 
  Clock, 
  Award, 
  BookOpen, 
  CreditCard,
  Bell,
  TrendingUp,
  CheckCircle
} from 'lucide-react';

const EmployeeDashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const employeeCards = [
    {
      title: "My Profile",
      description: "View and update your personal information",
      icon: User,
      path: "/my-profile",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      title: "My Attendance",
      description: "Check your attendance records and apply for leave",
      icon: Calendar,
      path: "/my-attendance",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      iconColor: "text-green-600"
    },
    {
      title: "Leave Application",
      description: "Apply for leave and track status",
      icon: FileText,
      path: "/my-leave",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600"
    },
    {
      title: "Pay Slips",
      description: "Download your salary slips and tax documents",
      icon: CreditCard,
      path: "/my-payslips",
      color: "from-emerald-500 to-emerald-600",
      bgColor: "bg-emerald-50",
      iconColor: "text-emerald-600"
    },
    {
      title: "My Performance",
      description: "View your APAR and performance reviews",
      icon: Award,
      path: "/my-performance",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600"
    },
    {
      title: "Training Records",
      description: "View completed and upcoming training programs",
      icon: BookOpen,
      path: "/my-training",
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
      iconColor: "text-indigo-600"
    }
  ];

  const quickStats = [
    { label: "Leave Balance", value: "12 days", icon: Clock, color: "text-blue-600" },
    { label: "Pending Applications", value: "2", icon: Bell, color: "text-orange-600" },
    { label: "Performance Rating", value: "4.5/5", icon: TrendingUp, color: "text-green-600" },
    { label: "Training Completed", value: "8", icon: CheckCircle, color: "text-purple-600" }
  ];

  return (
    <AppLayout>
      <div className="space-y-8">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
          <div className="flex items-center space-x-4">
            <div className="h-16 w-16 bg-white/20 rounded-full flex items-center justify-center">
              <User className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Welcome back, {user?.name}!</h1>
              <p className="text-blue-100 mt-2">
                {user?.position} • {user?.department}
              </p>
              <p className="text-blue-100 text-sm">
                Employee ID: {user?.employeeId}
              </p>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickStats.map((stat, index) => (
            <Card key={index} className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                  </div>
                  <div className={`p-3 rounded-lg bg-gray-50`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Employee Services */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">My Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {employeeCards.map((card) => (
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
                    Access Service
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Activities */}
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Bell className="h-5 w-5" />
              <span>Recent Activities</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900">Leave Application Approved</p>
                  <p className="text-sm text-gray-600">Your casual leave for Dec 25-26 has been approved</p>
                  <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                <Award className="h-5 w-5 text-green-600 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900">Training Completed</p>
                  <p className="text-sm text-gray-600">Successfully completed "Digital Security Awareness" training</p>
                  <p className="text-xs text-gray-500 mt-1">1 day ago</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-3 bg-orange-50 rounded-lg">
                <FileText className="h-5 w-5 text-orange-600 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900">New Pay Slip Available</p>
                  <p className="text-sm text-gray-600">December 2024 salary slip is now available for download</p>
                  <p className="text-xs text-gray-500 mt-1">3 days ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default EmployeeDashboard;
