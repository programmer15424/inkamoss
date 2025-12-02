'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Leaf, ShoppingBag, Users, TrendingUp, ArrowRight, Sprout } from 'lucide-react'

const navLinks = [
  { href: '/catalog', label: 'Catálogo' },
  { href: '/about', label: 'Acerca de' },
  { href: '/contact', label: 'Contacto' }
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-secondary/10">
      {/* Header/Navbar */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <nav className="mx-auto max-w-7xl flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Leaf className="h-6 w-6 text-primary" />
            <span className="text-2xl font-bold text-foreground">Inka Moss</span>
          </div>
          
          <div className="hidden gap-8 md:flex">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex gap-4">
            <Link 
              href="/login"
              className="rounded-lg px-4 py-2 text-sm font-medium text-primary hover:bg-secondary transition-colors"
            >
              Iniciar Sesión
            </Link>
            <Link 
              href="/register"
              className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Registrarse
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight mb-6 text-balance">
              Musgo Natural Sostenible para tu Hogar
            </h1>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              Inka Moss conecta recolectores responsables con compradores conscientes. Apoye la sostenibilidad mientras embelesa su espacio con naturaleza.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/catalog"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
              >
                Explorar Catálogo <ArrowRight className="h-4 w-4" />
              </Link>
              <Link 
                href="/register?role=collector"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-6 py-3 text-foreground font-medium hover:bg-secondary transition-colors"
              >
                Ser Recolector <Sprout className="h-4 w-4" />
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative w-full h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-10 left-10 h-20 w-20 bg-primary/30 rounded-full blur-xl"></div>
                <div className="absolute bottom-10 right-10 h-32 w-32 bg-accent/30 rounded-full blur-2xl"></div>
              </div>
              <div className="relative z-10 text-center">
                <Leaf className="h-32 w-32 text-primary/40 mx-auto mb-4" />
                <p className="text-muted-foreground font-medium">Musgo Natural Premium</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-secondary/20 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">¿Cómo Funciona Inka Moss?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Un ciclo virtuoso que beneficia a recolectores, compradores y el planeta
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: 'Recolectores Verificados',
                description: 'Recolectores responsables que aseguran prácticas sostenibles'
              },
              {
                icon: ShoppingBag,
                title: 'Compras Seguras',
                description: 'Transacciones protegidas con garantía de calidad'
              },
              {
                icon: TrendingUp,
                title: 'Crecimiento Sostenible',
                description: 'Apoyo directo a comunidades y conservación ambiental'
              }
            ].map((feature) => (
              <div key={feature.title} className="rounded-xl border border-border bg-card p-6 hover:border-primary/50 transition-colors">
                <feature.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Leaf className="h-5 w-5 text-primary" />
                <span className="font-semibold text-foreground">Inka Moss</span>
              </div>
              <p className="text-sm text-muted-foreground">Comercio sostenible para un planeta mejor</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Producto</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/catalog" className="hover:text-foreground">Catálogo</Link></li>
                <li><Link href="/about" className="hover:text-foreground">Acerca de</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-foreground">Términos</Link></li>
                <li><Link href="#" className="hover:text-foreground">Privacidad</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Contacto</h4>
              <p className="text-sm text-muted-foreground">info@inkamoss.com</p>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 Inka Moss. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
