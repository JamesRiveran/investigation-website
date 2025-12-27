"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Menu, ChevronDown } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { motion } from "framer-motion"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [expandedItem, setExpandedItem] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const navItems = [
    {
      title: "Inicio",
      href: "/",
    },
    {
      title: "Equipo de trabajo",
      href: "/equipo",
    },
    {
      title: "Propuesta de proyectos",
      href: "/propuesta",
    },
    {
      title: "Mecanismo de Análisis Cantonal",
      items: [
        { title: "Río Cuarto", href: "/mac/cantones/rio-cuarto" },
        { title: "Sarapiquí", href: "/mac/cantones/sarapiqui" },
        { title: "Pococí", href: "/mac/cantones/pococi" },
      ],
    },
    {
      title: "Opciones Turísticas",
      href: "/#turismo",
    },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-[#332B2B]/95"
      style={{ backgroundColor: "rgba(51, 43, 43, 0.95)" }}
    >
      <div className="container flex h-16 items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-16 w-auto items-center justify-center rounded-lg">
            <img src="/logo.png" alt="UNA Logo" className="h-14 w-auto rounded-lg" />
          </div>
          <div className="block md:block">
            <h1 className="text-sm font-semibold leading-tight text-balance text-[#F5F5F5]">
              Proyectos de fortalecimiento competitivo
            </h1>
          </div>
        </Link>

        {/* DESKTOP */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {navItems.map((item) => (
              <NavigationMenuItem key={item.title}>
                {item.items ? (
                  <>
                    <NavigationMenuTrigger className="text-sm bg-transparent text-[#F5F5F5] hover:bg-[#5C2E2E] hover:text-white data-[state=open]:bg-[#5C2E2E] data-[state=open]:text-white">
                      {item.title}
                    </NavigationMenuTrigger>

                    <NavigationMenuContent>
                      <ul className="grid w-[420px] gap-3 p-4 bg-[#332B2B]">
                        {item.items.map((subItem) => (
                          <li key={subItem.title}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={subItem.href}
                                className="block select-none rounded-md p-3 text-sm text-[#F5F5F5] transition-colors hover:bg-[#5C2E2E] hover:text-white"
                              >
                                {subItem.title}
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <NavigationMenuLink asChild>
                    <Link
                      href={item.href}
                      className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-[#F5F5F5] transition-colors hover:bg-[#5C2E2E] hover:text-white focus:bg-[#5C2E2E] focus:text-white focus:outline-none"
                    >
                      {item.title}
                    </Link>
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* MOBILE */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Abrir menú"
              className="text-[#F5F5F5] hover:bg-[#5C2E2E] hover:text-white"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>

          <SheetContent
            side="right"
            className="w-[300px] sm:w-[400px] bg-[#2D2525]/85 border border-white/10 p-0 backdrop-blur-md"
          >
            <div className="flex flex-col h-full">
              <div className="border-b border-white/10 px-6 py-6">
                <SheetTitle className="text-white text-lg font-bold">
                  Menú
                </SheetTitle>
              </div>

              <nav className="flex flex-col gap-0 mt-0 overflow-y-auto flex-1 px-3 py-4">
                {navItems.map((item) => (
                  <div key={item.title}>
                    {item.items ? (
                      <div className="space-y-0">
                        <button
                          onClick={() =>
                            setExpandedItem(
                              expandedItem === item.title ? null : item.title
                            )
                          }
                          className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-sm font-semibold text-[#F5F5F5] hover:bg-[#5C2E2E]/50 hover:text-white transition-all duration-300 my-1"
                        >
                          {item.title}
                          <ChevronDown
                            className={`h-5 w-5 transition-transform duration-300 ${
                              expandedItem === item.title ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {expandedItem === item.title && (
                          <div className="bg-[#2A2222] rounded-lg mx-2 my-1 space-y-0 animate-in fade-in-0 slide-in-from-top-2">
                            {item.items.map((subItem, idx) => (
                              <Link
                                key={subItem.title}
                                href={subItem.href}
                                className={`block px-5 py-3 text-sm text-[#E5E5E5] hover:bg-[#5C2E2E] hover:text-white transition-colors ${
                                  idx === 0 ? "rounded-t-lg" : ""
                                } ${
                                  idx === item.items.length - 1
                                    ? "rounded-b-lg"
                                    : ""
                                }`}
                                onClick={() => setIsOpen(false)}
                              >
                                {subItem.title}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className="block rounded-lg px-4 py-3 text-sm font-semibold text-[#F5F5F5] hover:bg-[#5C2E2E]/50 hover:text-white transition-all duration-300 my-1"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.title}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  )
}
