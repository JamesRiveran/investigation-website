export interface Canton {
    id: string
    codigo: string
    nombre: string
    provincia: string
    region_socioeconomica: string | null
    descripcion: string | null
    area: string | null
    escudo_url: string | null
    reporte_url: string | null
    created_at: string
}export interface OpcionTuristica {
    id: string
    canton_id: string
    nombre: string
    descripcion: string | null
    tipo: string | null
    direccion: string | null
    latitud: number | null
    longitud: number | null
    telefono: string | null
    email: string | null
    sitio_web: string | null
    calificacion: number | null
    imagenes: string[] | null
    redes_sociales: RedesSociales
    created_at: string
}

export interface RedesSociales {
    whatsapp?: string
    instagram?: string
    facebook?: string
    tiktok?: string
}

export interface Equipo {
    id: string
    nombre: string
    rol: string | null
    foto_url: string | null
    bio: string | null
    email: string | null
    orden: number | null
    created_at: string
}

export interface Proyecto {
    id: string
    codigo: string | null
    titulo: string
    descripcion: string | null
    año: number | null
    estado: string | null
    documento_url: string | null
    created_at: string
}