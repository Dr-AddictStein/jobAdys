'use client';

import { useAuth } from '@/context/AuthContext';

export function useUser() {
  const { user, loading } = useAuth();
  
  const isAuthenticated = !!user;
  
  return {
    user,
    loading,
    isAuthenticated,
    // Helper methods to access common user properties
    id: user?.id,
    email: user?.email,
    name: user?.name,
    role: user?.role?.toLowerCase(),
    isAdmin: user?.role?.toLowerCase() === 'admin',
    isSubmitter: user?.role?.toLowerCase() === 'submitter',
    isPerformer: user?.role?.toLowerCase() === 'performer',
  };
} 