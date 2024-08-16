import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../hooks/useAxiosPublic";
import toast from "react-hot-toast";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

function CreateProduct() {
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: "",
    image: null,
    description: "",
    price: "",
    category: "",
    brand: "",
    ratings: 0,
    createdAt: new Date().toISOString().slice(0, 16), // Default to current date and time
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageChange = (e) => {
    setProduct({ ...product, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Upload image
      const formData = new FormData();
      formData.append("image", product.image);

      const res = await axiosPublic.post(image_hosting_api, formData);
      const imageUrl = res.data.data.url;

      // After image upload, handle other product data
      const newProduct = {
        ...product,
        image: imageUrl, // Use the uploaded image URL
        ratings: parseFloat(product.ratings), // Ensure ratings is a float
      };

      // Save product data
      await axiosPublic.post("/products", newProduct);
      toast.success("Product created successfully!");

      // Reset the form
      setProduct({
        name: "",
        image: null,
        description: "",
        price: "",
        category: "",
        brand: "",
        ratings: 0,
        createdAt: new Date().toISOString().slice(0, 16),
      });

      // Navigate to the all products page
      navigate("/products");
    } catch (error) {
      console.error("Error uploading image or creating product:", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
        Create Product
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="name"
          >
            Product Name
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            type="text"
            id="name"
            name="name"
            value={product.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="image"
          >
            Product Image
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            id="description"
            name="description"
            value={product.description}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="price"
          >
            Price
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            type="number"
            id="price"
            name="price"
            value={product.price}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="category"
          >
            Category
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            type="text"
            id="category"
            name="category"
            value={product.category}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="brand"
          >
            Brand
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            type="text"
            id="brand"
            name="brand"
            value={product.brand}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="ratings"
          >
            Rating
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            type="number"
            id="ratings"
            name="ratings"
            value={product.ratings}
            onChange={handleChange}
            required
            min="0"
            max="5"
            step="0.1"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="createdAt"
          >
            Creation Date
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            type="datetime-local"
            id="createdAt"
            name="createdAt"
            value={product.createdAt}
            onChange={handleChange}
            required
          />
        </div>

        <button
          className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
          type="submit"
        >
          Create Product
        </button>
      </form>
    </div>
  );
}

export default CreateProduct;
