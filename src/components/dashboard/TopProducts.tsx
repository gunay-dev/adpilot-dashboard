import { Star } from "lucide-react";

interface Product {
  name: string;
  rating: number;
  rank: number;
}

const products: Product[] = [
  { name: "iPhone 15 Pro", rating: 4.8, rank: 1 },
  { name: "Samsung Galaxy S24", rating: 4.7, rank: 2 },
  { name: "MacBook Air M3", rating: 4.9, rank: 3 },
  { name: "AirPods Pro", rating: 4.6, rank: 4 },
];

export const TopProducts = () => {
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    return (
      <div className="flex items-center space-x-1">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
        ))}
        {hasHalfStar && (
          <Star className="w-4 h-4 fill-primary/50 text-primary" />
        )}
        <span className="text-sm text-muted-foreground ml-2">{rating}</span>
      </div>
    );
  };

  return (
    <div className="bg-card border border-card-border rounded-lg p-6 shadow-card">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-card-foreground">En İyi Ürünler</h3>
        <div className="text-xs text-muted-foreground">Aylık</div>
      </div>
      
      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-4 text-sm text-muted-foreground border-b border-card-border pb-2">
          <span>Ürün</span>
          <span className="text-center">Puan</span>
          <span className="text-center">Sıra</span>
        </div>
        
        {products.map((product, index) => (
          <div key={index} className="grid grid-cols-3 gap-4 items-center py-2">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-sm font-medium text-card-foreground">
                {product.name}
              </span>
            </div>
            
            <div className="flex justify-center">
              {renderStars(product.rating)}
            </div>
            
            <div className="text-center">
              <span className="inline-flex items-center justify-center w-6 h-6 bg-primary/10 text-primary text-xs font-bold rounded-full">
                {product.rank}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};