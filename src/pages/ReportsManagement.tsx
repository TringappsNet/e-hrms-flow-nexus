
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AppLayout } from "@/components/layout/AppLayout";
import { BarChart3, Download, Calendar, Users, DollarSign, FileText, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const ReportsManagement = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("monthly");

  const reportCategories = [
    {
      icon: Users,
      title: "Employee Reports",
      description: "Comprehensive employee analytics and statistics",
      reports: [
        "Employee Headcount Report",
        "Department-wise Distribution",
        "New Joiners Report",
        "Separation Analysis",
        "Service History Report"
      ],
      color: "blue"
    },
    {
      icon: Calendar,
      title: "Attendance Reports",
      description: "Attendance tracking and analysis",
      reports: [
        "Daily Attendance Report",
        "Monthly Attendance Summary",
        "Late Arrival Analysis",
        "Overtime Report",
        "Shift Compliance Report"
      ],
      color: "green"
    },
    {
      icon: DollarSign,
      title: "Payroll Reports",
      description: "Salary and compensation analytics",
      reports: [
        "Monthly Payroll Summary",
        "Department-wise Salary Analysis",
        "Tax Deduction Report",
        "Allowance Distribution",
        "Loan Status Report"
      ],
      color: "purple"
    },
    {
      icon: FileText,
      title: "Leave Reports",
      description: "Leave management and analysis",
      reports: [
        "Leave Balance Report",
        "Leave Utilization Analysis",
        "Department Leave Trends",
        "Leave Application Status",
        "Encashment Report"
      ],
      color: "orange"
    }
  ];

  const quickStats = [
    { label: "Total Employees", value: "1,248", icon: Users, color: "text-blue-600" },
    { label: "Reports Generated", value: "156", icon: BarChart3, color: "text-green-600" },
    { label: "This Month", value: "23", icon: Calendar, color: "text-purple-600" },
    { label: "Pending Reports", value: "5", icon: TrendingUp, color: "text-orange-600" }
  ];

  return (
    <AppLayout>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Reports & Analytics</h2>
          <p className="text-gray-600">Generate comprehensive reports and analyze HR metrics</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {quickStats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Report Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reportCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg bg-${category.color}-100`}>
                    <category.icon className={`h-6 w-6 text-${category.color}-600`} />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {category.reports.map((report, reportIndex) => (
                    <div key={reportIndex} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm font-medium">{report}</span>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Download className="h-3 w-3 mr-1" />
                          Generate
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t">
                  <Button className="w-full" variant="outline">
                    View All {category.title}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Reports */}
        <Card className="mt-8">
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="flex items-center">
                  <BarChart3 className="h-5 w-5 mr-2 text-blue-600" />
                  Recent Reports
                </CardTitle>
                <CardDescription>Recently generated reports and analytics</CardDescription>
              </div>
              <Button>
                <Download className="h-4 w-4 mr-2" />
                Export All
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "Monthly Attendance Report - January 2024", type: "Attendance", date: "2024-01-15", status: "Completed" },
                { name: "Employee Headcount Analysis", type: "Employee", date: "2024-01-14", status: "Completed" },
                { name: "Payroll Summary - December 2023", type: "Payroll", date: "2024-01-10", status: "Completed" },
                { name: "Leave Utilization Report Q4", type: "Leave", date: "2024-01-08", status: "Processing" }
              ].map((report, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium">{report.name}</h4>
                    <div className="flex items-center space-x-4 mt-1">
                      <Badge variant="outline">{report.type}</Badge>
                      <span className="text-sm text-gray-600">{report.date}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge 
                      className={report.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}
                      variant="secondary"
                    >
                      {report.status}
                    </Badge>
                    {report.status === 'Completed' && (
                      <Button variant="outline" size="sm">
                        <Download className="h-3 w-3 mr-1" />
                        Download
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </AppLayout>
  );
};

export default ReportsManagement;
