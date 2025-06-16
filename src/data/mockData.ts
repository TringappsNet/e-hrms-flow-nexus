
// Mock data for the E-HRMS application

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
}

export interface AttendanceRecord {
  id: string;
  employeeId: string;
  date: string;
  checkIn: string;
  checkOut: string;
  status: 'Present' | 'Absent' | 'Late' | 'Half Day';
  location: string;
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
    salary: 75000
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
    salary: 85000
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
    salary: 65000
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
    salary: 70000
  }
];

// Mock Attendance Data
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

// Mock Leave Applications
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
    appliedDate: '2024-01-16'
  }
];

// Mock Grievances
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

// Mock Payroll Data
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

// Departments and Designations
export const departments = [
  'IT Department',
  'HR Department',
  'Finance Department',
  'Administration',
  'Security',
  'Maintenance'
];

export const designations = [
  'Senior Developer',
  'HR Manager',
  'Accountant',
  'Administrative Officer',
  'Security Guard',
  'Maintenance Staff'
];

export const leaveTypes = [
  'Casual Leave',
  'Sick Leave',
  'Annual Leave',
  'Maternity Leave',
  'Paternity Leave',
  'Emergency Leave'
];
