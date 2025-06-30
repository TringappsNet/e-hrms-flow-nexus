
import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  ChevronRight, 
  ChevronDown, 
  User, 
  Users, 
  Building, 
  Crown,
  UserCheck,
  Briefcase,
  Search,
  X
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
              children: [
                {
                  id: '5',
                  name: 'Joint Secretary',
                  position: 'Joint Secretary',
                  department: 'Finance',
                  level: 5,
                  employeeCount: 800,
                  children: [
                    {
                      id: '6',
                      name: 'Deputy Secretary',
                      position: 'Deputy Secretary',
                      department: 'Budget Division',
                      level: 6,
                      employeeCount: 200,
                      children: [
                        {
                          id: '7',
                          name: 'Under Secretary',
                          position: 'Under Secretary',
                          department: 'Budget Division',
                          level: 7,
                          employeeCount: 50,
                          children: [
                            {
                              id: '8',
                              name: 'Section Officer',
                              position: 'Section Officer',
                              department: 'Budget Planning',
                              level: 8,
                              employeeCount: 15,
                              children: [
                                {
                                  id: '9',
                                  name: 'Assistant Section Officer',
                                  position: 'Assistant Section Officer',
                                  department: 'Budget Planning',
                                  level: 9,
                                  employeeCount: 8,
                                  children: [
                                    {
                                      id: '10',
                                      name: 'Senior Clerk',
                                      position: 'Senior Clerk',
                                      department: 'Budget Planning',
                                      level: 10,
                                      employeeCount: 4,
                                      children: [
                                        {
                                          id: '11',
                                          name: 'Junior Clerk',
                                          position: 'Junior Clerk',
                                          department: 'Budget Planning',
                                          level: 11,
                                          employeeCount: 2,
                                          children: [
                                            {
                                              id: '12',
                                              name: 'Data Entry Operator',
                                              position: 'Data Entry Operator',
                                              department: 'Budget Planning',
                                              level: 12,
                                              employeeCount: 1,
                                              children: [
                                                {
                                                  id: '13',
                                                  name: 'Assistant Data Entry',
                                                  position: 'Assistant Data Entry',
                                                  department: 'Budget Planning',
                                                  level: 13,
                                                  employeeCount: 1,
                                                  children: [
                                                    {
                                                      id: '14',
                                                      name: 'Trainee',
                                                      position: 'Trainee Officer',
                                                      department: 'Budget Planning',
                                                      level: 14,
                                                      employeeCount: 1,
                                                      children: [
                                                        {
                                                          id: '15',
                                                          name: 'Intern',
                                                          position: 'Management Intern',
                                                          department: 'Budget Planning',
                                                          level: 15,
                                                          employeeCount: 1,
                                                          children: [
                                                            {
                                                              id: '16',
                                                              name: 'Junior Intern',
                                                              position: 'Junior Management Intern',
                                                              department: 'Budget Planning',
                                                              level: 16,
                                                              employeeCount: 1,
                                                              children: [
                                                                {
                                                                  id: '17',
                                                                  name: 'Assistant Intern',
                                                                  position: 'Assistant Management Intern',
                                                                  department: 'Budget Planning',
                                                                  level: 17,
                                                                  employeeCount: 1,
                                                                  children: [
                                                                    {
                                                                      id: '18',
                                                                      name: 'Associate Intern',
                                                                      position: 'Associate Management Intern',
                                                                      department: 'Budget Planning',
                                                                      level: 18,
                                                                      employeeCount: 1,
                                                                      children: [
                                                                        {
                                                                          id: '19',
                                                                          name: 'Trainee Associate',
                                                                          position: 'Trainee Associate Intern',
                                                                          department: 'Budget Planning',
                                                                          level: 19,
                                                                          employeeCount: 1,
                                                                          children: [
                                                                            {
                                                                              id: '20',
                                                                              name: 'Junior Associate',
                                                                              position: 'Junior Associate Intern',
                                                                              department: 'Budget Planning',
                                                                              level: 20,
                                                                              employeeCount: 1,
                                                                            }
                                                                          ]
                                                                        }
                                                                      ]
                                                                    }
                                                                  ]
                                                                }
                                                              ]
                                                            }
                                                          ]
                                                        }
                                                      ]
                                                    }
                                                  ]
                                                }
                                              ]
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: '21',
              name: 'Principal Secretary',
              position: 'Principal Secretary',
              department: 'Health & Family Welfare',
              level: 4,
              employeeCount: 2500,
              children: [
                {
                  id: '22',
                  name: 'Director of Health Services',
                  position: 'Director of Health Services',
                  department: 'Health & Family Welfare',
                  level: 5,
                  employeeCount: 1200,
                }
              ]
            }
          ]
        },
        {
          id: '23',
          name: 'Director General of Police',
          position: 'DGP',
          department: 'Home Department',
          level: 3,
          employeeCount: 8000,
          children: [
            {
              id: '24',
              name: 'Inspector General',
              position: 'IG (Operations)',
              department: 'Police',
              level: 4,
              employeeCount: 2000,
              children: [
                {
                  id: '25',
                  name: 'Deputy Inspector General',
                  position: 'DIG (Crime)',
                  department: 'Police',
                  level: 5,
                  employeeCount: 500,
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: '26',
      name: 'Speaker',
      position: 'Speaker of Legislative Assembly',
      department: 'Legislative Assembly',
      level: 2,
      employeeCount: 500,
      children: [
        {
          id: '27',
          name: 'Secretary General',
          position: 'Secretary General',
          department: 'Legislative Assembly',
          level: 3,
          employeeCount: 200,
        }
      ]
    }
  ]
};

const getLevelColor = (level: number) => {
  const colors = [
    'bg-purple-100 text-purple-800',
    'bg-blue-100 text-blue-800',
    'bg-green-100 text-green-800',
    'bg-orange-100 text-orange-800',
    'bg-red-100 text-red-800',
    'bg-pink-100 text-pink-800',
    'bg-indigo-100 text-indigo-800',
    'bg-teal-100 text-teal-800',
    'bg-yellow-100 text-yellow-800',
    'bg-cyan-100 text-cyan-800',
    'bg-lime-100 text-lime-800',
    'bg-emerald-100 text-emerald-800',
    'bg-violet-100 text-violet-800',
    'bg-fuchsia-100 text-fuchsia-800',
    'bg-rose-100 text-rose-800',
    'bg-sky-100 text-sky-800',
    'bg-amber-100 text-amber-800',
    'bg-slate-100 text-slate-800',
    'bg-zinc-100 text-zinc-800',
    'bg-neutral-100 text-neutral-800'
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
  searchTerm: string;
}

const HierarchyNodeComponent: React.FC<HierarchyNodeProps> = ({ 
  node, 
  onToggle, 
  expandedNodes,
  searchTerm 
}) => {
  const isExpanded = expandedNodes.has(node.id);
  const hasChildren = node.children && node.children.length > 0;
  const LevelIcon = getLevelIcon(node.level);

  // Check if this node or any of its children match the search
  const matchesSearch = (n: HierarchyNode, term: string): boolean => {
    if (!term) return true;
    const lowerTerm = term.toLowerCase();
    const nodeMatches = n.name.toLowerCase().includes(lowerTerm) || 
                       n.position.toLowerCase().includes(lowerTerm) ||
                       n.department.toLowerCase().includes(lowerTerm);
    
    if (nodeMatches) return true;
    
    return n.children?.some(child => matchesSearch(child, term)) || false;
  };

  const shouldShow = matchesSearch(node, searchTerm);
  
  if (!shouldShow) return null;

  return (
    <div className="w-full">
      <Card className="mb-2 shadow-sm hover:shadow-md transition-shadow">
        <CardContent className="p-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 flex-1">
              <div className="flex items-center space-x-2">
                <LevelIcon className="h-4 w-4 text-blue-600" />
                <Badge variant="outline" className={`text-xs ${getLevelColor(node.level)}`}>
                  L{node.level}
                </Badge>
              </div>
              
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-sm text-gray-900 truncate">{node.name}</h3>
                <p className="text-xs text-blue-600 font-medium truncate">{node.position}</p>
                <p className="text-xs text-gray-600 truncate">{node.department}</p>
              </div>
              
              <div className="text-right flex-shrink-0">
                <div className="flex items-center space-x-1 text-xs text-gray-600">
                  <Users className="h-3 w-3" />
                  <span>{node.employeeCount.toLocaleString()}</span>
                </div>
              </div>
            </div>
            
            {hasChildren && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onToggle(node.id)}
                className="ml-2 p-1 h-6 w-6"
              >
                {isExpanded ? (
                  <ChevronDown className="h-3 w-3" />
                ) : (
                  <ChevronRight className="h-3 w-3" />
                )}
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
      
      {hasChildren && isExpanded && (
        <div className="ml-4 border-l-2 border-gray-200 pl-4">
          {node.children!.map((child) => (
            <HierarchyNodeComponent
              key={child.id}
              node={child}
              onToggle={onToggle}
              expandedNodes={expandedNodes}
              searchTerm={searchTerm}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export const HierarchyView: React.FC = () => {
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set(['1']));
  const [searchTerm, setSearchTerm] = useState('');

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

  const getAllNodeIds = (node: HierarchyNode): string[] => {
    const ids = [node.id];
    if (node.children) {
      node.children.forEach(child => {
        ids.push(...getAllNodeIds(child));
      });
    }
    return ids;
  };

  const expandAll = () => {
    setExpandedNodes(new Set(getAllNodeIds(mockHierarchyData)));
  };

  const collapseAll = () => {
    setExpandedNodes(new Set(['1']));
  };

  const clearSearch = () => {
    setSearchTerm('');
  };

  // Auto-expand nodes that match search
  const expandMatchingNodes = useMemo(() => {
    if (!searchTerm) return;
    
    const findMatchingNodes = (node: HierarchyNode, term: string): string[] => {
      const matchingIds: string[] = [];
      const lowerTerm = term.toLowerCase();
      
      const checkNode = (n: HierarchyNode, ancestors: string[] = []): void => {
        const nodeMatches = n.name.toLowerCase().includes(lowerTerm) || 
                           n.position.toLowerCase().includes(lowerTerm) ||
                           n.department.toLowerCase().includes(lowerTerm);
        
        if (nodeMatches) {
          matchingIds.push(...ancestors, n.id);
        }
        
        if (n.children) {
          n.children.forEach(child => {
            checkNode(child, [...ancestors, n.id]);
          });
        }
      };
      
      checkNode(node);
      return matchingIds;
    };
    
    const matchingIds = findMatchingNodes(mockHierarchyData, searchTerm);
    if (matchingIds.length > 0) {
      setExpandedNodes(prev => new Set([...prev, ...matchingIds]));
    }
  }, [searchTerm]);

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-xl font-bold text-gray-900">
                Organizational Hierarchy
              </CardTitle>
              <p className="text-sm text-gray-600 mt-1">
                Government of Goa - Administrative Structure (20 Levels)
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
          
          <div className="flex items-center space-x-2 mt-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search by name, position, or department..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-10 text-sm"
              />
              {searchTerm && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearSearch}
                  className="absolute right-1 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0"
                >
                  <X className="h-3 w-3" />
                </Button>
              )}
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="pt-0">
          <div className="bg-gray-50 p-4 rounded-lg max-h-[70vh] overflow-y-auto">
            <HierarchyNodeComponent
              node={mockHierarchyData}
              onToggle={handleToggle}
              expandedNodes={expandedNodes}
              searchTerm={searchTerm}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
