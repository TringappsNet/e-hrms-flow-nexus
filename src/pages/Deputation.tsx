
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { AppLayout } from "@/components/layout/AppLayout";
import { MapPin, Plus, Search, Filter, Calendar, ArrowRightLeft, Clock } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Deputation = () => {
  return (
    <AppLayout>
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Deputation Handling</h2>
          <p className="text-gray-600">Manage employee deputations and temporary assignments</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200">
            <div className="flex items-center">
              <MapPin className="h-8 w-8 text-blue-600" />
              <div className="ml-3">
                <p className="text-sm font-medium text-blue-600">Active Deputations</p>
                <p className="text-2xl font-bold text-gray-900">28</p>
              </div>
            </div>
          </Card>
          <Card className="p-4 bg-gradient-to-r from-orange-50 to-amber-50 border-orange-200">
            <div className="flex items-center">
              <Clock className="h-8 w-8 text-orange-600" />
              <div className="ml-3">
                <p className="text-sm font-medium text-orange-600">Pending Approval</p>
                <p className="text-2xl font-bold text-gray-900">12</p>
              </div>
            </div>
          </Card>
          <Card className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
            <div className="flex items-center">
              <ArrowRightLeft className="h-8 w-8 text-green-600" />
              <div className="ml-3">
                <p className="text-sm font-medium text-green-600">This Month</p>
                <p className="text-2xl font-bold text-gray-900">8</p>
              </div>
            </div>
          </Card>
          <Card className="p-4 bg-gradient-to-r from-purple-50 to-violet-50 border-purple-200">
            <div className="flex items-center">
              <Calendar className="h-8 w-8 text-purple-600" />
              <div className="ml-3">
                <p className="text-sm font-medium text-purple-600">Expiring Soon</p>
                <p className="text-2xl font-bold text-gray-900">5</p>
              </div>
            </div>
          </Card>
        </div>

        <Card className="shadow-lg">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="flex items-center text-xl">
                  <MapPin className="h-6 w-6 mr-3 text-blue-600" />
                  Deputation Management
                </CardTitle>
                <CardDescription className="text-gray-600 mt-1">
                  Track and manage employee deputations and temporary assignments
                </CardDescription>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Plus className="h-4 w-4 mr-2" />
                New Deputation
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="flex space-x-4 mb-6">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search deputations..."
                    className="pl-10"
                  />
                </div>
              </div>
              <Select>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full table-auto">
                <thead>
                  <tr className="border-b bg-gray-50">
                    <th className="text-left py-3 px-4 font-semibold">Employee</th>
                    <th className="text-left py-3 px-4 font-semibold">From Department</th>
                    <th className="text-left py-3 px-4 font-semibold">To Department</th>
                    <th className="text-left py-3 px-4 font-semibold">Start Date</th>
                    <th className="text-left py-3 px-4 font-semibold">End Date</th>
                    <th className="text-left py-3 px-4 font-semibold">Status</th>
                    <th className="text-left py-3 px-4 font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4">
                      <div>
                        <div className="font-medium">John Smith</div>
                        <div className="text-sm text-gray-500">EMP001</div>
                      </div>
                    </td>
                    <td className="py-3 px-4">Administration</td>
                    <td className="py-3 px-4">Finance</td>
                    <td className="py-3 px-4">2024-01-15</td>
                    <td className="py-3 px-4">2024-06-15</td>
                    <td className="py-3 px-4">
                      <Badge className="bg-green-100 text-green-800">Active</Badge>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">View</Button>
                        <Button variant="outline" size="sm">Edit</Button>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4">
                      <div>
                        <div className="font-medium">Sarah Johnson</div>
                        <div className="text-sm text-gray-500">EMP002</div>
                      </div>
                    </td>
                    <td className="py-3 px-4">IT</td>
                    <td className="py-3 px-4">Administration</td>
                    <td className="py-3 px-4">2024-02-01</td>
                    <td className="py-3 px-4">2024-08-01</td>
                    <td className="py-3 px-4">
                      <Badge className="bg-yellow-100 text-yellow-800">Pending Approval</Badge>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">Approve</Button>
                        <Button variant="outline" size="sm">Reject</Button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default Deputation;
