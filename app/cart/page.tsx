'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Leaf, ArrowLeft, Trash2, Minus, Plus } from 'lucide-react'

const cartItems = [
  {
    id: 1,
    name: 'Musgo Marino Premium',
    price: 45.99,
    quantity: 2,
    image: '/musgo-marino.jpg'
  },
  {
    id: 2,
    name: 'Musgo Terrestre Fresco',
    price: 32.50,
    quantity: 1,
    image: '/musgo-terrestre.jpg'
  }
]

export default function CartPage() {
  const [items, setItems] = useState(cartItems)

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal > 100 ? 0 : 15
  const total = subtotal + shipping

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return
    setItems(items.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ))
  }

  const removeItem = (id: number) => {
    setItems(items.filter(item => item.id !== id))
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur sticky top-0 z-40">
        <div className="mx-auto max-w-7xl px-4 flex h-16 items-center">
          <Link href="/catalog" className="flex items-center gap-2">
            <ArrowLeft className="h-5 w-5 text-primary" />
            <Leaf className="h-6 w-6 text-primary" />
            <span className="text-2xl font-bold text-foreground">Inka Moss</span>
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-12">
        <h1 className="text-4xl font-bold text-foreground mb-12">Mi Carrito</h1>

        {items.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-2xl text-foreground mb-4">Tu carrito está vacío</p>
            <Link href="/catalog" className="inline-block bg-primary text-primary-foreground px-6 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Continuar Comprando
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Items */}
            <div className="lg:col-span-2">
              <div className="rounded-lg border border-border bg-card overflow-hidden">
                <div className="space-y-1 divide-y divide-border">
                  {items.map((item) => (
                    <div key={item.id} className="p-6 flex gap-4 hover:bg-secondary/5 transition-colors">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="h-24 w-24 object-cover rounded-lg bg-secondary/10"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1">{item.name}</h3>
                        <p className="text-primary font-semibold mb-4">S/ {item.price.toFixed(2)}</p>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center border border-border rounded-lg">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="px-3 py-1 text-foreground hover:bg-secondary/50 transition-colors"
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="px-4 py-1 text-foreground font-medium">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="px-3 py-1 text-foreground hover:bg-secondary/50 transition-colors"
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-destructive hover:bg-destructive/10 p-2 rounded-lg transition-colors"
                          >
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-primary">S/ {(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="rounded-lg border border-border bg-card p-6 h-fit sticky top-20">
              <h2 className="text-xl font-bold text-foreground mb-6">Resumen de Compra</h2>
              
              <div className="space-y-4 mb-6 pb-6 border-b border-border">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal</span>
                  <span>S/ {subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Envío</span>
                  <span className={shipping === 0 ? 'text-green-600 font-semibold' : ''}>
                    {shipping === 0 ? 'GRATIS' : `S/ ${shipping.toFixed(2)}`}
                  </span>
                </div>
              </div>

              <div className="flex justify-between mb-6">
                <span className="font-semibold text-foreground">Total</span>
                <span className="text-2xl font-bold text-primary">S/ {total.toFixed(2)}</span>
              </div>

              <Link
                href="/checkout"
                className="w-full block text-center bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors mb-3"
              >
                Proceder al Pago
              </Link>

              <Link
                href="/catalog"
                className="w-full block text-center border border-border text-foreground py-3 rounded-lg font-semibold hover:bg-secondary/50 transition-colors"
              >
                Continuar Comprando
              </Link>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
