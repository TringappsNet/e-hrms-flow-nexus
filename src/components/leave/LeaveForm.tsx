
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { LeaveApplication, leaveTypes } from "@/data/mockData";
import { Calendar, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface LeaveFormProps {
  onSubmit: (leave: Omit<LeaveApplication, 'id' | 'appliedDate'>) => void;
  onCancel: () => void;
}

export const LeaveForm = ({ onSubmit, onCancel }: LeaveFormProps) => {
  const [formData, setFormData] = useState({
    employeeId: 'EMP001',
    employeeName: 'Current User',
    leaveType: '',
    startDate: '',
    endDate: '',
    days: 0,
    reason: '',
    status: 'Pending' as const
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.leaveType || !formData.startDate || !formData.endDate || !formData.reason) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    const start = new Date(formData.startDate);
    const end = new Date(formData.endDate);
    
    if (end < start) {
      toast({
        title: "Invalid Date Range",
        description: "End date cannot be before start date.",
        variant: "destructive",
      });
      return;
    }

    const timeDiff = end.getTime() - start.getTime();
    const days = Math.ceil(timeDiff / (1000 * 3600 * 24)) + 1;

    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      
      onSubmit({
        ...formData,
        days
      });
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your leave application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" onClick={onCancel} disabled={isSubmitting}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div>
            <CardTitle className="flex items-center">
              <Calendar className="h-5 w-5 mr-2 text-blue-600" />
              Apply for Leave
            </CardTitle>
            <CardDescription>
              Submit your leave application for approval
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="leaveType">Leave Type *</Label>
            <select
              id="leaveType"
              value={formData.leaveType}
              onChange={(e) => handleChange('leaveType', e.target.value)}
              className="w-full h-10 px-3 py-2 border border-input bg-background rounded-md text-sm"
              required
              disabled={isSubmitting}
            >
              <option value="">Select Leave Type</option>
              {leaveTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="startDate">Start Date *</Label>
              <Input
                id="startDate"
                type="date"
                value={formData.startDate}
                onChange={(e) => handleChange('startDate', e.target.value)}
                required
                disabled={isSubmitting}
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
            <div>
              <Label htmlFor="endDate">End Date *</Label>
              <Input
                id="endDate"
                type="date"
                value={formData.endDate}
                onChange={(e) => handleChange('endDate', e.target.value)}
                required
                disabled={isSubmitting}
                min={formData.startDate || new Date().toISOString().split('T')[0]}
              />
            </div>
          </div>

          <div>
            <Label htmlFor="reason">Reason for Leave *</Label>
            <Textarea
              id="reason"
              value={formData.reason}
              onChange={(e) => handleChange('reason', e.target.value)}
              placeholder="Please provide reason for your leave"
              rows={4}
              required
              disabled={isSubmitting}
            />
          </div>

          <div className="flex space-x-4">
            <Button type="submit" className="flex-1" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </Button>
            <Button type="button" variant="outline" onClick={onCancel} disabled={isSubmitting}>
              Cancel
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};
