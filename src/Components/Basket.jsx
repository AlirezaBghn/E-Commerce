import { useBasket } from "../Context/BasketContext";
import { useNavigate } from "react-router-dom";

function Basket() {
  const { basketItems, removeFromBasket } = useBasket();
  const navigate = useNavigate();

  const handleCheckout = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    if (isLoggedIn) {
      if (basketItems.length > 0) {
        alert("Proceeding to checkout...");
        navigate("/checkout");
      } else {
        alert("Your basket is empty. Add items before checkout.");
      }
    } else {
      alert("Please log in to proceed to checkout.");
      navigate("/Login");
    }
  };

  return (
    <div className="p-6 min-h-screen bg-base-200">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-xl font-bold mb-4">Your Basket</h2>
        <button
          onClick={handleCheckout}
          className="btn btn-danger bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md shadow"
        >
          Proceed to Checkout
        </button>
      </div>

      {basketItems.length > 0 ? (
        <div className="flex flex-wrap gap-8 justify-center">
          {basketItems.map((item, index) => (
            <div
              key={index}
              className="card bg-white border border-gray-200 rounded-lg shadow-lg w-80"
            >
              <figure className="p-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-contain"
                />
              </figure>
              <div className="card-body p-4">
                <h2 className="card-title text-lg font-bold text-gray-800">
                  {item.title}
                </h2>
                <p className="text-sm text-gray-600 mt-2">{item.description}</p>
                <p className="text-xl font-semibold text-gray-900 mt-4">
                  ${item.price}
                </p>
                <div className="card-actions mt-4 flex justify-end">
                  <button
                    onClick={() => removeFromBasket(index)}
                    className="btn btn-danger bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md shadow"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">Your basket is empty.</p>
      )}
    </div>
  );
}

export default Basket;
