"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, FileText, X, Plus, Minus, RefreshCw } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState, type WheelEvent } from "react"
import { createClient } from "@/lib/supabase/client"
import { Canton } from "@/types/database.types"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function CantonesSection() {
  const [cantones, setCantones] = useState<Canton[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedReporte, setSelectedReporte] = useState<{ url: string; nombre: string } | null>(null)
  const [zoom, setZoom] = useState(1)

  const clampZoom = (value: number) => Math.min(3, Math.max(0.5, value))
  const handleZoom = (delta: number) => setZoom((z) => clampZoom(z + delta))
  const resetZoom = () => setZoom(1)
  const handleWheel = (event: WheelEvent<HTMLDivElement>) => {
    event.preventDefault()
    const direction = event.deltaY < 0 ? 0.1 : -0.1
    handleZoom(direction)
  }

  useEffect(() => {
    const fetchCantones = async () => {
      const supabase = createClient()
      const { data, error } = await supabase
        .from("cantones")
        .select("*")
        .order("codigo", { ascending: true })

      if (error) {
        console.error("Error fetching cantones:", error)
      }

      if (data) {
        setCantones(data)
      }
      setLoading(false)
    }

    fetchCantones()
  }, [])

  const getColor = (index: number) => {
    const colors = [
      "from-blue-500/20 to-cyan-500/20",
      "from-emerald-500/20 to-teal-500/20",
      "from-purple-500/20 to-pink-500/20",
    ]
    return colors[index % colors.length]
  }

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
    hidden: { opacity: 0, y: 30 },
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
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-3 text-secondary text-balance">
            Generalidades de los Cantones
          </h2>
          <p className="text-muted-foreground text-sm">Ley sobre División Territorial Administrativa - N° 4366</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {loading ? (
            <div className="col-span-full text-center text-muted-foreground">Cargando cantones...</div>
          ) : cantones.length === 0 ? (
            <div className="col-span-full text-center text-muted-foreground">No hay cantones disponibles</div>
          ) : (
            cantones.map((canton, index) => (
              <motion.div
                key={canton.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full overflow-hidden hover:shadow-xl transition-shadow duration-300 border-border/50">
                  <div className={`h-2 bg-gradient-to-r ${getColor(index)}`} />
                  <CardHeader>
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <Badge variant="outline" className="text-xs font-mono">
                        {canton.codigo}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl mt-3 text-balance">
                      {canton.provincia}, {canton.nombre}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Región</span>
                      <span className="font-medium">{canton.region_socioeconomica}</span>
                    </div>
                    {canton.area && (
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Área</span>
                        <span className="font-medium font-mono">{canton.area}</span>
                      </div>
                    )}
                    {canton.descripcion && (
                      <p className="text-xs text-muted-foreground leading-relaxed pt-2 border-t">
                        {canton.descripcion}
                      </p>
                    )}
                    {canton.reporte_url && (
                      <div className="pt-3 border-t">
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full text-[#852C2C] border-[#852C2C]/20 hover:bg-[#852C2C]/10 hover:text-[#B11D1D]"
                          onClick={() => {
                            setZoom(1)
                            setSelectedReporte({ url: canton.reporte_url!, nombre: canton.nombre })
                          }}
                        >
                          <FileText className="h-4 w-4 mr-2" />
                          Reporte informativo
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 mx-auto max-w-md"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/50">
            <Image
              src="/cantones.png"
              alt="Mapa de cantones - Río Cuarto, Sarapiquí y Pococí"
              width={200}
              height={100}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>

      {selectedReporte && (
        <div className="fixed inset-0 z-[100] bg-black/80 flex flex-col">
          <div className="bg-white border-b shadow-lg">
            <div className="p-4 flex items-center justify-between">
              <div className="flex-1">
                <h2 className="text-xl font-semibold">Reporte Informativo - {selectedReporte.nombre}</h2>
                <p className="text-xs text-muted-foreground hidden sm:block mt-1">Usa la rueda del mouse o pellizca para hacer zoom</p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="shrink-0 h-10 w-10 rounded-full hover:bg-gray-100"
                onClick={() => {
                  setZoom(1)
                  setSelectedReporte(null)
                }}
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
            <div className="px-4 pb-3 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <span className="font-medium text-[#332222]">Controles</span>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon" onClick={() => handleZoom(-0.1)} aria-label="Alejar" className="h-9 w-9">
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="min-w-[70px] text-center text-[#332222]">{Math.round(zoom * 100)}%</span>
                <Button variant="outline" size="icon" onClick={() => handleZoom(0.1)} aria-label="Acercar" className="h-9 w-9">
                  <Plus className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" onClick={resetZoom} aria-label="Restablecer" className="h-9 w-9">
                  <RefreshCw className="h-4 w-4" />
                </Button>
              </div>
              <span className="text-xs">Desplázate con la rueda o pellizca para zoom; arrastra/scroll para mover.</span>
            </div>
          </div>
          <div
            className="flex-1 overflow-auto bg-gray-100 p-4"
            onWheel={handleWheel}
            onDoubleClick={() => setZoom((z) => (z === 1 ? 1.5 : 1))}
          >
            <div className="flex items-center justify-center min-h-full">
              <div
                className="relative transition-transform duration-200"
                style={{ transform: `scale(${zoom})`, transformOrigin: "center center" }}
              >
                <Image
                  src={selectedReporte.url}
                  alt={`Reporte de ${selectedReporte.nombre}`}
                  width={2000}
                  height={2000}
                  className="w-auto h-auto max-w-full max-h-full shadow-2xl rounded-lg object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
