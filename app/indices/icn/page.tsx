"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { BookOpen, Layers, AlertCircle, Layout, Table as TableIcon } from "lucide-react"
import { useState } from "react"

const tableBase = "w-full text-sm text-left text-[#2f2a2a] border border-[#e5e7eb]"
const thBase = "bg-[#f8f7f5] px-3 py-2 font-semibold text-[#3a2f2f] border-b border-[#e5e7eb]"
const tdBase = "px-3 py-2 border-b border-[#e5e7eb]"

export default function ICNPage() {
    const [structuralView, setStructuralView] = useState<"instituciones" | "infraestructura">("instituciones")
    const [humanView, setHumanView] = useState<"salud" | "habilidades">("salud")

    const institutionData = {
        rioCuarto: [
            { year: "2021", value: "26.5" },
            { year: "2022", value: "38.9" },
            { year: "2023", value: "46.3" },
            { year: "2024", value: "53.5" },
            { year: "2025", value: "46.8" }
        ],
        sarapiqui: [
            { year: "2021", value: "51.8" },
            { year: "2022", value: "50.5" },
            { year: "2023", value: "51.0" },
            { year: "2024", value: "47.6" },
            { year: "2025", value: "50.1" }
        ],
        pococi: [
            { year: "2021", value: "56.4" },
            { year: "2022", value: "54.1" },
            { year: "2023", value: "47.1" },
            { year: "2024", value: "50.2" },
            { year: "2025", value: "56.2" }
        ]
    }

    const infraData = {
        rioCuarto: [
            { year: "2021", value: "46.7" },
            { year: "2022", value: "46.0" },
            { year: "2023", value: "52.0" },
            { year: "2024", value: "53.0" },
            { year: "2025", value: "50.4" }
        ],
        sarapiqui: [
            { year: "2021", value: "59.6" },
            { year: "2022", value: "59.1" },
            { year: "2023", value: "49.6" },
            { year: "2024", value: "49.3" },
            { year: "2025", value: "61.4" }
        ],
        pococi: [
            { year: "2021", value: "64.8" },
            { year: "2022", value: "64.4" },
            { year: "2023", value: "48.5" },
            { year: "2024", value: "49.4" },
            { year: "2025", value: "57.9" }
        ]
    }

    const saludData = {
        rioCuarto: [
            { year: "2021", value: "50.5" },
            { year: "2022", value: "70.9" },
            { year: "2023", value: "47.7" },
            { year: "2024", value: "44.9" },
            { year: "2025", value: "78.2" }
        ],
        sarapiqui: [
            { year: "2021", value: "53.1" },
            { year: "2022", value: "43.7" },
            { year: "2023", value: "44.3" },
            { year: "2024", value: "41.7" },
            { year: "2025", value: "53.0" }
        ],
        pococi: [
            { year: "2021", value: "53.3" },
            { year: "2022", value: "56.9" },
            { year: "2023", value: "51.4" },
            { year: "2024", value: "56.2" },
            { year: "2025", value: "53.9" }
        ]
    }

    const habilidadesData = {
        rioCuarto: [
            { year: "2021", value: "30.7" },
            { year: "2022", value: "30.8" },
            { year: "2023", value: "32.5" },
            { year: "2024", value: "29.5" },
            { year: "2025", value: "29.2" }
        ],
        sarapiqui: [
            { year: "2021", value: "41.6" },
            { year: "2022", value: "41.2" },
            { year: "2023", value: "41.9" },
            { year: "2024", value: "42.1" },
            { year: "2025", value: "46.8" }
        ],
        pococi: [
            { year: "2021", value: "49.3" },
            { year: "2022", value: "50.5" },
            { year: "2023", value: "50.4" },
            { year: "2024", value: "51.8" },
            { year: "2025", value: "55.0" }
        ]
    }

    return (
        <div className="min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-1">
                {/* HERO SECTION */}
                <section className="relative overflow-hidden py-24 px-6 lg:px-12 bg-gradient-to-br from-[#852C2C] via-[#5B2D2D] to-[#B11D1D] text-white">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.15),transparent_55%)]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(255,255,255,0.1),transparent_55%)]" />
                    <div className="container mx-auto max-w-6xl relative">
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-center space-y-4"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur text-sm">
                                <BookOpen className="w-4 h-4" />
                                <span>Módulo III · Índice de Competitividad Nacional (ICN) - CPC</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                                Consejo de Promoción de la Competitividad (CPC) · Informes 2021-2025
                            </h1>
                            <p className="text-lg md:text-xl max-w-4xl mx-auto text-white/85">
                                Conceptualización de competitividad, tres categorías y seis pilares, cinco informes anuales. El MAC utiliza esta vía analítica como lectura estructural y crítica de la competitividad local.
                            </p>
                            <div className="flex gap-3 justify-center flex-wrap mt-4">
                                <Badge className="bg-white/20 text-white border border-white/30">5 informes (2021-2025)</Badge>
                                <Badge className="bg-white/20 text-white border border-white/30">3 categorías · 6 pilares</Badge>
                                <Badge className="bg-white/20 text-white border border-white/30">CPC · ICN</Badge>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* CONCEPTO Y DEFINICIÓN */}
                <section className="py-16 px-6 lg:px-12">
                    <div className="container mx-auto max-w-6xl space-y-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <Card className="border border-[#ead7d7] bg-[#fdf7f7]">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-3 text-[#3a1d1d]">
                                        <Layers className="w-5 h-5 text-[#b11d1d]" />
                                        Módulo III. Índice de Competitividad Nacional (ICN) - Consejo de Promoción de la Competitividad (CPC)
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4 text-[#4a2b2b] leading-relaxed">
                                    <p>
                                        Para comprender la segunda vía analítica de competitividad que busca estudiar el MAC se ha de hacer mención del Índice de Competitividad Nacional (ICN), el cual ha sido trabajado por el Consejo de Promoción de la Competitividad (CPC) desde el año 2021, contando de esta manera con cinco informes que se publican anualmente. Dicho mecanismo abarca una conceptualización sobre "competitividad" que ha sido trabajada tanto por el sector público como el sector privado en los diferentes informes publicados por la institución, comprendiendo el término como:
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <Card className="border-2 border-[#852C2C]/20 bg-gradient-to-br from-[#852C2C]/5 to-[#B11D1D]/5">
                                <CardHeader>
                                    <CardTitle className="text-[#332222]">Concepto de competitividad según el ICN (CPC, 2025, p. 8)</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4 text-[#4a2b2b] leading-relaxed italic">
                                    <p>
                                        "Instituciones, políticas y factores que crean las condiciones para que los distintos actores económicos, puedan desarrollar su potencial, mediante un ambiente propicio para generar inversiones y emprender proyectos que potencien la economía de la región, mejoren la calidad de vida de sus habitantes, su productividad y la sostenibilidad."
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-2xl font-bold text-[#332222] mb-4">Estructura del ICN</h3>
                                <p className="text-[#4a2b2b] leading-relaxed mb-4">
                                    El ICN se encuentra conformado por tres niveles de jerarquización de la información, agrupando de esta manera tres categorías de competitividad que abarcan seis pilares conformados por diferentes dimensiones, las cuales buscan generar una aproximación a la estructura del concepto trabajado.
                                </p>
                            </div>

                            <div className="grid gap-6 lg:grid-cols-3">
                                <Card className="border border-[#ead7d7] bg-white/60">
                                    <CardHeader>
                                        <CardTitle className="text-[#3a1d1d]">Ambiente apto o habilitante</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-2 text-[#4a2b2b] text-sm leading-relaxed">
                                        <div>
                                            <p className="font-semibold">Instituciones:</p>
                                            <p>Seguridad, capital social, transformación digital, trámites ágiles, transparencia municipal, administración presupuestaria y compromiso con la sostenibilidad.</p>
                                        </div>
                                        <div>
                                            <p className="font-semibold">Infraestructura:</p>
                                            <p>Medio para reducir costos y facilitar movilidad; incluye transporte, conectividad vial, acceso a servicios públicos y servicios municipales.</p>
                                        </div>
                                        <div>
                                            <p className="font-semibold">Adopción de TIC:</p>
                                            <p>Acceso a redes de datos móviles y voz, redes fijas, acceso en hogares y sistema educativo.</p>
                                        </div>
                                    </CardContent>
                                </Card>
                                <Card className="border border-[#ead7d7] bg-white/60">
                                    <CardHeader>
                                        <CardTitle className="text-[#3a1d1d]">Capital humano</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-2 text-[#4a2b2b] text-sm leading-relaxed">
                                        <div>
                                            <p className="font-semibold">Salud:</p>
                                            <p>Condiciones físicas y mentales sanas se traducen en productividad y creatividad.</p>
                                        </div>
                                        <div>
                                            <p className="font-semibold">Habilidades y competencias:</p>
                                            <p>Fuerza laboral actual (escolaridad media, competencias técnicas, competencias en CyT) y futura (cobertura educativa, currículo completo, educación técnica, inversión educativa).</p>
                                        </div>
                                    </CardContent>
                                </Card>
                                <Card className="border border-[#ead7d7] bg-white/60">
                                    <CardHeader>
                                        <CardTitle className="text-[#3a1d1d]">Categoría económica</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-2 text-[#4a2b2b] text-sm leading-relaxed">
                                        <p>
                                            Actividades comerciales y mercados que conforman encadenamientos productivos. El ICN rescata el mercado de la construcción y la electricidad como principales industrias económicas del país.
                                        </p>
                                        <p className="text-xs text-[#6b4a4a] italic">Fuente: CPC, 2025, p. 11.</p>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>

                        <Card className="border border-[#ead7d7] bg-white/70">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-3 text-[#3a1d1d]">
                                    <AlertCircle className="w-5 h-5 text-[#b11d1d]" />
                                    Lectura crítica del MAC sobre el ICN
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3 text-[#4a2b2b] text-sm leading-relaxed">
                                <p>
                                    El MAC no busca consolidar ninguno de los dos índices de competitividad como referencia única o definitiva. El ICC elaborado por la UCR se considera una lectura parcial de la competitividad, mientras que el ICN del CPC constituye una lectura alternativa y complementaria. En este sentido, el MAC no pretende jerarquizar índices, ni utilizarlos para explicar completamente otros indicadores, ni derivar conclusiones de políticas públicas de carácter definitivo.
                                </p>
                                <p>
                                    El ICN es interpretado como una medida de capacidades territoriales orientadas a la actividad económica, y no como un indicador de bienestar social o de resultados distributivos. La existencia de un ambiente apto o habilitante no garantiza, por sí misma, resultados sociales positivos. El MAC prioriza determinados sectores productivos, mientras se invisibilizan otros que son relevantes para territorios periféricos, como los servicios locales, el turismo comunitario o la economía social.
                                </p>
                                <p>
                                    El ICN se sustenta en una serie de supuestos analíticos: (1) una mejora en las condiciones para la inversión pueden impulsar el desarrollo, (2) la competitividad es deseable en sí misma, (3) los principales motores de los territorios son los actores económicos formales y (4) las regiones responden de manera homogénea a los estímulos de la competitividad. En este sentido, el MAC problematiza estos supuestos a raíz de particularidades de cantones periféricos.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* MATRIZ ANALÍTICA */}
                <section className="py-16 px-6 lg:px-12 bg-[#f9f6f6]">
                    <div className="container mx-auto max-w-6xl space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <Card className="border border-[#ead7d7] bg-white/80">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-3 text-[#3a1d1d]">
                                        <Layout className="w-5 h-5 text-[#b11d1d]" />
                                        Matriz analítica ICN - MAC
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4 text-[#4a2b2b] text-sm leading-relaxed">
                                    <p>
                                        La matriz se organiza en tres funciones territoriales que comprenden cinco dimensiones con un análisis aplicado que varía según la función territorial.
                                    </p>
                                    <div>
                                        <p className="font-semibold mb-2">Funciones territoriales verticales:</p>
                                        <ul className="list-disc pl-6 space-y-1">
                                            <li>Capacidad estructural del territorio (ambiente apto o habilitante: instituciones, infraestructura, TIC).</li>
                                            <li>Capacidad de generación de productividad (capital humano: salud, habilidades y competencias).</li>
                                            <li>Expresión productiva observable (categoría económica: dinamismo económico).</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <p className="font-semibold mb-2">Componentes analíticos horizontales:</p>
                                        <ul className="list-disc pl-6 space-y-1">
                                            <li>Componentes del ICN</li>
                                            <li>Qué mide el ICN bajo esos factores</li>
                                            <li>Qué no mide el ICN bajo esos aspectos</li>
                                            <li>Tipo de capacidad</li>
                                            <li>Implicaciones territoriales</li>
                                        </ul>
                                    </div>
                                    <p className="text-xs text-[#6b4a4a] italic pt-2">
                                        Nota: Por cada función (tres funciones) en cada cantón (tres cantones) se ha desarrollado una matriz de análisis ICN - MAC.
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </section>

                {/* ESTUDIOS DE CASO AGREGADO */}
                <section className="py-16 px-6 lg:px-12">
                    <div className="container mx-auto max-w-6xl space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <Card className="border border-[#ead7d7] bg-white/80">
                                <CardHeader>
                                    <CardTitle className="text-[#3a1d1d]">Estudios de caso del ICN</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4 text-[#4a2b2b] text-sm leading-relaxed">
                                    <p>
                                        El análisis de Río Cuarto, Sarapiquí y Pococí retoma la clara necesidad de explicar que dentro de la investigación hay espacios en los que se omiten observaciones para Río Cuarto, esto debido a su temprana condición de cantón dentro de la división territorial administrativa de Costa Rica.
                                    </p>
                                    <p>
                                        El ICN agregado muestra un panorama heterogéneo, con brechas relativamente estables y persistentes a lo largo del tiempo, pero con dinámicas internas diferenciadas que no responden a un patrón lineal de convergencia. Los valores del ICN agregado de los cantones bajo investigación oscilan entre los 39 y 63 puntos porcentuales del índice.
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>

                        <div className="grid gap-6 lg:grid-cols-2">
                            <Card className="border border-[#ead7d7] bg-white/80">
                                <CardHeader>
                                    <CardTitle className="text-[#3a1d1d]">ICN Agregado: Río Cuarto</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-2 text-[#4a2b2b] text-sm leading-relaxed">
                                    <p>
                                        Río Cuarto parte de una base menor, considerándolo como la región con el valor de competitividad más bajo. No obstante, a partir del 2022 muestra una trayectoria ascendente que se sostiene hasta el año 2025, pasando de 39.1 a 52.5 puntos porcentuales. Una mejora en las condiciones habilitantes no necesariamente significa desarrollo.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card className="border border-[#ead7d7] bg-white/80">
                                <CardHeader>
                                    <CardTitle className="text-[#3a1d1d]">ICN Agregado: Sarapiquí</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-2 text-[#4a2b2b] text-sm leading-relaxed">
                                    <p>
                                        Sarapiquí muestra valores descendentes que se sostienen hasta el 2024, marcando una recuperación en 2025 con valores superiores a 50 puntos porcentuales. La competitividad demuestra volatilidad y refleja dependencia de factores coyunturales, con un salto de 5.3 puntos entre 2024 y 2025.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>

                        <Card className="border border-[#ead7d7] bg-white/80">
                            <CardHeader>
                                <CardTitle className="text-[#3a1d1d]">ICN Agregado: Pococí</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2 text-[#4a2b2b] text-sm leading-relaxed">
                                <p>
                                    El nivel de competitividad del cantón se mantiene estable, presenciando un salto significativo en el año 2025. Pococí se posiciona como una zona intermedia que puede articular dinámicas regionales y nacionales pero que también se encuentra expuesta a choques externos. El cantón tiene capacidades suficientes para responder a estímulos competitivos, pero estos aún no se han traducido en una estabilidad estructural plenamente consolidada.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* CAPACIDAD ESTRUCTURAL */}
                <section className="py-16 px-6 lg:px-12 bg-[#f9f6f6]">
                    <div className="container mx-auto max-w-6xl space-y-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <Card className="border border-[#ead7d7] bg-[#fdf7f7]">
                                <CardHeader>
                                    <CardTitle className="text-[#3a1d1d]">Capacidad estructural: ambiente habilitante</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-6 text-[#4a2b2b] text-sm leading-relaxed">
                                    <p>
                                        Instituciones, infraestructura y adopción de TIC como funciones estructurales para Río Cuarto, Sarapiquí y Pococí. Las instituciones reflejan la capacidad de la gobernanza; la infraestructura es el soporte físico y logístico del territorio; y la adopción de TIC es un multiplicador estructural que acelera procesos y conecta mercados.
                                    </p>
                                    <div className="flex flex-wrap gap-3">
                                        <Button
                                            size="sm"
                                            className={`rounded-full px-4 ${structuralView === "instituciones" ? "bg-gradient-to-r from-[#b11d1d] to-[#852c2c] text-white" : "bg-white border border-[#ead7d7] text-[#3a1d1d]"}`}
                                            onClick={() => setStructuralView("instituciones")}
                                        >
                                            Instituciones
                                        </Button>
                                        <Button
                                            size="sm"
                                            className={`rounded-full px-4 ${structuralView === "infraestructura" ? "bg-gradient-to-r from-[#b11d1d] to-[#852c2c] text-white" : "bg-white border border-[#ead7d7] text-[#3a1d1d]"}`}
                                            onClick={() => setStructuralView("infraestructura")}
                                        >
                                            Infraestructura
                                        </Button>
                                    </div>

                                    {structuralView === "instituciones" && (
                                        <div className="grid gap-6 lg:grid-cols-3 pt-4">
                                            <div className="space-y-3">
                                                <div className="font-semibold text-[#3a1d1d]">Río Cuarto</div>
                                                <p className="text-xs text-[#5b3a3a]">Institucionalidad emergente; parte de una base débil coherente con su condición de cantón de reciente creación.</p>
                                                <table className={tableBase}>
                                                    <tbody>
                                                        {institutionData.rioCuarto.map((item) => (
                                                            <tr key={item.year}>
                                                                <td className={thBase}>{item.year}</td>
                                                                <td className={tdBase}>{item.value}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="space-y-3">
                                                <div className="font-semibold text-[#3a1d1d]">Sarapiquí</div>
                                                <p className="text-xs text-[#5b3a3a]">Institucionalidad históricamente instalada pero con valores medios funcionales, estable pero estancada.</p>
                                                <table className={tableBase}>
                                                    <tbody>
                                                        {institutionData.sarapiqui.map((item) => (
                                                            <tr key={item.year}>
                                                                <td className={thBase}>{item.year}</td>
                                                                <td className={tdBase}>{item.value}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="space-y-3">
                                                <div className="font-semibold text-[#3a1d1d]">Pococí</div>
                                                <p className="text-xs text-[#5b3a3a]">Capacidad institucional históricamente funcional; vulnerable ante choques pero con rápidas recuperaciones.</p>
                                                <table className={tableBase}>
                                                    <tbody>
                                                        {institutionData.pococi.map((item) => (
                                                            <tr key={item.year}>
                                                                <td className={thBase}>{item.year}</td>
                                                                <td className={tdBase}>{item.value}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    )}

                                    {structuralView === "infraestructura" && (
                                        <div className="grid gap-6 lg:grid-cols-3 pt-4">
                                            <div className="space-y-3">
                                                <div className="font-semibold text-[#3a1d1d]">Río Cuarto</div>
                                                <p className="text-xs text-[#5b3a3a]">Infraestructura estable, sin saltos significativos; soporte estructural moderado pero no acelerador.</p>
                                                <table className={tableBase}>
                                                    <tbody>
                                                        {infraData.rioCuarto.map((item) => (
                                                            <tr key={item.year}>
                                                                <td className={thBase}>{item.year}</td>
                                                                <td className={tdBase}>{item.value}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="space-y-3">
                                                <div className="font-semibold text-[#3a1d1d]">Sarapiquí</div>
                                                <p className="text-xs text-[#5b3a3a]">Infraestructura robusta pero con variaciones significativas; condicionada por ciclos de inversión.</p>
                                                <table className={tableBase}>
                                                    <tbody>
                                                        {infraData.sarapiqui.map((item) => (
                                                            <tr key={item.year}>
                                                                <td className={thBase}>{item.year}</td>
                                                                <td className={tdBase}>{item.value}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="space-y-3">
                                                <div className="font-semibold text-[#3a1d1d]">Pococí</div>
                                                <p className="text-xs text-[#5b3a3a]">Infraestructura sólida y altamente resiliente; expuesta a ciclos pero con capacidad de recuperación.</p>
                                                <table className={tableBase}>
                                                    <tbody>
                                                        {infraData.pococi.map((item) => (
                                                            <tr key={item.year}>
                                                                <td className={thBase}>{item.year}</td>
                                                                <td className={tdBase}>{item.value}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </section>

                {/* CAPITAL HUMANO */}
                <section className="py-16 px-6 lg:px-12">
                    <div className="container mx-auto max-w-6xl space-y-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <Card className="border border-[#ead7d7] bg-white/80">
                                <CardHeader>
                                    <CardTitle className="text-[#3a1d1d]">Capacidad de generación de productividad: capital humano</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-6 text-[#4a2b2b] text-sm leading-relaxed">
                                    <p>
                                        El ICN mide salud como resultados demográficos y sanitarios básicos; habilidades y competencias como oferta de capacidades actuales y futuras. Esta función captura la sostenibilidad demográfica cantonal, los riesgos estructurales en la formación futura del capital humano y la dotación relativa de habilidades de la fuerza laboral.
                                    </p>
                                    <div className="flex flex-wrap gap-3">
                                        <Button
                                            size="sm"
                                            className={`rounded-full px-4 ${humanView === "salud" ? "bg-gradient-to-r from-[#b11d1d] to-[#852c2c] text-white" : "bg-white border border-[#ead7d7] text-[#3a1d1d]"}`}
                                            onClick={() => setHumanView("salud")}
                                        >
                                            Salud
                                        </Button>
                                        <Button
                                            size="sm"
                                            className={`rounded-full px-4 ${humanView === "habilidades" ? "bg-gradient-to-r from-[#b11d1d] to-[#852c2c] text-white" : "bg-white border border-[#ead7d7] text-[#3a1d1d]"}`}
                                            onClick={() => setHumanView("habilidades")}
                                        >
                                            Habilidades y competencias
                                        </Button>
                                    </div>

                                    {humanView === "salud" && (
                                        <div className="grid gap-6 lg:grid-cols-3 pt-4">
                                            <div className="space-y-3">
                                                <div className="font-semibold text-[#3a1d1d]">Río Cuarto</div>
                                                <p className="text-xs text-[#5b3a3a]">Salud volátil con picos extremos; resultados de poblaciones agregadas sensibles a cambios demográficos.</p>
                                                <table className={tableBase}>
                                                    <tbody>
                                                        {saludData.rioCuarto.map((item) => (
                                                            <tr key={item.year}>
                                                                <td className={thBase}>{item.year}</td>
                                                                <td className={tdBase}>{item.value}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="space-y-3">
                                                <div className="font-semibold text-[#3a1d1d]">Sarapiquí</div>
                                                <p className="text-xs text-[#5b3a3a]">Salud funcional con deterioros graduales; vulnerable a interrupciones administrativas.</p>
                                                <table className={tableBase}>
                                                    <tbody>
                                                        {saludData.sarapiqui.map((item) => (
                                                            <tr key={item.year}>
                                                                <td className={thBase}>{item.year}</td>
                                                                <td className={tdBase}>{item.value}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="space-y-3">
                                                <div className="font-semibold text-[#3a1d1d]">Pococí</div>
                                                <p className="text-xs text-[#5b3a3a]">Salud estable y sostenida sin volatilidades; condición estructural que funciona como soporte.</p>
                                                <table className={tableBase}>
                                                    <tbody>
                                                        {saludData.pococi.map((item) => (
                                                            <tr key={item.year}>
                                                                <td className={thBase}>{item.year}</td>
                                                                <td className={tdBase}>{item.value}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    )}

                                    {humanView === "habilidades" && (
                                        <div className="grid gap-6 lg:grid-cols-3 pt-4">
                                            <div className="space-y-3">
                                                <div className="font-semibold text-[#3a1d1d]">Río Cuarto</div>
                                                <p className="text-xs text-[#5b3a3a]">Habilidades muy bajas y estancadas; escolaridad media insuficiente y competencias técnicas limitadas.</p>
                                                <table className={tableBase}>
                                                    <tbody>
                                                        {habilidadesData.rioCuarto.map((item) => (
                                                            <tr key={item.year}>
                                                                <td className={thBase}>{item.year}</td>
                                                                <td className={tdBase}>{item.value}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="space-y-3">
                                                <div className="font-semibold text-[#3a1d1d]">Sarapiquí</div>
                                                <p className="text-xs text-[#5b3a3a]">Habilidades funcionales pero estancadas; fortalecimiento tardío con mejoras recientes en 2025.</p>
                                                <table className={tableBase}>
                                                    <tbody>
                                                        {habilidadesData.sarapiqui.map((item) => (
                                                            <tr key={item.year}>
                                                                <td className={thBase}>{item.year}</td>
                                                                <td className={tdBase}>{item.value}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="space-y-3">
                                                <div className="font-semibold text-[#3a1d1d]">Pococí</div>
                                                <p className="text-xs text-[#5b3a3a]">Habilidades ascendentes y acumulativas; escolaridad media alta y competencias técnicas consolidadas.</p>
                                                <table className={tableBase}>
                                                    <tbody>
                                                        {habilidadesData.pococi.map((item) => (
                                                            <tr key={item.year}>
                                                                <td className={thBase}>{item.year}</td>
                                                                <td className={tdBase}>{item.value}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </section>

                {/* DINAMISMO ECONÓMICO */}
                <section className="py-16 px-6 lg:px-12 bg-[#f9f6f6]">
                    <div className="container mx-auto max-w-6xl space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <Card className="border border-[#ead7d7] bg-white/80">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-3 text-[#3a1d1d]">
                                        <TableIcon className="w-5 h-5 text-[#b11d1d]" />
                                        Expresión productiva observable: dinamismo económico
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-6 text-[#4a2b2b] text-sm leading-relaxed">
                                    <p>
                                        Comparativa del pilar económico del ICN para Río Cuarto, Sarapiquí y Pococí. Los cantones se caracterizan por trayectorias completamente diferentes, lo que refleja un nivel de distinción en la consolidación de la productividad económica.
                                    </p>

                                    <div className="overflow-x-auto">
                                        <table className={tableBase}>
                                            <thead>
                                                <tr>
                                                    <th className={thBase}>Cantón</th>
                                                    <th className={thBase}>Nivel de dinamismo</th>
                                                    <th className={thBase}>Trayectoria</th>
                                                    <th className={thBase}>Expresión productiva</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className={tdBase}>Río Cuarto</td>
                                                    <td className={tdBase}>Bajo - Medio</td>
                                                    <td className={tdBase}>Volátil</td>
                                                    <td className={tdBase}>Emergente y coyuntural</td>
                                                </tr>
                                                <tr>
                                                    <td className={tdBase}>Sarapiquí</td>
                                                    <td className={tdBase}>Bajo - Medio</td>
                                                    <td className={tdBase}>Estable</td>
                                                    <td className={tdBase}>Funcional pero contenida</td>
                                                </tr>
                                                <tr>
                                                    <td className={tdBase}>Pococí</td>
                                                    <td className={tdBase}>Medio - Alto</td>
                                                    <td className={tdBase}>Ascendente</td>
                                                    <td className={tdBase}>Consolidada y expansiva</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="space-y-4 pt-4">
                                        <div>
                                            <p className="font-semibold text-[#3a1d1d]">Río Cuarto</p>
                                            <p>
                                                Presenta un comportamiento inicial con niveles bajos (30.4 puntos) hasta alcanzar máximo histórico en 2023 (55.4 puntos) y retroceso en 2025 (50.4 puntos). Define un periodo de dinamismo emergente pero inestable, altamente sensible a factores coyunturales y con baja resiliencia.
                                            </p>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-[#3a1d1d]">Sarapiquí</p>
                                            <p>
                                                Refleja patrones productivos estables pero estancados. Sus valores oscilan entre 40 y 48 puntos, con tendencias ligeramente ascendentes hasta 2024. Mantiene un nivel funcional pero no evidencia diversificación, lo que sugiere vulnerabilidad a cambios estructurales.
                                            </p>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-[#3a1d1d]">Pococí</p>
                                            <p>
                                                Se consolida como un cantón con dinamismo productivo consolidado; presenciando niveles altos desde 2021 con crecimientos casi continuos. Alcanza máximo histórico en 2025 (71.9 puntos). Evidencia capacidad de sostener su pilar económico y articular dinámicas regionales.
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </section>

                {/* CONCLUSIONES */}
                <section className="py-16 px-6 lg:px-12">
                    <div className="container mx-auto max-w-6xl">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="space-y-6"
                        >
                            <div>
                                <h3 className="text-2xl font-bold text-[#3a1d1d] mb-4">
                                    Síntesis analítica: articulación entre funciones territoriales
                                </h3>
                                <div className="space-y-4 text-[#4a2b2b] leading-relaxed">
                                    <p>
                                        Las dinámicas de competitividad cantonal no dependen únicamente de la activación económica coyuntural; sino de una articulación entre capacidades estructurales, el capital humano y el dinamismo de mercados.
                                    </p>
                                    <p>
                                        <span className="font-semibold">Río Cuarto</span> posee una capacidad estructural catalogada como débil, junto a un capital humano frágil y un dinamismo de mercado que no es sostenible con el tiempo. El cantón requiere consolidación de bases institucionales antes de esperar resultados económicos estables.
                                    </p>
                                    <p>
                                        <span className="font-semibold">Sarapiquí</span> es un territorio con condiciones habilitantes medias y un capital humano funcional; sin embargo, su dinámica productiva es estable pero no refleja escalamientos. La ausencia de fortalecimiento continuo va a limitar la posibilidad de aumentar la productividad territorial.
                                    </p>
                                    <p>
                                        <span className="font-semibold">Pococí</span> demuestra una región con una infraestructura relativamente sólida, con un capital humano en consolidación y un dinamismo económico estructuralmente coherente. El cantón es capaz de transformar condiciones habilitantes en resultados económicos tangibles, aunque su sostenibilidad dependerá de la continuidad de procesos públicos y privados.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
