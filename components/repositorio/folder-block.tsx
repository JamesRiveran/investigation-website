import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FolderOpen } from "lucide-react"
import { FileRow } from "./file-row"
import { CollapsibleFolder } from "./collapsible-folder"
import { RepoFolder } from "./types"

function getFileCount(folder: RepoFolder): number {
    const own = folder.files.length
    const nested = folder.folders.reduce((sum, child) => sum + getFileCount(child), 0)
    return own + nested
}

export function FolderBlock({ folder }: { folder: RepoFolder }) {
    return (
        <Card className="border border-[#852C2C]/15 bg-white shadow-sm hover:shadow-lg transition-all duration-300">
            <CardHeader className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                    <span className="p-2 rounded-lg bg-[#B11D1D]/10 text-[#B11D1D]">
                        <FolderOpen className="h-5 w-5" />
                    </span>
                    <div>
                        <CardTitle className="text-xl text-[#332222]">{folder.name}</CardTitle>
                        <p className="text-sm text-[#5B2D2D]/80">{getFileCount(folder)} archivos · {folder.folders.length} carpetas</p>
                    </div>
                </div>
            </CardHeader>

            <CardContent className="space-y-8">
                {folder.folders.length > 0 && (
                    <div className="space-y-4">
                        {folder.folders.map((subfolder) => (
                            <CollapsibleFolder key={subfolder.path} subfolder={subfolder} />
                        ))}
                    </div>
                )}

                {folder.files.length > 0 && (
                    <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-[#5B2D2D] uppercase tracking-wide">Archivos en esta carpeta</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {folder.files.map((file) => (
                                <FileRow key={file.path} file={file} />
                            ))}
                        </div>
                    </div>
                )}
            </CardContent>
        </Card>
    )
}
