
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AppLayout } from "@/components/layout/AppLayout";
import { useAuth } from '@/contexts/AuthContext';
import { 
  Award, 
  Star, 
  TrendingUp, 
  Calendar,
  Download,
  Eye
} from 'lucide-react';

const MyPerformance = () => {
  const { user } = useAuth();

  const performanceData = [
    { year: '2024', rating: 4.5, status: 'Excellent', reviewer: 'Manager Name' },
    { year: '2023', rating: 4.2, status: 'Very Good', reviewer: 'Manager Name' },
    { year: '2022', rating: 4.0, status: 'Good', reviewer: 'Previous Manager' },
  ];

  const goals = [
    { title: 'Complete Digital Training', status: 'Completed', progress: 100 },
    { title: 'Improve Customer Service', status: 'In Progress', progress: 75 },
    { title: 'Team Leadership Skills', status: 'Pending', progress: 25 },
  ];

  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-900">My Performance</h1>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Download Reports
          </Button>
        </div>

        {/* Current Performance Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">Current Rating</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <div className="text-3xl font-bold text-green-600">4.5</div>
                <div className="flex">
                  {[1,2,3,4,5].map((star) => (
                    <Star 
                      key={star} 
                      className={`h-5 w-5 ${star <= 4.5 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-1">Excellent Performance</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">Goals Completed</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-600">67%</div>
              <p className="text-sm text-gray-600 mt-1">2 of 3 goals achieved</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">Next Review</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-orange-600">45</div>
              <p className="text-sm text-gray-600 mt-1">Days remaining</p>
            </CardContent>
          </Card>
        </div>

        {/* Performance History */}
        <Card>
          <CardHeader>
            <CardTitle>Performance History (APAR)</CardTitle>
            <CardDescription>Your annual performance appraisal records</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {performanceData.map((record) => (
                <div key={record.year} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Award className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">APAR {record.year}</h3>
                      <p className="text-sm text-gray-600">Reviewed by: {record.reviewer}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <div className="flex items-center space-x-1">
                        <span className="font-semibold">{record.rating}</span>
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      </div>
                      <span className={`text-sm px-2 py-1 rounded-full ${
                        record.status === 'Excellent' ? 'bg-green-100 text-green-800' :
                        record.status === 'Very Good' ? 'bg-blue-100 text-blue-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {record.status}
                      </span>
                    </div>
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-2" />
                      View
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Current Goals */}
        <Card>
          <CardHeader>
            <CardTitle>Current Goals & Objectives</CardTitle>
            <CardDescription>Track your progress on current year goals</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {goals.map((goal, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">{goal.title}</h3>
                    <span className={`text-sm px-2 py-1 rounded-full ${
                      goal.status === 'Completed' ? 'bg-green-100 text-green-800' :
                      goal.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {goal.status}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${
                        goal.progress === 100 ? 'bg-green-500' :
                        goal.progress >= 50 ? 'bg-blue-500' : 'bg-orange-500'
                      }`}
                      style={{ width: `${goal.progress}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{goal.progress}% Complete</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default MyPerformance;
