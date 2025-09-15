import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Plus, Filter, MapPin, User } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function AgendaPage() {
  const appointments = [
    {
      id: "001",
      title: "Reunião com Cliente ABC",
      client: "Empresa ABC Ltda",
      date: "15/09/2025",
      time: "14:00",
      location: "Escritório Central",
      status: "Confirmado",
    },
    {
      id: "002",
      title: "Apresentação de Produtos",
      client: "Comércio XYZ",
      date: "16/09/2025",
      time: "10:30",
      location: "Cliente",
      status: "Pendente",
    },
    {
      id: "003",
      title: "Follow-up de Proposta",
      client: "Distribuidora 123",
      date: "17/09/2025",
      time: "16:00",
      location: "Videoconferência",
      status: "Confirmado",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Confirmado":
        return "bg-green-100 text-green-800"
      case "Pendente":
        return "bg-yellow-100 text-yellow-800"
      case "Cancelado":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Calendar className="h-6 w-6 text-blue-600" />
          <h1 className="text-2xl font-bold text-gray-900">Agenda</h1>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filtros
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Novo Compromisso
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Próximos Compromissos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {appointments.map((appointment) => (
                  <div key={appointment.id} className="flex items-start space-x-4 p-4 border rounded-lg">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Calendar className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-medium text-gray-900">{appointment.title}</h3>
                          <div className="flex items-center space-x-2 text-sm text-gray-600 mt-1">
                            <User className="h-4 w-4" />
                            <span>{appointment.client}</span>
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-gray-600 mt-2">
                            <div className="flex items-center space-x-1">
                              <Calendar className="h-4 w-4" />
                              <span>{appointment.date}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="h-4 w-4" />
                              <span>{appointment.time}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin className="h-4 w-4" />
                              <span>{appointment.location}</span>
                            </div>
                          </div>
                        </div>
                        <Badge className={getStatusColor(appointment.status)}>{appointment.status}</Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Resumo do Dia</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Compromissos hoje:</span>
                <span className="font-medium">1</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Confirmados:</span>
                <span className="font-medium text-green-600">1</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Pendentes:</span>
                <span className="font-medium text-yellow-600">0</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Ações Rápidas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full justify-start bg-transparent">
                <Plus className="h-4 w-4 mr-2" />
                Agendar Reunião
              </Button>
              <Button variant="outline" className="w-full justify-start bg-transparent">
                <Calendar className="h-4 w-4 mr-2" />
                Ver Calendário
              </Button>
              <Button variant="outline" className="w-full justify-start bg-transparent">
                <Clock className="h-4 w-4 mr-2" />
                Reagendar
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
