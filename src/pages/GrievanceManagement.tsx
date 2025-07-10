
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { AppLayout } from "@/components/layout/AppLayout";
import { MessageSquare, Plus, Search, Filter, Eye, MessageCircle } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "@/hooks/use-toast";

const GrievanceManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { user, isAdmin } = useAuth();

  const grievances = [
    {
      id: "GRV001",
      employeeId: "EMP001",
      employeeName: "John Doe",
      title: "Workplace Harassment",
      description: "Reporting inappropriate behavior from supervisor",
      category: "Harassment",
      priority: "High",
      status: "Under Investigation",
      dateRaised: "2024-01-15",
      assignedTo: "HR Manager"
    },
    {
      id: "GRV002",
      employeeId: "EMP002",
      employeeName: "Jane Smith",
      title: "Salary Discrepancy",
      description: "Incorrect salary calculation for overtime hours",
      category: "Payroll",
      priority: "Medium",
      status: "Resolved",
      dateRaised: "2024-01-10",
      assignedTo: "Payroll Officer"
    },
    {
      id: "GRV003",
      employeeId: "EMP003",
      employeeName: "Mike Johnson",
      title: "Unsafe Working Conditions",
      description: "Safety equipment not provided in construction site",
      category: "Safety",
      priority: "High",
      status: "Pending",
      dateRaised: "2024-01-20",
      assignedTo: "Safety Officer"
    }
  ];

  // Filter grievances based on user role
  const userGrievances = isAdmin 
    ? grievances 
    : grievances.filter(grievance => grievance.employeeId === user?.employeeId);

  const filteredGrievances = userGrievances.filter(grievance =>
    grievance.employeeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    grievance.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    grievance.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusBadge = (status: string) => {
    const statusColors = {
      'Pending': 'bg-yellow-100 text-yellow-800',
      'Under Investigation': 'bg-blue-100 text-blue-800',
      'Resolved': 'bg-green-100 text-green-800',
      'Closed': 'bg-gray-100 text-gray-800'
    };
    return statusColors[status as keyof typeof statusColors] || 'bg-gray-100 text-gray-800';
  };

  const getPriorityBadge = (priority: string) => {
    const priorityColors = {
      'High': 'bg-red-100 text-red-800',
      'Medium': 'bg-orange-100 text-orange-800',  
      'Low': 'bg-green-100 text-green-800'
    };
    return priorityColors[priority as keyof typeof priorityColors] || 'bg-gray-100 text-gray-800';
  };

  const handleNewGrievance = () => {
    toast({
      title: "New Grievance",
      description: "Opening grievance form...",
    });
  };

  const handleViewDetails = (grievanceId: string) => {
    toast({
      title: "View Details",
      description: `Opening details for grievance ${grievanceId}`,
    });
  };

  const handleAddComment = (grievanceId: string) => {
    toast({
      title: "Add Comment",
      description: `Adding comment to grievance ${grievanceId}`,
    });
  };

  const handleUpdateStatus = (grievanceId: string) => {
    toast({
      title: "Update Status",
      description: `Updating status for grievance ${grievanceId}`,
    });
  };

  const handleFilter = () => {
    toast({
      title: "Filter",
      description: "Opening filter options...",
    });
  };

  return (
    <AppLayout>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            {isAdmin ? 'Grievance Management' : 'My Grievances'}
          </h2>
          <p className="text-gray-600">
            {isAdmin ? 'Handle employee grievances and complaints' : 'View and manage your grievances'}
          </p>
        </div>

        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="flex items-center">
                  <MessageSquare className="h-5 w-5 mr-2 text-blue-600" />
                  {isAdmin ? 'Grievance Cases' : 'My Grievance Cases'}
                </CardTitle>
                <CardDescription>
                  {isAdmin ? 'Track and resolve employee grievances' : 'Track your submitted grievances'}
                </CardDescription>
              </div>
              <Button onClick={handleNewGrievance}>
                <Plus className="h-4 w-4 mr-2" />
                New Grievance
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-4 mb-6">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search grievances..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <Button variant="outline" onClick={handleFilter}>
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>

            <div className="space-y-4">
              {filteredGrievances.length === 0 ? (
                <div className="text-center py-8">
                  <MessageSquare className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                  <p className="text-gray-500">No grievances found</p>
                </div>
              ) : (
                filteredGrievances.map((grievance) => (
                  <Card key={grievance.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-semibold text-lg">{grievance.title}</h3>
                            <Badge className={getPriorityBadge(grievance.priority)} variant="secondary">
                              {grievance.priority}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">{grievance.description}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span><strong>ID:</strong> {grievance.id}</span>
                            {isAdmin && <span><strong>Employee:</strong> {grievance.employeeName}</span>}
                            <span><strong>Category:</strong> {grievance.category}</span>
                            <span><strong>Date:</strong> {new Date(grievance.dateRaised).toLocaleDateString()}</span>
                          </div>
                        </div>
                        <Badge className={getStatusBadge(grievance.status)} variant="secondary">
                          {grievance.status}
                        </Badge>
                      </div>
                      
                      <div className="flex justify-between items-center pt-4 border-t">
                        <span className="text-sm text-gray-600">
                          <strong>Assigned to:</strong> {grievance.assignedTo}
                        </span>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm" onClick={() => handleViewDetails(grievance.id)}>
                            <Eye className="h-3 w-3 mr-1" />
                            View Details
                          </Button>
                          <Button variant="outline" size="sm" onClick={() => handleAddComment(grievance.id)}>
                            <MessageCircle className="h-3 w-3 mr-1" />
                            Add Comment
                          </Button>
                          {(isAdmin || grievance.status !== 'Resolved') && grievance.status !== 'Closed' && (
                            <Button size="sm" onClick={() => handleUpdateStatus(grievance.id)}>
                              Update Status
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </CardContent>
        </Card>
      </main>
    </AppLayout>
  );
};

export default GrievanceManagement;
