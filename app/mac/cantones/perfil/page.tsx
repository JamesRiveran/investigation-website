"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { BookOpen, Layers, TrendingUp, Users, MapPin } from "lucide-react"
import { useState } from "react"

const tableBase = "w-full text-sm text-left text-[#2f2a2a] border border-[#e5e7eb]"
const thBase = "bg-[#f8f7f5] px-3 py-2 font-semibold text-[#3a2f2f] border-b border-[#e5e7eb]"
const tdBase = "px-3 py-2 border-b border-[#e5e7eb]"

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
        crecimiento: "Existen dos tipos de datos: serie demográfica pre-cantonal (como distrito de Grecia) y serie oficial del cantonato a partir de 2017. Apartado de crecimiento abarca etapa distrital 2000-2011 y etapa cantonal con datos 2022. Población total pasó de 7.744 en 2000 a 11.074 en 2011 y 14.418 en 2022. Crecimiento absoluto de 3.330 personas entre 2000-2011 y 3.344 entre 2011-2022. Tasa de crecimiento intercensal de 43.00% entre 2000-2011, reduciendo a 30.20% para 2011-2022. Tasa de crecimiento promedio anual de 3.31% (2000-2011) a 2.43% (2011-2022). Presenta crecimiento constante entre censos aunque con desaceleración en tasa anual. Porcentaje relativamente alto. Territorio de atracción migratoria por conexión con región norte del país y expansión agrícola. Crecimiento no se debe específicamente a estatus oficial de cantón, sino refleja necesidad de autonomía administrativa, fallas en modelo distrital para gestión de crecimiento y presión de población en ordenamiento territorial, servicios agua, vivienda e infraestructura vial.",
        bono: "Datos limitados por condición reciente de cantón (2017). Información de periodo pre-cantonal como distrito de Grecia."
    },
    sarapiqui: {
        crecimiento: "Demografía presentó crecimiento absoluto de 11.712 personas entre 2000-2011 para total de 57.147. Para 2022 número elevó a 67.153 con crecimiento absoluto de 10.006 entre 2011-2022. Tasa de crecimiento intercensal de Sarapiquí se redujo de 25.78% entre 2000-2011 a 17.51% entre 2011-2022. Tasa de crecimiento promedio anual se redujo de 2.11% (2000-2011) a 1.48% (2011-2022). Enfrentó proceso de desaceleración catalogado como mayor freno relativo de crecimiento entre cantones analizados. Base poblacional relativamente baja pero presencia crecimiento fuerte acompañado de escenario territorial agroexportador y eco-turístico. Región es corredor entre Caribe y Norte de Costa Rica. Datos plantean necesidad de comprender si desaceleración se debe a déficit de servicios, conectividad limitada, brechas de capital humano, saturación de empleo agrícola o crecimiento ambientalmente restringido. Factores que analizan intensidad de proceso migratorio.",
        bono: "Población presenta dinámica moderada con disminución de porcentaje de población joven de forma lenta pero con incremento relevante para población en edad productiva. Entre 2000-2011 población joven se reduce 8 puntos porcentuales, mientras grupo etario 20-64 años incrementa cerca de 7%. Cantón entró en fase de consolidación temprana de bono demográfico. Índice de dependencia disminuye de 107 a 88 por cada 100 PEA. Envejecimiento bajo pero con clara aceleración: aproximadamente 7 personas adultas mayores por cada 100 jóvenes en 2000, alcanzando 11 en 2011. Demografía continúa siendo joven pero enfrenta proceso de transición. Potencial de servicios logísticos, sector agroindustrial, turismo de naturaleza y economía verde clave para encadenamientos productivos. Factor esencial es absorción de población joven en empleos formales; de lo contrario riesgos de informalidad e migración interna."
    },
    pococi: {
        crecimiento: "Entre 2000-2022 Pococí contabilizó crecimiento absoluto de 43.199 personas presenciando aumento poblacional fuerte y sostenido en 22 años. Población total pasó de 103.121 en 2000 a 125.962 en 2011 y 146.320 en 2022. Crecimiento absoluto de 22.841 entre 2000-2011 y 20.358 entre 2011-2022. Tasa de crecimiento intercensal de 22.15% entre 2000-2011 y 16.16% entre 2011-2022. Tasa de crecimiento promedio anual de 1.84% entre 2000-2011 y 1.37% entre 2011-2022. Cantón ha presentado desaceleración. No es cantón que crece al mismo ritmo que 2000-2011; sin embargo sigue manteniendo potencial dinámico. Posición geográfica estratégica para Caribe por alta conectividad logística a través de Carretera Nacional Braulio Carrillo (Ruta 32) y cercanía a Terminal de Contenedores de Moín (TCM) en Limón. Base sólida en sector agroindustrial conformado por banano y piña. Potencial dinámico en transporte, almacenamiento, comercio mayorista, servicios de apoyo a exportación y papel turístico por conectividades como Tortuguero. Desaceleración puede advertir riesgos como congestión urbana, déficit viviendas, presión ambiental o desigualdad territorial interna.",
        bono: "Fase de bono demográfico moderado. Entre 2000 y 2011 la población joven se reduce cerca de 8% mientras que la población en edad productiva aumenta más de 6%. Índice de dependencia desciende de manera importante y la tasa de envejecimiento aumenta, aunque sin convertirse en factor crítico. La estructura etaria favorece la absorción laboral y la consolidación de encadenamientos productivos si existen condiciones para empleo formal y servicios."
    }
}

const cantonProfiles = [
    { code: "216", name: "Río Cuarto", key: "rioCuarto" },
    { code: "410", name: "Sarapiquí", key: "sarapiqui" },
    { code: "702", name: "Pococí", key: "pococi" }
]

export default function PerfilPage() {
    const [selectedCanton, setSelectedCanton] = useState<string>("rioCuarto")

    const currentData = demograficoData[selectedCanton as keyof typeof demograficoData]
    const currentBono = bonoData[selectedCanton as keyof typeof bonoData]
    const currentDesc = cantonDescriptions[selectedCanton as keyof typeof cantonDescriptions]

    return (
        <div className="min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-1">
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
                                <span>Módulo I · Perfil General de los Cantones</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                                Análisis Demográfico y Estructura Poblacional
                            </h1>
                            <p className="text-lg md:text-xl max-w-4xl mx-auto text-white/85">
                                Dinámicas poblacionales, crecimiento demográfico y estructura etaria de tres cantones en estudio, 2000-2022
                            </p>
                            <div className="flex gap-3 justify-center flex-wrap mt-4">
                                <Badge className="bg-white/20 text-white border border-white/30">3 cantones</Badge>
                                <Badge className="bg-white/20 text-white border border-white/30">Datos INEC 2000-2022</Badge>
                                <Badge className="bg-white/20 text-white border border-white/30">MAC</Badge>
                            </div>
                        </motion.div>
                    </div>
                </section>

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
                                        <TrendingUp className="w-5 h-5 text-[#b11d1d]" />
                                        Marco Analítico del MAC
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-3 text-[#4a2b2b] leading-relaxed">
                                    <p>
                                        El Mecanismo de Análisis Cantonal (MAC) gestiona la información por medio de una matriz que define una lógica analítica entre diferentes preguntas de investigación que contribuyen a la construcción de política pública e internacionalización. El Módulo I busca medir aspectos como la expansión territorial, las dinámicas diferenciales en la demografía de los cantones y la proyección de la demanda de servicios.
                                    </p>
                                    <p>
                                        La matriz se encuentra conformada por la dimensión demográfica, la cual clasifica dimensiones, indicadores, definiciones operativas y unidades de análisis. La construcción de la información se ha estructurado por medio de información facilitada por el Instituto Nacional de Estadística y Censos (INEC) de Costa Rica, basada en censos 2000, 2011 y 2022.
                                    </p>
                                    <p className="text-sm italic text-[#5b3a3a]">
                                        Nota: El censo 2022 alcanzó aproximadamente el 48.3% de cobertura total del territorio nacional. Factores como la emergencia sanitaria COVID-19, ausencia de docentes y personal del Ministerio Nacional, e implementación de censo digital sin condiciones suficientes conllevaron a evaluación con datos improbables y poco representativos. Los datos del censo 2022 corresponden a estadísticas aproximadas.
                                    </p>
                                    <p className="text-sm italic text-[#5b3a3a]">
                                        Los datos correspondientes al cantón de Río Cuarto pueden ser insuficientes al considerar que obtiene oficialmente su categoría cantonal hasta 2017 por medio de la Ley No. 9440, limitando obtención de información verídica de diferentes instancias u organismos nacionales e internacionales.
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
                            <Card className="border border-[#ead7d7] bg-[#fdf7f7]">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-3 text-[#3a1d1d]">
                                        <MapPin className="w-5 h-5 text-[#b11d1d]" />
                                        Seleccionar Cantón
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap gap-2">
                                        {cantonProfiles.map((canton) => (
                                            <Button
                                                key={canton.key}
                                                size="sm"
                                                className={`rounded-full px-4 ${selectedCanton === canton.key
                                                    ? "bg-gradient-to-r from-[#b11d1d] to-[#852c2c] text-white"
                                                    : "bg-white border border-[#ead7d7] text-[#3a1d1d] hover:bg-[#fdf7f7]"
                                                    }`}
                                                onClick={() => setSelectedCanton(canton.key)}
                                            >
                                                {canton.name}
                                            </Button>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <Card className="border border-[#ead7d7] bg-white/80">
                                <CardHeader>
                                    <CardTitle className="text-[#3a1d1d]">
                                        {cantonProfiles.find(c => c.key === selectedCanton)?.name} - Crecimiento Demográfico
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4 text-[#4a2b2b] text-sm leading-relaxed">
                                    <p>
                                        {typeof currentDesc === "object" && !Array.isArray(currentDesc)
                                            ? currentDesc.crecimiento
                                            : ""}
                                    </p>
                                    <div className="overflow-x-auto">
                                        <table className={tableBase}>
                                            <thead>
                                                <tr>
                                                    <th className={thBase}>Año</th>
                                                    <th className={thBase}>Población Total</th>
                                                    <th className={thBase}>Crecimiento Absoluto</th>
                                                    <th className={thBase}>Tasa Intercensal</th>
                                                    <th className={thBase}>Tasa Anual</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {currentData.map((row) => (
                                                    <tr key={row.year}>
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
                                </CardContent>
                            </Card>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <Card className="border border-[#ead7d7] bg-white/80">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-3 text-[#3a1d1d]">
                                        <Users className="w-5 h-5 text-[#b11d1d]" />
                                        {cantonProfiles.find(c => c.key === selectedCanton)?.name} - Estructura Etaria y Bono Demográfico
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4 text-[#4a2b2b] text-sm leading-relaxed">
                                    <p>
                                        {typeof currentDesc === "object" && !Array.isArray(currentDesc)
                                            ? currentDesc.bono
                                            : ""}
                                    </p>
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
                                                {currentBono.map((row, idx) => (
                                                    <tr key={idx}>
                                                        <td className={tdBase}>{row.indicador}</td>
                                                        <td className={tdBase}>{row.val2000}</td>
                                                        <td className={tdBase}>{row.val2011}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </section>


            </main>
            <Footer />
        </div>
    )
}
