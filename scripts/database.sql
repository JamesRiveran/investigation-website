-- Extensión UUID
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Tabla: Cantones
CREATE TABLE cantones (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  codigo VARCHAR(10) UNIQUE NOT NULL,
  nombre VARCHAR(100) NOT NULL,
  provincia VARCHAR(50) NOT NULL,
  region_socioeconomica VARCHAR(50),
  descripcion TEXT,
  escudo_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabla: Opciones Turísticas
CREATE TABLE opciones_turisticas (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  canton_id UUID REFERENCES cantones(id) ON DELETE CASCADE,
  nombre VARCHAR(200) NOT NULL,
  descripcion TEXT,
  tipo VARCHAR(50), -- Hotel, Restaurante, Atracción, etc.
  direccion TEXT,
  latitud DECIMAL(10, 8),
  longitud DECIMAL(11, 8),
  telefono VARCHAR(20),
  email VARCHAR(100),
  sitio_web TEXT,
  calificacion DECIMAL(2, 1),
  imagenes TEXT[], -- Array de URLs
  redes_sociales JSONB DEFAULT '{}'::jsonb, -- Redes sociales
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabla: Equipo de Trabajo
CREATE TABLE equipo (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  nombre VARCHAR(100) NOT NULL,
  rol VARCHAR(100),
  foto_url TEXT,
  bio TEXT,
  email VARCHAR(100),
  orden INTEGER,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabla: Proyectos
CREATE TABLE proyectos (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  codigo VARCHAR(50) UNIQUE,
  titulo TEXT NOT NULL,
  descripcion TEXT,
  año INTEGER,
  estado VARCHAR(50), -- Activo, Finalizado, etc.
  documento_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ÍNDICES para optimizar búsquedas
CREATE INDEX idx_turismo_canton ON opciones_turisticas(canton_id);
CREATE INDEX idx_turismo_tipo ON opciones_turisticas(tipo);
CREATE INDEX idx_equipo_orden ON equipo(orden);

-- INSERTS iniciales: Cantones
INSERT INTO cantones (codigo, nombre, provincia, region_socioeconomica, descripcion) VALUES
('216', 'Río Cuarto', 'Alajuela', 'Huetar Norte', 'Cantón de la provincia de Alajuela, conocido por su desarrollo agrícola y turismo rural.'),
('410', 'Sarapiquí', 'Heredia', 'Huetar Norte', 'Cantón de la provincia de Heredia, destacado por su biodiversidad y ecoturismo.'),
('702', 'Pococí', 'Limón', 'Huetar Caribe', 'Cantón de la provincia de Limón, importante centro logístico y turístico del Caribe.');

-- INSERTS de ejemplo: Proyectos
INSERT INTO proyectos (codigo, titulo, descripcion, año, estado) VALUES
('0096-23', 'Comercio de servicios y competitividad: una aproximación al potencial de desarrollo logístico y turístico en los Cantones de Pococí, Río Cuarto y Sarapiquí, Costa Rica', 
 'Análisis del potencial de desarrollo logístico y turístico en tres cantones estratégicos de Costa Rica.', 
 2023, 'Activo'),
('0099-23', 'Descifrando las fuentes de competitividad territorial y comercial que impactan el desarrollo local', 
 'Una visión desde el comercio de servicios y la competitividad territorial.', 
 2023, 'Activo');