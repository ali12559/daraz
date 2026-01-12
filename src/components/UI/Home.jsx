import React from "react";

function Home() {
  return (
    <div className="home text-center">
      <h2 className="text-[#424242] text-[22px] my-2 ">Flash Sale</h2>
      <div className="products flex items-center justify-center my-10">

        <div className="product-card">
          <img src="src/assets/prdct1.png" alt="Product" />
          <p>Fridge</p>
          <p className="text-[#f57224] text-[18px]">Rs. 74000</p>
        </div>
        <div className="product-card">
          <img src="src/assets/prdct2.png" alt="Product" />
          <p>AC</p>
          <p className="text-[#f57224] text-[18px]">Rs. 72,916</p>
        </div>
      </div>

      
    </div>
  );
}

export default Home;
