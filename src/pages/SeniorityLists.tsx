
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { AppLayout } from "@/components/layout/AppLayout";
import { List, Plus, Search, Filter, Download, Eye } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const SeniorityLists = () => {
  return (
    <AppLayout>
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Seniority Lists</h2>
          <p className="text-gray-600">Maintain and manage employee seniority lists by department and grade</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200">
            <div className="flex items-center">
              <List className="h-8 w-8 text-blue-600" />
              <div className="ml-3">
                <p className="text-sm font-medium text-blue-600">Total Lists</p>
                <p className="text-2xl font-bold text-gray-900">12</p>
              </div>
            </div>
          </Card>
          <Card className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
            <div className="flex items-center">
              <List className="h-8 w-8 text-green-600" />
              <div className="ml-3">
                <p className="text-sm font-medium text-green-600">Updated This Month</p>
                <p className="text-2xl font-bold text-gray-900">8</p>
              </div>
            </div>
          </Card>
          <Card className="p-4 bg-gradient-to-r from-purple-50 to-violet-50 border-purple-200">
            <div className="flex items-center">
              <List className="h-8 w-8 text-purple-600" />
              <div className="ml-3">
                <p className="text-sm font-medium text-purple-600">Departments</p>
                <p className="text-2xl font-bold text-gray-900">15</p>
              </div>
            </div>
          </Card>
          <Card className="p-4 bg-gradient-to-r from-orange-50 to-amber-50 border-orange-200">
            <div className="flex items-center">
              <List className="h-8 w-8 text-orange-600" />
              <div className="ml-3">
                <p className="text-sm font-medium text-orange-600">Pending Review</p>
                <p className="text-2xl font-bold text-gray-900">3</p>
              </div>
            </div>
          </Card>
        </div>

        <Card className="shadow-lg">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="flex items-center text-xl">
                  <List className="h-6 w-6 mr-3 text-blue-600" />
                  Seniority Management
                </CardTitle>
                <CardDescription className="text-gray-600 mt-1">
                  Generate and maintain seniority lists for all departments
                </CardDescription>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Plus className="h-4 w-4 mr-2" />
                Generate New List
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="flex space-x-4 mb-6">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search seniority lists..."
                    className="pl-10"
                  />
                </div>
              </div>
              <Select>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="administration">Administration</SelectItem>
                  <SelectItem value="finance">Finance</SelectItem>
                  <SelectItem value="hr">Human Resources</SelectItem>
                  <SelectItem value="it">Information Technology</SelectItem>
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
                    <th className="text-left py-3 px-4 font-semibold">Department</th>
                    <th className="text-left py-3 px-4 font-semibold">Grade</th>
                    <th className="text-left py-3 px-4 font-semibold">Total Employees</th>
                    <th className="text-left py-3 px-4 font-semibold">Last Updated</th>
                    <th className="text-left py-3 px-4 font-semibold">Status</th>
                    <th className="text-left py-3 px-4 font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4">Administration</td>
                    <td className="py-3 px-4">Grade A</td>
                    <td className="py-3 px-4">45</td>
                    <td className="py-3 px-4">2024-12-15</td>
                    <td className="py-3 px-4">
                      <Badge className="bg-green-100 text-green-800">Updated</Badge>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </Button>
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-1" />
                          Download
                        </Button>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4">Finance</td>
                    <td className="py-3 px-4">Grade B</td>
                    <td className="py-3 px-4">32</td>
                    <td className="py-3 px-4">2024-12-10</td>
                    <td className="py-3 px-4">
                      <Badge className="bg-yellow-100 text-yellow-800">Pending Review</Badge>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </Button>
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-1" />
                          Download
                        </Button>
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

export default SeniorityLists;
