import { Sidebar } from "@/components/dashboard/Sidebar";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { DashboardLineChart } from "@/components/dashboard/charts/LineChart";
import { DashboardBarChart } from "@/components/dashboard/charts/BarChart";
import { DoughnutChart } from "@/components/dashboard/charts/DoughnutChart";
import { 
  BarChart3, 
  TrendingUp, 
  Eye, 
  MousePointer,
  Users
} from "lucide-react";

const trafficData = [
  { name: "Pazartesi", value: 2400, secondaryValue: 2200 },
  { name: "Salı", value: 2800, secondaryValue: 2400 },
  { name: "Çarşamba", value: 3200, secondaryValue: 2800 },
  { name: "Perşembe", value: 2900, secondaryValue: 2600 },
  { name: "Cuma", value: 3800, secondaryValue: 3200 },
  { name: "Cumartesi", value: 4200, secondaryValue: 3600 },
  { name: "Pazar", value: 3900, secondaryValue: 3400 },
];

const conversionData = [
  { name: "Ocak", value: 3.2, secondaryValue: 2.8 },
  { name: "Şubat", value: 3.7, secondaryValue: 3.2 },
  { name: "Mart", value: 4.1, secondaryValue: 3.7 },
  { name: "Nisan", value: 3.9, secondaryValue: 3.5 },
  { name: "Mayıs", value: 4.5, secondaryValue: 4.1 },
  { name: "Haziran", value: 4.8, secondaryValue: 4.5 },
];

const sourceData = [
  { name: "Organik Arama", value: 40, percentage: 40 },
  { name: "Sosyal Medya", value: 25, percentage: 25 },
  { name: "Direkt Trafik", value: 20, percentage: 20 },
  { name: "Referans", value: 15, percentage: 15 },
];

const Analytics = () => {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      
      <main className="lg:ml-64 transition-all duration-300">
        <header className="bg-card border-b border-card-border p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="ml-12 lg:ml-0">
              <h1 className="text-xl sm:text-2xl font-bold text-card-foreground">Analitik</h1>
              <p className="text-muted-foreground text-sm sm:text-base">Detaylı performans analizi ve istatistikler</p>
            </div>
          </div>
        </header>

        <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <MetricCard
              title="Sayfa Görüntüleme"
              value="24,567"
              change={15.3}
              icon={<Eye className="w-6 h-6 text-primary" />}
              trend="up"
            />
            <MetricCard
              title="Benzersiz Ziyaretçi"
              value="8,924"
              change={8.7}
              icon={<Users className="w-6 h-6 text-secondary" />}
              trend="up"
            />
            <MetricCard
              title="Dönüşüm Oranı"
              value="4.8%"
              change={12.1}
              icon={<MousePointer className="w-6 h-6 text-green-500" />}
              trend="up"
            />
            <MetricCard
              title="Ortalama Sepet"
              value="₺287"
              change={-2.4}
              icon={<TrendingUp className="w-6 h-6 text-yellow-500" />}
              trend="down"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
            <div className="xl:col-span-2">
              <DashboardLineChart 
                data={trafficData}
                title="Haftalık Trafik Analizi"
                showSecondaryLine={true}
              />
            </div>

            <DoughnutChart 
              data={sourceData}
              title="Trafik Kaynakları"
            />

            <DashboardBarChart 
              data={conversionData}
              title="Aylık Dönüşüm Oranları (%)"
              showSecondaryBar={true}
            />

            <div className="bg-card border border-card-border rounded-lg p-6 shadow-card xl:col-span-2">
              <h3 className="text-lg font-semibold text-card-foreground mb-4">En Çok Ziyaret Edilen Sayfalar</h3>
              <div className="space-y-4">
                {[
                  { page: "/anasayfa", views: 12450, bounce: "24%" },
                  { page: "/urunler", views: 8920, bounce: "32%" },
                  { page: "/kategoriler", views: 6780, bounce: "28%" },
                  { page: "/hakkimizda", views: 4560, bounce: "45%" },
                  { page: "/iletisim", views: 3240, bounce: "38%" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                    <div>
                      <p className="font-medium text-card-foreground">{item.page}</p>
                      <p className="text-sm text-muted-foreground">Çıkış oranı: {item.bounce}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-card-foreground">{item.views.toLocaleString()}</p>
                      <p className="text-sm text-muted-foreground">görüntülenme</p>
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

export default Analytics;