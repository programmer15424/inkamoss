'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Leaf, BarChart3, Users, AlertCircle, Trash2, Check, X, LogOut } from 'lucide-react'

const pendingProducts = [
  {
    id: 1,
    name: 'Musgo Premium XL',
    collector: 'Musgo Masters',
    price: 89.99,
    date: '2024-01-15',
    status: 'pending'
  },
  {
    id: 2,
    name: 'Musgo Decorativo Mix',
    collector: 'Eco Collect',
    price: 52.00,
    date: '2024-01-14',
    status: 'pending'
  }
]

const allUsers = [
  { id: 1, name: 'Colector del Valle', type: 'Recolector', email: 'collector@example.com', joined: '2024-01-01', status: 'Activo' },
  { id: 2, name: 'Naturaleza Pura', type: 'Recolector', email: 'natura@example.com', joined: '2024-01-02', status: 'Activo' },
  { id: 3, name: 'Juan Pérez', type: 'Comprador', email: 'juan@example.com', joined: '2024-01-05', status: 'Activo' },
  { id: 4, name: 'María García', type: 'Comprador', email: 'maria@example.com', joined: '2024-01-08', status: 'Suspendido' }
]

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState('overview')

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
            { id: 'overview', label: 'Panel General', icon: BarChart3 },
            { id: 'products', label: 'Productos', icon: AlertCircle },
            { id: 'users', label: 'Usuarios', icon: Users }
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
          <h1 className="text-2xl font-bold text-foreground">Panel Administrativo</h1>
        </header>

        <div className="p-6">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {[
                  { title: 'Usuarios Totales', value: '1,234', change: '+12%', icon: Users },
                  { title: 'Productos Activos', value: '456', change: '+23%', icon: BarChart3 },
                  { title: 'Ventas Este Mes', value: 'S/ 45,800', change: '+34%', icon: BarChart3 },
                  { title: 'Pendientes de Revisión', value: '12', change: '−2', icon: AlertCircle }
                ].map((stat) => (
                  <div key={stat.title} className="rounded-lg border border-border bg-card p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-muted-foreground text-sm mb-2">{stat.title}</p>
                        <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                      </div>
                      <stat.icon className="h-8 w-8 text-primary" />
                    </div>
                    <p className="text-green-600 text-sm font-medium mt-4">{stat.change} vs. mes anterior</p>
                  </div>
                ))}
              </div>

              {/* Recent Activity */}
              <div className="rounded-lg border border-border bg-card p-6">
                <h2 className="text-xl font-bold text-foreground mb-4">Productos Pendientes de Revisión</h2>
                <div className="space-y-3">
                  {pendingProducts.map((product) => (
                    <div key={product.id} className="flex items-center justify-between p-4 rounded-lg bg-secondary/10 border border-border">
                      <div>
                        <p className="font-semibold text-foreground">{product.name}</p>
                        <p className="text-sm text-muted-foreground">{product.collector} • S/ {product.price.toFixed(2)}</p>
                      </div>
                      <div className="flex gap-2">
                        <button className="p-2 rounded-lg bg-green-100 text-green-700 hover:bg-green-200 transition-colors">
                          <Check className="h-5 w-5" />
                        </button>
                        <button className="p-2 rounded-lg bg-red-100 text-red-700 hover:bg-red-200 transition-colors">
                          <X className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Products Tab */}
          {activeTab === 'products' && (
            <div className="rounded-lg border border-border bg-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border bg-secondary/20">
                      <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Producto</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Recolector</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Precio</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Estado</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Acciones</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {pendingProducts.concat([
                      { id: 3, name: 'Musgo Marino Premium', collector: 'Colector del Valle', price: 45.99, date: '2024-01-10', status: 'approved' }
                    ]).map((product) => (
                      <tr key={product.id} className="hover:bg-secondary/10 transition-colors">
                        <td className="px-6 py-4 text-foreground font-medium">{product.name}</td>
                        <td className="px-6 py-4 text-foreground">{product.collector}</td>
                        <td className="px-6 py-4 text-primary font-semibold">S/ {product.price.toFixed(2)}</td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            product.status === 'pending'
                              ? 'bg-yellow-100 text-yellow-700'
                              : product.status === 'approved'
                              ? 'bg-green-100 text-green-700'
                              : 'bg-red-100 text-red-700'
                          }`}>
                            {product.status === 'pending' ? 'Pendiente' : product.status === 'approved' ? 'Aprobado' : 'Rechazado'}
                          </span>
                        </td>
                        <td className="px-6 py-4 flex gap-2">
                          {product.status === 'pending' && (
                            <>
                              <button className="p-2 hover:bg-secondary/50 rounded-lg transition-colors text-green-600">
                                <Check className="h-4 w-4" />
                              </button>
                              <button className="p-2 hover:bg-secondary/50 rounded-lg transition-colors text-destructive">
                                <X className="h-4 w-4" />
                              </button>
                            </>
                          )}
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
          )}

          {/* Users Tab */}
          {activeTab === 'users' && (
            <div className="rounded-lg border border-border bg-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border bg-secondary/20">
                      <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Nombre</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Tipo</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Email</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Miembro desde</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Estado</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Acciones</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {allUsers.map((user) => (
                      <tr key={user.id} className="hover:bg-secondary/10 transition-colors">
                        <td className="px-6 py-4 text-foreground font-medium">{user.name}</td>
                        <td className="px-6 py-4 text-foreground text-sm">{user.type}</td>
                        <td className="px-6 py-4 text-muted-foreground text-sm">{user.email}</td>
                        <td className="px-6 py-4 text-foreground text-sm">{user.joined}</td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            user.status === 'Activo'
                              ? 'bg-green-100 text-green-700'
                              : 'bg-red-100 text-red-700'
                          }`}>
                            {user.status}
                          </span>
                        </td>
                        <td className="px-6 py-4">
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
          )}
        </div>
      </main>
    </div>
  )
}
