'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { useAuth } from '@/modules/auth/auth.context';
import { AppShell } from '@/components/layout/AppShell';
import { Box, CircularProgress } from '@mui/material';

function ProtectedContent({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.replace('/login');
    }
  }, [loading, user, router]);

  if (loading || !user) {
    return (
      <Box
        minHeight="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <CircularProgress />
      </Box>
    );
  }

  return <AppShell>{children}</AppShell>;
}

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProtectedContent>{children}</ProtectedContent>
  );
}
