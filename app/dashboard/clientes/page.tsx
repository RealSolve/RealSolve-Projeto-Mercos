import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Users, Search, Plus, Filter, Phone, Mail } from "lucide-react"

export default function ClientesPage() {
  const clients = [
    {
      id: "001",
      name: "Empresa ABC Ltda",
      contact: "João Silva",
      email: "joao@empresaabc.com",
      phone: "(11) 99999-9999",
      status: "Ativo",
      lastOrder: "15/09/2025",
    },
    {
      id: "002",
      name: "Comércio XYZ",
      contact: "Maria Santos",
      email: "maria@comercioxyz.com",
      phone: "(11) 88888-8888",
      status: "Ativo",
      lastOrder: "10/09/2025",
    },
    {
      id: "003",
      name: "Distribuidora 123",
      contact: "Pedro Costa",
      email: "pedro@dist123.com",
      phone: "(11) 77777-7777",
      status: "Inativo",
      lastOrder: "01/08/2025",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Users className="h-6 w-6 text-blue-600" />
          <h1 className="text-2xl font-bold text-gray-900">Clientes</h1>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Novo Cliente
        </Button>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input placeholder="Buscar clientes..." className="pl-10" />
        </div>
        <Button variant="outline">
          <Filter className="h-4 w-4 mr-2" />
          Filtros
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {clients.map((client) => (
          <Card key={client.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{client.name}</CardTitle>
                <Badge
                  className={client.status === "Ativo" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}
                >
                  {client.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="font-medium text-gray-900">{client.contact}</p>
                <div className="flex items-center space-x-2 text-sm text-gray-600 mt-1">
                  <Mail className="h-4 w-4" />
                  <span>{client.email}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600 mt-1">
                  <Phone className="h-4 w-4" />
                  <span>{client.phone}</span>
                </div>
              </div>
              <div className="pt-2 border-t">
                <p className="text-sm text-gray-600">Último pedido: {client.lastOrder}</p>
              </div>
              <Button variant="outline" className="w-full bg-transparent">
                Ver Detalhes
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
