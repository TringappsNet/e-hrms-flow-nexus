
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
          <Route path="/exit-retirement" element={<div className="p-8"><h1>Exit/Retirement Processing</h1></div>} />
          <Route path="/attendance" element={<AttendanceManagement />} />
          <Route path="/biometric" element={<div className="p-8"><h1>Biometric Capture</h1></div>} />
          <Route path="/shifts" element={<div className="p-8"><h1>Shift Management</h1></div>} />
          <Route path="/overtime" element={<div className="p-8"><h1>Overtime Tracking</h1></div>} />
          <Route path="/leave" element={<LeaveManagement />} />
          <Route path="/leave-encashment" element={<div className="p-8"><h1>Leave Encashment</h1></div>} />
          <Route path="/travel" element={<div className="p-8"><h1>Tour/Travel Management</h1></div>} />
          <Route path="/training" element={<TrainingManagement />} />
          <Route path="/certifications" element={<div className="p-8"><h1>Certifications</h1></div>} />
          <Route path="/payroll" element={<PayrollManagement />} />
          <Route path="/salary-structure" element={<div className="p-8"><h1>Salary Structure</h1></div>} />
          <Route path="/salary-slips" element={<div className="p-8"><h1>Salary Slips</h1></div>} />
          <Route path="/tax-management" element={<div className="p-8"><h1>TDS & Tax Management</h1></div>} />
          <Route path="/bonuses-loans" element={<div className="p-8"><h1>Bonuses & Loans</h1></div>} />
          <Route path="/final-settlement" element={<div className="p-8"><h1>Final Settlement</h1></div>} />
          <Route path="/assets" element={<AssetManagement />} />
          <Route path="/transfers" element={<TransferManagement />} />
          <Route path="/medical-claims" element={<div className="p-8"><h1>Medical Claims</h1></div>} />
          <Route path="/reimbursements" element={<div className="p-8"><h1>Medical Reimbursements</h1></div>} />
          <Route path="/grievances" element={<GrievanceManagement />} />
          <Route path="/reports" element={<ReportsManagement />} />
          <Route path="/analytics" element={<div className="p-8"><h1>Analytics Dashboard</h1></div>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
