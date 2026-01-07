"use client"

import { motion } from "framer-motion"
import { TrendingUp, BarChart3, Zap, Users, Wifi, Lightbulb, Heart } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function ICCPage() {
    const pillarCards = [
        {
            id: "gobierno",
            title: "Pilar Gobierno",
            icon: Users,
            summary:
                "Capacidad de captar recursos, gestionarlos y sostener participación ciudadana. Altamente sensible a choques coyunturales.",
            highlights: [
                "Sarapiquí: descensos 2011-2015, mejora 2016-2019 y nueva volatilidad desde 2020.",
                "Pococí: trayectoria más estable; mejora progresiva y punto alto en 2022 sin saltos estructurales.",
                "Río Cuarto: datos no disponibles en ICC; se remiten al Índice de Competitividad Nacional (ICN) para mayor detalle."
            ]
        },
        {
            id: "laboral",
            title: "Pilar Laboral",
            icon: Users,
            summary:
                "Potencial y estabilidad de la fuerza laboral. Refleja absorción de empleo, formalidad y resiliencia social.",
            highlights: [
                "Pococí: 0.500-0.600; clima laboral estable con amortiguación ante choques externos.",
                "Sarapiquí: 0.415-0.540; mayor dependencia de ciclos productivos y caídas pronunciadas en contracción.",
                "Río Cuarto: información laboral no incluida en ICC; se amplía en el Índice de Competitividad Nacional (ICN)."
            ]
        },
        {
            id: "infraestructura",
            title: "Pilar Infraestructura",
            icon: Wifi,
            summary:
                "Servicios básicos, movilidad y acceso tecnológico. Actúa como cuello de botella o habilitador territorial.",
            highlights: [
                "Pococí y Sarapiquí no superan 0.500; Pococí mantiene estabilidad relativa, Sarapiquí enfrenta caídas profundas 2012-2019.",
                "Río Cuarto: sin series completas en ICC; se requiere referencia al ICN para contraste.",
                "Los tres cantones muestran cuellos de botella infraestructurales que condicionan otros pilares."
            ]
        },
        {
            id: "innovacion",
            title: "Pilar Innovación",
            icon: Lightbulb,
            summary:
                "Capacidades tecnológicas, exportaciones de alta tecnología y formación en CyT. Altamente dependiente de acumulación de capacidades.",
            highlights: [
                "Sarapiquí: innovación tardía (mínimo 0.104 en 2012) con aceleración 2019-2021.",
                "Pococí: niveles mayores pero volátiles (0.250-0.545) con máximos recientes en 2023.",
                "Río Cuarto: sin serie disponible en ICC; se contrasta en el Índice de Competitividad Nacional (ICN) del Consejo de Promoción de la Competitividad (CPC)."
            ]
        },
        {
            id: "calidadvida",
            title: "Pilar Calidad de Vida",
            icon: Heart,
            summary:
                "Seguridad, salud y ambiente. Refleja resultados sociales acumulados y capacidad de ajuste ante choques.",
            highlights: [
                "Sarapiquí: 0.430-0.720 con descensos 2013-2016 y recuperaciones parciales desde 2017.",
                "Pococí: valores inferiores pero con repuntes; máximo 0.587 en 2023 y mayor ajuste social de corto plazo.",
                "Río Cuarto: sin datos en ICC; el análisis se complementa con Índice de Competitividad Nacional (ICN)."
            ]
        }
    ]

    const firstCase = [
        {
            canton: "Pococí",
            growth: "14.21%",
            period: "2011 → 2023",
            value: "0.401 → 0.458",
            note: "Incremento hasta 7 veces más que Sarapiquí; estabilidad hasta 2017 y máximo en 2023."
        },
        {
            canton: "Sarapiquí",
            growth: "1.98%",
            period: "2011 → 2023",
            value: "0.353 → 0.360",
            note: "Competitividad baja y estancada; estabilidad sin transformaciones estructurales."
        },
        {
            canton: "Río Cuarto",
            growth: "Datos limitados",
            period: "2011 → 2023",
            value: "—",
            note: "Se profundiza en el ICN del CPC; no alcanza a Sarapiquí en el ICC."
        }
    ]

    const closing = [
        "Las brechas entre Pococí, Sarapiquí y Río Cuarto responden a capacidades locales heterogéneas más que a diferencias del marco institucional nacional.",
        "Los pilares económico y empresarial refuerzan ventajas acumuladas en Pococí; la innovación y la infraestructura condicionan convergencia para Sarapiquí y Río Cuarto.",
        "La descentralización formal no garantiza capacidades técnicas y fiscales locales; las ventanas de mejora suelen ser coyunturales.",
        "Persisten cuellos de botella infraestructurales y de articulación productiva que amplifican las brechas territoriales."
    ]

    return (
        <div className="min-h-screen flex flex-col">
            <Navigation />

            <main className="flex-1">
                <section className="relative overflow-hidden py-24 px-6 lg:px-12 bg-gradient-to-br from-[#852C2C] via-[#5B2D2D] to-[#B11D1D]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.12),transparent_55%)]" />

                    <div className="container mx-auto max-w-6xl relative">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-center text-white"
                        >
                            <div className="inline-block rounded-full bg-white/15 px-4 py-1.5 text-sm text-white/90 backdrop-blur mb-6">
                                Módulo II · Índice de Competitividad Cantonal (ICC) - Universidad de Costa Rica (UCR)
                            </div>

                            <h1 className="text-4xl md:text-5xl font-bold mb-6">
                                7 pilares · 38 indicadores
                            </h1>

                            <p className="text-lg md:text-xl max-w-4xl mx-auto text-white/90">
                                Análisis comparado de competitividad territorial en Pococí, Sarapiquí y Río Cuarto, con foco en brechas y capacidades locales.
                            </p>

                            <div className="flex gap-3 justify-center mt-8 flex-wrap">
                                <Badge className="bg-white/20 text-white border border-white/30">Periodo 2011-2023</Badge>
                                <Badge className="bg-white/20 text-white border border-white/30">Metodología ICC basada en Foro Económico Mundial</Badge>
                                <Badge className="bg-white/20 text-white border border-white/30">Descentralización formal · centralización material</Badge>
                            </div>
                        </motion.div>
                    </div>
                </section>

                <section className="py-16 px-6 lg:px-12">
                    <div className="container mx-auto max-w-6xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <Card className="border-2 border-[#852C2C]/20 bg-gradient-to-br from-[#852C2C]/5 to-[#B11D1D]/5">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-3 text-[#332222]">
                                        <TrendingUp className="h-6 w-6 text-[#B11D1D]" />
                                        Módulo II. Índice de Competitividad Cantonal (ICC) - Universidad de Costa Rica (UCR)
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4 text-[#332929]/85 leading-relaxed">
                                    <p>
                                        Para empezar este segundo módulo, hay que mencionar que en Costa Rica se han desarrollado dos índices que evalúan la competitividad desde lo local, observando que uno de estos ha sido elaborado por la Escuela de Economía de la Universidad de Costa Rica (UCR), basado en una metodología de caracterización internacional, como es el el Índice de Competitividad del Foro Económico Mundial (UCR, 2018). Dicho mecanismo se empezó a trabajar en 2009, y cuenta con 38 indicadores que estructuran los 7 pilares que se trabajan en el presente documento (UCR, 2018).
                                    </p>
                                    <p>
                                        Bajo esta descripción, el MAC divide el análisis en dos estudios de caso. El primero y de mayor relevancia para la primera parte del proyecto de investigación se enfoca en tres cantones: estos corresponden a Río Cuarto, Sarapiquí y Pococí. No obstante, bajo el marco de desarrollo del ICC de la UCR, los datos referentes a Río Cuarto son limitados, por lo que el análisis de este será de mayor rigurosidad en el estudio del Índice de Competitividad Nacional (ICN) del Consejo de Promoción de la Competividad (CPC).
                                    </p>

                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </section>

                <section className="py-20 px-6 lg:px-12 bg-gray-50">
                    <div className="container mx-auto max-w-6xl space-y-12">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="text-center max-w-3xl mx-auto"
                        >
                            <h2 className="text-3xl font-bold tracking-tight text-[#332222] mb-3">
                                Primer estudio de caso del ICC - Agregado
                            </h2>
                            <p className="text-[#332929]/70">
                                Dinámica competitiva de Sarapiquí y Pococí con referencia a Río Cuarto.
                            </p>
                        </motion.div>

                        <div className="grid gap-6 md:grid-cols-3">
                            {firstCase.map((item, index) => (
                                <motion.div
                                    key={item.canton}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.05 }}
                                    viewport={{ once: true }}
                                >
                                    <Card className="border border-[#852C2C]/15 bg-white hover:shadow-lg transition-all duration-300 h-full">
                                        <CardHeader>
                                            <CardTitle className="text-[#332222] text-xl">
                                                {item.canton}
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-3">
                                            <div className="text-sm text-[#332929]/70 uppercase tracking-wide">Crecimiento ICC</div>
                                            <div className="flex items-baseline gap-2">
                                                <span className="text-3xl font-bold text-[#B11D1D]">{item.growth}</span>
                                                <span className="text-sm text-[#332929]/60">{item.period}</span>
                                            </div>
                                            <p className="text-sm font-semibold text-[#332222]">{item.value}</p>
                                            <p className="text-sm text-[#332929]/75 leading-relaxed">{item.note}</p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>

                        <Card className="border border-[#852C2C]/15 bg-white">
                            <CardContent className="pt-6 space-y-3 text-[#332929]/80 leading-relaxed">
                                <p>
                                    Dicho de esta manera, se adjuntan los primeros datos que conforman la dinámica competitiva del cantón de Sarapiquí y Pococí. En este caso, ha de notarse que Pococí lidera en gran medida los indicadores que conforman el ICC de la UCR, sin embargo, los registros estadísticos demuestran una dinámica competitiva que varía con el tiempo, presentando un auge en los indicadores del ICC en el año 2023, caso que ocurre de manera adversa con Sarapiquí.
                                </p>
                                <p>
                                    Para el año 2011, el valor del ICC de Pococí era de 0.401 puntos porcentuales, presentando un crecimiento de hasta un aproximado de 14.21%, entre el primer año en mención y el 2023, con 0.458 puntos porcentuales para este último caso. Por su parte, Sarapiquí creció un 1.98% en este mismo periodo, pasando en 2011 de 0.353 a 0.360 en 2023.
                                </p>
                                <p>
                                    Lo anterior implica reconocer que el cantón de Pococí incrementó su nivel de competitividad hasta 7 veces más que Sarapiquí, manteniendo un proceso de estabilidad hasta el año 2017, y marcando su mayor nivel de competitividad en 2023. Por otro lado, Sarapiquí es catalogado por el MAC como un cantón con nivel de competitividad bajo; con una estabilidad en los valores de los indicadores pero sin una tendencia de crecimiento marcada.
                                </p>
                                <p>
                                    Hay que entender que Río Cuarto, Sarapiquí y Pococí son cantones que comparten una inserción estratégica en las regiones periféricas, así como una vinculación económica a las actividades primarias y un soporte funcional en el sector terciario; no obstante, hay que reconocer que, aunque no se cuenta con los datos de Río Cuarto en el ICC, es claro que este cantón no logra alcanzar a Sarapiquí, y este último no tiende a reducir sustancialmente las brechas con Pococí.
                                </p>
                                <p>
                                    En tal sentido, las diferencias entre los cantones no tienden a ser coyunturales, y se debe entender que las políticas y las dinámicas locales no han sido lo suficientemente pertinentes para modificar las posiciones de los cantones, observando que Pococí es un cantón con un nivel de competitividad territorial funcional, que aunque se encuentra lejos de compararse a los cantones líderes del país, permite entender las distinciones estructurales que enfrentan territorios como Río Cuarto o Sarapiquí.
                                </p>
                                <p>
                                    Lo anterior permite mencionar que Pococí es un territorio con capacidad para acumular ventajas competitivas, comprendiendo que el entorno le es más favorable para desarrollar una mayor articulación institucional y actividades productivas que pueden ser de apoyo para el comercio de servicios, mientras que Sarapiquí es una región que, a pesar de su estabilidad, se encuentra estancado, sin retrocesos pero tampoco con transformaciones estructurales que puedan mejorar sus valores y condiciones, lo que implica aludir al limitado dinamismo que desarrolla la región.
                                </p>
                                <p className="text-xs text-[#6b4a4a] italic">Fuente: elaboración propia con datos recopilados del ICC - UCR</p>
                            </CardContent>
                        </Card>
                    </div>
                </section>



                <section className="py-20 px-6 lg:px-12 bg-gray-50">
                    <div className="container mx-auto max-w-6xl">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="mb-12 text-center"
                        >
                            <h2 className="text-3xl font-bold tracking-tight text-[#332222] mb-3">
                                Descomposición por pilares del ICC
                            </h2>
                            <p className="text-[#332929]/70 max-w-3xl mx-auto">
                                Siete dimensiones estratégicas para explicar brechas territoriales, capacidades acumuladas y ventanas de mejora.
                            </p>
                        </motion.div>

                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {pillarCards.map((pillar, index) => {
                                const Icon = pillar.icon
                                return (
                                    <motion.div
                                        key={pillar.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.05 }}
                                        viewport={{ once: true }}
                                    >
                                        <Card className="border border-[#852C2C]/10 hover:shadow-2xl transition-all duration-300 bg-white h-full">
                                            <CardHeader>
                                                <div className="flex items-center gap-3 mb-3">
                                                    <div className="p-2 rounded-lg bg-[#B11D1D]/10">
                                                        <Icon className="h-5 w-5 text-[#B11D1D]" />
                                                    </div>
                                                    <CardTitle className="text-lg text-[#332222]">
                                                        {pillar.title}
                                                    </CardTitle>
                                                </div>
                                            </CardHeader>
                                            <CardContent className="space-y-4">
                                                <p className="text-sm text-[#332929]/70 leading-relaxed">
                                                    {pillar.summary}
                                                </p>
                                                <div className="space-y-2">
                                                    {pillar.highlights.map((highlight, i) => (
                                                        <div key={i} className="flex gap-2 text-sm">
                                                            <span className="text-[#B11D1D] font-bold">•</span>
                                                            <span className="text-[#332929]/75">{highlight}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* Descomposición detallada por pilares */}
                <section className="py-16 px-6 lg:px-12">
                    <div className="container mx-auto max-w-6xl space-y-10">
                        {/* Pilar Económico */}
                        <Card className="border border-[#852C2C]/15 bg-white">
                            <CardHeader>
                                <CardTitle className="text-[#332222]">Descomposición del ICC - UCR: Pilar Económico</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4 text-[#332929]/85 leading-relaxed">
                                <p>
                                    Considerado el panorama general - agregado del ICC de la UCR en cada uno de los cantones de estudio, se hace un análisis de los casos de estudio por cada pilar que estructura dicho mecanismo. En este sentido, el marco descriptivo trabaja con la misma línea que ha sido desarrollada para el ICC - Agregado, considerando los dos casos de estudio que dividen a los siete cantones.
                                </p>
                                <p>
                                    En este primer apartado de descomposición se trabaja con los resultados que ha facilitado el ICC de la UCR en el pilar económico. La Escuela de Economía de la UCR define la estructura de este pilar a partir de información referente al consumo, la inversión, el gasto gubernamental y las exportaciones (UCR, 2025. p. 23).
                                </p>
                                <h4 className="font-semibold text-[#5B2D2D]">Caso de Estudio sobre competitividad económica: Sarapiquí y Pococí</h4>
                                <p>
                                    Como se ha podido observar en la información agregada del ICC de la UCR, Pococí es un cantón con un nivel de competitividad alto; dentro de su marco de análisis económico no resulta ser la excepción; caso que es contrario a Sarapiquí en donde la tendencia suele ser decreciente, aspecto que se logró presenciar en los datos generales del índice.
                                </p>
                                <p>
                                    La comparativa entre estos dos cantones tiende a marcar una brecha que se ensancha considerablemente, denotando diferencias estructurales que pueden ser observadas en el pilar económico:
                                </p>
                                <p>
                                    Pococí posee un desempeño económico con una base productiva más robusta, mayor capacidad para sostener actividades económicas en el tiempo y mayor articulación entre las actividades primarias y los servicios. Sus valores en el pilar económico son superiores a 0.349 puntos porcentuales (el valor más bajo, puntuado para el año 2012), observando valores consistentes y oscilaciones moderadas a los 0.370 puntos porcentuales; con crecimientos significativos en el año 2015 y el 2022.
                                </p>
                                <p>
                                    Por su parte, Sarapiquí es un cantón con una economía funcional pero con deficiencias que recaen en una menor capacidad para sostener un crecimiento económico continuo y que depende de actividades primarias con bajo apalancamiento. De tal manera, se puede observar que para el caso de Sarapiquí el pilar económico no ha sido un factor que impulse activamente la competitividad, sino un criterio que lo mantiene en un nivel básico. Sus valores oscilan entre los 0.240 y los 0.300 puntos porcentuales, considerando el año 2013 con mayor valor en competitividad económica con 0.296 puntos porcentuales.
                                </p>
                                <p className="text-xs text-[#6b4a4a] italic">Fuente: elaboración propia con información obtenida del ICC - UCR</p>
                                <p>
                                    A partir de ello se puede entender que Pococí es un cantón con una densidad económica de mayor escala, con mercados locales más amplios y una mayor demanda de servicios; es decir, cuentan con la presencia de una mayor diversidad económica, mientras que Sarapiquí enfrenta un panorama con mercados fragmentados y servicios orientados a la subsistencia local.
                                </p>

                                <p>
                                    Por tanto, las brechas de competitividad no son producto de diferencias institucionales nacionales, sino de capacidades diferenciadas dentro de un mismo marco institucional costarricense. En este sentido, Costa Rica se ha caracterizado por una descentralización formal acompañada de una centralización material, lo que implica que los gobiernos locales asumen múltiples responsabilidades con capacidades fiscales, técnicas y administrativas limitadas para ejercerlas plenamente.
                                </p>
                            </CardContent>
                        </Card>

                        {/* Pilar Empresarial */}
                        <Card className="border border-[#852C2C]/15 bg-white">
                            <CardHeader>
                                <CardTitle className="text-[#332222]">Descomposición del ICC - UCR: Pilar Empresarial</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4 text-[#332929]/85 leading-relaxed">
                                <p>
                                    Como segundo punto de análisis de desagregación del Índice de Competitividad Cantonal de la Universidad de Costa Rica, se cuenta con información empresarial, la cual se encuentra relacionada a “complejidad, variedad y exigencia del entorno económico que enfrentan las empresas ubicadas en el cantón” (UCR, 2025. p. 32). A partir de ello, se definen los siguientes estudios de caso para el pilar empresarial del ICC de la UCR.
                                </p>
                                <h4 className="font-semibold text-[#5B2D2D]">Caso de estudio: Sarapiquí y Pococí</h4>
                                <p>
                                    El análisis demuestra dos trayectorias diferenciadas pero estructuralmente relacionadas a características como la dependencia de actividades primarias y la vocación agroproductiva. En el periodo de análisis se vuelve a retomar una evolución que no actúa de manera homogénea y que coloca a Pococí a la cabeza, con niveles consistentemente superiores.
                                </p>
                                <p>
                                    A nivel empresarial, ambos cantones han demostrado un crecimiento y su punto más alto en el año 2013; contando para Pococí un valor de 0.401 puntos porcentuales, mientras que Sarapiquí ronda los 0.369 puntos porcentuales. Posterior a esta expansión, los cantones consolidaron una fase de ajuste y desaceleración. En tal caso, el tejido empresarial de los cantones han presenciado mayor vulnerabilidad estructural que puede deberse a una menor diversificación y dependencia de actividades primarias.
                                </p>
                                <p className="text-xs text-[#6b4a4a] italic">Fuente: elaboración propia con información obtenida del ICC - UCR</p>
                                <p>
                                    No obstante, bajo el marco de análisis de estos dos cantones hay que considerar que Pococí presenta una descendencia con menor volatilidad en comparación con Sarapiquí. Para el cantón de la provincia de Limón se muestran ventajas competitivas relacionadas a la articulación con el comercio y los servicios, así como la inserción a nivel regional; mientras que Sarapiquí cuenta con una alta dependencia sectorial y menor densidad de encadenamientos productivos.
                                </p>

                            </CardContent>
                        </Card>

                        {/* Pilar Gobierno */}
                        <Card className="border border-[#852C2C]/15 bg-white">
                            <CardHeader>
                                <CardTitle className="text-[#332222]">Descomposición del ICC - UCR: Pilar Gobierno</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4 text-[#332929]/85 leading-relaxed">
                                <p>
                                    La Escuela de Economía de la UCR define este pilar como “la capacidad del cantón de captar recursos y gestionarlos, así como la eficiencia en la respuesta y participación ciudadana” (UCR, 2025, p. 26). La recaudación de fondos se mide a través de los ingresos per cápita y el grado de dependencia de los ingresos municipales, mientras que la gestión es atinente a gastos no administrativos per cápita y gastos en la red vial por kilómetro de red cantonal y gestión ambiental; además, la eficiencia se cuantifica por medio de la cantidad de días en las que se puede otorgar una patente comercial y la participación ciudadana a través de la participación en elecciones cantonales versus las presidenciales (UCR, 2025, p. 26).
                                </p>
                                <p>
                                    A diferencia de los dos pilares analizados anteriormente, este criterio debe ser caracterizado por rupturas coyunturales, entendiendo que dependen en mayor medida de variables de gestión de corto plazo y no se definen por procesos de acumulación de capacidades como el pilar económico o empresarial. Dicho de otra manera, las capacidades no siempre se van a consolidar y las mejoras no pueden institucionalizarse: la base institucional no se destruye, sino que se interrumpe su funcionamiento.
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Frente a este análisis hay que tomar en cuenta que ninguno de los cantones en estudio pueden ser considerados como territorios de referencia. Asimismo, se evidencian tres comportamientos que caracterizan la dinámica de la competitividad gubernamental.</li>
                                    <li>Las mejoras gubernamentales no se han logrado sostener con el tiempo, esto puede deberse a limitaciones técnicas como la profesionalización administrativa, la planificación a largo plazo y la continuidad de las políticas públicas locales.</li>
                                    <li>Las fluctuaciones permiten generar una hipótesis sobre las restricciones estructurales que enfrentan los gobiernos locales en sus gestiones operativas, técnicas y financieras que limitan el desempeño de sus administraciones.</li>
                                    <li>Se retoma la tésis de las brechas como parte de las capacidades diferenciadas de los territorios para gestionar las competencias descentralizadas.</li>
                                </ul>
                                <h4 className="font-semibold text-[#5B2D2D]">Caso de estudio: Sarapiquí y Pococí</h4>
                                <p>
                                    El escenario estudiado para Sarapiquí y Pococí demuestra caídas importantes, recuperaciones marcadas en periodos específicos y rupturas con altos niveles de volatilidad. Para el caso de Sarapiquí, el mayor descenso se da entre el 2011 y el 2015, seguido de una mejora gubernamental en el periodo 2016-2019 y un periodo de decrecimiento y volatilidad en su valores porcentuales a partir del 2020. Por su parte, Pococí presencia una trayectoria más estable, con  oscilaciones moderadas y una mejora progresiva que se destaca a partir del año 2016, resaltando su valor más alto en el año 2022.
                                </p>
                                <p className="text-xs text-[#6b4a4a] italic">Fuente: elaboración propia con información obtenida del ICC - UCR</p>
                                <p>
                                    Generalmente, ninguno de los dos cantones se consolida por encima del otro. Aunque Sarapiquí demuestra una mayor volatilidad institucional y periodos de mejora relativamente rápidos acompañados de caídas abruptas, se entiende que su dependencia puede deberse a ciclos específicos en la gestión local; mientras que Pococí evidencia una mayor estabilidad que no logra alcanzar niveles de competitividad gubernamental significativos.
                                </p>

                            </CardContent>
                        </Card>

                        {/* Pilar Laboral */}
                        <Card className="border border-[#852C2C]/15 bg-white">
                            <CardHeader>
                                <CardTitle className="text-[#332222]">Descomposición del ICC - UCR: Pilar Laboral</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4 text-[#332929]/85 leading-relaxed">
                                <p>
                                    Como cuarto pilar de análisis, la Escuela de Economía de la UCR estudia “el potencial educativo de la fuerza laboral, el tamaño de la fuerza laboral y la destreza de la fuerza laboral” (UCR, 2025, p. 35). para definir el entorno de trabajo de cada cantón en aspectos de competitividad. Para los casos de estudio referentes a este pilar, se puede denotar que existen valores significativamente más altos que los que se han observado en pilares anteriores, confirmando la existencia de componentes menos dependientes de la estructura productiva y más vinculados a condiciones sociales y del mercado laboral.
                                </p>
                                <p>
                                    Hay que mencionar que; a diferencia de otros pilares del ICC, el clima laboral no mide la capacidad productiva ni institucional, sino las condiciones de inserción, la estabilidad y las relaciones laborales. Lo anterior permite interpretar que el entorno de trabajo es un fenómeno que reacciona más rápido a choques coyunturales, aunque también puede mantenerse alto en territorios con debilidades estructurales. Hay que tener en cuenta que el bienestar relativo del mercado de trabajo no siempre es reflejo directo de la competitividad económica, sino de la forma en la que los territorios se organizan para absorber su fuerza laboral.
                                </p>
                                <h4 className="font-semibold text-[#5B2D2D]">Caso de estudio: Sarapiquí y Pococí</h4>
                                <p>
                                    A nivel descriptivo, hay que observar cómo Pococí mantiene valores elevados y relativamente estables, oscilando entre 0.500 y 0.600; con picos marcados en años como en el 2014, 2016, 2019 y 2021. Por su parte, Sarapiquí ha registrado una trayectoria más irregular, con niveles más bajos que oscilan aproximadamente entre 0.415 y 0.540. Esto permite recalcar que la brecha entre ambos cantones es persistente en todos los periodos y en diferentes pilares de la competitividad cantonal.
                                </p>
                                <p className="text-xs text-[#6b4a4a] italic">Fuente: elaboración propia con información obtenida del ICC - UCR</p>
                                <p>
                                    De manera comparada, Pococí evidencia un clima laboral estructuralmente más favorable, aún en años donde se han evidenciado deterioros en otros pilares del ICC. Para este caso, el cantón permite sugerir la descripción de un escenario con mayor estabilidad del empleo y una base laboral relativamente más formalizada con mayores capacidades de absorción ante choques externos.
                                </p>
                                <p>
                                    Respecto a Sarapiquí, el ambiente de trabajo del cantón suele ser más dependiente de ciclos productivos, y aunque presencia aumentos significativos en años de expansión económica como el 2014, el 2016 o el 2019, ha tenido que hacer frente a caídas más abruptas y pronunciadas en períodos de contracción. Lo anteriormente mencionado apunta a describir un panorama con un mayor peso en el empleo estacional, con menor diversificación del mercado laboral y una dependencia del sector agroexportador.
                                </p>
                                <p>
                                    Hasta este punto, se entiende que la volatilidad que se puede observar en la dinámica laboral de estos cantones no son necesariamente el significado de un entorno de trabajo negativo, sino de menores capacidades para sostener condiciones laborales estables en el tiempo. Pococí muestra una capacidad de amortiguación social del mercado laboral, mientras que Sarapiquí, a pesar de contar con una economía activa, depende de ciclos económicos y productivos a causa de la ausencia de encadenamientos productivos y diversificación del empleo.
                                </p>
                                <p className="text-xs text-[#6b4a4a] italic">Fuente: elaboración propia con información obtenida del ICC - UCR</p>
                            </CardContent>
                        </Card>

                        {/* Pilar Infraestructura */}
                        <Card className="border border-[#852C2C]/15 bg-white">
                            <CardHeader>
                                <CardTitle className="text-[#332222]">Descomposición del ICC - UCR: Pilar Infraestructura</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4 text-[#332929]/85 leading-relaxed">
                                <p>
                                    Frente a la infraestructura, el análisis de la competitividad de los cantones se da bajo tres dimensiones que hacen énfasis al acceso de los servicios básicos como la electricidad o el agua potable; la cantidad de vías pavimentadas como parte de la movilidad y la cantidad de hogares con teléfono fijo, internet, cobertura y calidad de la red telefónica móvil como parte del acceso a las tecnologías de información (UCR, 2025, p. 29).
                                </p>
                                <p>
                                    Hay que comprender que la infraestructura de un cantón no acompaña automáticamente el crecimiento productivo o demográfico, además, es un factor que puede actuar como un cuello de botella territorial para la competitividad, los servicios y el clima laboral; reproduciendo desigualdades que impiden consolidar capacidades territoriales estables. Dicho así, se entiende que la infraestructura es un pilar transversal determinante que condiciona el desempeño de otros pilares del ICC y delimita niveles óptimos de eficiencia en la competitividad cantonal.
                                </p>
                                <h4 className="font-semibold text-[#5B2D2D]">Caso de estudio: Sarapiquí y Pococí</h4>
                                <p>
                                    A nivel infraestructural, los dos cantones no superan valores mayores a 0.500 durante todo el transcurso estudiado; sin embargo, enfrentan trayectorias diferenciadas donde Pococí se mantiene sistemáticamente por encima de Sarapiquí, mostrando a este último con un proceso de deterioro más profundo con algunas recuperaciones abruptas que se pueden denotar en los últimos años (2022 - 2023).
                                </p>
                                <p>
                                    Estructuralmente ambos cantones enfrentan rezagos durante períodos sostenidos. Entre el 2013 y el 2016 Pococí presenció una tendencia decreciente que posteriormente registraría mejoras en 2018, con contracciones que volverían a verse en 2019, y las cuales han presenciado mejoras leves con una estabilidad porcentual superiores a 0.400. En el caso de Sarapiquí, el valor más alto que se registra es en el año 2011; valor que logra recuperarse en 2023. Entre el 2012 y el 2019 el cantón experimentó caídas abruptas que incluso llegaron a ser inferiores a 0.200 puntos porcentuales.
                                </p>
                                <p className="text-xs text-[#6b4a4a] italic">Fuente: elaboración propia con información obtenida del ICC - UCR</p>
                                <p>
                                    Estos dos escenarios demuestran que Pococí cuenta con una infraestructura insuficiente pero relativamente estable debido a una mejor conectividad y mayor acumulación de infraestructura básica; mientras que Sarapiquí, aunque ha presenciado mejoras, estas no responden a procesos graduales, sino a intervenciones que se concentran en el tiempo y que dependen de choques de inversión.
                                </p>

                            </CardContent>
                        </Card>

                        {/* Pilar Innovación */}
                        <Card className="border border-[#852C2C]/15 bg-white">
                            <CardHeader>
                                <CardTitle className="text-[#332222]">Descomposición del ICC - UCR: Pilar sobre innovación</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4 text-[#332929]/85 leading-relaxed">
                                <p>
                                    La capacidad de innovación de un cantón es definida por la Escuela de Economía de la UCR bajo tres variables: la primera en cómo se “examinan las exportaciones de alta tecnología generadas en el cantón” (UCR, 2025, p. 38), mientras que las otras dos evalúan capacidades relacionadas a la adquisición, el proceso y aprovechamiento de conocimientos avanzados que se reflejan en las matrículas de los estudiantes en carreras afines a Ciencia y Tecnología en universidades públicas; así como el porcentaje de centros educativos con acceso a internet (UCR, 2025).
                                </p>
                                <p>
                                    Ahora bien, hay que entender que este pilar es uno de los más sensibles a procesos acumulativos y de los menos homogéneos territorialmente entre los siete que conforman el ICC de la UCR, aclarando que este depende de un capital humano calificado, articulación entre la educación superior y el sector productivo, consolidación de políticas públicas y un panorama empresarial y tecnológico.
                                </p>
                                <p>
                                    En tal sentido, los valores cantonales en este pilar no suelen presentar trayectorias lineales, sino saltos, estancamientos y algunas ventanas de oportunidades. Generalmente, se observan tres momentos clave, en el que se destaca una fase de baja innovación estructural, un punto de inflexión y una diferenciación territorial. Ante ello, el patrón desarrollado deja entredicho que la innovación no responde solo a capacidades locales, sino a dinámicas externas en ciertos periodos.
                                </p>
                                <h4 className="font-semibold text-[#5B2D2D]">Caso de estudio: Sarapiquí y Pococí</h4>
                                <p>
                                    Para el caso de Sarapiquí su caracterización se basa en una innovación tardía pero acumulativa con niveles muy bajos entre el año 2011 y el 2013. El valor más bajo que registra el cantón se da en el 2012, con 0.104 puntos porcentuales que van incrementando de manera lenta y fragmentada hasta el 2018. Entre el 2019 y el 2021 el cantón presenció una aceleración rápida, con un pico en 2021 y leves cambios para los últimos dos años estudiados.
                                </p>
                                <p>
                                    Como punto aclaratorio del MAC para el análisis de Sarapiquí, se puede evidenciar un cambio de trayectoria que depende de shocks externos que deben ser tomados en consideración, como programas, proyectos o encadenamientos. La innovación del cantón no es parte de una estructura consolidada, claro es que hay una ausencia de un ecosistema innovador; no obstante, la región ha contado con la capacidad de absorción para solventar procesos de competitividad en la capacidad de innovación.
                                </p>
                                <p>
                                    Por otro lado, Pococí cuenta con un mayor nivel relativo, pero con una trayectoria volátil. Sus valores parten desde niveles superiores a los de Sarapiquí, y oscilan entre 0.250 (caída más importante registrada) y 0.545 (máximo histórico en 2023). El cantón cuenta con mayor cantidad de empresas, población y actividades económicas que no se encuentran exentas de innovaciones coyunturales, y aunque enfrentan mejoras rápidas no siempre se sostienen de manera continua. Dicho de otra forma, aunque el cantón cuenta con mayores niveles de innovación, no significa que siempre lo haga mejor.
                                </p>
                                <p className="text-xs text-[#6b4a4a] italic">Fuente: elaboración propia con información obtenida del ICC - UCR</p>
                                <p>
                                    Bajo el análisis de este primer caso de estudio, se puede evidenciar que tanto Sarapiquí como Pococí han experimentado procesos de aprendizaje e incorporación de capacidades innovadoras de forma tardía; con algunas mejoras recientes que, si bien son relevantes, no configuran trayectorias plenamente consolidadas.
                                </p>

                            </CardContent>
                        </Card>

                        {/* Pilar Calidad de Vida */}
                        <Card className="border border-[#852C2C]/15 bg-white">
                            <CardHeader>
                                <CardTitle className="text-[#332222]">Descomposición del ICC - UCR: Pilar Calidad de Vida</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4 text-[#332929]/85 leading-relaxed">
                                <p>
                                    De acuerdo con la Escuela de Economía de la UCR, la calidad de vida se asocia principalmente a las dimensiones de seguridad ciudadana, salud y ambiente a nivel cantonal (UCR, 2025, p. 41). La lectura de este pilar debe comprenderse como una medición de resultados sociales y territoriales acumulados a lo largo del tiempo, más que como una expresión directa de capacidades productivas o económicas.
                                </p>
                                <p>
                                    A diferencia de otros pilares del ICC, como infraestructura o innovación, la calidad de vida suele presenciar movimientos menos abruptos, dado que responde a procesos sociales de mayor inercia; sin embargo, permite identificar con claridad vulnerabilidades sociales latentes cuando los territorios enfrentan choques económicos, institucionales o de gobernanza local.
                                </p>
                                <p>
                                    Asimismo, es fundamental considerar que la calidad de vida no converge automáticamente con mejoras en el desempeño económico o empresarial. Los cantones con menor acumulación de capacidades tienden a mostrar avances intermitentes, mejoras reversibles y una alta dependencia de factores externos. Lo que evidencia que la competitividad territorial no siempre se traduce en bienestar social sostenido. En este sentido, el análisis de este pilar refuerza la necesidad de políticas públicas locales integradas, capaces de articular crecimiento económico, provisión de servicios públicos y cohesión social dentro de un mismo marco institucional.
                                </p>
                                <h4 className="font-semibold text-[#5B2D2D]">Caso de estudio: Sarapiquí y Pococí</h4>
                                <p>
                                    Para el primer caso de estudio hay que observar que Sarapiquí es un cantón con una base inicial favorable, con niveles relativamente altos dentro del grupo de cantones analizados. Sus valores oscilan entre 0.430 y 0.720 puntos porcentuales; no obstante, hay que destacar periodos en los que el cantón presenció descensos progresivos como en 2013-2016; así como puntos de inflexión en 2017 y recuperaciones parciales entre el 2018 y el 2023.
                                </p>
                                <p>
                                    En definitiva, el cantón ha hecho el esfuerzo por retornar a valores como los iniciales; sin embargo, aunque el punto de partida fue sólido, hay que considerar que la sostenibilidad de la calidad de vida no será sostenible si no se acompaña de mejoras estructurales de empleabilidad, infraestructura social y servicios públicos.
                                </p>
                                <p>
                                    Por su parte, Pococí enmarca valores inferiores a los registrados en Sarapiquí. La trayectoria del cantón, aunque refleja un periodo relativamente estable entre el 2011 y el 2016,  no demuestra mejoras sustantivas; sin embargo, esto no significa que la región evite implementar medidas de contención del deterioro social. Los años posteriores a este panorama presencian algunas caídas, no obstante, hay repuntes que registran valores altos como el del año 2023 (0.587 puntos porcentuales).
                                </p>
                                <p>
                                    Aunque Sarapiquí supera en algunos períodos específicos los valores que registra el cantón de Pococí en la calidad de vida, hay que reconocer que este último ha evidenciado una mayor capacidad de ajuste social a corto plazo; lo que demanda al MAC identificar si estas mejoras se pueden deber a articulaciones productivas o servicios y accesos relativos a mercados.
                                </p>
                                <p className="text-xs text-[#6b4a4a] italic">Fuente: elaboración propia con información obtenida del ICC - UCR</p>

                            </CardContent>
                        </Card>
                    </div>
                </section>

                <section className="py-12 px-6 lg:px-12 border-t border-[#E5E5E5] bg-white">
                    <div className="container mx-auto max-w-6xl">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="space-y-6"
                        >
                            <div>
                                <h3 className="text-sm font-bold text-[#5B2D2D] uppercase tracking-wide mb-4">
                                    Consideraciones finales
                                </h3>
                                <div className="space-y-4 text-sm text-[#332929]/80 leading-relaxed">
                                    <p>
                                        A lo largo del módulo se ha logrado plantear el ICC como un mecanismo multidimensional que permite identificar diferencias cantonales. La descomposición del índice en sus diferentes pilares ha permitido evidenciar que las brechas territoriales no responden directamente a diferencias en el marco institucional de Costa Rica, sino a capacidades locales heterogéneas que se construyen, articulan o erosionan a lo largo del tiempo dentro de un mismo marco normativo costarricense.
                                    </p>
                                    <p>
                                        El análisis de los pilares demuestra patrones recurrentes de desempeño que no necesariamente convergen entre sí. Algunos cantones pueden sostener ventajas relativas mediante la acumulación de capacidades económicas, empresariales y sociales, mientras que otros pueden verse marcados por trayectorias volátiles, fragmentadas o con alta dependencia hacia factores externos.
                                    </p>
                                    <p>
                                        La heterogeneidad que aquí se describe confirma que la competitividad cantonal no es un resultado automático del crecimiento económico o  de consecuencias relacionadas a la descentralización, sino que tiende a ser el producto de interacciones entre la gobernanza territorial, el capital humano, la infraestructura, la articulación productiva y la integración institucional.
                                    </p>
                                    <p>
                                        Se ha logrado demostrar que hay pilares que tienden a reforzarse mutuamente, como la competitividad empresarial y económica a través de encadenamientos productivos y capacidades acumuladas; mientras que otros como la innovación o la calidad de vida pueden amplificar las brechas territoriales debido a la alta dependencia de procesos de largo plazo e inversión sostenida. Asimismo, pilares como el gubernamental han evidenciado la alta sensibilidad a choques coyunturales, lo que demuestra los límites de la descentralización cuando no se cuenta con capacidades técnicas y administrativas eficientes a nivel local.
                                    </p>

                                    <p>
                                        En definitiva, el mecanismo permite consolidar la hipótesis en la que los territorios cuentan con desigualdades competitivas, no por un diseño institucional nacional, sino por capacidades territoriales para activar, sostener y articular recursos productivos, sociales e institucionales. El ICC facilita la identificación de trayectorias diferenciadas que buscan comprender los desafíos del desarrollo local y reforzar la necesidad de enfoques políticos territoriales más diferenciados y contextualizados.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
