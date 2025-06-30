
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ChevronRight, 
  ChevronDown, 
  User, 
  Users, 
  Building, 
  Crown,
  UserCheck,
  Briefcase
} from 'lucide-react';

interface HierarchyNode {
  id: string;
  name: string;
  position: string;
  department: string;
  level: number;
  employeeCount: number;
  children?: HierarchyNode[];
  isExpanded?: boolean;
}

const mockHierarchyData: HierarchyNode = {
  id: '1',
  name: 'Chief Minister',
  position: 'Chief Minister of Goa',
  department: 'Government of Goa',
  level: 1,
  employeeCount: 50000,
  children: [
    {
      id: '2',
      name: 'Deputy Chief Minister',
      position: 'Deputy Chief Minister',
      department: 'Government of Goa',
      level: 2,
      employeeCount: 25000,
      children: [
        {
          id: '3',
          name: 'Chief Secretary',
          position: 'Chief Secretary',
          department: 'General Administration',
          level: 3,
          employeeCount: 12000,
          children: [
            {
              id: '4',
              name: 'Additional Chief Secretary',
              position: 'Additional Chief Secretary',
              department: 'Finance',
              level: 4,
              employeeCount: 3000,
            },
            {
              id: '5',
              name: 'Principal Secretary',
              position: 'Principal Secretary',
              department: 'Health & Family Welfare',
              level: 4,
              employeeCount: 2500,
            }
          ]
        },
        {
          id: '6',
          name: 'Director General of Police',
          position: 'DGP',
          department: 'Home Department',
          level: 3,
          employeeCount: 8000,
          children: [
            {
              id: '7',
              name: 'Inspector General',
              position: 'IG (Operations)',
              department: 'Police',
              level: 4,
              employeeCount: 2000,
            }
          ]
        }
      ]
    },
    {
      id: '8',
      name: 'Speaker',
      position: 'Speaker of Legislative Assembly',
      department: 'Legislative Assembly',
      level: 2,
      employeeCount: 500,
    }
  ]
};

const getLevelColor = (level: number) => {
  const colors = [
    'bg-purple-100 text-purple-800',
    'bg-blue-100 text-blue-800',
    'bg-green-100 text-green-800',
    'bg-orange-100 text-orange-800',
    'bg-red-100 text-red-800'
  ];
  return colors[level - 1] || 'bg-gray-100 text-gray-800';
};

const getLevelIcon = (level: number) => {
  switch (level) {
    case 1: return Crown;
    case 2: return Building;
    case 3: return Briefcase;
    case 4: return UserCheck;
    default: return User;
  }
};

interface HierarchyNodeProps {
  node: HierarchyNode;
  onToggle: (nodeId: string) => void;
  expandedNodes: Set<string>;
}

const HierarchyNodeComponent: React.FC<HierarchyNodeProps> = ({ 
  node, 
  onToggle, 
  expandedNodes 
}) => {
  const isExpanded = expandedNodes.has(node.id);
  const hasChildren = node.children && node.children.length > 0;
  const LevelIcon = getLevelIcon(node.level);

  return (
    <div className="w-full">
      <Card className="mb-4 shadow-sm hover:shadow-md transition-shadow">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 flex-1">
              <div className="flex items-center space-x-2">
                <LevelIcon className="h-5 w-5 text-blue-600" />
                <Badge variant="outline" className={getLevelColor(node.level)}>
                  Level {node.level}
                </Badge>
              </div>
              
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-gray-900">{node.name}</h3>
                <p className="text-sm text-blue-600 font-medium">{node.position}</p>
                <p className="text-xs text-gray-600">{node.department}</p>
              </div>
              
              <div className="text-right">
                <div className="flex items-center space-x-1 text-sm text-gray-600">
                  <Users className="h-4 w-4" />
                  <span>{node.employeeCount.toLocaleString()}</span>
                </div>
                <p className="text-xs text-gray-500">Employees</p>
              </div>
            </div>
            
            {hasChildren && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onToggle(node.id)}
                className="ml-4 p-2"
              >
                {isExpanded ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronRight className="h-4 w-4" />
                )}
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
      
      {hasChildren && isExpanded && (
        <div className="ml-8 border-l-2 border-gray-200 pl-6">
          {node.children!.map((child) => (
            <HierarchyNodeComponent
              key={child.id}
              node={child}
              onToggle={onToggle}
              expandedNodes={expandedNodes}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export const HierarchyView: React.FC = () => {
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set(['1']));

  const handleToggle = (nodeId: string) => {
    setExpandedNodes(prev => {
      const newSet = new Set(prev);
      if (newSet.has(nodeId)) {
        newSet.delete(nodeId);
      } else {
        newSet.add(nodeId);
      }
      return newSet;
    });
  };

  const expandAll = () => {
    const getAllNodeIds = (node: HierarchyNode): string[] => {
      const ids = [node.id];
      if (node.children) {
        node.children.forEach(child => {
          ids.push(...getAllNodeIds(child));
        });
      }
      return ids;
    };
    
    setExpandedNodes(new Set(getAllNodeIds(mockHierarchyData)));
  };

  const collapseAll = () => {
    setExpandedNodes(new Set(['1']));
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl font-bold text-gray-900">
                Organizational Hierarchy
              </CardTitle>
              <p className="text-gray-600 mt-1">
                Government of Goa - Administrative Structure
              </p>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" onClick={expandAll}>
                Expand All
              </Button>
              <Button variant="outline" size="sm" onClick={collapseAll}>
                Collapse All
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="bg-gray-50 p-4 rounded-lg">
            <HierarchyNodeComponent
              node={mockHierarchyData}
              onToggle={handleToggle}
              expandedNodes={expandedNodes}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
