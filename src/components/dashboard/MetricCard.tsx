import { ReactNode } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string;
  change: number;
  icon: ReactNode;
  trend?: "up" | "down";
  className?: string;
}

export const MetricCard = ({ 
  title, 
  value, 
  change, 
  icon, 
  trend = "up",
  className 
}: MetricCardProps) => {
  return (
    <div className={cn(
      "bg-card border border-card-border rounded-lg p-6 shadow-card hover:shadow-glow transition-all duration-300",
      className
    )}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 rounded-lg bg-gradient-accent">
            {icon}
          </div>
          <div>
            <p className="text-sm text-muted-foreground">{title}</p>
            <p className="text-2xl font-bold text-card-foreground">{value}</p>
          </div>
        </div>
        
        <div className={cn(
          "flex items-center space-x-1 px-2 py-1 rounded-md text-xs font-medium",
          trend === "up" 
            ? "bg-primary/10 text-primary" 
            : "bg-destructive/10 text-destructive"
        )}>
          {trend === "up" ? (
            <TrendingUp className="w-3 h-3" />
          ) : (
            <TrendingDown className="w-3 h-3" />
          )}
          <span>{Math.abs(change)}%</span>
        </div>
      </div>
    </div>
  );
};