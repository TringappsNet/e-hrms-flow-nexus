
import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CreditCard, Calculator, FileText, Plus, Search, Download } from "lucide-react";

const TaxManagement = () => {
  const taxRecords = [
    { id: "TAX001", employeeId: "E12345", name: "John Doe", financialYear: "2024-25", grossIncome: "₹12,00,000", taxableIncome: "₹10,50,000", tdsDeducted: "₹85,000", taxDue: "₹0", status: "Compliant" },
    { id: "TAX002", employeeId: "E12346", name: "Jane Smith", financialYear: "2024-25", grossIncome: "₹8,50,000", taxableIncome: "₹7,20,000", tdsDeducted: "₹45,000", taxDue: "₹8,000", status: "Pending" },
    { id: "TAX003", employeeId: "E12347", name: "Bob Johnson", financialYear: "2024-25", grossIncome: "₹6,00,000", taxableIncome: "₹4,80,000", tdsDeducted: "₹15,000", taxDue: "₹0", status: "Compliant" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Compliant": return "bg-green-100 text-green-800";
      case "Pending": return "bg-yellow-100 text-yellow-800";
      case "Overdue": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">TDS & Tax Management</h1>
            <p className="text-gray-600 mt-2">Manage tax deductions and compliance</p>
          </div>
          <Button className="bg-gray-900 hover:bg-gray-800 text-white">
            <Plus className="h-4 w-4 mr-2" />
            Calculate TDS
          </Button>
        </div>

        <Tabs defaultValue="tax-records" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="tax-records">Tax Records</TabsTrigger>
            <TabsTrigger value="tds-calculation">TDS Calculation</TabsTrigger>
            <TabsTrigger value="form16">Form 16</TabsTrigger>
            <TabsTrigger value="declarations">Declarations</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="tax-records" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <CreditCard className="h-8 w-8 text-blue-600" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Total TDS</p>
                      <p className="text-2xl font-bold">₹28.5L</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <Calculator className="h-8 w-8 text-green-600" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Tax Compliant</p>
                      <p className="text-2xl font-bold">142</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <FileText className="h-8 w-8 text-orange-600" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Pending Returns</p>
                      <p className="text-2xl font-bold">8</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <CreditCard className="h-8 w-8 text-purple-600" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">This Quarter</p>
                      <p className="text-2xl font-bold">₹7.2L</p>
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
                      <CreditCard className="h-5 w-5 mr-2 text-blue-600" />
                      Employee Tax Records
                    </CardTitle>
                    <CardDescription>Track tax deductions and compliance status</CardDescription>
                  </div>
                  <div className="flex space-x-2">
                    <Select>
                      <SelectTrigger className="w-40">
                        <SelectValue placeholder="Financial Year" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2024-25">2024-25</SelectItem>
                        <SelectItem value="2023-24">2023-24</SelectItem>
                        <SelectItem value="2022-23">2022-23</SelectItem>
                      </SelectContent>
                    </Select>
                    <div className="relative">
                      <Search className="h-4 w-4 absolute left-3 top-3 text-gray-400" />
                      <Input placeholder="Search employee..." className="pl-10 w-64" />
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
                      <TableHead>Tax ID</TableHead>
                      <TableHead>Employee</TableHead>
                      <TableHead>Financial Year</TableHead>
                      <TableHead>Gross Income</TableHead>
                      <TableHead>Taxable Income</TableHead>
                      <TableHead>TDS Deducted</TableHead>
                      <TableHead>Tax Due</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {taxRecords.map((record) => (
                      <TableRow key={record.id}>
                        <TableCell className="font-medium">{record.id}</TableCell>
                        <TableCell>
                          <div>
                            <div className="font-medium">{record.name}</div>
                            <div className="text-sm text-gray-500">{record.employeeId}</div>
                          </div>
                        </TableCell>
                        <TableCell>{record.financialYear}</TableCell>
                        <TableCell className="font-medium">{record.grossIncome}</TableCell>
                        <TableCell>{record.taxableIncome}</TableCell>
                        <TableCell className="text-blue-600">{record.tdsDeducted}</TableCell>
                        <TableCell className={record.taxDue === "₹0" ? "text-green-600" : "text-red-600"}>{record.taxDue}</TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(record.status)}>
                            {record.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">View</Button>
                            <Button variant="outline" size="sm">Form 16</Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tds-calculation" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>TDS Calculation</CardTitle>
                <CardDescription>Calculate tax deductions for employees</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="employee">Employee</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select employee" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="E12345">John Doe (E12345)</SelectItem>
                        <SelectItem value="E12346">Jane Smith (E12346)</SelectItem>
                        <SelectItem value="E12347">Bob Johnson (E12347)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="financial-year">Financial Year</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select financial year" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2024-25">2024-25</SelectItem>
                        <SelectItem value="2023-24">2023-24</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="gross-salary">Gross Annual Salary</Label>
                    <Input id="gross-salary" placeholder="Enter gross salary" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="hra-exemption">HRA Exemption</Label>
                    <Input id="hra-exemption" placeholder="Enter HRA exemption" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="section-80c">Section 80C Deductions</Label>
                    <Input id="section-80c" placeholder="Enter 80C deductions" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="other-deductions">Other Deductions</Label>
                    <Input id="other-deductions" placeholder="Enter other deductions" />
                  </div>
                </div>
                
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-medium mb-3">Tax Calculation Summary</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">Taxable Income:</span>
                      <span className="font-medium ml-2">₹10,50,000</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Tax Liability:</span>
                      <span className="font-medium ml-2">₹85,000</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Monthly TDS:</span>
                      <span className="font-medium ml-2">₹7,083</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Effective Rate:</span>
                      <span className="font-medium ml-2">8.1%</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <Button className="bg-gray-900 hover:bg-gray-800 text-white">Calculate TDS</Button>
                  <Button variant="outline">Save Calculation</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="form16" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Form 16 Generation</CardTitle>
                <CardDescription>Generate and manage Form 16 certificates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card>
                      <CardContent className="p-4">
                        <div className="text-center">
                          <h3 className="font-medium">Generated</h3>
                          <p className="text-2xl font-bold text-green-600">145</p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4">
                        <div className="text-center">
                          <h3 className="font-medium">Pending</h3>
                          <p className="text-2xl font-bold text-orange-600">5</p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4">
                        <div className="text-center">
                          <h3 className="font-medium">Downloaded</h3>
                          <p className="text-2xl font-bold text-blue-600">132</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button className="bg-gray-900 hover:bg-gray-800 text-white">
                      <FileText className="h-4 w-4 mr-2" />
                      Generate All Form 16
                    </Button>
                    <Button variant="outline">
                      Bulk Download
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="declarations" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Tax Declarations</CardTitle>
                <CardDescription>Employee tax saving declarations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-medium">Section 80C Declarations</h3>
                        <p className="text-sm text-gray-600">EPF, PPF, Life Insurance, etc.</p>
                      </div>
                      <div className="text-right">
                        <span className="text-sm text-gray-600">Submitted:</span>
                        <span className="font-medium ml-2">142/150</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 border rounded-lg">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-medium">HRA Declarations</h3>
                        <p className="text-sm text-gray-600">House rent receipts and proofs</p>
                      </div>
                      <div className="text-right">
                        <span className="text-sm text-gray-600">Submitted:</span>
                        <span className="font-medium ml-2">98/120</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 border rounded-lg">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-medium">Medical Insurance</h3>
                        <p className="text-sm text-gray-600">Section 80D declarations</p>
                      </div>
                      <div className="text-right">
                        <span className="text-sm text-gray-600">Submitted:</span>
                        <span className="font-medium ml-2">85/150</span>
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
                  <CardTitle>Tax Compliance Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Timely Filings:</span>
                      <span className="font-bold text-green-600">94.7%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>TDS Accuracy:</span>
                      <span className="font-bold text-green-600">98.2%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Form 16 Delivery:</span>
                      <span className="font-bold text-green-600">96.8%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Declaration Rate:</span>
                      <span className="font-bold text-orange-600">89.3%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Tax Slab Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>0% Tax Slab:</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <div className="bg-green-600 h-2 rounded-full" style={{width: '25%'}}></div>
                        </div>
                        <span className="text-sm font-medium">25%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>5% Tax Slab:</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full" style={{width: '35%'}}></div>
                        </div>
                        <span className="text-sm font-medium">35%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>20% Tax Slab:</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <div className="bg-orange-600 h-2 rounded-full" style={{width: '30%'}}></div>
                        </div>
                        <span className="text-sm font-medium">30%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>30% Tax Slab:</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <div className="bg-red-600 h-2 rounded-full" style={{width: '10%'}}></div>
                        </div>
                        <span className="text-sm font-medium">10%</span>
                      </div>
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

export default TaxManagement;
