'use client'

import Link from 'next/link'
import { Leaf, Sprout, Heart, Award, Users, Globe, ArrowRight } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <nav className="mx-auto max-w-7xl flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2">
            <Leaf className="h-6 w-6 text-primary" />
            <span className="text-2xl font-bold text-foreground">Inka Moss</span>
          </Link>
          
          <div className="flex gap-6">
            <Link href="/catalog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Catálogo
            </Link>
            <Link href="/about" className="text-sm font-medium text-primary">
              Acerca de
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contacto
            </Link>
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

      <main>
        {/* Hero Section */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:py-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6 text-balance">
              Acerca de Inka Moss
            </h1>
            <p className="text-xl text-muted-foreground text-pretty">
              Una plataforma dedicada a conectar recolectores responsables con compradores conscientes del medio ambiente
            </p>
          </div>

          {/* Mission, Vision, Values */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: 'Nuestra Misión',
                description: 'Promover el comercio sostenible del musgo natural, conectando directamente a recolectores responsables con compradores conscientes.'
              },
              {
                icon: Globe,
                title: 'Nuestra Visión',
                description: 'Ser la plataforma líder en Latinoamérica para el comercio ético y sostenible de recursos naturales.'
              },
              {
                icon: Sprout,
                title: 'Nuestros Valores',
                description: 'Sostenibilidad, transparencia, responsabilidad ambiental y apoyo a las comunidades locales.'
              }
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-border bg-card p-8">
                <item.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Story Section */}
        <section className="bg-secondary/20 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8 text-center">
              Nuestra Historia
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-foreground leading-relaxed mb-4">
                  Inka Moss nació de la necesidad de crear un puente entre los recolectores de musgo sostenible de las comunidades andinas y compradores conscientes del mundo que buscan productos naturales y ecológicos.
                </p>
                <p className="text-foreground leading-relaxed mb-4">
                  Nuestro fundador, tras visitar múltiples comunidades en la sierra peruana, reconoció el potencial del musgo natural como producto sostenible y la oportunidad de crear empleo digno mientras se conserva el medio ambiente.
                </p>
                <p className="text-foreground leading-relaxed">
                  Hoy, Inka Moss conecta a más de 50 recolectores verificados con miles de clientes satisfechos en toda Latinoamérica, generando impacto positivo en las comunidades y el planeta.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl h-96 flex items-center justify-center">
                <Leaf className="h-32 w-32 text-primary/40" />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:py-24">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">
            ¿Por Qué Elegir Inka Moss?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Users,
                title: 'Recolectores Verificados',
                description: 'Todos nuestros recolectores son verificados y certificados para garantizar prácticas sostenibles y responsables.'
              },
              {
                icon: Award,
                title: 'Calidad Garantizada',
                description: 'Cada producto pasa por rigurosos controles de calidad antes de llegar a tu mano.'
              },
              {
                icon: Leaf,
                title: 'Impacto Ambiental Positivo',
                description: 'Apoya prácticas de recolección sostenible que preservan los ecosistemas naturales.'
              },
              {
                icon: Heart,
                title: 'Apoyo a Comunidades',
                description: 'Tu compra genera ingresos directos y sostenibles para las comunidades locales.'
              }
            ].map((item) => (
              <div key={item.title} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-primary/5 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { value: '50+', label: 'Recolectores Verificados' },
                { value: '500+', label: 'Productos Activos' },
                { value: '5,000+', label: 'Clientes Satisfechos' },
                { value: '100%', label: 'Sostenible' }
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-4xl font-bold text-primary mb-2">{stat.value}</p>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:py-24">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">
            Nuestro Equipo
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Carlos Mendoza',
                role: 'Fundador y CEO',
                bio: 'Apasionado por la sostenibilidad y el emprendimiento social.'
              },
              {
                name: 'Elena Quispe',
                role: 'Directora de Operaciones',
                bio: 'Con 10 años de experiencia en comercio justo y sostenible.'
              },
              {
                name: 'David Rojas',
                role: 'Director de Relaciones Comunitarias',
                bio: 'Conectando con comunidades y garantizando prácticas éticas.'
              }
            ].map((member) => (
              <div key={member.name} className="rounded-lg border border-border bg-card p-6 text-center">
                <div className="h-24 w-24 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">{member.name}</h3>
                <p className="text-sm text-primary font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mx-auto max-w-4xl px-4 py-16 sm:py-24 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Únete a Nuestra Misión Sostenible
          </h2>
          <p className="text-xl text-muted-foreground mb-8 text-pretty">
            Sé parte del cambio. Compra responsablemente o conviértete en recolector verificado.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/catalog"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Explorar Productos <ArrowRight className="h-5 w-5" />
            </Link>
            <Link 
              href="/register?role=collector"
              className="inline-flex items-center justify-center gap-2 border border-border bg-background text-foreground px-8 py-3 rounded-lg font-semibold hover:bg-secondary/50 transition-colors"
            >
              Convertirme en Recolector
            </Link>
          </div>
        </section>
      </main>

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
