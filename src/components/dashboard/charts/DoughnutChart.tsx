import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";

interface DoughnutChartProps {
  data: Array<{
    name: string;
    value: number;
    percentage: number;
  }>;
  title: string;
}

const COLORS = [
  'hsl(158 64% 52%)',  // Primary green
  'hsl(200 90% 60%)',  // Secondary blue  
  'hsl(280 60% 50%)',  // Purple
  'hsl(30 90% 55%)',   // Orange
];

export const DoughnutChart = ({ data, title }: DoughnutChartProps) => {
  return (
    <div className="bg-card border border-card-border rounded-lg p-6 shadow-card">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-card-foreground">{title}</h3>
        <div className="text-xs text-muted-foreground">Aylık</div>
      </div>
      
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={COLORS[index % COLORS.length]}
                  stroke="hsl(var(--background))"
                  strokeWidth={2}
                />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--card-border))',
                borderRadius: '8px',
                color: 'hsl(var(--card-foreground))'
              }}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mt-4">
        {data.map((item, index) => (
          <div key={index} className="flex items-center space-x-2">
            <div 
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: COLORS[index % COLORS.length] }}
            />
            <div className="flex-1">
              <p className="text-sm text-card-foreground">{item.name}</p>
              <p className="text-xs text-muted-foreground">{item.percentage}%</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};