"use client"

import { motion } from "framer-motion"
import { Building2, CheckCircle2, Lightbulb, Target, TrendingUp, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { proyectos as projects } from "@/src/content/proyectos"

export function ProjectsShowcase() {
    return (
        <section className="py-20 px-6 lg:px-12 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto max-w-7xl space-y-12">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >
                    <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm text-primary mb-4">
                        <Building2 className="h-4 w-4" />
                        Núcleo de Globalización y Comercio
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl mb-3 text-balance">
                        Proyectos en ejecución
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
                        Investigación aplicada para el fortalecimiento de la competitividad territorial.
                    </p>
                </motion.div>

                <div className="space-y-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.code ?? index}
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
                                        <h3 className="font-bold text-lg text-[#332222] mb-3">Pregunta de investigación</h3>
                                        <p className="text-[#332929]/90 italic text-lg leading-relaxed">{project.question}</p>
                                    </div>

                                    <div>
                                        <h3 className="font-bold text-xl text-[#332222] mb-4 flex items-center gap-3">
                                            <div className="p-2 bg-[#B11D1D]/10 rounded-lg">
                                                <Target className="h-5 w-5 text-[#B11D1D]" />
                                            </div>
                                            Objetivos específicos
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
                                            <h4 className="font-semibold text-[#5B2D2D] mb-2 text-sm uppercase tracking-wide">Aporte al programa</h4>
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
    )
}
