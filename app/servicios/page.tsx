import { FileCheck, Eye, CheckCircle, AlertTriangle, Clock, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedDots } from "@/components/animated-dots"

export default function ServiciosPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-white text-blue-900 overflow-hidden">
        <AnimatedDots />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-in slide-in-from-bottom-4 duration-1000">
            Servicios del Comité de Ética
          </h1>
          <p className="text-xl text-blue-700 max-w-3xl mx-auto animate-in slide-in-from-bottom-4 duration-1000 delay-300">
            Ofrecemos servicios especializados para garantizar el cumplimiento ético en investigaciones médicas y
            clínicas
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Service 1 */}
            <Card className="border-l-4 border-l-blue-600 hover:shadow-xl transition-all duration-300 group">
              <CardHeader>
                <CardTitle className="text-blue-800 flex items-center text-2xl group-hover:text-blue-600 transition-colors">
                  <FileCheck className="w-8 h-8 mr-4 group-hover:scale-110 transition-transform" />
                  Revisión, Evaluación y Seguimiento Ético
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-700 text-lg">
                  Antes de iniciar cualquier estudio de investigación en salud humana, el investigador debe obtener la
                  aprobación escrita del CECIM.
                </p>

                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-l-blue-400">
                  <h4 className="font-semibold text-blue-800 mb-4 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Documentación requerida:
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    {[
                      "Protocolo del estudio y sus enmiendas",
                      "Documentos del consentimiento informado",
                      "Materiales dirigidos a participantes",
                      "Proceso de incorporación de participantes",
                      "Monografía del producto en investigación",
                      "Información sobre procedimientos experimentales",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { icon: CheckCircle, text: "Aprobar", color: "green" },
                    { icon: Clock, text: "Solicitar modificaciones", color: "yellow" },
                    { icon: AlertTriangle, text: "Desaprobar", color: "red" },
                    { icon: Users, text: "Suspender/Cancelar", color: "orange" },
                  ].map((action, index) => (
                    <div
                      key={index}
                      className={`flex items-center p-3 rounded-lg bg-${action.color}-50 border border-${action.color}-200`}
                    >
                      <action.icon className={`w-5 h-5 mr-2 text-${action.color}-600`} />
                      <span className={`text-${action.color}-800 font-medium`}>{action.text}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 font-medium">
                    <Badge variant="outline" className="mr-2">
                      Importante
                    </Badge>
                    Todas las decisiones se notifican por escrito con justificaciones correspondientes, basadas en
                    regulaciones nacionales (ANMAT, GCBA) y Buenas Prácticas Clínicas (GCP).
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Service 2 */}
            <Card className="border-l-4 border-l-green-600 hover:shadow-xl transition-all duration-300 group">
              <CardHeader>
                <CardTitle className="text-green-800 flex items-center text-2xl group-hover:text-green-600 transition-colors">
                  <Eye className="w-8 h-8 mr-4 group-hover:scale-110 transition-transform" />
                  Monitoreo Ético de Estudios
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-700 text-lg">
                  Realizamos visitas de monitoreo ético periódicas a centros donde se desarrollan estudios autorizados
                  por ANMAT.
                </p>

                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-l-green-400">
                  <h4 className="font-semibold text-green-800 mb-4 flex items-center">
                    <Eye className="w-5 h-5 mr-2" />
                    Objetivos del monitoreo:
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    {[
                      "Garantizar cumplimiento de estándares éticos",
                      "Fortalecer calidad de revisión ética",
                      "Seguimiento sistemático post-aprobación",
                      "Proteger derechos de participantes",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-l-yellow-400">
                  <h4 className="font-semibold text-yellow-800 mb-4 flex items-center">
                    <AlertTriangle className="w-5 h-5 mr-2" />
                    En caso de riesgos detectados:
                  </h4>
                  <div className="space-y-3">
                    {[
                      "Sugerencia de medidas correctivas al patrocinador",
                      "Recomendación de suspensión del estudio",
                      "Emisión de informes detallados de monitoreo",
                    ].map((item, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-blue-800 font-medium">
                    <Badge variant="secondary" className="mr-2">
                      Proceso
                    </Badge>
                    El monitoreo se inicia una vez que el estudio ha sido aprobado e implementado, con comunicación
                    formal de resultados al Patrocinador e Investigador.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Proceso de Evaluación</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Seguimos un proceso estructurado para garantizar la máxima calidad en nuestras evaluaciones
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>

              {[
                {
                  step: "1",
                  title: "Recepción de Documentación",
                  description: "Revisión inicial de la documentación completa del estudio",
                },
                {
                  step: "2",
                  title: "Evaluación Ética",
                  description: "Análisis detallado por parte del comité multidisciplinario",
                },
                {
                  step: "3",
                  title: "Decisión y Comunicación",
                  description: "Emisión de dictamen por escrito con justificaciones",
                },
                {
                  step: "4",
                  title: "Monitoreo Continuo",
                  description: "Seguimiento ético durante toda la duración del estudio",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-center mb-12 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
                    <Card className="hover:shadow-lg transition-all duration-300 group">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4 group-hover:scale-110 transition-transform">
                            {item.step}
                          </div>
                          <h3 className="text-xl font-semibold text-blue-900">{item.title}</h3>
                        </div>
                        <p className="text-gray-600">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
