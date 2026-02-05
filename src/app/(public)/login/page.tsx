'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import {
  Box,
  Button,
  TextField,
  Typography,
  Alert,
  CircularProgress,
  Stack,
  Card,
  Divider,
  useTheme,
  useMediaQuery,
} from '@mui/material';

import { useAuth } from '@/modules/auth/auth.context';

export default function LoginPage() {
  const { login, loading, user } = useAuth();
  const router = useRouter();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!loading && user) {
      router.replace('/');
    }
  }, [loading, user, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      await login(email, password);
    } catch {
      setError('Correo o contraseña incorrectos');
    }
  };

  if (loading || user) {
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

  return (
    <Box
      minHeight="100vh"
      display="flex"
      flexDirection={{ xs: 'column', md: 'row' }}
      bgcolor="background.default"
    >
      {/* Branding */}
      {!isMobile && (
        <Box
          flex={1}
          display="flex"
          alignItems="center"
          justifyContent="center"
          px={6}
          sx={{
            background: `linear-gradient(
              135deg,
              ${theme.palette.primary.main} 0%,
              #4a0a12 100%
            )`,
            color: 'white',
          }}
        >
          <Stack spacing={3} maxWidth={420}>
            <Typography
              variant="h3"
              fontWeight={800}
              letterSpacing={1}
            >
              Herencia
            </Typography>

            <Typography variant="h6" sx={{ opacity: 0.9 }}>
              Plataforma interna de gestión
            </Typography>

            <Typography variant="body2" sx={{ opacity: 0.75 }}>
              Inventario • Ventas • Reportes
            </Typography>
          </Stack>
        </Box>
      )}

      {/* Login */}
      <Box
        flex={1}
        display="flex"
        alignItems="center"
        justifyContent="center"
        px={2}
      >
        <Card
          elevation={0}
          sx={{
            width: '100%',
            maxWidth: 400,
            p: { xs: 3, md: 4 },
            borderRadius: 3,
            boxShadow: '0 20px 40px rgba(0,0,0,.08)',
          }}
        >
          <form onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <Box>
                <Typography
                  variant="h5"
                  fontWeight={700}
                  color="primary"
                >
                  Iniciar sesión
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                >
                  Accede a tu panel de administración
                </Typography>
              </Box>

              <Divider />

              {error && <Alert severity="error">{error}</Alert>}

              <TextField
                label="Correo electrónico"
                type="email"
                fullWidth
                required
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <TextField
                label="Contraseña"
                type="password"
                fullWidth
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <Button
                type="submit"
                size="large"
                fullWidth
                disabled={loading}
                sx={{
                  mt: 1,
                  bgcolor: 'secondary.main',
                  color: '#2A1A00',
                  fontWeight: 600,
                  '&:hover': {
                    bgcolor: 'secondary.dark',
                  },
                }}
              >
                {loading ? (
                  <CircularProgress size={22} color="inherit" />
                ) : (
                  'Ingresar'
                )}
              </Button>

              <Typography
                variant="caption"
                color="text.secondary"
                textAlign="center"
                sx={{ cursor: 'pointer' }}
              >
                ¿Olvidaste tu contraseña?
              </Typography>
            </Stack>
          </form>
        </Card>
      </Box>
    </Box>
  );
}
