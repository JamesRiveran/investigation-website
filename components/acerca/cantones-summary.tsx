"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPinned, FileText } from "lucide-react"
import { pocociMAC } from "@/src/content/mac/cantones/pococi"
import { rioCuartoMAC } from "@/src/content/mac/cantones/rio-cuarto"
import { sarapiquiMAC } from "@/src/content/mac/cantones/sarapiqui"

const cantones = [
    { ...pocociMAC, slug: "pococi", region: "Región Huetar Caribe" },
    { ...rioCuartoMAC, slug: "rio-cuarto", region: "Región Huetar Norte" },
    { ...sarapiquiMAC, slug: "sarapiqui", region: "Región Huetar Norte" },
]

export function CantonesSummary() {
    return (
        <section className="py-20 px-6 lg:px-12 bg-gradient-to-b from-gray-50 to-white border-t border-[#E5E5E5]">
            <div className="container mx-auto max-w-6xl space-y-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >
                    <h2 className="text-3xl font-bold text-[#332222] mb-4">Análisis cantonal</h2>
                    <p className="text-lg text-[#332929]/80 max-w-3xl mx-auto">
                        Perfil territorial y demográfico para los cantones de estudio según el Mecanismo de Análisis Cantonal (MAC).
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {cantones.map((canton, idx) => (
                        <motion.div
                            key={canton.slug}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.05 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full border border-[#852C2C]/10 hover:border-[#B11D1D]/30 hover:shadow-xl transition-all duration-300 bg-white">
                                <CardHeader>
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="p-3 rounded-lg bg-[#B11D1D]/10">
                                            <MapPinned className="h-5 w-5 text-[#B11D1D]" />
                                        </div>
                                        <div>
                                            <CardTitle className="text-xl text-[#332222]">{canton.canton}</CardTitle>
                                            <p className="text-sm text-[#332929]/70">{canton.region}</p>
                                        </div>
                                    </div>
                                    <Badge className="bg-white text-[#B11D1D] font-bold shadow-sm border border-[#B11D1D]/20">
                                        Código Postal {canton.codigoPostal}
                                    </Badge>
                                </CardHeader>
                                <CardContent className="flex flex-col h-full space-y-3 text-sm text-[#332929]/80 leading-relaxed">
                                    <p>{canton.secciones[0]?.texto?.trim()}</p>
                                    <div className="pt-4 mt-auto">
                                        <Link
                                            href={`/mac/cantones/${canton.slug}`}
                                            className="inline-flex items-center gap-2 text-[#852C2C] hover:text-[#B11D1D] font-semibold"
                                        >
                                            Ver análisis completo
                                            <FileText className="h-4 w-4" />
                                        </Link>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    )
}
