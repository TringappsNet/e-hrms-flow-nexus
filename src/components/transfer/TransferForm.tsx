
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Transfer, mockEmployees, departments } from "@/data/mockData";
import { MapPin, ArrowLeft } from "lucide-react";

interface TransferFormProps {
  transfer?: Transfer | null;
  onSubmit: (transfer: Omit<Transfer, 'id'>) => void;
  onCancel: () => void;
}

export const TransferForm = ({ transfer, onSubmit, onCancel }: TransferFormProps) => {
  const [formData, setFormData] = useState({
    employeeId: '',
    employeeName: '',
    fromDepartment: '',
    toDepartment: '',
    fromLocation: '',
    toLocation: '',
    transferDate: '',
    reason: '',
    status: 'Pending' as const,
    orderId: `TO-${new Date().getFullYear()}-${String(Date.now()).slice(-3)}`
  });

  useEffect(() => {
    if (transfer) {
      setFormData({
        employeeId: transfer.employeeId,
        employeeName: transfer.employeeName,
        fromDepartment: transfer.fromDepartment,
        toDepartment: transfer.toDepartment,
        fromLocation: transfer.fromLocation,
        toLocation: transfer.toLocation,
        transferDate: transfer.transferDate,
        reason: transfer.reason,
        status: transfer.status,
        orderId: transfer.orderId
      });
    }
  }, [transfer]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Auto-populate employee details when employee is selected
    if (field === 'employeeId' && !transfer) {
      const employee = mockEmployees.find(emp => emp.employeeId === value);
      if (employee) {
        setFormData(prev => ({
          ...prev,
          employeeName: employee.name,
          fromDepartment: employee.department
        }));
      }
    }
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" onClick={onCancel}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div>
            <CardTitle className="flex items-center">
              <MapPin className="h-5 w-5 mr-2 text-blue-600" />
              {transfer ? 'Edit Transfer' : 'Transfer Application'}
            </CardTitle>
            <CardDescription>
              {transfer ? 'Update transfer request details' : 'Submit transfer request for employee'}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="employeeId">Employee ID</Label>
              {transfer ? (
                <Input
                  id="employeeId"
                  value={formData.employeeId}
                  readOnly
                  className="bg-gray-50"
                />
              ) : (
                <select
                  id="employeeId"
                  value={formData.employeeId}
                  onChange={(e) => handleChange('employeeId', e.target.value)}
                  className="w-full h-10 px-3 py-2 border border-input bg-background rounded-md text-sm"
                  required
                >
                  <option value="">Select Employee</option>
                  {mockEmployees.map(emp => (
                    <option key={emp.employeeId} value={emp.employeeId}>
                      {emp.employeeId} - {emp.name}
                    </option>
                  ))}
                </select>
              )}
            </div>
            <div>
              <Label htmlFor="employeeName">Employee Name</Label>
              <Input
                id="employeeName"
                value={formData.employeeName}
                readOnly
                className="bg-gray-50"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="fromDepartment">From Department</Label>
              <Input
                id="fromDepartment"
                value={formData.fromDepartment}
                readOnly
                className="bg-gray-50"
              />
            </div>
            <div>
              <Label htmlFor="toDepartment">To Department</Label>
              <select
                id="toDepartment"
                value={formData.toDepartment}
                onChange={(e) => handleChange('toDepartment', e.target.value)}
                className="w-full h-10 px-3 py-2 border border-input bg-background rounded-md text-sm"
                required
              >
                <option value="">Select Department</option>
                {departments.map(dept => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="fromLocation">From Location</Label>
              <Input
                id="fromLocation"
                value={formData.fromLocation}
                onChange={(e) => handleChange('fromLocation', e.target.value)}
                placeholder="Current office location"
                required
              />
            </div>
            <div>
              <Label htmlFor="toLocation">To Location</Label>
              <Input
                id="toLocation"
                value={formData.toLocation}
                onChange={(e) => handleChange('toLocation', e.target.value)}
                placeholder="New office location"
                required
              />
            </div>
          </div>

          <div>
            <Label htmlFor="transferDate">Transfer Date</Label>
            <Input
              id="transferDate"
              type="date"
              value={formData.transferDate}
              onChange={(e) => handleChange('transferDate', e.target.value)}
              required
            />
          </div>

          <div>
            <Label htmlFor="reason">Reason for Transfer</Label>
            <Textarea
              id="reason"
              value={formData.reason}
              onChange={(e) => handleChange('reason', e.target.value)}
              placeholder="Please provide reason for transfer"
              rows={4}
              required
            />
          </div>

          <div>
            <Label htmlFor="orderId">Order ID</Label>
            <Input
              id="orderId"
              value={formData.orderId}
              readOnly
              className="bg-gray-50"
            />
          </div>

          <div className="flex space-x-4">
            <Button type="submit" className="flex-1">
              {transfer ? 'Update Transfer Request' : 'Submit Transfer Request'}
            </Button>
            <Button type="button" variant="outline" onClick={onCancel}>
              Cancel
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};
