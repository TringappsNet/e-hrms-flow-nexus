
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AppLayout } from "@/components/layout/AppLayout";
import { BookOpen, Calendar, Award, Clock } from "lucide-react";

const MyTraining = () => {
  // Mock training data
  const trainingPrograms = [
    {
      id: 1,
      title: "Leadership Development Program",
      description: "Advanced leadership skills for government officials",
      status: "Completed",
      startDate: "2023-12-01",
      endDate: "2023-12-15",
      duration: "15 days",
      score: "85%"
    },
    {
      id: 2,
      title: "Digital Governance Workshop",
      description: "Modern digital tools for public administration",
      status: "In Progress",
      startDate: "2024-01-10",
      endDate: "2024-01-25",
      duration: "10 days",
      score: null
    },
    {
      id: 3,
      title: "Financial Management Course",
      description: "Government financial planning and budgeting",
      status: "Upcoming",
      startDate: "2024-02-01",
      endDate: "2024-02-10",
      duration: "8 days",
      score: null
    }
  ];

  const certifications = [
    {
      name: "Certified Public Administrator",
      issueDate: "2023-12-20",
      validUntil: "2026-12-20",
      status: "Active"
    },
    {
      name: "Digital Leadership Certificate",
      issueDate: "2023-11-15",
      validUntil: "2025-11-15",
      status: "Active"
    }
  ];

  return (
    <AppLayout>
      <div className="p-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">My Training Records</h2>
          <p className="text-gray-600">Track your professional development and certifications</p>
        </div>

        {/* Training Programs */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-blue-600" />
              Training Programs
            </CardTitle>
            <CardDescription>Your enrolled and completed training programs</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {trainingPrograms.map((program) => (
                <div key={program.id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{program.title}</h3>
                      <p className="text-gray-600 mb-2">{program.description}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {program.startDate} to {program.endDate}
                        </span>
                        <span className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {program.duration}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end space-y-2">
                      <Badge 
                        variant={program.status === "Completed" ? "default" : program.status === "In Progress" ? "secondary" : "outline"}
                        className={
                          program.status === "Completed" ? "bg-green-100 text-green-800" :
                          program.status === "In Progress" ? "bg-blue-100 text-blue-800" :
                          "bg-gray-100 text-gray-800"
                        }
                      >
                        {program.status}
                      </Badge>
                      {program.score && (
                        <span className="text-sm font-medium text-green-600">Score: {program.score}</span>
                      )}
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Certifications */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Award className="h-5 w-5 mr-2 text-gold-600" />
              My Certifications
            </CardTitle>
            <CardDescription>Professional certifications and achievements</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center">
                      <Award className="h-8 w-8 text-yellow-600 mr-3" />
                      <div>
                        <h3 className="font-semibold">{cert.name}</h3>
                        <p className="text-sm text-gray-600">Issued: {cert.issueDate}</p>
                      </div>
                    </div>
                    <Badge className="bg-green-100 text-green-800">
                      {cert.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600">Valid until: {cert.validUntil}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default MyTraining;
