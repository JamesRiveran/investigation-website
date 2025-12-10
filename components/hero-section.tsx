"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, FileText, Users } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-secondary py-20 lg:py-32"
    >
      <div className="absolute inset-0 bg-grid-white/10" />
      <div className="container relative px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-block rounded-full bg-primary-foreground/10 px-4 py-1.5 text-sm text-primary-foreground backdrop-blur">
              CINPE-UNA
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl text-balance">
              Centro Internacional de Política Económica para el Desarrollo Sostenible
            </h1>
            <p className="text-lg text-primary-foreground/90 leading-relaxed text-pretty">
              Universidad Nacional, Costa Rica
            </p>
            <p className="text-base text-primary-foreground/80 leading-relaxed">
              Acceso transparente a información relevante de diferentes cantones involucrados en investigaciones. Datos
              estadísticos, índices de desarrollo y herramientas para estudios de carácter económico, social, cultural y
              político.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Link href="/propuesta">
                <Button
                  size="lg"
                  className="gap-2 bg-[rgba(0,0,0,0.28)] text-white hover:bg-[rgba(0,0,0,0.38)] border border-white/15 backdrop-blur"
                >
                  <FileText className="h-4 w-4" />
                  Propuesta de proyectos
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/equipo">
                <Button
                  size="lg"
                  variant="ghost"
                  className="gap-2 border border-white/50 text-white/85 hover:text-white hover:bg-white/12"
                >
                  <Users className="h-4 w-4" />
                  Equipo de trabajo
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full max-w-2xl aspect-[4/3] overflow-hidden rounded-[28px] border border-white/15 bg-[rgba(0,0,0,0.28)] backdrop-blur-xl shadow-[0_25px_100px_rgba(0,0,0,0.35)] p-6">
              <div className="absolute -inset-12 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.12),transparent_42%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.1),transparent_36%),radial-gradient(circle_at_50%_80%,rgba(255,255,255,0.06),transparent_48%)] blur-3xl" />
              <div className="absolute inset-2 rounded-[22px] border border-white/12" />
              <div className="absolute inset-4 rounded-[20px] bg-[linear-gradient(120deg,rgba(255,255,255,0.09),transparent_45%,rgba(255,255,255,0.05))]" />
              <div className="absolute inset-6 rounded-[18px] border border-white/14" />

              <div className="relative h-full w-full flex items-center justify-center">
                <motion.div
                  className="absolute inset-4 z-10 bg-white drop-shadow-[0_10px_35px_rgba(0,0,0,0.35)]"
                  style={{
                    WebkitMaskImage: "url('/costa-rica-map-outline-white.png')",
                    maskImage: "url('/costa-rica-map-outline-white.png')",
                    WebkitMaskSize: "contain",
                    maskSize: "contain",
                    WebkitMaskRepeat: "no-repeat",
                    maskRepeat: "no-repeat",
                    WebkitMaskPosition: "center",
                    maskPosition: "center",
                  }}
                  animate={{ opacity: [0.55, 0.85, 0.55] }}
                  transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
                />

                <motion.div
                  className="absolute inset-4 z-20"
                  style={{
                    WebkitMaskImage: "url('/costa-rica-map-outline-white.png')",
                    maskImage: "url('/costa-rica-map-outline-white.png')",
                    WebkitMaskSize: "contain",
                    maskSize: "contain",
                    WebkitMaskRepeat: "no-repeat",
                    maskRepeat: "no-repeat",
                    WebkitMaskPosition: "center",
                    maskPosition: "center",
                    backgroundImage:
                      "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.95) 50%, rgba(255,255,255,0) 100%)",
                    backgroundSize: "200% 100%",
                  }}
                  animate={{
                    backgroundPosition: ["200% 0%", "-200% 0%"],
                    opacity: [0, 1, 0],
                  }}
                  transition={{ duration: 2, ease: "linear", repeat: Infinity, repeatType: "mirror" }}
                />

                <motion.div
                  className="absolute inset-0 z-30 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.08),transparent_55%)]"
                  animate={{ opacity: [0.35, 0.18, 0.35] }}
                  transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
