
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { AppLayout } from "@/components/layout/AppLayout";
import { mockTransfers, Transfer, mockEmployees, departments } from "@/data/mockData";
import { TransferForm } from "@/components/transfer/TransferForm";
import { TransferDetailView } from "@/components/transfer/TransferDetailView";
import { MapPin, Plus, Search, Filter, FileText, Calendar, History, Eye, Edit, Trash2 } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const TransferManagement = () => {
  const [transfers, setTransfers] = useState<Transfer[]>(mockTransfers);
  const [searchTerm, setSearchTerm] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [selectedTransfer, setSelectedTransfer] = useState<Transfer | null>(null);
  const [editingTransfer, setEditingTransfer] = useState<Transfer | null>(null);
  const [viewMode, setViewMode] = useState<'list' | 'detail'>('list');

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

  const handleEditTransfer = (transferData: Omit<Transfer, 'id'>) => {
    if (editingTransfer) {
      setTransfers(prev => prev.map(transfer =>
        transfer.id === editingTransfer.id 
          ? { ...transferData, id: editingTransfer.id }
          : transfer
      ));
      setEditingTransfer(null);
      setShowForm(false);
    }
  };

  const handleApproveTransfer = (transferId: string) => {
    setTransfers(prev => prev.map(transfer =>
      transfer.id === transferId ? { ...transfer, status: 'Approved' as const } : transfer
    ));
  };

  const handleRejectTransfer = (transferId: string) => {
    setTransfers(prev => prev.map(transfer =>
      transfer.id === transferId ? { ...transfer, status: 'Pending' as const } : transfer
    ));
  };

  const handleDeleteTransfer = (transferId: string) => {
    setTransfers(prev => prev.filter(transfer => transfer.id !== transferId));
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
      <AppLayout>
        <div className="p-8">
          <TransferForm
            transfer={editingTransfer}
            onSubmit={editingTransfer ? handleEditTransfer : handleAddTransfer}
            onCancel={() => {
              setShowForm(false);
              setEditingTransfer(null);
            }}
          />
        </div>
      </AppLayout>
    );
  }

  if (selectedTransfer && viewMode === 'detail') {
    return (
      <AppLayout>
        <div className="p-8">
          <TransferDetailView
            transfer={selectedTransfer}
            onBack={() => {
              setSelectedTransfer(null);
              setViewMode('list');
            }}
            onEdit={() => {
              setEditingTransfer(selectedTransfer);
              setSelectedTransfer(null);
              setViewMode('list');
              setShowForm(true);
            }}
            onApprove={() => {
              handleApproveTransfer(selectedTransfer.id);
              setSelectedTransfer(null);
              setViewMode('list');
            }}
            onReject={() => {
              handleRejectTransfer(selectedTransfer.id);
              setSelectedTransfer(null);
              setViewMode('list');
            }}
          />
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <div className="p-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Transfer & Posting Management</h2>
          <p className="text-gray-600">Manage employee transfers and postings</p>
        </div>

        <Tabs defaultValue="transfers" className="space-y-6">
          <TabsList>
            <TabsTrigger value="transfers">Active Transfers</TabsTrigger>
            <TabsTrigger value="history">Transfer History</TabsTrigger>
          </TabsList>

          <TabsContent value="transfers">
            <Card>
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
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => {
                                setSelectedTransfer(transfer);
                                setViewMode('detail');
                              }}
                            >
                              <Eye className="h-4 w-4 mr-1" />
                              View Details
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => {
                                setEditingTransfer(transfer);
                                setShowForm(true);
                              }}
                            >
                              <Edit className="h-4 w-4 mr-1" />
                              Edit
                            </Button>
                            {transfer.status === 'Pending' && (
                              <Button 
                                size="sm" 
                                onClick={() => handleApproveTransfer(transfer.id)}
                              >
                                Approve
                              </Button>
                            )}
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleDeleteTransfer(transfer.id)}
                              className="text-red-600 hover:text-red-700"
                            >
                              <Trash2 className="h-4 w-4 mr-1" />
                              Delete
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <History className="h-5 w-5 mr-2 text-blue-600" />
                  Transfer History
                </CardTitle>
                <CardDescription>Complete history of all transfers</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Employee</TableHead>
                      <TableHead>From</TableHead>
                      <TableHead>To</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Order ID</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {transfers.map((transfer) => (
                      <TableRow key={transfer.id}>
                        <TableCell>
                          <div>
                            <div className="font-medium">{transfer.employeeName}</div>
                            <div className="text-sm text-gray-600">{transfer.employeeId}</div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <div className="font-medium">{transfer.fromDepartment}</div>
                            <div className="text-sm text-gray-600">{transfer.fromLocation}</div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <div className="font-medium">{transfer.toDepartment}</div>
                            <div className="text-sm text-gray-600">{transfer.toLocation}</div>
                          </div>
                        </TableCell>
                        <TableCell>{new Date(transfer.transferDate).toLocaleDateString()}</TableCell>
                        <TableCell>
                          <Badge className={getStatusBadge(transfer.status)} variant="secondary">
                            {transfer.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{transfer.orderId}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => {
                                setSelectedTransfer(transfer);
                                setViewMode('detail');
                              }}
                            >
                              <Eye className="h-4 w-4 mr-1" />
                              View
                            </Button>
                            <Button variant="outline" size="sm">
                              <FileText className="h-4 w-4 mr-1" />
                              Order
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
};

export default TransferManagement;
