
import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Fingerprint, Clock, Users, Settings, Download, Upload, Search, Camera } from "lucide-react";

const BiometricCapture = () => {
  const biometricLogs = [
    { id: "BL001", employeeId: "E12345", name: "John Doe", time: "09:15:23", type: "Check In", status: "Success", device: "Device 01" },
    { id: "BL002", employeeId: "E12346", name: "Jane Smith", time: "09:12:45", type: "Check In", status: "Success", device: "Device 02" },
    { id: "BL003", employeeId: "E12347", name: "Bob Johnson", time: "18:30:15", type: "Check Out", status: "Failed", device: "Device 01" },
    { id: "BL004", employeeId: "E12348", name: "Alice Brown", time: "17:45:33", type: "Check Out", status: "Success", device: "Device 03" },
  ];

  const devices = [
    { id: "DEV001", name: "Main Entrance", location: "Ground Floor", status: "Online", lastSync: "2024-12-21 14:30" },
    { id: "DEV002", name: "Admin Block", location: "1st Floor", status: "Online", lastSync: "2024-12-21 14:28" },
    { id: "DEV003", name: "IT Department", location: "2nd Floor", status: "Offline", lastSync: "2024-12-21 10:15" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Success": return "bg-green-100 text-green-800";
      case "Failed": return "bg-red-100 text-red-800";
      case "Online": return "bg-green-100 text-green-800";
      case "Offline": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Biometric Capture System</h1>
            <p className="text-gray-600 mt-2">Manage biometric attendance and device monitoring</p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline">
              <Upload className="h-4 w-4 mr-2" />
              Sync Data
            </Button>
            <Button className="bg-gray-900 hover:bg-gray-800 text-white">
              <Settings className="h-4 w-4 mr-2" />
              Device Settings
            </Button>
          </div>
        </div>

        <Tabs defaultValue="live-capture" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="live-capture">Live Capture</TabsTrigger>
            <TabsTrigger value="logs">Attendance Logs</TabsTrigger>
            <TabsTrigger value="devices">Device Management</TabsTrigger>
            <TabsTrigger value="enrollment">Enrollment</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="live-capture" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <Fingerprint className="h-8 w-8 text-blue-600" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Today's Scans</p>
                      <p className="text-2xl font-bold">324</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <Users className="h-8 w-8 text-green-600" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Present Today</p>
                      <p className="text-2xl font-bold">145</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <Clock className="h-8 w-8 text-orange-600" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Late Arrivals</p>
                      <p className="text-2xl font-bold">12</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <Settings className="h-8 w-8 text-purple-600" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Active Devices</p>
                      <p className="text-2xl font-bold">3</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Fingerprint className="h-5 w-5 mr-2 text-blue-600" />
                  Real-time Biometric Capture
                </CardTitle>
                <CardDescription>Live feed from biometric devices</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Fingerprint className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Waiting for Fingerprint</h3>
                  <p className="text-gray-600">Place finger on the scanner to capture attendance</p>
                  <Button className="mt-4 bg-gray-900 hover:bg-gray-800 text-white">
                    <Camera className="h-4 w-4 mr-2" />
                    Manual Capture
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="logs" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center">
                      <Clock className="h-5 w-5 mr-2 text-blue-600" />
                      Biometric Attendance Logs
                    </CardTitle>
                    <CardDescription>Track all biometric attendance entries</CardDescription>
                  </div>
                  <div className="flex space-x-2">
                    <div className="relative">
                      <Search className="h-4 w-4 absolute left-3 top-3 text-gray-400" />
                      <Input placeholder="Search logs..." className="pl-10 w-64" />
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
                      <TableHead>Log ID</TableHead>
                      <TableHead>Employee</TableHead>
                      <TableHead>Time</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Device</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {biometricLogs.map((log) => (
                      <TableRow key={log.id}>
                        <TableCell className="font-medium">{log.id}</TableCell>
                        <TableCell>
                          <div>
                            <div className="font-medium">{log.name}</div>
                            <div className="text-sm text-gray-500">{log.employeeId}</div>
                          </div>
                        </TableCell>
                        <TableCell>{log.time}</TableCell>
                        <TableCell>{log.type}</TableCell>
                        <TableCell>{log.device}</TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(log.status)}>
                            {log.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Button variant="outline" size="sm">View Details</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="devices" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Settings className="h-5 w-5 mr-2 text-blue-600" />
                  Biometric Device Management
                </CardTitle>
                <CardDescription>Monitor and configure biometric devices</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Device ID</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Last Sync</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {devices.map((device) => (
                      <TableRow key={device.id}>
                        <TableCell className="font-medium">{device.id}</TableCell>
                        <TableCell>{device.name}</TableCell>
                        <TableCell>{device.location}</TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(device.status)}>
                            {device.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{device.lastSync}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">Configure</Button>
                            <Button variant="outline" size="sm">Sync</Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="enrollment" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Employee Biometric Enrollment</CardTitle>
                <CardDescription>Register new employee fingerprints</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="employee">Select Employee</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose employee" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="E12345">John Doe (E12345)</SelectItem>
                        <SelectItem value="E12346">Jane Smith (E12346)</SelectItem>
                        <SelectItem value="E12347">Bob Johnson (E12347)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="finger">Finger Position</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select finger" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="thumb">Thumb</SelectItem>
                        <SelectItem value="index">Index Finger</SelectItem>
                        <SelectItem value="middle">Middle Finger</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="text-center py-8 border-2 border-dashed border-gray-300 rounded-lg">
                  <Fingerprint className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Ready for Enrollment</h3>
                  <p className="text-gray-600 mb-4">Place finger on scanner to begin enrollment</p>
                  <Button className="bg-gray-900 hover:bg-gray-800 text-white">
                    Start Enrollment
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Daily Attendance Report</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Total Employees:</span>
                      <span className="font-bold">150</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Present Today:</span>
                      <span className="font-bold text-green-600">145</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Absent:</span>
                      <span className="font-bold text-red-600">5</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Late Arrivals:</span>
                      <span className="font-bold text-orange-600">12</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Device Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Successful Scans:</span>
                      <span className="font-bold text-green-600">95.2%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Failed Scans:</span>
                      <span className="font-bold text-red-600">4.8%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Average Response Time:</span>
                      <span className="font-bold">1.2s</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Device Uptime:</span>
                      <span className="font-bold text-green-600">99.1%</span>
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

export default BiometricCapture;
