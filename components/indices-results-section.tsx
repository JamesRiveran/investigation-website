"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"
import { X, ZoomIn, ZoomOut } from "lucide-react"
import { Button } from "@/components/ui/button"

const indicesData = [
    {
        id: "icn",
        title: "ICN - 2025",
        description: "Mapa de resultados obtenidos en el Índice de Competitividad Nacional de Costa Rica - 2025 - Consejo de Promoción de la Competitividad (CPC)",
        image: "https://wyrrwfllwtocyrcmllem.supabase.co/storage/v1/object/public/documentos-proyectos/Inicio/ICN%20-%202025.png",
    },
    {
        id: "idh",
        title: "IDH",
        description: "Mapa descriptivo del panorama sobre Desarrollo Humano analizado por el Programa de Naciones Unidas para el Desarrollo (PNUD)",
        image: "https://wyrrwfllwtocyrcmllem.supabase.co/storage/v1/object/public/documentos-proyectos/Inicio/IDH%202025.png",
    },
    {
        id: "ids",
        title: "IDS - 2023",
        description: "Panorama de desarrollo social cantonal en 2023 según el Análisis del Ministerio de Planificación Nacional y Política Económica (MIDEPLAN)",
        image: "https://wyrrwfllwtocyrcmllem.supabase.co/storage/v1/object/public/documentos-proyectos/Inicio/IDS%20-%202023.png",
    },
    {
        id: "ips",
        title: "IPS - 2024",
        description: "Resultados de progreso social cantonal registrados por INCAE BUSINESS SCHOOL en 2024",
        image: "https://wyrrwfllwtocyrcmllem.supabase.co/storage/v1/object/public/documentos-proyectos/Inicio/IPS%20-%202024.png",
    },
]

function ImageModal({ image, title, isOpen, onClose }: { image: string; title: string; isOpen: boolean; onClose: () => void }) {
    const [zoom, setZoom] = useState(1)

    if (!isOpen) return null

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                className="relative max-w-5xl w-full"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-white text-xl font-semibold">{title}</h3>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                    >
                        <X className="h-6 w-6 text-white" />
                    </button>
                </div>

                {/* Image Container */}
                <div className="relative bg-black rounded-lg overflow-hidden flex items-center justify-center">
                    <div
                        className="overflow-auto max-h-[70vh] w-full flex items-center justify-center"
                        style={{ maxHeight: "70vh" }}
                    >
                        <img
                            src={image}
                            alt={title}
                            style={{ maxWidth: "100%", height: "auto", transform: `scale(${zoom})` }}
                            className="transition-transform duration-200"
                        />
                    </div>
                </div>

                {/* Controls */}
                <div className="flex items-center justify-center gap-4 mt-4">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setZoom((prev) => Math.max(prev - 0.25, 1))}
                        disabled={zoom <= 1}
                        className="bg-black text-white border-black hover:bg-black/80 disabled:opacity-50"
                    >
                        <ZoomOut className="h-4 w-4 mr-2" />
                        Alejar
                    </Button>
                    <span className="text-black text-sm min-w-16 text-center font-semibold">{(zoom * 100).toFixed(0)}%</span>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setZoom((prev) => Math.min(prev + 0.25, 3))}
                        disabled={zoom >= 3}
                        className="bg-black text-white border-black hover:bg-black/80 disabled:opacity-50"
                    >
                        <ZoomIn className="h-4 w-4 mr-2" />
                        Acercar
                    </Button>
                </div>
            </motion.div>
        </motion.div>
    )
}

export function IndicesResultsSection() {
    const [selectedImage, setSelectedImage] = useState<{ image: string; title: string } | null>(null)

    return (
        <section className="py-16 lg:py-24 bg-white">
            <div className="container mx-auto px-6 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
                        Resultados de Índices
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Explora los mapas de resultados de los principales índices de competitividad y desarrollo en Costa Rica
                    </p>
                </motion.div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {indicesData.map((index, i) => (
                        <motion.div
                            key={index.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <Card
                                className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                                onClick={() => setSelectedImage({ image: index.image, title: index.title })}
                            >
                                <div className="relative w-full h-48 overflow-hidden bg-muted group">
                                    <Image
                                        src={index.image}
                                        alt={index.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                                        <ZoomIn className="h-8 w-8 text-white" />
                                    </div>
                                </div>
                                <CardHeader>
                                    <CardTitle className="text-lg">{index.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-1">
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {index.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>

            {selectedImage && (
                <ImageModal
                    image={selectedImage.image}
                    title={selectedImage.title}
                    isOpen={!!selectedImage}
                    onClose={() => setSelectedImage(null)}
                />
            )}
        </section>
    )
}
