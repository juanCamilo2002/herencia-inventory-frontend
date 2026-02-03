export interface Product {
  id: string
  name: string
  wineType: 'RED' | 'WHITE' | 'ROSE'
  year: number
  presentation: string
  stock?: number
}