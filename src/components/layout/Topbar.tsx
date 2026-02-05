'use client';

import { useState } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { useTheme, useMediaQuery } from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';

import { useAuth } from '@/modules/auth/auth.context';
import { usePageTitle } from '@/lib/usePageTitle';

type Props = {
  onMenuClick: () => void;
};

export const Topbar = ({ onMenuClick }: Props) => {
  const { user, logout } = useAuth();
  const pageTitle = usePageTitle();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      height={64}
      px={{ xs: 1.5, md: 4 }}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      bgcolor="background.paper"
      borderBottom="1px solid"
      borderColor="divider"
    >
      <Stack direction="row" alignItems="center" spacing={1}>
        {isMobile && (
          <IconButton onClick={onMenuClick}>
            <MenuIcon />
          </IconButton>
        )}
        <Typography fontWeight={600} fontSize={15}>
          {pageTitle}
        </Typography>
      </Stack>

      <IconButton onClick={(e) => setAnchorEl(e.currentTarget)}>
        <Avatar
          sx={{
            width: 32,
            height: 32,
            bgcolor: 'secondary.main',
            color: 'secondary.contrastText',
            fontSize: 14,
            fontWeight: 600,
          }}
        >
          {user?.email?.[0]?.toUpperCase()}
        </Avatar>
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Box px={2} py={1}>
          <Typography fontSize={13} fontWeight={600}>
            {user?.email}
          </Typography>
        </Box>

        <Divider />

        <MenuItem onClick={logout}>Cerrar sesión</MenuItem>
      </Menu>
    </Box>
  );
};
