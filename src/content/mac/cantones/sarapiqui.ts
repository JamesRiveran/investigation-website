export const sarapiquiMAC = {
  codigoPostal: "410",
  canton: "Sarapiquí",

  secciones: [
    {
      id: "perfil-general",
      titulo: "Perfil general del cantón",
      texto: `
Sarapiquí es un cantón caracterizado por una base poblacional relativamente baja en comparación
con otros territorios del país, pero con una dinámica territorial estratégica asociada a su posición
como corredor entre la región Caribe y la región Norte de Costa Rica.

El cantón presenta una estructura productiva vinculada principalmente a la agroexportación,
el ecoturismo y la economía verde, elementos que influyen directamente en su dinámica
demográfica y territorial.
      `
    },

    {
      id: "crecimiento-demografico",
      titulo: "Crecimiento demográfico",
      texto: `
La población de Sarapiquí presentó un crecimiento sostenido entre los censos del año 2000, 2011
y 2022, aunque con una clara desaceleración en sus tasas de crecimiento.

En el año 2000, el cantón registró una población de 45.435 personas, aumentando a 57.147
habitantes en 2011. Para el año 2022, la población alcanzó las 67.153 personas.

La tasa de crecimiento intercensal pasó de 25,78% entre 2000 y 2011, a 17,51% entre 2011 y 2022,
mientras que la tasa de crecimiento promedio anual se redujo de 2,11% a 1,48%.
      `,
      tablas: [
        {
          titulo: "Crecimiento demográfico de Sarapiquí",
          columnas: ["Indicador", "2000", "2011", "2022"],
          filas: [
            ["Población total", "45.435", "57.147", "67.153"],
            ["Crecimiento absoluto", "-", "11.712", "10.006"],
            ["Tasa de crecimiento intercensal", "-", "25,78%", "17,51%"],
            ["Tasa de crecimiento promedio anual", "-", "2,11%", "1,48%"]
          ],
          fuente: "Elaboración propia con información del INEC"
        }
      ]
    },

    {
      id: "estructura-etaria",
      titulo: "Estructura etaria y bono demográfico",
      texto: `
Entre los censos del año 2000 y 2011, Sarapiquí mostró una reducción progresiva de su población
joven y un aumento de la población en edad productiva, evidenciando una consolidación temprana
del bono demográfico.

La población entre 0 y 19 años de edad se redujo de 48,60% a 42,10%, mientras que la población
entre 20 y 64 años aumentó de 48,24% a 53,13%. Por su parte, la población adulta mayor aumentó
de 3,16% a 4,77%.

El índice de dependencia se redujo de 107,31% a 88,23%, mientras que la tasa de envejecimiento
aumentó de 6,50% a 11,33%.
      `,
      tablas: [
        {
          titulo: "Estructura etaria y bono demográfico de Sarapiquí",
          columnas: ["Indicador", "2000", "2011"],
          filas: [
            ["Población 0 a 19 años", "48,60%", "42,10%"],
            ["Población 20 a 64 años", "48,24%", "53,13%"],
            ["Población 65 años y más", "3,16%", "4,77%"],
            ["Índice de dependencia MAC", "107,31%", "88,23%"],
            ["Tasa de envejecimiento", "6,50%", "11,33%"]
          ],
          fuente: "Elaboración propia con información del INEC"
        }
      ]
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
    "Sarapiquí presenta una de las poblaciones más jóvenes entre los cantones analizados.",
    "El crecimiento demográfico del cantón se encuentra asociado a actividades agroexportadoras y ecoturísticas."
  ],

  fuenteGeneral:
    "Mecanismo de Análisis Cantonal (MAC), con base en información del Instituto Nacional de Estadística y Censos (INEC)."
}
