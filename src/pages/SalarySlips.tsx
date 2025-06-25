
import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Receipt, Download, Mail, Calendar, Search, FileText } from "lucide-react";

const SalarySlips = () => {
  const salarySlips = [
    { id: "PAY001", employeeId: "E12345", name: "John Doe", month: "November 2024", basicPay: "₹45,000", gross: "₹84,500", deductions: "₹12,500", netPay: "₹72,000", status: "Generated" },
    { id: "PAY002", employeeId: "E12346", name: "Jane Smith", month: "November 2024", basicPay: "₹35,000", gross: "₹65,500", deductions: "₹9,800", netPay: "₹55,700", status: "Generated" },
    { id: "PAY003", employeeId: "E12347", name: "Bob Johnson", month: "November 2024", basicPay: "₹25,000", gross: "₹46,500", deductions: "₹7,200", netPay: "₹39,300", status: "Pending" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Generated": return "bg-green-100 text-green-800";
      case "Pending": return "bg-yellow-100 text-yellow-800";
      case "Sent": return "bg-blue-100 text-blue-800";
      case "Error": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Salary Slips Management</h1>
            <p className="text-gray-600 mt-2">Generate and manage employee salary slips</p>
          </div>
          <Button className="bg-gray-900 hover:bg-gray-800 text-white">
            <FileText className="h-4 w-4 mr-2" />
            Generate Bulk Slips
          </Button>
        </div>

        <Tabs defaultValue="salary-slips" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="salary-slips">Salary Slips</TabsTrigger>
            <TabsTrigger value="generate">Generate Slips</TabsTrigger>
            <TabsTrigger value="distribution">Distribution</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="salary-slips" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <Receipt className="h-8 w-8 text-blue-600" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Total Slips</p>
                      <p className="text-2xl font-bold">456</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <FileText className="h-8 w-8 text-green-600" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">This Month</p>
                      <p className="text-2xl font-bold">150</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <Mail className="h-8 w-8 text-orange-600" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Sent</p>
                      <p className="text-2xl font-bold">142</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <Calendar className="h-8 w-8 text-purple-600" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Pending</p>
                      <p className="text-2xl font-bold">8</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center">
                      <Receipt className="h-5 w-5 mr-2 text-blue-600" />
                      Employee Salary Slips
                    </CardTitle>
                    <CardDescription>View and manage salary slips</CardDescription>
                  </div>
                  <div className="flex space-x-2">
                    <Select>
                      <SelectTrigger className="w-40">
                        <SelectValue placeholder="Select Month" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2024-11">November 2024</SelectItem>
                        <SelectItem value="2024-10">October 2024</SelectItem>
                        <SelectItem value="2024-09">September 2024</SelectItem>
                      </SelectContent>
                    </Select>
                    <div className="relative">
                      <Search className="h-4 w-4 absolute left-3 top-3 text-gray-400" />
                      <Input placeholder="Search employee..." className="pl-10 w-64" />
                    </div>
                    <Button variant="outline">
                      <Download className="h-4 w-4 mr-2" />
                      Export All
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Slip ID</TableHead>
                      <TableHead>Employee</TableHead>
                      <TableHead>Month</TableHead>
                      <TableHead>Basic Pay</TableHead>
                      <TableHead>Gross Salary</TableHead>
                      <TableHead>Deductions</TableHead>
                      <TableHead>Net Pay</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {salarySlips.map((slip) => (
                      <TableRow key={slip.id}>
                        <TableCell className="font-medium">{slip.id}</TableCell>
                        <TableCell>
                          <div>
                            <div className="font-medium">{slip.name}</div>
                            <div className="text-sm text-gray-500">{slip.employeeId}</div>
                          </div>
                        </TableCell>
                        <TableCell>{slip.month}</TableCell>
                        <TableCell>{slip.basicPay}</TableCell>
                        <TableCell className="font-medium">{slip.gross}</TableCell>
                        <TableCell className="text-red-600">{slip.deductions}</TableCell>
                        <TableCell className="font-bold text-green-600">{slip.netPay}</TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(slip.status)}>
                            {slip.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              <Download className="h-3 w-3 mr-1" />
                              Download
                            </Button>
                            <Button variant="outline" size="sm">
                              <Mail className="h-3 w-3 mr-1" />
                              Send
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="generate" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Generate Salary Slips</CardTitle>
                <CardDescription>Generate salary slips for employees</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="pay-period">Pay Period</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select pay period" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2024-11">November 2024</SelectItem>
                        <SelectItem value="2024-12">December 2024</SelectItem>
                        <SelectItem value="2025-01">January 2025</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="department">Department</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select department" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Departments</SelectItem>
                        <SelectItem value="hr">Human Resources</SelectItem>
                        <SelectItem value="finance">Finance</SelectItem>
                        <SelectItem value="it">Information Technology</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="employee-type">Employee Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select employee type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Employees</SelectItem>
                        <SelectItem value="permanent">Permanent</SelectItem>
                        <SelectItem value="contract">Contract</SelectItem>
                        <SelectItem value="temporary">Temporary</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="format">Output Format</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select format" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pdf">PDF</SelectItem>
                        <SelectItem value="excel">Excel</SelectItem>
                        <SelectItem value="both">Both PDF & Excel</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-medium mb-2">Generation Summary</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">Employees:</span>
                      <span className="font-medium ml-2">150</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Period:</span>
                      <span className="font-medium ml-2">Nov 2024</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Total Gross:</span>
                      <span className="font-medium ml-2">₹87.5L</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Total Net:</span>
                      <span className="font-medium ml-2">₹74.2L</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <Button className="bg-gray-900 hover:bg-gray-800 text-white">Generate Slips</Button>
                  <Button variant="outline">Preview Sample</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="distribution" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="h-5 w-5 mr-2 text-blue-600" />
                  Salary Slip Distribution
                </CardTitle>
                <CardDescription>Send salary slips to employees via email</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card>
                      <CardContent className="p-4">
                        <div className="text-center">
                          <h3 className="font-medium">Pending Distribution</h3>
                          <p className="text-2xl font-bold text-orange-600">8</p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4">
                        <div className="text-center">
                          <h3 className="font-medium">Successfully Sent</h3>
                          <p className="text-2xl font-bold text-green-600">142</p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4">
                        <div className="text-center">
                          <h3 className="font-medium">Failed Delivery</h3>
                          <p className="text-2xl font-bold text-red-600">0</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button className="bg-gray-900 hover:bg-gray-800 text-white">
                      <Mail className="h-4 w-4 mr-2" />
                      Send All Pending
                    </Button>
                    <Button variant="outline">
                      Send Reminders
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Monthly Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Average Processing Time:</span>
                      <span className="font-bold">2.3 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span>On-time Delivery:</span>
                      <span className="font-bold text-green-600">96.7%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Email Success Rate:</span>
                      <span className="font-bold text-green-600">99.2%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Download Rate:</span>
                      <span className="font-bold">87.5%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Department Wise Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>HR Department:</span>
                      <span className="font-bold">25 slips</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Finance Department:</span>
                      <span className="font-bold">35 slips</span>
                    </div>
                    <div className="flex justify-between">
                      <span>IT Department:</span>
                      <span className="font-bold">45 slips</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Operations:</span>
                      <span className="font-bold">45 slips</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
};

export default SalarySlips;
