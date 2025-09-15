"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend } from "recharts"

const data = [
  { day: "1", vendas: 0, objetivo: 0 },
  { day: "2", vendas: 0, objetivo: 0 },
  { day: "3", vendas: 0, objetivo: 0 },
  { day: "4", vendas: 0, objetivo: 0 },
  { day: "5", vendas: 0, objetivo: 0 },
  { day: "6", vendas: 0, objetivo: 0 },
  { day: "7", vendas: 0, objetivo: 0 },
  { day: "8", vendas: 0, objetivo: 0 },
  { day: "9", vendas: 0, objetivo: 0 },
  { day: "10", vendas: 0, objetivo: 0 },
  { day: "11", vendas: 0, objetivo: 0 },
  { day: "12", vendas: 0, objetivo: 0 },
  { day: "13", vendas: 0, objetivo: 0 },
  { day: "14", vendas: 0, objetivo: 0 },
  { day: "15", vendas: 0, objetivo: 0 },
  { day: "16", vendas: 0, objetivo: 0 },
  { day: "17", vendas: 0, objetivo: 0 },
  { day: "18", vendas: 0, objetivo: 0 },
  { day: "19", vendas: 0, objetivo: 0 },
  { day: "20", vendas: 0, objetivo: 0 },
  { day: "21", vendas: 0, objetivo: 0 },
  { day: "22", vendas: 0, objetivo: 0 },
  { day: "23", vendas: 0, objetivo: 0 },
  { day: "24", vendas: 0, objetivo: 0 },
  { day: "25", vendas: 0, objetivo: 0 },
  { day: "26", vendas: 0, objetivo: 0 },
  { day: "27", vendas: 0, objetivo: 0 },
  { day: "28", vendas: 0, objetivo: 0 },
  { day: "29", vendas: 0, objetivo: 0 },
  { day: "30", vendas: 0, objetivo: 0 },
]

export function SalesChart() {
  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#666" }} />
          <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#666" }} />
          <Legend verticalAlign="bottom" height={36} iconType="circle" wrapperStyle={{ paddingTop: "20px" }} />
          <Line
            type="monotone"
            dataKey="vendas"
            stroke="#22c55e"
            strokeWidth={2}
            dot={{ fill: "#22c55e", strokeWidth: 2, r: 4 }}
            name="Vendas no mês"
          />
          <Line
            type="monotone"
            dataKey="objetivo"
            stroke="#3b82f6"
            strokeWidth={2}
            strokeDasharray="5 5"
            dot={false}
            name="Objetivo"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
