import { DocumentCard } from "./document-card"
import { RepoFile } from "./types"

interface DocumentGridProps {
    files: RepoFile[]
}

export function DocumentGrid({ files }: DocumentGridProps) {
    return (
        <div className="grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {files.map((file) => (
                <DocumentCard key={file.path} file={file} />
            ))}
        </div>
    )
}
