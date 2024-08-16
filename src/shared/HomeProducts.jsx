import { useEffect, useState } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

function HomeProducts() {
  const [products, setProducts] = useState([]);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    axiosPublic("products").then((res) => setProducts(res.data.products));
  }, []);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.slice(0, 6).map((product) => (
          <Link key={product._id}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomeProducts;
