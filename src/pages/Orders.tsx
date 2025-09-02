import { Sidebar } from "@/components/dashboard/Sidebar";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { DashboardBarChart } from "@/components/dashboard/charts/BarChart";
import { 
  ShoppingCart, 
  Clock, 
  CheckCircle, 
  XCircle,
  Package,
  Truck
} from "lucide-react";

const orderStatusData = [
  { name: "Bekliyor", value: 45, secondaryValue: 38 },
  { name: "Hazırlanıyor", value: 32, secondaryValue: 28 },
  { name: "Kargoda", value: 28, secondaryValue: 22 },
  { name: "Teslim Edildi", value: 65, secondaryValue: 58 },
];

const Orders = () => {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      
      <main className="lg:ml-64 transition-all duration-300">
        <header className="bg-card border-b border-card-border p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="ml-12 lg:ml-0">
              <h1 className="text-xl sm:text-2xl font-bold text-card-foreground">Siparişler</h1>
              <p className="text-muted-foreground text-sm sm:text-base">Sipariş yönetimi ve takibi</p>
            </div>
          </div>
        </header>

        <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <MetricCard
              title="Toplam Sipariş"
              value="1,247"
              change={8.2}
              icon={<ShoppingCart className="w-6 h-6 text-primary" />}
              trend="up"
            />
            <MetricCard
              title="Bekleyen"
              value="45"
              change={-2.1}
              icon={<Clock className="w-6 h-6 text-yellow-500" />}
              trend="down"
            />
            <MetricCard
              title="Tamamlanan"
              value="1,156"
              change={12.3}
              icon={<CheckCircle className="w-6 h-6 text-green-500" />}
              trend="up"
            />
            <MetricCard
              title="İptal Edilen"
              value="46"
              change={5.2}
              icon={<XCircle className="w-6 h-6 text-red-500" />}
              trend="up"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            <DashboardBarChart 
              data={orderStatusData}
              title="Sipariş Durumu Analizi"
              showSecondaryBar={true}
            />

            <div className="bg-card border border-card-border rounded-lg p-6 shadow-card">
              <h3 className="text-lg font-semibold text-card-foreground mb-4">Son Siparişler</h3>
              <div className="space-y-4">
                {[
                  { id: "#12345", customer: "Ahmet Yılmaz", amount: "₺245", status: "Kargoda" },
                  { id: "#12346", customer: "Ayşe Demir", amount: "₺189", status: "Hazırlanıyor" },
                  { id: "#12347", customer: "Mehmet Öz", amount: "₺367", status: "Teslim Edildi" },
                  { id: "#12348", customer: "Fatma Kaya", amount: "₺125", status: "Bekliyor" },
                ].map((order) => (
                  <div key={order.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                    <div>
                      <p className="font-medium text-card-foreground">{order.id}</p>
                      <p className="text-sm text-muted-foreground">{order.customer}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-card-foreground">{order.amount}</p>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        order.status === 'Teslim Edildi' ? 'bg-green-500/20 text-green-400' :
                        order.status === 'Kargoda' ? 'bg-blue-500/20 text-blue-400' :
                        order.status === 'Hazırlanıyor' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-gray-500/20 text-gray-400'
                      }`}>
                        {order.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Orders;