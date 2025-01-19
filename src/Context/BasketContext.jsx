import { createContext, useContext, useState } from "react";

const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
  const [basketItems, setBasketItems] = useState([]);

  const addToBasket = (product) => {
    setBasketItems((prevItems) => [...prevItems, product]);
    localStorage.setItem("cart", JSON.stringify([...basketItems, product]));
  };

  const removeFromBasket = (index) => {
    const updatedBasket = basketItems.filter((_, i) => i !== index);
    setBasketItems(updatedBasket);
    localStorage.setItem("cart", JSON.stringify(updatedBasket));
  };

  return (
    <BasketContext.Provider
      value={{ basketItems, addToBasket, removeFromBasket }}
    >
      {children}
    </BasketContext.Provider>
  );
};

export const useBasket = () => useContext(BasketContext);
