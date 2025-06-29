import Link from "next/link"
import { ArrowRight, Shield, FileCheck, Eye, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedDots } from "@/components/animated-dots"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-white text-blue-900 overflow-hidden">
        <AnimatedDots />

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="mb-8">
              <img
                src="/logo-cecim.png"
                alt="CECIM Logo"
                className="h-40 w-auto mx-auto mb-6 animate-in zoom-in duration-1000 delay-300 drop-shadow-lg"
              />
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-in slide-in-from-bottom-4 duration-1000 delay-500">
              Comité de Ética del Centro de
              <br />
              <span className="text-blue-600">Investigaciones Médicas</span>
              <br />
              Temperley
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-blue-700 max-w-4xl mx-auto animate-in slide-in-from-bottom-4 duration-1000 delay-700">
              Garantizamos la integridad ética en la investigación clínica, protegiendo los derechos y el bienestar de
              los participantes en estudios de investigación médica.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in slide-in-from-bottom-4 duration-1000 delay-1000">
              <Button asChild size="lg" className="bg-blue-600 text-white hover:bg-blue-50 group">
                <Link href="/servicios">
                  Nuestros Servicios
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-transparent"
              >
                <Link href="/contacto">Contactar</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-blue-600/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-blue-600/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Excelencia en Ética Médica</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Comprometidos con los más altos estándares éticos en investigación clínica
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Protección de Participantes",
                description:
                  "Garantizamos la seguridad y derechos de todos los participantes en estudios de investigación.",
              },
              {
                icon: FileCheck,
                title: "Evaluación Rigurosa",
                description: "Revisión exhaustiva de protocolos y documentación según estándares internacionales.",
              },
              {
                icon: Eye,
                title: "Monitoreo Continuo",
                description: "Seguimiento ético permanente durante toda la duración de los estudios.",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-blue-100"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300">
                    <feature.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "071/2019", label: "Acreditación CEC-MSPBA" },
              { number: "2022", label: "Última Reacreditación" },
              { number: "8", label: "Miembros del Comité" },
              { number: "100%", label: "Compromiso Ético" },
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <Award className="w-16 h-16 mx-auto mb-6 text-blue-200" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Necesita evaluación ética para su investigación?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Nuestro equipo de expertos está listo para guiarle en el proceso de evaluación ética de su estudio de
              investigación.
            </p>
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50 group">
              <Link href="/contacto">
                Iniciar Consulta
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
