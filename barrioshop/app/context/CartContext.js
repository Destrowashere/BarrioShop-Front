'use client';
import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [dynamicProducts, setDynamicProducts] = useState({});

  useEffect(() => {
    const savedCart = localStorage.getItem('barrioshop-cart');
    const savedAuth = localStorage.getItem('barrioshop-auth');
    const savedProducts = localStorage.getItem('barrioshop-products');
    
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
    
    if (savedAuth === 'admin') {
      setIsAuthenticated(true);
    }

    if (savedProducts) {
      setDynamicProducts(JSON.parse(savedProducts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('barrioshop-cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('barrioshop-products', JSON.stringify(dynamicProducts));
  }, [dynamicProducts]);

  const addToCart = (product, storeId, storeName) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => 
        item.productId === product.id && item.storeId === storeId
      );
      
      if (existingItem) {
        return prevCart.map(item =>
          item.productId === product.id && item.storeId === storeId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, {
          productId: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          storeId,
          storeName,
          quantity: 1
        }];
      }
    });
  };

  const removeFromCart = (productId, storeId) => {
    setCart(prevCart => 
      prevCart.filter(item => 
        !(item.productId === productId && item.storeId === storeId)
      )
    );
  };

  const updateQuantity = (productId, storeId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId, storeId);
      return;
    }
    
    setCart(prevCart =>
      prevCart.map(item =>
        item.productId === productId && item.storeId === storeId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const login = (username) => {
    if (username === 'admin') {
      setIsAuthenticated(true);
      localStorage.setItem('barrioshop-auth', 'admin');
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('barrioshop-auth');
  };

  const addProduct = (product, storeId) => {
    setDynamicProducts(prevProducts => {
      const storeProducts = prevProducts[storeId] || [];
      const newProduct = {
        ...product,
        id: Date.now() + Math.random()
      };
      return {
        ...prevProducts,
        [storeId]: [...storeProducts, newProduct]
      };
    });
  };

  const getProductsForStore = (storeId) => {
    return dynamicProducts[storeId] || [];
  };

  return (
    <CartContext.Provider value={{
      cart,
      isAuthenticated,
      dynamicProducts,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getTotalItems,
      getTotalPrice,
      login,
      logout,
      addProduct,
      getProductsForStore
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart debe ser usado dentro de CartProvider');
  }
  return context;
}
