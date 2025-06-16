
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/layout/Navigation";
import { mockTrainings, Training, TrainingEnrollment, mockEmployees } from "@/data/mockData";
import { TrainingForm } from "@/components/training/TrainingForm";
import { BookOpen, Plus, Search, Filter, Users, Calendar, MapPin } from "lucide-react";

const TrainingManagement = () => {
  const [trainings, setTrainings] = useState<Training[]>(mockTrainings);
  const [searchTerm, setSearchTerm] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [selectedTraining, setSelectedTraining] = useState<Training | null>(null);

  const filteredTrainings = trainings.filter(training =>
    training.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    training.trainer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    training.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddTraining = (trainingData: Omit<Training, 'id'>) => {
    const newTraining: Training = {
      ...trainingData,
      id: (trainings.length + 1).toString()
    };
    setTrainings([...trainings, newTraining]);
    setShowForm(false);
  };

  const getStatusBadge = (status: string) => {
    const statusColors = {
      'Upcoming': 'bg-blue-100 text-blue-800',
      'Ongoing': 'bg-green-100 text-green-800',
      'Completed': 'bg-gray-100 text-gray-800'
    };
    return statusColors[status as keyof typeof statusColors] || 'bg-gray-100 text-gray-800';
  };

  if (showForm) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navigation />
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <TrainingForm
            onSubmit={handleAddTraining}
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
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Training Management</h2>
          <p className="text-gray-600">Manage training programs and employee enrollments</p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="flex items-center">
                  <BookOpen className="h-5 w-5 mr-2 text-blue-600" />
                  Training Programs
                </CardTitle>
                <CardDescription>View and manage training sessions</CardDescription>
              </div>
              <Button onClick={() => setShowForm(true)}>
                <Plus className="h-4 w-4 mr-2" />
                Schedule Training
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-4 mb-6">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search trainings..."
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTrainings.map((training) => (
                <Card key={training.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-semibold text-lg">{training.title}</h3>
                      <Badge className={getStatusBadge(training.status)} variant="secondary">
                        {training.status}
                      </Badge>
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-4">{training.description}</p>
                    
                    <div className="space-y-3">
                      <div className="flex items-center text-sm">
                        <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                        <span>{new Date(training.startDate).toLocaleDateString()} - {new Date(training.endDate).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <MapPin className="h-4 w-4 mr-2 text-gray-500" />
                        <span>{training.location}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Users className="h-4 w-4 mr-2 text-gray-500" />
                        <span>{training.enrolled}/{training.capacity} enrolled</span>
                      </div>
                      <div className="text-sm">
                        <span className="font-medium">Trainer:</span> {training.trainer}
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t">
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline" className="flex-1">
                          View Details
                        </Button>
                        {training.status === 'Upcoming' && (
                          <Button size="sm" className="flex-1">
                            Enroll Employee
                          </Button>
                        )}
                      </div>
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

export default TrainingManagement;
