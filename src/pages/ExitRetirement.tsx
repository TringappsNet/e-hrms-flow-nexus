
import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { UserMinus, FileText, DollarSign, Plus, Search, Download, Calendar } from "lucide-react";

const ExitRetirement = () => {
  const exitRequests = [
    { id: "EX001", employeeId: "E12345", name: "John Doe", type: "Retirement", status: "Processing", date: "2024-12-01", finalWorkingDay: "2024-12-31" },
    { id: "EX002", employeeId: "E12346", name: "Jane Smith", type: "Resignation", status: "Approved", date: "2024-11-15", finalWorkingDay: "2024-12-15" },
    { id: "EX003", employeeId: "E12347", name: "Bob Johnson", type: "Retirement", status: "Pending", date: "2024-11-20", finalWorkingDay: "2025-01-15" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Approved": return "bg-green-100 text-green-800";
      case "Processing": return "bg-yellow-100 text-yellow-800";
      case "Pending": return "bg-orange-100 text-orange-800";
      case "Rejected": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Exit & Retirement Processing</h1>
            <p className="text-gray-600 mt-2">Manage employee exit processes and retirement procedures</p>
          </div>
          <Button className="bg-gray-900 hover:bg-gray-800 text-white">
            <Plus className="h-4 w-4 mr-2" />
            New Exit Request
          </Button>
        </div>

        <Tabs defaultValue="requests" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="requests">Exit Requests</TabsTrigger>
            <TabsTrigger value="new-request">New Request</TabsTrigger>
            <TabsTrigger value="clearance">Clearance Process</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="requests" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center">
                      <UserMinus className="h-5 w-5 mr-2 text-blue-600" />
                      Exit Requests
                    </CardTitle>
                    <CardDescription>Track and manage employee exit requests</CardDescription>
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
                      <TableHead>Type</TableHead>
                      <TableHead>Request Date</TableHead>
                      <TableHead>Final Working Day</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {exitRequests.map((request) => (
                      <TableRow key={request.id}>
                        <TableCell className="font-medium">{request.id}</TableCell>
                        <TableCell>
                          <div>
                            <div className="font-medium">{request.name}</div>
                            <div className="text-sm text-gray-500">{request.employeeId}</div>
                          </div>
                        </TableCell>
                        <TableCell>{request.type}</TableCell>
                        <TableCell>{request.date}</TableCell>
                        <TableCell>{request.finalWorkingDay}</TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(request.status)}>
                            {request.status}
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
                <CardTitle>New Exit Request</CardTitle>
                <CardDescription>Create a new exit or retirement request</CardDescription>
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
                    <Label htmlFor="request-date">Request Date</Label>
                    <Input type="date" id="request-date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="final-working-day">Final Working Day</Label>
                    <Input type="date" id="final-working-day" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="reason">Reason for Exit</Label>
                  <Textarea id="reason" placeholder="Enter reason for exit..." rows={4} />
                </div>
                <div className="flex space-x-2">
                  <Button className="bg-gray-900 hover:bg-gray-800 text-white">Submit Request</Button>
                  <Button variant="outline">Save as Draft</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="clearance" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="h-5 w-5 mr-2 text-blue-600" />
                  Clearance Process
                </CardTitle>
                <CardDescription>Track departmental clearances and final settlement</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card>
                      <CardContent className="p-4">
                        <div className="text-center">
                          <h3 className="font-medium">Pending Clearances</h3>
                          <p className="text-2xl font-bold text-orange-600">5</p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4">
                        <div className="text-center">
                          <h3 className="font-medium">Completed</h3>
                          <p className="text-2xl font-bold text-green-600">12</p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4">
                        <div className="text-center">
                          <h3 className="font-medium">Final Settlement</h3>
                          <p className="text-2xl font-bold text-blue-600">3</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <UserMinus className="h-8 w-8 text-blue-600" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Total Exits</p>
                      <p className="text-2xl font-bold">45</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <Calendar className="h-8 w-8 text-green-600" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">This Month</p>
                      <p className="text-2xl font-bold">8</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <FileText className="h-8 w-8 text-orange-600" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Retirements</p>
                      <p className="text-2xl font-bold">23</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <DollarSign className="h-8 w-8 text-purple-600" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Resignations</p>
                      <p className="text-2xl font-bold">22</p>
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

export default ExitRetirement;
