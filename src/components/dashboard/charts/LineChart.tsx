import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface LineChartProps {
  data: Array<{
    name: string;
    value: number;
    secondaryValue?: number;
  }>;
  title: string;
  showSecondaryLine?: boolean;
}

export const DashboardLineChart = ({ data, title, showSecondaryLine = false }: LineChartProps) => {
  return (
    <div className="bg-card border border-card-border rounded-lg p-6 shadow-card">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-card-foreground">{title}</h3>
        <div className="text-xs text-muted-foreground">Aylık</div>
      </div>
      
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid 
              strokeDasharray="3 3" 
              stroke="hsl(var(--border))"
              vertical={false}
            />
            <XAxis 
              dataKey="name" 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--card-border))',
                borderRadius: '8px',
                color: 'hsl(var(--card-foreground))'
              }}
            />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="hsl(158 64% 52%)" 
              strokeWidth={3}
              dot={{ fill: 'hsl(158 64% 52%)', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, stroke: 'hsl(158 64% 52%)', strokeWidth: 2 }}
            />
            {showSecondaryLine && (
              <Line 
                type="monotone" 
                dataKey="secondaryValue" 
                stroke="hsl(200 90% 60%)" 
                strokeWidth={3}
                dot={{ fill: 'hsl(200 90% 60%)', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: 'hsl(200 90% 60%)', strokeWidth: 2 }}
              />
            )}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};