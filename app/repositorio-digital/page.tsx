import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { AlertTriangle } from 'lucide-react'
import { RepositoryHero } from '@/components/repositorio/hero'
import { InfoBanner } from '@/components/repositorio/info-banner'
import { FolderBlock } from '@/components/repositorio/folder-block'
import { RepoFolder, RepoFile } from '@/components/repositorio/types'
import { DOCUMENTS } from '@/lib/documents-config'

const BUCKET = 'documentos-proyectos'
const SUPABASE_URL = 'https://wyrrwfllwtocyrcmllem.supabase.co'

function buildRepositoryStructure(): RepoFolder[] {
    const structure: { [canton: string]: { [category: string]: RepoFile[] } } = {}

    for (const doc of DOCUMENTS) {
        if (!structure[doc.canton]) {
            structure[doc.canton] = {}
        }
        if (!structure[doc.canton][doc.category]) {
            structure[doc.canton][doc.category] = []
        }

        structure[doc.canton][doc.category].push({
            name: doc.name,
            path: doc.path,
            url: `${SUPABASE_URL}/storage/v1/object/public/${BUCKET}/${doc.path}`,
        })
    }

    const compare = (a: string, b: string) => a.localeCompare(b, 'es', { sensitivity: 'base' })

    return Object.entries(structure)
        .sort(([a], [b]) => compare(a, b))
        .map(([canton, categories]) => ({
            name: canton,
            path: canton,
            files: [],
            folders: Object.entries(categories)
                .sort(([a], [b]) => compare(a, b))
                .map(([category, files]) => ({
                    name: category,
                    path: `${canton}/${category}`,
                    files: [...files].sort((a, b) => compare(a.name, b.name)),
                    folders: [],
                })),
        }))
}

export default function RepositorioDigitalPage() {
    const folders = buildRepositoryStructure()

    return (
        <div className="min-h-screen flex flex-col">
            <Navigation />

            <main className="flex-1 bg-gradient-to-b from-white to-gray-50">
                <RepositoryHero
                    title="Repositorio Digital"
                    badgeLabel="Acceso a documentos"
                    summary="Consulta y descarga los documentos del proyecto organizados por cantón y carpeta temática."
                    ctaLabel="Explorar repositorio"
                    ctaHref="#folders"
                />

                <section className="py-16 px-6 lg:px-12" id="folders">
                    <div className="container mx-auto max-w-6xl space-y-10">
                        <InfoBanner />

                        {folders.length === 0 ? (
                            <Card className="border border-dashed border-[#852C2C]/30 bg-white/70">
                                <CardContent className="p-8 text-center space-y-3 text-[#5B2D2D]">
                                    <p className="font-semibold text-lg">Aún no hay archivos disponibles</p>
                                    <p className="text-sm text-[#5B2D2D]/80">
                                        Sube documentos al bucket "{BUCKET}" en Supabase para mostrarlos aquí.
                                    </p>
                                </CardContent>
                            </Card>
                        ) : (
                            <div className="grid grid-cols-1 gap-8">
                                {folders.map((folder) => (
                                    <FolderBlock key={folder.path || folder.name} folder={folder} />
                                ))}
                            </div>
                        )}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
