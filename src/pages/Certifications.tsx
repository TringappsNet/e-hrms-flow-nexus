
import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Award, BookOpen, Calendar, Plus, Search, Download, CheckCircle } from "lucide-react";

const Certifications = () => {
  const certifications = [
    { id: "CERT001", employeeId: "E12345", name: "John Doe", certification: "Project Management Professional", provider: "PMI", issueDate: "2024-01-15", expiryDate: "2027-01-15", status: "Active" },
    { id: "CERT002", employeeId: "E12346", name: "Jane Smith", certification: "Certified Public Accountant", provider: "AICPA", issueDate: "2023-06-20", expiryDate: "2026-06-20", status: "Active" },
    { id: "CERT003", employeeId: "E12347", name: "Bob Johnson", certification: "ISO 9001 Lead Auditor", provider: "BSI", issueDate: "2022-03-10", expiryDate: "2025-03-10", status: "Expiring Soon" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "bg-green-100 text-green-800";
      case "Expiring Soon": return "bg-yellow-100 text-yellow-800";
      case "Expired": return "bg-red-100 text-red-800";
      case "Pending": return "bg-blue-100 text-blue-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Certifications Management</h1>
            <p className="text-gray-600 mt-2">Track and manage employee certifications and credentials</p>
          </div>
          <Button className="bg-gray-900 hover:bg-gray-800 text-white">
            <Plus className="h-4 w-4 mr-2" />
            Add Certification
          </Button>
        </div>

        <Tabs defaultValue="certifications" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="certifications">Certifications</TabsTrigger>
            <TabsTrigger value="add-certification">Add New</TabsTrigger>
            <TabsTrigger value="renewals">Renewals</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="certifications" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <Award className="h-8 w-8 text-blue-600" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Total Certifications</p>
                      <p className="text-2xl font-bold">156</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Active</p>
                      <p className="text-2xl font-bold">142</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <Calendar className="h-8 w-8 text-orange-600" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Expiring Soon</p>
                      <p className="text-2xl font-bold">12</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <BookOpen className="h-8 w-8 text-purple-600" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">This Month</p>
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
                      <Award className="h-5 w-5 mr-2 text-blue-600" />
                      Employee Certifications
                    </CardTitle>
                    <CardDescription>Track and manage employee certifications</CardDescription>
                  </div>
                  <div className="flex space-x-2">
                    <div className="relative">
                      <Search className="h-4 w-4 absolute left-3 top-3 text-gray-400" />
                      <Input placeholder="Search certifications..." className="pl-10 w-64" />
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
                      <TableHead>Cert ID</TableHead>
                      <TableHead>Employee</TableHead>
                      <TableHead>Certification</TableHead>
                      <TableHead>Provider</TableHead>
                      <TableHead>Issue Date</TableHead>
                      <TableHead>Expiry Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {certifications.map((cert) => (
                      <TableRow key={cert.id}>
                        <TableCell className="font-medium">{cert.id}</TableCell>
                        <TableCell>
                          <div>
                            <div className="font-medium">{cert.name}</div>
                            <div className="text-sm text-gray-500">{cert.employeeId}</div>
                          </div>
                        </TableCell>
                        <TableCell>{cert.certification}</TableCell>
                        <TableCell>{cert.provider}</TableCell>
                        <TableCell>{cert.issueDate}</TableCell>
                        <TableCell>{cert.expiryDate}</TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(cert.status)}>
                            {cert.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">View</Button>
                            <Button variant="outline" size="sm">Renew</Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="add-certification" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Add New Certification</CardTitle>
                <CardDescription>Record a new employee certification</CardDescription>
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
                    <Label htmlFor="certification-name">Certification Name</Label>
                    <Input id="certification-name" placeholder="Enter certification name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="provider">Certification Provider</Label>
                    <Input id="provider" placeholder="Enter provider/institution" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="technical">Technical</SelectItem>
                        <SelectItem value="management">Management</SelectItem>
                        <SelectItem value="compliance">Compliance</SelectItem>
                        <SelectItem value="safety">Safety</SelectItem>
                        <SelectItem value="professional">Professional</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="issue-date">Issue Date</Label>
                    <Input type="date" id="issue-date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="expiry-date">Expiry Date</Label>
                    <Input type="date" id="expiry-date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="certificate-number">Certificate Number</Label>
                    <Input id="certificate-number" placeholder="Enter certificate number" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="verification-url">Verification URL</Label>
                    <Input id="verification-url" placeholder="Enter verification link" />
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button className="bg-gray-900 hover:bg-gray-800 text-white">Add Certification</Button>
                  <Button variant="outline">Upload Certificate</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="renewals" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-blue-600" />
                  Certification Renewals
                </CardTitle>
                <CardDescription>Track upcoming certification renewals</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card>
                      <CardContent className="p-4">
                        <div className="text-center">
                          <h3 className="font-medium">Due This Month</h3>
                          <p className="text-2xl font-bold text-red-600">5</p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4">
                        <div className="text-center">
                          <h3 className="font-medium">Due Next Month</h3>
                          <p className="text-2xl font-bold text-orange-600">8</p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4">
                        <div className="text-center">
                          <h3 className="font-medium">Renewed This Year</h3>
                          <p className="text-2xl font-bold text-green-600">23</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="border rounded-lg">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Employee</TableHead>
                          <TableHead>Certification</TableHead>
                          <TableHead>Expiry Date</TableHead>
                          <TableHead>Days Remaining</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>
                            <div>
                              <div className="font-medium">Bob Johnson</div>
                              <div className="text-sm text-gray-500">E12347</div>
                            </div>
                          </TableCell>
                          <TableCell>ISO 9001 Lead Auditor</TableCell>
                          <TableCell>2025-03-10</TableCell>
                          <TableCell>
                            <Badge className="bg-red-100 text-red-800">75 days</Badge>
                          </TableCell>
                          <TableCell>
                            <Button size="sm" className="bg-gray-900 hover:bg-gray-800 text-white">
                              Send Reminder
                            </Button>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Certification Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Technical:</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full" style={{width: '45%'}}></div>
                        </div>
                        <span className="text-sm font-medium">45%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Management:</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <div className="bg-green-600 h-2 rounded-full" style={{width: '30%'}}></div>
                        </div>
                        <span className="text-sm font-medium">30%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Compliance:</span>
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
                  <CardTitle>Renewal Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>On Time Renewals:</span>
                      <span className="font-bold text-green-600">89%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Late Renewals:</span>
                      <span className="font-bold text-orange-600">8%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Expired:</span>
                      <span className="font-bold text-red-600">3%</span>
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

export default Certifications;
