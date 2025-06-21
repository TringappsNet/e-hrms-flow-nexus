import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { AppLayout } from "@/components/layout/AppLayout";
import { DollarSign, Plus, Search, Filter, Eye, Download, Calculator, Clock } from "lucide-react";

const PayrollManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const payrollData = [
    {
      id: "PAY001",
      employeeId: "EMP001",
      employeeName: "John Doe",
      department: "Engineering",
      basicSalary: 50000,
      allowances: 15000,
      deductions: 8000,
      netSalary: 57000,
      month: "January 2024",
      status: "Processed"
    },
    {
      id: "PAY002",
      employeeId: "EMP002", 
      employeeName: "Jane Smith",
      department: "HR",
      basicSalary: 45000,
      allowances: 12000,
      deductions: 7000,
      netSalary: 50000,
      month: "January 2024",
      status: "Pending"
    },
    {
      id: "PAY003",
      employeeId: "EMP003",
      employeeName: "Mike Johnson",
      department: "Finance",
      basicSalary: 55000,
      allowances: 18000,
      deductions: 9000,
      netSalary: 64000,
      month: "January 2024",
      status: "Processed"
    }
  ];

  const filteredPayroll = payrollData.filter(payroll =>
    payroll.employeeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    payroll.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
    payroll.employeeId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusBadge = (status: string) => {
    const statusColors = {
      'Processed': 'bg-green-100 text-green-800',
      'Pending': 'bg-yellow-100 text-yellow-800',
      'Failed': 'bg-red-100 text-red-800'
    };
    return statusColors[status as keyof typeof statusColors] || 'bg-gray-100 text-gray-800';
  };

  const totalPayroll = filteredPayroll.reduce((sum, payroll) => sum + payroll.netSalary, 0);

  return (
    <AppLayout>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Payroll Management</h2>
          <p className="text-gray-600">Manage employee salaries and payroll processing</p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <DollarSign className="h-8 w-8 text-green-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Payroll</p>
                  <p className="text-2xl font-bold text-gray-900">₹{totalPayroll.toLocaleString()}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Calculator className="h-8 w-8 text-blue-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Processed</p>
                  <p className="text-2xl font-bold text-gray-900">{payrollData.filter(p => p.status === 'Processed').length}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Clock className="h-8 w-8 text-yellow-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Pending</p>
                  <p className="text-2xl font-bold text-gray-900">{payrollData.filter(p => p.status === 'Pending').length}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Download className="h-8 w-8 text-purple-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Reports</p>
                  <p className="text-2xl font-bold text-gray-900">12</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="flex items-center">
                  <DollarSign className="h-5 w-5 mr-2 text-blue-600" />
                  Payroll Records
                </CardTitle>
                <CardDescription>Monthly salary processing and records</CardDescription>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline">
                  <Calculator className="h-4 w-4 mr-2" />
                  Process Payroll
                </Button>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Generate Payslip
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-4 mb-6">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search payroll records..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full table-auto">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">Employee</th>
                    <th className="text-left py-3 px-4">Department</th>
                    <th className="text-left py-3 px-4">Basic Salary</th>
                    <th className="text-left py-3 px-4">Allowances</th>
                    <th className="text-left py-3 px-4">Deductions</th>
                    <th className="text-left py-3 px-4">Net Salary</th>
                    <th className="text-left py-3 px-4">Month</th>
                    <th className="text-left py-3 px-4">Status</th>
                    <th className="text-left py-3 px-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredPayroll.map((payroll) => (
                    <tr key={payroll.id} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4">
                        <div>
                          <div className="font-medium">{payroll.employeeName}</div>
                          <div className="text-sm text-gray-500">{payroll.employeeId}</div>
                        </div>
                      </td>
                      <td className="py-3 px-4">{payroll.department}</td>
                      <td className="py-3 px-4">₹{payroll.basicSalary.toLocaleString()}</td>
                      <td className="py-3 px-4">₹{payroll.allowances.toLocaleString()}</td>
                      <td className="py-3 px-4">₹{payroll.deductions.toLocaleString()}</td>
                      <td className="py-3 px-4 font-semibold">₹{payroll.netSalary.toLocaleString()}</td>
                      <td className="py-3 px-4">{payroll.month}</td>
                      <td className="py-3 px-4">
                        <Badge className={getStatusBadge(payroll.status)} variant="secondary">
                          {payroll.status}
                        </Badge>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <Eye className="h-3 w-3 mr-1" />
                            View
                          </Button>
                          <Button variant="outline" size="sm">
                            <Download className="h-3 w-3 mr-1" />
                            Payslip
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </main>
    </AppLayout>
  );
};

export default PayrollManagement;
