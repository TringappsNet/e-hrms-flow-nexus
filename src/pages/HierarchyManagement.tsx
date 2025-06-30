
import { AppLayout } from "@/components/layout/AppLayout";
import { HierarchyView } from "@/components/hierarchy/HierarchyView";

const HierarchyManagement = () => {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Hierarchy Management</h1>
            <p className="text-gray-600 mt-1">
              View and manage organizational hierarchy structure
            </p>
          </div>
        </div>
        
        <HierarchyView />
      </div>
    </AppLayout>
  );
};

export default HierarchyManagement;
