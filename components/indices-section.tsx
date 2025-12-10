"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity, BarChart3, TrendingUp, Target } from "lucide-react"
import { motion } from "framer-motion"

export function IndicesSection() {
    const indices = [
        {
            icon: Activity,
            title: "Índice de Desarrollo Humano",
            acronym: "IDH",
            description: "Medición del bienestar y calidad de vida de la población basado en salud, educación e ingresos",
        },
        {
            icon: BarChart3,
            title: "Índice de Desarrollo Social",
            acronym: "IDS",
            description: "Evaluación integral del progreso social en dimensiones fundamentales del desarrollo",
        },
        {
            icon: TrendingUp,
            title: "Índice de Progreso Social",
            acronym: "IPS",
            description: "Medición de la capacidad de satisfacer necesidades humanas básicas y crear oportunidades",
        },
        {
            icon: Target,
            title: "Índice de Competitividad Cantonal",
            acronym: "ICC",
            description: "Análisis de alternativas jurídicas y herramientas para estudios económicos territoriales",
        },
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        show: { opacity: 1, scale: 1 },
    }

    return (
        <section id="indices" className="py-16 lg:py-24">
            <div className="container px-6 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-3 text-balance">Comparativas Cantonales</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
                        Herramientas para realizar estudios de carácter económico, social, cultural y político
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
                >
                    {indices.map((index, idx) => (
                        <motion.div key={idx} variants={itemVariants}>
                            <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card">
                                <CardHeader>
                                    <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                                        <index.icon className="h-7 w-7 text-primary" />
                                    </div>
                                    <div className="space-y-1">
                                        <div className="inline-block rounded-md bg-muted px-2 py-0.5 text-xs font-semibold text-muted-foreground">
                                            {index.acronym}
                                        </div>
                                        <CardTitle className="text-lg text-balance">{index.title}</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="leading-relaxed text-pretty">{index.description}</CardDescription>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
