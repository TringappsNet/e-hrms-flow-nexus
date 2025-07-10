
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AppLayout } from "@/components/layout/AppLayout";
import { LeaveForm } from "@/components/leave/LeaveForm";
import { Calendar, Plus, FileText } from "lucide-react";
import { LeaveApplication } from "@/data/mockData";
import { useToast } from "@/hooks/use-toast";

const MyLeave = () => {
  const [showForm, setShowForm] = useState(false);
  const { toast } = useToast();

  // Mock leave data
  const [leaveApplications, setLeaveApplications] = useState([
    {
      id: 1,
      type: "Annual Leave",
      fromDate: "2024-01-20",
      toDate: "2024-01-22",
      days: 3,
      status: "Approved",
      reason: "Family vacation"
    },
    {
      id: 2,
      type: "Sick Leave",
      fromDate: "2024-01-10",
      toDate: "2024-01-10",
      days: 1,
      status: "Approved",
      reason: "Medical appointment"
    },
    {
      id: 3,
      type: "Annual Leave",
      fromDate: "2024-02-15",
      toDate: "2024-02-16",
      days: 2,
      status: "Pending",
      reason: "Personal work"
    }
  ]);

  const leaveBalance = {
    annual: { total: 21, used: 5, remaining: 16 },
    sick: { total: 12, used: 1, remaining: 11 },
    casual: { total: 7, used: 2, remaining: 5 }
  };

  const handleAddApplication = (applicationData: Omit<LeaveApplication, 'id' | 'appliedDate'>) => {
    const newApplication = {
      id: leaveApplications.length + 1,
      type: applicationData.leaveType,
      fromDate: applicationData.startDate,
      toDate: applicationData.endDate,
      days: applicationData.days,
      status: applicationData.status,
      reason: applicationData.reason
    };
    
    setLeaveApplications([...leaveApplications, newApplication]);
    setShowForm(false);
    
    toast({
      title: "Leave Application Submitted",
      description: "Your leave application has been submitted successfully and is pending approval.",
    });
  };

  const handleViewDetails = (leaveId: number) => {
    toast({
      title: "Leave Details",
      description: `Viewing details for leave application #${leaveId}`,
    });
  };

  if (showForm) {
    return (
      <AppLayout>
        <div className="p-8">
          <LeaveForm
            onSubmit={handleAddApplication}
            onCancel={() => setShowForm(false)}
          />
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <div className="p-8">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">My Leave</h2>
            <p className="text-gray-600">Manage your leave applications and view balance</p>
          </div>
          <Button onClick={() => setShowForm(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Apply for Leave
          </Button>
        </div>

        {/* Leave Balance */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Annual Leave</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">{leaveBalance.annual.remaining}</p>
                <p className="text-sm text-gray-600">Remaining out of {leaveBalance.annual.total}</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Sick Leave</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <p className="text-3xl font-bold text-green-600">{leaveBalance.sick.remaining}</p>
                <p className="text-sm text-gray-600">Remaining out of {leaveBalance.sick.total}</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Casual Leave</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <p className="text-3xl font-bold text-purple-600">{leaveBalance.casual.remaining}</p>
                <p className="text-sm text-gray-600">Remaining out of {leaveBalance.casual.total}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Leave Applications */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="h-5 w-5 mr-2 text-blue-600" />
              Leave Applications
            </CardTitle>
            <CardDescription>Your recent leave requests</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {leaveApplications.map((leave) => (
                <div key={leave.id} className="flex justify-between items-center p-4 border rounded-lg">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="font-medium">{leave.type}</h3>
                      <Badge 
                        variant={leave.status === "Approved" ? "default" : leave.status === "Pending" ? "secondary" : "destructive"}
                        className={
                          leave.status === "Approved" ? "bg-green-100 text-green-800" :
                          leave.status === "Pending" ? "bg-yellow-100 text-yellow-800" :
                          "bg-red-100 text-red-800"
                        }
                      >
                        {leave.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">
                      {leave.fromDate} to {leave.toDate} ({leave.days} day{leave.days > 1 ? 's' : ''})
                    </p>
                    <p className="text-sm text-gray-500">{leave.reason}</p>
                  </div>
                  <Button variant="outline" size="sm" onClick={() => handleViewDetails(leave.id)}>
                    View Details
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default MyLeave;
