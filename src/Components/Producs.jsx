import { useState, useEffect } from "react";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data); // Set the fetched data to state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchApi();
  }, []);

  return (
    <div className="flex flex-wrap gap-8 justify-center p-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="card bg-white border border-gray-200 rounded-lg shadow-lg w-80"
        >
          <figure className="p-4">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-64 object-contain"
            />
          </figure>
          <div className="card-body p-4">
            <h2 className="card-title text-lg font-bold text-gray-800">
              {product.title}
            </h2>
            <p className="text-sm text-gray-600 mt-2">{product.description}</p>
            <p className="text-xl font-semibold text-gray-900 mt-4">
              ${product.price}
            </p>
            <div className="card-actions mt-4 flex justify-end">
              <button
                onClick={() => {
                  const cart = localStorage.getItem("cart")
                    ? JSON.parse(localStorage.getItem("cart"))
                    : [];
                  cart.push(product);
                  localStorage.setItem("cart", JSON.stringify(cart));
                }}
                className="btn btn-primary bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md shadow"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
