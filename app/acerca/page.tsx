"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AcercaHero } from "@/components/acerca/hero"
import { ProjectsShowcase } from "@/components/acerca/projects-showcase"
import { TeamShowcase } from "@/components/acerca/team-showcase"
import { CantonesSummary } from "@/components/acerca/cantones-summary"

export default function AcercaPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navigation />

            <main className="flex-1">
                <AcercaHero />
                <ProjectsShowcase />
                <TeamShowcase />
                <CantonesSummary />
            </main>

            <Footer />
        </div>
    )
}
