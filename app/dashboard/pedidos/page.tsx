import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Search, Plus, Filter } from "lucide-react"

export default function PedidosPage() {
  const orders = [
    { id: "001", client: "Cliente A", value: "R$ 1.500,00", status: "Pendente", date: "15/09/2025" },
    { id: "002", client: "Cliente B", value: "R$ 2.300,00", status: "Aprovado", date: "14/09/2025" },
    { id: "003", client: "Cliente C", value: "R$ 890,00", status: "Entregue", date: "13/09/2025" },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pendente":
        return "bg-yellow-100 text-yellow-800"
      case "Aprovado":
        return "bg-blue-100 text-blue-800"
      case "Entregue":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <ShoppingCart className="h-6 w-6 text-blue-600" />
          <h1 className="text-2xl font-bold text-gray-900">Pedidos</h1>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Novo Pedido
        </Button>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input placeholder="Buscar pedidos..." className="pl-10" />
        </div>
        <Button variant="outline">
          <Filter className="h-4 w-4 mr-2" />
          Filtros
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Lista de Pedidos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {orders.map((order) => (
              <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <div>
                    <p className="font-medium">Pedido #{order.id}</p>
                    <p className="text-sm text-gray-600">{order.client}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <p className="font-medium">{order.value}</p>
                    <p className="text-sm text-gray-600">{order.date}</p>
                  </div>
                  <Badge className={getStatusColor(order.status)}>{order.status}</Badge>
                  <Button variant="outline" size="sm">
                    Ver Detalhes
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
