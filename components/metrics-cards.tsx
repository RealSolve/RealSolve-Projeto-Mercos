import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function MetricsCards() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-xs font-medium text-gray-500 uppercase">VENDIDO NO MÊS</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-gray-900 mb-1">R$ 0,00</div>
          <div className="text-xs text-gray-500">Falta R$ 0,00</div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-xs font-medium text-gray-500 uppercase">OBJETIVO DO MÊS</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-gray-900 mb-1">R$ 0,00</div>
          <Button variant="link" className="text-blue-600 p-0 h-auto text-xs">
            Definir metas
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-xs font-medium text-gray-500 uppercase">RESULTADO VENDAS</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-lg font-bold text-gray-900 mb-1">R$ por dia útil</div>
          <div className="text-xs text-gray-500">Vendido no mês/Dias úteis</div>
        </CardContent>
      </Card>
    </div>
  )
}
