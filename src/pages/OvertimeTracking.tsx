
import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Clock, TrendingUp, DollarSign, Plus, Search, Download, Calendar } from "lucide-react";

const OvertimeTracking = () => {
  const overtimeRecords = [
    { id: "OT001", employeeId: "E12345", name: "John Doe", date: "2024-12-20", hours: 3.5, type: "Regular", status: "Approved", rate: 250 },
    { id: "OT002", employeeId: "E12346", name: "Jane Smith", date: "2024-12-19", hours: 2.0, type: "Holiday", status: "Pending", rate: 375 },
    { id: "OT003", employeeId: "E12347", name: "Bob Johnson", date: "2024-12-18", hours: 4.0, type: "Weekend", status: "Approved", rate: 300 },
    { id: "OT004", employeeId: "E12348", name: "Alice Brown", date: "2024-12-17", hours: 1.5, type: "Regular", status: "Rejected", rate: 250 },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Approved": return "bg-green-100 text-green-800";
      case "Pending": return "bg-yellow-100 text-yellow-800";
      case "Rejected": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Regular": return "bg-blue-100 text-blue-800";
      case "Holiday": return "bg-purple-100 text-purple-800";
      case "Weekend": return "bg-orange-100 text-orange-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Overtime Tracking</h1>
            <p className="text-gray-600 mt-2">Monitor and manage employee overtime hours</p>
          </div>
          <Button className="bg-gray-900 hover:bg-gray-800 text-white">
            <Plus className="h-4 w-4 mr-2" />
            Log Overtime
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Clock className="h-8 w-8 text-blue-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total OT Hours</p>
                  <p className="text-2xl font-bold">248</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <TrendingUp className="h-8 w-8 text-green-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">This Month</p>
                  <p className="text-2xl font-bold">45</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <DollarSign className="h-8 w-8 text-orange-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">OT Payment</p>
                  <p className="text-2xl font-bold">₹68,500</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Calendar className="h-8 w-8 text-purple-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Pending Approvals</p>
                  <p className="text-2xl font-bold">8</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="records" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="records">Overtime Records</TabsTrigger>
            <TabsTrigger value="new-entry">New Entry</TabsTrigger>
            <TabsTrigger value="approvals">Approvals</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="records" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center">
                      <Clock className="h-5 w-5 mr-2 text-blue-600" />
                      Overtime Records
                    </CardTitle>
                    <CardDescription>Track all overtime entries and approvals</CardDescription>
                  </div>
                  <div className="flex space-x-2">
                    <div className="relative">
                      <Search className="h-4 w-4 absolute left-3 top-3 text-gray-400" />
                      <Input placeholder="Search records..." className="pl-10 w-64" />
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
                      <TableHead>OT ID</TableHead>
                      <TableHead>Employee</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Hours</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Rate (₹/hr)</TableHead>
                      <TableHead>Total Amount</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {overtimeRecords.map((record) => (
                      <TableRow key={record.id}>
                        <TableCell className="font-medium">{record.id}</TableCell>
                        <TableCell>
                          <div>
                            <div className="font-medium">{record.name}</div>
                            <div className="text-sm text-gray-500">{record.employeeId}</div>
                          </div>
                        </TableCell>
                        <TableCell>{record.date}</TableCell>
                        <TableCell>{record.hours}</TableCell>
                        <TableCell>
                          <Badge className={getTypeColor(record.type)}>
                            {record.type}
                          </Badge>
                        </TableCell>
                        <TableCell>₹{record.rate}</TableCell>
                        <TableCell>₹{(record.hours * record.rate).toLocaleString()}</TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(record.status)}>
                            {record.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">View</Button>
                            <Button variant="outline" size="sm">Edit</Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="new-entry" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Log New Overtime Entry</CardTitle>
                <CardDescription>Record overtime hours for employees</CardDescription>
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
                    <Label htmlFor="overtime-date">Date</Label>
                    <Input type="date" id="overtime-date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="start-time">Start Time</Label>
                    <Input type="time" id="start-time" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="end-time">End Time</Label>
                    <Input type="time" id="end-time" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="overtime-type">Overtime Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="regular">Regular OT</SelectItem>
                        <SelectItem value="weekend">Weekend OT</SelectItem>
                        <SelectItem value="holiday">Holiday OT</SelectItem>
                        <SelectItem value="emergency">Emergency OT</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="hours">Total Hours</Label>
                    <Input type="number" id="hours" placeholder="0.0" step="0.5" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="justification">Justification</Label>
                  <Input id="justification" placeholder="Reason for overtime..." />
                </div>
                <div className="flex space-x-2">
                  <Button className="bg-gray-900 hover:bg-gray-800 text-white">Submit Entry</Button>
                  <Button variant="outline">Save as Draft</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="approvals" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-blue-600" />
                  Overtime Approvals
                </CardTitle>
                <CardDescription>Review and approve overtime requests</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {overtimeRecords.filter(record => record.status === "Pending").map((record) => (
                    <div key={record.id} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">{record.name} ({record.employeeId})</h4>
                          <p className="text-sm text-gray-600">
                            {record.date} • {record.hours} hours • {record.type} OT
                          </p>
                          <p className="text-sm text-gray-600">
                            Amount: ₹{(record.hours * record.rate).toLocaleString()}
                          </p>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                            Approve
                          </Button>
                          <Button size="sm" variant="outline" className="text-red-600 border-red-600 hover:bg-red-50">
                            Reject
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Monthly Overtime Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Total Hours:</span>
                      <span className="font-bold">45.5</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Regular OT:</span>
                      <span className="font-bold">28.5 hrs</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Weekend OT:</span>
                      <span className="font-bold">12.0 hrs</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Holiday OT:</span>
                      <span className="font-bold">5.0 hrs</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Total Cost:</span>
                      <span className="font-bold text-green-600">₹12,375</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Top Overtime Contributors</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span>John Doe</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-16 bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full" style={{width: '85%'}}></div>
                        </div>
                        <span className="text-sm font-medium">12.5h</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Bob Johnson</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-16 bg-gray-200 rounded-full h-2">
                          <div className="bg-green-600 h-2 rounded-full" style={{width: '65%'}}></div>
                        </div>
                        <span className="text-sm font-medium">8.0h</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Jane Smith</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-16 bg-gray-200 rounded-full h-2">
                          <div className="bg-purple-600 h-2 rounded-full" style={{width: '45%'}}></div>
                        </div>
                        <span className="text-sm font-medium">5.5h</span>
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

export default OvertimeTracking;
