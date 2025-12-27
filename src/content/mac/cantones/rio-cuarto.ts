export const rioCuartoMAC = {
  codigoPostal: "216",
  canton: "Río Cuarto",

  secciones: [
    {
      id: "perfil-general",
      titulo: "Perfil general del cantón",
      texto: `
Río Cuarto es un cantón que obtiene oficialmente su categoría cantonal en el año 2017 mediante
la Ley N.º 9440. Antes de esta fecha, el territorio formaba parte del cantón de Grecia, lo cual
condiciona la disponibilidad y continuidad de los datos estadísticos oficiales.

Esta particularidad implica que parte de la información demográfica debe analizarse bajo una
lógica pre-cantonal, lo que limita la comparabilidad directa con otros cantones consolidados.
      `
    },

    {
      id: "crecimiento-demografico",
      titulo: "Crecimiento demográfico",
      texto: `
Para el caso de Río Cuarto se identifican dos etapas de análisis: una etapa distrital correspondiente
al periodo 2000–2011 y una etapa cantonal correspondiente al año 2022.

Río Cuarto presenta un crecimiento constante entre censos. Aunque existe una desaceleración en
la tasa de crecimiento promedio anual, esta mantiene valores relativamente altos. Este
comportamiento se asocia a la atracción migratoria, la expansión agrícola y su conectividad con
la región norte del país.
      `,
      tablas: [
        {
          titulo: "Crecimiento demográfico de Río Cuarto",
          columnas: ["Indicador", "2000", "2011", "2022"],
          filas: [
            ["Población total", "7.744", "11.074", "14.418"],
            ["Crecimiento absoluto", "-", "3.330", "3.344"],
            ["Tasa de crecimiento intercensal", "-", "43,00%", "30,20%"],
            ["Tasa de crecimiento promedio anual", "-", "3,31%", "2,43%"]
          ],
          fuente: "Elaboración propia con información del INEC"
        }
      ]
    },

    {
      id: "estructura-etaria",
      titulo: "Estructura etaria y bono demográfico",
      texto: `
El documento del Mecanismo de Análisis Cantonal (MAC) no presenta información específica
sobre la estructura etaria y el bono demográfico para el cantón de Río Cuarto.

La ausencia de estos datos se explica por su reciente creación como cantón y las limitaciones
estadísticas derivadas de su condición administrativa previa.
      `
    },

    {
      id: "genero-composicion",
      titulo: "Género y composición social",
      texto: `
Esta sección se mantiene como referencia metodológica para futuras actualizaciones del
mecanismo.
      `
    }
  ],

  notas: [
    "Río Cuarto fue reconocido oficialmente como cantón en el año 2017.",
    "Los datos del censo 2022 corresponden a estimaciones aproximadas debido a limitaciones operativas."
  ],

  fuenteGeneral:
    "Mecanismo de Análisis Cantonal (MAC), con base en información del Instituto Nacional de Estadística y Censos (INEC)."
};
