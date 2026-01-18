import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import PropertyDetail from "@/components/property/PropertyDetail";
import { getPropertyById } from "@/utils/api";

export default function PropertyDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProperty = async () => {
      if (!id) return;
      try {
        const data = await getPropertyById(id);
        setProperty(data);
      } catch (error) {
        console.error("Error fetching property details:", error);
        setError("Unable to load property details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (!property) {
    return <p>No property available</p>;
  }

  return <PropertyDetail property={property} />;
}
