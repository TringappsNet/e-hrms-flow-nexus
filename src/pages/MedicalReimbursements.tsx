
import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Receipt, Heart, Calendar, Plus, Search, Download } from "lucide-react";

const MedicalReimbursements = () => {
  const reimbursements = [
    { id: "MR001", employeeId: "E12345", name: "John Doe", category: "OPD Consultation", amount: "₹2,500", submittedDate: "2024-11-20", status: "Approved", approvedAmount: "₹2,500" },
    { id: "MR002", employeeId: "E12346", name: "Jane Smith", category: "Pharmacy Bills", amount: "₹1,800", submittedDate: "2024-11-22", status: "Under Review", approvedAmount: "-" },
    { id: "MR003", employeeId: "E12347", name: "Bob Johnson", category: "Diagnostic Tests", amount: "₹4,200", submittedDate: "2024-11-18", status: "Pending", approvedAmount: "-" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Approved": return "bg-green-100 text-green-800";
      case "Under Review": return "bg-blue-100 text-blue-800";
      case "Pending": return "bg-yellow-100 text-yellow-800";
      case "Rejected": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Medical Reimbursements</h1>
            <p className="text-gray-600 mt-2">Manage medical expense reimbursements for employees</p>
          </div>
          <Button className="bg-gray-900 hover:bg-gray-800 text-white">
            <Plus className="h-4 w-4 mr-2" />
            New Reimbursement
          </Button>
        </div>

        <Tabs defaultValue="reimbursements" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="reimbursements">Reimbursements</TabsTrigger>
            <TabsTrigger value="new-request">New Request</TabsTrigger>
            <TabsTrigger value="policies">Reimbursement Policies</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="reimbursements" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <Receipt className="h-8 w-8 text-blue-600" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Total Requests</p>
                      <p className="text-2xl font-bold">89</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <Heart className="h-8 w-8 text-green-600" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Amount Reimbursed</p>
                      <p className="text-2xl font-bold">₹3.2L</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <Calendar className="h-8 w-8 text-orange-600" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Pending Approval</p>
                      <p className="text-2xl font-bold">15</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <Receipt className="h-8 w-8 text-purple-600" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">This Month</p>
                      <p className="text-2xl font-bold">23</p>
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
                      Medical Reimbursement Requests
                    </CardTitle>
                    <CardDescription>Track and process medical expense reimbursements</CardDescription>
                  </div>
                  <div className="flex space-x-2">
                    <div className="relative">
                      <Search className="h-4 w-4 absolute left-3 top-3 text-gray-400" />
                      <Input placeholder="Search requests..." className="pl-10 w-64" />
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
                      <TableHead>Request ID</TableHead>
                      <TableHead>Employee</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Requested Amount</TableHead>
                      <TableHead>Submitted Date</TableHead>
                      <TableHead>Approved Amount</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {reimbursements.map((reimbursement) => (
                      <TableRow key={reimbursement.id}>
                        <TableCell className="font-medium">{reimbursement.id}</TableCell>
                        <TableCell>
                          <div>
                            <div className="font-medium">{reimbursement.name}</div>
                            <div className="text-sm text-gray-500">{reimbursement.employeeId}</div>
                          </div>
                        </TableCell>
                        <TableCell>{reimbursement.category}</TableCell>
                        <TableCell className="font-medium">{reimbursement.amount}</TableCell>
                        <TableCell>{reimbursement.submittedDate}</TableCell>
                        <TableCell className={reimbursement.approvedAmount !== "-" ? "text-green-600 font-medium" : "text-gray-400"}>{reimbursement.approvedAmount}</TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(reimbursement.status)}>
                            {reimbursement.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">View</Button>
                            <Button variant="outline" size="sm">Process</Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="new-request" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Submit New Reimbursement Request</CardTitle>
                <CardDescription>Request reimbursement for medical expenses</CardDescription>
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
                    <Label htmlFor="category">Expense Category</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="opd">OPD Consultation</SelectItem>
                        <SelectItem value="pharmacy">Pharmacy Bills</SelectItem>
                        <SelectItem value="diagnostic">Diagnostic Tests</SelectItem>
                        <SelectItem value="dental">Dental Treatment</SelectItem>
                        <SelectItem value="optical">Optical/Vision Care</SelectItem>
                        <SelectItem value="physiotherapy">Physiotherapy</SelectItem>
                        <SelectItem value="vaccination">Vaccination</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="expense-date">Expense Date</Label>
                    <Input type="date" id="expense-date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="amount">Amount</Label>
                    <Input id="amount" placeholder="Enter expense amount" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="provider">Healthcare Provider</Label>
                    <Input id="provider" placeholder="Hospital/Clinic/Pharmacy name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="treatment-for">Treatment For</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select beneficiary" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="self">Self</SelectItem>
                        <SelectItem value="spouse">Spouse</SelectItem>
                        <SelectItem value="child1">Child 1</SelectItem>
                        <SelectItem value="child2">Child 2</SelectItem>
                        <SelectItem value="parent">Parent</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-medium">Upload Supporting Documents</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="bills">Bills/Receipts</Label>
                      <Input type="file" id="bills" multiple accept=".pdf,.jpg,.jpeg,.png" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="prescription">Prescription (if applicable)</Label>
                      <Input type="file" id="prescription" accept=".pdf,.jpg,.jpeg,.png" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="reports">Medical Reports</Label>
                      <Input type="file" id="reports" multiple accept=".pdf,.jpg,.jpeg,.png" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="other-docs">Other Documents</Label>
                      <Input type="file" id="other-docs" multiple accept=".pdf,.jpg,.jpeg,.png" />
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-medium mb-2">Reimbursement Guidelines</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Maximum reimbursement limit: ₹25,000 per year</li>
                    <li>• Claims must be submitted within 30 days of expense</li>
                    <li>• Original bills and receipts are mandatory</li>
                    <li>• Pre-approval required for expenses above ₹10,000</li>
                  </ul>
                </div>
                
                <div className="flex space-x-2">
                  <Button className="bg-gray-900 hover:bg-gray-800 text-white">Submit Request</Button>
                  <Button variant="outline">Save as Draft</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="policies" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Reimbursement Policies</CardTitle>
                <CardDescription>Current medical reimbursement policies and limits</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">OPD & Consultation</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span>Annual Limit:</span>
                            <span className="font-medium">₹15,000</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Per Visit Limit:</span>
                            <span className="font-medium">₹2,000</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Family Coverage:</span>
                            <span className="font-medium">Yes</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Required Documents:</span>
                            <span className="font-medium">Bills, Prescription</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Pharmacy & Medicines</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span>Annual Limit:</span>
                            <span className="font-medium">₹10,000</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Per Purchase Limit:</span>
                            <span className="font-medium">₹1,500</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Family Coverage:</span>
                            <span className="font-medium">Yes</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Required Documents:</span>
                            <span className="font-medium">Bills, Prescription</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Diagnostic Tests</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span>Annual Limit:</span>
                            <span className="font-medium">₹12,000</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Per Test Limit:</span>
                            <span className="font-medium">₹3,000</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Family Coverage:</span>
                            <span className="font-medium">Yes</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Required Documents:</span>
                            <span className="font-medium">Bills, Reports</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Dental & Optical</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span>Annual Limit:</span>
                            <span className="font-medium">₹8,000</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Per Treatment Limit:</span>
                            <span className="font-medium">₹2,500</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Family Coverage:</span>
                            <span className="font-medium">Yes</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Required Documents:</span>
                            <span className="font-medium">Bills, Prescription</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="p-4 bg-yellow-50 rounded-lg">
                    <h3 className="font-medium mb-2">Important Notes</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• All reimbursements are subject to income tax as per government rules</li>
                      <li>• Claims submitted after 30 days may be rejected</li>
                      <li>• Pre-approval is mandatory for treatments above ₹10,000</li>
                      <li>• Cashless facility is available at network hospitals</li>
                      <li>• Emergency treatments may be reimbursed without pre-approval</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Reimbursement by Category</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>OPD Consultation:</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full" style={{width: '35%'}}></div>
                        </div>
                        <span className="text-sm font-medium">35%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Pharmacy Bills:</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <div className="bg-green-600 h-2 rounded-full" style={{width: '25%'}}></div>
                        </div>
                        <span className="text-sm font-medium">25%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Diagnostic Tests:</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <div className="bg-orange-600 h-2 rounded-full" style={{width: '20%'}}></div>
                        </div>
                        <span className="text-sm font-medium">20%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Dental & Optical:</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <div className="bg-purple-600 h-2 rounded-full" style={{width: '15%'}}></div>
                        </div>
                        <span className="text-sm font-medium">15%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Others:</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <div className="bg-gray-600 h-2 rounded-full" style={{width: '5%'}}></div>
                        </div>
                        <span className="text-sm font-medium">5%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Processing Statistics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Average Processing Time:</span>
                      <span className="font-bold">5.2 days</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Approval Rate:</span>
                      <span className="font-bold text-green-600">92.3%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Average Reimbursement:</span>
                      <span className="font-bold">₹3,600</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Total Utilization:</span>
                      <span className="font-bold">68%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Employee Satisfaction:</span>
                      <span className="font-bold text-green-600">4.1/5</span>
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

export default MedicalReimbursements;
