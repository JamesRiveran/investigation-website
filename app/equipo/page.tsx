"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import Image from "next/image"

const teamMembers = [
  {
    name: "Randall Arce Alvarado, PhD.",
    role: "Docente e investigador",
    profileUrl: "https://www.cinpe.una.ac.cr/index.php/es/programa-docente/profesores/randall-arce",
    department: "Economía Aplicada",
    email: "juan.perez@una.ac.cr",
    phone: "+506 2277-3000",
    expertise: ["Política Económica", "Desarrollo Regional", "Competitividad"],
    imageUrl: "/randall.png",
  },
  {
    name: "PhD. Suyen Alonso Ubieta",
    role: "Docente e investigadora",
    profileUrl: "https://www.cinpe.una.ac.cr/index.php/es/programa-docente/profesores/suyen-alonso",
    department: "Economía Aplicada",
    email: "juan.perez@una.ac.cr",
    phone: "+506 2277-3000",
    expertise: ["Política Económica", "Desarrollo Regional", "Competitividad"],
    imageUrl: "/suyen.png",
  },
]

export default function EquipoPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        <section className="relative overflow-hidden py-24 px-6 lg:px-12 bg-gradient-to-br from-[#852C2C] via-[#5B2D2D] to-[#B11D1D]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(177,29,29,0.15),transparent_50%)]" />
          <div className="container mx-auto max-w-6xl relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center text-white"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Equipo de Trabajo</h1>
              <p className="text-lg md:text-xl max-w-3xl mx-auto text-white/90">
                Investigadores del CINPE-UNA dedicados al fortalecimiento competitivo de las regiones Huetar Norte y
                Huetar Caribe
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 px-6 lg:px-12 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full group hover:shadow-2xl transition-all duration-500 border border-[#E5E5E5] bg-white overflow-hidden">
                    <CardContent className="p-0">
                      <div className="flex flex-col h-full">
                        {member.imageUrl && (
                          <div className="relative h-96 bg-gradient-to-br from-[#852C2C] to-[#5B2D2D] overflow-hidden">
                            <Image
                              src={member.imageUrl || "/placeholder.svg"}
                              alt={member.name}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#332222]/80 via-transparent to-transparent" />
                          </div>
                        )}
                        <div className="p-6 pb-4">
                          <h3 className="text-2xl font-bold text-[#332222] mb-2 leading-tight">{member.name}</h3>
                          <p className="text-[#B11D1D] font-semibold mb-1 text-base">{member.role}</p>
                          {member.department && <p className="text-sm text-[#5B2D2D]/80 font-medium">{member.department}</p>}
                        </div>

                        <div className="space-y-3 px-6 pb-4">
                          {member.email && (
                            <a
                              href={`mailto:${member.email}`}
                              className="flex items-center gap-2 text-sm text-[#332929] hover:text-[#B11D1D] transition-colors group/link"
                            >
                              <svg
                                className="h-4 w-4"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                <polyline points="22,6 12,13 2,6"></polyline>
                              </svg>
                              <span>{member.email}</span>
                            </a>
                          )}
                          {member.phone && (
                            <div className="flex items-center gap-2 text-sm text-[#332929]">

                              <svg
                                className="h-4 w-4"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.9 19.9 0 0 1-8.18 0 2 2 0 0 1-2.18-2v-3"></path>
                                <line x1="22" y1="22" x2="11" y2="11"></line>
                              </svg>
                              <span>{member.phone}</span>
                            </div>
                          )}
                          {member.profileUrl && (
                            <a
                              href={member.profileUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-[#852C2C] hover:text-[#B11D1D] transition-colors font-semibold text-sm"
                            >
                              Ver perfil completo →
                            </a>
                          )}
                        </div>

                        {member.expertise && (
                          <div className="px-6 pb-6 mt-auto">
                            <p className="text-xs font-bold text-[#5B2D2D] mb-3 uppercase tracking-wide">Áreas de Experticia</p>
                            <div className="flex flex-wrap gap-2">
                              {member.expertise.map((skill) => (
                                <div
                                  key={skill}
                                  className="bg-[#852C2C]/5 text-[#332222] hover:bg-[#B11D1D] hover:text-white transition-all duration-300 text-xs px-3 py-1.5 rounded-full font-medium border border-[#852C2C]/10 hover:border-transparent"
                                >
                                  {skill}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6 lg:px-12 bg-gradient-to-b from-gray-50 to-white border-t border-[#E5E5E5]">
          <div className="container mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-4xl font-bold text-[#332222] mb-6">Centro Internacional de Política Económica</h2>
              <p className="text-lg text-[#332929]/80 mb-12 leading-relaxed max-w-3xl mx-auto">
                El CINPE-UNA desarrolla investigación aplicada en colaboración con UNA Campus Sarapiquí, enfocándose en
                el desarrollo competitivo de los cantones de Pococí, Río Cuarto y Sarapiquí. Nuestro trabajo se enmarca
                en los Objetivos de Desarrollo Sostenible 8 y 10, promoviendo crecimiento económico inclusivo y
                reducción de desigualdades.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <Card className="bg-white border border-[#852C2C]/10 hover:border-[#B11D1D]/30 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="text-5xl font-bold bg-gradient-to-br from-[#852C2C] to-[#B11D1D] bg-clip-text text-transparent mb-3">3</div>
                    <p className="text-[#332222] font-semibold text-sm uppercase tracking-wide">Cantones en Estudio</p>
                  </CardContent>
                </Card>
                <Card className="bg-white border border-[#852C2C]/10 hover:border-[#B11D1D]/30 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="text-5xl font-bold bg-gradient-to-br from-[#852C2C] to-[#B11D1D] bg-clip-text text-transparent mb-3">2</div>
                    <p className="text-[#332222] font-semibold text-sm uppercase tracking-wide">Proyectos Activos</p>
                  </CardContent>
                </Card>
                <Card className="bg-white border border-[#852C2C]/10 hover:border-[#B11D1D]/30 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="text-5xl font-bold bg-gradient-to-br from-[#852C2C] to-[#B11D1D] bg-clip-text text-transparent mb-3">2</div>
                    <p className="text-[#332222] font-semibold text-sm uppercase tracking-wide">Regiones Atendidas</p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
