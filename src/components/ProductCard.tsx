'use client'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Chip from '@mui/material/Chip'

import { Product } from '@/types/product'

interface Props {
  product: Product
}

export function ProductCard({ product }: Props) {
  const stockColor =
    product.stock === 0
      ? 'error'
      : product.stock && product.stock < 10
        ? 'warning'
        : 'success'

  return (
    <Card variant='outlined'>
      <CardContent>
        <Stack spacing={1}>
          <Typography fontWeight={600}>
            {product.name}
          </Typography>

          <Typography variant='body2' color='text.secondary'>
            {product.wineType} · {product.year} · {product.presentation}
          </Typography>

          <Chip
            label={`Stock: ${product.stock ?? 0}`}
            color={stockColor}
            size='small'
          />
        </Stack>
      </CardContent>
    </Card>
  )
}