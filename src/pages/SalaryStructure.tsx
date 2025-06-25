
import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Calculator, DollarSign, TrendingUp, Plus, Search, Download } from "lucide-react";

const SalaryStructure = () => {
  const salaryStructures = [
    { id: "SS001", grade: "Grade A", level: "A1", basicPay: "₹45,000", hra: "₹18,000", da: "₹13,500", allowances: "₹8,000", gross: "₹84,500", status: "Active" },
    { id: "SS002", grade: "Grade B", level: "B1", basicPay: "₹35,000", hra: "₹14,000", da: "₹10,500", allowances: "₹6,000", gross: "₹65,500", status: "Active" },
    { id: "SS003", grade: "Grade C", level: "C1", basicPay: "₹25,000", hra: "₹10,000", da: "₹7,500", allowances: "₹4,000", gross: "₹46,500", status: "Active" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "bg-green-100 text-green-800";
      case "Inactive": return "bg-red-100 text-red-800";
      case "Draft": return "bg-yellow-100 text-yellow-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Salary Structure Management</h1>
            <p className="text-gray-600 mt-2">Define and manage salary structures and pay scales</p>
          </div>
          <Button className="bg-gray-900 hover:bg-gray-800 text-white">
            <Plus className="h-4 w-4 mr-2" />
            Create New Structure
          </Button>
        </div>

        <Tabs defaultValue="structures" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="structures">Salary Structures</TabsTrigger>
            <TabsTrigger value="grades">Grade Management</TabsTrigger>
            <TabsTrigger value="components">Pay Components</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="structures" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <Calculator className="h-8 w-8 text-blue-600" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Total Structures</p>
                      <p className="text-2xl font-bold">15</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <DollarSign className="h-8 w-8 text-green-600" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Active Structures</p>
                      <p className="text-2xl font-bold">12</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <TrendingUp className="h-8 w-8 text-orange-600" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Avg Basic Pay</p>
                      <p className="text-2xl font-bold">₹35K</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <Calculator className="h-8 w-8 text-purple-600" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Pay Bands</p>
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
                      <Calculator className="h-5 w-5 mr-2 text-blue-600" />
                      Salary Structures
                    </CardTitle>
                    <CardDescription>Manage salary structures and pay scales</CardDescription>
                  </div>
                  <div className="flex space-x-2">
                    <div className="relative">
                      <Search className="h-4 w-4 absolute left-3 top-3 text-gray-400" />
                      <Input placeholder="Search structures..." className="pl-10 w-64" />
                    </div>
                    <Button variant="outline">
                      <Download className="h-4 w-4 mr-2" />
                      Export
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Structure ID</TableHead>
                      <TableHead>Grade & Level</TableHead>
                      <TableHead>Basic Pay</TableHead>
                      <TableHead>HRA</TableHead>
                      <TableHead>DA</TableHead>
                      <TableHead>Allowances</TableHead>
                      <TableHead>Gross Salary</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {salaryStructures.map((structure) => (
                      <TableRow key={structure.id}>
                        <TableCell className="font-medium">{structure.id}</TableCell>
                        <TableCell>
                          <div>
                            <div className="font-medium">{structure.grade}</div>
                            <div className="text-sm text-gray-500">{structure.level}</div>
                          </div>
                        </TableCell>
                        <TableCell className="font-medium">{structure.basicPay}</TableCell>
                        <TableCell>{structure.hra}</TableCell>
                        <TableCell>{structure.da}</TableCell>
                        <TableCell>{structure.allowances}</TableCell>
                        <TableCell className="font-bold text-green-600">{structure.gross}</TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(structure.status)}>
                            {structure.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">Edit</Button>
                            <Button variant="outline" size="sm">View</Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="grades" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Grade Management</CardTitle>
                <CardDescription>Manage employee grades and levels</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Grade A</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Levels:</span>
                          <span className="font-medium">A1, A2, A3</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Pay Range:</span>
                          <span className="font-medium">₹40K - ₹60K</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Employees:</span>
                          <span className="font-medium">45</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Grade B</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Levels:</span>
                          <span className="font-medium">B1, B2, B3</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Pay Range:</span>
                          <span className="font-medium">₹30K - ₹45K</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Employees:</span>
                          <span className="font-medium">62</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="components" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Pay Components Configuration</CardTitle>
                <CardDescription>Define and manage salary components</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-medium mb-4">Allowances</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between p-3 border rounded">
                        <span>House Rent Allowance (HRA)</span>
                        <span className="font-medium">40% of Basic</span>
                      </div>
                      <div className="flex justify-between p-3 border rounded">
                        <span>Dearness Allowance (DA)</span>
                        <span className="font-medium">30% of Basic</span>
                      </div>
                      <div className="flex justify-between p-3 border rounded">
                        <span>Medical Allowance</span>
                        <span className="font-medium">₹2,000</span>
                      </div>
                      <div className="flex justify-between p-3 border rounded">
                        <span>Transport Allowance</span>
                        <span className="font-medium">₹1,600</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-4">Deductions</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between p-3 border rounded">
                        <span>Provident Fund (PF)</span>
                        <span className="font-medium">12% of Basic</span>
                      </div>
                      <div className="flex justify-between p-3 border rounded">
                        <span>Employee State Insurance (ESI)</span>
                        <span className="font-medium">0.75% of Gross</span>
                      </div>
                      <div className="flex justify-between p-3 border rounded">
                        <span>Professional Tax</span>
                        <span className="font-medium">₹200</span>
                      </div>
                      <div className="flex justify-between p-3 border rounded">
                        <span>Income Tax (TDS)</span>
                        <span className="font-medium">As per slab</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Pay Distribution by Grade</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Grade A:</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full" style={{width: '35%'}}></div>
                        </div>
                        <span className="text-sm font-medium">35%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Grade B:</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <div className="bg-green-600 h-2 rounded-full" style={{width: '40%'}}></div>
                        </div>
                        <span className="text-sm font-medium">40%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Grade C:</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <div className="bg-orange-600 h-2 rounded-full" style={{width: '25%'}}></div>
                        </div>
                        <span className="text-sm font-medium">25%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Salary Statistics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Average Gross Salary:</span>
                      <span className="font-bold">₹58,500</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Median Salary:</span>
                      <span className="font-bold">₹52,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Highest Salary:</span>
                      <span className="font-bold">₹95,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Total Payroll:</span>
                      <span className="font-bold">₹87.5L</span>
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

export default SalaryStructure;
