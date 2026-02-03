'use client'

import { useEffect, useState } from 'react'

import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CircularProgress from '@mui/material/CircularProgress'

import { ProductCard } from '@/components/ProductCard'
import { api } from '@/services/api'
import { Product } from '@/types/product'

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api.get('/products/with-stock')
      .then(res => setProducts(res.data))
      .finally(() => setLoading(false))
  }, [])

  return (
    <main style={{ padding: 24 }}>
      <Typography variant='h5' fontWeight={600} gutterBottom>
        Inventario
      </Typography>

      {loading ? (
        <CircularProgress />
      ) : (
        <Grid container spacing={2}>
          {products.map(product => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      )}
    </main>
  )
}
