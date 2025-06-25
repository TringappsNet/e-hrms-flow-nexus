
import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CalendarClock, Clock, Users, Plus, Search, Download, Calendar, Settings } from "lucide-react";

const ShiftManagement = () => {
  const shifts = [
    { id: "SH001", name: "Morning Shift", startTime: "09:00", endTime: "17:00", duration: "8 hours", employees: 45, type: "Regular" },
    { id: "SH002", name: "Evening Shift", startTime: "17:00", endTime: "01:00", duration: "8 hours", employees: 23, type: "Regular" },
    { id: "SH003", name: "Night Shift", startTime: "23:00", endTime: "07:00", duration: "8 hours", employees: 18, type: "Regular" },
    { id: "SH004", name: "Weekend Shift", startTime: "10:00", endTime: "18:00", duration: "8 hours", employees: 12, type: "Weekend" },
  ];

  const shiftAssignments = [
    { id: "SA001", employeeId: "E12345", name: "John Doe", shift: "Morning Shift", startDate: "2024-12-01", endDate: "2024-12-31", status: "Active" },
    { id: "SA002", employeeId: "E12346", name: "Jane Smith", shift: "Evening Shift", startDate: "2024-12-01", endDate: "2024-12-31", status: "Active" },
    { id: "SA003", employeeId: "E12347", name: "Bob Johnson", shift: "Night Shift", startDate: "2024-11-15", endDate: "2024-12-15", status: "Temporary" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "bg-green-100 text-green-800";
      case "Temporary": return "bg-yellow-100 text-yellow-800";
      case "Inactive": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Shift Management</h1>
            <p className="text-gray-600 mt-2">Manage work shifts and employee assignments</p>
          </div>
          <Button className="bg-gray-900 hover:bg-gray-800 text-white">
            <Plus className="h-4 w-4 mr-2" />
            Create New Shift
          </Button>
        </div>

        <Tabs defaultValue="shifts" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="shifts">Shifts</TabsTrigger>
            <TabsTrigger value="assignments">Assignments</TabsTrigger>
            <TabsTrigger value="roster">Roster</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="shifts" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <CalendarClock className="h-8 w-8 text-blue-600" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Total Shifts</p>
                      <p className="text-2xl font-bold">4</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <Users className="h-8 w-8 text-green-600" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Assigned Employees</p>
                      <p className="text-2xl font-bold">98</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <Clock className="h-8 w-8 text-orange-600" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Active Now</p>
                      <p className="text-2xl font-bold">45</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <Settings className="h-8 w-8 text-purple-600" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Coverage Rate</p>
                      <p className="text-2xl font-bold">92%</p>
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
                      <CalendarClock className="h-5 w-5 mr-2 text-blue-600" />
                      Shift Configuration
                    </CardTitle>
                    <CardDescription>Manage work shifts and timings</CardDescription>
                  </div>
                  <Button variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Export
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Shift ID</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Start Time</TableHead>
                      <TableHead>End Time</TableHead>
                      <TableHead>Duration</TableHead>
                      <TableHead>Employees</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {shifts.map((shift) => (
                      <TableRow key={shift.id}>
                        <TableCell className="font-medium">{shift.id}</TableCell>
                        <TableCell>{shift.name}</TableCell>
                        <TableCell>{shift.startTime}</TableCell>
                        <TableCell>{shift.endTime}</TableCell>
                        <TableCell>{shift.duration}</TableCell>
                        <TableCell>{shift.employees}</TableCell>
                        <TableCell>
                          <Badge variant="outline">{shift.type}</Badge>
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

          <TabsContent value="assignments" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center">
                      <Users className="h-5 w-5 mr-2 text-blue-600" />
                      Shift Assignments
                    </CardTitle>
                    <CardDescription>Employee shift allocations</CardDescription>
                  </div>
                  <div className="flex space-x-2">
                    <div className="relative">
                      <Search className="h-4 w-4 absolute left-3 top-3 text-gray-400" />
                      <Input placeholder="Search assignments..." className="pl-10 w-64" />
                    </div>
                    <Button className="bg-gray-900 hover:bg-gray-800 text-white">
                      <Plus className="h-4 w-4 mr-2" />
                      New Assignment
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Assignment ID</TableHead>
                      <TableHead>Employee</TableHead>
                      <TableHead>Shift</TableHead>
                      <TableHead>Start Date</TableHead>
                      <TableHead>End Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {shiftAssignments.map((assignment) => (
                      <TableRow key={assignment.id}>
                        <TableCell className="font-medium">{assignment.id}</TableCell>
                        <TableCell>
                          <div>
                            <div className="font-medium">{assignment.name}</div>
                            <div className="text-sm text-gray-500">{assignment.employeeId}</div>
                          </div>
                        </TableCell>
                        <TableCell>{assignment.shift}</TableCell>
                        <TableCell>{assignment.startDate}</TableCell>
                        <TableCell>{assignment.endDate}</TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(assignment.status)}>
                            {assignment.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">Edit</Button>
                            <Button variant="outline" size="sm">Transfer</Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="roster" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-blue-600" />
                  Weekly Roster
                </CardTitle>
                <CardDescription>View and manage weekly shift schedules</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Label>Week Starting:</Label>
                    <Input type="date" className="w-48" />
                    <Button variant="outline">Load Roster</Button>
                  </div>
                  
                  <div className="grid grid-cols-8 gap-2 text-sm">
                    <div className="font-medium p-3 bg-gray-50 rounded">Employee</div>
                    <div className="font-medium p-3 bg-gray-50 rounded text-center">Mon</div>
                    <div className="font-medium p-3 bg-gray-50 rounded text-center">Tue</div>
                    <div className="font-medium p-3 bg-gray-50 rounded text-center">Wed</div>
                    <div className="font-medium p-3 bg-gray-50 rounded text-center">Thu</div>
                    <div className="font-medium p-3 bg-gray-50 rounded text-center">Fri</div>
                    <div className="font-medium p-3 bg-gray-50 rounded text-center">Sat</div>
                    <div className="font-medium p-3 bg-gray-50 rounded text-center">Sun</div>
                    
                    <div className="p-3 border rounded">John Doe</div>
                    <div className="p-3 border rounded text-center">M</div>
                    <div className="p-3 border rounded text-center">M</div>
                    <div className="p-3 border rounded text-center">M</div>
                    <div className="p-3 border rounded text-center">M</div>
                    <div className="p-3 border rounded text-center">M</div>
                    <div className="p-3 border rounded text-center bg-red-50">OFF</div>
                    <div className="p-3 border rounded text-center bg-red-50">OFF</div>
                    
                    <div className="p-3 border rounded">Jane Smith</div>
                    <div className="p-3 border rounded text-center">E</div>
                    <div className="p-3 border rounded text-center">E</div>
                    <div className="p-3 border rounded text-center">E</div>
                    <div className="p-3 border rounded text-center">E</div>
                    <div className="p-3 border rounded text-center">E</div>
                    <div className="p-3 border rounded text-center bg-red-50">OFF</div>
                    <div className="p-3 border rounded text-center bg-red-50">OFF</div>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-blue-100 rounded"></div>
                      <span>M - Morning Shift</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-green-100 rounded"></div>
                      <span>E - Evening Shift</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-purple-100 rounded"></div>
                      <span>N - Night Shift</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-red-50 rounded border"></div>
                      <span>OFF - Day Off</span>
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
                  <CardTitle>Shift Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Morning Shift:</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full" style={{width: '46%'}}></div>
                        </div>
                        <span className="text-sm font-medium">46%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Evening Shift:</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <div className="bg-green-600 h-2 rounded-full" style={{width: '23%'}}></div>
                        </div>
                        <span className="text-sm font-medium">23%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Night Shift:</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <div className="bg-purple-600 h-2 rounded-full" style={{width: '18%'}}></div>
                        </div>
                        <span className="text-sm font-medium">18%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Weekend Shift:</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <div className="bg-orange-600 h-2 rounded-full" style={{width: '13%'}}></div>
                        </div>
                        <span className="text-sm font-medium">13%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Shift Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Average Attendance:</span>
                      <span className="font-bold text-green-600">94.5%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>On-time Arrivals:</span>
                      <span className="font-bold text-green-600">87.2%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shift Changes:</span>
                      <span className="font-bold text-orange-600">12</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Coverage Rate:</span>
                      <span className="font-bold text-blue-600">98.1%</span>
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

export default ShiftManagement;
