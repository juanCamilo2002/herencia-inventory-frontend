'use client';

import { useState } from 'react';

import Box from '@mui/material/Box';

import { Sidebar } from './Sidebar';
import { Topbar } from './Topbar';


export const AppShell = ({ children }: { children: React.ReactNode }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <Box display="flex" minHeight="100vh" bgcolor="background.default">
      {/* Sidebar */}
      <Sidebar
        mobileOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />

      <Box flex={1} display="flex" flexDirection="column">

        <Topbar onMenuClick={() => setMobileOpen(true)} />

        <Box
          component="main"
          flex={1}
          px={{ xs: 2, md: 4 }}
          py={{ xs: 2, md: 3 }}
          sx={{
            maxWidth: '1400px',
            width: '100%',
            mx: 'auto',
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}