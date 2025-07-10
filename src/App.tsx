import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Index from "./pages/Index";
import EmployeeManagement from "./pages/EmployeeManagement";
import AttendanceManagement from "./pages/AttendanceManagement";
import LeaveManagement from "./pages/LeaveManagement";
import TransferManagement from "./pages/TransferManagement";
import TrainingManagement from "./pages/TrainingManagement";
import AssetManagement from "./pages/AssetManagement";
import PayrollManagement from "./pages/PayrollManagement";
import GrievanceManagement from "./pages/GrievanceManagement";
import ReportsManagement from "./pages/ReportsManagement";
import ServiceBook from "./pages/ServiceBook";
import Promotions from "./pages/Promotions";
import Performance from "./pages/Performance";
import SeniorityLists from "./pages/SeniorityLists";
import Recruitment from "./pages/Recruitment";
import Deputation from "./pages/Deputation";
import ExitRetirement from "./pages/ExitRetirement";
import BiometricCapture from "./pages/BiometricCapture";
import ShiftManagement from "./pages/ShiftManagement";
import OvertimeTracking from "./pages/OvertimeTracking";
import LeaveEncashment from "./pages/LeaveEncashment";
import TravelManagement from "./pages/TravelManagement";
import Certifications from "./pages/Certifications";
import SalaryStructure from "./pages/SalaryStructure";
import SalarySlips from "./pages/SalarySlips";
import TaxManagement from "./pages/TaxManagement";
import BonusesLoans from "./pages/BonusesLoans";
import FinalSettlement from "./pages/FinalSettlement";
import MedicalClaims from "./pages/MedicalClaims";
import MedicalReimbursements from "./pages/MedicalReimbursements";
import AnalyticsDashboard from "./pages/AnalyticsDashboard";
import NotFound from "./pages/NotFound";
import HierarchyManagement from "./pages/HierarchyManagement";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import MyProfile from "./pages/MyProfile";
import MyPerformance from "./pages/MyPerformance";
import MyAttendance from "./pages/MyAttendance";
import MyLeave from "./pages/MyLeave";
import MyPayslips from "./pages/MyPayslips";
import MyTraining from "./pages/MyTraining";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            {/* Public Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            
            {/* Protected Routes - Admin Only */}
            <Route path="/" element={
              <ProtectedRoute requireAdmin>
                <Index />
              </ProtectedRoute>
            } />
            <Route path="/employees" element={
              <ProtectedRoute requireAdmin>
                <EmployeeManagement />
              </ProtectedRoute>
            } />
            <Route path="/service-book" element={
              <ProtectedRoute requireAdmin>
                <ServiceBook />
              </ProtectedRoute>
            } />
            <Route path="/promotions" element={
              <ProtectedRoute requireAdmin>
                <Promotions />
              </ProtectedRoute>
            } />
            <Route path="/performance" element={
              <ProtectedRoute requireAdmin>
                <Performance />
              </ProtectedRoute>
            } />
            <Route path="/seniority" element={
              <ProtectedRoute requireAdmin>
                <SeniorityLists />
              </ProtectedRoute>
            } />
            <Route path="/recruitment" element={
              <ProtectedRoute requireAdmin>
                <Recruitment />
              </ProtectedRoute>
            } />
            <Route path="/deputation" element={
              <ProtectedRoute requireAdmin>
                <Deputation />
              </ProtectedRoute>
            } />
            <Route path="/exit-retirement" element={
              <ProtectedRoute requireAdmin>
                <ExitRetirement />
              </ProtectedRoute>
            } />
            <Route path="/hierarchy" element={
              <ProtectedRoute requireAdmin>
                <HierarchyManagement />
              </ProtectedRoute>
            } />
            <Route path="/attendance" element={
              <ProtectedRoute requireAdmin>
                <AttendanceManagement />
              </ProtectedRoute>
            } />
            <Route path="/biometric" element={
              <ProtectedRoute requireAdmin>
                <BiometricCapture />
              </ProtectedRoute>
            } />
            <Route path="/shifts" element={
              <ProtectedRoute requireAdmin>
                <ShiftManagement />
              </ProtectedRoute>
            } />
            <Route path="/overtime" element={
              <ProtectedRoute requireAdmin>
                <OvertimeTracking />
              </ProtectedRoute>
            } />
            <Route path="/leave" element={
              <ProtectedRoute requireAdmin>
                <LeaveManagement />
              </ProtectedRoute>
            } />
            <Route path="/leave-encashment" element={
              <ProtectedRoute requireAdmin>
                <LeaveEncashment />
              </ProtectedRoute>
            } />
            <Route path="/travel" element={
              <ProtectedRoute requireAdmin>
                <TravelManagement />
              </ProtectedRoute>
            } />
            <Route path="/training" element={
              <ProtectedRoute requireAdmin>
                <TrainingManagement />
              </ProtectedRoute>
            } />
            <Route path="/certifications" element={
              <ProtectedRoute requireAdmin>
                <Certifications />
              </ProtectedRoute>
            } />
            <Route path="/payroll" element={
              <ProtectedRoute requireAdmin>
                <PayrollManagement />
              </ProtectedRoute>
            } />
            <Route path="/salary-structure" element={
              <ProtectedRoute requireAdmin>
                <SalaryStructure />
              </ProtectedRoute>
            } />
            <Route path="/salary-slips" element={
              <ProtectedRoute requireAdmin>
                <SalarySlips />
              </ProtectedRoute>
            } />
            <Route path="/tax-management" element={
              <ProtectedRoute requireAdmin>
                <TaxManagement />
              </ProtectedRoute>
            } />
            <Route path="/bonuses-loans" element={
              <ProtectedRoute requireAdmin>
                <BonusesLoans />
              </ProtectedRoute>
            } />
            <Route path="/final-settlement" element={
              <ProtectedRoute requireAdmin>
                <FinalSettlement />
              </ProtectedRoute>
            } />
            <Route path="/assets" element={
              <ProtectedRoute requireAdmin>
                <AssetManagement />
              </ProtectedRoute>
            } />
            <Route path="/transfers" element={
              <ProtectedRoute requireAdmin>
                <TransferManagement />
              </ProtectedRoute>
            } />
            <Route path="/medical-claims" element={
              <ProtectedRoute requireAdmin>
                <MedicalClaims />
              </ProtectedRoute>
            } />
            <Route path="/reimbursements" element={
              <ProtectedRoute requireAdmin>
                <MedicalReimbursements />
              </ProtectedRoute>
            } />
            <Route path="/grievances" element={
              <ProtectedRoute requireAdmin>
                <GrievanceManagement />
              </ProtectedRoute>
            } />
            <Route path="/reports" element={
              <ProtectedRoute requireAdmin>
                <ReportsManagement />
              </ProtectedRoute>
            } />
            <Route path="/analytics" element={
              <ProtectedRoute requireAdmin>
                <AnalyticsDashboard />
              </ProtectedRoute>
            } />

            {/* Employee Routes */}
            <Route path="/employee-dashboard" element={
              <ProtectedRoute>
                <EmployeeDashboard />
              </ProtectedRoute>
            } />
            <Route path="/my-profile" element={
              <ProtectedRoute>
                <MyProfile />
              </ProtectedRoute>
            } />
            <Route path="/my-attendance" element={
              <ProtectedRoute>
                <MyAttendance />
              </ProtectedRoute>
            } />
            <Route path="/my-leave" element={
              <ProtectedRoute>
                <MyLeave />
              </ProtectedRoute>
            } />
            <Route path="/my-payslips" element={
              <ProtectedRoute>
                <MyPayslips />
              </ProtectedRoute>
            } />
            <Route path="/my-performance" element={
              <ProtectedRoute>
                <MyPerformance />
              </ProtectedRoute>
            } />
            <Route path="/my-training" element={
              <ProtectedRoute>
                <MyTraining />
              </ProtectedRoute>
            } />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
