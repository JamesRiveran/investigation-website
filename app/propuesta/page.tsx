"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Target, Users, TrendingUp, Lightbulb } from "lucide-react"
import { motion } from "framer-motion"

const projects = [
    {
        code: "0096-23",
        title:
            "Comercio de servicios y competitividad: una aproximación al potencial de desarrollo logístico y turístico en los cantones de Pococí, Río Cuarto y Sarapiquí, Costa Rica",
        responsible: "Alonso Ubieta, Suyen",
        area: "Investigación",
        type: "Aplicada",
        approach: "Multidisciplinar",
        contribution: "Agenda conjunta con UNA Campus Sarapiquí. Área: emprendedurismo y desarrollo comercial",
        resumen: [
            "Estudiar potencialidades competitivas que el comercio de servicios tendría en el desarrollo de territorios rurales",
            "Identificación de capacidades competitivas territoriales en un área emergente como el comercio de servicios",
            "Permite trabajar potencialidades y cuellos de botella",
            "Alternativa para la reactivación económica y nuevas fuentes de empleo",
            "Marco conceptual del comercio de servicios",
            "Restricciones de infraestructura en el Índice de Desarrollo Cantonal (red y conectividad vial)",
            "Fortalecimiento de otros sectores e iniciativas como TELCA",
        ],
        ods: [
            "ODS 8: Promover el crecimiento económico sostenido, inclusivo y sostenible, el empleo pleno y productivo y el trabajo decente para todos",
            "ODS 10: Reducir la desigualdad en los países y entre ellos",
        ],
        question:
            "¿Cómo las condiciones territoriales potencian el comercio nacional e internacional de servicios turísticos y logísticos e inciden en el desarrollo local?",
        objectives: [
            "Determinar la oferta de servicios turísticos en los cantones de Pococí, Río Cuarto y Sarapiquí para la definición del estado actual en la materia",
            "Generar un estado de la situación de la infraestructura vial y de conectividad e iniciativas regionales en los cantones para la identificación de elementos competitivos",
            "Analizar la institucionalidad vigente para el desarrollo de los servicios en los cantones seleccionados",
            "Estimar la oferta potencial para el comercio de servicios de logística nacional e internacional y turismo",
            "Proponer recomendaciones de política pública nacional y regional para el desarrollo de una agenda de competitividad desde el comercio de servicios",
        ],
    },
    {
        code: "0099-23",
        title:
            "Descifrando las fuentes de competitividad territorial y comercial que impactan el desarrollo local de los cantones de Pococí, Río Cuarto y Sarapiquí: una visión desde el desarrollo endógeno",
        responsible: "Arce Alvarado, Randall",
        area: "Investigación, Docencia",
        type: "Aplicada",
        approach: "Multidisciplinar",
        contribution:
            "Trabajo en Conjunto: CINPE-UNA Campus Sarapiquí. Núcleo: Globalización y comercio. Área: emprendedurismo y desarrollo comercial",
        resumen: [
            "Limitantes en aspectos cruciales para el desarrollo local y la sostenibilidad",
            "Posiciones desfavorables en el Índice de Competitividad Cantonal",
            "Análisis de factores que se encuentran detrás de la competitividad regional",
            "Análisis y potencialización de componentes de articulación institucional de actores locales",
            "Gestión de desarrollo territorial, incentivos y condiciones de emprendedurismo",
            "Compatibilidad entre demandas del mercado laboral y formación a nivel de educación técnica y universitaria",
            "Potenciación de Ciencia y tecnología y la IED",
        ],
        ods: [
            "ODS 8: Promover el crecimiento económico sostenido, inclusivo y sostenible, el empleo pleno y productivo y el trabajo decente para todos",
            "ODS 10: Reducir la desigualdad en los países y entre ellos",
        ],
        question: "¿Cuáles son las fuentes de competitividad territorial y comercial que impactan el desarrollo local?",
        objectives: [
            "Analizar la evolución de la institucionalidad y el capital social como factores determinantes de la competitividad territorial",
            "Estudiar la situación actual y tendencias de los factores productivos y de comercio exterior y su relación con la competitividad regional",
            "Determinar el estado actual del capital físico y natural en los cantones en estudio",
            "Diagnosticar las fuentes del desarrollo endógeno en los cantones bajo análisis",
            "Investigar el grado de articulación existente entre las municipalidades e instituciones públicas que promueven acciones potenciadoras del desarrollo local",
        ],
    },
]

export default function PropuestaPage() {
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
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">Proyectos en Ejecución</h1>
                            <p className="text-lg md:text-xl max-w-3xl mx-auto text-white/90">
                                Investigación aplicada para el fortalecimiento de la competitividad territorial en las regiones Huetar
                                Norte y Huetar Caribe
                            </p>
                        </motion.div>
                    </div>
                </section>

                <section className="py-20 px-6 lg:px-12 bg-gradient-to-b from-white to-gray-50">
                    <div className="container mx-auto max-w-7xl">
                        <div className="space-y-12">
                            {projects.map((project, index) => (
                                <motion.div
                                    key={project.code}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <Card className="group hover:shadow-2xl transition-all duration-500 border border-[#852C2C]/10 bg-white overflow-hidden">
                                        <div className="bg-gradient-to-r from-[#852C2C] via-[#5B2D2D] to-[#B11D1D] p-8 relative overflow-hidden">
                                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.1),transparent_60%)]" />
                                            <div className="relative">
                                                <div className="flex flex-wrap items-center gap-3 mb-3">
                                                    <Badge className="bg-white text-[#B11D1D] font-bold shadow-md">Código SIA: {project.code}</Badge>
                                                    <Badge variant="outline" className="bg-white/10 text-white border-white/40 backdrop-blur">
                                                        {project.type}
                                                    </Badge>
                                                    <Badge variant="outline" className="bg-white/10 text-white border-white/40 backdrop-blur">
                                                        {project.approach}
                                                    </Badge>
                                                </div>
                                                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">{project.title}</h2>
                                                <div className="flex flex-wrap gap-4 text-sm text-white/90">
                                                    <span>
                                                        <strong>Responsable:</strong> {project.responsible}
                                                    </span>
                                                    <span>
                                                        <strong>Área:</strong> {project.area}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <CardContent className="p-8 lg:p-10 space-y-8">
                                            <div>
                                                <h3 className="font-bold text-xl text-[#332222] mb-4 flex items-center gap-3">
                                                    <div className="p-2 bg-[#B11D1D]/10 rounded-lg">
                                                        <Lightbulb className="h-5 w-5 text-[#B11D1D]" />
                                                    </div>
                                                    Resumen
                                                </h3>
                                                <ul className="space-y-2">
                                                    {project.resumen.map((item, idx) => (
                                                        <li key={idx} className="flex items-start gap-3 text-[#332929]/80 leading-relaxed">
                                                            <CheckCircle2 className="h-5 w-5 text-[#B11D1D] mt-0.5 flex-shrink-0" />
                                                            <span>{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div className="pt-6 border-t border-[#852C2C]/10">
                                                <h3 className="font-bold text-xl text-[#332222] mb-4 flex items-center gap-3">
                                                    <div className="p-2 bg-[#B11D1D]/10 rounded-lg">
                                                        <Users className="h-5 w-5 text-[#B11D1D]" />
                                                    </div>
                                                    Objetivos de Desarrollo Sostenible
                                                </h3>
                                                <div className="space-y-2">
                                                    {project.ods.map((ods, idx) => (
                                                        <p key={idx} className="flex items-start gap-3 text-[#332929]/80 leading-relaxed">
                                                            <TrendingUp className="h-5 w-5 text-[#B11D1D] mt-0.5 flex-shrink-0" />
                                                            <span>{ods}</span>
                                                        </p>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="pt-6 border-t border-[#852C2C]/10 bg-gradient-to-br from-[#852C2C]/5 to-[#B11D1D]/5 -mx-8 lg:-mx-10 px-8 lg:px-10 py-6 rounded-lg">
                                                <h3 className="font-bold text-lg text-[#332222] mb-3">Pregunta de Investigación</h3>
                                                <p className="text-[#332929]/90 italic text-lg leading-relaxed">{project.question}</p>
                                            </div>

                                            <div>
                                                <h3 className="font-bold text-xl text-[#332222] mb-4 flex items-center gap-3">
                                                    <div className="p-2 bg-[#B11D1D]/10 rounded-lg">
                                                        <Target className="h-5 w-5 text-[#B11D1D]" />
                                                    </div>
                                                    Objetivos Específicos
                                                </h3>
                                                <ul className="space-y-3">
                                                    {project.objectives.map((objective, idx) => (
                                                        <li key={idx} className="flex items-start gap-3 text-[#332929]/80 leading-relaxed">
                                                            <div className="flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br from-[#852C2C] to-[#B11D1D] text-white font-bold text-sm flex-shrink-0 mt-0.5 shadow-md">
                                                                {idx + 1}
                                                            </div>
                                                            <span>{objective}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div className="pt-6 border-t border-[#852C2C]/10">
                                                <div className="bg-gradient-to-br from-[#852C2C]/5 to-[#B11D1D]/5 rounded-lg p-5 border border-[#852C2C]/10">
                                                    <h4 className="font-semibold text-[#5B2D2D] mb-2 text-sm uppercase tracking-wide">Aporte al Programa</h4>
                                                    <p className="text-sm text-[#332929]/80 leading-relaxed">{project.contribution}</p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-20 px-6 lg:px-12 bg-gradient-to-b from-gray-50 to-white border-t border-[#E5E5E5]">
                    <div className="container mx-auto max-w-6xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl font-bold text-[#332222] mb-12 text-center">Contexto Regional</h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <Card className="bg-white border border-[#852C2C]/10 hover:shadow-lg transition-all duration-300">
                                    <CardHeader>
                                        <CardTitle className="text-[#B11D1D] text-2xl">Justificación</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-3 text-[#332929]/80 leading-relaxed">
                                        <p>• Regiones más rezagadas con respecto a la pobreza</p>
                                        <p>
                                            • Iniciativa de desarrollo regional para las RHN y RHC: TELCA impulsa agricultura, turismo,
                                            artesanía y comercio
                                        </p>
                                        <p>• Creación de patios intermodales en Moín, Japdeva, Siquirres, Leesville, Chilamate y Muelle</p>
                                        <p>• Programa Nacional de Clústers direccionado a potenciar actividades de servicio</p>
                                        <p>• Fortaleza competitiva determinada por factores productivos</p>
                                    </CardContent>
                                </Card>

                                <Card className="bg-white border border-[#852C2C]/10 hover:shadow-lg transition-all duration-300">
                                    <CardHeader>
                                        <CardTitle className="text-[#B11D1D] text-2xl">Acción Estratégica</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-3 text-[#332929]/80 leading-relaxed">
                                        <p className="font-semibold">
                                            Desarrollar iniciativas de transferencia y vinculación con participación de diversos sectores
                                        </p>
                                        <p className="mt-4">
                                            Los proyectos buscan generar propuestas concretas de mejoras a nivel local y nacional, trabajando
                                            en colaboración con:
                                        </p>
                                        <p>• Municipalidades</p>
                                        <p>• Instituciones públicas</p>
                                        <p>• Sector privado</p>
                                        <p>• Comunidades locales</p>
                                    </CardContent>
                                </Card>
                            </div>
                        </motion.div>
                    </div>
                </section>

                <section className="py-20 px-6 lg:px-12">
                    <div className="container mx-auto max-w-5xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <h2 className="text-4xl font-bold text-[#332222] mb-6">Cantones bajo Estudio</h2>
                            <p className="text-lg text-[#332929]/80 mb-12 leading-relaxed">
                                Los proyectos se enfocan en tres cantones estratégicos que comparten similitudes en debilidades y
                                fortalezas relacionadas a la prestación del comercio de servicios
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <Card className="bg-white border border-[#852C2C]/10 hover:border-[#B11D1D]/30 hover:shadow-xl transition-all duration-300">
                                    <CardContent className="p-8 text-center">
                                        <div className="text-5xl font-bold bg-gradient-to-br from-[#852C2C] to-[#B11D1D] bg-clip-text text-transparent mb-3">Pococí</div>
                                        <p className="text-[#332222] font-medium text-sm uppercase tracking-wide">Región Huetar Caribe</p>
                                    </CardContent>
                                </Card>
                                <Card className="bg-white border border-[#852C2C]/10 hover:border-[#B11D1D]/30 hover:shadow-xl transition-all duration-300">
                                    <CardContent className="p-8 text-center">
                                        <div className="text-5xl font-bold bg-gradient-to-br from-[#852C2C] to-[#B11D1D] bg-clip-text text-transparent mb-3">Río Cuarto</div>
                                        <p className="text-[#332222] font-medium text-sm uppercase tracking-wide">Región Huetar Norte</p>
                                    </CardContent>
                                </Card>
                                <Card className="bg-white border border-[#852C2C]/10 hover:border-[#B11D1D]/30 hover:shadow-xl transition-all duration-300">
                                    <CardContent className="p-8 text-center">
                                        <div className="text-5xl font-bold bg-gradient-to-br from-[#852C2C] to-[#B11D1D] bg-clip-text text-transparent mb-3">Sarapiquí</div>
                                        <p className="text-[#332222] font-medium text-sm uppercase tracking-wide">Región Huetar Norte</p>
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
