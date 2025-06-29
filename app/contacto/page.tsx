import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { AnimatedDots } from "@/components/animated-dots"

export default function ContactoPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-white text-blue-900 overflow-hidden">
        <AnimatedDots />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-in slide-in-from-bottom-4 duration-1000">
            Contacto
          </h1>
          <p className="text-xl text-blue-700 max-w-3xl mx-auto animate-in slide-in-from-bottom-4 duration-1000 delay-300">
            Estamos aquí para ayudarle con sus consultas sobre evaluación ética en investigación clínica
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-8">Envíanos un mensaje</h2>
              <Card className="border-blue-200">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                          Nombre completo
                        </label>
                        <Input
                          id="nombre"
                          placeholder="Su nombre completo"
                          className="border-blue-200 focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="su.email@ejemplo.com"
                          className="border-blue-200 focus:border-blue-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
                        Teléfono
                      </label>
                      <Input
                        id="telefono"
                        placeholder="Su número de teléfono"
                        className="border-blue-200 focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="asunto" className="block text-sm font-medium text-gray-700 mb-2">
                        Asunto
                      </label>
                      <Input
                        id="asunto"
                        placeholder="Motivo de su consulta"
                        className="border-blue-200 focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-2">
                        Mensaje
                      </label>
                      <Textarea
                        id="mensaje"
                        rows={6}
                        placeholder="Describa su consulta o solicitud..."
                        className="border-blue-200 focus:border-blue-500"
                      />
                    </div>

                    <Button className="w-full bg-blue-600 hover:bg-blue-700 group">
                      <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                      Enviar mensaje
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Details */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-8">Información de contacto</h2>
                <p className="text-gray-600 mb-8">
                  Para consultas sobre estudios de investigación, evaluaciones éticas o cualquier información
                  relacionada con nuestros servicios.
                </p>
              </div>

              {/* President Contact */}
              <Card className="border-2 border-blue-500 bg-gradient-to-br from-blue-50 to-white hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-blue-800 flex items-center">
                    <Phone className="w-5 h-5 mr-2" />
                    Presidenta del Comité
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-blue-900">Ana Lucia Cappi</h3>
                      <p className="text-blue-600 font-medium">Presidente CECIM</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center text-gray-700">
                        <Phone className="w-4 h-4 mr-3 text-blue-600" />
                        <span>011-1541930496</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <Mail className="w-4 h-4 mr-3 text-blue-600" />
                        <span>annlee87@hotmail.com</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Institutional Contact */}
              <Card className="border-blue-200 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-blue-800 flex items-center">
                    <Mail className="w-5 h-5 mr-2" />
                    Contacto Institucional
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-700">
                      <Phone className="w-4 h-4 mr-3 text-blue-600" />
                      <span>1141930496</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Mail className="w-4 h-4 mr-3 text-blue-600" />
                      <span>cecim.comite.de.etica@gmail.com</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Location */}
              <Card className="border-blue-200 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-blue-800 flex items-center">
                    <MapPin className="w-5 h-5 mr-2" />
                    Ubicación
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-gray-700 font-medium">Centro de Investigaciones Médicas Temperley</p>
                    <div className="text-gray-600">
                      <p>San Benito 111, Temperley</p>
                      <p>CP B1834GUK</p>
                      <p>Lomas de Zamora, Buenos Aires</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Office Hours */}
              <Card className="border-blue-200 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-blue-800 flex items-center">
                    <Clock className="w-5 h-5 mr-2" />
                    Horarios de atención
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-gray-700">
                    <p>
                      <strong>Lunes a Viernes:</strong> 9:00 - 17:00
                    </p>
                    <p>
                      <strong>Sábados:</strong> 9:00 - 13:00
                    </p>
                    <p className="text-sm text-blue-600 mt-3">
                      Para consultas urgentes, contactar directamente a la presidenta
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Nuestra ubicación</h2>
            <p className="text-gray-600">Nos encontramos en el corazón de Temperley, Buenos Aires</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <div className="h-96 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-blue-900 mb-2">San Benito 111, Temperley</h3>
                  <p className="text-blue-700">Lomas de Zamora, Buenos Aires</p>
                  <p className="text-sm text-blue-600 mt-2">CP B1834GUK</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
