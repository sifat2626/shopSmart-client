import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="flex flex-col justify-between h-full border border-gray-300 rounded-lg p-4 shadow-md">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover mb-4 rounded"
      />
      <div className="flex flex-col justify-between flex-grow">
        <div>
          <h2 className="text-xl font-bold mb-2">{product.name}</h2>
          <p className="text-gray-700 mb-4">{product.description}</p>
        </div>
        <p className="text-gray-900 font-semibold">
          Price: ${product.price.toFixed(2)}
        </p>
      </div>
      <Link
        to={`/products/${product._id}`}
        className="mt-4 text-center bg-blue-500 text-white py-2 rounded-md"
      >
        View Details
      </Link>
    </div>
  );
}

export default ProductCard;
