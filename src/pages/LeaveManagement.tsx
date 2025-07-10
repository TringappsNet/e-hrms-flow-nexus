
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { AppLayout } from "@/components/layout/AppLayout";
import { mockLeaveApplications, LeaveApplication } from "@/data/mockData";
import { LeaveForm } from "@/components/leave/LeaveForm";
import { Calendar, Plus, Search, Filter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const LeaveManagement = () => {
  const [leaveApplications, setLeaveApplications] = useState<LeaveApplication[]>(mockLeaveApplications);
  const [searchTerm, setSearchTerm] = useState("");
  const [showForm, setShowForm] = useState(false);
  const { toast } = useToast();

  const filteredApplications = leaveApplications.filter(application =>
    application.employeeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    application.leaveType.toLowerCase().includes(searchTerm.toLowerCase()) ||
    application.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddApplication = (applicationData: Omit<LeaveApplication, 'id' | 'appliedDate'>) => {
    const newApplication: LeaveApplication = {
      ...applicationData,
      id: (leaveApplications.length + 1).toString(),
      appliedDate: new Date().toISOString()
    };
    setLeaveApplications([...leaveApplications, newApplication]);
    setShowForm(false);
    
    toast({
      title: "Leave Application Added",
      description: "New leave application has been added successfully.",
    });
  };

  const handleApprove = (id: string) => {
    setLeaveApplications(prev => 
      prev.map(app => 
        app.id === id ? { ...app, status: 'Approved' as const } : app
      )
    );
    toast({
      title: "Leave Approved",
      description: `Leave application ${id} has been approved.`,
    });
  };

  const handleReject = (id: string) => {
    setLeaveApplications(prev => 
      prev.map(app => 
        app.id === id ? { ...app, status: 'Rejected' as const } : app
      )
    );
    toast({
      title: "Leave Rejected",
      description: `Leave application ${id} has been rejected.`,
    });
  };

  const handleView = (id: string) => {
    toast({
      title: "Leave Details",
      description: `Viewing details for leave application ${id}`,
    });
  };

  const handleFilter = () => {
    toast({
      title: "Filter Options",
      description: "Filter functionality would open here.",
    });
  };

  const getStatusBadge = (status: string) => {
    const statusColors = {
      'Pending': 'bg-yellow-100 text-yellow-800',
      'Approved': 'bg-green-100 text-green-800',
      'Rejected': 'bg-red-100 text-red-800'
    };
    return statusColors[status as keyof typeof statusColors] || 'bg-gray-100 text-gray-800';
  };

  if (showForm) {
    return (
      <AppLayout>
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <LeaveForm
            onSubmit={handleAddApplication}
            onCancel={() => setShowForm(false)}
          />
        </main>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Leave Management</h2>
          <p className="text-gray-600">Manage employee leave applications and requests</p>
        </div>

        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-blue-600" />
                  Leave Applications
                </CardTitle>
                <CardDescription>View and manage leave requests</CardDescription>
              </div>
              <Button onClick={() => setShowForm(true)}>
                <Plus className="h-4 w-4 mr-2" />
                Apply Leave
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-4 mb-6">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search applications..."
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

            <div className="overflow-x-auto">
              <table className="w-full table-auto">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">Application ID</th>
                    <th className="text-left py-3 px-4">Employee</th>
                    <th className="text-left py-3 px-4">Leave Type</th>
                    <th className="text-left py-3 px-4">Start Date</th>
                    <th className="text-left py-3 px-4">End Date</th>
                    <th className="text-left py-3 px-4">Days</th>
                    <th className="text-left py-3 px-4">Status</th>
                    <th className="text-left py-3 px-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredApplications.map((application) => (
                    <tr key={application.id} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium">{application.id}</td>
                      <td className="py-3 px-4">{application.employeeName}</td>
                      <td className="py-3 px-4">{application.leaveType}</td>
                      <td className="py-3 px-4">{new Date(application.startDate).toLocaleDateString()}</td>
                      <td className="py-3 px-4">{new Date(application.endDate).toLocaleDateString()}</td>
                      <td className="py-3 px-4">{application.days}</td>
                      <td className="py-3 px-4">
                        <Badge className={getStatusBadge(application.status)} variant="secondary">
                          {application.status}
                        </Badge>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm" onClick={() => handleView(application.id)}>
                            View
                          </Button>
                          {application.status === 'Pending' && (
                            <>
                              <Button size="sm" onClick={() => handleApprove(application.id)}>
                                Approve
                              </Button>
                              <Button variant="destructive" size="sm" onClick={() => handleReject(application.id)}>
                                Reject
                              </Button>
                            </>
                          )}
                        </div>
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

export default LeaveManagement;
