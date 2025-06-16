
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { UserCheck, Users, Clock } from "lucide-react";

export const AttendanceChart = () => {
  const attendanceData = {
    present: 11234,
    total: 12847,
    onLeave: 892,
    late: 156
  };

  const presentPercentage = (attendanceData.present / attendanceData.total) * 100;
  const leavePercentage = (attendanceData.onLeave / attendanceData.total) * 100;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <UserCheck className="h-5 w-5 mr-2 text-green-600" />
          Today's Attendance
        </CardTitle>
        <CardDescription>
          Real-time attendance overview
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Present Employees */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-gray-700">Present</span>
            <span className="text-sm font-bold text-green-600">
              {attendanceData.present.toLocaleString()} ({presentPercentage.toFixed(1)}%)
            </span>
          </div>
          <Progress value={presentPercentage} className="h-2" />
        </div>

        {/* On Leave */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-gray-700">On Leave</span>
            <span className="text-sm font-bold text-orange-600">
              {attendanceData.onLeave.toLocaleString()} ({leavePercentage.toFixed(1)}%)
            </span>
          </div>
          <Progress value={leavePercentage} className="h-2 bg-orange-100" />
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-4 pt-4 border-t">
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <Clock className="h-4 w-4 text-red-500 mr-1" />
            </div>
            <p className="text-2xl font-bold text-red-600">{attendanceData.late}</p>
            <p className="text-xs text-gray-500">Late Arrivals</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <Users className="h-4 w-4 text-blue-500 mr-1" />
            </div>
            <p className="text-2xl font-bold text-blue-600">{attendanceData.total.toLocaleString()}</p>
            <p className="text-xs text-gray-500">Total Staff</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
