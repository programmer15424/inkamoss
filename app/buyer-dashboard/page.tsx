'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Leaf, Package, Heart, User, LogOut, Eye, Download, MapPin, Phone } from 'lucide-react'

const buyerOrders = [
  {
    id: 1,
    orderNumber: 'INK-2024-001234',
    date: '2024-01-18',
    total: 124.48,
    status: 'Entregado',
    items: 2,
    image: '/musgo-marino.jpg'
  },
  {
    id: 2,
    orderNumber: 'INK-2024-001200',
    date: '2024-01-10',
    total: 89.99,
    status: 'En tránsito',
    items: 1,
    image: '/musgo-premium.jpg'
  },
  {
    id: 3,
    orderNumber: 'INK-2024-001150',
    date: '2024-01-01',
    total: 45.99,
    status: 'Entregado',
    items: 1,
    image: '/musgo-decorativo.jpg'
  }
]

const wishlistItems = [
  {
    id: 1,
    name: 'Musgo Premium XL',
    price: 89.99,
    collector: 'Musgo Masters',
    rating: 4.9,
    image: '/musgo-premium-xl.jpg'
  },
  {
    id: 2,
    name: 'Musgo Acuático',
    price: 28.00,
    collector: 'Agua Viva',
    rating: 4.5,
    image: '/musgo-acuatico.jpg'
  }
]

export default function BuyerDashboardPage() {
  const [activeTab, setActiveTab] = useState('orders')

  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-64 border-r border-border bg-card p-6 hidden lg:block">
        <div className="flex items-center gap-2 mb-8">
          <Leaf className="h-6 w-6 text-primary" />
          <span className="text-2xl font-bold text-foreground">Inka Moss</span>
        </div>

        <nav className="space-y-2 mb-8">
          {[
            { id: 'orders', label: 'Mis Pedidos', icon: Package },
            { id: 'wishlist', label: 'Lista de Deseos', icon: Heart },
            { id: 'profile', label: 'Mi Perfil', icon: User }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
                activeTab === item.id
                  ? 'bg-primary text-primary-foreground'
                  : 'text-foreground hover:bg-secondary/50'
              }`}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <button className="w-full flex items-center gap-3 px-4 py-2 rounded-lg text-destructive hover:bg-destructive/10 transition-colors">
          <LogOut className="h-5 w-5" />
          <span>Cerrar Sesión</span>
        </button>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-64">
        {/* Header */}
        <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Mi Cuenta</h1>
              <p className="text-muted-foreground">Juan Pérez López</p>
            </div>
            <Link href="/catalog" className="text-primary hover:text-primary/80 font-medium text-sm">
              Volver al Catálogo
            </Link>
          </div>
        </header>

        <div className="p-6">
          {/* Orders Tab */}
          {activeTab === 'orders' && (
            <div>
              <h2 className="text-xl font-bold text-foreground mb-6">Mis Pedidos</h2>
              <div className="space-y-4">
                {buyerOrders.map((order) => (
                  <div key={order.id} className="rounded-lg border border-border bg-card p-6 hover:border-primary/50 transition-all">
                    <div className="flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
                      <div className="flex gap-4">
                        <img
                          src={order.image || "/placeholder.svg"}
                          alt="Producto"
                          className="h-20 w-20 object-cover rounded-lg bg-secondary/10"
                        />
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Número de Pedido</p>
                          <p className="font-semibold text-foreground mb-2">{order.orderNumber}</p>
                          <p className="text-xs text-muted-foreground">{order.date} • {order.items} item(s)</p>
                          <p className="text-primary font-semibold mt-2">S/ {order.total.toFixed(2)}</p>
                        </div>
                      </div>

                      <div className="flex flex-col gap-2 md:items-end">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold w-fit ${
                          order.status === 'Entregado'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-blue-100 text-blue-700'
                        }`}>
                          {order.status}
                        </span>
                        <button className="flex items-center gap-2 text-primary hover:text-primary/80 text-sm font-medium">
                          <Eye className="h-4 w-4" />
                          Ver Detalles
                        </button>
                        {order.status === 'Entregado' && (
                          <button className="flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm font-medium">
                            <Download className="h-4 w-4" />
                            Descargar Recibo
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Wishlist Tab */}
          {activeTab === 'wishlist' && (
            <div>
              <h2 className="text-xl font-bold text-foreground mb-6">Mi Lista de Deseos</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {wishlistItems.map((item) => (
                  <div key={item.id} className="rounded-lg border border-border bg-card overflow-hidden hover:border-primary/50 transition-all">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold text-foreground mb-1">{item.name}</h3>
                      <p className="text-xs text-muted-foreground mb-3">{item.collector}</p>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-primary font-bold text-lg">S/ {item.price.toFixed(2)}</span>
                        <span className="text-sm text-muted-foreground">⭐ {item.rating}</span>
                      </div>
                      <div className="flex gap-2">
                        <button className="flex-1 bg-primary text-primary-foreground py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors text-sm">
                          Agregar al Carrito
                        </button>
                        <button className="px-4 py-2 border border-border text-destructive hover:bg-destructive/10 rounded-lg transition-colors">
                          ✕
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Profile Tab */}
          {activeTab === 'profile' && (
            <div className="max-w-2xl">
              <h2 className="text-xl font-bold text-foreground mb-6">Mi Información</h2>
              
              <div className="rounded-lg border border-border bg-card p-6 space-y-6">
                {/* Personal Info */}
                <div>
                  <h3 className="font-semibold text-foreground mb-4">Información Personal</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Nombre Completo</p>
                      <p className="font-medium text-foreground">Juan Pérez López</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Correo Electrónico</p>
                      <p className="font-medium text-foreground">juan@example.com</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Teléfono</p>
                      <p className="font-medium text-foreground flex items-center gap-2">
                        <Phone className="h-4 w-4" /> +51 999 000 000
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Miembro desde</p>
                      <p className="font-medium text-foreground">5 de Enero, 2024</p>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="pt-4 border-t border-border">
                  <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    Dirección de Envío
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Dirección</p>
                      <p className="font-medium text-foreground">Av. Principal 123, Apt. 4B</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Ciudad</p>
                        <p className="font-medium text-foreground">Lima</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Código Postal</p>
                        <p className="font-medium text-foreground">15001</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="pt-4 border-t border-border grid md:grid-cols-3 gap-4">
                  <div className="bg-secondary/10 p-4 rounded-lg text-center">
                    <p className="text-2xl font-bold text-primary mb-1">3</p>
                    <p className="text-xs text-muted-foreground">Pedidos Completados</p>
                  </div>
                  <div className="bg-secondary/10 p-4 rounded-lg text-center">
                    <p className="text-2xl font-bold text-primary mb-1">S/ 260.46</p>
                    <p className="text-xs text-muted-foreground">Total Gastado</p>
                  </div>
                  <div className="bg-secondary/10 p-4 rounded-lg text-center">
                    <p className="text-2xl font-bold text-primary mb-1">2</p>
                    <p className="text-xs text-muted-foreground">En Mi Lista de Deseos</p>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-border flex gap-3">
                  <button className="flex-1 px-4 py-2 border border-border text-foreground rounded-lg hover:bg-secondary/50 transition-colors font-medium">
                    Editar Información
                  </button>
                  <button className="flex-1 px-4 py-2 border border-border text-destructive rounded-lg hover:bg-destructive/10 transition-colors font-medium">
                    Cambiar Contraseña
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
