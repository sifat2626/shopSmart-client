import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import useAxiosPublic from "../hooks/useAxiosPublic";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const axiosPublic = useAxiosPublic();
    const fetchProductDetails = async () => {
      try {
        const { data } = await axiosPublic.get(`/products/${id}`);
        setProduct(data);
        setLoading(false);
      } catch (err) {
        setError("Product not found");
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover object-center"
        />
        <div className="p-6">
          <h2 className="text-3xl font-semibold text-gray-800">
            {product.name}
          </h2>
          <p className="text-gray-600 mt-2">{product.description}</p>
          <div className="mt-4">
            <span className="text-gray-700 font-bold text-xl">
              ${product.price}
            </span>
            <span className="ml-4 text-gray-500">
              Rating: {product.ratings}★
            </span>
          </div>
          <div className="mt-4">
            <span className="text-gray-700">Brand:</span>
            <span className="ml-2 text-gray-900 font-medium">
              {product.brand}
            </span>
          </div>
          <div className="mt-4">
            <span className="text-gray-700">Category:</span>
            <span className="ml-2 text-gray-900 font-medium">
              {product.category}
            </span>
          </div>
          <div className="mt-6">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">
              Add to Cart
            </button>
            <button className="ml-4 bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-500">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
