
import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Building, Calculator, FileText, Plus, Search, Download } from "lucide-react";

const FinalSettlement = () => {
  const settlements = [
    { id: "FS001", employeeId: "E12345", name: "John Doe", exitDate: "2024-12-31", lastWorkingDay: "2024-12-30", finalPay: "₹2,45,000", pf: "₹1,25,000", gratuity: "₹85,000", status: "Processing" },
    { id: "FS002", employeeId: "E12346", name: "Jane Smith", exitDate: "2024-11-30", lastWorkingDay: "2024-11-29", finalPay: "₹1,85,000", pf: "₹95,000", gratuity: "₹65,000", status: "Completed" },
    { id: "FS003", employeeId: "E12347", name: "Bob Johnson", exitDate: "2025-01-15", lastWorkingDay: "2025-01-14", finalPay: "₹3,25,000", pf: "₹1,85,000", gratuity: "₹1,25,000", status: "Pending" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "bg-green-100 text-green-800";
      case "Processing": return "bg-blue-100 text-blue-800";
      case "Pending": return "bg-yellow-100 text-yellow-800";
      case "On Hold": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Final Settlement Management</h1>
            <p className="text-gray-600 mt-2">Process final settlements for exiting employees</p>
          </div>
          <Button className="bg-gray-900 hover:bg-gray-800 text-white">
            <Plus className="h-4 w-4 mr-2" />
            New Settlement
          </Button>
        </div>

        <Tabs defaultValue="settlements" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="settlements">Settlements</TabsTrigger>
            <TabsTrigger value="new-settlement">New Settlement</TabsTrigger>
            <TabsTrigger value="calculations">Calculations</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="settlements" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <Building className="h-8 w-8 text-blue-600" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Total Settlements</p>
                      <p className="text-2xl font-bold">45</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <Calculator className="h-8 w-8 text-green-600" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Amount Disbursed</p>
                      <p className="text-2xl font-bold">₹1.2Cr</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <FileText className="h-8 w-8 text-orange-600" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Processing</p>
                      <p className="text-2xl font-bold">8</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <Building className="h-8 w-8 text-purple-600" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">This Month</p>
                      <p className="text-2xl font-bold">12</p>
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
                      <Building className="h-5 w-5 mr-2 text-blue-600" />
                      Final Settlements
                    </CardTitle>
                    <CardDescription>Track and process employee final settlements</CardDescription>
                  </div>
                  <div className="flex space-x-2">
                    <div className="relative">
                      <Search className="h-4 w-4 absolute left-3 top-3 text-gray-400" />
                      <Input placeholder="Search settlements..." className="pl-10 w-64" />
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
                      <TableHead>Settlement ID</TableHead>
                      <TableHead>Employee</TableHead>
                      <TableHead>Exit Date</TableHead>
                      <TableHead>Final Pay</TableHead>
                      <TableHead>PF Amount</TableHead>
                      <TableHead>Gratuity</TableHead>
                      <TableHead>Total Amount</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {settlements.map((settlement) => {
                      const totalAmount = parseInt(settlement.finalPay.replace(/[₹,]/g, '')) + 
                                         parseInt(settlement.pf.replace(/[₹,]/g, '')) + 
                                         parseInt(settlement.gratuity.replace(/[₹,]/g, ''));
                      return (
                        <TableRow key={settlement.id}>
                          <TableCell className="font-medium">{settlement.id}</TableCell>
                          <TableCell>
                            <div>
                              <div className="font-medium">{settlement.name}</div>
                              <div className="text-sm text-gray-500">{settlement.employeeId}</div>
                            </div>
                          </TableCell>
                          <TableCell>{settlement.exitDate}</TableCell>
                          <TableCell>{settlement.finalPay}</TableCell>
                          <TableCell>{settlement.pf}</TableCell>
                          <TableCell>{settlement.gratuity}</TableCell>
                          <TableCell className="font-bold text-green-600">₹{totalAmount.toLocaleString()}</TableCell>
                          <TableCell>
                            <Badge className={getStatusColor(settlement.status)}>
                              {settlement.status}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <Button variant="outline" size="sm">View</Button>
                              <Button variant="outline" size="sm">Process</Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="new-settlement" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>New Final Settlement</CardTitle>
                <CardDescription>Initiate final settlement for exiting employee</CardDescription>
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
                    <Label htmlFor="exit-type">Exit Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select exit type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="retirement">Retirement</SelectItem>
                        <SelectItem value="resignation">Resignation</SelectItem>
                        <SelectItem value="termination">Termination</SelectItem>
                        <SelectItem value="transfer">Transfer</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-working-day">Last Working Day</Label>
                    <Input type="date" id="last-working-day" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="notice-period">Notice Period Served</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select notice period" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="full">Full Notice Period</SelectItem>
                        <SelectItem value="partial">Partial Notice Period</SelectItem>
                        <SelectItem value="buyout">Notice Period Buyout</SelectItem>
                        <SelectItem value="waived">Notice Period Waived</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-medium mb-3">Eligibility Check</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">Service Period:</span>
                      <span className="font-medium ml-2">5 years 3 months</span>
                    </div>
                    <div>
                      <span className="text-gray-600">PF Eligible:</span>
                      <span className="font-medium ml-2 text-green-600">Yes</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Gratuity Eligible:</span>
                      <span className="font-medium ml-2 text-green-600">Yes</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Leave Balance:</span>
                      <span className="font-medium ml-2">25 days</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <Button className="bg-gray-900 hover:bg-gray-800 text-white">Initiate Settlement</Button>
                  <Button variant="outline">Calculate Preview</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="calculations" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calculator className="h-5 w-5 mr-2 text-blue-600" />
                  Settlement Calculations
                </CardTitle>
                <CardDescription>Breakdown of settlement components</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Final Pay Components</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span>Basic Salary:</span>
                            <span className="font-medium">₹45,000</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Pending Allowances:</span>
                            <span className="font-medium">₹18,000</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Leave Encashment:</span>
                            <span className="font-medium">₹25,000</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Bonus Proration:</span>
                            <span className="font-medium">₹12,000</span>
                          </div>
                          <div className="border-t pt-2">
                            <div className="flex justify-between font-bold">
                              <span>Total:</span>
                              <span className="text-green-600">₹1,00,000</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">PF & Benefits</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span>Employee PF:</span>
                            <span className="font-medium">₹65,000</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Employer PF:</span>
                            <span className="font-medium">₹65,000</span>
                          </div>
                          <div className="flex justify-between">
                            <span>PF Interest:</span>
                            <span className="font-medium">₹8,500</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Pension Fund:</span>
                            <span className="font-medium">₹15,000</span>
                          </div>
                          <div className="border-t pt-2">
                            <div className="flex justify-between font-bold">
                              <span>Total:</span>
                              <span className="text-green-600">₹1,53,500</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Gratuity & Others</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span>Gratuity:</span>
                            <span className="font-medium">₹85,000</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Medical Reimbursement:</span>
                            <span className="font-medium">₹5,000</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Travel Reimbursement:</span>
                            <span className="font-medium">₹3,500</span>
                          </div>
                          <div className="flex justify-between text-red-600">
                            <span>Recovery (if any):</span>
                            <span className="font-medium">-₹2,000</span>
                          </div>
                          <div className="border-t pt-2">
                            <div className="flex justify-between font-bold">
                              <span>Total:</span>
                              <span className="text-green-600">₹91,500</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <Card className="bg-green-50">
                    <CardContent className="p-6">
                      <div className="text-center">
                        <h3 className="text-xl font-bold text-green-800 mb-2">Final Settlement Amount</h3>
                        <p className="text-3xl font-bold text-green-600">₹3,45,000</p>
                        <p className="text-sm text-gray-600 mt-2">Subject to tax deductions and statutory compliance</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Settlement Trends</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Average Settlement Amount:</span>
                      <span className="font-bold">₹2.8L</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Processing Time:</span>
                      <span className="font-bold">15 days</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Completion Rate:</span>
                      <span className="font-bold text-green-600">94.2%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Employee Satisfaction:</span>
                      <span className="font-bold text-green-600">4.6/5</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Exit Reason Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Retirement:</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full" style={{width: '40%'}}></div>
                        </div>
                        <span className="text-sm font-medium">40%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Resignation:</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <div className="bg-green-600 h-2 rounded-full" style={{width: '35%'}}></div>
                        </div>
                        <span className="text-sm font-medium">35%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Transfer:</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <div className="bg-orange-600 h-2 rounded-full" style={{width: '20%'}}></div>
                        </div>
                        <span className="text-sm font-medium">20%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Other:</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <div className="bg-purple-600 h-2 rounded-full" style={{width: '5%'}}></div>
                        </div>
                        <span className="text-sm font-medium">5%</span>
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

export default FinalSettlement;
