
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { AppLayout } from "@/components/layout/AppLayout";
import { mockEmployees, Employee } from "@/data/mockData";
import { EmployeeForm } from "@/components/employee/EmployeeForm";
import { EmployeeDetails } from "@/components/employee/EmployeeDetails";
import { Users, Plus, Search, Filter, Eye, Edit, Trash2 } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const EmployeeManagement = () => {
  const [employees, setEmployees] = useState<Employee[]>(mockEmployees);
  const [searchTerm, setSearchTerm] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);
  const [editingEmployee, setEditingEmployee] = useState<Employee | null>(null);

  const filteredEmployees = employees.filter(employee =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.employeeId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.designation.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddEmployee = (employeeData: Omit<Employee, 'employeeId'>) => {
    const newEmployee: Employee = {
      ...employeeData,
      employeeId: `EMP${(employees.length + 1).toString().padStart(3, '0')}`
    };
    setEmployees([...employees, newEmployee]);
    setShowForm(false);
  };

  const handleEditEmployee = (employeeData: Omit<Employee, 'employeeId'>) => {
    if (editingEmployee) {
      setEmployees(prev => prev.map(emp =>
        emp.employeeId === editingEmployee.employeeId 
          ? { ...employeeData, employeeId: editingEmployee.employeeId }
          : emp
      ));
      setEditingEmployee(null);
      setShowForm(false);
    }
  };

  const handleDeleteEmployee = (employeeId: string) => {
    setEmployees(prev => prev.filter(emp => emp.employeeId !== employeeId));
  };

  const getStatusBadge = (status: string) => {
    const statusColors = {
      'Active': 'bg-green-100 text-green-800',
      'On Leave': 'bg-yellow-100 text-yellow-800',
      'Inactive': 'bg-red-100 text-red-800'
    };
    return statusColors[status as keyof typeof statusColors] || 'bg-gray-100 text-gray-800';
  };

  if (showForm) {
    return (
      <AppLayout>
        <div className="p-8">
          <EmployeeForm
            employee={editingEmployee}
            onSubmit={editingEmployee ? handleEditEmployee : handleAddEmployee}
            onCancel={() => {
              setShowForm(false);
              setEditingEmployee(null);
            }}
          />
        </div>
      </AppLayout>
    );
  }

  if (selectedEmployee) {
    return (
      <AppLayout>
        <div className="p-8">
          <EmployeeDetails
            employee={selectedEmployee}
            onBack={() => setSelectedEmployee(null)}
            onEdit={() => {
              setEditingEmployee(selectedEmployee);
              setSelectedEmployee(null);
              setShowForm(true);
            }}
          />
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <div className="p-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Employee Management</h2>
          <p className="text-gray-600">Manage employee profiles, records, and information</p>
        </div>

        <Tabs defaultValue="active" className="space-y-6">
          <TabsList>
            <TabsTrigger value="active">Active Employees</TabsTrigger>
            <TabsTrigger value="all">All Employees</TabsTrigger>
          </TabsList>

          <TabsContent value="active">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="flex items-center">
                      <Users className="h-5 w-5 mr-2 text-blue-600" />
                      Employee Directory
                    </CardTitle>
                    <CardDescription>View and manage employee information</CardDescription>
                  </div>
                  <Button onClick={() => setShowForm(true)}>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Employee
                  </Button>
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

                <div className="grid gap-4">
                  {filteredEmployees.map((employee) => (
                    <Card key={employee.employeeId} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <div className="flex items-center space-x-4 mb-4">
                              <div>
                                <h3 className="font-semibold text-lg">{employee.name}</h3>
                                <p className="text-sm text-gray-600">{employee.employeeId}</p>
                              </div>
                              <Badge className={getStatusBadge(employee.status)} variant="secondary">
                                {employee.status}
                              </Badge>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                              <div>
                                <p className="text-sm text-gray-600">Department</p>
                                <p className="font-medium">{employee.department}</p>
                              </div>
                              <div>
                                <p className="text-sm text-gray-600">Designation</p>
                                <p className="font-medium">{employee.designation}</p>
                              </div>
                              <div>
                                <p className="text-sm text-gray-600">Join Date</p>
                                <p className="font-medium">{new Date(employee.joinDate).toLocaleDateString()}</p>
                              </div>
                              <div>
                                <p className="text-sm text-gray-600">Contact</p>
                                <p className="font-medium">{employee.phone}</p>
                              </div>
                            </div>
                          </div>

                          <div className="flex flex-col space-y-2 ml-4">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => setSelectedEmployee(employee)}
                            >
                              <Eye className="h-4 w-4 mr-1" />
                              View
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => {
                                setEditingEmployee(employee);
                                setShowForm(true);
                              }}
                            >
                              <Edit className="h-4 w-4 mr-1" />
                              Edit
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleDeleteEmployee(employee.employeeId)}
                              className="text-red-600 hover:text-red-700"
                            >
                              <Trash2 className="h-4 w-4 mr-1" />
                              Delete
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="all">
            {/* Similar content for all employees */}
            <Card>
              <CardHeader>
                <CardTitle>All Employees</CardTitle>
                <CardDescription>Complete employee directory including inactive employees</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">All employees view - similar layout as active employees</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
};

export default EmployeeManagement;
