import { Navigate } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
  adminOnly?: boolean;
}

// Mock auth - in production this checks Supabase session
const mockUser = { role: 'installer' };
const mockAdmin = { role: 'admin' };

export default function ProtectedRoute({ children, adminOnly }: Props) {
  const currentUser = adminOnly ? mockAdmin : mockUser;
  if (!currentUser) return <Navigate to="/login" replace />;
  if (adminOnly && currentUser.role !== 'admin') return <Navigate to="/" replace />;
  return <>{children}</>;
}
