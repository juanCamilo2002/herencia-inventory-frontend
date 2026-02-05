import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';

export type AppRoute = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

export const APP_ROUTES: AppRoute[] = [
  {
    label: 'Dashboard',
    href: '/',
    icon: <DashboardOutlinedIcon fontSize="small" />,
  },
  {
    label: 'Inventario',
    href: '/inventory',
    icon: <Inventory2OutlinedIcon fontSize="small" />,
  },
  {
    label: 'Analytics',
    href: '/analytics',
    icon: <BarChartOutlinedIcon fontSize="small" />,
  },
];
