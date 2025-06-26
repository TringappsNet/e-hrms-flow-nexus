import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Users,
  UserCheck,
  Calendar,
  DollarSign,
  FileText,
  Settings,
  Bell,
  Home,
  MapPin,
  BookOpen,
  Package,
  BarChart3,
  LogOut,
  MessageSquare,
  User,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Award,
  Star,
  Plane,
  Heart,
  UserPlus,
  UserMinus,
  Coins,
  Clock,
  Building,
  TrendingUp,
  Calculator,
  Receipt,
  CreditCard,
  List,
  Fingerprint,
  CalendarClock,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useNavigate, useLocation } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface SidebarProps {
  onCollapsedChange?: (collapsed: boolean) => void;
}

export const Sidebar = ({ onCollapsedChange }: SidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState<string[]>([]);
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  // Notify parent when collapse state changes
  useEffect(() => {
    onCollapsedChange?.(isCollapsed);
  }, [isCollapsed, onCollapsedChange]);

  // Auto-expand menu if current path is in submenu
  useEffect(() => {
    const findParentMenu = () => {
      for (const category of menuCategories) {
        if (category.subItems) {
          const hasActiveSubItem = category.subItems.some(item => pathname === item.path);
          if (hasActiveSubItem && !expandedMenus.includes(category.id!)) {
            setExpandedMenus(prev => [...prev, category.id!]);
          }
        }
      }
    };
    findParentMenu();
  }, [pathname]);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleMenu = (menuId: string) => {
    setExpandedMenus(prev => 
      prev.includes(menuId) 
        ? prev.filter(id => id !== menuId)
        : [...prev, menuId]
    );
  };

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  const menuCategories = [
    { icon: Home, label: "Dashboard", path: "/" },
    {
      icon: Users,
      label: "Employee Management",
      id: "employee",
      subItems: [
        { icon: Users, label: "Employee Directory", path: "/employees" },
        { icon: FileText, label: "Service Book", path: "/service-book" },
        { icon: Award, label: "Promotions", path: "/promotions" },
        { icon: Star, label: "Performance (APAR)", path: "/performance" },
        { icon: List, label: "Seniority Lists", path: "/seniority" },
        { icon: UserPlus, label: "Recruitment", path: "/recruitment" },
        { icon: MapPin, label: "Deputation", path: "/deputation" },
        { icon: UserMinus, label: "Exit/Retirement", path: "/exit-retirement" },
      ]
    },
    {
      icon: UserCheck,
      label: "Attendance & Time",
      id: "attendance",
      subItems: [
        { icon: UserCheck, label: "Daily Attendance", path: "/attendance" },
        { icon: Fingerprint, label: "Biometric Capture", path: "/biometric" },
        { icon: CalendarClock, label: "Shift Management", path: "/shifts" },
        { icon: TrendingUp, label: "Overtime Tracking", path: "/overtime" },
      ]
    },
    {
      icon: Calendar,
      label: "Leave Management",
      id: "leave",
      subItems: [
        { icon: Calendar, label: "Leave Applications", path: "/leave" },
        { icon: Receipt, label: "Leave Encashment", path: "/leave-encashment" },
        { icon: Plane, label: "Tour/Travel", path: "/travel" },
      ]
    },
    {
      icon: BookOpen,
      label: "Training & Development",
      id: "training",
      subItems: [
        { icon: BookOpen, label: "Training Programs", path: "/training" },
        { icon: Award, label: "Certifications", path: "/certifications" },
      ]
    },
    {
      icon: DollarSign,
      label: "Payroll & Finance",
      id: "payroll",
      subItems: [
        { icon: DollarSign, label: "Payroll Management", path: "/payroll" },
        { icon: Calculator, label: "Salary Structure", path: "/salary-structure" },
        { icon: Receipt, label: "Salary Slips", path: "/salary-slips" },
        { icon: CreditCard, label: "TDS & Tax", path: "/tax-management" },
        { icon: Coins, label: "Bonuses & Loans", path: "/bonuses-loans" },
        { icon: Building, label: "Final Settlement", path: "/final-settlement" },
      ]
    },
    {
      icon: Package,
      label: "Asset Management",
      id: "assets",
      subItems: [
        { icon: Package, label: "Asset Inventory", path: "/assets" },
        { icon: MapPin, label: "Asset Transfer", path: "/transfers" },
      ]
    },
    {
      icon: Heart,
      label: "Medical & Benefits",
      id: "medical",
      subItems: [
        { icon: Heart, label: "Medical Claims", path: "/medical-claims" },
        { icon: Receipt, label: "Reimbursements", path: "/reimbursements" },
      ]
    },
    {
      icon: MessageSquare,
      label: "Grievances",
      path: "/grievances"
    },
    {
      icon: BarChart3,
      label: "Reports & Analytics",
      id: "reports",
      subItems: [
        { icon: BarChart3, label: "Standard Reports", path: "/reports" },
        { icon: TrendingUp, label: "Analytics Dashboard", path: "/analytics" },
      ]
    },
  ];

  const isPathActive = (path: string) => pathname === path;
  const isMenuExpanded = (menuId: string) => expandedMenus.includes(menuId);
  const hasActiveSubItem = (subItems: any[]) => subItems?.some(item => isPathActive(item.path));

  return (
    <div className={`bg-white shadow-xl border-r border-gray-200 ${isCollapsed ? 'w-16' : 'w-72'} h-screen flex flex-col fixed left-0 top-0 z-50`} style={{ transition: 'width 0.2s ease-in-out' }}>
      {/* Header */}
      <div className="p-4 border-b border-gray-200 bg-gradient-to-r from-blue-600 to-blue-700 flex-shrink-0">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <div className="flex items-center space-x-3">
              <img
                src="goa_logo.png"
                alt="Logo"
                className="rounded-lg h-12 w-12 border-2 border-white shadow-lg"
              />
              <div className="flex flex-col">
                <h1 className="text-xl font-bold text-white leading-tight">
                  E-HRMS
                </h1>
                <span className="text-xs text-blue-100 font-medium">
                  Government Portal
                </span>
              </div>
            </div>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleCollapse}
            className="ml-auto text-white hover:bg-blue-800"
          >
            {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Navigation Menu with ScrollArea */}
      <ScrollArea className="flex-1 px-3 py-4">
        <div className="space-y-1">
          {menuCategories.map((category) => {
            if (category.path) {
              // Single menu item
              return (
                <Button
                  key={category.path}
                  variant="ghost"
                  onClick={() => handleNavigation(category.path)}
                  className={`w-full justify-start text-left ${
                    isPathActive(category.path)
                      ? "bg-blue-50 text-blue-700 border-r-4 border-blue-600 shadow-sm font-medium" 
                      : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  } ${isCollapsed ? 'px-2' : 'px-3'}`}
                  style={{ transition: 'none' }}
                >
                  <category.icon className={`h-5 w-5 ${isCollapsed ? '' : 'mr-3'} flex-shrink-0`} />
                  {!isCollapsed && <span className="font-medium truncate">{category.label}</span>}
                </Button>
              );
            } else {
              // Menu with sub-items
              const isExpanded = isMenuExpanded(category.id!);
              const hasActiveChild = hasActiveSubItem(category.subItems || []);
              
              return (
                <div key={category.id} className="space-y-1">
                  <Button
                    variant="ghost"
                    onClick={() => !isCollapsed && toggleMenu(category.id!)}
                    className={`w-full justify-start text-left ${
                      hasActiveChild
                        ? "bg-blue-50 text-blue-700 shadow-sm font-medium" 
                        : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                    } ${isCollapsed ? 'px-2' : 'px-3'}`}
                    style={{ transition: 'none' }}
                  >
                    <category.icon className={`h-5 w-5 ${isCollapsed ? '' : 'mr-3'} flex-shrink-0`} />
                    {!isCollapsed && (
                      <>
                        <span className="font-medium flex-1 truncate">{category.label}</span>
                        <div className="flex-shrink-0">
                          {isExpanded ? (
                            <ChevronUp className="h-4 w-4" />
                          ) : (
                            <ChevronDown className="h-4 w-4" />
                          )}
                        </div>
                      </>
                    )}
                  </Button>
                  
                  {!isCollapsed && isExpanded && category.subItems && (
                    <div className="ml-6 space-y-1 overflow-hidden">
                      {category.subItems.map((subItem) => (
                        <Button
                          key={subItem.path}
                          variant="ghost"
                          onClick={() => handleNavigation(subItem.path)}
                          className={`w-full justify-start text-left text-sm ${
                            isPathActive(subItem.path)
                              ? "bg-blue-100 text-blue-700 border-r-2 border-blue-500 font-medium" 
                              : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                          } px-3 py-2`}
                          style={{ transition: 'none' }}
                        >
                          <subItem.icon className="h-4 w-4 mr-3 flex-shrink-0" />
                          <span className="truncate">{subItem.label}</span>
                        </Button>
                      ))}
                    </div>
                  )}
                </div>
              );
            }
          })}
        </div>
      </ScrollArea>

      {/* Bottom Section */}
      <div className="p-3 border-t border-gray-200 bg-gray-50 flex-shrink-0">
        <div className="space-y-2">
          <Button
            variant="ghost"
            className={`w-full justify-start relative text-gray-700 hover:text-blue-600 hover:bg-gray-100 ${isCollapsed ? 'px-2' : 'px-3'}`}
            style={{ transition: 'none' }}
          >
            <Bell className={`h-5 w-5 ${isCollapsed ? '' : 'mr-3'} flex-shrink-0`} />
            {!isCollapsed && <span className="font-medium">Notifications</span>}
            <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-500 text-xs">
              3
            </Badge>
          </Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className={`w-full justify-start text-gray-700 hover:text-blue-600 hover:bg-gray-100 ${isCollapsed ? 'px-2' : 'px-3'}`}
                style={{ transition: 'none' }}
              >
                <User className={`h-5 w-5 ${isCollapsed ? '' : 'mr-3'} flex-shrink-0`} />
                {!isCollapsed && <span className="font-medium">Admin</span>}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
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
