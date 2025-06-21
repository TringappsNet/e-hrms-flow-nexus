
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
  Home,
  MapPin,
  BookOpen,
  Package,
  BarChart3,
  LogOut,
  MessageSquare,
  Shield,
  User,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useNavigate, useLocation } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  const menuItems = [
    { icon: Home, label: "Dashboard", path: "/" },
    { icon: Users, label: "Employees", path: "/employees" },
    { icon: UserCheck, label: "Attendance", path: "/attendance" },
    { icon: Calendar, label: "Leave", path: "/leave" },
    { icon: MapPin, label: "Transfers", path: "/transfers" },
    { icon: BookOpen, label: "Training", path: "/training" },
    { icon: Package, label: "Assets", path: "/assets" },
    { icon: DollarSign, label: "Payroll", path: "/payroll" },
    { icon: MessageSquare, label: "Grievances", path: "/grievances" },
    { icon: BarChart3, label: "Reports", path: "/reports" },
  ];

  return (
    <div className={`bg-white shadow-lg border-r transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'} min-h-screen flex flex-col`}>
      {/* Header */}
      <div className="p-4 border-b">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <div className="flex items-center space-x-2">
              <img
                src="goa_logo.png"
                alt="Logo"
                className="rounded-lg h-10 w-10"
              />
              <div className="flex flex-col">
                <h1 className="text-lg font-bold text-gray-900 leading-tight">
                  E-HRMS
                </h1>
                <span className="text-xs text-blue-600 font-medium">
                  Government Portal
                </span>
              </div>
            </div>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="ml-auto"
          >
            {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 p-4">
        <div className="space-y-2">
          {menuItems.map((item) => (
            <Button
              key={item.path}
              variant="ghost"
              onClick={() => navigate(item.path)}
              className={`w-full justify-start text-left ${
                pathname === item.path 
                  ? "bg-blue-50 text-blue-600 border-r-2 border-blue-600" 
                  : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
              } ${isCollapsed ? 'px-2' : 'px-4'}`}
            >
              <item.icon className={`h-5 w-5 ${isCollapsed ? '' : 'mr-3'}`} />
              {!isCollapsed && <span>{item.label}</span>}
            </Button>
          ))}
        </div>
      </nav>

      {/* Bottom Section */}
      <div className="p-4 border-t">
        <div className="space-y-2">
          <Button
            variant="ghost"
            className={`w-full justify-start relative ${isCollapsed ? 'px-2' : 'px-4'}`}
          >
            <Bell className={`h-5 w-5 ${isCollapsed ? '' : 'mr-3'}`} />
            {!isCollapsed && <span>Notifications</span>}
            <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-500 text-xs">
              3
            </Badge>
          </Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className={`w-full justify-start ${isCollapsed ? 'px-2' : 'px-4'}`}
              >
                <User className={`h-5 w-5 ${isCollapsed ? '' : 'mr-3'}`} />
                {!isCollapsed && <span>Admin</span>}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuItem>
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};
