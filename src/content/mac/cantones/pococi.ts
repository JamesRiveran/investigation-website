export const pocociMAC = {
  codigoPostal: "702",
  canton: "Pococí",

  secciones: [
    {
      id: "perfil-general",
      titulo: "Perfil general del cantón",
      texto: `
Pococí es un cantón con una posición geográfica estratégica dentro de la región Caribe de
Costa Rica, caracterizado por una alta conectividad logística y una base productiva vinculada
principalmente a la agroindustria.

Su cercanía con la Ruta Nacional 32 y la Terminal de Contenedores de Moín (TCM) le otorgan
un rol relevante como territorio de apoyo a la exportación, el transporte y el almacenamiento,
así como al turismo asociado a zonas como Tortuguero.
      `
    },

    {
      id: "crecimiento-demografico",
      titulo: "Crecimiento demográfico",
      texto: `
Entre los años 2000 y 2022, Pococí registró un crecimiento poblacional fuerte y sostenido,
aunque con una desaceleración progresiva en su tasa de crecimiento promedio anual.

En el año 2000, la población del cantón era de 103.121 personas, aumentando a 125.962 en
2011 y alcanzando 146.320 habitantes para el año 2022.

La tasa de crecimiento intercensal pasó de 22,15% entre 2000 y 2011 a 16,16% entre 2011 y
2022, mientras que la tasa de crecimiento promedio anual se redujo de 1,84% a 1,37%.
      `,
      tablas: [
        {
          titulo: "Crecimiento demográfico de Pococí",
          columnas: ["Indicador", "2000", "2011", "2022"],
          filas: [
            ["Población total", "103.121", "125.962", "146.320"],
            ["Crecimiento absoluto", "-", "22.841", "20.358"],
            ["Tasa de crecimiento intercensal", "-", "22,15%", "16,16%"],
            ["Tasa de crecimiento promedio anual", "-", "1,84%", "1,37%"]
          ],
          fuente: "Elaboración propia con información del INEC"
        }
      ]
    },

    {
      id: "estructura-etaria",
      titulo: "Estructura etaria y bono demográfico",
      texto: `
Entre los censos del año 2000 y 2011, Pococí presentó una reducción significativa de su
población joven y un aumento sostenido de la población en edad productiva, configurando
un bono demográfico moderado.

La población entre 0 y 19 años se redujo de 47,01% a 39,20%, mientras que la población entre
20 y 64 años aumentó de 49,35% a 55,53%. La población adulta mayor aumentó de 3,64% a
5,27%.

El índice de dependencia disminuyó de 102,64% a 80,09%, mientras que la tasa de
envejecimiento aumentó de 7,75% a 13,44%.
      `,
      tablas: [
        {
          titulo: "Estructura etaria y bono demográfico de Pococí",
          columnas: ["Indicador", "2000", "2011"],
          filas: [
            ["Población 0 a 19 años", "47,01%", "39,20%"],
            ["Población 20 a 64 años", "49,35%", "55,53%"],
            ["Población 65 años y más", "3,64%", "5,27%"],
            ["Índice de dependencia MAC", "102,64%", "80,09%"],
            ["Tasa de envejecimiento", "7,75%", "13,44%"]
          ],
          fuente: "Elaboración propia con información del INEC"
        }
      ]
    },

    {
      id: "genero-composicion",
      titulo: "Género y composición social",
      texto: `
Esta sección se mantiene como referencia metodológica para futuras ampliaciones del
análisis.
      `
    }
  ],

  notas: [
    "Pococí se consolida como un cantón logístico estratégico para la región Caribe.",
    "La desaceleración demográfica plantea desafíos asociados a infraestructura, vivienda y presión ambiental."
  ],

  fuenteGeneral:
    "Mecanismo de Análisis Cantonal (MAC), con base en información del Instituto Nacional de Estadística y Censos (INEC)."
}
