// Product.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCart from './ProductCart';

const Product = () => {
    const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');


  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      try {
        const fetchedData = [
          {
            productId: "P001",
            productName: "Wireless Bluetooth Headphones",
            description: "Noise-cancelling headphones with up to 20 hours of battery life.",
            image: "https://via.placeholder.com/150",
            quantity: 0,
            price: 2999,
            discount: 10,
            specialPrice: 2699
          },
          {
            productId: "P002",
            productName: "Smart Fitness Band",
            description: "Tracks your steps, heart rate, and sleep quality.",
            image: "https://via.placeholder.com/150",
            quantity: 100,
            price: 1999,
            discount: 15,
            specialPrice: 1699
          },
          {
            productId: "P003",
            productName: "Gaming Mouse",
            description: "Ergonomic design with customizable buttons and RGB lighting.",
            image: "https://via.placeholder.com/150",
            quantity: 75,
            price: 1499,
            discount: 5,
            specialPrice: 1424
          },
          {
            productId: "P004",
            productName: "4K LED Monitor",
            description: "27-inch UHD display perfect for gaming and productivity.",
            image: "https://via.placeholder.com/150",
            quantity: 30,
            price: 18999,
            discount: 20,
            specialPrice: 15199
          },
          {
            productId: "P005",
            productName: "Mechanical Keyboard",
            description: "Compact keyboard with tactile switches and RGB backlight.",
            image: "https://via.placeholder.com/150",
            quantity: 60,
            price: 3499,
            discount: 10,
            specialPrice: 3149
          }
        ];
        setProducts(fetchedData);
        setIsLoading(false);
      } catch (err) {
        setErrorMessage('Failed to load products.');
        setIsLoading(false);
      }
    }, 1000);
  }, []);

  if (isLoading) {
    return <div className="p-4 text-center">Loading...</div>;
  }

  if (errorMessage) {
    return <div className="p-4 text-center text-red-500">{errorMessage}</div>;
  }

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((item, i) => (
          <ProductCart key={i} {...item}  onClick={() => navigate(`/product/${item.productId}`, { state: { productData: item } })}  />
        ))}
      </div>
    </div>
  );
};

export default Product;
