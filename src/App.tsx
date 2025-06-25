
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/employees" element={<EmployeeManagement />} />
          <Route path="/service-book" element={<ServiceBook />} />
          <Route path="/promotions" element={<Promotions />} />
          <Route path="/performance" element={<Performance />} />
          <Route path="/seniority" element={<SeniorityLists />} />
          <Route path="/recruitment" element={<Recruitment />} />
          <Route path="/deputation" element={<Deputation />} />
          <Route path="/exit-retirement" element={<ExitRetirement />} />
          <Route path="/attendance" element={<AttendanceManagement />} />
          <Route path="/biometric" element={<BiometricCapture />} />
          <Route path="/shifts" element={<ShiftManagement />} />
          <Route path="/overtime" element={<OvertimeTracking />} />
          <Route path="/leave" element={<LeaveManagement />} />
          <Route path="/leave-encashment" element={<LeaveEncashment />} />
          <Route path="/travel" element={<TravelManagement />} />
          <Route path="/training" element={<TrainingManagement />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/payroll" element={<PayrollManagement />} />
          <Route path="/salary-structure" element={<SalaryStructure />} />
          <Route path="/salary-slips" element={<SalarySlips />} />
          <Route path="/tax-management" element={<TaxManagement />} />
          <Route path="/bonuses-loans" element={<BonusesLoans />} />
          <Route path="/final-settlement" element={<FinalSettlement />} />
          <Route path="/assets" element={<AssetManagement />} />
          <Route path="/transfers" element={<TransferManagement />} />
          <Route path="/medical-claims" element={<MedicalClaims />} />
          <Route path="/reimbursements" element={<MedicalReimbursements />} />
          <Route path="/grievances" element={<GrievanceManagement />} />
          <Route path="/reports" element={<ReportsManagement />} />
          <Route path="/analytics" element={<AnalyticsDashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
