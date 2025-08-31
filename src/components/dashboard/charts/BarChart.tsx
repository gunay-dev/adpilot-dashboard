import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface BarChartProps {
  data: Array<{
    name: string;
    value: number;
    secondaryValue?: number;
  }>;
  title: string;
  showSecondaryBar?: boolean;
}

export const DashboardBarChart = ({ data, title, showSecondaryBar = false }: BarChartProps) => {
  return (
    <div className="bg-card border border-card-border rounded-lg p-6 shadow-card">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-card-foreground">{title}</h3>
        <div className="text-xs text-muted-foreground">Aylık</div>
      </div>
      
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barCategoryGap="20%">
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
            <Bar 
              dataKey="value" 
              fill="url(#primaryGradient)"
              radius={[4, 4, 0, 0]}
            />
            {showSecondaryBar && (
              <Bar 
                dataKey="secondaryValue" 
                fill="hsl(200 90% 60%)" 
                radius={[4, 4, 0, 0]}
              />
            )}
            <defs>
              <linearGradient id="primaryGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(158 64% 52%)" />
                <stop offset="100%" stopColor="hsl(158 64% 52% / 0.6)" />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};