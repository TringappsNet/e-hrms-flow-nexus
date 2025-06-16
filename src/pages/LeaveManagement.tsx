
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/layout/Navigation";
import { mockLeaveApplications, LeaveApplication } from "@/data/mockData";
import { LeaveForm } from "@/components/leave/LeaveForm";
import { Calendar, Plus, Clock, CheckCircle, XCircle } from "lucide-react";

const LeaveManagement = () => {
  const [leaveApplications, setLeaveApplications] = useState<LeaveApplication[]>(mockLeaveApplications);
  const [showForm, setShowForm] = useState(false);

  const handleSubmitLeave = (leaveData: Omit<LeaveApplication, 'id' | 'appliedDate'>) => {
    const newLeave: LeaveApplication = {
      ...leaveData,
      id: (leaveApplications.length + 1).toString(),
      appliedDate: new Date().toISOString().split('T')[0]
    };
    setLeaveApplications([...leaveApplications, newLeave]);
    setShowForm(false);
  };

  const handleApproveReject = (id: string, status: 'Approved' | 'Rejected') => {
    setLeaveApplications(prev =>
      prev.map(leave =>
        leave.id === id ? { ...leave, status } : leave
      )
    );
  };

  const getStatusBadge = (status: string) => {
    const statusColors = {
      'Pending': 'bg-orange-100 text-orange-800',
      'Approved': 'bg-green-100 text-green-800',
      'Rejected': 'bg-red-100 text-red-800'
    };
    return statusColors[status as keyof typeof statusColors] || 'bg-gray-100 text-gray-800';
  };

  const leaveStats = {
    total: leaveApplications.length,
    pending: leaveApplications.filter(l => l.status === 'Pending').length,
    approved: leaveApplications.filter(l => l.status === 'Approved').length,
    rejected: leaveApplications.filter(l => l.status === 'Rejected').length
  };

  if (showForm) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navigation />
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <LeaveForm
            onSubmit={handleSubmitLeave}
            onCancel={() => setShowForm(false)}
          />
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Leave Management</h2>
          <p className="text-gray-600">Manage leave applications and approvals</p>
        </div>

        {/* Leave Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Applications</p>
                  <p className="text-2xl font-bold text-gray-900">{leaveStats.total}</p>
                </div>
                <Calendar className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Pending</p>
                  <p className="text-2xl font-bold text-orange-600">{leaveStats.pending}</p>
                </div>
                <Clock className="h-8 w-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Approved</p>
                  <p className="text-2xl font-bold text-green-600">{leaveStats.approved}</p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Rejected</p>
                  <p className="text-2xl font-bold text-red-600">{leaveStats.rejected}</p>
                </div>
                <XCircle className="h-8 w-8 text-red-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Leave Applications */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-blue-600" />
                  Leave Applications
                </CardTitle>
                <CardDescription>Manage all leave requests</CardDescription>
              </div>
              <Button onClick={() => setShowForm(true)}>
                <Plus className="h-4 w-4 mr-2" />
                Apply Leave
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {leaveApplications.map((leave) => (
                <Card key={leave.id} className="border-l-4 border-l-blue-500">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center space-x-4 mb-2">
                          <h3 className="font-semibold text-lg">{leave.employeeName}</h3>
                          <Badge className={getStatusBadge(leave.status)} variant="secondary">
                            {leave.status}
                          </Badge>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                          <div>
                            <span className="font-medium">Leave Type:</span> {leave.leaveType}
                          </div>
                          <div>
                            <span className="font-medium">Duration:</span> {leave.startDate} to {leave.endDate}
                          </div>
                          <div>
                            <span className="font-medium">Days:</span> {leave.days} day(s)
                          </div>
                        </div>
                        <div className="mt-2">
                          <span className="font-medium text-sm text-gray-600">Reason:</span>
                          <p className="text-sm text-gray-800 mt-1">{leave.reason}</p>
                        </div>
                        <div className="mt-2 text-xs text-gray-500">
                          Applied on: {new Date(leave.appliedDate).toLocaleDateString()}
                        </div>
                      </div>
                      {leave.status === 'Pending' && (
                        <div className="flex space-x-2 ml-4">
                          <Button
                            size="sm"
                            onClick={() => handleApproveReject(leave.id, 'Approved')}
                            className="bg-green-600 hover:bg-green-700"
                          >
                            Approve
                          </Button>
                          <Button
                            size="sm"
                            variant="destructive"
                            onClick={() => handleApproveReject(leave.id, 'Rejected')}
                          >
                            Reject
                          </Button>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default LeaveManagement;
