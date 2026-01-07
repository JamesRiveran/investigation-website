import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, FileDown } from "lucide-react"
import { RepoFile } from "./types"
import { formatBytes, formatDate } from "./format"

export function DocumentCard({ file }: { file: RepoFile }) {
    const size = formatBytes(file.size)
    const updated = formatDate(file.updatedAt)
    const fallbackUrl = `https://wyrrwfllwtocyrcmllem.supabase.co/storage/v1/object/public/documentos-proyectos/${file.path}`
    const href = file.url || fallbackUrl

    return (
        <Card className="h-full border border-[#852C2C]/15 bg-white shadow-sm hover:shadow-lg transition-all duration-300">
            <CardHeader className="space-y-2">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#B11D1D]/10 px-3 py-1 text-xs font-semibold text-[#B11D1D]">
                    <FileDown className="h-4 w-4" />
                    Documento
                </div>
                <CardTitle className="text-base text-[#332222] leading-snug break-words">
                    {file.name}
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
                <p className="text-xs text-[#5B2D2D]/80">
                    {updated ? `Actualizado ${updated}` : "Descarga disponible"}
                </p>
                <Button asChild variant="outline" className="w-full gap-2 border-[#B11D1D]/30 text-[#B11D1D] hover:bg-[#B11D1D]/10">
                    <a href={href} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" /> Ver / Descargar
                    </a>
                </Button>
            </CardContent>
        </Card>
    )
}
