import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Grid3X3 } from "lucide-react"

export default function PainelPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2">
        <Grid3X3 className="h-6 w-6 text-blue-600" />
        <h1 className="text-2xl font-bold text-gray-900">Painel</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Visão Geral</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">Painel principal com informações gerais do sistema.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Atividades Recentes</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">Últimas atividades realizadas no sistema.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Notificações</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">Alertas e notificações importantes.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
