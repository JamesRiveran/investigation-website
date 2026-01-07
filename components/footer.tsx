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
      <div className="container mx-auto px-6 lg:px-12 py-12 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5 justify-center">
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

          {/* ACERCA DEL PROYECTO */}
          <div className="space-y-4">
            <h4 className="font-semibold">Acerca del Proyecto</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/acerca" className="text-muted-foreground hover:text-foreground transition-colors">
                  Acerca del proyecto
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

          {/* INVESTIGACIÓN */}
          <div className="space-y-4">
            <h4 className="font-semibold">Investigación</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/investigacion"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Investigación General
                </a>
              </li>
              <li>
                <a
                  href="/mac/cantones/perfil"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Módulo I - Perfil
                </a>
              </li>
              <li>
                <a
                  href="/indices/icc"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Módulo II - ICC
                </a>
              </li>
              <li>
                <a
                  href="/indices/icn"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Módulo III - ICN
                </a>
              </li>
            </ul>
          </div>

          {/* REPOSITORIO DIGITAL */}
          <div className="space-y-4">
            <h4 className="font-semibold">Repositorio Digital</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/repositorio-digital"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Carpetas
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
