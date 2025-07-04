
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  User, 
  FileText, 
  Briefcase, 
  GraduationCap, 
  Heart, 
  Award, 
  Building,
  Users,
  Car,
  Activity,
  TrendingUp,
  Calendar,
  Phone,
  MapPin,
  Mail,
  Edit,
  Download,
  Eye,
  Plus,
  Save,
  X,
  Printer,
  Share2,
  Clock,
  CheckCircle,
  AlertCircle
} from "lucide-react";

interface ServiceBookData {
  employeeId: string;
  name: string;
  joiningDate: string;
  probationConfirmation: string;
  currentPosition: string;
  jobProfile: string;
  department: string;
  section: string;
  salaryStructure: {
    basic: number;
    grade: string;
    da: number;
    hra: number;
    totalSalary: number;
  };
  increments: Array<{
    date: string;
    amount: number;
    type: string;
  }>;
  transfers: Array<{
    date: string;
    from: string;
    to: string;
    reason: string;
  }>;
  promotions: Array<{
    date: string;
    from: string;
    to: string;
    order: string;
  }>;
  resignationDate?: string;
  familyBackground: Array<{
    name: string;
    relation: string;
    age: number;
    occupation: string;
  }>;
  localAddress: {
    address: string;
    phone: string;
    email: string;
  };
  emergencyContact: {
    name: string;
    relation: string;
    phone: string;
    address: string;
  };
  bloodGroup: string;
  qualifications: Array<{
    degree: string;
    institution: string;
    year: number;
    percentage: number;
  }>;
  experience: Array<{
    organization: string;
    position: string;
    duration: string;
    responsibilities: string;
  }>;
  medicalHistory: Array<{
    date: string;
    condition: string;
    treatment: string;
    doctor: string;
  }>;
  accidentRecords: Array<{
    date: string;
    type: string;
    description: string;
    compensation: number;
  }>;
  awards: Array<{
    date: string;
    award: string;
    authority: string;
    reason: string;
  }>;
  childrenAwards: Array<{
    childName: string;
    award: string;
    date: string;
    institution: string;
  }>;
  documents: Array<{
    type: string;
    number: string;
    issueDate: string;
    expiryDate?: string;
    status: string;
  }>;
  clubMemberships: Array<{
    club: string;
    membershipDate: string;
    status: string;
    fees: number;
  }>;
  assetsGiven: Array<{
    assetType: string;
    assetId: string;
    issueDate: string;
    returnDate?: string;
    condition: string;
  }>;
  extracurricular: Array<{
    activity: string;
    level: string;
    achievements: string;
  }>;
  sportsParticipation: Array<{
    sport: string;
    level: string;
    achievements: string;
    year: number;
  }>;
  socialParticipation: Array<{
    activity: string;
    role: string;
    duration: string;
    impact: string;
  }>;
  trainingDetails: Array<{
    program: string;
    duration: string;
    institution: string;
    completion: string;
    certificate: boolean;
  }>;
  appraisalHistory: Array<{
    year: number;
    rating: string;
    remarks: string;
    appraiser: string;
  }>;
  facilities: Array<{
    facility: string;
    startDate: string;
    endDate?: string;
    amount?: number;
    status: string;
  }>;
}

const mockServiceBookData: ServiceBookData = {
  employeeId: "GOA001",
  name: "Rajesh Kumar Sharma",
  joiningDate: "2015-06-15",
  probationConfirmation: "2016-06-15",
  currentPosition: "Deputy Secretary",
  jobProfile: "Administrative and Policy Implementation",
  department: "Finance Department",
  section: "Budget Division",
  salaryStructure: {
    basic: 45000,
    grade: "Level 11",
    da: 13500,
    hra: 9000,
    totalSalary: 67500
  },
  increments: [
    { date: "2020-07-01", amount: 3000, type: "Annual Increment" },
    { date: "2021-07-01", amount: 3200, type: "Annual Increment" },
    { date: "2022-07-01", amount: 3500, type: "Annual Increment" }
  ],
  transfers: [
    { date: "2018-03-15", from: "Planning Department", to: "Finance Department", reason: "Administrative Requirements" },
    { date: "2020-08-01", from: "Budget Section", to: "Budget Division", reason: "Promotion" }
  ],
  promotions: [
    { date: "2020-08-01", from: "Under Secretary", to: "Deputy Secretary", order: "GO/2020/FIN/4567" }
  ],
  familyBackground: [
    { name: "Sunita Sharma", relation: "Wife", age: 38, occupation: "Teacher" },
    { name: "Aarav Sharma", relation: "Son", age: 15, occupation: "Student" },
    { name: "Kavya Sharma", relation: "Daughter", age: 12, occupation: "Student" }
  ],
  localAddress: {
    address: "H.No. 45, Azad Nagar, Panaji, Goa - 403001",
    phone: "+91-9876543210",
    email: "rajesh.sharma@goa.gov.in"
  },
  emergencyContact: {
    name: "Mohan Sharma",
    relation: "Brother",
    phone: "+91-9876543211",
    address: "Mumbai, Maharashtra"
  },
  bloodGroup: "O+",
  qualifications: [
    { degree: "B.A. Economics", institution: "Goa University", year: 2014, percentage: 78.5 },
    { degree: "M.A. Public Administration", institution: "Delhi University", year: 2016, percentage: 82.3 }
  ],
  experience: [
    { 
      organization: "Private Consultancy", 
      position: "Research Assistant", 
      duration: "2014-2015", 
      responsibilities: "Policy Research and Analysis" 
    }
  ],
  medicalHistory: [
    { date: "2022-03-15", condition: "Hypertension", treatment: "Medication", doctor: "Dr. Priya Menon" }
  ],
  accidentRecords: [],
  awards: [
    { date: "2021-08-15", award: "Best Employee Award", authority: "Finance Department", reason: "Outstanding Performance" }
  ],
  childrenAwards: [
    { childName: "Aarav Sharma", award: "Academic Excellence", date: "2023-03-20", institution: "St. Xavier's School" }
  ],
  documents: [
    { type: "Aadhaar Card", number: "1234-5678-9012", issueDate: "2010-05-15", status: "Active" },
    { type: "PAN Card", number: "ABCDE1234F", issueDate: "2014-03-10", status: "Active" },
    { type: "Passport", number: "M1234567", issueDate: "2018-07-20", expiryDate: "2028-07-20", status: "Active" }
  ],
  clubMemberships: [
    { club: "Goa Officers Club", membershipDate: "2016-08-01", status: "Active", fees: 5000 }
  ],
  assetsGiven: [
    { assetType: "Laptop", assetId: "LAP001", issueDate: "2020-08-15", condition: "Good" },
    { assetType: "Mobile Phone", assetId: "MOB045", issueDate: "2021-01-10", condition: "Excellent" }
  ],
  extracurricular: [
    { activity: "Photography", level: "Amateur", achievements: "Won departmental competition" }
  ],
  sportsParticipation: [
    { sport: "Cricket", level: "District", achievements: "Runner-up", year: 2019 }
  ],
  socialParticipation: [
    { activity: "Blood Donation Camp", role: "Organizer", duration: "Annual", impact: "200+ donations collected" }
  ],
  trainingDetails: [
    { program: "Leadership Development", duration: "5 days", institution: "ATI Mysore", completion: "2021-09-15", certificate: true },
    { program: "Digital Governance", duration: "3 days", institution: "CDAC Pune", completion: "2022-11-20", certificate: true }
  ],
  appraisalHistory: [
    { year: 2021, rating: "Outstanding", remarks: "Excellent leadership and performance", appraiser: "Joint Secretary" },
    { year: 2022, rating: "Very Good", remarks: "Consistent performance with improvement areas", appraiser: "Joint Secretary" }
  ],
  facilities: [
    { facility: "Medical Insurance", startDate: "2015-06-15", amount: 500000, status: "Active" },
    { facility: "LTC", startDate: "2015-06-15", status: "Active" },
    { facility: "Vehicle Allowance", startDate: "2020-08-01", amount: 5000, status: "Active" }
  ]
};

interface ServiceBookDetailsProps {
  employeeId: string;
  onBack: () => void;
}

export const ServiceBookDetails: React.FC<ServiceBookDetailsProps> = ({ employeeId, onBack }) => {
  const [activeTab, setActiveTab] = useState("personal");
  const [isEditing, setIsEditing] = useState(false);
  const [editingSection, setEditingSection] = useState<string | null>(null);
  const data = mockServiceBookData; // In real app, fetch by employeeId

  const handleEdit = (section: string) => {
    console.log(`Edit ${section} for employee ${employeeId}`);
    setEditingSection(section);
    setIsEditing(true);
  };

  const handleSave = () => {
    console.log('Saving changes');
    setIsEditing(false);
    setEditingSection(null);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditingSection(null);
  };

  const handleDownload = (section: string) => {
    console.log(`Download ${section} for employee ${employeeId}`);
  };

  const handlePrint = () => {
    console.log('Print service book');
    window.print();
  };

  const handleShare = () => {
    console.log('Share service book');
  };

  const handleAddRecord = (section: string) => {
    console.log(`Add new record to ${section}`);
  };

  const ActionButton = ({ icon: Icon, label, onClick, variant = "outline", className = "" }: any) => (
    <Button variant={variant} size="sm" onClick={onClick} className={`hover:scale-105 transition-transform ${className}`}>
      <Icon className="h-3 w-3 mr-1" />
      {label}
    </Button>
  );

  return (
    <div className="space-y-6">
      {/* Enhanced Header */}
      <div className="flex items-center justify-between bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border">
        <div className="flex items-center space-x-4">
          <Button variant="outline" onClick={onBack} className="hover:bg-white">
            ← Back to List
          </Button>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{data.name}</h2>
            <div className="flex items-center space-x-4 mt-1">
              <p className="text-gray-600">Employee ID: <span className="font-medium text-blue-600">{data.employeeId}</span></p>
              <Badge className="bg-blue-100 text-blue-800">{data.currentPosition}</Badge>
              <Badge className="bg-green-100 text-green-800">{data.department}</Badge>
            </div>
          </div>
        </div>
        <div className="flex space-x-2">
          <ActionButton icon={Printer} label="Print" onClick={handlePrint} className="hover:bg-gray-50" />
          <ActionButton icon={Share2} label="Share" onClick={handleShare} className="hover:bg-gray-50" />
          <ActionButton icon={Download} label="Download PDF" onClick={() => handleDownload('complete')} className="hover:bg-purple-50" />
          <ActionButton icon={Edit} label="Update Record" onClick={() => handleEdit('general')} variant="default" className="bg-blue-600 hover:bg-blue-700" />
        </div>
      </div>

      {/* Enhanced Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <div className="bg-white p-1 rounded-lg border shadow-sm overflow-x-auto">
          <TabsList className="grid grid-cols-6 lg:grid-cols-12 w-full min-w-max gap-1">
            <TabsTrigger value="personal" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">Personal</TabsTrigger>
            <TabsTrigger value="employment" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">Employment</TabsTrigger>
            <TabsTrigger value="salary" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">Salary</TabsTrigger>
            <TabsTrigger value="family" className="data-[state=active]:bg-orange-600 data-[state=active]:text-white">Family</TabsTrigger>
            <TabsTrigger value="qualifications" className="data-[state=active]:bg-indigo-600 data-[state=active]:text-white">Education</TabsTrigger>
            <TabsTrigger value="medical" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">Medical</TabsTrigger>
            <TabsTrigger value="awards" className="data-[state=active]:bg-yellow-600 data-[state=active]:text-white">Awards</TabsTrigger>
            <TabsTrigger value="documents" className="data-[state=active]:bg-gray-600 data-[state=active]:text-white">Documents</TabsTrigger>
            <TabsTrigger value="assets" className="data-[state=active]:bg-teal-600 data-[state=active]:text-white">Assets</TabsTrigger>
            <TabsTrigger value="activities" className="data-[state=active]:bg-pink-600 data-[state=active]:text-white">Activities</TabsTrigger>
            <TabsTrigger value="training" className="data-[state=active]:bg-cyan-600 data-[state=active]:text-white">Training</TabsTrigger>
            <TabsTrigger value="appraisal" className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white">Appraisal</TabsTrigger>
          </TabsList>
        </div>

        {/* Personal Information Tab */}
        <TabsContent value="personal" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="shadow-lg border-l-4 border-l-blue-500">
              <CardHeader className="bg-blue-50">
                <div className="flex justify-between items-center">
                  <CardTitle className="flex items-center text-blue-900">
                    <User className="h-5 w-5 mr-2" />
                    Personal Information
                  </CardTitle>
                  <div className="flex space-x-1">
                    <ActionButton icon={Edit} label="Edit" onClick={() => handleEdit('personal')} />
                    <ActionButton icon={Download} label="Export" onClick={() => handleDownload('personal')} />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 p-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <Label className="text-sm font-medium text-gray-500">Employee ID</Label>
                    <p className="font-semibold text-blue-600">{data.employeeId}</p>
                  </div>
                  <div className="space-y-1">
                    <Label className="text-sm font-medium text-gray-500">Blood Group</Label>
                    <div className="flex items-center">
                      <Badge className="bg-red-100 text-red-800">{data.bloodGroup}</Badge>
                    </div>
                  </div>
                </div>
                <div className="space-y-1">
                  <Label className="text-sm font-medium text-gray-500">Full Name</Label>
                  <p className="font-semibold text-gray-900 text-lg">{data.name}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-l-4 border-l-green-500">
              <CardHeader className="bg-green-50">
                <div className="flex justify-between items-center">
                  <CardTitle className="flex items-center text-green-900">
                    <MapPin className="h-5 w-5 mr-2" />
                    Contact Information
                  </CardTitle>
                  <div className="flex space-x-1">
                    <ActionButton icon={Edit} label="Edit" onClick={() => handleEdit('contact')} />
                    <ActionButton icon={Download} label="Export" onClick={() => handleDownload('contact')} />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 p-6">
                <div className="space-y-1">
                  <Label className="text-sm font-medium text-gray-500">Local Address</Label>
                  <p className="text-sm text-gray-700 leading-relaxed">{data.localAddress.address}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <Label className="text-sm font-medium text-gray-500">Phone</Label>
                    <p className="text-sm font-medium text-gray-900">{data.localAddress.phone}</p>
                  </div>
                  <div className="space-y-1">
                    <Label className="text-sm font-medium text-gray-500">Email</Label>
                    <p className="text-sm font-medium text-blue-600">{data.localAddress.email}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-l-4 border-l-orange-500">
              <CardHeader className="bg-orange-50">
                <div className="flex justify-between items-center">
                  <CardTitle className="flex items-center text-orange-900">
                    <Phone className="h-5 w-5 mr-2" />
                    Emergency Contact
                  </CardTitle>
                  <div className="flex space-x-1">
                    <ActionButton icon={Edit} label="Edit" onClick={() => handleEdit('emergency')} />
                    <ActionButton icon={Plus} label="Add" onClick={() => handleAddRecord('emergency')} />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 p-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <Label className="text-sm font-medium text-gray-500">Name</Label>
                    <p className="font-semibold text-gray-900">{data.emergencyContact.name}</p>
                  </div>
                  <div className="space-y-1">
                    <Label className="text-sm font-medium text-gray-500">Relation</Label>
                    <Badge variant="outline">{data.emergencyContact.relation}</Badge>
                  </div>
                </div>
                <div className="space-y-1">
                  <Label className="text-sm font-medium text-gray-500">Phone</Label>
                  <p className="text-sm font-medium text-gray-900">{data.emergencyContact.phone}</p>
                </div>
                <div className="space-y-1">
                  <Label className="text-sm font-medium text-gray-500">Address</Label>
                  <p className="text-sm text-gray-700">{data.emergencyContact.address}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Employment History Tab */}
        <TabsContent value="employment" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="shadow-lg border-l-4 border-l-blue-500">
              <CardHeader className="bg-blue-50">
                <div className="flex justify-between items-center">
                  <CardTitle className="flex items-center text-blue-900">
                    <Briefcase className="h-5 w-5 mr-2" />
                    Current Position
                  </CardTitle>
                  <ActionButton icon={Edit} label="Edit" onClick={() => handleEdit('position')} />
                </div>
              </CardHeader>
              <CardContent className="space-y-4 p-6">
                <div className="space-y-1">
                  <Label className="text-sm font-medium text-gray-500">Position</Label>
                  <p className="font-semibold text-lg text-gray-900">{data.currentPosition}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <Label className="text-sm font-medium text-gray-500">Department</Label>
                    <Badge className="bg-green-100 text-green-800">{data.department}</Badge>
                  </div>
                  <div className="space-y-1">
                    <Label className="text-sm font-medium text-gray-500">Section</Label>
                    <p className="text-sm font-medium text-gray-900">{data.section}</p>
                  </div>
                </div>
                <div className="space-y-1">
                  <Label className="text-sm font-medium text-gray-500">Job Profile</Label>
                  <p className="text-sm text-gray-700">{data.jobProfile}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-l-4 border-l-green-500">
              <CardHeader className="bg-green-50">
                <div className="flex justify-between items-center">
                  <CardTitle className="flex items-center text-green-900">
                    <Calendar className="h-5 w-5 mr-2" />
                    Service Dates
                  </CardTitle>
                  <ActionButton icon={Edit} label="Edit" onClick={() => handleEdit('dates')} />
                </div>
              </CardHeader>
              <CardContent className="space-y-4 p-6">
                <div className="space-y-1">
                  <Label className="text-sm font-medium text-gray-500">Joining Date</Label>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-blue-600" />
                    <p className="font-semibold text-gray-900">{new Date(data.joiningDate).toLocaleDateString('en-IN')}</p>
                  </div>
                </div>
                <div className="space-y-1">
                  <Label className="text-sm font-medium text-gray-500">Probation Confirmation</Label>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <p className="text-sm text-gray-700">{new Date(data.probationConfirmation).toLocaleDateString('en-IN')}</p>
                  </div>
                </div>
                {data.resignationDate && (
                  <div className="space-y-1">
                    <Label className="text-sm font-medium text-gray-500">Resignation Date</Label>
                    <div className="flex items-center space-x-2">
                      <AlertCircle className="h-4 w-4 text-red-600" />
                      <p className="text-sm text-red-700">{new Date(data.resignationDate).toLocaleDateString('en-IN')}</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Transfer History */}
          <Card className="shadow-lg">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
              <div className="flex justify-between items-center">
                <CardTitle className="text-blue-900">Transfer History</CardTitle>
                <div className="flex space-x-1">
                  <ActionButton icon={Plus} label="Add Transfer" onClick={() => handleAddRecord('transfer')} />
                  <ActionButton icon={Download} label="Export" onClick={() => handleDownload('transfers')} />
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                {data.transfers.map((transfer, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-4 bg-blue-50/50 p-4 rounded-r-lg">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900">
                          {transfer.from} → {transfer.to}
                        </p>
                        <p className="text-sm text-gray-600 mt-1">{transfer.reason}</p>
                      </div>
                      <div className="text-right">
                        <Badge variant="outline" className="mb-2">{new Date(transfer.date).toLocaleDateString('en-IN')}</Badge>
                        <div className="flex space-x-1">
                          <ActionButton icon={Edit} label="" onClick={() => handleEdit(`transfer-${index}`)} />
                          <ActionButton icon={Download} label="" onClick={() => handleDownload(`transfer-${index}`)} />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Promotion History */}
          <Card className="shadow-lg">
            <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
              <div className="flex justify-between items-center">
                <CardTitle className="text-green-900">Promotion History</CardTitle>
                <div className="flex space-x-1">
                  <ActionButton icon={Plus} label="Add Promotion" onClick={() => handleAddRecord('promotion')} />
                  <ActionButton icon={Download} label="Export" onClick={() => handleDownload('promotions')} />
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                {data.promotions.map((promotion, index) => (
                  <div key={index} className="border-l-4 border-green-500 pl-4 bg-green-50/50 p-4 rounded-r-lg">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900">
                          {promotion.from} → {promotion.to}
                        </p>
                        <p className="text-sm text-gray-600 mt-1">Order: {promotion.order}</p>
                      </div>
                      <div className="text-right">
                        <Badge className="bg-green-100 text-green-800 mb-2">{new Date(promotion.date).toLocaleDateString('en-IN')}</Badge>
                        <div className="flex space-x-1">
                          <ActionButton icon={Edit} label="" onClick={() => handleEdit(`promotion-${index}`)} />
                          <ActionButton icon={Download} label="" onClick={() => handleDownload(`promotion-${index}`)} />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="salary" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2" />
                  Current Salary Structure
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-500">Basic Pay</label>
                    <p className="font-medium">₹{data.salaryStructure.basic.toLocaleString()}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Grade</label>
                    <p className="font-medium">{data.salaryStructure.grade}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-500">DA</label>
                    <p className="text-sm">₹{data.salaryStructure.da.toLocaleString()}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">HRA</label>
                    <p className="text-sm">₹{data.salaryStructure.hra.toLocaleString()}</p>
                  </div>
                </div>
                <div className="pt-2 border-t">
                  <label className="text-sm font-medium text-gray-500">Total Salary</label>
                  <p className="text-lg font-bold text-green-600">₹{data.salaryStructure.totalSalary.toLocaleString()}</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Increment History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {data.increments.map((increment, index) => (
                    <div key={index} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <div>
                        <p className="font-medium">₹{increment.amount.toLocaleString()}</p>
                        <p className="text-sm text-gray-600">{increment.type}</p>
                      </div>
                      <Badge variant="outline">{new Date(increment.date).toLocaleDateString()}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="family" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                Family Background
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Name</th>
                      <th className="text-left py-2">Relation</th>
                      <th className="text-left py-2">Age</th>
                      <th className="text-left py-2">Occupation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.familyBackground.map((member, index) => (
                      <tr key={index} className="border-b">
                        <td className="py-2 font-medium">{member.name}</td>
                        <td className="py-2">{member.relation}</td>
                        <td className="py-2">{member.age}</td>
                        <td className="py-2">{member.occupation}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Children's Awards & Achievements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {data.childrenAwards.map((award, index) => (
                  <div key={index} className="border-l-2 border-yellow-500 pl-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-medium">{award.childName}</p>
                        <p className="text-sm text-gray-600">{award.award} - {award.institution}</p>
                      </div>
                      <Badge className="bg-yellow-100 text-yellow-800">{new Date(award.date).toLocaleDateString()}</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="qualifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <GraduationCap className="h-5 w-5 mr-2" />
                Educational Qualifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {data.qualifications.map((qual, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium">{qual.degree}</h4>
                        <p className="text-sm text-gray-600">{qual.institution}</p>
                        <p className="text-sm text-gray-500">Year: {qual.year}</p>
                      </div>
                      <Badge className="bg-blue-100 text-blue-800">{qual.percentage}%</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Previous Experience</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {data.experience.map((exp, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-medium">{exp.position}</h4>
                    <p className="text-sm text-gray-600">{exp.organization}</p>
                    <p className="text-sm text-gray-500">Duration: {exp.duration}</p>
                    <p className="text-sm mt-2">{exp.responsibilities}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="medical" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Heart className="h-5 w-5 mr-2" />
                Medical History
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {data.medicalHistory.length > 0 ? (
                  data.medicalHistory.map((record, index) => (
                    <div key={index} className="border-l-2 border-red-500 pl-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium">{record.condition}</p>
                          <p className="text-sm text-gray-600">Treatment: {record.treatment}</p>
                          <p className="text-sm text-gray-500">Doctor: {record.doctor}</p>
                        </div>
                        <Badge variant="outline">{new Date(record.date).toLocaleDateString()}</Badge>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500 text-center py-4">No medical history recorded</p>
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Accident Records</CardTitle>
            </CardHeader>
            <CardContent>
              {data.accidentRecords.length > 0 ? (
                <div className="space-y-3">
                  {data.accidentRecords.map((accident, index) => (
                    <div key={index} className="border-l-2 border-orange-500 pl-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium">{accident.type}</p>
                          <p className="text-sm text-gray-600">{accident.description}</p>
                          <p className="text-sm text-gray-500">Compensation: ₹{accident.compensation.toLocaleString()}</p>
                        </div>
                        <Badge variant="outline">{new Date(accident.date).toLocaleDateString()}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-center py-4">No accident records</p>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="awards" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Award className="h-5 w-5 mr-2" />
                Awards & Recognition
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {data.awards.map((award, index) => (
                  <div key={index} className="border-l-2 border-yellow-500 pl-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-medium">{award.award}</p>
                        <p className="text-sm text-gray-600">Authority: {award.authority}</p>
                        <p className="text-sm text-gray-500">Reason: {award.reason}</p>
                      </div>
                      <Badge className="bg-yellow-100 text-yellow-800">{new Date(award.date).toLocaleDateString()}</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="documents" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="h-5 w-5 mr-2" />
                Submitted Documents
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Document Type</th>
                      <th className="text-left py-2">Number</th>
                      <th className="text-left py-2">Issue Date</th>
                      <th className="text-left py-2">Expiry Date</th>
                      <th className="text-left py-2">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.documents.map((doc, index) => (
                      <tr key={index} className="border-b">
                        <td className="py-2 font-medium">{doc.type}</td>
                        <td className="py-2">{doc.number}</td>
                        <td className="py-2">{new Date(doc.issueDate).toLocaleDateString()}</td>
                        <td className="py-2">{doc.expiryDate ? new Date(doc.expiryDate).toLocaleDateString() : 'N/A'}</td>
                        <td className="py-2">
                          <Badge className={doc.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}>
                            {doc.status}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Club Memberships</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {data.clubMemberships.map((membership, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <div>
                      <p className="font-medium">{membership.club}</p>
                      <p className="text-sm text-gray-600">Member since: {new Date(membership.membershipDate).toLocaleDateString()}</p>
                    </div>
                    <div className="text-right">
                      <Badge className={membership.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}>
                        {membership.status}
                      </Badge>
                      <p className="text-sm text-gray-600">₹{membership.fees.toLocaleString()}/year</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="assets" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Car className="h-5 w-5 mr-2" />
                Assets Given
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Asset Type</th>
                      <th className="text-left py-2">Asset ID</th>
                      <th className="text-left py-2">Issue Date</th>
                      <th className="text-left py-2">Return Date</th>
                      <th className="text-left py-2">Condition</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.assetsGiven.map((asset, index) => (
                      <tr key={index} className="border-b">
                        <td className="py-2 font-medium">{asset.assetType}</td>
                        <td className="py-2">{asset.assetId}</td>
                        <td className="py-2">{new Date(asset.issueDate).toLocaleDateString()}</td>
                        <td className="py-2">{asset.returnDate ? new Date(asset.returnDate).toLocaleDateString() : 'Not Returned'}</td>
                        <td className="py-2">
                          <Badge variant="outline" className={
                            asset.condition === 'Excellent' ? 'bg-green-100 text-green-800' :
                            asset.condition === 'Good' ? 'bg-blue-100 text-blue-800' :
                            'bg-yellow-100 text-yellow-800'
                          }>
                            {asset.condition}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Facilities Provided</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {data.facilities.map((facility, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <div>
                      <p className="font-medium">{facility.facility}</p>
                      <p className="text-sm text-gray-600">
                        Start: {new Date(facility.startDate).toLocaleDateString()}
                        {facility.endDate && ` - End: ${new Date(facility.endDate).toLocaleDateString()}`}
                      </p>
                    </div>
                    <div className="text-right">
                      <Badge className={facility.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}>
                        {facility.status}
                      </Badge>
                      {facility.amount && <p className="text-sm text-gray-600">₹{facility.amount.toLocaleString()}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="activities" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Activity className="h-5 w-5 mr-2" />
                Extracurricular Activities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {data.extracurricular.map((activity, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-medium">{activity.activity}</p>
                        <p className="text-sm text-gray-600">Level: {activity.level}</p>
                      </div>
                      <p className="text-sm text-gray-600">{activity.achievements}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Sports Participation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {data.sportsParticipation.map((sport, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-medium">{sport.sport}</p>
                        <p className="text-sm text-gray-600">Level: {sport.level}</p>
                        <p className="text-sm text-gray-600">Year: {sport.year}</p>
                      </div>
                      <Badge variant="outline">{sport.achievements}</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Social Participation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {data.socialParticipation.map((activity, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-medium">{activity.activity}</p>
                        <p className="text-sm text-gray-600">Role: {activity.role}</p>
                        <p className="text-sm text-gray-600">Duration: {activity.duration}</p>
                      </div>
                      <p className="text-sm text-gray-600">{activity.impact}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="training" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <GraduationCap className="h-5 w-5 mr-2" />
                Training Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {data.trainingDetails.map((training, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium">{training.program}</h4>
                        <p className="text-sm text-gray-600">{training.institution}</p>
                        <p className="text-sm text-gray-500">Duration: {training.duration}</p>
                        <p className="text-sm text-gray-500">Completed: {new Date(training.completion).toLocaleDateString()}</p>
                      </div>
                      <Badge className={training.certificate ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}>
                        {training.certificate ? 'Certified' : 'Not Certified'}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="appraisal" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="h-5 w-5 mr-2" />
                Appraisal History
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {data.appraisalHistory.map((appraisal, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium">Year {appraisal.year}</h4>
                      <Badge className={
                        appraisal.rating === 'Outstanding' ? 'bg-green-100 text-green-800' :
                        appraisal.rating === 'Very Good' ? 'bg-blue-100 text-blue-800' :
                        appraisal.rating === 'Good' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-gray-100 text-gray-800'
                      }>
                        {appraisal.rating}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{appraisal.remarks}</p>
                    <p className="text-sm text-gray-500">Appraised by: {appraisal.appraiser}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
