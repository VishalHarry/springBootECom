import React, { useState, useEffect } from 'react';

const ProductCart = ({ productId, productName, description, image, price, specialPrice, discount, quantity,onClick}) => {
  const [isAvailable, setIsAvailable] = useState(quantity > 0); // Track availability

  // Update availability when quantity changes
  useEffect(() => {
    if (quantity <= 0) {
      setIsAvailable(false);
    } else {
      setIsAvailable(true);
    }
  }, [quantity]);

  return (
    <div onClick={onClick} className="cursor-pointer p-4 shadow-md rounded-md hover:shadow-lg transition">
      <img src={image} alt={productName} className="w-full h-48 object-cover rounded-md mb-2" />
      <h2 className="font-semibold text-lg">{productName}</h2>
      <p className="text-gray-600 text-sm">{description}</p>
      <div className="mt-2">
        <p className="text-gray-800 font-bold">₹{specialPrice} <span className="line-through text-gray-400 text-sm">₹{price}</span></p>
        <p className="text-green-500 text-sm">{discount}% off</p>
      </div>
      <div className="mt-3">
        {isAvailable ? (
          <button className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm">Add to Cart</button>
        ) : (
          <button className="bg-gray-400 text-white px-3 py-1 rounded-md text-sm cursor-not-allowed" disabled>
            Out of Stock
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCart;
