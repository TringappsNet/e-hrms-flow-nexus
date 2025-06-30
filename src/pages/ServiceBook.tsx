
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { AppLayout } from "@/components/layout/AppLayout";
import { ServiceBookDetails } from "@/components/servicebook/ServiceBookDetails";
import { 
  FileText, 
  Plus, 
  Search, 
  Filter, 
  Eye, 
  Edit, 
  Download,
  Users,
  Briefcase,
  GraduationCap,
  Heart,
  Award,
  Building2,
  Activity,
  TrendingUp
} from "lucide-react";

interface ServiceBookEmployee {
  id: string;
  employeeId: string;
  name: string;
  department: string;
  position: string;
  joiningDate: string;
  status: 'Active' | 'Inactive' | 'Retired';
  lastUpdated: string;
}

const mockServiceBookEmployees: ServiceBookEmployee[] = [
  {
    id: "1",
    employeeId: "GOA001",
    name: "Rajesh Kumar Sharma",
    department: "Finance Department",
    position: "Deputy Secretary",
    joiningDate: "2015-06-15",
    status: "Active",
    lastUpdated: "2024-01-15"
  },
  {
    id: "2",
    employeeId: "GOA002",
    name: "Priya Menon",
    department: "Health Department",
    position: "Joint Secretary",
    joiningDate: "2018-03-20",
    status: "Active",
    lastUpdated: "2024-01-10"
  },
  {
    id: "3",
    employeeId: "GOA003",
    name: "Anil Desai",
    department: "Education Department",
    position: "Under Secretary",
    joiningDate: "2012-08-10",
    status: "Active",
    lastUpdated: "2023-12-28"
  },
  {
    id: "4",
    employeeId: "GOA004",
    name: "Sunita Patel",
    department: "Tourism Department",
    position: "Section Officer",
    joiningDate: "2010-05-05",
    status: "Retired",
    lastUpdated: "2023-11-15"
  },
  {
    id: "5",
    employeeId: "GOA005",
    name: "Ramesh Naik",
    department: "PWD",
    position: "Assistant Engineer",
    joiningDate: "2019-01-15",
    status: "Active",
    lastUpdated: "2024-01-08"
  }
];

const ServiceBook = () => {
  const [employees] = useState<ServiceBookEmployee[]>(mockServiceBookEmployees);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEmployee, setSelectedEmployee] = useState<string | null>(null);
  const [showServiceBook, setShowServiceBook] = useState(false);

  const filteredEmployees = employees.filter(employee =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.employeeId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.position.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleViewServiceBook = (employeeId: string) => {
    setSelectedEmployee(employeeId);
    setShowServiceBook(true);
  };

  const handleBackToList = () => {
    setShowServiceBook(false);
    setSelectedEmployee(null);
  };

  if (showServiceBook && selectedEmployee) {
    return (
      <AppLayout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <ServiceBookDetails 
            employeeId={selectedEmployee} 
            onBack={handleBackToList} 
          />
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Service Book Management</h2>
          <p className="text-gray-600">Maintain comprehensive service records for all employees</p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-8">
          <Button variant="outline" className="flex flex-col items-center p-4 h-auto">
            <Users className="h-6 w-6 mb-2 text-blue-600" />
            <span className="text-xs text-center">Employee Management</span>
          </Button>
          <Button variant="outline" className="flex flex-col items-center p-4 h-auto">
            <Briefcase className="h-6 w-6 mb-2 text-green-600" />
            <span className="text-xs text-center">Transfer & Promotion</span>
          </Button>
          <Button variant="outline" className="flex flex-col items-center p-4 h-auto">
            <TrendingUp className="h-6 w-6 mb-2 text-purple-600" />
            <span className="text-xs text-center">Salary Structure</span>
          </Button>
          <Button variant="outline" className="flex flex-col items-center p-4 h-auto">
            <GraduationCap className="h-6 w-6 mb-2 text-orange-600" />
            <span className="text-xs text-center">Training</span>
          </Button>
          <Button variant="outline" className="flex flex-col items-center p-4 h-auto">
            <Heart className="h-6 w-6 mb-2 text-red-600" />
            <span className="text-xs text-center">Medical Claims</span>
          </Button>
          <Button variant="outline" className="flex flex-col items-center p-4 h-auto">
            <Award className="h-6 w-6 mb-2 text-yellow-600" />
            <span className="text-xs text-center">Performance</span>
          </Button>
          <Button variant="outline" className="flex flex-col items-center p-4 h-auto">
            <Building2 className="h-6 w-6 mb-2 text-indigo-600" />
            <span className="text-xs text-center">Assets</span>
          </Button>
          <Button variant="outline" className="flex flex-col items-center p-4 h-auto">
            <Activity className="h-6 w-6 mb-2 text-teal-600" />
            <span className="text-xs text-center">Activities</span>
          </Button>
        </div>

        <Card className="shadow-lg">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="flex items-center text-xl">
                  <FileText className="h-6 w-6 mr-3 text-blue-600" />
                  Service Records
                </CardTitle>
                <CardDescription className="text-gray-600 mt-1">
                  Complete service history and documentation for all employees
                </CardDescription>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Plus className="h-4 w-4 mr-2" />
                Add New Employee
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="flex space-x-4 mb-6">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search by employee ID, name, department, or position..."
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
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Export All
              </Button>
            </div>

            {filteredEmployees.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b bg-gray-50">
                      <th className="text-left py-3 px-4 font-semibold">Employee ID</th>
                      <th className="text-left py-3 px-4 font-semibold">Name</th>
                      <th className="text-left py-3 px-4 font-semibold">Department</th>
                      <th className="text-left py-3 px-4 font-semibold">Position</th>
                      <th className="text-left py-3 px-4 font-semibold">Joining Date</th>
                      <th className="text-left py-3 px-4 font-semibold">Status</th>
                      <th className="text-left py-3 px-4 font-semibold">Last Updated</th>
                      <th className="text-left py-3 px-4 font-semibold">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredEmployees.map((employee) => (
                      <tr key={employee.id} className="border-b hover:bg-gray-50 transition-colors">
                        <td className="py-3 px-4 font-medium text-blue-600">{employee.employeeId}</td>
                        <td className="py-3 px-4 font-medium">{employee.name}</td>
                        <td className="py-3 px-4 text-gray-600">{employee.department}</td>
                        <td className="py-3 px-4 text-gray-600">{employee.position}</td>
                        <td className="py-3 px-4 text-gray-600">
                          {new Date(employee.joiningDate).toLocaleDateString()}
                        </td>
                        <td className="py-3 px-4">
                          <Badge
                            className={
                              employee.status === "Active"
                                ? "bg-green-100 text-green-800"
                                : employee.status === "Retired"
                                ? "bg-blue-100 text-blue-800"
                                : "bg-red-100 text-red-800"
                            }
                            variant="secondary"
                          >
                            {employee.status}
                          </Badge>
                        </td>
                        <td className="py-3 px-4 text-gray-600 text-sm">
                          {new Date(employee.lastUpdated).toLocaleDateString()}
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex space-x-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleViewServiceBook(employee.employeeId)}
                              className="hover:bg-blue-50"
                            >
                              <Eye className="h-3 w-3 mr-1" />
                              View
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              className="hover:bg-green-50"
                            >
                              <Edit className="h-3 w-3 mr-1" />
                              Edit
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              className="hover:bg-purple-50"
                            >
                              <Download className="h-3 w-3 mr-1" />
                              PDF
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="bg-gray-50 rounded-lg p-8 text-center">
                <FileText className="h-16 w-16 mx-auto text-gray-400 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No Service Records Found</h3>
                <p className="text-gray-600 mb-4">
                  {searchTerm 
                    ? `No employees found matching "${searchTerm}"`
                    : "Start by adding employee service records to manage comprehensive employee data."
                  }
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Plus className="h-4 w-4 mr-2" />
                  Add First Employee
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Service Book Features Overview */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center">
                <Users className="h-5 w-5 mr-2 text-blue-600" />
                Personal Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-3">
                Complete personal details, family background, contact information, and emergency contacts.
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• Personal Details & Blood Group</li>
                <li>• Family Background & Children</li>
                <li>• Local & Emergency Address</li>
                <li>• Contact Information</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center">
                <Briefcase className="h-5 w-5 mr-2 text-green-600" />
                Employment History
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-3">
                Complete employment records including positions, transfers, promotions, and probation details.
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• Joining & Probation Confirmation</li>
                <li>• Current Position & Job Profile</li>
                <li>• Transfer & Promotion History</li>
                <li>• Department & Section Details</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center">
                <TrendingUp className="h-5 w-5 mr-2 text-purple-600" />
                Salary & Benefits
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-3">
                Comprehensive salary structure, increments, and all facilities provided to employees.
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• Current Salary Structure</li>
                <li>• Annual Increment History</li>
                <li>• Medical Insurance & LTC</li>
                <li>• Vehicle & Other Allowances</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center">
                <GraduationCap className="h-5 w-5 mr-2 text-orange-600" />
                Education & Training
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-3">
                Educational qualifications, professional experience, and training programs completed.
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• Educational Qualifications</li>
                <li>• Previous Work Experience</li>
                <li>• Training Programs & Certificates</li>
                <li>• Professional Development</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center">
                <Heart className="h-5 w-5 mr-2 text-red-600" />
                Medical & Safety
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-3">
                Medical history, accident records, and health-related information for employee safety.
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• Medical History & Treatment</li>
                <li>• Accident Records & Compensation</li>
                <li>• Blood Group & Emergency Medical Info</li>
                <li>• Medical Insurance Claims</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center">
                <Award className="h-5 w-5 mr-2 text-yellow-600" />
                Recognition & Performance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-3">
                Awards, recognitions, appraisal history, and performance evaluation records.
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• Awards & Recognition</li>
                <li>• Children's Achievements</li>
                <li>• Annual Appraisal History</li>
                <li>• Performance Ratings</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
};

export default ServiceBook;
