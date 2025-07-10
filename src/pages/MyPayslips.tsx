
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AppLayout } from "@/components/layout/AppLayout";
import { Download, Receipt, Eye } from "lucide-react";

const MyPayslips = () => {
  // Mock payslip data
  const payslips = [
    {
      month: "January 2024",
      basicSalary: 50000,
      allowances: 15000,
      deductions: 8000,
      netSalary: 57000,
      date: "2024-01-31"
    },
    {
      month: "December 2023",
      basicSalary: 50000,
      allowances: 15000,
      deductions: 8000,
      netSalary: 57000,
      date: "2023-12-31"
    },
    {
      month: "November 2023",
      basicSalary: 50000,
      allowances: 15000,
      deductions: 8000,
      netSalary: 57000,
      date: "2023-11-30"
    }
  ];

  const currentSalary = payslips[0];

  return (
    <AppLayout>
      <div className="p-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">My Pay Slips</h2>
          <p className="text-gray-600">View and download your salary statements</p>
        </div>

        {/* Current Month Summary */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Receipt className="h-5 w-5 mr-2 text-blue-600" />
              Current Month - {currentSalary.month}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <p className="text-sm text-gray-600">Basic Salary</p>
                <p className="font-semibold text-lg">₹{currentSalary.basicSalary.toLocaleString()}</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600">Allowances</p>
                <p className="font-semibold text-lg text-green-600">+₹{currentSalary.allowances.toLocaleString()}</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600">Deductions</p>
                <p className="font-semibold text-lg text-red-600">-₹{currentSalary.deductions.toLocaleString()}</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600">Net Salary</p>
                <p className="font-bold text-xl text-blue-600">₹{currentSalary.netSalary.toLocaleString()}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Payslip History */}
        <Card>
          <CardHeader>
            <CardTitle>Payslip History</CardTitle>
            <CardDescription>Download your previous salary statements</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {payslips.map((payslip, index) => (
                <div key={index} className="flex justify-between items-center p-4 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <Receipt className="h-8 w-8 text-blue-600" />
                    <div>
                      <h3 className="font-medium">{payslip.month}</h3>
                      <p className="text-sm text-gray-600">Generated on {payslip.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <p className="font-semibold">₹{payslip.netSalary.toLocaleString()}</p>
                      <p className="text-sm text-gray-600">Net Pay</p>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-1" />
                        Download
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default MyPayslips;
