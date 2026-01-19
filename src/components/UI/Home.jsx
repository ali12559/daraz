import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

function Home() {
  let [products , setProducts] = useState([]);

   const fetchProducts = async () => {
    try{
      const response = await fetch("https://fakestoreapi.com/products")
      if (!response.ok) {
        console.log("Failed to fetch products.");
      }
      const data = await response.json();
      setProducts(data)
    } catch (err) {
      console.log(err)
    }
  }
  
  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div className="home text-center">
      <h2 className="text-[#424242] text-[22px] my-2 ">Flash Sale</h2>

      <div className="grid grid-cols-5 items-center">
        {products.map((product) => 
          <ProductCard key={product.id} product={product} />
        )}
      </div>

      
    </div>
  );
}

export default Home;
