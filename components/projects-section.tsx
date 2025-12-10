"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, TrendingUp, Building2 } from "lucide-react"
import { motion } from "framer-motion"

export function ProjectsSection() {
    const projects = [
        {
            icon: TrendingUp,
            title: "Comercio de servicios y competitividad",
            description:
                "Una aproximación al potencial de desarrollo logístico y turístico en los Cantones de Pococí, Río Cuarto y Sarapiquí, Costa Rica (0096 - 23)",
        },
        {
            icon: BookOpen,
            title: "Fuentes de competitividad territorial y comercial",
            description:
                "Descifrando las fuentes de competitividad territorial y comercial que impactan el desarrollo local: una visión desde (0099 - 23)",
        },
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    }

    return (
        <section className="py-16 lg:py-24 bg-muted/30">
            <div className="container px-6 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 text-center"
                >
                    <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm text-primary mb-4">
                        <Building2 className="h-4 w-4" />
                        Núcleo de Globalización y Comercio
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl mb-3 text-balance">
                        Proyectos de Investigación
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
                        Iniciativas enfocadas en el desarrollo económico y competitividad territorial en Costa Rica
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid gap-6 md:grid-cols-2"
                >
                    {projects.map((project, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-border/50">
                                <CardHeader>
                                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                                        <project.icon className="h-6 w-6 text-primary" />
                                    </div>
                                    <CardTitle className="text-xl text-balance">{project.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-base leading-relaxed">{project.description}</CardDescription>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
