
import axios from "axios";
import type { PropertyProps } from "@/interfaces";
import { useEffect, useState } from "react";
import PropertyCard from "@/components/property/PropertyCard";

export default function Home() {
  const [properties, setProperties] = useState<PropertyProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get("/api/properties");
        setProperties(response.data);
      } catch (error) {
        console.error("Error fetching properties:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <section className="relative w-full bg-white">
      {/* Hero Section */}
      <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh] px-3 sm:px-6 pt-3 sm:pt-6">
        {/* Background Image */}
        <div 
          className="w-full h-full bg-cover bg-center rounded-lg sm:rounded-2xl lg:rounded-3xl relative"
          style={{
            backgroundImage: "url('/assets/img-1.png')"
          }}
        >
          {/* Text Content Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-3 sm:px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-6 text-center text-white drop-shadow-lg">
              Find your favorite place here!
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-center text-white drop-shadow-md">
              The best prices for over 2 million properties worldwide
            </p>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="px-3 sm:px-6 py-6 sm:py-8">
        <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center justify-start sm:justify-between gap-2 sm:gap-4">
          
          {/* Filter Buttons Group */}
          <div className="flex flex-wrap gap-2 sm:gap-3 w-full sm:w-auto overflow-x-auto">
            <button className="px-4 sm:px-6 py-2 rounded-full border-2 border-teal-500 text-teal-500 font-medium bg-white hover:bg-teal-50 transition whitespace-nowrap text-xs sm:text-sm">
              All
            </button>
            <button className="px-4 sm:px-6 py-2 rounded-full border border-gray-300 text-gray-700 font-medium bg-white hover:bg-gray-50 transition whitespace-nowrap text-xs sm:text-sm">
              Top Villa
            </button>
            <button className="px-4 sm:px-6 py-2 rounded-full border border-gray-300 text-gray-700 font-medium bg-white hover:bg-gray-50 transition whitespace-nowrap text-xs sm:text-sm">
              Free Reschedule
            </button>
            <button className="hidden sm:inline-block px-4 sm:px-6 py-2 rounded-full border border-gray-300 text-gray-700 font-medium bg-white hover:bg-gray-50 transition whitespace-nowrap text-xs sm:text-sm">
              Book Now, Pay later
            </button>
            <button className="hidden md:inline-block px-4 sm:px-6 py-2 rounded-full border border-gray-300 text-gray-700 font-medium bg-white hover:bg-gray-50 transition whitespace-nowrap text-xs sm:text-sm">
              Self CheckIn
            </button>
            <button className="hidden lg:inline-block px-4 sm:px-6 py-2 rounded-full border border-gray-300 text-gray-700 font-medium bg-white hover:bg-gray-50 transition whitespace-nowrap text-xs sm:text-sm">
              Instant Book
            </button>
          </div>

          {/* Filter and Sort Buttons */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto mt-3 sm:mt-0">
            <button className="px-4 sm:px-6 py-2 rounded-full border border-gray-300 text-gray-700 font-medium bg-white hover:bg-gray-50 transition flex items-center justify-center sm:justify-start gap-2 text-xs sm:text-sm">
              <span>Filter</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
            </button>
            <button className="px-4 sm:px-6 py-2 rounded-full border border-gray-300 text-gray-700 font-medium bg-white hover:bg-gray-50 transition text-xs sm:text-sm">
              Sort
            </button>
          </div>

        </div>
      </div>

      {/* Property Listings Grid */}
      <div className="grid grid-cols-3 gap-6">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </section>
  );
};
