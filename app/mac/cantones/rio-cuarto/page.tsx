"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { BarChart3, Users, MapPinned, Info } from "lucide-react"
import { rioCuartoMAC } from "@/src/content/mac/cantones/rio-cuarto";

export default function RioCuartoPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navigation />

            <main className="flex-1">
                {/* HERO */}
                <section className="relative overflow-hidden py-24 px-6 lg:px-12 bg-gradient-to-br from-[#852C2C] via-[#5B2D2D] to-[#B11D1D]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.12),transparent_55%)]" />

                    <div className="container mx-auto max-w-6xl relative">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-center text-white"
                        >

                            <h1 className="text-4xl md:text-5xl font-bold mb-6">
                                {rioCuartoMAC.canton}
                            </h1>

                            <p className="text-lg md:text-xl max-w-3xl mx-auto text-white/90 mb-6">
                                Perfil demográfico y análisis territorial según el
                                Mecanismo de Análisis Cantonal (MAC)
                            </p>
                            <Badge className="bg-white text-[#B11D1D] font-bold shadow-md mb-4">
                                Código Postal {rioCuartoMAC.codigoPostal}
                            </Badge>
                        </motion.div>
                    </div>
                </section>

                {/* CONTENIDO */}
                <section className="py-20 px-6 lg:px-12 bg-gradient-to-b from-white to-gray-50">
                    <div className="container mx-auto max-w-6xl space-y-12">
                        {rioCuartoMAC.secciones.map((seccion, index) => (
                            <motion.div
                                key={seccion.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                viewport={{ once: true }}
                            >
                                <Card className="border border-[#852C2C]/10 hover:shadow-2xl transition-all duration-300 bg-white">
                                    <CardContent className="p-8 lg:p-10 space-y-6">
                                        {/* Header de sección */}
                                        <div className="flex items-center gap-4">
                                            <div className="p-3 rounded-lg bg-[#B11D1D]/10">
                                                {seccion.id === "perfil-general" && (
                                                    <MapPinned className="h-6 w-6 text-[#B11D1D]" />
                                                )}
                                                {seccion.id === "crecimiento-demografico" && (
                                                    <BarChart3 className="h-6 w-6 text-[#B11D1D]" />
                                                )}
                                                {seccion.id === "estructura-etaria" && (
                                                    <Users className="h-6 w-6 text-[#B11D1D]" />
                                                )}
                                                {seccion.id === "genero-composicion" && (
                                                    <Info className="h-6 w-6 text-[#B11D1D]" />
                                                )}
                                            </div>

                                            <h2 className="text-2xl font-bold text-[#332222]">
                                                {seccion.titulo}
                                            </h2>
                                        </div>

                                        {/* Texto */}
                                        <div className="text-[#332929]/80 leading-relaxed whitespace-pre-line">
                                            {seccion.texto}
                                        </div>

                                        {/* Tablas */}
                                        {seccion.tablas?.map((tabla, i) => (
                                            <div key={i} className="pt-6 space-y-3">
                                                <h3 className="font-semibold text-[#332222]">
                                                    {tabla.titulo}
                                                </h3>

                                                <div className="overflow-x-auto rounded-lg border border-[#852C2C]/10">
                                                    <table className="w-full text-sm">
                                                        <thead className="bg-[#852C2C]/5">
                                                            <tr>
                                                                {tabla.columnas.map((col) => (
                                                                    <th
                                                                        key={col}
                                                                        className="px-4 py-2 text-left font-semibold text-[#332222]"
                                                                    >
                                                                        {col}
                                                                    </th>
                                                                ))}
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {tabla.filas.map((fila, f) => (
                                                                <tr key={f} className="border-t">
                                                                    {fila.map((celda, c) => (
                                                                        <td
                                                                            key={c}
                                                                            className="px-4 py-2 text-[#332929]/80"
                                                                        >
                                                                            {celda}
                                                                        </td>
                                                                    ))}
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>

                                                <p className="text-xs text-[#332929]/60">
                                                    Fuente: {tabla.fuente}
                                                </p>
                                            </div>
                                        ))}
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}

                        {/* NOTAS METODOLÓGICAS */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <Card className="border border-[#852C2C]/10 bg-gradient-to-br from-[#852C2C]/5 to-[#B11D1D]/5">
                                <CardContent className="p-8 space-y-3">
                                    <h3 className="font-bold text-[#5B2D2D] uppercase tracking-wide text-sm">
                                        Consideraciones metodológicas
                                    </h3>
                                    {rioCuartoMAC.notas.map((nota, i) => (
                                        <p key={i} className="text-sm text-[#332929]/80 leading-relaxed">
                                            • {nota}
                                        </p>
                                    ))}
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </section>

                {/* FUENTE */}
                <section className="py-12 px-6 lg:px-12 border-t border-[#E5E5E5] bg-white">
                    <div className="container mx-auto max-w-6xl text-center">
                        <p className="text-sm text-[#332929]/70">
                            {rioCuartoMAC.fuenteGeneral}
                        </p>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
