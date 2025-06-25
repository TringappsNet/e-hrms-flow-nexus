
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { AppLayout } from "@/components/layout/AppLayout";
import { UserPlus, Plus, Search, Filter, Calendar, Users, FileText, Eye, Edit } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Recruitment = () => {
  return (
    <AppLayout>
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Recruitment Management</h2>
          <p className="text-gray-600">Manage recruitment processes, job postings, and candidate applications</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200">
            <div className="flex items-center">
              <UserPlus className="h-8 w-8 text-blue-600" />
              <div className="ml-3">
                <p className="text-sm font-medium text-blue-600">Open Positions</p>
                <p className="text-2xl font-bold text-gray-900">18</p>
              </div>
            </div>
          </Card>
          <Card className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
            <div className="flex items-center">
              <Users className="h-8 w-8 text-green-600" />
              <div className="ml-3">
                <p className="text-sm font-medium text-green-600">Applications</p>
                <p className="text-2xl font-bold text-gray-900">245</p>
              </div>
            </div>
          </Card>
          <Card className="p-4 bg-gradient-to-r from-purple-50 to-violet-50 border-purple-200">
            <div className="flex items-center">
              <Calendar className="h-8 w-8 text-purple-600" />
              <div className="ml-3">
                <p className="text-sm font-medium text-purple-600">Interviews</p>
                <p className="text-2xl font-bold text-gray-900">32</p>
              </div>
            </div>
          </Card>
          <Card className="p-4 bg-gradient-to-r from-orange-50 to-amber-50 border-orange-200">
            <div className="flex items-center">
              <FileText className="h-8 w-8 text-orange-600" />
              <div className="ml-3">
                <p className="text-sm font-medium text-orange-600">Selected</p>
                <p className="text-2xl font-bold text-gray-900">12</p>
              </div>
            </div>
          </Card>
        </div>

        <Tabs defaultValue="positions" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="positions">Job Positions</TabsTrigger>
            <TabsTrigger value="applications">Applications</TabsTrigger>
            <TabsTrigger value="interviews">Interviews</TabsTrigger>
          </TabsList>

          <TabsContent value="positions">
            <Card className="shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b">
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="flex items-center text-xl">
                      <UserPlus className="h-6 w-6 mr-3 text-blue-600" />
                      Job Positions
                    </CardTitle>
                    <CardDescription className="text-gray-600 mt-1">
                      Manage open positions and job postings
                    </CardDescription>
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <Plus className="h-4 w-4 mr-2" />
                    Create Position
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex space-x-4 mb-6">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input
                        placeholder="Search positions..."
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
                        <th className="text-left py-3 px-4 font-semibold">Position Title</th>
                        <th className="text-left py-3 px-4 font-semibold">Department</th>
                        <th className="text-left py-3 px-4 font-semibold">Grade</th>
                        <th className="text-left py-3 px-4 font-semibold">Vacancies</th>
                        <th className="text-left py-3 px-4 font-semibold">Applications</th>
                        <th className="text-left py-3 px-4 font-semibold">Status</th>
                        <th className="text-left py-3 px-4 font-semibold">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4">
                          <div>
                            <div className="font-medium">Assistant Manager</div>
                            <div className="text-sm text-gray-500">Finance Department</div>
                          </div>
                        </td>
                        <td className="py-3 px-4">Finance</td>
                        <td className="py-3 px-4">Grade B</td>
                        <td className="py-3 px-4">3</td>
                        <td className="py-3 px-4">45</td>
                        <td className="py-3 px-4">
                          <Badge className="bg-green-100 text-green-800">Active</Badge>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              <Eye className="h-4 w-4 mr-1" />
                              View
                            </Button>
                            <Button variant="outline" size="sm">
                              <Edit className="h-4 w-4 mr-1" />
                              Edit
                            </Button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="applications">
            <Card className="shadow-lg">
              <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 border-b">
                <CardTitle className="flex items-center text-xl">
                  <Users className="h-6 w-6 mr-3 text-green-600" />
                  Job Applications
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="text-center py-8">
                  <Users className="h-16 w-16 mx-auto text-gray-400 mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Application Management</h3>
                  <p className="text-gray-600">Track and manage candidate applications for all positions</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="interviews">
            <Card className="shadow-lg">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-violet-50 border-b">
                <CardTitle className="flex items-center text-xl">
                  <Calendar className="h-6 w-6 mr-3 text-purple-600" />
                  Interview Schedule
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="text-center py-8">
                  <Calendar className="h-16 w-16 mx-auto text-gray-400 mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Interview Management</h3>
                  <p className="text-gray-600">Schedule and manage interviews for candidates</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
};

export default Recruitment;
