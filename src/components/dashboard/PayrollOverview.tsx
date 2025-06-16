
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { DollarSign, TrendingUp, Calendar, CheckCircle } from "lucide-react";

export const PayrollOverview = () => {
  const payrollData = {
    currentMonth: "March 2024",
    totalAmount: "₹24,56,78,900",
    processed: 11845,
    pending: 1002,
    totalEmployees: 12847,
    status: "In Progress"
  };

  const processedPercentage = (payrollData.processed / payrollData.totalEmployees) * 100;

  const payrollStats = [
    {
      label: "Basic Salary",
      amount: "₹18,45,67,200",
      percentage: 75
    },
    {
      label: "Allowances",
      amount: "₹4,92,11,700",
      percentage: 20
    },
    {
      label: "Deductions",
      amount: "₹1,23,00,000",
      percentage: 5
    }
  ];

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center">
              <DollarSign className="h-5 w-5 mr-2 text-green-600" />
              Payroll Overview
            </CardTitle>
            <CardDescription>
              {payrollData.currentMonth} processing status
            </CardDescription>
          </div>
          <Badge variant="outline" className="bg-blue-50 text-blue-700">
            {payrollData.status}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Total Amount */}
        <div className="text-center p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg">
          <p className="text-sm text-gray-600 mb-1">Total Payroll Amount</p>
          <p className="text-3xl font-bold text-gray-900">{payrollData.totalAmount}</p>
          <div className="flex items-center justify-center mt-2">
            <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
            <span className="text-sm text-green-600 font-medium">+3.2% from last month</span>
          </div>
        </div>

        {/* Processing Progress */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-gray-700">Processing Progress</span>
            <span className="text-sm font-bold text-blue-600">
              {payrollData.processed.toLocaleString()} / {payrollData.totalEmployees.toLocaleString()} 
              ({processedPercentage.toFixed(1)}%)
            </span>
          </div>
          <Progress value={processedPercentage} className="h-3" />
          <div className="flex justify-between text-xs text-gray-500">
            <span>Processed: {payrollData.processed.toLocaleString()}</span>
            <span>Pending: {payrollData.pending.toLocaleString()}</span>
          </div>
        </div>

        {/* Payroll Breakdown */}
        <div className="space-y-4">
          <h4 className="font-medium text-gray-900">Payroll Breakdown</h4>
          {payrollStats.map((stat, index) => (
            <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="text-sm font-medium text-gray-700">{stat.label}</p>
                <p className="text-lg font-bold text-gray-900">{stat.amount}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600">{stat.percentage}%</p>
                <div className="w-16 h-2 bg-gray-200 rounded-full mt-1">
                  <div 
                    className="h-2 bg-blue-500 rounded-full" 
                    style={{ width: `${stat.percentage}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="flex gap-2 pt-4 border-t">
          <div className="flex items-center text-xs text-gray-500">
            <CheckCircle className="h-3 w-3 text-green-500 mr-1" />
            Auto-processed: 89%
          </div>
          <div className="flex items-center text-xs text-gray-500">
            <Calendar className="h-3 w-3 text-blue-500 mr-1" />
            Next run: April 1st
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
