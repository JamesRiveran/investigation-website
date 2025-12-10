"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin } from "lucide-react"
import { motion } from "framer-motion"

export function CantonesSection() {
  const cantones = [
    {
      code: "216",
      name: "Alajuela, Río Cuarto",
      region: "Huetar Norte",
      area: "2144.38 km²",
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      code: "410",
      name: "Heredia, Sarapiquí",
      region: "Huetar Norte",
      area: "2408.76 km²",
      color: "from-emerald-500/20 to-teal-500/20",
    },
    {
      code: "702",
      name: "Limón, Pococí",
      region: "Huetar Caribe",
      area: "2403.49 km²",
      color: "from-purple-500/20 to-pink-500/20",
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

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {cantones.map((canton, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full overflow-hidden hover:shadow-xl transition-shadow duration-300 border-border/50">
                <div className={`h-2 bg-gradient-to-r ${canton.color}`} />
                <CardHeader>
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <Badge variant="outline" className="text-xs font-mono">
                      {canton.code}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl mt-3 text-balance">{canton.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Región</span>
                    <span className="font-medium">{canton.region}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Área</span>
                    <span className="font-medium font-mono">{canton.area}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
