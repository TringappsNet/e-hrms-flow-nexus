
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/layout/Navigation";
import { History, Search, Filter, Calendar, User, FileText } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const UserHistory = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Mock user activity history
  const userHistory = [
    {
      id: '1',
      userId: 'EMP001',
      userName: 'Rajesh Kumar',
      action: 'Login',
      module: 'Dashboard',
      timestamp: '2024-01-16 09:00:00',
      ipAddress: '192.168.1.100',
      status: 'Success'
    },
    {
      id: '2',
      userId: 'EMP001',
      userName: 'Rajesh Kumar',
      action: 'Leave Application',
      module: 'Leave Management',
      timestamp: '2024-01-16 10:30:00',
      ipAddress: '192.168.1.100',
      status: 'Success'
    },
    {
      id: '3',
      userId: 'EMP002',
      userName: 'Priya Sharma',
      action: 'Employee Profile Update',
      module: 'Employee Management',
      timestamp: '2024-01-16 11:15:00',
      ipAddress: '192.168.1.101',
      status: 'Success'
    },
    {
      id: '4',
      userId: 'EMP003',
      userName: 'Amit Singh',
      action: 'Attendance Marking',
      module: 'Attendance',
      timestamp: '2024-01-16 09:05:00',
      ipAddress: '192.168.1.102',
      status: 'Success'
    },
    {
      id: '5',
      userId: 'EMP001',
      userName: 'Rajesh Kumar',
      action: 'Document Download',
      module: 'Reports',
      timestamp: '2024-01-16 14:20:00',
      ipAddress: '192.168.1.100',
      status: 'Success'
    }
  ];

  const filteredHistory = userHistory.filter(entry =>
    entry.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    entry.action.toLowerCase().includes(searchTerm.toLowerCase()) ||
    entry.module.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusBadge = (status: string) => {
    const statusColors = {
      'Success': 'bg-green-100 text-green-800',
      'Failed': 'bg-red-100 text-red-800',
      'Warning': 'bg-yellow-100 text-yellow-800'
    };
    return statusColors[status as keyof typeof statusColors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">User Activity History</h2>
          <p className="text-gray-600">Track user actions and system interactions</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <User className="h-8 w-8 text-blue-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Active Users</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {new Set(filteredHistory.map(h => h.userId)).size}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <History className="h-8 w-8 text-green-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Actions</p>
                  <p className="text-2xl font-bold text-gray-900">{filteredHistory.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Calendar className="h-8 w-8 text-purple-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Today</p>
                  <p className="text-2xl font-bold text-gray-900">{filteredHistory.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <FileText className="h-8 w-8 text-orange-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Success Rate</p>
                  <p className="text-2xl font-bold text-gray-900">100%</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="flex items-center">
                  <History className="h-5 w-5 mr-2 text-blue-600" />
                  Activity Log
                </CardTitle>
                <CardDescription>Detailed user activity and system interactions</CardDescription>
              </div>
              <Button variant="outline">
                <FileText className="h-4 w-4 mr-2" />
                Export Log
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-4 mb-6">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search activity..."
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

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>User</TableHead>
                  <TableHead>Action</TableHead>
                  <TableHead>Module</TableHead>
                  <TableHead>Timestamp</TableHead>
                  <TableHead>IP Address</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredHistory.map((entry) => (
                  <TableRow key={entry.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{entry.userName}</div>
                        <div className="text-sm text-gray-600">{entry.userId}</div>
                      </div>
                    </TableCell>
                    <TableCell className="font-medium">{entry.action}</TableCell>
                    <TableCell>{entry.module}</TableCell>
                    <TableCell>{new Date(entry.timestamp).toLocaleString()}</TableCell>
                    <TableCell>{entry.ipAddress}</TableCell>
                    <TableCell>
                      <Badge className={getStatusBadge(entry.status)} variant="secondary">
                        {entry.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default UserHistory;
