'use client';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  return (
    <Box
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgcolor="background.default"
      px={2}
    >
      <Stack
        spacing={3}
        alignItems="center"
        textAlign="center"
        maxWidth={420}
      >
        {/* Code */}
        <Typography
          variant="h2"
          fontWeight={800}
          color="primary"
        >
          404
        </Typography>

        {/* Message */}
        <Typography
          variant="h5"
          fontWeight={600}
        >
          Página no encontrada
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
        >
          La página que intentas visitar no existe o fue movida.
        </Typography>

        {/* Actions */}
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={() => router.replace('/')}
          >
            Ir al dashboard
          </Button>

          <Button
            variant="outlined"
            color="primary"
            size="large"
            onClick={() => router.back()}
          >
            Volver atrás
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}
