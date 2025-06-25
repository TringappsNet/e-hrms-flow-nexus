
import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Heart, FileText, Calendar, Plus, Search, Download } from "lucide-react";

const MedicalClaims = () => {
  const claims = [
    { id: "MC001", employeeId: "E12345", name: "John Doe", claimType: "Hospitalization", amount: "₹45,000", claimDate: "2024-11-15", hospitalName: "City Hospital", status: "Approved", approvedAmount: "₹42,000" },
    { id: "MC002", employeeId: "E12346", name: "Jane Smith", claimType: "OPD Treatment", amount: "₹8,500", claimDate: "2024-11-20", hospitalName: "Health Clinic", status: "Under Review", approvedAmount: "-" },
    { id: "MC003", employeeId: "E12347", name: "Bob Johnson", claimType: "Medicines", amount: "₹3,200", claimDate: "2024-11-18", hospitalName: "Pharmacy Plus", status: "Pending", approvedAmount: "-" },
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
            <h1 className="text-3xl font-bold text-gray-900">Medical Claims Management</h1>
            <p className="text-gray-600 mt-2">Process and manage employee medical claims</p>
          </div>
          <Button className="bg-gray-900 hover:bg-gray-800 text-white">
            <Plus className="h-4 w-4 mr-2" />
            New Claim
          </Button>
        </div>

        <Tabs defaultValue="claims" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="claims">Medical Claims</TabsTrigger>
            <TabsTrigger value="new-claim">New Claim</TabsTrigger>
            <TabsTrigger value="policies">Insurance Policies</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="claims" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <Heart className="h-8 w-8 text-blue-600" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Total Claims</p>
                      <p className="text-2xl font-bold">156</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <FileText className="h-8 w-8 text-green-600" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Amount Claimed</p>
                      <p className="text-2xl font-bold">₹12.5L</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <Calendar className="h-8 w-8 text-orange-600" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Pending Review</p>
                      <p className="text-2xl font-bold">23</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <Heart className="h-8 w-8 text-purple-600" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">This Month</p>
                      <p className="text-2xl font-bold">34</p>
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
                      <Heart className="h-5 w-5 mr-2 text-blue-600" />
                      Medical Claims
                    </CardTitle>
                    <CardDescription>Track and process medical insurance claims</CardDescription>
                  </div>
                  <div className="flex space-x-2">
                    <div className="relative">
                      <Search className="h-4 w-4 absolute left-3 top-3 text-gray-400" />
                      <Input placeholder="Search claims..." className="pl-10 w-64" />
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
                      <TableHead>Claim ID</TableHead>
                      <TableHead>Employee</TableHead>
                      <TableHead>Claim Type</TableHead>
                      <TableHead>Hospital/Provider</TableHead>
                      <TableHead>Claim Amount</TableHead>
                      <TableHead>Approved Amount</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {claims.map((claim) => (
                      <TableRow key={claim.id}>
                        <TableCell className="font-medium">{claim.id}</TableCell>
                        <TableCell>
                          <div>
                            <div className="font-medium">{claim.name}</div>
                            <div className="text-sm text-gray-500">{claim.employeeId}</div>
                          </div>
                        </TableCell>
                        <TableCell>{claim.claimType}</TableCell>
                        <TableCell>{claim.hospitalName}</TableCell>
                        <TableCell className="font-medium">{claim.amount}</TableCell>
                        <TableCell className={claim.approvedAmount !== "-" ? "text-green-600 font-medium" : "text-gray-400"}>{claim.approvedAmount}</TableCell>
                        <TableCell>{claim.claimDate}</TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(claim.status)}>
                            {claim.status}
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

          <TabsContent value="new-claim" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Submit New Medical Claim</CardTitle>
                <CardDescription>File a new medical insurance claim</CardDescription>
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
                    <Label htmlFor="claim-type">Claim Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select claim type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hospitalization">Hospitalization</SelectItem>
                        <SelectItem value="opd">OPD Treatment</SelectItem>
                        <SelectItem value="medicines">Medicines</SelectItem>
                        <SelectItem value="diagnostic">Diagnostic Tests</SelectItem>
                        <SelectItem value="dental">Dental Treatment</SelectItem>
                        <SelectItem value="maternity">Maternity</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="treatment-date">Treatment Date</Label>
                    <Input type="date" id="treatment-date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="hospital">Hospital/Provider</Label>
                    <Input id="hospital" placeholder="Enter hospital/provider name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="claim-amount">Claim Amount</Label>
                    <Input id="claim-amount" placeholder="Enter claim amount" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="policy-number">Policy Number</Label>
                    <Input id="policy-number" placeholder="Enter policy number" />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-medium">Required Documents</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="medical-bills">Medical Bills</Label>
                      <Input type="file" id="medical-bills" multiple />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="prescription">Prescription</Label>
                      <Input type="file" id="prescription" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="discharge-summary">Discharge Summary</Label>
                      <Input type="file" id="discharge-summary" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="diagnostic-reports">Diagnostic Reports</Label>
                      <Input type="file" id="diagnostic-reports" multiple />
                    </div>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <Button className="bg-gray-900 hover:bg-gray-800 text-white">Submit Claim</Button>
                  <Button variant="outline">Save as Draft</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="policies" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Insurance Policies</CardTitle>
                <CardDescription>Manage employee insurance policies and coverage</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Group Health Insurance</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span>Policy Number:</span>
                            <span className="font-medium">GHI-2024-001</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Coverage:</span>
                            <span className="font-medium">₹5,00,000</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Employees Covered:</span>
                            <span className="font-medium">150</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Renewal Date:</span>
                            <span className="font-medium">Mar 31, 2025</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Critical Illness Cover</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span>Policy Number:</span>
                            <span className="font-medium">CIC-2024-002</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Coverage:</span>
                            <span className="font-medium">₹10,00,000</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Employees Covered:</span>
                            <span className="font-medium">89</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Renewal Date:</span>
                            <span className="font-medium">Jun 30, 2025</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Maternity Benefits</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span>Policy Number:</span>
                            <span className="font-medium">MAT-2024-003</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Coverage:</span>
                            <span className="font-medium">₹1,00,000</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Employees Covered:</span>
                            <span className="font-medium">65</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Renewal Date:</span>
                            <span className="font-medium">Dec 31, 2024</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h3 className="font-medium mb-2">Coverage Summary</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Total Premium:</span>
                        <span className="font-medium ml-2">₹8.5L/year</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Claims Ratio:</span>
                        <span className="font-medium ml-2">68%</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Network Hospitals:</span>
                        <span className="font-medium ml-2">1,200+</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Cashless Facilities:</span>
                        <span className="font-medium ml-2">850+</span>
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
                  <CardTitle>Claims by Category</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Hospitalization:</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full" style={{width: '45%'}}></div>
                        </div>
                        <span className="text-sm font-medium">45%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>OPD Treatment:</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <div className="bg-green-600 h-2 rounded-full" style={{width: '25%'}}></div>
                        </div>
                        <span className="text-sm font-medium">25%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Medicines:</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <div className="bg-orange-600 h-2 rounded-full" style={{width: '20%'}}></div>
                        </div>
                        <span className="text-sm font-medium">20%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Diagnostic:</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <div className="bg-purple-600 h-2 rounded-full" style={{width: '10%'}}></div>
                        </div>
                        <span className="text-sm font-medium">10%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Claims Processing Stats</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Average Processing Time:</span>
                      <span className="font-bold">7.2 days</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Approval Rate:</span>
                      <span className="font-bold text-green-600">87.5%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Average Claim Amount:</span>
                      <span className="font-bold">₹18,500</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Employee Satisfaction:</span>
                      <span className="font-bold text-green-600">4.3/5</span>
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

export default MedicalClaims;
