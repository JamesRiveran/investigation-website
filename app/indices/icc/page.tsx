"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { TrendingUp, BarChart3, Zap, Users, Wifi, Lightbulb, Heart } from "lucide-react"

export default function ICCPage() {
    const pillars = [
        {
            id: "economico",
            title: "Pilar Económico",
            icon: BarChart3,
            description: "Base productiva y capacidad de mantener actividades económicas",
            highlights: [
                "Pococí: Desempeño alto y consistente (0.370 puntos porcentuales)",
                "Sarapiquí: Economía funcional pero con deficiencias (0.240-0.300)",
                "Río Cuarto: Datos limitados en el ICC"
            ]
        },
        {
            id: "empresarial",
            title: "Pilar Empresarial",
            icon: Zap,
            description: "Complejidad, variedad y exigencia del entorno económico empresarial",
            highlights: [
                "Pococí: Tejido empresarial más denso y diversificado",
                "Sarapiquí: Alta dependencia sectorial y menor densidad de encadenamientos",
                "Diferencias estructurales en capacidades acumuladas"
            ]
        },
        {
            id: "gobierno",
            title: "Pilar Gobierno",
            icon: Users,
            description: "Capacidad de captar recursos, gestionarlos y participación ciudadana",
            highlights: [
                "Alta sensibilidad a choques coyunturales",
                "Fragilidad institucional persistente en ambos cantones",
                "Dependencia de ciclos específicos de gestión local"
            ]
        },
        {
            id: "laboral",
            title: "Pilar Laboral",
            icon: Users,
            description: "Potencial educativo y estabilidad del mercado laboral",
            highlights: [
                "Pococí: Clima laboral favorable y estable (0.500-0.600)",
                "Sarapiquí: Dependencia de ciclos productivos (0.415-0.540)",
                "Mayor amortiguación social en Pococí frente a choques externos"
            ]
        },
        {
            id: "infraestructura",
            title: "Pilar Infraestructura",
            icon: Wifi,
            description: "Servicios básicos, vías pavimentadas y acceso a tecnologías",
            highlights: [
                "Ambos cantones: Valores menores a 0.500",
                "Pococí: Infraestructura más estable y acumulada",
                "Sarapiquí: Dependencia de choques de inversión pública"
            ]
        },
        {
            id: "innovacion",
            title: "Pilar Innovación",
            icon: Lightbulb,
            description: "Capacidad de innovación y exportaciones de alta tecnología",
            highlights: [
                "Sarapiquí: Innovación tardía pero acumulativa",
                "Pococí: Mayor nivel relativo pero volátil",
                "Ambos: Procesos de aprendizaje e incorporación reciente"
            ]
        },
        {
            id: "calidadvida",
            title: "Pilar Calidad de Vida",
            icon: Heart,
            description: "Seguridad ciudadana, salud y ambiente cantonal",
            highlights: [
                "Sarapiquí: Base inicial favorable pero con descensos progresivos",
                "Pococí: Mayor capacidad de ajuste social a corto plazo",
                "Movimientos menos abruptos que otros pilares"
            ]
        }
    ]

    const cantonComparison = [
        {
            canton: "Pococí",
            crecimiento: "14.21%",
            periodo: "2011-2023",
            description: "Nivel de competitividad alto. Incrementó su ICC de 0.401 a 0.458 puntos porcentuales",
            caracteristica: "Incrementó competitividad hasta 7 veces más que Sarapiquí"
        },
        {
            canton: "Sarapiquí",
            crecimiento: "1.98%",
            periodo: "2011-2023",
            description: "Nivel de competitividad bajo. Creció de 0.353 a 0.360 puntos porcentuales",
            caracteristica: "Estancado sin transformaciones estructurales marcadas"
        },
        {
            canton: "Río Cuarto",
            crecimiento: "Datos limitados",
            periodo: "2011-2023",
            description: "No alcanza a Sarapiquí en competitividad según análisis del ICC",
            caracteristica: "Cantón de zonas periféricas con inserción estratégica"
        }
    ]

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
                            <div className="inline-block rounded-full bg-white/15 px-4 py-1.5 text-sm text-white/90 backdrop-blur mb-6">
                                Índice de Competitividad Cantonal
                            </div>

                            <h1 className="text-4xl md:text-5xl font-bold mb-6">
                                ICC - Universidad de Costa Rica (UCR)
                            </h1>

                            <p className="text-lg md:text-xl max-w-3xl mx-auto text-white/90">
                                Análisis de competitividad territorial en Pococí, Río Cuarto y Sarapiquí
                                a partir de 7 pilares estratégicos
                            </p>

                            <div className="flex gap-3 justify-center mt-8 flex-wrap">
                                <Badge className="bg-white/20 text-white border border-white/30">
                                    38 Indicadores
                                </Badge>
                                <Badge className="bg-white/20 text-white border border-white/30">
                                    Período: 2011-2023
                                </Badge>
                                <Badge className="bg-white/20 text-white border border-white/30">
                                    7 Pilares
                                </Badge>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* HALLAZGO PRINCIPAL */}
                <section className="py-16 px-6 lg:px-12">
                    <div className="container mx-auto max-w-6xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <Card className="border-2 border-[#852C2C]/20 bg-gradient-to-br from-[#852C2C]/5 to-[#B11D1D]/5">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-3 text-[#332222]">
                                        <TrendingUp className="h-6 w-6 text-[#B11D1D]" />
                                        Dinámica Competitiva de los Cantones
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <p className="text-[#332929]/80 leading-relaxed">
                                        Entre el 2011 y el 2023, <strong>Pococí incrementó su nivel de competitividad hasta 7 veces más que Sarapiquí</strong>,
                                        evidenciando diferencias estructurales significativas en capacidades productivas, articulación institucional y dinamismos territoriales.
                                    </p>
                                    <p className="text-[#332929]/80 leading-relaxed">
                                        Estos cantones comparten una inserción estratégica en regiones periféricas, vinculación a actividades primarias
                                        y soporte funcional en el sector terciario, pero divergen en su capacidad para acumular ventajas competitivas.
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </section>

                {/* COMPARATIVA CANTONAL */}
                <section className="py-20 px-6 lg:px-12 bg-gray-50">
                    <div className="container mx-auto max-w-6xl">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="mb-12 text-center"
                        >
                            <h2 className="text-3xl font-bold tracking-tight text-[#332222] mb-3">
                                Comparativa de Cantones
                            </h2>
                            <p className="text-[#332929]/70 max-w-2xl mx-auto">
                                Análisis de competitividad y crecimiento 2011-2023
                            </p>
                        </motion.div>

                        <div className="grid gap-6 md:grid-cols-3">
                            {cantonComparison.map((item, index) => (
                                <motion.div
                                    key={item.canton}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <Card className="border border-[#852C2C]/10 bg-white hover:shadow-lg transition-all duration-300 h-full">
                                        <CardHeader>
                                            <CardTitle className="text-[#332222] text-2xl">
                                                {item.canton}
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            <div>
                                                <p className="text-xs text-[#332929]/60 uppercase tracking-wide">Crecimiento ICC</p>
                                                <p className="text-2xl font-bold text-[#B11D1D] mt-1">
                                                    {item.crecimiento}
                                                </p>
                                            </div>
                                            <div>
                                                <p className="text-xs text-[#332929]/60 uppercase tracking-wide">Período</p>
                                                <p className="text-[#332222] font-semibold">
                                                    {item.periodo}
                                                </p>
                                            </div>
                                            <p className="text-[#332929]/75 text-sm leading-relaxed">
                                                {item.description}
                                            </p>
                                            <div className="pt-4 border-t border-[#852C2C]/10">
                                                <p className="text-sm font-semibold text-[#332222]">
                                                    {item.caracteristica}
                                                </p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* PILARES */}
                <section className="py-20 px-6 lg:px-12">
                    <div className="container mx-auto max-w-6xl">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="mb-12 text-center"
                        >
                            <h2 className="text-3xl font-bold tracking-tight text-[#332222] mb-3">
                                Los 7 Pilares del ICC
                            </h2>
                            <p className="text-[#332929]/70 max-w-2xl mx-auto">
                                Dimensiones estratégicas en el análisis de competitividad territorial
                            </p>
                        </motion.div>

                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {pillars.map((pillar, index) => {
                                const Icon = pillar.icon
                                return (
                                    <motion.div
                                        key={pillar.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.05 }}
                                        viewport={{ once: true }}
                                    >
                                        <Card className="border border-[#852C2C]/10 hover:shadow-2xl transition-all duration-300 bg-white h-full">
                                            <CardHeader>
                                                <div className="flex items-center gap-3 mb-3">
                                                    <div className="p-2 rounded-lg bg-[#B11D1D]/10">
                                                        <Icon className="h-5 w-5 text-[#B11D1D]" />
                                                    </div>
                                                    <CardTitle className="text-lg text-[#332222]">
                                                        {pillar.title}
                                                    </CardTitle>
                                                </div>
                                            </CardHeader>
                                            <CardContent className="space-y-4">
                                                <p className="text-sm text-[#332929]/70">
                                                    {pillar.description}
                                                </p>
                                                <div className="space-y-2">
                                                    {pillar.highlights.map((highlight, i) => (
                                                        <div key={i} className="flex gap-2 text-sm">
                                                            <span className="text-[#B11D1D] font-bold">•</span>
                                                            <span className="text-[#332929]/75">{highlight}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* NOTA AL PIE */}
                <section className="py-12 px-6 lg:px-12 border-t border-[#E5E5E5] bg-white">
                    <div className="container mx-auto max-w-6xl">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="space-y-6"
                        >
                            <div>
                                <h3 className="text-sm font-bold text-[#5B2D2D] uppercase tracking-wide mb-4">
                                    Nota Metodológica
                                </h3>
                                <p className="text-sm text-[#332929]/70 leading-relaxed">
                                    El Índice de Competitividad Cantonal (ICC) de la Escuela de Economía de la Universidad de Costa Rica
                                    cuenta con 38 indicadores que estructuran 7 pilares estratégicos para evaluar la competitividad desde lo local.
                                    Iniciado en 2009, se basa en una metodología de caracterización internacional adaptada del Índice de Competitividad
                                    del Foro Económico Mundial. El presente análisis se enfoca en tres cantones: Pococí, Río Cuarto y Sarapiquí,
                                    durante el período 2011-2023.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
