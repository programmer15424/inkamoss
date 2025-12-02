'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Leaf, ShoppingCart, Star, LeafIcon, Droplet, Heart, Share2, ChevronLeft, Truck, Shield, Clock } from 'lucide-react'

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)

  const product = {
    id: params.id,
    name: 'Musgo Marino Premium',
    price: 45.99,
    rating: 4.8,
    reviews: 24,
    image: '/musgo-marino-premium.jpg',
    collector: 'Colector del Valle',
    description: 'Musgo marino premium de la más alta calidad, recolectado de forma sostenible. Perfecto para decoración, terrariums y plantas de interior.',
    specifications: {
      origin: 'Costa Peruana del Sur',
      weight: '500g',
      humidity: '60-70%',
      preparation: 'Fresco y limpio',
      shelf_life: '30 días'
    },
    features: [
      'Recolectado responsablemente',
      '100% natural sin tratamientos químicos',
      'Apto para todas las plantas',
      'Retiene humedad perfectamente',
      'Textura suave y elástica'
    ]
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur sticky top-0 z-40">
        <div className="mx-auto max-w-7xl px-4 flex h-16 items-center justify-between">
          <Link href="/catalog" className="flex items-center gap-2">
            <ChevronLeft className="h-5 w-5" />
            <Leaf className="h-6 w-6 text-primary" />
            <span className="text-2xl font-bold text-foreground">Inka Moss</span>
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Images */}
          <div>
            <div className="rounded-xl overflow-hidden border border-border bg-secondary/10 h-96 md:h-[500px] flex items-center justify-center">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div>
            {/* Title */}
            <h1 className="text-4xl font-bold text-foreground mb-4">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-border">
              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${i < Math.round(product.rating) ? 'fill-accent text-accent' : 'text-muted-foreground'}`}
                  />
                ))}
              </div>
              <span className="text-foreground font-medium">{product.rating}</span>
              <Link href="#reviews" className="text-primary hover:text-primary/80">({product.reviews} opiniones)</Link>
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="text-4xl font-bold text-primary mb-2">S/ {product.price.toFixed(2)}</div>
              <p className="text-muted-foreground">Precio unitario por {product.specifications.weight}</p>
            </div>

            {/* Collector Info */}
            <div className="mb-6 p-4 rounded-lg bg-secondary/20 border border-border">
              <p className="text-sm text-muted-foreground mb-2">Vendedor Verificado</p>
              <p className="font-semibold text-foreground">{product.collector}</p>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-foreground mb-3">Cantidad</label>
              <div className="flex items-center border border-border rounded-lg w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 text-foreground hover:bg-secondary/50 transition-colors"
                >
                  −
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-12 text-center border-x border-border bg-background text-foreground focus:outline-none"
                  min="1"
                />
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 text-foreground hover:bg-secondary/50 transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mb-8">
              <button className="flex-1 bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
                <ShoppingCart className="h-5 w-5" />
                Agregar al Carrito
              </button>
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={`px-6 py-3 rounded-lg font-semibold transition-colors border ${
                  isWishlisted
                    ? 'bg-accent text-accent-foreground border-accent'
                    : 'bg-background border-border text-foreground hover:border-primary'
                }`}
              >
                <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-current' : ''}`} />
              </button>
              <button className="px-6 py-3 rounded-lg font-semibold border border-border text-foreground hover:border-primary transition-colors">
                <Share2 className="h-5 w-5" />
              </button>
            </div>

            {/* Delivery Info */}
            <div className="space-y-3 p-4 rounded-lg bg-secondary/10 border border-border">
              <div className="flex items-start gap-3">
                <Truck className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground">Envío disponible</p>
                  <p className="text-sm text-muted-foreground">2-5 días hábiles a todo el país</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground">Garantía de calidad</p>
                  <p className="text-sm text-muted-foreground">Reembolso de 30 días garantizado</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground">Frescura garantizada</p>
                  <p className="text-sm text-muted-foreground">Hasta 30 días de vida útil</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Details Section */}
        <div className="mt-16 space-y-12">
          {/* Description */}
          <div className="pb-12 border-b border-border">
            <h2 className="text-2xl font-bold text-foreground mb-4">Descripción</h2>
            <p className="text-muted-foreground leading-relaxed max-w-3xl">
              {product.description}
            </p>
          </div>

          {/* Specifications */}
          <div className="pb-12 border-b border-border">
            <h2 className="text-2xl font-bold text-foreground mb-4">Especificaciones</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between">
                  <span className="text-muted-foreground capitalize">{key.replace('_', ' ')}</span>
                  <span className="font-medium text-foreground">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Características</h2>
            <ul className="space-y-3">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <LeafIcon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}
