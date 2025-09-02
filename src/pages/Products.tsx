import { Sidebar } from "@/components/dashboard/Sidebar";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { DoughnutChart } from "@/components/dashboard/charts/DoughnutChart";
import { DashboardBarChart } from "@/components/dashboard/charts/BarChart";
import { 
  Package, 
  TrendingUp, 
  AlertTriangle, 
  Star
} from "lucide-react";

const categoryData = [
  { name: "Elektronik", value: 45, percentage: 45 },
  { name: "Giyim", value: 30, percentage: 30 },
  { name: "Ev & Yaşam", value: 15, percentage: 15 },
  { name: "Spor", value: 10, percentage: 10 },
];

const stockData = [
  { name: "Ocak", value: 450, secondaryValue: 420 },
  { name: "Şubat", value: 432, secondaryValue: 410 },
  { name: "Mart", value: 456, secondaryValue: 445 },
  { name: "Nisan", value: 478, secondaryValue: 465 },
  { name: "Mayıs", value: 456, secondaryValue: 440 },
  { name: "Haziran", value: 492, secondaryValue: 475 },
];

const Products = () => {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      
      <main className="ml-64 transition-all duration-300">
        <header className="bg-card border-b border-card-border p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-card-foreground">Ürünler</h1>
              <p className="text-muted-foreground">Ürün yönetimi ve stok takibi</p>
            </div>
          </div>
        </header>

        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricCard
              title="Toplam Ürün"
              value="456"
              change={15.8}
              icon={<Package className="w-6 h-6 text-primary" />}
              trend="up"
            />
            <MetricCard
              title="Aktif Ürün"
              value="398"
              change={5.2}
              icon={<TrendingUp className="w-6 h-6 text-green-500" />}
              trend="up"
            />
            <MetricCard
              title="Stok Azalan"
              value="23"
              change={-8.1}
              icon={<AlertTriangle className="w-6 h-6 text-yellow-500" />}
              trend="down"
            />
            <MetricCard
              title="En Çok Satan"
              value="89"
              change={22.4}
              icon={<Star className="w-6 h-6 text-secondary" />}
              trend="up"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            <DoughnutChart 
              data={categoryData}
              title="Kategori Dağılımı"
            />

            <DashboardBarChart 
              data={stockData}
              title="Aylık Stok Hareketleri"
              showSecondaryBar={true}
            />

            <div className="bg-card border border-card-border rounded-lg p-6 shadow-card">
              <h3 className="text-lg font-semibold text-card-foreground mb-4">Popüler Ürünler</h3>
              <div className="space-y-4">
                {[
                  { name: "iPhone 15 Pro", sales: 156, revenue: "₺234,500" },
                  { name: "Samsung Galaxy S24", sales: 142, revenue: "₺189,300" },
                  { name: "MacBook Air M3", sales: 89, revenue: "₺267,000" },
                  { name: "AirPods Pro", sales: 203, revenue: "₺87,290" },
                ].map((product, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                    <div>
                      <p className="font-medium text-card-foreground">{product.name}</p>
                      <p className="text-sm text-muted-foreground">{product.sales} satış</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-card-foreground">{product.revenue}</p>
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

export default Products;