
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  User, 
  Briefcase, 
  Save, 
  X,
  Plus,
  Calendar,
  Phone,
  Mail,
  MapPin
} from "lucide-react";

interface ServiceBookFormProps {
  onBack: () => void;
  employeeId?: string;
  isEdit?: boolean;
}

export const ServiceBookForm: React.FC<ServiceBookFormProps> = ({ onBack, employeeId, isEdit = false }) => {
  const [formData, setFormData] = useState({
    // Personal Information
    employeeId: '',
    name: '',
    email: '',
    phone: '',
    bloodGroup: '',
    joiningDate: '',
    probationConfirmation: '',
    
    // Employment Details
    currentPosition: '',
    department: '',
    section: '',
    jobProfile: '',
    grade: '',
    employeeType: '',
    
    // Address Information
    localAddress: '',
    emergencyContact: '',
    emergencyPhone: '',
    emergencyRelation: '',
    
    // Salary Information
    basicSalary: '',
    gradeLevel: '',
    
    // Status
    status: 'Active'
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({...prev, [field]: value}));
  };

  const handleSave = () => {
    console.log('Saving service book data:', formData);
    // Save functionality
    onBack();
  };

  const handleCancel = () => {
    onBack();
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            {isEdit ? 'Edit Employee Service Book' : 'Add New Employee Service Book'}
          </h2>
          <p className="text-gray-600">
            {isEdit ? 'Update employee service record information' : 'Create comprehensive service record for new employee'}
          </p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" onClick={handleCancel}>
            <X className="h-4 w-4 mr-2" />
            Cancel
          </Button>
          <Button onClick={handleSave} className="bg-blue-600 hover:bg-blue-700">
            <Save className="h-4 w-4 mr-2" />
            {isEdit ? 'Update Record' : 'Create Record'}
          </Button>
        </div>
      </div>

      {/* Form Tabs */}
      <Tabs defaultValue="personal" className="space-y-4">
        <TabsList className="grid grid-cols-4 w-full max-w-2xl">
          <TabsTrigger value="personal">Personal Info</TabsTrigger>
          <TabsTrigger value="employment">Employment</TabsTrigger>
          <TabsTrigger value="contact">Contact Details</TabsTrigger>
          <TabsTrigger value="salary">Salary & Grade</TabsTrigger>
        </TabsList>

        <TabsContent value="personal" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <User className="h-5 w-5 mr-2" />
                Personal Information
              </CardTitle>
              <CardDescription>
                Basic personal details and identification information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="employeeId">Employee ID *</Label>
                  <Input
                    id="employeeId"
                    value={formData.employeeId}
                    onChange={(e) => handleInputChange('employeeId', e.target.value)}
                    placeholder="e.g., GOA001"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Enter full name"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="employee@goa.gov.in"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="+91 9876543210"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="bloodGroup">Blood Group</Label>
                  <Select onValueChange={(value) => handleInputChange('bloodGroup', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select blood group" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="A+">A+</SelectItem>
                      <SelectItem value="A-">A-</SelectItem>
                      <SelectItem value="B+">B+</SelectItem>
                      <SelectItem value="B-">B-</SelectItem>
                      <SelectItem value="AB+">AB+</SelectItem>
                      <SelectItem value="AB-">AB-</SelectItem>
                      <SelectItem value="O+">O+</SelectItem>
                      <SelectItem value="O-">O-</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="status">Employee Status</Label>
                  <Select onValueChange={(value) => handleInputChange('status', value)} defaultValue="Active">
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Active">Active</SelectItem>
                      <SelectItem value="Inactive">Inactive</SelectItem>
                      <SelectItem value="Retired">Retired</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="employment" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Briefcase className="h-5 w-5 mr-2" />
                Employment Details
              </CardTitle>
              <CardDescription>
                Job position, department, and service dates
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="joiningDate">Joining Date *</Label>
                  <Input
                    id="joiningDate"
                    type="date"
                    value={formData.joiningDate}
                    onChange={(e) => handleInputChange('joiningDate', e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="probationConfirmation">Probation Confirmation Date</Label>
                  <Input
                    id="probationConfirmation"
                    type="date"
                    value={formData.probationConfirmation}
                    onChange={(e) => handleInputChange('probationConfirmation', e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="currentPosition">Current Position *</Label>
                  <Input
                    id="currentPosition"
                    value={formData.currentPosition}
                    onChange={(e) => handleInputChange('currentPosition', e.target.value)}
                    placeholder="e.g., Deputy Secretary"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="department">Department *</Label>
                  <Select onValueChange={(value) => handleInputChange('department', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select department" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Finance Department">Finance Department</SelectItem>
                      <SelectItem value="Health Department">Health Department</SelectItem>
                      <SelectItem value="Education Department">Education Department</SelectItem>
                      <SelectItem value="Tourism Department">Tourism Department</SelectItem>
                      <SelectItem value="PWD">PWD</SelectItem>
                      <SelectItem value="IT Department">IT Department</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="section">Section</Label>
                  <Input
                    id="section"
                    value={formData.section}
                    onChange={(e) => handleInputChange('section', e.target.value)}
                    placeholder="e.g., Budget Division"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="employeeType">Employee Type</Label>
                  <Select onValueChange={(value) => handleInputChange('employeeType', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select employee type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Permanent">Permanent</SelectItem>
                      <SelectItem value="Contract">Contract</SelectItem>
                      <SelectItem value="Temporary">Temporary</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="jobProfile">Job Profile</Label>
                <Textarea
                  id="jobProfile"
                  value={formData.jobProfile}
                  onChange={(e) => handleInputChange('jobProfile', e.target.value)}
                  placeholder="Describe job responsibilities and profile"
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="contact" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                Contact & Address Details
              </CardTitle>
              <CardDescription>
                Local address and emergency contact information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="localAddress">Local Address *</Label>
                <Textarea
                  id="localAddress"
                  value={formData.localAddress}
                  onChange={(e) => handleInputChange('localAddress', e.target.value)}
                  placeholder="Enter complete local address"
                  rows={3}
                  required
                />
              </div>

              <div className="space-y-4">
                <h4 className="font-medium text-gray-900">Emergency Contact</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="emergencyContact">Emergency Contact Name *</Label>
                    <Input
                      id="emergencyContact"
                      value={formData.emergencyContact}
                      onChange={(e) => handleInputChange('emergencyContact', e.target.value)}
                      placeholder="Full name of emergency contact"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="emergencyRelation">Relationship</Label>
                    <Select onValueChange={(value) => handleInputChange('emergencyRelation', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select relationship" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Spouse">Spouse</SelectItem>
                        <SelectItem value="Father">Father</SelectItem>
                        <SelectItem value="Mother">Mother</SelectItem>
                        <SelectItem value="Brother">Brother</SelectItem>
                        <SelectItem value="Sister">Sister</SelectItem>
                        <SelectItem value="Son">Son</SelectItem>
                        <SelectItem value="Daughter">Daughter</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="emergencyPhone">Emergency Contact Phone *</Label>
                  <Input
                    id="emergencyPhone"
                    value={formData.emergencyPhone}
                    onChange={(e) => handleInputChange('emergencyPhone', e.target.value)}
                    placeholder="+91 9876543210"
                    required
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="salary" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                Salary & Grade Information
              </CardTitle>
              <CardDescription>
                Current salary structure and grade details
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="basicSalary">Basic Salary *</Label>
                  <Input
                    id="basicSalary"
                    type="number"
                    value={formData.basicSalary}
                    onChange={(e) => handleInputChange('basicSalary', e.target.value)}
                    placeholder="Enter basic salary amount"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="gradeLevel">Grade Level *</Label>
                  <Select onValueChange={(value) => handleInputChange('gradeLevel', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select grade level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Level 14">Level 14</SelectItem>
                      <SelectItem value="Level 13">Level 13</SelectItem>
                      <SelectItem value="Level 12">Level 12</SelectItem>
                      <SelectItem value="Level 11">Level 11</SelectItem>
                      <SelectItem value="Level 10">Level 10</SelectItem>
                      <SelectItem value="Level 9">Level 9</SelectItem>
                      <SelectItem value="Level 8">Level 8</SelectItem>
                      <SelectItem value="Level 7">Level 7</SelectItem>
                      <SelectItem value="Level 6">Level 6</SelectItem>
                      <SelectItem value="Level 5">Level 5</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="grade">Grade Category</Label>
                  <Select onValueChange={(value) => handleInputChange('grade', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select grade category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Grade A">Grade A</SelectItem>
                      <SelectItem value="Grade B">Grade B</SelectItem>
                      <SelectItem value="Grade C">Grade C</SelectItem>
                      <SelectItem value="Grade D">Grade D</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
