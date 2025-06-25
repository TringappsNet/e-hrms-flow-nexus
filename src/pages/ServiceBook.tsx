
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { AppLayout } from "@/components/layout/AppLayout";
import { FileText, Plus, Search, Filter, Eye, Edit, Download } from "lucide-react";

const ServiceBook = () => {
  return (
    <AppLayout>
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Service Book Management</h2>
          <p className="text-gray-600">Maintain comprehensive service records for all employees</p>
        </div>

        <Card className="shadow-lg">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="flex items-center text-xl">
                  <FileText className="h-6 w-6 mr-3 text-blue-600" />
                  Service Records
                </CardTitle>
                <CardDescription className="text-gray-600 mt-1">
                  Complete service history and documentation
                </CardDescription>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Plus className="h-4 w-4 mr-2" />
                Add Service Record
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="flex space-x-4 mb-6">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search by employee ID, name, or department..."
                    className="pl-10"
                  />
                </div>
              </div>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <FileText className="h-16 w-16 mx-auto text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Service Book System</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive service record management system for tracking employee service history,
                postings, promotions, and administrative actions.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <Card className="p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Service History</h4>
                  <p className="text-sm text-gray-600">Track complete employment history</p>
                </Card>
                <Card className="p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Postings & Transfers</h4>
                  <p className="text-sm text-gray-600">Manage position changes</p>
                </Card>
                <Card className="p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Documentation</h4>
                  <p className="text-sm text-gray-600">Digital service records</p>
                </Card>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default ServiceBook;
