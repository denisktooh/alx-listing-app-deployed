import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-400 py-8 sm:py-12 px-3 sm:px-6">
      
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
        
        {/* Brand Section */}
        <div className="sm:col-span-2 md:col-span-1">
          <img
            src="/assets/logo.png"
            alt="ALX Logo"
            className="w-12 sm:w-16 h-8 sm:h-10 object-contain mb-3 sm:mb-4 brightness-0 invert"
          />
          <p className="text-xs sm:text-sm leading-relaxed">
            ALX is a platform where travelers can discover and book unique, comfortable, and 
            affordable lodging options worldwide. From cozy city apartments and tranquil 
            countryside retreats to exotic beachside villas, ALX connects you with the perfect 
            place to stay for any trip.
          </p>
        </div>

        {/* Explore Section */}
        <div>
          <h3 className="text-white text-base sm:text-lg font-semibold mb-3 sm:mb-4">Explore</h3>
          <ul className="space-y-2 text-xs sm:text-sm">
            <li>
              <Link href="#" className="hover:text-white transition">
                Apartments in Dubai
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition">
                Hotels in New York
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition">
                Villa in Spain
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition">
                Mansion in Indonesia
              </Link>
            </li>
          </ul>
        </div>

        {/* Company Section */}
        <div>
          <h3 className="text-white text-base sm:text-lg font-semibold mb-3 sm:mb-4">Company</h3>
          <ul className="space-y-2 text-xs sm:text-sm">
            <li>
              <Link href="#" className="hover:text-white transition">
                About us
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition">
                Blog
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition">
                Career
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition">
                Customers
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition">
                Brand
              </Link>
            </li>
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <h3 className="text-white text-base sm:text-lg font-semibold mb-3 sm:mb-4">Help</h3>
          <ul className="space-y-2 text-xs sm:text-sm">
            <li>
              <Link href="#" className="hover:text-white transition">
                Support
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition">
                Cancel booking
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition">
                Refunds Process
              </Link>
            </li>
          </ul>
        </div>

      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto border-t border-gray-700 pt-6">
        
        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0 text-center sm:text-left">
          
          {/* Cancellation Notice */}
          <p className="text-xs sm:text-sm">
            Some hotel requires you to cancel more than 24 hours before check-in. Details{" "}
            <Link href="#" className="text-teal-400 hover:text-teal-300">
              here
            </Link>
          </p>

          {/* Legal Links */}
          <div className="flex flex-wrap gap-3 sm:space-x-6 text-xs sm:text-sm justify-center sm:justify-end">
            <Link href="#" className="hover:text-white transition">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-white transition">
              Policy service
            </Link>
            <Link href="#" className="hover:text-white transition">
              Cookies Policy
            </Link>
            <Link href="#" className="hover:text-white transition">
              Partners
            </Link>
          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;