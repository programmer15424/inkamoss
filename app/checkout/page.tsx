'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Leaf, ArrowLeft, Check } from 'lucide-react'

export default function CheckoutPage() {
  const [step, setStep] = useState('shipping')
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    cardName: '',
    cardNumber: '',
    cardExpiry: '',
    cardCVC: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step === 'shipping') {
      setStep('payment')
    } else {
      setStep('confirmation')
    }
  }

  const subtotal = 124.48
  const shipping = 0
  const total = subtotal + shipping

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur sticky top-0 z-40">
        <div className="mx-auto max-w-7xl px-4 flex h-16 items-center">
          <Link href="/cart" className="flex items-center gap-2">
            <ArrowLeft className="h-5 w-5 text-primary" />
            <Leaf className="h-6 w-6 text-primary" />
            <span className="text-2xl font-bold text-foreground">Inka Moss</span>
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-12">
        {step === 'confirmation' ? (
          // Confirmation Screen
          <div className="max-w-2xl mx-auto text-center py-12">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-6">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">¡Pedido Confirmado!</h1>
            <p className="text-xl text-muted-foreground mb-8">Tu compra ha sido procesada exitosamente</p>
            
            <div className="rounded-lg border border-border bg-card p-8 mb-8 text-left">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-foreground mb-4">Detalles del Pedido</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p><span className="text-foreground">Número de Pedido:</span> #INK-2024-001234</p>
                    <p><span className="text-foreground">Fecha:</span> 18 de Noviembre de 2024</p>
                    <p><span className="text-foreground">Total:</span> <span className="text-primary font-semibold">S/ {total.toFixed(2)}</span></p>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-4">Envío a</h3>
                  <p className="text-sm text-muted-foreground">{formData.fullName}</p>
                  <p className="text-sm text-muted-foreground">{formData.address}</p>
                  <p className="text-sm text-muted-foreground">{formData.city}, {formData.zipCode}</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-muted-foreground mb-6">Te enviaremos un email con más detalles y el seguimiento de tu pedido</p>
              <Link href="/catalog" className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Volver al Catálogo
              </Link>
            </div>
          </div>
        ) : (
          // Checkout Form
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {/* Steps */}
              <div className="flex gap-4 mb-8">
                {['shipping', 'payment'].map((s) => (
                  <div
                    key={s}
                    className={`flex-1 rounded-lg p-4 text-center transition-all ${
                      s === step
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary/20 text-foreground'
                    }`}
                  >
                    <p className="font-semibold capitalize">{s === 'shipping' ? 'Envío' : 'Pago'}</p>
                  </div>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="rounded-lg border border-border bg-card p-8">
                {step === 'shipping' ? (
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-6">Dirección de Envío</h2>
                    <div className="space-y-5">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Nombre Completo</label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="Juan Pérez"
                          className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                          required
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">Correo Electrónico</label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="juan@example.com"
                            className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">Teléfono</label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+51 999 000 000"
                            className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Dirección</label>
                        <input
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          placeholder="Calle y número"
                          className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                          required
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">Ciudad</label>
                          <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            placeholder="Lima"
                            className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">Código Postal</label>
                          <input
                            type="text"
                            name="zipCode"
                            value={formData.zipCode}
                            onChange={handleChange}
                            placeholder="15001"
                            className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-6">Información de Pago</h2>
                    <div className="space-y-5">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Nombre en la Tarjeta</label>
                        <input
                          type="text"
                          name="cardName"
                          value={formData.cardName}
                          onChange={handleChange}
                          placeholder="Juan Pérez"
                          className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Número de Tarjeta</label>
                        <input
                          type="text"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleChange}
                          placeholder="1234 5678 9012 3456"
                          className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                          required
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">Fecha de Vencimiento</label>
                          <input
                            type="text"
                            name="cardExpiry"
                            value={formData.cardExpiry}
                            onChange={handleChange}
                            placeholder="MM/YY"
                            className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">CVC</label>
                          <input
                            type="text"
                            name="cardCVC"
                            value={formData.cardCVC}
                            onChange={handleChange}
                            placeholder="123"
                            className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex gap-4 mt-8">
                  {step === 'payment' && (
                    <button
                      type="button"
                      onClick={() => setStep('shipping')}
                      className="flex-1 border border-border text-foreground py-3 rounded-lg font-semibold hover:bg-secondary/50 transition-colors"
                    >
                      Atrás
                    </button>
                  )}
                  <button
                    type="submit"
                    className="flex-1 bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                  >
                    {step === 'shipping' ? 'Continuar al Pago' : 'Confirmar Pedido'}
                  </button>
                </div>
              </form>
            </div>

            {/* Order Summary */}
            <div className="rounded-lg border border-border bg-card p-6 h-fit sticky top-20">
              <h2 className="text-xl font-bold text-foreground mb-6">Resumen</h2>
              <div className="space-y-3 mb-6 pb-6 border-b border-border">
                <div className="text-sm">
                  <p className="text-muted-foreground">2x Musgo Marino Premium</p>
                  <p className="text-primary font-semibold">S/ 91.98</p>
                </div>
                <div className="text-sm">
                  <p className="text-muted-foreground">1x Musgo Terrestre Fresco</p>
                  <p className="text-primary font-semibold">S/ 32.50</p>
                </div>
              </div>

              <div className="space-y-2 mb-6 pb-6 border-b border-border text-sm">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal</span>
                  <span>S/ {subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Envío</span>
                  <span className="text-green-600 font-semibold">GRATIS</span>
                </div>
              </div>

              <div className="flex justify-between">
                <span className="font-semibold text-foreground">Total</span>
                <span className="text-2xl font-bold text-primary">S/ {total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
