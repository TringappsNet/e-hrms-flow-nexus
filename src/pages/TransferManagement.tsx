
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/layout/Navigation";
import { mockTransfers, Transfer, mockEmployees, departments } from "@/data/mockData";
import { TransferForm } from "@/components/transfer/TransferForm";
import { MapPin, Plus, Search, Filter, FileText, Calendar } from "lucide-react";

const TransferManagement = () => {
  const [transfers, setTransfers] = useState<Transfer[]>(mockTransfers);
  const [searchTerm, setSearchTerm] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [selectedTransfer, setSelectedTransfer] = useState<Transfer | null>(null);

  const filteredTransfers = transfers.filter(transfer =>
    transfer.employeeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    transfer.employeeId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    transfer.fromDepartment.toLowerCase().includes(searchTerm.toLowerCase()) ||
    transfer.toDepartment.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddTransfer = (transferData: Omit<Transfer, 'id'>) => {
    const newTransfer: Transfer = {
      ...transferData,
      id: (transfers.length + 1).toString()
    };
    setTransfers([...transfers, newTransfer]);
    setShowForm(false);
  };

  const handleApproveTransfer = (transferId: string) => {
    setTransfers(prev => prev.map(transfer =>
      transfer.id === transferId ? { ...transfer, status: 'Approved' as const } : transfer
    ));
  };

  const getStatusBadge = (status: string) => {
    const statusColors = {
      'Pending': 'bg-yellow-100 text-yellow-800',
      'Approved': 'bg-green-100 text-green-800',
      'Completed': 'bg-blue-100 text-blue-800'
    };
    return statusColors[status as keyof typeof statusColors] || 'bg-gray-100 text-gray-800';
  };

  if (showForm) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navigation />
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <TransferForm
            onSubmit={handleAddTransfer}
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
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Transfer & Posting Management</h2>
          <p className="text-gray-600">Manage employee transfers and postings</p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-blue-600" />
                  Transfer Applications
                </CardTitle>
                <CardDescription>View and manage transfer requests</CardDescription>
              </div>
              <Button onClick={() => setShowForm(true)}>
                <Plus className="h-4 w-4 mr-2" />
                New Transfer
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-4 mb-6">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search transfers..."
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

            <div className="space-y-4">
              {filteredTransfers.map((transfer) => (
                <Card key={transfer.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center space-x-4 mb-4">
                          <div>
                            <h3 className="font-semibold text-lg">{transfer.employeeName}</h3>
                            <p className="text-sm text-gray-600">{transfer.employeeId}</p>
                          </div>
                          <Badge className={getStatusBadge(transfer.status)} variant="secondary">
                            {transfer.status}
                          </Badge>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                          <div>
                            <p className="text-sm text-gray-600">From Department</p>
                            <p className="font-medium">{transfer.fromDepartment}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">To Department</p>
                            <p className="font-medium">{transfer.toDepartment}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">From Location</p>
                            <p className="font-medium">{transfer.fromLocation}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">To Location</p>
                            <p className="font-medium">{transfer.toLocation}</p>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <p className="text-sm text-gray-600">Transfer Date</p>
                            <p className="font-medium flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              {new Date(transfer.transferDate).toLocaleDateString()}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Order ID</p>
                            <p className="font-medium">{transfer.orderId}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Reason</p>
                            <p className="font-medium">{transfer.reason}</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col space-y-2 ml-4">
                        {transfer.status === 'Pending' && (
                          <Button 
                            size="sm" 
                            onClick={() => handleApproveTransfer(transfer.id)}
                          >
                            Approve
                          </Button>
                        )}
                        <Button variant="outline" size="sm">
                          <FileText className="h-4 w-4 mr-1" />
                          View Order
                        </Button>
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

export default TransferManagement;
