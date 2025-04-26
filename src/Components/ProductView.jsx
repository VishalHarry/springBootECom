import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ProductView = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const product = state?.productData;

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <div className="p-4 text-center">No product found.</div>;
  }

  const isAvailable = product.quantity > 0;

  const handleAddToCart = () => {
    // Later connect to your global cart state
    alert(`Added ${quantity} x ${product.productName} to cart`);
  };

  const handleBuyNow = () => {
    // Navigate to checkout page (optional: pass product)
    navigate('/checkout', { state: { product, quantity } });
  };

  return (
    <div className="p-6 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
      <img
        src={product.image}
        alt={product.productName}
        className="w-full h-96 object-cover rounded-md shadow"
      />

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">{product.productName}</h2>
        <p className="text-gray-700">{product.description}</p>

        <div className="text-xl font-semibold text-green-600">
          ₹{product.specialPrice}{' '}
          <span className="text-gray-400 line-through text-base">₹{product.price}</span>
        </div>
        <p className="text-sm text-gray-500">{product.discount}% off</p>

        <div className="flex items-center gap-3">
          <label className="text-sm">Qty:</label>
          <select
            className="border p-1 rounded"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            disabled={!isAvailable}
          >
            {[...Array(Math.min(product.quantity, 10)).keys()].map((i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>

        <div className="space-x-4 mt-4">
          <button
            onClick={handleAddToCart}
            disabled={!isAvailable}
            className={`px-4 py-2 rounded text-white ${
              isAvailable ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'
            }`}
          >
            {isAvailable ? 'Add to Cart' : 'Out of Stock'}
          </button>
          <button
            onClick={handleBuyNow}
            disabled={!isAvailable}
            className={`px-4 py-2 rounded text-white ${
              isAvailable ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-400 cursor-not-allowed'
            }`}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
