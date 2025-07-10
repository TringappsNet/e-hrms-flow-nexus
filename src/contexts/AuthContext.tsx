
import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'employee';
  employeeId?: string;
  department?: string;
  position?: string;
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
  isAdmin: boolean;
  isEmployee: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

// Mock users for demonstration
const mockUsers: Record<string, User & { password: string }> = {
  'admin@gov.goa': {
    id: 'admin-1',
    name: 'System Administrator',
    email: 'admin@gov.goa',
    role: 'admin',
    password: 'admin123',
    department: 'IT Department',
    position: 'System Administrator'
  },
  'employee@gov.goa': {
    id: 'emp-001',
    name: 'John Doe',
    email: 'employee@gov.goa',
    role: 'employee',
    employeeId: 'EMP001',
    password: 'emp123',
    department: 'Finance Department',
    position: 'Accountant'
  },
  'jane.smith@gov.goa': {
    id: 'emp-002',
    name: 'Jane Smith',
    email: 'jane.smith@gov.goa',
    role: 'employee',
    employeeId: 'EMP002',
    password: 'emp123',
    department: 'HR Department',
    position: 'HR Officer'
  }
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Check for stored user session
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    const mockUser = mockUsers[email];
    if (mockUser && mockUser.password === password) {
      const { password: _, ...userWithoutPassword } = mockUser;
      setUser(userWithoutPassword);
      localStorage.setItem('user', JSON.stringify(userWithoutPassword));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const value: AuthContextType = {
    user,
    login,
    logout,
    isAuthenticated: !!user,
    isAdmin: user?.role === 'admin',
    isEmployee: user?.role === 'employee'
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
