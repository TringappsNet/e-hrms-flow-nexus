
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Users,
  UserCheck,
  Calendar,
  DollarSign,
  FileText,
  Settings,
  Bell,
  Search,
  Menu,
  Home,
  Clock,
  MapPin,
  BookOpen,
  UserPlus,
  BarChart3,
  LogOut,
  Package
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

export const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { icon: Home, label: "Dashboard", path: "/" },
    { icon: Users, label: "Employee Management", path: "/employees" },
    { icon: UserCheck, label: "Attendance", path: "/attendance" },
    { icon: Calendar, label: "Leave Management", path: "/leave" },
    { icon: MapPin, label: "Transfer & Posting", path: "/transfers" },
    { icon: BookOpen, label: "Training", path: "/training" },
    { icon: Package, label: "Asset Management", path: "/assets" },
    { icon: DollarSign, label: "Payroll", path: "/payroll" },
    { icon: FileText, label: "Grievances", path: "/grievances" },
    { icon: BarChart3, label: "Reports", path: "/reports" },
  ];

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate("/")}>
              <FileText className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">E-HRMS</h1>
            </div>
            <Badge variant="secondary" className="bg-blue-100 text-blue-800">
              Government Edition
            </Badge>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {menuItems.slice(0, 6).map((item) => (
              <Button
                key={item.path}
                variant="ghost"
                size="sm"
                onClick={() => navigate(item.path)}
                className="flex items-center space-x-1"
              >
                <item.icon className="h-4 w-4" />
                <span className="text-sm">{item.label}</span>
              </Button>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
            <Button variant="ghost" size="sm">
              <Bell className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Settings className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <LogOut className="h-4 w-4" />
            </Button>
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <div className="grid grid-cols-2 gap-2">
              {menuItems.map((item) => (
                <Button
                  key={item.path}
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    navigate(item.path);
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex items-center space-x-2 justify-start"
                >
                  <item.icon className="h-4 w-4" />
                  <span className="text-sm">{item.label}</span>
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
