import { Sidebar } from "@/components/dashboard/Sidebar";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { DoughnutChart } from "@/components/dashboard/charts/DoughnutChart";
import { DashboardLineChart } from "@/components/dashboard/charts/LineChart";
import { DashboardBarChart } from "@/components/dashboard/charts/BarChart";
import { TopProducts } from "@/components/dashboard/TopProducts";
import { 
  DollarSign, 
  ShoppingCart, 
  Users, 
  Package,
  TrendingUp
} from "lucide-react";

// Sample data
const salesData = [
  { name: "Ocak", value: 4500, secondaryValue: 3800 },
  { name: "Şubat", value: 5200, secondaryValue: 4100 },
  { name: "Mart", value: 4800, secondaryValue: 3900 },
  { name: "Nisan", value: 6100, secondaryValue: 4800 },
  { name: "Mayıs", value: 5800, secondaryValue: 4500 },
  { name: "Haziran", value: 7200, secondaryValue: 5200 },
];

const categoryData = [
  { name: "Elektronik", value: 45, percentage: 45 },
  { name: "Giyim", value: 30, percentage: 30 },
  { name: "Ev & Yaşam", value: 15, percentage: 15 },
  { name: "Spor", value: 10, percentage: 10 },
];

const monthlyOrders = [
  { name: "Ocak", value: 120, secondaryValue: 95 },
  { name: "Şubat", value: 145, secondaryValue: 110 },
  { name: "Mart", value: 135, secondaryValue: 105 },
  { name: "Nisan", value: 180, secondaryValue: 140 },
  { name: "Mayıs", value: 165, secondaryValue: 125 },
  { name: "Haziran", value: 210, secondaryValue: 160 },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      
      <main className="ml-64 transition-all duration-300">
        {/* Header */}
        <header className="bg-card border-b border-card-border p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-card-foreground">Dashboard</h1>
              <p className="text-muted-foreground">E-ticaret yönetim paneline hoş geldiniz</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Son güncelleme</p>
                <p className="text-sm font-medium text-card-foreground">
                  {new Date().toLocaleDateString('tr-TR')}
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="p-6 space-y-6">
          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricCard
              title="Toplam Satış"
              value="₺124,350"
              change={12.5}
              icon={<DollarSign className="w-6 h-6 text-primary" />}
              trend="up"
            />
            <MetricCard
              title="Siparişler"
              value="1,247"
              change={8.2}
              icon={<ShoppingCart className="w-6 h-6 text-secondary" />}
              trend="up"
            />
            <MetricCard
              title="Müşteriler"
              value="892"
              change={-3.1}
              icon={<Users className="w-6 h-6 text-primary" />}
              trend="down"
            />
            <MetricCard
              title="Ürünler"
              value="456"
              change={15.8}
              icon={<Package className="w-6 h-6 text-secondary" />}
              trend="up"
            />
          </div>

          {/* Charts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {/* Sales Line Chart */}
            <div className="xl:col-span-2">
              <DashboardLineChart 
                data={salesData}
                title="Satış Analizi"
                showSecondaryLine={true}
              />
            </div>

            {/* Category Distribution */}
            <DoughnutChart 
              data={categoryData}
              title="Kategori Dağılımı"
            />

            {/* Monthly Orders */}
            <DashboardBarChart 
              data={monthlyOrders}
              title="Aylık Siparişler"
              showSecondaryBar={true}
            />

            {/* Top Products */}
            <TopProducts />

            {/* Revenue Card */}
            <div className="bg-card border border-card-border rounded-lg p-6 shadow-card">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-card-foreground">Toplam Gelir</h3>
                <TrendingUp className="w-5 h-5 text-primary" />
              </div>
              
              <div className="space-y-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-card-foreground">₺43,179</p>
                  <p className="text-sm text-muted-foreground">Bu ay</p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Hedef</span>
                    <span className="text-card-foreground">₺50,000</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-gradient-primary h-2 rounded-full transition-all duration-300"
                      style={{ width: '86%' }}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground text-center">
                    Hedefe %86 ulaşıldı
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
