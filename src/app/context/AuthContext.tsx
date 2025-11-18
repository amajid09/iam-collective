// /* eslint-disable */
// import React, { createContext, useContext, useState, ReactNode } from "react";

// type User = {
//   id: string;
//   name: string;
//   email: string;
//   token: string;
// };

// type AuthContextType = {
//   user: User | null;
//   isGuest: boolean;
//   login: (userData: User) => void;
//   logout: () => void;
//   continueAsGuest: () => void;
// };

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export function AuthProvider({ children }: { children: ReactNode }) {
//   const [user, setUser] = useState<User | null>(null);
//   const [isGuest, setIsGuest] = useState<boolean>(false);

//   // 🔒 Login as registered user
//   const login = (userData: User) => {
//     setUser(userData);
//     setIsGuest(false);
//     localStorage.setItem("auth_user", JSON.stringify(userData));
//   };

//   // 👋 Logout
//   const logout = () => {
//     setUser(null);
//     setIsGuest(false);
//     localStorage.removeItem("auth_user");
//   };

//   // 👤 Guest Mode (no backend account)
//   const continueAsGuest = () => {
//     setUser(null);
//     setIsGuest(true);
//   };

//   return (
//     <AuthContext.Provider value={{ user, isGuest, login, logout, continueAsGuest }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export function useAuth() {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error("useAuth must be used inside AuthProvider");
//   }
//   return context;
// }

import React, { createContext, useContext, useState, ReactNode } from 'react';

type User = {
  email: string;
  fullName?: string; // optional, can include more fields later
};

type AuthContextType = {
  isAuthenticated: boolean;
  isGuest: boolean;
  user?: User;
  login: (user: User) => void;
  logout: () => void;
  continueAsGuest: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isGuest, setIsGuest] = useState(false);
  const [user, setUser] = useState<User | undefined>(undefined);

  const login = (user: User) => {
    setUser(user);
    setIsAuthenticated(true);
    setIsGuest(false);
  };

  const logout = () => {
    setUser(undefined);
    setIsAuthenticated(false);
    setIsGuest(false);
  };

  const continueAsGuest = () => {
    setUser(undefined);
    setIsGuest(true);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, isGuest, user, login, logout, continueAsGuest }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};
