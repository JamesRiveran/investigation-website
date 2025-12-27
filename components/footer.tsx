"use client"

import { motion } from "framer-motion"
import { Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="border-t bg-muted/30"
    >
      <div className="container px-6 lg:px-12 py-12 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* INFO */}
          <div className="space-y-4">
            <h3 className="font-semibold text-balance">
              Centro Internacional de Política Económica
            </h3>
            <img src="/logo.png" alt="UNA Logo" className="h-25 w-auto rounded-lg" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Universidad Nacional, Costa Rica
            </p>
          </div>

          {/* NAVEGACIÓN */}
          <div className="space-y-4">
            <h4 className="font-semibold">Navegación</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="/equipo" className="text-muted-foreground hover:text-foreground transition-colors">
                  Equipo de trabajo
                </a>
              </li>
              <li>
                <a href="/propuesta" className="text-muted-foreground hover:text-foreground transition-colors">
                  Propuesta de proyectos
                </a>
              </li>
            </ul>
          </div>

          {/* MAC */}
          <div className="space-y-4">
            <h4 className="font-semibold">Mecanismo de Análisis Cantonal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/mac/cantones/rio-cuarto"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Río Cuarto
                </a>
              </li>
              <li>
                <a
                  href="/mac/cantones/sarapiqui"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Sarapiquí
                </a>
              </li>
              <li>
                <a
                  href="/mac/cantones/pococi"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Pococí
                </a>
              </li>
            </ul>
          </div>

          {/* CONTACTO */}
          <div className="space-y-4">
            <h4 className="font-semibold">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Heredia, Costa Rica</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+506 2277-3000</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>info@cinpe.una.ac.cr</span>
              </li>
            </ul>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} James Rivera Núñez. Todos los derechos reservados.</p>
        </div>
      </div>
    </motion.footer>
  )
}
