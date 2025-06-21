
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AppLayout } from "@/components/layout/AppLayout";
import { DashboardStats } from "@/components/dashboard/DashboardStats";
import { AttendanceChart } from "@/components/dashboard/AttendanceChart";
import { RecentActivities } from "@/components/dashboard/RecentActivities";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { PayrollOverview } from "@/components/dashboard/PayrollOverview";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <AppLayout>
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Welcome to E-HRMS Portal
          </h1>
          <p className="text-gray-600 text-lg">
            Comprehensive Human Resource Management System for Government Departments
          </p>
        </div>

        <div className="grid gap-6">
          {/* Dashboard Stats */}
          <DashboardStats />

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
      </div>
    </AppLayout>
  );
};

export default Index;
