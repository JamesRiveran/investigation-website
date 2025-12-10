"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { createClient } from "@/lib/supabase/client"
import { Canton } from "@/types/database.types"
import Image from "next/image"

export function CantonesSection() {
  const [cantones, setCantones] = useState<Canton[]>([])
  const [loading, setLoading] = useState(true)

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
    </section>
  )
}
