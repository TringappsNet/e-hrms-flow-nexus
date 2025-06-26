
import { Sidebar } from "./Sidebar";

interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Sidebar />
      <main className="flex-1 overflow-auto" style={{ marginLeft: '288px' }}>
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  );
};
