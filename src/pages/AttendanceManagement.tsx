
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { AppLayout } from "@/components/layout/AppLayout";
import { UserCheck, Calendar, Clock, Search, Filter, Download } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AttendanceManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Mock attendance data
  const attendanceData = [
    {
      employeeId: "EMP001",
      name: "John Doe",
      department: "IT",
      checkIn: "09:00 AM",
      checkOut: "06:00 PM",
      status: "Present",
      date: "2024-01-15"
    },
    // Add more mock data as needed
  ];

  return (
    <AppLayout>
      <div className="p-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Attendance Management</h2>
          <p className="text-gray-600">Track and manage employee attendance records</p>
        </div>

        <Tabs defaultValue="daily" className="space-y-6">
          <TabsList>
            <TabsTrigger value="daily">Daily Attendance</TabsTrigger>
            <TabsTrigger value="monthly">Monthly Reports</TabsTrigger>
            <TabsTrigger value="shifts">Shift Management</TabsTrigger>
          </TabsList>

          <TabsContent value="daily">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="flex items-center">
                      <UserCheck className="h-5 w-5 mr-2 text-blue-600" />
                      Today's Attendance
                    </CardTitle>
                    <CardDescription>Real-time attendance tracking</CardDescription>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline">
                      <Download className="h-4 w-4 mr-2" />
                      Export
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4 mb-6">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input
                        placeholder="Search employees..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <Button variant="outline">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                </div>

                <div className="space-y-4">
                  {attendanceData.map((record, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center space-x-4">
                            <div>
                              <h3 className="font-semibold">{record.name}</h3>
                              <p className="text-sm text-gray-600">{record.employeeId} - {record.department}</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-6">
                            <div className="text-center">
                              <p className="text-sm text-gray-600">Check In</p>
                              <p className="font-medium flex items-center">
                                <Clock className="h-4 w-4 mr-1" />
                                {record.checkIn}
                              </p>
                            </div>
                            <div className="text-center">
                              <p className="text-sm text-gray-600">Check Out</p>
                              <p className="font-medium flex items-center">
                                <Clock className="h-4 w-4 mr-1" />
                                {record.checkOut}
                              </p>
                            </div>
                            <Badge className="bg-green-100 text-green-800" variant="secondary">
                              {record.status}
                            </Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="monthly">
            <Card>
              <CardHeader>
                <CardTitle>Monthly Attendance Reports</CardTitle>
                <CardDescription>Comprehensive monthly attendance analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Monthly reports functionality will be implemented here</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="shifts">
            <Card>
              <CardHeader>
                <CardTitle>Shift Management</CardTitle>
                <CardDescription>Configure and manage work shifts</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Shift management functionality will be implemented here</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
};

export default AttendanceManagement;
