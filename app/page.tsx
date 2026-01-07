import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { IndicesResultsSection } from "@/components/indices-results-section"
import { IndicesSection } from "@/components/indices-section"
import { CantonesSection } from "@/components/cantones-section"
import { Footer } from "@/components/footer"
import { ProjectsSection } from "@/components/projects-section"

export default function Page() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ProjectsSection />
      <IndicesResultsSection />
      <CantonesSection />
      <Footer />
    </main>
  )
}
