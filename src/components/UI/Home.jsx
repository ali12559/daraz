import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

function Home() {
  let [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        console.log("Failed to fetch products.");
      }
      const data = await response.json();
      setProducts(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const toggleCategory = (e) => {
    const value = e.target.value;

    setCategory((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value],
    );
  };

  const filteredProducts =
    category.length === 0
      ? products
      : products.filter((product) => category.includes(product.category));

  return (
    <div className="home text-center">
      <h2 className="text-[#424242] text-[22px] my-2 ">Flash Sale</h2>

      <div>
        <p>
          <input type="checkbox" value={"men's clothing"} onClick={toggleCategory} /> men's clothing
        </p>
        <p> 
          <input type="checkbox" value={"women's clothing"} onClick={toggleCategory} /> women's clothing
        </p>
        <p>
          <input type="checkbox" value={"jewelery"} onClick={toggleCategory} /> jewelery
        </p>
      </div>

      <div className="grid grid-cols-5 items-center">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;
