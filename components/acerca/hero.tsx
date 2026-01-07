"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

export function AcercaHero() {
    return (
        <section className="relative overflow-hidden py-24 px-6 lg:px-12 bg-gradient-to-br from-[#852C2C] via-[#5B2D2D] to-[#B11D1D]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.12),transparent_55%)]" />

            <div className="container mx-auto max-w-6xl relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center text-white"
                >
                    <div className="inline-block rounded-full bg-white/15 px-4 py-1.5 text-sm text-white/90 backdrop-blur mb-4">
                        CINPE-UNA
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Acerca del proyecto</h1>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto text-white/90">
                        Visión integral de los proyectos, el equipo y el análisis cantonal para fortalecer la competitividad de Pococí,
                        Río Cuarto y Sarapiquí.
                    </p>
                    <div className="flex gap-3 justify-center mt-8 flex-wrap">
                        <Badge className="bg-white/20 text-white border border-white/30">Investigación aplicada</Badge>
                        <Badge className="bg-white/20 text-white border border-white/30">Regiones Huetar Norte y Caribe</Badge>
                        <Badge className="bg-white/20 text-white border border-white/30">Agenda competitividad</Badge>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
