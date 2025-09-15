import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Download, Filter } from "lucide-react"

export default function RelatoriosPage() {
  const reports = [
    { name: "Relatório de Vendas", description: "Vendas por período", type: "vendas" },
    { name: "Relatório de Clientes", description: "Análise de clientes", type: "clientes" },
    { name: "Relatório de Produtos", description: "Performance de produtos", type: "produtos" },
    { name: "Relatório Financeiro", description: "Análise financeira", type: "financeiro" },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <FileText className="h-6 w-6 text-blue-600" />
          <h1 className="text-2xl font-bold text-gray-900">Relatórios</h1>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filtros
          </Button>
          <Button>
            <Download className="h-4 w-4 mr-2" />
            Exportar
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reports.map((report, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                {report.name}
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4" />
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{report.description}</p>
              <Button className="w-full">Gerar Relatório</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
