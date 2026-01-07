import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { FileDown } from "lucide-react"

export function InfoBanner() {
    return (
        <Card className="bg-white border border-[#852C2C]/10 rounded-xl p-6 shadow-sm">
            <div className="flex flex-wrap items-center gap-4">
                <div className="p-3 bg-[#B11D1D]/10 rounded-lg text-[#B11D1D]">
                    <FileDown className="h-6 w-6" />
                </div>
                <div className="flex-1 min-w-[240px] space-y-1">
                    <h2 className="text-lg font-semibold text-[#332222]">Cómo funciona</h2>
                    <p className="text-sm text-[#5B2D2D]/80">Selecciona un cantón para explorar sus carpetas. Haz clic en cualquier archivo para abrirlo en una nueva pestaña y descargarlo.</p>
                </div>
                <Separator orientation="vertical" className="hidden md:block h-12 bg-[#852C2C]/20" />
                <div className="flex gap-3 flex-wrap">
                    <Badge variant="secondary" className="bg-[#B11D1D]/10 text-[#B11D1D] border-[#B11D1D]/20">Actualización en vivo</Badge>
                    <Badge variant="secondary" className="bg-[#332222] text-white">Descarga directa</Badge>
                </div>
            </div>
        </Card>
    )
}
