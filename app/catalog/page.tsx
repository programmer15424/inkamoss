'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Leaf, ShoppingCart, Filter, Search, Star } from 'lucide-react'

const products = [
  {
    id: 1,
    name: 'Musgo Marino Premium',
    price: 45.99,
    rating: 4.8,
    reviews: 24,
    image: '/musgo-natural-verde.jpg',
    collector: 'Colector del Valle',
    badge: 'Popular'
  },
  {
    id: 2,
    name: 'Musgo Terrestre Fresco',
    price: 32.50,
    rating: 4.6,
    reviews: 18,
    image: '/musgo-terrestre-natural.jpg',
    collector: 'Naturaleza Pura',
    badge: 'Nuevo'
  },
  {
    id: 3,
    name: 'Musgo Decorativo Mix',
    price: 52.00,
    rating: 5.0,
    reviews: 12,
    image: '/colecci-n-musgo-decorativo.jpg',
    collector: 'Eco Collect',
    badge: null
  },
  {
    id: 4,
    name: 'Musgo Suculenta',
    price: 38.75,
    rating: 4.7,
    reviews: 21,
    image: '/musgo-para-plantas-suculentas.jpg',
    collector: 'Verdes Amazónicos',
    badge: null
  },
  {
    id: 5,
    name: 'Musgo Premium XL',
    price: 89.99,
    rating: 4.9,
    reviews: 45,
    image: '/musgo-premium-calidad.jpg',
    collector: 'Musgo Masters',
    badge: 'Bestseller'
  },
  {
    id: 6,
    name: 'Musgo Acuático',
    price: 28.00,
    rating: 4.5,
    reviews: 8,
    image: '/musgo-acu-tico.jpg',
    collector: 'Agua Viva',
    badge: null
  }
]

export default function CatalogPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [priceFilter, setPriceFilter] = useState('all')
  const [sortBy, setSortBy] = useState('popular')

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur sticky top-0 z-40">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Leaf className="h-6 w-6 text-primary" />
              <span className="text-2xl font-bold text-foreground">Inka Moss</span>
            </Link>
            
            <div className="hidden md:flex gap-6">
              <Link href="/catalog" className="text-sm font-medium text-primary">Catálogo</Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Acerca de</Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Contacto</Link>
            </div>

            <div className="flex gap-4">
              <Link href="/cart" className="relative">
                <ShoppingCart className="h-6 w-6 text-foreground hover:text-primary transition-colors" />
                <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">0</span>
              </Link>
              <Link href="#" className="text-sm font-medium text-primary">Mi Cuenta</Link>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-12">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Catálogo de Musgo</h1>
          <p className="text-muted-foreground">Explora nuestra colección de musgo natural sostenible</p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col lg:flex-row gap-6 mb-12">
          {/* Filters Sidebar */}
          <div className="lg:w-64 space-y-6">
            {/* Search */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-3">Buscar</label>
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Buscar musgo..."
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-input bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
            </div>

            {/* Price Filter */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-3 flex items-center gap-2">
                <Filter className="h-4 w-4" /> Precio
              </label>
              <div className="space-y-2">
                {[
                  { value: 'all', label: 'Todos los precios' },
                  { value: '0-30', label: 'Menos de S/ 30' },
                  { value: '30-60', label: 'S/ 30 - S/ 60' },
                  { value: '60+', label: 'Más de S/ 60' }
                ].map((option) => (
                  <label key={option.value} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="price"
                      value={option.value}
                      checked={priceFilter === option.value}
                      onChange={(e) => setPriceFilter(e.target.value)}
                      className="accent-primary"
                    />
                    <span className="text-sm text-foreground">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Sort */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-3">Ordenar por</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                <option value="popular">Más Popular</option>
                <option value="newest">Más Nuevo</option>
                <option value="price-low">Menor Precio</option>
                <option value="price-high">Mayor Precio</option>
                <option value="rating">Mejor Calificación</option>
              </select>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <Link key={product.id} href={`/product/${product.id}`}>
                  <div className="group rounded-xl border border-border bg-card hover:border-primary/50 transition-all hover:shadow-md overflow-hidden">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden bg-secondary/10">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                      {product.badge && (
                        <div className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                          {product.badge}
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-1 line-clamp-2">
                        {product.name}
                      </h3>
                      <p className="text-xs text-muted-foreground mb-3">{product.collector}</p>

                      {/* Rating */}
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-3 w-3 ${i < Math.round(product.rating) ? 'fill-accent text-accent' : 'text-muted-foreground'}`}
                            />
                          ))}
                        </div>
                        <span className="text-xs text-muted-foreground">({product.reviews})</span>
                      </div>

                      {/* Price and Button */}
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-primary">S/ {product.price.toFixed(2)}</span>
                        <button className="bg-primary text-primary-foreground p-2 rounded-lg hover:bg-primary/90 transition-colors">
                          <ShoppingCart className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
