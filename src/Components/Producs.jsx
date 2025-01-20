import { useState, useEffect } from "react";
import { useBasket } from "../Context/BasketContext";

function Products() {
  const [products, setProducts] = useState([]);
  const { addToBasket } = useBasket();

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchApi();
  }, []);

  return (
    <div className="flex flex-wrap gap-10 justify-center p-10 bg-gray-100">
      {products.map((product) => (
        <div
          key={product.id}
          className="card bg-white border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-80 overflow-hidden"
        >
          <figure className="p-4 bg-gray-50">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-64 object-contain transition-transform duration-300 hover:scale-110"
            />
          </figure>
          <div className="card-body p-6">
            <h2 className="card-title text-lg font-bold text-gray-800 line-clamp-2">
              {product.title}
            </h2>
            <p className="text-sm text-gray-600 mt-2 line-clamp-3">
              {product.description}
            </p>

            <p className="text-xl font-semibold text-green-600 mt-4">
              ${product.price}
            </p>
            <div className="card-actions mt-6 flex justify-between items-center">
              <button
                onClick={() => addToBasket(product)}
                className="btn btn-primary bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:shadow-md transition-shadow"
              >
                Add to Cart
              </button>
              <span className="text-gray-500 text-sm italic">In stock</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
