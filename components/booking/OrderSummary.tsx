const OrderSummary: React.FC<{ bookingDetails: any }> = ({ bookingDetails }) => (
  <div className="bg-white p-4 sm:p-6 shadow-md rounded-lg sticky top-20 sm:top-24">
    <h2 className="text-lg sm:text-xl font-semibold">Review Order Details</h2>
    <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-4">
      <img src="https://example.com/property.jpg" alt="Property" className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-md flex-shrink-0" />
      <div>
        <h3 className="text-base sm:text-lg font-semibold">{bookingDetails.propertyName}</h3>
        <p className="text-xs sm:text-sm text-gray-500">4.76 (345 reviews)</p>
        <p className="text-xs sm:text-sm text-gray-500">{bookingDetails.startDate} • {bookingDetails.totalNights} Nights</p>
      </div>
    </div>

    {/* Price Breakdown */}
    <div className="mt-6 border-t pt-4">
      <div className="flex justify-between text-sm sm:text-base">
        <p>Booking Fee</p>
        <p>${bookingDetails.bookingFee}</p>
      </div>
      <div className="flex justify-between mt-3 text-sm sm:text-base">
        <p>Subtotal</p>
        <p>${bookingDetails.price}</p>
      </div>
      <div className="flex justify-between mt-3 font-semibold text-sm sm:text-base border-t pt-3">
        <p>Grand Total</p>
        <p>${bookingDetails.bookingFee + bookingDetails.price}</p>
      </div>
    </div>
  </div>
);

export default OrderSummary;
