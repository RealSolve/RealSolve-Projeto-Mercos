import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Globe, ExternalLink, Settings, Users, BarChart3 } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function PortalPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Globe className="h-6 w-6 text-blue-600" />
          <h1 className="text-2xl font-bold text-gray-900">Portal</h1>
          <Badge className="bg-green-100 text-green-800">Novo</Badge>
        </div>
        <Button>
          <Settings className="h-4 w-4 mr-2" />
          Configurar Portal
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Globe className="h-5 w-5" />
              <span>Portal do Cliente</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600">Permita que seus clientes façam pedidos online através do portal web.</p>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Status:</span>
                <Badge className="bg-yellow-100 text-yellow-800">Configurando</Badge>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span>Clientes ativos:</span>
                <span>0</span>
              </div>
            </div>
            <Button className="w-full">
              <ExternalLink className="h-4 w-4 mr-2" />
              Acessar Portal
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Users className="h-5 w-5" />
              <span>Gestão de Usuários</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600">Gerencie os usuários que têm acesso ao portal.</p>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Usuários cadastrados:</span>
                <span>0</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span>Usuários ativos:</span>
                <span>0</span>
              </div>
            </div>
            <Button variant="outline" className="w-full bg-transparent">
              Gerenciar Usuários
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BarChart3 className="h-5 w-5" />
              <span>Analytics</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600">Acompanhe o desempenho do seu portal.</p>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Visitas hoje:</span>
                <span>0</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span>Pedidos via portal:</span>
                <span>0</span>
              </div>
            </div>
            <Button variant="outline" className="w-full bg-transparent">
              Ver Relatórios
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="p-6">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Globe className="h-6 w-6 text-blue-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Configure seu Portal do Cliente</h3>
              <p className="text-blue-700 mb-4">
                O Portal do Cliente permite que seus clientes façam pedidos diretamente online, consultem histórico de
                compras e acompanhem o status dos pedidos.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700">Começar Configuração</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
