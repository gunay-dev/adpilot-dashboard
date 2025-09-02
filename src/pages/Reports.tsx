import { Sidebar } from "@/components/dashboard/Sidebar";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { DashboardLineChart } from "@/components/dashboard/charts/LineChart";
import { DashboardBarChart } from "@/components/dashboard/charts/BarChart";
import { 
  TrendingUp, 
  Download, 
  Calendar, 
  FileText
} from "lucide-react";

const revenueData = [
  { name: "Ocak", value: 124500, secondaryValue: 108200 },
  { name: "Şubat", value: 136700, secondaryValue: 124500 },
  { name: "Mart", value: 142300, secondaryValue: 136700 },
  { name: "Nisan", value: 158900, secondaryValue: 142300 },
  { name: "Mayıs", value: 167400, secondaryValue: 158900 },
  { name: "Haziran", value: 189600, secondaryValue: 167400 },
];

const monthlyProfitData = [
  { name: "Ocak", value: 28400, secondaryValue: 24100 },
  { name: "Şubat", value: 31200, secondaryValue: 28400 },
  { name: "Mart", value: 34800, secondaryValue: 31200 },
  { name: "Nisan", value: 38900, secondaryValue: 34800 },
  { name: "Mayıs", value: 42100, secondaryValue: 38900 },
  { name: "Haziran", value: 47300, secondaryValue: 42100 },
];

const Reports = () => {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      
      <main className="ml-64 transition-all duration-300">
        <header className="bg-card border-b border-card-border p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-card-foreground">Raporlar</h1>
              <p className="text-muted-foreground">Detaylı finansal raporlar ve analizler</p>
            </div>
            <div className="flex items-center space-x-3">
              <button className="flex items-center space-x-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                <Download className="w-4 h-4" />
                <span>Rapor İndir</span>
              </button>
            </div>
          </div>
        </header>

        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricCard
              title="Toplam Gelir"
              value="₺1,189,600"
              change={18.5}
              icon={<TrendingUp className="w-6 h-6 text-primary" />}
              trend="up"
            />
            <MetricCard
              title="Net Kar"
              value="₺47,300"
              change={22.3}
              icon={<TrendingUp className="w-6 h-6 text-green-500" />}
              trend="up"
            />
            <MetricCard
              title="Ortalama Sipariş"
              value="₺287"
              change={5.1}
              icon={<Calendar className="w-6 h-6 text-secondary" />}
              trend="up"
            />
            <MetricCard
              title="Kar Marjı"
              value="25.2%"
              change={3.7}
              icon={<FileText className="w-6 h-6 text-yellow-500" />}
              trend="up"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <DashboardLineChart 
              data={revenueData}
              title="Aylık Gelir Analizi (₺)"
              showSecondaryLine={true}
            />

            <DashboardBarChart 
              data={monthlyProfitData}
              title="Aylık Kar Analizi (₺)"
              showSecondaryBar={true}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-card border border-card-border rounded-lg p-6 shadow-card">
              <h3 className="text-lg font-semibold text-card-foreground mb-4">Finansal Özet</h3>
              <div className="space-y-4">
                {[
                  { label: "Brüt Satış", value: "₺1,189,600", change: "+18.5%" },
                  { label: "İadeler", value: "₺23,450", change: "-5.2%" },
                  { label: "Net Satış", value: "₺1,166,150", change: "+19.1%" },
                  { label: "Satış Maliyeti", value: "₺872,350", change: "+15.8%" },
                  { label: "Brüt Kar", value: "₺293,800", change: "+25.2%" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                    <span className="text-card-foreground">{item.label}</span>
                    <div className="text-right">
                      <p className="font-semibold text-card-foreground">{item.value}</p>
                      <span className={`text-xs ${item.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                        {item.change}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card border border-card-border rounded-lg p-6 shadow-card">
              <h3 className="text-lg font-semibold text-card-foreground mb-4">Hızlı Raporlar</h3>
              <div className="space-y-3">
                {[
                  { title: "Aylık Satış Raporu", description: "Son 30 günün detaylı satış analizi" },
                  { title: "Ürün Performans Raporu", description: "En çok satan ürünler ve kategoriler" },
                  { title: "Müşteri Analiz Raporu", description: "Müşteri davranış ve sadakat analizi" },
                  { title: "Stok Durum Raporu", description: "Mevcut stok seviyeri ve tahminler" },
                ].map((report, index) => (
                  <div key={index} className="p-3 rounded-lg bg-muted/50 hover:bg-muted/70 transition-colors cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-card-foreground">{report.title}</p>
                        <p className="text-sm text-muted-foreground">{report.description}</p>
                      </div>
                      <Download className="w-4 h-4 text-muted-foreground" />
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

export default Reports;