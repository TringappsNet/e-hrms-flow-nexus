
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Users,
  UserCheck,
  Calendar,
  DollarSign,
  FileText,
  Settings,
  Bell,
  TrendingUp,
  Clock,
  AlertCircle,
  CheckCircle,
  BarChart3,
  PlusCircle,
  Download,
  Search
} from "lucide-react";
import { DashboardStats } from "@/components/dashboard/DashboardStats";
import { RecentActivities } from "@/components/dashboard/RecentActivities";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { AttendanceChart } from "@/components/dashboard/AttendanceChart";
import { PayrollOverview } from "@/components/dashboard/PayrollOverview";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <FileText className="h-8 w-8 text-blue-600" />
                <h1 className="text-2xl font-bold text-gray-900">E-HRMS</h1>
              </div>
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                Government Edition
              </Badge>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
              <Button variant="ghost" size="sm">
                <Bell className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome to E-HRMS Dashboard
          </h2>
          <p className="text-gray-600">
            Comprehensive Human Resource Management System for Government Organizations
          </p>
        </div>

        {/* Dashboard Stats */}
        <DashboardStats />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Left Column - Quick Actions & Attendance */}
          <div className="lg:col-span-1 space-y-6">
            <QuickActions />
            <AttendanceChart />
          </div>

          {/* Right Column - Recent Activities & Payroll */}
          <div className="lg:col-span-2 space-y-6">
            <RecentActivities />
            <PayrollOverview />
          </div>
        </div>

        {/* Module Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="hover:shadow-lg transition-shadow duration-200 border-l-4 border-l-blue-500">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <Users className="h-8 w-8 text-blue-600" />
                <Badge variant="outline">Active</Badge>
              </div>
              <CardTitle className="text-lg">Employee Management</CardTitle>
              <CardDescription>
                Manage employee profiles, service records, and organizational structure
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" variant="outline">
                Access Module
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-200 border-l-4 border-l-green-500">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <UserCheck className="h-8 w-8 text-green-600" />
                <Badge variant="outline">Live</Badge>
              </div>
              <CardTitle className="text-lg">Attendance & Leave</CardTitle>
              <CardDescription>
                Track attendance, manage shifts, and process leave applications
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" variant="outline">
                Access Module
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-200 border-l-4 border-l-purple-500">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <DollarSign className="h-8 w-8 text-purple-600" />
                <Badge variant="outline">Processing</Badge>
              </div>
              <CardTitle className="text-lg">Payroll Management</CardTitle>
              <CardDescription>
                Process salaries, manage allowances, and handle reimbursements
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" variant="outline">
                Access Module
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-200 border-l-4 border-l-orange-500">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <BarChart3 className="h-8 w-8 text-orange-600" />
                <Badge variant="outline">Analytics</Badge>
              </div>
              <CardTitle className="text-lg">Reports & Analytics</CardTitle>
              <CardDescription>
                Generate comprehensive reports and analyze HR metrics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" variant="outline">
                Access Module
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Index;
