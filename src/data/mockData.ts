// Mock data for the comprehensive E-HRMS application

export interface Employee {
  id: string;
  employeeId: string;
  name: string;
  email: string;
  department: string;
  designation: string;
  joiningDate: string;
  status: 'Active' | 'Inactive' | 'On Leave';
  phone: string;
  address: string;
  salary: number;
  profileImage?: string;
  emergencyContact: string;
  qualifications: string;
  reportingManager: string;
  grade: string;
  employeeType: 'Permanent' | 'Contract' | 'Temporary';
}

export interface AttendanceRecord {
  id: string;
  employeeId: string;
  date: string;
  checkIn: string;
  checkOut: string;
  status: 'Present' | 'Absent' | 'Late' | 'Half Day';
  location: string;
  overtime?: number;
}

export interface LeaveApplication {
  id: string;
  employeeId: string;
  employeeName: string;
  leaveType: string;
  startDate: string;
  endDate: string;
  days: number;
  reason: string;
  status: 'Pending' | 'Approved' | 'Rejected';
  appliedDate: string;
  approvedBy?: string;
  approvedDate?: string;
}

export interface Transfer {
  id: string;
  employeeId: string;
  employeeName: string;
  fromDepartment: string;
  toDepartment: string;
  fromLocation: string;
  toLocation: string;
  transferDate: string;
  reason: string;
  status: 'Pending' | 'Approved' | 'Completed';
  orderId: string;
}

export interface Promotion {
  id: string;
  employeeId: string;
  employeeName: string;
  fromGrade: string;
  toGrade: string;
  fromDesignation: string;
  toDesignation: string;
  effectiveDate: string;
  newSalary: number;
  status: 'Pending' | 'Approved' | 'Implemented';
}

export interface Training {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  location: string;
  capacity: number;
  enrolled: number;
  status: 'Upcoming' | 'Ongoing' | 'Completed';
  trainer: string;
}

export interface TrainingEnrollment {
  id: string;
  trainingId: string;
  employeeId: string;
  employeeName: string;
  enrollmentDate: string;
  status: 'Enrolled' | 'Completed' | 'Cancelled';
  feedback?: string;
  rating?: number;
}

export interface Grievance {
  id: string;
  employeeId: string;
  employeeName: string;
  title: string;
  description: string;
  category: string;
  priority: 'High' | 'Medium' | 'Low';
  status: 'Open' | 'In Progress' | 'Resolved' | 'Closed';
  createdDate: string;
  assignedTo?: string;
  resolution?: string;
  resolvedDate?: string;
}

export interface PayrollRecord {
  id: string;
  employeeId: string;
  employeeName: string;
  month: string;
  basicSalary: number;
  allowances: number;
  deductions: number;
  netSalary: number;
  status: 'Processed' | 'Pending' | 'On Hold';
}

export interface Asset {
  id: string;
  assetId: string;
  name: string;
  type: 'Vehicle' | 'Laptop' | 'Mobile' | 'Equipment' | 'Furniture';
  assignedTo?: string;
  assignedEmployee?: string;
  location: string;
  status: 'Available' | 'Assigned' | 'Under Maintenance' | 'Disposed';
  purchaseDate: string;
  value: number;
}

export interface Loan {
  id: string;
  employeeId: string;
  employeeName: string;
  loanType: string;
  amount: number;
  installments: number;
  monthlyDeduction: number;
  appliedDate: string;
  approvedDate?: string;
  status: 'Pending' | 'Approved' | 'Rejected' | 'Active' | 'Completed';
}

export interface Appraisal {
  id: string;
  employeeId: string;
  employeeName: string;
  period: string;
  selfRating: number;
  supervisorRating: number;
  finalRating: number;
  goals: string[];
  achievements: string[];
  developmentAreas: string[];
  status: 'Self Assessment' | 'Supervisor Review' | 'Completed';
}

// Mock Employees Data
export const mockEmployees: Employee[] = [
  {
    id: '1',
    employeeId: 'EMP001',
    name: 'Rajesh Kumar',
    email: 'rajesh.kumar@gov.in',
    department: 'IT Department',
    designation: 'Senior Developer',
    joiningDate: '2020-01-15',
    status: 'Active',
    phone: '+91 9876543210',
    address: 'New Delhi, India',
    salary: 75000,
    emergencyContact: '+91 9876543211',
    qualifications: 'B.Tech Computer Science',
    reportingManager: 'Priya Sharma',
    grade: 'Grade A',
    employeeType: 'Permanent'
  },
  {
    id: '2',
    employeeId: 'EMP002',
    name: 'Priya Sharma',
    email: 'priya.sharma@gov.in',
    department: 'HR Department',
    designation: 'HR Manager',
    joiningDate: '2019-03-20',
    status: 'Active',
    phone: '+91 9876543211',
    address: 'Mumbai, India',
    salary: 85000,
    emergencyContact: '+91 9876543212',
    qualifications: 'MBA HR',
    reportingManager: 'Director',
    grade: 'Grade B',
    employeeType: 'Permanent'
  },
  {
    id: '3',
    employeeId: 'EMP003',
    name: 'Amit Singh',
    email: 'amit.singh@gov.in',
    department: 'Finance Department',
    designation: 'Accountant',
    joiningDate: '2021-06-10',
    status: 'On Leave',
    phone: '+91 9876543212',
    address: 'Bangalore, India',
    salary: 65000,
    emergencyContact: '+91 9876543213',
    qualifications: 'CA',
    reportingManager: 'Finance Head',
    grade: 'Grade A',
    employeeType: 'Permanent'
  },
  {
    id: '4',
    employeeId: 'EMP004',
    name: 'Sunita Patel',
    email: 'sunita.patel@gov.in',
    department: 'Administration',
    designation: 'Administrative Officer',
    joiningDate: '2018-11-05',
    status: 'Active',
    phone: '+91 9876543213',
    address: 'Ahmedabad, India',
    salary: 70000,
    emergencyContact: '+91 9876543214',
    qualifications: 'MA Public Administration',
    reportingManager: 'Admin Head',
    grade: 'Grade B',
    employeeType: 'Permanent'
  }
];

// Mock Transfers
export const mockTransfers: Transfer[] = [
  {
    id: '1',
    employeeId: 'EMP001',
    employeeName: 'Rajesh Kumar',
    fromDepartment: 'IT Department',
    toDepartment: 'Digital Services',
    fromLocation: 'Delhi Office',
    toLocation: 'Mumbai Office',
    transferDate: '2024-02-15',
    reason: 'Project requirement',
    status: 'Pending',
    orderId: 'TO-2024-001'
  },
  {
    id: '2',
    employeeId: 'EMP003',
    employeeName: 'Amit Singh',
    fromDepartment: 'Finance Department',
    toDepartment: 'Audit Department',
    fromLocation: 'Bangalore Office',
    toLocation: 'Chennai Office',
    transferDate: '2024-01-20',
    reason: 'Career development',
    status: 'Approved',
    orderId: 'TO-2024-002'
  }
];

// Mock Promotions
export const mockPromotions: Promotion[] = [
  {
    id: '1',
    employeeId: 'EMP002',
    employeeName: 'Priya Sharma',
    fromGrade: 'Grade B',
    toGrade: 'Grade A',
    fromDesignation: 'HR Manager',
    toDesignation: 'Senior HR Manager',
    effectiveDate: '2024-04-01',
    newSalary: 95000,
    status: 'Pending'
  }
];

// Mock Training Data
export const mockTrainings: Training[] = [
  {
    id: '1',
    title: 'Digital Government Services',
    description: 'Training on digital transformation in government services',
    startDate: '2024-02-15',
    endDate: '2024-02-17',
    location: 'Delhi Training Center',
    capacity: 50,
    enrolled: 35,
    status: 'Upcoming',
    trainer: 'Dr. Digital Expert'
  },
  {
    id: '2',
    title: 'Leadership Development',
    description: 'Developing leadership skills for government officers',
    startDate: '2024-01-20',
    endDate: '2024-01-22',
    location: 'Mumbai Training Center',
    capacity: 30,
    enrolled: 28,
    status: 'Completed',
    trainer: 'Leadership Coach'
  }
];

// Mock Assets
export const mockAssets: Asset[] = [
  {
    id: '1',
    assetId: 'ASSET001',
    name: 'Dell Laptop',
    type: 'Laptop',
    assignedTo: 'EMP001',
    assignedEmployee: 'Rajesh Kumar',
    location: 'Delhi Office',
    status: 'Assigned',
    purchaseDate: '2023-01-15',
    value: 65000
  },
  {
    id: '2',
    assetId: 'ASSET002',
    name: 'Government Vehicle',
    type: 'Vehicle',
    location: 'Mumbai Office',
    status: 'Available',
    purchaseDate: '2022-06-10',
    value: 800000
  }
];

// Mock Loans
export const mockLoans: Loan[] = [
  {
    id: '1',
    employeeId: 'EMP001',
    employeeName: 'Rajesh Kumar',
    loanType: 'House Building Advance',
    amount: 500000,
    installments: 60,
    monthlyDeduction: 8333,
    appliedDate: '2024-01-10',
    approvedDate: '2024-01-15',
    status: 'Active'
  }
];

// Mock Appraisals
export const mockAppraisals: Appraisal[] = [
  {
    id: '1',
    employeeId: 'EMP001',
    employeeName: 'Rajesh Kumar',
    period: '2023-24',
    selfRating: 4.2,
    supervisorRating: 4.0,
    finalRating: 4.1,
    goals: ['Complete project migration', 'Lead team development'],
    achievements: ['Successfully migrated 3 applications', 'Mentored junior developers'],
    developmentAreas: ['Public speaking', 'Project management certification'],
    status: 'Completed'
  }
];

// Keep existing mock data
export const mockAttendance: AttendanceRecord[] = [
  {
    id: '1',
    employeeId: 'EMP001',
    date: '2024-01-16',
    checkIn: '09:00',
    checkOut: '18:00',
    status: 'Present',
    location: 'Delhi Office'
  },
  {
    id: '2',
    employeeId: 'EMP002',
    date: '2024-01-16',
    checkIn: '09:15',
    checkOut: '18:30',
    status: 'Late',
    location: 'Mumbai Office'
  },
  {
    id: '3',
    employeeId: 'EMP003',
    date: '2024-01-16',
    checkIn: '',
    checkOut: '',
    status: 'Absent',
    location: ''
  }
];

export const mockLeaveApplications: LeaveApplication[] = [
  {
    id: '1',
    employeeId: 'EMP001',
    employeeName: 'Rajesh Kumar',
    leaveType: 'Casual Leave',
    startDate: '2024-01-20',
    endDate: '2024-01-22',
    days: 3,
    reason: 'Family function',
    status: 'Pending',
    appliedDate: '2024-01-15'
  },
  {
    id: '2',
    employeeId: 'EMP002',
    employeeName: 'Priya Sharma',
    leaveType: 'Sick Leave',
    startDate: '2024-01-18',
    endDate: '2024-01-19',
    days: 2,
    reason: 'Medical treatment',
    status: 'Approved',
    appliedDate: '2024-01-16',
    approvedBy: 'Director',
    approvedDate: '2024-01-17'
  }
];

export const mockGrievances: Grievance[] = [
  {
    id: '1',
    employeeId: 'EMP003',
    employeeName: 'Amit Singh',
    title: 'Office Infrastructure Issue',
    description: 'Air conditioning not working properly in the finance department',
    category: 'Infrastructure',
    priority: 'Medium',
    status: 'Open',
    createdDate: '2024-01-15',
    assignedTo: 'Admin Team'
  },
  {
    id: '2',
    employeeId: 'EMP004',
    employeeName: 'Sunita Patel',
    title: 'Payroll Discrepancy',
    description: 'Incorrect allowance calculation in December payroll',
    category: 'Payroll',
    priority: 'High',
    status: 'In Progress',
    createdDate: '2024-01-10',
    assignedTo: 'HR Department'
  }
];

export const mockPayroll: PayrollRecord[] = [
  {
    id: '1',
    employeeId: 'EMP001',
    employeeName: 'Rajesh Kumar',
    month: 'January 2024',
    basicSalary: 75000,
    allowances: 15000,
    deductions: 8000,
    netSalary: 82000,
    status: 'Processed'
  },
  {
    id: '2',
    employeeId: 'EMP002',
    employeeName: 'Priya Sharma',
    month: 'January 2024',
    basicSalary: 85000,
    allowances: 17000,
    deductions: 9000,
    netSalary: 93000,
    status: 'Processed'
  }
];

// Updated departments and other data
export const departments = [
  'IT Department',
  'HR Department',
  'Finance Department',
  'Administration',
  'Audit Department',
  'Digital Services',
  'Legal Department',
  'Planning Department'
];

export const designations = [
  'Senior Developer',
  'HR Manager',
  'Senior HR Manager',
  'Accountant',
  'Administrative Officer',
  'Audit Officer',
  'Legal Advisor',
  'Planning Officer'
];

export const leaveTypes = [
  'Casual Leave',
  'Sick Leave',
  'Annual Leave',
  'Maternity Leave',
  'Paternity Leave',
  'Emergency Leave',
  'Compensatory Leave'
];

export const loanTypes = [
  'House Building Advance',
  'Vehicle Loan',
  'Personal Computer Advance',
  'Festival Advance',
  'Medical Advance'
];

export const assetTypes = [
  'Vehicle',
  'Laptop',
  'Mobile',
  'Equipment',
  'Furniture'
];

export const grievanceCategories = [
  'Infrastructure',
  'Payroll',
  'Leave',
  'Transfer',
  'Promotion',
  'Training',
  'Disciplinary',
  'Other'
];
