
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Transfer } from "@/data/mockData";
import { MapPin, ArrowLeft, Calendar, FileText, User, Building, MapPinIcon } from "lucide-react";

interface TransferDetailViewProps {
  transfer: Transfer;
  onBack: () => void;
  onEdit: () => void;
  onApprove?: () => void;
  onReject?: () => void;
}

export const TransferDetailView = ({ 
  transfer, 
  onBack, 
  onEdit, 
  onApprove, 
  onReject 
}: TransferDetailViewProps) => {
  const getStatusBadge = (status: string) => {
    const statusColors = {
      'Pending': 'bg-yellow-100 text-yellow-800',
      'Approved': 'bg-green-100 text-green-800',
      'Completed': 'bg-blue-100 text-blue-800'
    };
    return statusColors[status as keyof typeof statusColors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" onClick={onBack}>
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <div>
              <CardTitle className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-blue-600" />
                Transfer Details - {transfer.orderId}
              </CardTitle>
              <CardDescription>
                Complete transfer information and history
              </CardDescription>
            </div>
          </div>
          <div className="flex space-x-2">
            <Badge className={getStatusBadge(transfer.status)} variant="secondary">
              {transfer.status}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Employee Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-4">
            <h3 className="font-semibold mb-3 flex items-center">
              <User className="h-4 w-4 mr-2" />
              Employee Information
            </h3>
            <div className="space-y-2">
              <div>
                <span className="text-sm text-gray-600">Employee ID:</span>
                <p className="font-medium">{transfer.employeeId}</p>
              </div>
              <div>
                <span className="text-sm text-gray-600">Name:</span>
                <p className="font-medium">{transfer.employeeName}</p>
              </div>
            </div>
          </Card>

          <Card className="p-4">
            <h3 className="font-semibold mb-3 flex items-center">
              <FileText className="h-4 w-4 mr-2" />
              Transfer Order
            </h3>
            <div className="space-y-2">
              <div>
                <span className="text-sm text-gray-600">Order ID:</span>
                <p className="font-medium">{transfer.orderId}</p>
              </div>
              <div>
                <span className="text-sm text-gray-600">Transfer Date:</span>
                <p className="font-medium flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {new Date(transfer.transferDate).toLocaleDateString()}
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Transfer Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-4">
            <h3 className="font-semibold mb-3 flex items-center">
              <Building className="h-4 w-4 mr-2" />
              From
            </h3>
            <div className="space-y-2">
              <div>
                <span className="text-sm text-gray-600">Department:</span>
                <p className="font-medium">{transfer.fromDepartment}</p>
              </div>
              <div>
                <span className="text-sm text-gray-600">Location:</span>
                <p className="font-medium flex items-center">
                  <MapPinIcon className="h-4 w-4 mr-1" />
                  {transfer.fromLocation}
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-4">
            <h3 className="font-semibold mb-3 flex items-center">
              <Building className="h-4 w-4 mr-2" />
              To
            </h3>
            <div className="space-y-2">
              <div>
                <span className="text-sm text-gray-600">Department:</span>
                <p className="font-medium">{transfer.toDepartment}</p>
              </div>
              <div>
                <span className="text-sm text-gray-600">Location:</span>
                <p className="font-medium flex items-center">
                  <MapPinIcon className="h-4 w-4 mr-1" />
                  {transfer.toLocation}
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Reason */}
        <Card className="p-4">
          <h3 className="font-semibold mb-3">Reason for Transfer</h3>
          <p className="text-gray-700">{transfer.reason}</p>
        </Card>

        {/* Action Buttons */}
        <div className="flex space-x-4 pt-4 border-t">
          <Button onClick={onEdit} variant="outline">
            Edit Transfer
          </Button>
          {transfer.status === 'Pending' && onApprove && (
            <Button onClick={onApprove}>
              Approve Transfer
            </Button>
          )}
          {transfer.status === 'Pending' && onReject && (
            <Button onClick={onReject} variant="destructive">
              Reject Transfer
            </Button>
          )}
          <Button variant="outline">
            <FileText className="h-4 w-4 mr-2" />
            Download Order
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
