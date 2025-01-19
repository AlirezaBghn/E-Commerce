import React from "react";
import { useBasket } from "../Context/BasketContext";

function Checkout() {
  const { basketItems } = useBasket();

  const handlePayment = () => {
    alert("Payment successful! Thank you for your purchase.");
  };

  return (
    <div className="p-6 min-h-screen bg-base-200">
      <h2 className="text-xl font-bold mb-4">Checkout</h2>
      {basketItems.length > 0 ? (
        <div>
          <ul className="mb-4">
            {basketItems.map((item, index) => (
              <li key={index} className="mb-2">
                {item.title} - ${item.price}
              </li>
            ))}
          </ul>
          <button
            onClick={handlePayment}
            className="btn btn-primary bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md shadow"
          >
            Confirm and Pay
          </button>
        </div>
      ) : (
        <p>Your basket is empty. Add some products before checking out.</p>
      )}
    </div>
  );
}

export default Checkout;
