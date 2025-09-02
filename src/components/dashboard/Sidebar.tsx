import { useState } from "react";
import { 
  Home, 
  ShoppingCart, 
  Package, 
  Users, 
  BarChart3, 
  Settings, 
  TrendingUp,
  DollarSign,
  ShoppingBag,
  User
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocation, useNavigate } from "react-router-dom";

const menuItems = [
  { icon: Home, label: "Dashboard", path: "/" },
  { icon: ShoppingCart, label: "Siparişler", path: "/orders" },
  { icon: Package, label: "Ürünler", path: "/products" },
  { icon: Users, label: "Müşteriler", path: "/customers" },
  { icon: BarChart3, label: "Analitik", path: "/analytics" },
  { icon: TrendingUp, label: "Raporlar", path: "/reports" },
  { icon: DollarSign, label: "Finans", path: "#" },
  { icon: ShoppingBag, label: "Kampanyalar", path: "#" },
  { icon: User, label: "Profil", path: "#" },
  { icon: Settings, label: "Ayarlar", path: "#" },
];

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className={cn(
      "fixed left-0 top-0 h-full bg-sidebar border-r border-sidebar-border transition-all duration-300 z-50",
      collapsed ? "w-16" : "w-64"
    )}>
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
          {!collapsed && (
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <ShoppingCart className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-sidebar-foreground">AdPilot</span>
            </div>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-1 rounded-md hover:bg-sidebar-accent transition-colors"
          >
            <div className="w-6 h-6 bg-primary/20 rounded-md flex items-center justify-center">
              <div className="w-3 h-3 bg-primary rounded-sm"></div>
            </div>
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={() => item.path !== "#" && navigate(item.path)}
              className={cn(
                "w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-200",
                location.pathname === item.path
                  ? "bg-primary text-primary-foreground shadow-primary"
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                item.path === "#" && "opacity-50 cursor-not-allowed"
              )}
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              {!collapsed && (
                <span className="text-sm font-medium">{item.label}</span>
              )}
            </button>
          ))}
        </nav>

        {/* User Profile */}
        {!collapsed && (
          <div className="p-4 border-t border-sidebar-border">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                <User className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-sidebar-foreground">Burak Günay</p>
                <p className="text-xs text-sidebar-foreground/60">burak@ideasoft.com.tr</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};