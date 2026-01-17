import React from "react";
import { PropertyProps } from "@/interfaces";
import Link from "next/link";

const PropertyCard: React.FC<{ property: PropertyProps }> = ({ property }) => {

  return (
    <Link href={`/property/${property.id}`}>
      <div className="w-full cursor-pointer hover:shadow-lg hover:rounded-lg transition-shadow text-gray-900">
        {/* Property Image */}
        <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
          <img
            src={typeof property.image === 'string' ? property.image : String(property.image)}
            alt={property.name}
            className="w-full h-full object-cover"
          />
          {property.discount && (
            <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              {property.discount}% OFF
            </div>
          )}
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 mt-3">
          {property.category?.slice(0, 3).map((cat, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-800 text-xs rounded-full font-medium"
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Property Info */}
        <div className="mt-3">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="font-semibold text-lg leading-tight text-gray-900">{property.name}</h3>
              <p className="text-gray-600 text-sm mt-1">
                {property.address?.state}, {property.address?.city}, {property.address?.country}
              </p>
            </div>
            <div className="flex items-center ml-2">
              <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
              <span className="ml-1 text-sm font-medium text-gray-900">{property.rating}</span>
            </div>
          </div>

          {/* Amenities and Price */}
          <div className="flex justify-between items-center mt-4">
            {/* Amenities */}
            <div className="flex items-center gap-4 border rounded-full px-4 py-2 bg-gray-50">
              <div className="flex items-center">
                <svg width="18" height="18" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.2456 9.22324C16.8562 9.05231 16.4356 8.96423 16.0103 8.9646H4.89287C4.46767 8.96419 4.04702 9.05213 3.6576 9.22285C3.10721 9.46354 2.63886 9.85937 2.3098 10.3619C1.98073 10.8645 1.80521 11.4521 1.80469 12.0528V16.3762C1.80469 16.54 1.86976 16.6971 1.98559 16.813C2.10142 16.9288 2.25852 16.9939 2.42232 16.9939C2.58613 16.9939 2.74323 16.9288 2.85906 16.813C2.97489 16.6971 3.03996 16.54 3.03996 16.3762V16.0674C3.04096 15.9858 3.07382 15.9079 3.13152 15.8502C3.18922 15.7925 3.26719 15.7596 3.34878 15.7586H17.5544C17.636 15.7596 17.714 15.7925 17.7717 15.8502C17.8294 15.9079 17.8622 15.9858 17.8632 16.0674V16.3762C17.8632 16.54 17.9283 16.6971 18.0441 16.813C18.16 16.9288 18.3171 16.9939 18.4809 16.9939C18.6447 16.9939 18.8018 16.9288 18.9176 16.813C19.0334 16.6971 19.0985 16.54 19.0985 16.3762V12.0528C19.0979 11.4521 18.9224 10.8647 18.5933 10.3622C18.2642 9.85967 17.7959 9.4639 17.2456 9.22324Z" fill="#131212" />
                </svg>
                <span className="ml-1 text-xs font-medium text-gray-800">{property.offers?.bed}</span>
              </div>
              <div className="flex items-center">
                <svg width="16" height="16" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.10254 12.1843V13.5573C1.10254 15.1441 2.26869 16.4635 3.78896 16.7037V17.7188H4.78733V16.7429H13.1234V17.7188H14.1218V16.7037C15.6421 16.4635 16.8082 15.1441 16.8082 13.5573V12.1843H1.10254Z" fill="#131212" />
                </svg>
                <span className="ml-1 text-xs font-medium text-gray-800">{property.offers?.shower}</span>
              </div>
              <div className="flex items-center">
                <svg width="16" height="16" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.9053 14.1692C16.9053 14.3575 16.8305 14.538 16.6973 14.6712C16.5642 14.8043 16.3836 14.8791 16.1953 14.8791H7.67621C7.48792 14.8791 7.30735 14.8043 7.17421 14.6712C7.04108 14.538 6.96628 14.3575 6.96628 14.1692C6.96628 13.0395 7.41506 11.956 8.21388 11.1572C9.0127 10.3584 10.0961 9.90961 11.2258 9.90961H12.6457C13.7754 9.90961 14.8588 10.3584 15.6577 11.1572C16.4565 11.956 16.9053 13.0395 16.9053 14.1692Z" fill="#131212" />
                </svg>
                <span className="ml-1 text-xs font-medium text-gray-800">{property.offers?.occupants}</span>
              </div>
            </div>

            {/* Price */}
            <div className="text-right">
              <p className="text-xl font-semibold text-gray-900">
                ${property.price?.toLocaleString?.() ?? property.price}
                <span className="text-sm text-gray-600">/night</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
