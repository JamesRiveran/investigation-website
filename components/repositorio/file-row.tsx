import { Button } from "@/components/ui/button"
import { ExternalLink, FileDown } from "lucide-react"
import { formatBytes, formatDate } from "./format"
import { RepoFile } from "./types"

export function FileRow({ file }: { file: RepoFile }) {
    const size = formatBytes(file.size)
    const updated = formatDate(file.updatedAt)

    return (
        <div className="flex items-center justify-between gap-3 rounded-lg border border-[#852C2C]/15 bg-white/70 p-3 shadow-sm min-h-[80px]">
            <div className="flex items-start gap-3 min-w-0 flex-1">
                <span className="p-2 rounded-md bg-[#B11D1D]/10 text-[#B11D1D] flex-shrink-0">
                    <FileDown className="h-4 w-4" />
                </span>
                <div className="space-y-1 min-w-0">
                    <p className="text-sm font-semibold text-[#332222] line-clamp-2">{file.name}</p>
                    <p className="text-xs text-[#5B2D2D]/70 truncate">
                        {size ? `${size}` : "Tamaño desconocido"}
                        {updated ? ` · Actualizado ${updated}` : ""}
                    </p>
                </div>
            </div>

            <Button asChild variant="outline" size="sm" className="text-[#B11D1D] border-[#B11D1D]/30 hover:bg-[#B11D1D]/10 flex-shrink-0 whitespace-nowrap">
                <a href={file.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-1" /> Ver / Descargar
                </a>
            </Button>
        </div>
    )
}
