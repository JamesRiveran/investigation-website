import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface RepositoryHeroProps {
    title: string
    badgeLabel: string
    summary: string
    ctaLabel: string
    ctaHref: string
}

export function RepositoryHero({ title, badgeLabel, summary, ctaHref, ctaLabel }: RepositoryHeroProps) {
    return (
        <section className="relative overflow-hidden py-16 px-6 lg:px-12 bg-gradient-to-r from-[#852C2C] via-[#5B2D2D] to-[#B11D1D] text-white">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.12),transparent_55%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.12),transparent_45%)]" />
            <div className="relative container mx-auto max-w-6xl space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                    <Badge className="bg-white text-[#B11D1D] font-semibold shadow-md">{badgeLabel}</Badge>
                    <Badge variant="outline" className="border-white/60 text-white/90">Propuestas y repositorio</Badge>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">{title}</h1>
                <p className="text-lg md:text-xl max-w-3xl text-white/85">{summary}</p>
                <div>
                    <Button asChild variant="outline" size="lg" className="gap-2 border-white/60 text-white hover:bg-white/10">
                        <a href={ctaHref}>{ctaLabel}</a>
                    </Button>
                </div>
            </div>
        </section>
    )
}
