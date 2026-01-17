import CancellationPolicy from "./CancellationPolicy";

const BookingForm = () => (
  <div className="bg-white p-4 sm:p-6 shadow-md rounded-lg">
    <h2 className="text-lg sm:text-xl font-semibold">Contact Detail</h2>
    <form>
      {/* Contact Information */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-4">
        <div>
          <label className="text-sm sm:text-base">First Name</label>
          <input type="text" className="border p-2 w-full mt-2 text-sm rounded" />
        </div>
        <div>
          <label className="text-sm sm:text-base">Last Name</label>
          <input type="text" className="border p-2 w-full mt-2 text-sm rounded" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-4">
        <div>
          <label className="text-sm sm:text-base">Email</label>
          <input type="email" className="border p-2 w-full mt-2 text-sm rounded" />
        </div>
        <div>
          <label className="text-sm sm:text-base">Phone Number</label>
          <input type="text" className="border p-2 w-full mt-2 text-sm rounded" />
        </div>
      </div>

      {/* Payment Information */}
      <h2 className="text-lg sm:text-xl font-semibold mt-6">Pay with</h2>
      <div className="mt-4">
        <label className="text-sm sm:text-base">Card Number</label>
        <input type="text" className="border p-2 w-full mt-2 text-sm rounded" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-4">
        <div>
          <label className="text-sm sm:text-base">Expiration Date</label>
          <input type="text" className="border p-2 w-full mt-2 text-sm rounded" />
        </div>
        <div>
          <label className="text-sm sm:text-base">CVV</label>
          <input type="text" className="border p-2 w-full mt-2 text-sm rounded" />
        </div>
      </div>

      {/* Billing Address */}
      <h2 className="text-lg sm:text-xl font-semibold mt-6">Billing Address</h2>
      <div className="mt-4">
        <label className="text-sm sm:text-base">Street Address</label>
        <input type="text" className="border p-2 w-full mt-2 text-sm rounded" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-4">
        <div>
          <label className="text-sm sm:text-base">City</label>
          <input type="text" className="border p-2 w-full mt-2 text-sm rounded" />
        </div>
        <div>
          <label className="text-sm sm:text-base">State</label>
          <input type="text" className="border p-2 w-full mt-2 text-sm rounded" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-4">
        <div>
          <label className="text-sm sm:text-base">Zip Code</label>
          <input type="text" className="border p-2 w-full mt-2 text-sm rounded" />
        </div>
        <div>
          <label className="text-sm sm:text-base">Country</label>
          <input type="text" className="border p-2 w-full mt-2 text-sm rounded" />
        </div>
      </div>

      {/* Submit Button */}
      <button className="mt-6 bg-green-500 text-white py-2 px-4 rounded-md w-full font-medium text-sm sm:text-base hover:bg-green-600 transition">
        Confirm & Pay
      </button>
    </form>
    <CancellationPolicy />
  </div>
);

export default BookingForm;
