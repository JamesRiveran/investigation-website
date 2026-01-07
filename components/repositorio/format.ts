export function formatBytes(bytes?: number) {
    if (!bytes || bytes <= 0) return null
    const sizes = ["B", "KB", "MB", "GB"] as const
    const i = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), sizes.length - 1)
    const value = bytes / Math.pow(1024, i)
    return `${value.toFixed(value >= 10 ? 0 : 1)} ${sizes[i]}`
}

export function formatDate(date?: string | null) {
    if (!date) return null
    const parsed = new Date(date)
    if (Number.isNaN(parsed.getTime())) return null
    return parsed.toLocaleDateString("es-CR", { day: "2-digit", month: "short", year: "numeric" })
}
