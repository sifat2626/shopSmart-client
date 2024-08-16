import React, { useState, useEffect } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";
import ProductCard from "../components/ProductCard";
import { IoReloadOutline } from "react-icons/io5";

function AllProducts() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortBy, setSortBy] = useState("createdAt");
  const [order, setOrder] = useState("desc");

  const categories = [...new Set(products.map((p) => p.category))];
  const brands = [...new Set(products.map((p) => p.brand))];

  useEffect(() => {
    const axiosPublic = useAxiosPublic();
    const fetchProducts = async () => {
      try {
        const { data } = await axiosPublic.get("/products", {
          params: {
            page,
            limit: 9,
            search,
            category,
            brand,
            minPrice,
            maxPrice,
            sortBy,
            order,
          },
        });
        setProducts(data.products);
        setTotalPages(data.pages);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [page, search, category, brand, minPrice, maxPrice, sortBy, order]);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setPage(1);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setPage(1);
  };

  const handleBrandChange = (e) => {
    setBrand(e.target.value);
    setPage(1);
  };

  const handlePriceChange = (e) => {
    if (e.target.name === "minPrice") {
      setMinPrice(e.target.value);
    } else {
      setMaxPrice(e.target.value);
    }
    setPage(1);
  };

  const handleSortChange = (e) => {
    const [sortBy, order] = e.target.value.split(",");
    setSortBy(sortBy);
    setOrder(order);
  };

  const handleResetFilters = () => {
    setSearch("");
    setCategory("");
    setBrand("");
    setMinPrice("");
    setMaxPrice("");
    setSortBy("createdAt");
    setOrder("desc");
    setPage(1);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">All Products</h1>

      <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={handleSearchChange}
          className="border border-gray-300 rounded-md p-2 w-full md:w-1/3"
        />

        <select
          value={category}
          onChange={handleCategoryChange}
          className="border border-gray-300 rounded-md p-2 w-full md:w-1/6"
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        <select
          value={brand}
          onChange={handleBrandChange}
          className="border border-gray-300 rounded-md p-2 w-full md:w-1/6"
        >
          <option value="">All Brands</option>
          {brands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>

        <div className="flex items-center gap-2">
          <input
            type="number"
            name="minPrice"
            placeholder="Min Price"
            value={minPrice}
            onChange={handlePriceChange}
            className="border border-gray-300 rounded-md p-2 w-24"
          />
          <input
            type="number"
            name="maxPrice"
            placeholder="Max Price"
            value={maxPrice}
            onChange={handlePriceChange}
            className="border border-gray-300 rounded-md p-2 w-24"
          />
        </div>

        <select
          onChange={handleSortChange}
          className="border border-gray-300 rounded-md p-2 w-full md:w-1/6"
        >
          <option value="createdAt,desc">Newest First</option>
          <option value="createdAt,asc">Oldest First</option>
          <option value="price,asc">Price: Low to High</option>
          <option value="price,desc">Price: High to Low</option>
        </select>

        <button
          onClick={handleResetFilters}
          className="bg-red-500 text-white px-4 py-2 rounded-md"
        >
          <IoReloadOutline />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>

      <div className="flex justify-between items-center mt-4">
        {page > 1 && (
          <button
            onClick={() => setPage(page - 1)}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Previous
          </button>
        )}
        <span className="text-gray-700">
          Page {page} of {totalPages}
        </span>
        {page < totalPages && (
          <button
            onClick={() => setPage(page + 1)}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}

export default AllProducts;
