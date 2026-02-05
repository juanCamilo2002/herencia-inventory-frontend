'use client';

import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import { useTheme, useMediaQuery } from '@mui/material';

import { SidebarContent } from './SidebarContent';

type Props = {
  mobileOpen: boolean;
  onClose: () => void;
};

export function Sidebar({ mobileOpen, onClose }: Props) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const drawerWidth = 260;

  if (isMobile) {
    return (
      <Drawer
        open={mobileOpen}
        onClose={onClose}
        PaperProps={{ sx: { width: drawerWidth } }}
      >
        <SidebarContent onNavigate={onClose} />
      </Drawer>
    );
  }

  return (
    <Box
      width={drawerWidth}
      display={{ xs: 'none', md: 'flex' }}
      flexDirection="column"
      bgcolor="background.paper"
      borderRight="1px solid"
      borderColor="divider"
    >
      <SidebarContent />
    </Box>
  );
}
