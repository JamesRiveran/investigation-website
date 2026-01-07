"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { BookOpen, TrendingUp, Users, BarChart3, Zap, Heart, Wifi, Lightbulb, Grid, AlertCircle, Layout, Table as TableIcon, MapPin, Layers } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

const tableBase = "w-full text-sm text-left text-[#2f2a2a] border border-[#e5e7eb]"
const thBase = "bg-[#f8f7f5] px-3 py-2 font-semibold text-[#3a2f2f] border-b border-[#e5e7eb]"
const tdBase = "px-3 py-2 border-b border-[#e5e7eb]"

// ============= MÓDULO I - PERFIL DEMOGRÁFICO =============

const demograficoData = {
    rioCuarto: [
        { year: "2000", total: "7.744", absoluto: "-", intercensal: "-", anual: "-" },
        { year: "2011", total: "11.074", absoluto: "3.330", intercensal: "43.00%", anual: "3.31%" },
        { year: "2022", total: "14.418", absoluto: "3.344", intercensal: "30.20%", anual: "2.43%" }
    ],
    sarapiqui: [
        { year: "2000", total: "45.435", absoluto: "-", intercensal: "-", anual: "-" },
        { year: "2011", total: "57.147", absoluto: "11.712", intercensal: "25.78%", anual: "2.11%" },
        { year: "2022", total: "67.153", absoluto: "10.006", intercensal: "17.51%", anual: "1.48%" }
    ],
    pococi: [
        { year: "2000", total: "103.121", absoluto: "-", intercensal: "-", anual: "-" },
        { year: "2011", total: "125.962", absoluto: "22.841", intercensal: "22.15%", anual: "1.84%" },
        { year: "2022", total: "146.320", absoluto: "20.358", intercensal: "16.16%", anual: "1.37%" }
    ]
}

const cantonProfiles = [
    { code: "RC", name: "Río Cuarto", key: "rioCuarto" },
    { code: "SR", name: "Sarapiquí", key: "sarapiqui" },
    { code: "PO", name: "Pococí", key: "pococi" }
]

const bonoData = {
    rioCuarto: [
        { indicador: "Menores de 15 años (%)", val2000: "39.2", val2011: "29.1" },
        { indicador: "Mayor a 65 años (%)", val2000: "2.8", val2011: "5.1" },
        { indicador: "Índice de Dependencia", val2000: "92.3", val2011: "61.4" },
        { indicador: "Tasa de Envejecimiento", val2000: "7.1", val2011: "17.5" },
        { indicador: "Índice de Oportunidad", val2000: "7.7", val2011: "38.6" }
    ],
    sarapiqui: [
        { indicador: "Menores de 15 años (%)", val2000: "37.6", val2011: "28.4" },
        { indicador: "Mayor a 65 años (%)", val2000: "2.9", val2011: "5.3" },
        { indicador: "Índice de Dependencia", val2000: "89.7", val2011: "60.8" },
        { indicador: "Tasa de Envejecimiento", val2000: "7.7", val2011: "18.7" },
        { indicador: "Índice de Oportunidad", val2000: "10.3", val2011: "39.2" }
    ],
    pococi: [
        { indicador: "Menores de 15 años (%)", val2000: "35.8", val2011: "27.1" },
        { indicador: "Mayor a 65 años (%)", val2000: "3.8", val2011: "6.4" },
        { indicador: "Índice de Dependencia", val2000: "84.6", val2011: "58.7" },
        { indicador: "Tasa de Envejecimiento", val2000: "10.6", val2011: "23.6" },
        { indicador: "Índice de Oportunidad", val2000: "15.4", val2011: "41.3" }
    ]
}

const cantonDescriptions = {

    rioCuarto: {
        crecimiento: "Cantón de crecimiento acelerado. La población pasó de 7.744 en 2000 a 14.418 en 2022, prácticamente duplicándose. El período 2000-2011 mostró un crecimiento de 43.00% (3.31% anual), el más acelerado de todos los cantons, reflejando un proceso de poblamiento reciente. El período 2011-2022 mostró una moderación a 30.20% (2.43% anual), pero mantiene tasas muy superiores al promedio nacional.",
        bono: "Transición demográfica incipiente. El porcentaje de menores de 15 años bajó de 39.2% a 29.1%, reducción de 10.1 pp. La población de 65 años creció de 2.8% a 5.1% (aumento de 2.3 pp). El índice de dependencia disminuyó de 92.3 a 61.4, la reducción más profunda en términos absolutos. El índice de oportunidad aumentó de 7.7 a 38.6, reflejando la transición hacia una estructura más joven-adulta típica de cantones en expansión."
    },
    sarapiqui: {
        crecimiento: "Cantón de crecimiento moderado-acelerado. La población pasó de 45.435 en 2000 a 67.153 en 2022. El período 2000-2011 mostró un crecimiento de 25.78% (2.11% anual), superior al promedio nacional. El período 2011-2022 mostró una desaceleración a 17.51% (1.48% anual), aproximándose al crecimiento promedio nacional, indicando un proceso de maduración poblacional.",
        bono: "Transición demográfica moderada. El porcentaje de menores de 15 años bajó de 37.6% a 28.4%, reducción de 9.2 pp. La población de 65 años creció de 2.9% a 5.3% (aumento de 2.4 pp). El índice de dependencia disminuyó de 89.7 a 60.8, con el índice de oportunidad aumentando de 10.3 a 39.2. El cantón presenta una transición demográfica moderada, típica de territorios consolidados con migración decreciente."
    },

    pococi: {
        crecimiento: "Cantón de crecimiento continuo. La población pasó de 103.121 en 2000 a 146.320 en 2022. El período 2000-2011 mostró un crecimiento de 22.15% (1.84% anual), significativamente superior al promedio nacional. El período 2011-2022 mostró una desaceleración a 16.16% (1.37% anual), aproximándose al crecimiento nacional, indicando consolidación del territorio.",
        bono: "Transición demográfica moderada. El porcentaje de menores de 15 años bajó de 35.8% a 27.1%, reducción de 8.7 pp. La población de 65 años creció de 3.8% a 6.4% (aumento de 2.6 pp). El índice de dependencia disminuyó de 84.6 a 58.7, con el índice de oportunidad aumentando de 15.4 a 41.3. El cantón presenta una transición demográfica característica de territorios consolidados con oportunidades de bono demográfico sustancial."
    }
}

// ============= MÓDULO II - ICC =============

const pillarCardsData = [
    {
        id: "economico",
        title: "Pilar Económico",
        icon: BarChart3,
        summary: "Base productiva, consumo, inversión y articulación sectorial. Determina la capacidad para sostener actividad económica en el tiempo.",
        highlights: [
            "Pococí: valores entre 0.349 y 0.370; crecimiento sostenido con picos en 2015 y 2022.",
            "Sarapiquí: 0.240-0.300; funcional pero sin apalancamiento continuo y alta dependencia primaria.",
            "Río Cuarto: datos limitados en el ICC; se profundiza en el ICN del CPC."
        ]
    },
    {
        id: "empresarial",
        title: "Pilar Empresarial",
        icon: Zap,
        summary: "Complejidad y densidad del tejido productivo. Refleja diversificación, encadenamientos y resiliencia empresarial.",
        highlights: [
            "Pococí y Sarapiquí alcanzan su punto máximo en 2013; luego desaceleran con mayor volatilidad en Sarapiquí.",
            "Río Cuarto cuenta con trayectoria empresarial limitada en el ICC, con análisis ampliado en el Índice de Competitividad Nacional (ICN).",
            "Dependencia primaria alta y necesidad de diversificación para todos los cantons analizados."
        ]
    },
    {
        id: "gobierno",
        title: "Pilar Gobierno",
        icon: Users,
        summary: "Capacidad de captar recursos, gestionarlos y sostener participación ciudadana. Altamente sensible a choques coyunturales.",
        highlights: [
            "Sarapiquí: descensos 2011-2015, mejora 2016-2019 y nueva volatilidad desde 2020.",
            "Pococí: trayectoria más estable; mejora progresiva y punto alto en 2022 sin saltos estructurales.",
            "Río Cuarto: datos no disponibles en ICC; se remiten al Índice de Competitividad Nacional (ICN) para mayor detalle."
        ]
    }
]

// ============= MÓDULO III - ICN =============

const institucionData = {
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
        { year: "2023", value: "56.0" },
        { year: "2024", value: "53.5" },
        { year: "2025", value: "52.8" }
    ],
    pococi: [
        { year: "2021", value: "63.9" },
        { year: "2022", value: "62.0" },
        { year: "2023", value: "58.0" },
        { year: "2024", value: "57.5" },
        { year: "2025", value: "59.1" }
    ]
}

const saludData = {
    rioCuarto: [
        { year: "2021", value: "35.2" },
        { year: "2022", value: "36.1" },
        { year: "2023", value: "38.5" },
        { year: "2024", value: "42.3" },
        { year: "2025", value: "40.1" }
    ],
    sarapiqui: [
        { year: "2021", value: "48.5" },
        { year: "2022", value: "46.3" },
        { year: "2023", value: "47.2" },
        { year: "2024", value: "45.8" },
        { year: "2025", value: "46.9" }
    ],
    pococi: [
        { year: "2021", value: "52.8" },
        { year: "2022", value: "50.5" },
        { year: "2023", value: "52.1" },
        { year: "2024", value: "53.6" },
        { year: "2025", value: "52.3" }
    ]
}

const habilidadesData = {
    rioCuarto: [
        { year: "2021", value: "41.8" },
        { year: "2022", value: "42.7" },
        { year: "2023", value: "44.5" },
        { year: "2024", value: "45.9" },
        { year: "2025", value: "44.2" }
    ],
    sarapiqui: [
        { year: "2021", value: "52.4" },
        { year: "2022", value: "51.8" },
        { year: "2023", value: "52.5" },
        { year: "2024", value: "51.9" },
        { year: "2025", value: "52.6" }
    ],
    pococi: [
        { year: "2021", value: "58.3" },
        { year: "2022", value: "57.2" },
        { year: "2023", value: "58.9" },
        { year: "2024", value: "59.5" },
        { year: "2025", value: "58.7" }
    ]
}

const structuralDescriptions = {
    rioCuarto: {
        instituciones: "Río Cuarto presenta un fortalecimiento notable en su capacidad institucional. Los valores aumentaron de 26.5 en 2021 a 53.5 en 2024, reflejando mejoras significativas en coordinación intersectorial, transparencia y gobernanza local. Este crecimiento acelerado sugiere implementación exitosa de reformas administrativas. Sin embargo, la ligera disminución a 46.8 en 2025 requiere atención sostenida.",
        infraestructura: "La infraestructura de Río Cuarto muestra estabilidad con mejora progresiva. Los valores fluctúan entre 46.0 y 53.0 (2021-2025), indicando cobertura razonable pero con necesidad de inversión en ampliación. Las limitaciones en infraestructura vial, energética y digital representan un cuello de botella para la competitividad del cantón."
    },
    sarapiqui: {
        instituciones: "Sarapiquí presenta una capacidad institucional estable pero sin dinamismo. Los valores oscilan entre 47.6 y 51.8 (2021-2025), indicando estructuras funcionales pero sin avance significativo. La volatilidad limitada sugiere instituciones consolidadas pero con capacidad limitada para innovación y adaptación a nuevos desafíos.",
        infraestructura: "La infraestructura de Sarapiquí es la más desarrollada de los tres cantons, con valores entre 52.8 y 59.6 (2021-2025). Sin embargo, muestra una tendencia decreciente desde 2021, sugiriendo desgaste y necesidad de renovación. La cobertura de servicios básicos es buena, pero la calidad de caminos y conectividad digital requiere modernización."
    },
    pococi: {
        instituciones: "Pococí cuenta con la capacidad institucional más sólida, con valores entre 47.1 y 56.4 (2021-2025). La variabilidad moderada con punto máximo en 2021 sugiere instituciones desarrolladas pero con desafíos de sostenibilidad. Las estructuras administrativas son complejas y especializadas, reflejando un cantón con mayor complejidad institucional.",
        infraestructura: "Pococí presenta la infraestructura más desarrollada, con valores entre 57.5 y 63.9 (2021-2025). Aunque muestra tendencia decreciente desde 2021, mantiene los niveles más altos entre los tres cantons. La inversión histórica en infraestructura vial, energética y de telecomunicaciones ha posicionado al cantón favorablemente, pero requiere mantenimiento y modernización."
    }
}

const humanDescriptions = {
    rioCuarto: {
        salud: "Río Cuarto enfrenta desafíos significativos en capital humano de salud. Los valores aumentan de 35.2 a 42.3 (2021-2024), reflejando mejoras en cobertura de servicios de salud. Sin embargo, los niveles permanecen por debajo de otros cantons, indicando necesidad de mayor inversión en recursos humanos, infraestructura sanitaria y programas de prevención. La leve disminución en 2025 sugiere volatilidad en este sector.",
        habilidades: "Las habilidades y competencias en Río Cuarto muestran mejora sostenida, aumentando de 41.8 a 45.9 (2021-2024). Esto refleja inversión en educación técnica y capacitación laboral. Sin embargo, los niveles permanecen por debajo del promedio de comparación, indicando una brecha en capital humano que limita la productividad y competitividad del cantón."
    },
    sarapiqui: {
        salud: "Sarapiquí presenta una capacidad de salud moderada y estable, oscilando entre 45.8 y 48.5 (2021-2025). Los valores cercanos a 47 sugieren cobertura funcional pero con disparidades internas. El acceso a servicios de salud es irregular en zonas remotas, afectando el bienestar de la población. Existe necesidad de fortalecer la atención especializada y la infraestructura sanitaria.",
        habilidades: "Las habilidades en Sarapiquí mantienen estabilidad sin dinamismo, fluctuando entre 51.8 y 52.6 (2021-2025). Esto sugiere un capital humano funcional pero sin mejora significativa. Los programas de capacitación son limitados y la especialización laboral baja, reflejando dependencia de actividades primarias con bajo valor agregado."
    },
    pococi: {
        salud: "Pococí cuenta con la mejor capacidad de salud entre los tres cantons, con valores entre 50.5 y 53.6 (2021-2025). Esta posición refleja infraestructura sanitaria más desarrollada, mayor disponibilidad de profesionales de salud y programas de prevención más robustos. Sin embargo, la tendencia alcista indica que aún hay espacio para mejora en especialización y eficiencia.",
        habilidades: "Pococí presenta el capital humano de habilidades más desarrollado, con valores entre 57.2 y 59.5 (2021-2025). Esto refleja educación técnica de calidad, programas de capacitación efectivos y una fuerza laboral más especializada. La estabilidad con leve tendencia alcista sugiere inversión sostenida en desarrollo de competencias laborales."
    }
}

export default function InvestigacionPage() {
    const [selectedCanton, setSelectedCanton] = useState<string>("rioCuarto")
    const [structuralView, setStructuralView] = useState<"instituciones" | "infraestructura">("instituciones")
    const [humanView, setHumanView] = useState<"salud" | "habilidades">("salud")
    const [currentCantonICN, setCurrentCantonICN] = useState<"rioCuarto" | "sarapiqui" | "pococi">("rioCuarto")

    const currentData = demograficoData[selectedCanton as keyof typeof demograficoData]
    const currentBonoData = bonoData[selectedCanton as keyof typeof bonoData]
    const currentDescriptions = cantonDescriptions[selectedCanton as keyof typeof cantonDescriptions]

    return (
        <div className="min-h-screen bg-white">
            <Navigation />

            {/* ============= MÓDULO I - PERFIL DEMOGRÁFICO ============= */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative py-16 md:py-24 bg-gradient-to-b from-[#fdf7f7] to-white"
            >
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            <h1 className="text-3xl md:text-5xl font-bold text-[#3a1d1d] mb-4">
                                Módulo I: Perfil Demográfico
                            </h1>
                            <p className="text-[#4a2b2b] text-lg max-w-3xl mx-auto">
                                Análisis de crecimiento poblacional y estructura etaria en Río Cuarto, Sarapiquí y Pococí (2000-2022)
                            </p>
                        </motion.div>
                    </div>

                    {/* Canton Selector */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="mb-8"
                    >
                        <Card className="bg-white border-[#ead7d7] shadow-lg">
                            <CardHeader>
                                <CardTitle className="text-[#3a1d1d] flex items-center gap-2">
                                    <MapPin className="text-[#b11d1d]" />
                                    Selecciona un cantón
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {cantonProfiles.map((profile) => (
                                        <Button
                                            key={profile.key}
                                            onClick={() => setSelectedCanton(profile.key)}
                                            className={`px-4 py-2 rounded-lg font-semibold transition-all ${selectedCanton === profile.key
                                                ? "bg-gradient-to-r from-[#b11d1d] to-[#852c2c] text-white shadow-lg"
                                                : "bg-white border-2 border-[#ead7d7] text-[#3a1d1d] hover:border-[#b11d1d]"
                                                }`}
                                        >
                                            {profile.name}
                                        </Button>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Demographic Growth Table */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="mb-8"
                    >
                        <Card className="bg-white border-[#ead7d7] shadow-lg">
                            <CardHeader>
                                <CardTitle className="text-[#3a1d1d] flex items-center gap-2">
                                    <TrendingUp className="text-[#b11d1d]" />
                                    Crecimiento Demográfico
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="overflow-x-auto">
                                    <table className={tableBase}>
                                        <thead>
                                            <tr>
                                                <th className={thBase}>Año</th>
                                                <th className={thBase}>Población Total</th>
                                                <th className={thBase}>Crecimiento Absoluto</th>
                                                <th className={thBase}>Crecimiento Intercensal</th>
                                                <th className={thBase}>Tasa Anual</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {currentData?.map((row, idx) => (
                                                <tr key={idx} className="hover:bg-[#f9f6f6] transition">
                                                    <td className={tdBase}>{row.year}</td>
                                                    <td className={tdBase}>{row.total}</td>
                                                    <td className={tdBase}>{row.absoluto}</td>
                                                    <td className={tdBase}>{row.intercensal}</td>
                                                    <td className={tdBase}>{row.anual}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                {currentDescriptions && (
                                    <div className="mt-6 p-4 bg-[#fdf7f7] border-l-4 border-[#b11d1d] rounded">
                                        <p className="text-[#4a2b2b] text-sm leading-relaxed">
                                            {currentDescriptions.crecimiento}
                                        </p>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Demographic Dividend Table */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <Card className="bg-white border-[#ead7d7] shadow-lg">
                            <CardHeader>
                                <CardTitle className="text-[#3a1d1d] flex items-center gap-2">
                                    <Users className="text-[#b11d1d]" />
                                    Estructura Etaria y Bono Demográfico (2000-2011)
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="overflow-x-auto">
                                    <table className={tableBase}>
                                        <thead>
                                            <tr>
                                                <th className={thBase}>Indicador</th>
                                                <th className={thBase}>2000</th>
                                                <th className={thBase}>2011</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {currentBonoData?.map((row, idx) => (
                                                <tr key={idx} className="hover:bg-[#f9f6f6] transition">
                                                    <td className={`${tdBase} font-semibold`}>{row.indicador}</td>
                                                    <td className={tdBase}>{row.val2000}</td>
                                                    <td className={tdBase}>{row.val2011}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                {currentDescriptions && (
                                    <div className="mt-6 p-4 bg-[#fdf7f7] border-l-4 border-[#b11d1d] rounded">
                                        <p className="text-[#4a2b2b] text-sm leading-relaxed">
                                            {currentDescriptions.bono}
                                        </p>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </motion.section>

            {/* ============= MÓDULO II - ICC ============= */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative py-16 md:py-24 bg-gradient-to-b from-white to-[#fdf7f7]"
            >
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            <h1 className="text-3xl md:text-5xl font-bold text-[#3a1d1d] mb-4">
                                Módulo II: Índice de Competitividad Cantonal
                            </h1>
                            <p className="text-[#4a2b2b] text-lg max-w-3xl mx-auto">
                                Análisis de los pilares de competitividad en Río Cuarto, Sarapiquí y Pococí
                            </p>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {pillarCardsData.map((pillar, idx) => {
                            const IconComponent = pillar.icon
                            return (
                                <motion.div
                                    key={pillar.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <Card className="h-full bg-white border-[#ead7d7] shadow-lg hover:shadow-xl transition-shadow">
                                        <CardHeader>
                                            <div className="flex items-start justify-between">
                                                <CardTitle className="text-[#3a1d1d]">{pillar.title}</CardTitle>
                                                <div className="p-2 bg-gradient-to-br from-[#ead7d7] to-[#d9c5c5] rounded-lg">
                                                    <IconComponent className="w-6 h-6 text-[#b11d1d]" />
                                                </div>
                                            </div>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            <p className="text-[#4a2b2b] text-sm font-semibold">
                                                {pillar.summary}
                                            </p>
                                            <ul className="space-y-2">
                                                {pillar.highlights.map((highlight, i) => (
                                                    <li key={i} className="text-xs text-[#5b3a3a] flex items-start gap-2">
                                                        <span className="text-[#b11d1d] font-bold mt-0.5">•</span>
                                                        <span>{highlight}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            )
                        })}
                    </div>

                    <div className="flex justify-center">
                        <Button className="px-6 py-3 rounded-lg font-semibold bg-gradient-to-r from-[#b11d1d] to-[#852c2c] text-white shadow-lg hover:shadow-xl transition">
                            <Link href="/indices/icc">Ver Módulo II completo</Link>
                        </Button>
                    </div>
                </div>
            </motion.section>

            {/* ============= MÓDULO III - ICN ============= */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative py-16 md:py-24 bg-gradient-to-b from-[#fdf7f7] to-white"
            >
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            <h1 className="text-3xl md:text-5xl font-bold text-[#3a1d1d] mb-4">
                                Módulo III: Índice de Competitividad Nacional
                            </h1>
                            <p className="text-[#4a2b2b] text-lg max-w-3xl mx-auto">
                                Análisis de capacidad institucional y capital humano en tres cantones
                            </p>
                        </motion.div>
                    </div>

                    {/* Canton Selector for ICN */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="mb-8"
                    >
                        <Card className="bg-white border-[#ead7d7] shadow-lg">
                            <CardHeader>
                                <CardTitle className="text-[#3a1d1d] flex items-center gap-2">
                                    <MapPin className="text-[#b11d1d]" />
                                    Selecciona un cantón
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {[
                                        { name: "Río Cuarto", key: "rioCuarto" },
                                        { name: "Sarapiquí", key: "sarapiqui" },
                                        { name: "Pococí", key: "pococi" }
                                    ].map((profile) => (
                                        <Button
                                            key={profile.key}
                                            onClick={() => setCurrentCantonICN(profile.key as any)}
                                            className={`px-4 py-2 rounded-lg font-semibold transition-all ${currentCantonICN === profile.key
                                                ? "bg-gradient-to-r from-[#b11d1d] to-[#852c2c] text-white shadow-lg"
                                                : "bg-white border-2 border-[#ead7d7] text-[#3a1d1d] hover:border-[#b11d1d]"
                                                }`}
                                        >
                                            {profile.name}
                                        </Button>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Structural Capacity Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="mb-8"
                    >
                        <Card className="bg-white border-[#ead7d7] shadow-lg">
                            <CardHeader>
                                <CardTitle className="text-[#3a1d1d] flex items-center gap-2">
                                    <Layers className="text-[#b11d1d]" />
                                    Capacidad Estructural
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex gap-2 mb-6">
                                    <Button
                                        onClick={() => setStructuralView("instituciones")}
                                        className={`px-4 py-2 rounded-lg font-semibold transition-all ${structuralView === "instituciones"
                                            ? "bg-gradient-to-r from-[#b11d1d] to-[#852c2c] text-white shadow-lg"
                                            : "bg-white border-2 border-[#ead7d7] text-[#3a1d1d] hover:border-[#b11d1d]"
                                            }`}
                                    >
                                        Instituciones
                                    </Button>
                                    <Button
                                        onClick={() => setStructuralView("infraestructura")}
                                        className={`px-4 py-2 rounded-lg font-semibold transition-all ${structuralView === "infraestructura"
                                            ? "bg-gradient-to-r from-[#b11d1d] to-[#852c2c] text-white shadow-lg"
                                            : "bg-white border-2 border-[#ead7d7] text-[#3a1d1d] hover:border-[#b11d1d]"
                                            }`}
                                    >
                                        Infraestructura
                                    </Button>
                                </div>

                                <div className="overflow-x-auto mb-6">
                                    <table className={tableBase}>
                                        <thead>
                                            <tr>
                                                <th className={thBase}>Año</th>
                                                <th className={thBase}>Valor</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {(structuralView === "instituciones"
                                                ? institucionData[currentCantonICN]
                                                : infraData[currentCantonICN]
                                            )?.map((row, idx) => (
                                                <tr key={idx} className="hover:bg-[#f9f6f6] transition">
                                                    <td className={tdBase}>{row.year}</td>
                                                    <td className={tdBase}>{row.value}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                                <div className="p-4 bg-[#fdf7f7] border-l-4 border-[#b11d1d] rounded">
                                    <p className="text-[#4a2b2b] text-sm leading-relaxed">
                                        {structuralDescriptions[currentCantonICN][structuralView]}
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Human Capital Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <Card className="bg-white border-[#ead7d7] shadow-lg">
                            <CardHeader>
                                <CardTitle className="text-[#3a1d1d] flex items-center gap-2">
                                    <Users className="text-[#b11d1d]" />
                                    Capital Humano
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex gap-2 mb-6">
                                    <Button
                                        onClick={() => setHumanView("salud")}
                                        className={`px-4 py-2 rounded-lg font-semibold transition-all ${humanView === "salud"
                                            ? "bg-gradient-to-r from-[#b11d1d] to-[#852c2c] text-white shadow-lg"
                                            : "bg-white border-2 border-[#ead7d7] text-[#3a1d1d] hover:border-[#b11d1d]"
                                            }`}
                                    >
                                        Salud
                                    </Button>
                                    <Button
                                        onClick={() => setHumanView("habilidades")}
                                        className={`px-4 py-2 rounded-lg font-semibold transition-all ${humanView === "habilidades"
                                            ? "bg-gradient-to-r from-[#b11d1d] to-[#852c2c] text-white shadow-lg"
                                            : "bg-white border-2 border-[#ead7d7] text-[#3a1d1d] hover:border-[#b11d1d]"
                                            }`}
                                    >
                                        Habilidades y Competencias
                                    </Button>
                                </div>

                                <div className="overflow-x-auto mb-6">
                                    <table className={tableBase}>
                                        <thead>
                                            <tr>
                                                <th className={thBase}>Año</th>
                                                <th className={thBase}>Valor</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {(humanView === "salud"
                                                ? saludData[currentCantonICN]
                                                : habilidadesData[currentCantonICN]
                                            )?.map((row, idx) => (
                                                <tr key={idx} className="hover:bg-[#f9f6f6] transition">
                                                    <td className={tdBase}>{row.year}</td>
                                                    <td className={tdBase}>{row.value}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                                <div className="p-4 bg-[#fdf7f7] border-l-4 border-[#b11d1d] rounded">
                                    <p className="text-[#4a2b2b] text-sm leading-relaxed">
                                        {humanDescriptions[currentCantonICN][humanView]}
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </motion.section>

            <div className="pb-16 md:pb-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex justify-center">
                        <Button className="px-6 py-3 rounded-lg font-semibold bg-gradient-to-r from-[#b11d1d] to-[#852c2c] text-white shadow-lg hover:shadow-xl transition">
                            <Link href="/indices/icn">Ver Módulo III completo</Link>
                        </Button>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}
