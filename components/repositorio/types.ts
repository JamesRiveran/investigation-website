export type RepoFile = {
    name: string
    path: string
    url: string
    size?: number
    updatedAt?: string | null
}

export type RepoFolder = {
    name: string
    path: string
    files: RepoFile[]
    folders: RepoFolder[]
}

export type StorageEntry = {
    name: string
    id: string | null
    updated_at: string | null
    metadata: Record<string, unknown> | null
}
