import React from 'react';
import PackageCard from './components/PackageCard';
import FilterSection from './components/FilterSection';
import { Plane } from 'lucide-react';

const packages = [
  {
    id: 1,
    title: "Bali Paradise Escape",
    location: "Bali, Indonesia",
    duration: "7 Days",
    price: 1299,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
    description: "Experience the magic of Bali with this all-inclusive package featuring luxury accommodations, cultural tours, and pristine beaches."
  },
  {
    id: 2,
    title: "Swiss Alps Adventure",
    location: "Switzerland",
    duration: "5 Days",
    price: 1899,
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1531310197839-ccf54634509e",
    description: "Discover the breathtaking Swiss Alps with guided hiking tours, scenic train rides, and cozy mountain lodges."
  },
  {
    id: 3,
    title: "Maldives Luxury Retreat",
    location: "Maldives",
    duration: "6 Days",
    price: 2499,
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8",
    description: "Indulge in ultimate luxury with overwater bungalows, private beaches, and world-class spa treatments."
  },
  {
    id: 4,
    title: "Japanese Culture Tour",
    location: "Japan",
    duration: "8 Days",
    price: 2199,
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e",
    description: "Immerse yourself in Japanese culture with temple visits, tea ceremonies, and authentic culinary experiences."
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <Plane className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">Holiday Packages</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <FilterSection />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <PackageCard
              key={pkg.id}
              title={pkg.title}
              location={pkg.location}
              duration={pkg.duration}
              price={pkg.price}
              rating={pkg.rating}
              imageUrl={pkg.imageUrl}
              description={pkg.description}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;