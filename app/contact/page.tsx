'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Mail, Phone, MapPin, Send, Leaf } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Leaf className="w-6 h-6 text-primary" />
            <span className="font-bold text-lg text-foreground">Inka Moss</span>
          </Link>
          <nav className="flex items-center gap-6">
            <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition">Inicio</Link>
            <Link href="/catalog" className="text-sm text-muted-foreground hover:text-foreground transition">Catálogo</Link>
            <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition">Acerca de</Link>
            <Link href="/contact" className="text-sm font-medium text-primary">Contacto</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Contacto</h1>
          <p className="text-muted-foreground max-w-md mx-auto">
            ¿Tienes preguntas o sugerencias? Nos encantaría escucharte. Estamos aquí para ayudarte.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Contact Info Cards */}
          <div className="bg-card border border-border rounded-lg p-6 text-center">
            <div className="flex justify-center mb-4">
              <Mail className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Correo Electrónico</h3>
            <p className="text-sm text-muted-foreground mb-3">Nos responden en 24 horas</p>
            <a href="mailto:contacto@inkamoss.com" className="text-primary hover:text-primary/80 font-medium">
              contacto@inkamoss.com
            </a>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 text-center">
            <div className="flex justify-center mb-4">
              <Phone className="w-8 h-8 text-accent" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Teléfono</h3>
            <p className="text-sm text-muted-foreground mb-3">Atención de lunes a viernes</p>
            <a href="tel:+51912345678" className="text-primary hover:text-primary/80 font-medium">
              +51 (912) 345-678
            </a>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 text-center">
            <div className="flex justify-center mb-4">
              <MapPin className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Ubicación</h3>
            <p className="text-sm text-muted-foreground mb-3">Oficina Central</p>
            <p className="text-sm text-foreground font-medium">
              Lima, Perú
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Contact Form */}
          <div className="bg-card border border-border rounded-lg p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Envíanos tu mensaje</h2>

            {submitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-sm text-green-800 font-medium">
                  ¡Mensaje enviado exitosamente! Nos comunicaremos contigo pronto.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Tu nombre"
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="tu@email.com"
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Teléfono (Opcional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+51 9XXXXXXXX"
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Asunto
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Selecciona un asunto</option>
                  <option value="producto">Consulta sobre productos</option>
                  <option value="pedido">Problema con mi pedido</option>
                  <option value="devolucion">Devoluciones y cambios</option>
                  <option value="publicar">Deseo publicar musgo</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Cuéntanos cómo podemos ayudarte..."
                  rows={5}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-medium hover:bg-primary/90 transition flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Enviar Mensaje
              </button>
            </form>
          </div>

          {/* Additional Info */}
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Preguntas Frecuentes</h3>
              <div className="space-y-4">
                <details className="group">
                  <summary className="flex cursor-pointer items-center justify-between font-medium text-foreground py-2">
                    <span>¿Cuál es el tiempo de envío?</span>
                    <span className="transition group-open:rotate-180">▼</span>
                  </summary>
                  <p className="text-sm text-muted-foreground py-3 pl-2 border-l-2 border-primary">
                    El envío a nivel nacional toma de 3 a 5 días hábiles. Ofrecemos envío gratis en compras mayores a S/ 100.
                  </p>
                </details>

                <details className="group">
                  <summary className="flex cursor-pointer items-center justify-between font-medium text-foreground py-2">
                    <span>¿Aceptan devoluciones?</span>
                    <span className="transition group-open:rotate-180">▼</span>
                  </summary>
                  <p className="text-sm text-muted-foreground py-3 pl-2 border-l-2 border-primary">
                    Sí, aceptamos devoluciones dentro de 14 días de la compra. El producto debe estar en buen estado.
                  </p>
                </details>

                <details className="group">
                  <summary className="flex cursor-pointer items-center justify-between font-medium text-foreground py-2">
                    <span>¿Cómo me registro como recolector?</span>
                    <span className="transition group-open:rotate-180">▼</span>
                  </summary>
                  <p className="text-sm text-muted-foreground py-3 pl-2 border-l-2 border-primary">
                    Regístrate en nuestro sitio seleccionando el rol "Recolector". Nuestro equipo verificará tu información.
                  </p>
                </details>

                <details className="group">
                  <summary className="flex cursor-pointer items-center justify-between font-medium text-foreground py-2">
                    <span>¿Qué métodos de pago aceptan?</span>
                    <span className="transition group-open:rotate-180">▼</span>
                  </summary>
                  <p className="text-sm text-muted-foreground py-3 pl-2 border-l-2 border-primary">
                    Aceptamos tarjetas de crédito/débito, transferencias bancarias y billeteras digitales.
                  </p>
                </details>
              </div>
            </div>

            <div className="bg-accent/10 border border-accent/20 rounded-lg p-8">
              <h3 className="text-lg font-bold text-foreground mb-3">Horario de Atención</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p><span className="font-medium text-foreground">Lunes a Viernes:</span> 9:00 AM - 6:00 PM</p>
                <p><span className="font-medium text-foreground">Sábado:</span> 10:00 AM - 3:00 PM</p>
                <p><span className="font-medium text-foreground">Domingo:</span> Cerrado</p>
                <p className="pt-2 text-xs italic">Respuestas por correo: hasta 24 horas</p>
              </div>
            </div>
          </div>
        </div>

        {/* Redes Sociales */}
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 text-center">
          <h3 className="text-xl font-bold text-foreground mb-4">Síguenos en Redes Sociales</h3>
          <p className="text-muted-foreground mb-6">
            Mantente actualizado con nuestras últimas publicaciones y promociones
          </p>
          <div className="flex justify-center gap-4">
            <a href="#" className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition">
              <span className="text-lg font-bold">f</span>
            </a>
            <a href="#" className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition">
              <span className="text-lg font-bold">𝕏</span>
            </a>
            <a href="#" className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition">
              <span className="text-lg font-bold">📷</span>
            </a>
            <a href="#" className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition">
              <span className="text-lg font-bold">in</span>
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-16">
        <div className="container mx-auto px-4 py-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Inka Moss. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
