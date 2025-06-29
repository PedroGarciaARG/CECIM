import { User, Award, Calendar, MapPin } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedDots } from "@/components/animated-dots"

export default function ComitePage() {
  const members = [
    {
      name: "Ana Lucia Cappi",
      role: "Presidente",
      profession: "Diplomada en biotecnología",
      birthDate: "11/8/1984",
      gender: "Femenino",
      relation: "Asesora en investigación clínica",
      isPresident: true,
    },
    {
      name: "Juan Simón Cappi",
      role: "Vocal",
      profession: "Empleado de comercio",
      birthDate: "12/5/1987",
      gender: "Masculino",
      relation: "Miembro de la comunidad",
    },
    {
      name: "Emanuel Gonzalo Cañoto",
      role: "Vocal",
      profession: "Profesor de filosofía",
      birthDate: "31/7/1980",
      gender: "Masculino",
      relation: "Asesor ético-filosófico",
    },
    {
      name: "Marcela Inés Gallelo",
      role: "Vocal",
      profession: "Médica Cardióloga",
      birthDate: "31/12/1974",
      gender: "Femenino",
      relation: "Cardióloga consultora",
    },
    {
      name: "Cintia Dante Arguello",
      role: "Vocal / Secretaria",
      profession: "Empleada de comercio",
      birthDate: "15/3/1985",
      gender: "Femenino",
      relation: "Miembro de la comunidad",
    },
    {
      name: "Celeste Solange Lugo",
      role: "Vocal",
      profession: "Abogada",
      birthDate: "25/3/1984",
      gender: "Femenino",
      relation: "Abogada consultora",
    },
    {
      name: "Vanina Ornela Mazur",
      role: "Vocal",
      profession: "Veterinaria",
      birthDate: "10/10/1987",
      gender: "Femenino",
      relation: "Miembro de la comunidad científica - EXTERNO",
      isExternal: true,
    },
    {
      name: "Paola Vanesa Lugo",
      role: "Vocal",
      profession: "Contadora",
      birthDate: "25/12/1978",
      gender: "Femenino",
      relation: "Miembro de la comunidad - EXTERNO",
      isExternal: true,
    },
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-white text-blue-900 overflow-hidden">
        <AnimatedDots />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-in slide-in-from-bottom-4 duration-1000">
            Composición del Comité
          </h1>
          <p className="text-xl text-blue-700 max-w-3xl mx-auto animate-in slide-in-from-bottom-4 duration-1000 delay-300">
            Nuestro comité está integrado por profesionales de diversas disciplinas para garantizar una evaluación ética
            integral
          </p>
        </div>
      </section>

      {/* Committee Info */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-blue-200 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-blue-800 flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  Ubicación
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  San Benito 111, Temperley
                  <br />
                  CP B1834GUK
                  <br />
                  Lomas de Zamora, Buenos Aires
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-200 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-blue-800 flex items-center">
                  <Award className="w-5 h-5 mr-2" />
                  Acreditación
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  CEC-MSPBA Nro: 071/2019 – Folio 051
                  <br />
                  <span className="text-sm text-blue-600 font-medium">Reacreditado: 19 de agosto de 2022</span>
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-200 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-blue-800 flex items-center">
                  <User className="w-5 h-5 mr-2" />
                  Composición
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  8 miembros multidisciplinarios
                  <br />
                  <span className="text-sm text-blue-600">Incluyendo miembros externos</span>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Members Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Miembros del Comité</h2>
            <p className="text-gray-600">Profesionales comprometidos con la excelencia ética en investigación</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {members.map((member, index) => (
              <Card
                key={index}
                className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                  member.isPresident
                    ? "border-2 border-blue-500 bg-gradient-to-br from-blue-50 to-white"
                    : "border-gray-200 hover:border-blue-300"
                }`}
              >
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform ${
                        member.isPresident ? "bg-blue-600" : "bg-blue-100"
                      }`}
                    >
                      <User className={`w-8 h-8 ${member.isPresident ? "text-white" : "text-blue-600"}`} />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg text-blue-900 group-hover:text-blue-700 transition-colors">
                        {member.name}
                      </CardTitle>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <Badge variant={member.isPresident ? "default" : "secondary"} className="text-xs">
                          {member.role}
                        </Badge>
                        {member.isExternal && (
                          <Badge variant="outline" className="text-xs border-green-500 text-green-700">
                            Externo
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="font-medium text-gray-700">Profesión:</span>
                      <p className="text-gray-600">{member.profession}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Relación:</span>
                      <p className="text-gray-600">{member.relation}</p>
                    </div>
                    <div className="flex items-center text-gray-500 text-xs">
                      <Calendar className="w-3 h-3 mr-1" />
                      {member.gender} • {member.birthDate}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-blue-900 mb-8">Liderazgo del Comité</h2>

            <Card className="border-2 border-blue-500 bg-gradient-to-br from-blue-50 to-white">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
                  <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center">
                    <User className="w-12 h-12 text-white" />
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="text-2xl font-bold text-blue-900 mb-2">Ana Lucia Cappi</h3>
                    <p className="text-blue-600 font-semibold mb-4">Presidente CECIM</p>
                    <p className="text-gray-700 mb-4">
                      Diplomada en biotecnología y asesora en investigación clínica. Lidera nuestro comité con
                      experiencia y compromiso hacia la excelencia ética en investigación médica.
                    </p>
                    <div className="text-sm text-gray-600">
                      <p>
                        <strong>Teléfono:</strong> 011-1541930496
                      </p>
                      <p>
                        <strong>Email:</strong> annlee87@hotmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
