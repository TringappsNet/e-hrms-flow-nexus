
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { AppLayout } from "@/components/layout/AppLayout";
import { History, Search, Filter, Eye, Download } from "lucide-react";

const UserHistory = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const historyEntries = [
    {
      id: "HIST001",
      userId: "EMP001",
      userName: "John Doe",
      action: "Login",
      module: "Dashboard",
      timestamp: "2024-01-20 09:30:00",
      ipAddress: "192.168.1.100",
      status: "Success"
    },
    {
      id: "HIST002", 
      userId: "EMP002",
      userName: "Jane Smith",
      action: "Leave Application",
      module: "Leave Management",
      timestamp: "2024-01-20 10:15:00",
      ipAddress: "192.168.1.101",
      status: "Success"
    },
    {
      id: "HIST003",
      userId: "EMP003",
      userName: "Mike Johnson",
      action: "Profile Update",
      module: "Employee Management",
      timestamp: "2024-01-20 11:00:00",
      ipAddress: "192.168.1.102",
      status: "Success"
    },
    {
      id: "HIST004",
      userId: "EMP001",
      userName: "John Doe",
      action: "Failed Login",
      module: "Authentication",
      timestamp: "2024-01-20 11:30:00",
      ipAddress: "192.168.1.100",
      status: "Failed"
    },
    {
      id: "HIST005",
      userId: "EMP004",
      userName: "Sarah Wilson",
      action: "Transfer Request",
      module: "Transfer Management",
      timestamp: "2024-01-20 14:20:00",
      ipAddress: "192.168.1.103",
      status: "Success"
    }
  ];

  const filteredHistory = historyEntries.filter(entry =>
    entry.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    entry.action.toLowerCase().includes(searchTerm.toLowerCase()) ||
    entry.module.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusBadge = (status: string) => {
    const statusColors = {
      'Success': 'bg-green-100 text-green-800',
      'Failed': 'bg-red-100 text-red-800',
      'Pending': 'bg-yellow-100 text-yellow-800'
    };
    return statusColors[status as keyof typeof statusColors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <AppLayout>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">User Activity History</h2>
          <p className="text-gray-600">Track user activities and system access logs</p>
        </div>

        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="flex items-center">
                  <History className="h-5 w-5 mr-2 text-blue-600" />
                  Activity Log
                </CardTitle>
                <CardDescription>Monitor user actions and system interactions</CardDescription>
              </div>
              <Button>
                <Download className="h-4 w-4 mr-2" />
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
                    placeholder="Search activities..."
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

            <div className="overflow-x-auto">
              <table className="w-full table-auto">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">Timestamp</th>
                    <th className="text-left py-3 px-4">User</th>
                    <th className="text-left py-3 px-4">Action</th>
                    <th className="text-left py-3 px-4">Module</th>
                    <th className="text-left py-3 px-4">IP Address</th>
                    <th className="text-left py-3 px-4">Status</th>
                    <th className="text-left py-3 px-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredHistory.map((entry) => (
                    <tr key={entry.id} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium text-sm">
                        {new Date(entry.timestamp).toLocaleString()}
                      </td>
                      <td className="py-3 px-4">
                        <div>
                          <div className="font-medium">{entry.userName}</div>
                          <div className="text-sm text-gray-500">{entry.userId}</div>
                        </div>
                      </td>
                      <td className="py-3 px-4">{entry.action}</td>
                      <td className="py-3 px-4">{entry.module}</td>
                      <td className="py-3 px-4 text-sm text-gray-600">{entry.ipAddress}</td>
                      <td className="py-3 px-4">
                        <Badge className={getStatusBadge(entry.status)} variant="secondary">
                          {entry.status}
                        </Badge>
                      </td>
                      <td className="py-3 px-4">
                        <Button variant="outline" size="sm">
                          <Eye className="h-3 w-3 mr-1" />
                          Details
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </main>
    </AppLayout>
  );
};

export default UserHistory;
