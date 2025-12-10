import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ProjectsSection } from "@/components/projects-section"
import { IndicesSection } from "@/components/indices-section"
import { CantonesSection } from "@/components/cantones-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ProjectsSection />
      <IndicesSection />
      <CantonesSection />
      <Footer />
    </main>
  )
}
