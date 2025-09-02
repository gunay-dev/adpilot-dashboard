import { Sidebar } from "@/components/dashboard/Sidebar";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { DashboardLineChart } from "@/components/dashboard/charts/LineChart";
import { DoughnutChart } from "@/components/dashboard/charts/DoughnutChart";
import { 
  Users, 
  UserPlus, 
  UserMinus, 
  Crown
} from "lucide-react";

const customerGrowthData = [
  { name: "Ocak", value: 856, secondaryValue: 812 },
  { name: "Şubat", value: 874, secondaryValue: 856 },
  { name: "Mart", value: 892, secondaryValue: 874 },
  { name: "Nisan", value: 918, secondaryValue: 892 },
  { name: "Mayıs", value: 945, secondaryValue: 918 },
  { name: "Haziran", value: 972, secondaryValue: 945 },
];

const customerSegmentData = [
  { name: "Yeni Müşteri", value: 35, percentage: 35 },
  { name: "Düzenli Müşteri", value: 45, percentage: 45 },
  { name: "VIP Müşteri", value: 15, percentage: 15 },
  { name: "Pasif Müşteri", value: 5, percentage: 5 },
];

const Customers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      
      <main className="ml-64 transition-all duration-300">
        <header className="bg-card border-b border-card-border p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-card-foreground">Müşteriler</h1>
              <p className="text-muted-foreground">Müşteri yönetimi ve analizi</p>
            </div>
          </div>
        </header>

        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricCard
              title="Toplam Müşteri"
              value="972"
              change={2.8}
              icon={<Users className="w-6 h-6 text-primary" />}
              trend="up"
            />
            <MetricCard
              title="Yeni Müşteri"
              value="34"
              change={12.5}
              icon={<UserPlus className="w-6 h-6 text-green-500" />}
              trend="up"
            />
            <MetricCard
              title="Kayıp Müşteri"
              value="8"
              change={-15.2}
              icon={<UserMinus className="w-6 h-6 text-red-500" />}
              trend="down"
            />
            <MetricCard
              title="VIP Müşteri"
              value="146"
              change={8.7}
              icon={<Crown className="w-6 h-6 text-yellow-500" />}
              trend="up"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            <div className="xl:col-span-2">
              <DashboardLineChart 
                data={customerGrowthData}
                title="Müşteri Büyüme Analizi"
                showSecondaryLine={true}
              />
            </div>

            <DoughnutChart 
              data={customerSegmentData}
              title="Müşteri Segmentasyonu"
            />

            <div className="bg-card border border-card-border rounded-lg p-6 shadow-card xl:col-span-2">
              <h3 className="text-lg font-semibold text-card-foreground mb-4">En Değerli Müşteriler</h3>
              <div className="space-y-4">
                {[
                  { name: "Ahmet Yılmaz", orders: 47, spent: "₺12,450", segment: "VIP" },
                  { name: "Ayşe Demir", orders: 32, spent: "₺8,920", segment: "VIP" },
                  { name: "Mehmet Öz", orders: 28, spent: "₺7,630", segment: "Düzenli" },
                  { name: "Fatma Kaya", orders: 25, spent: "₺6,890", segment: "Düzenli" },
                  { name: "Ali Çelik", orders: 22, spent: "₺5,470", segment: "Düzenli" },
                ].map((customer, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                        <span className="text-sm font-medium text-primary-foreground">
                          {customer.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-card-foreground">{customer.name}</p>
                        <p className="text-sm text-muted-foreground">{customer.orders} sipariş</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-card-foreground">{customer.spent}</p>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        customer.segment === 'VIP' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-blue-500/20 text-blue-400'
                      }`}>
                        {customer.segment}
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

export default Customers;