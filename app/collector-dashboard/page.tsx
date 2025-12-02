'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Leaf, Plus, Edit2, Trash2, Eye, TrendingUp, Package, Users, LogOut } from 'lucide-react'

const collectorProducts = [
  {
    id: 1,
    name: 'Musgo Marino Premium',
    price: 45.99,
    stock: 24,
    sales: 156,
    rating: 4.8,
    status: 'Activo',
    date: '2024-01-15'
  },
  {
    id: 2,
    name: 'Musgo Terrestre Fresco',
    price: 32.50,
    stock: 8,
    sales: 89,
    rating: 4.6,
    status: 'Activo',
    date: '2024-01-10'
  },
  {
    id: 3,
    name: 'Musgo Decorativo Mix',
    price: 52.00,
    stock: 0,
    sales: 45,
    rating: 5.0,
    status: 'Agotado',
    date: '2024-01-05'
  }
]

export default function CollectorDashboardPage() {
  const [activeTab, setActiveTab] = useState('products')

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
            { id: 'products', label: 'Mis Productos', icon: Package },
            { id: 'analytics', label: 'Analíticas', icon: TrendingUp },
            { id: 'profile', label: 'Perfil', icon: Users }
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
              <h1 className="text-2xl font-bold text-foreground">Panel del Recolector</h1>
              <p className="text-muted-foreground">Colector del Valle</p>
            </div>
            <Link
              href="/collector-dashboard/new-product"
              className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              <Plus className="h-5 w-5" />
              Publicar Producto
            </Link>
          </div>
        </header>

        <div className="p-6">
          {/* Products Tab */}
          {activeTab === 'products' && (
            <div>
              <div className="rounded-lg border border-border bg-card overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border bg-secondary/20">
                        <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Producto</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Precio</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Stock</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Ventas</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Calificación</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Estado</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Acciones</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {collectorProducts.map((product) => (
                        <tr key={product.id} className="hover:bg-secondary/10 transition-colors">
                          <td className="px-6 py-4 text-foreground font-medium">{product.name}</td>
                          <td className="px-6 py-4 text-primary font-semibold">S/ {product.price.toFixed(2)}</td>
                          <td className="px-6 py-4 text-foreground">{product.stock} unid.</td>
                          <td className="px-6 py-4 text-foreground">{product.sales}</td>
                          <td className="px-6 py-4 text-foreground">⭐ {product.rating}</td>
                          <td className="px-6 py-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              product.status === 'Activo'
                                ? 'bg-green-100 text-green-700'
                                : 'bg-red-100 text-red-700'
                            }`}>
                              {product.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 flex gap-2">
                            <button className="p-2 hover:bg-secondary/50 rounded-lg transition-colors text-foreground">
                              <Eye className="h-4 w-4" />
                            </button>
                            <button className="p-2 hover:bg-secondary/50 rounded-lg transition-colors text-primary">
                              <Edit2 className="h-4 w-4" />
                            </button>
                            <button className="p-2 hover:bg-destructive/10 rounded-lg transition-colors text-destructive">
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Analytics Tab */}
          {activeTab === 'analytics' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {[
                { title: 'Ingresos Totales', value: 'S/ 8,245.00', change: '+12.5%', icon: TrendingUp },
                { title: 'Productos Activos', value: '2', change: '−1', icon: Package },
                { title: 'Ventas Este Mes', value: '290', change: '+45%', icon: Users },
                { title: 'Calificación Promedio', value: '4.8', change: '+0.2', icon: Leaf }
              ].map((stat) => (
                <div key={stat.title} className="rounded-lg border border-border bg-card p-6">
                  <p className="text-muted-foreground text-sm mb-2">{stat.title}</p>
                  <p className="text-3xl font-bold text-foreground mb-2">{stat.value}</p>
                  <p className="text-green-600 text-sm font-medium">{stat.change} vs. mes anterior</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
