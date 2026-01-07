"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { createClient } from "@/lib/supabase/client"

type TeamMember = {
    id: string
    nombre: string
    rol: string | null
    foto_url: string | null
    bio: string | null
    email: string | null
    orden: number | null
    perfil_url: string | null
}

export function TeamShowcase() {
    const [teamMembers, setTeamMembers] = useState<TeamMember[]>([])
    const [loadingTeam, setLoadingTeam] = useState(true)
    const [teamError, setTeamError] = useState<string | null>(null)

    useEffect(() => {
        const fetchTeam = async () => {
            if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
                setTeamError("Faltan credenciales de Supabase (NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY)")
                setLoadingTeam(false)
                return
            }

            const supabase = createClient()
            const { data, error } = await supabase
                .from("equipo")
                .select("id, nombre, rol, foto_url, bio, email, orden, perfil_url")
                .order("orden", { ascending: true })

            if (error) {
                setTeamError("No se pudo cargar el equipo. Verifica Supabase y la tabla 'equipo'.")
            } else if (data) {
                setTeamMembers(data)
            }
            setLoadingTeam(false)
        }

        fetchTeam()
    }, [])

    return (
        <section className="py-20 px-6 lg:px-12 bg-white">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-[#332222] mb-4">Equipo de trabajo</h2>
                    <p className="text-lg text-[#332929]/80 max-w-3xl mx-auto">
                        Investigadores del CINPE-UNA dedicados al fortalecimiento competitivo de las regiones Huetar Norte y Huetar Caribe.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {teamError && (
                        <div className="md:col-span-2 text-center text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg p-4">
                            {teamError}
                        </div>
                    )}

                    {loadingTeam &&
                        Array.from({ length: 2 }).map((_, index) => (
                            <div key={index} className="h-full rounded-lg border border-dashed border-muted-foreground/30 p-6 animate-pulse bg-muted/20" />
                        ))}

                    {!loadingTeam && !teamError && teamMembers.length === 0 && (
                        <div className="md:col-span-2 text-center text-sm text-muted-foreground border border-border/60 rounded-lg p-6">
                            No hay miembros de equipo configurados en Supabase.
                        </div>
                    )}

                    {!loadingTeam && !teamError &&
                        teamMembers.map((member, index) => (
                            <motion.div
                                key={member.id ?? index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Card className="h-full group hover:shadow-2xl transition-all duration-500 border border-[#E5E5E5] bg-white overflow-hidden">
                                    <CardContent className="p-0">
                                        <div className="flex flex-col h-full">
                                            {member.foto_url ? (
                                                <div className="relative h-96 bg-gradient-to-br from-[#852C2C] to-[#5B2D2D] overflow-hidden">
                                                    <img
                                                        src={member.foto_url || "/placeholder.svg"}
                                                        alt={member.nombre}
                                                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-[#332222]/80 via-transparent to-transparent" />
                                                </div>
                                            ) : (
                                                <div className="h-96 bg-gradient-to-br from-[#852C2C]/30 to-[#5B2D2D]/30" />
                                            )}
                                            <div className="p-6 pb-4">
                                                <h3 className="text-2xl font-bold text-[#332222] mb-2 leading-tight">{member.nombre ?? "Cargando..."}</h3>
                                                <p className="text-[#B11D1D] font-semibold mb-1 text-base">{member.rol ?? ""}</p>
                                            </div>

                                            <div className="space-y-3 px-6 pb-4">
                                                {member.email && (
                                                    <a
                                                        href={`mailto:${member.email}`}
                                                        className="flex items-center gap-2 text-sm text-[#332929] hover:text-[#B11D1D] transition-colors"
                                                    >
                                                        <svg
                                                            className="h-4 w-4"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        >
                                                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                                            <polyline points="22,6 12,13 2,6"></polyline>
                                                        </svg>
                                                        <span>{member.email}</span>
                                                    </a>
                                                )}
                                                {member.bio && (
                                                    <p className="text-sm text-[#332929]/80 leading-relaxed">{member.bio}</p>
                                                )}
                                                {member.perfil_url && (
                                                    <a
                                                        href={member.perfil_url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center text-[#852C2C] hover:text-[#B11D1D] transition-colors font-semibold text-sm mt-3"
                                                    >
                                                        Ver perfil completo →
                                                    </a>
                                                )}
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
