"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, TrendingUp, Building2 } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { createClient } from "@/lib/supabase/client"
import { Proyecto } from "@/types/database.types"

export function ProjectsSection() {
    const [projects, setProjects] = useState<Proyecto[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchProjects = async () => {
            const supabase = createClient()
            const { data, error } = await supabase
                .from("proyectos")
                .select("*")

            if (error) {
                console.error("Error fetching projects:", error)
            }

            if (data) {
                setProjects(data)
            }
            setLoading(false)
        }

        fetchProjects()
    }, [])

    const getIcon = (index: number) => {
        return index === 0 ? TrendingUp : BookOpen
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

                <div className="grid gap-6 md:grid-cols-2">
                    {loading ? (
                        <div>Cargando proyectos...</div>
                    ) : projects.length === 0 ? (
                        <div>No hay proyectos disponibles</div>
                    ) : (
                        projects.map((project, index) => {
                            const Icon = getIcon(index)
                            return (
                                <motion.div
                                    key={project.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-border/50">
                                        <CardHeader>
                                            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                                                <Icon className="h-6 w-6 text-primary" />
                                            </div>
                                            <CardTitle className="text-xl text-balance">
                                                {project.titulo}
                                                {project.codigo && (
                                                    <span className="block text-sm font-normal text-muted-foreground mt-1">
                                                        ({project.codigo})
                                                    </span>
                                                )}
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <CardDescription className="text-base leading-relaxed">
                                                {project.descripcion}
                                            </CardDescription>
                                            <div className="mt-4 flex items-center gap-2 flex-wrap">
                                                {project.año && (
                                                    <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs text-primary font-medium">
                                                        Año {project.año}
                                                    </div>
                                                )}
                                                {project.estado && (
                                                    <div className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium ${project.estado === "Activo"
                                                        ? "bg-green-500/10 text-green-700 dark:text-green-400"
                                                        : "bg-red-500/10 text-red-700 dark:text-red-400"
                                                        }`}>
                                                        <span className={`h-1.5 w-1.5 rounded-full ${project.estado === "Activo"
                                                            ? "bg-green-500"
                                                            : "bg-red-500"
                                                            }`} />
                                                        {project.estado}
                                                    </div>
                                                )}
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            )
                        })
                    )}
                </div>
            </div>
        </section>
    )
}
