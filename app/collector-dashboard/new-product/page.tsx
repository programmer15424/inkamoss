'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Leaf, ArrowLeft, Upload } from 'lucide-react'

export default function NewProductPage() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    stock: '',
    category: 'marino',
    humidity: '',
    origin: '',
    image: null
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Nuevo producto:', formData)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur px-6 py-4">
        <div className="flex items-center gap-4">
          <Link href="/collector-dashboard" className="flex items-center gap-2 text-primary hover:text-primary/80">
            <ArrowLeft className="h-5 w-5" />
            Volver
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-foreground">Publicar Nuevo Producto</h1>
            <p className="text-muted-foreground">Completa los detalles de tu musgo</p>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-12">
        <form onSubmit={handleSubmit} className="rounded-lg border border-border bg-card p-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Image Upload */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-3">Foto del Producto</label>
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
                  <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Arrastra o haz clic para cargar</p>
                  <p className="text-xs text-muted-foreground">PNG, JPG hasta 5MB</p>
                </div>
              </div>

              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Nombre del Producto</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ej: Musgo Marino Premium"
                  className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  required
                />
              </div>

              {/* Category */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Categoría</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                  <option value="marino">Musgo Marino</option>
                  <option value="terrestre">Musgo Terrestre</option>
                  <option value="acuatico">Musgo Acuático</option>
                  <option value="decorativo">Musgo Decorativo</option>
                </select>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Price */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Precio (S/)</label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  placeholder="45.99"
                  step="0.01"
                  className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  required
                />
              </div>

              {/* Stock */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Stock (unidades)</label>
                <input
                  type="number"
                  name="stock"
                  value={formData.stock}
                  onChange={handleChange}
                  placeholder="24"
                  className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  required
                />
              </div>

              {/* Origin */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Origen</label>
                <input
                  type="text"
                  name="origin"
                  value={formData.origin}
                  onChange={handleChange}
                  placeholder="Ej: Costa Peruana del Sur"
                  className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  required
                />
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mt-8">
            <label className="block text-sm font-medium text-foreground mb-2">Descripción</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe las características del musgo..."
              rows={6}
              className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              required
            />
          </div>

          {/* Humidity */}
          <div className="mt-6">
            <label className="block text-sm font-medium text-foreground mb-2">Nivel de Humedad (%)</label>
            <input
              type="number"
              name="humidity"
              value={formData.humidity}
              onChange={handleChange}
              placeholder="60-70"
              className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>

          {/* Submit Buttons */}
          <div className="flex gap-4 mt-8">
            <button
              type="submit"
              className="flex-1 bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Publicar Producto
            </button>
            <Link
              href="/collector-dashboard"
              className="flex-1 border border-border text-foreground py-3 rounded-lg font-semibold hover:bg-secondary/50 transition-colors text-center"
            >
              Cancelar
            </Link>
          </div>
        </form>
      </main>
    </div>
  )
}
