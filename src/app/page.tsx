'use client'

import { useEffect, useState } from 'react'
import { api } from '@/services/api'
import { Product } from '@/types/product'

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    api.get('/products/with-stock').then(res => {
      setProducts(res.data)
    })
  }, [])

  return (
    <main style={{ padding: 24 }}>
      <h1>Herencia Inventory</h1>

      <pre>{JSON.stringify(products, null, 2)}</pre>
    </main>
  )
}
