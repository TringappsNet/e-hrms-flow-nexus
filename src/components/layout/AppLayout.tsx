
import { Sidebar } from "./Sidebar";
import { useState } from "react";

interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Sidebar onCollapsedChange={setIsCollapsed} />
      <main 
        className="flex-1 overflow-auto transition-all duration-200 ease-in-out"
        style={{ 
          marginLeft: isCollapsed ? '64px' : '320px'
        }}
      >
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  );
};
