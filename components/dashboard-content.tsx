"use client"

import { useState } from "react"
import { Search, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SalesChart } from "@/components/sales-chart"
import { MetricsCards } from "@/components/metrics-cards"
import { CircularProgress } from "@/components/circular-progress"

export function DashboardContent() {
  const [selectedYear, setSelectedYear] = useState("2025")
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <div className="space-y-6">
      {/* Filters Section */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <span className="text-sm font-medium text-gray-600">FILTRAR POR:</span>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Segmento"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-48"
            />
          </div>
          <Select value={selectedYear} onValueChange={setSelectedYear}>
            <SelectTrigger className="w-24">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2023">2023</SelectItem>
              <SelectItem value="2024">2024</SelectItem>
              <SelectItem value="2025">2025</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <span className="text-sm text-gray-500">Todos os vendedores</span>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sales Chart - Takes 3 columns */}
        <div className="lg:col-span-3">
          <Card>
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-sm font-medium text-gray-600 mb-1">EVOLUÇÃO DE VENDAS</CardTitle>
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold">120</span>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">SETEMBRO DE {selectedYear}</p>
                  <Button variant="link" className="text-blue-600 p-0 h-auto">
                    Detalhar vendas
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <SalesChart />
            </CardContent>
          </Card>
        </div>

        {/* Right Sidebar Metrics */}
        <div className="space-y-4">
          <MetricsCards />
        </div>
      </div>

      {/* Bottom Section - Progress Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-gray-600">CARTEIRA DE CLIENTES</CardTitle>
              <span className="text-xs text-gray-500">SETEMBRO DE {selectedYear}</span>
            </div>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <CircularProgress value={0} size={120} />
            <div className="mt-4 text-center space-y-2">
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-xs text-gray-600">0 ativos</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                <span className="text-xs text-gray-600">0 clientes antigos</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span className="text-xs text-gray-600">0 clientes recentes</span>
              </div>
            </div>
            <Button variant="link" className="text-blue-600 mt-4">
              Detalhar carteira
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-gray-600">POSITIVAÇÃO</CardTitle>
              <span className="text-xs text-gray-500">SETEMBRO DE {selectedYear}</span>
            </div>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <CircularProgress value={0} size={120} />
            <div className="mt-4 text-center">
              <p className="text-xs text-gray-600 mb-4">Nenhum cliente foi positivado neste mês</p>
              <div className="space-y-2">
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-xs text-gray-600">0 novos</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-xs text-gray-600">0 clientes recentes</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-xs text-gray-600">0 clientes antigos</span>
                </div>
              </div>
            </div>
            <Button variant="link" className="text-blue-600 mt-4">
              Detalhar positivação
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-gray-600">CURVA ABC DE CLIENTES</CardTitle>
              <span className="text-xs text-gray-500">ÚLT. 12 MESES</span>
            </div>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <CircularProgress value={0} size={120} />
            <div className="mt-4 text-center space-y-2">
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-xs text-gray-600">0 clientes da Curva A</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-xs text-gray-600">0 clientes da Curva B</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span className="text-xs text-gray-600">0 clientes da Curva C</span>
              </div>
            </div>
            <Button variant="link" className="text-blue-600 mt-4">
              Detalhar curva ABC
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* E-commerce Section */}
      <Card className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded-sm"></div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Expanda sua operação com o e-commerce B2B</h3>
                <p className="text-sm opacity-90">
                  Com o e-commerce B2B do Mercos você pode oferecer pedidos online para seus clientes pela internet.
                </p>
              </div>
            </div>
            <Button className="bg-green-500 hover:bg-green-600 text-white">Solicite demonstração grátis</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
