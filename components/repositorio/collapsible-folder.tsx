'use client'

import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { FolderOpen, ChevronDown } from 'lucide-react'
import { FileRow } from './file-row'
import { RepoFolder } from './types'

export function CollapsibleFolder({ subfolder }: { subfolder: RepoFolder }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="rounded-lg border border-[#852C2C]/10 bg-[#B11D1D]/5 overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between gap-3 p-4 hover:bg-[#B11D1D]/10 transition-colors"
            >
                <div className="flex items-center gap-2 text-[#332222] font-semibold">
                    <ChevronDown
                        className={`h-4 w-4 text-[#B11D1D] transition-transform ${isOpen ? 'rotate-0' : '-rotate-90'
                            }`}
                    />
                    <FolderOpen className="h-4 w-4 text-[#B11D1D]" />
                    <span>{subfolder.name}</span>
                </div>
                <Badge variant="secondary" className="bg-white text-[#5B2D2D] border-[#852C2C]/20">
                    {subfolder.files.length} archivo{subfolder.files.length === 1 ? '' : 's'}
                </Badge>
            </button>

            {isOpen && (
                <div className="px-4 pb-4 pt-0 border-t border-[#852C2C]/10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                        {subfolder.files.length > 0 ? (
                            subfolder.files.map((file) => <FileRow key={file.path} file={file} />)
                        ) : (
                            <p className="text-sm text-[#5B2D2D]/70">No hay archivos en esta carpeta.</p>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}
