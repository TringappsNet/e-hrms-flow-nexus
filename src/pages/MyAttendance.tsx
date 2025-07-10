
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AppLayout } from "@/components/layout/AppLayout";
import { Calendar, Clock, CheckCircle } from "lucide-react";

const MyAttendance = () => {
  // Mock attendance data
  const attendanceRecords = [
    {
      date: "2024-01-15",
      checkIn: "09:00 AM",
      checkOut: "06:00 PM",
      status: "Present",
      hours: "9h 0m"
    },
    {
      date: "2024-01-14",
      checkIn: "09:15 AM",
      checkOut: "06:15 PM",
      status: "Present",
      hours: "9h 0m"
    },
    {
      date: "2024-01-13",
      checkIn: "09:30 AM",
      checkOut: "06:30 PM",
      status: "Late",
      hours: "9h 0m"
    }
  ];

  return (
    <AppLayout>
      <div className="p-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">My Attendance</h2>
          <p className="text-gray-600">View your attendance records and work hours</p>
        </div>

        {/* Today's Status */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
              Today's Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-sm text-gray-600">Check In</p>
                <p className="font-semibold text-lg">09:00 AM</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600">Check Out</p>
                <p className="font-semibold text-lg">--:--</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600">Hours Worked</p>
                <p className="font-semibold text-lg">7h 30m</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Attendance History */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="h-5 w-5 mr-2 text-blue-600" />
              Attendance History
            </CardTitle>
            <CardDescription>Your recent attendance records</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {attendanceRecords.map((record, index) => (
                <div key={index} className="flex justify-between items-center p-4 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div>
                      <p className="font-medium">{record.date}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          In: {record.checkIn}
                        </span>
                        <span className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          Out: {record.checkOut}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="font-medium">{record.hours}</span>
                    <Badge 
                      variant={record.status === "Present" ? "default" : "secondary"}
                      className={record.status === "Present" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}
                    >
                      {record.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default MyAttendance;
