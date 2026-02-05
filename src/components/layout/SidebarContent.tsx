'use client';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useTheme } from '@mui/material/styles';
import { APP_ROUTES } from '@/lib/routes';



export function SidebarContent({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();
  const theme = useTheme();

  return (
    <Box px={3} py={4}>
      <Typography
        fontWeight={800}
        fontSize={20}
        letterSpacing={0.5}
        color="primary"
        mb={3}
      >
        Herencia
      </Typography>

      <Divider sx={{ mb: 2 }} />

      <List disablePadding>
        {APP_ROUTES.map((item) => {
          const active = pathname === item.href;

          return (
            <ListItemButton
              key={item.href}
              LinkComponent={Link}
              href={item.href}
              onClick={onNavigate}
              selected={active}
              sx={{
                mb: 0.5,
                borderRadius: 2,
                px: 1.5,
                '&.Mui-selected': {
                  bgcolor: theme.palette.primary.main + '10',
                  '&:hover': {
                    bgcolor: theme.palette.primary.main + '18',
                  },
                },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 34,
                  color: active ? 'primary.main' : 'text.secondary',
                }}
              >
                {item.icon}
              </ListItemIcon>

              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontSize: 14,
                  fontWeight: active ? 600 : 500,
                }}
              />
            </ListItemButton>
          );
        })}
      </List>
    </Box>
  );
}
