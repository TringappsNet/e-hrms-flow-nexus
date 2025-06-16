
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/layout/Navigation";
import { mockAssets, Asset, mockEmployees, assetTypes } from "@/data/mockData";
import { AssetForm } from "@/components/asset/AssetForm";
import { Package, Plus, Search, Filter, MapPin, Calendar, User } from "lucide-react";

const AssetManagement = () => {
  const [assets, setAssets] = useState<Asset[]>(mockAssets);
  const [searchTerm, setSearchTerm] = useState("");
  const [showForm, setShowForm] = useState(false);

  const filteredAssets = assets.filter(asset =>
    asset.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    asset.assetId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    asset.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddAsset = (assetData: Omit<Asset, 'id'>) => {
    const newAsset: Asset = {
      ...assetData,
      id: (assets.length + 1).toString()
    };
    setAssets([...assets, newAsset]);
    setShowForm(false);
  };

  const handleAssignAsset = (assetId: string, employeeId: string) => {
    const employee = mockEmployees.find(emp => emp.employeeId === employeeId);
    if (employee) {
      setAssets(prev => prev.map(asset =>
        asset.id === assetId 
          ? { 
              ...asset, 
              assignedTo: employeeId, 
              assignedEmployee: employee.name,
              status: 'Assigned' as const 
            } 
          : asset
      ));
    }
  };

  const getStatusBadge = (status: string) => {
    const statusColors = {
      'Available': 'bg-green-100 text-green-800',
      'Assigned': 'bg-blue-100 text-blue-800',
      'Under Maintenance': 'bg-yellow-100 text-yellow-800',
      'Disposed': 'bg-red-100 text-red-800'
    };
    return statusColors[status as keyof typeof statusColors] || 'bg-gray-100 text-gray-800';
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Vehicle': return '🚗';
      case 'Laptop': return '💻';
      case 'Mobile': return '📱';
      case 'Equipment': return '⚙️';
      case 'Furniture': return '🪑';
      default: return '📦';
    }
  };

  if (showForm) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navigation />
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <AssetForm
            onSubmit={handleAddAsset}
            onCancel={() => setShowForm(false)}
          />
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Asset Management</h2>
          <p className="text-gray-600">Track and manage organizational assets</p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="flex items-center">
                  <Package className="h-5 w-5 mr-2 text-blue-600" />
                  Asset Inventory
                </CardTitle>
                <CardDescription>Manage assets and assignments</CardDescription>
              </div>
              <Button onClick={() => setShowForm(true)}>
                <Plus className="h-4 w-4 mr-2" />
                Add Asset
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-4 mb-6">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search assets..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAssets.map((asset) => (
                <Card key={asset.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{getTypeIcon(asset.type)}</span>
                        <div>
                          <h3 className="font-semibold text-lg">{asset.name}</h3>
                          <p className="text-sm text-gray-600">{asset.assetId}</p>
                        </div>
                      </div>
                      <Badge className={getStatusBadge(asset.status)} variant="secondary">
                        {asset.status}
                      </Badge>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center text-sm">
                        <Package className="h-4 w-4 mr-2 text-gray-500" />
                        <span className="font-medium">Type:</span>
                        <span className="ml-1">{asset.type}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <MapPin className="h-4 w-4 mr-2 text-gray-500" />
                        <span className="font-medium">Location:</span>
                        <span className="ml-1">{asset.location}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                        <span className="font-medium">Purchase:</span>
                        <span className="ml-1">{new Date(asset.purchaseDate).toLocaleDateString()}</span>
                      </div>
                      {asset.assignedEmployee && (
                        <div className="flex items-center text-sm">
                          <User className="h-4 w-4 mr-2 text-gray-500" />
                          <span className="font-medium">Assigned to:</span>
                          <span className="ml-1">{asset.assignedEmployee}</span>
                        </div>
                      )}
                      <div className="text-sm">
                        <span className="font-medium">Value:</span>
                        <span className="ml-1">₹{asset.value.toLocaleString()}</span>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t">
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline" className="flex-1">
                          View Details
                        </Button>
                        {asset.status === 'Available' && (
                          <Button size="sm" className="flex-1">
                            Assign
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default AssetManagement;
