import React, { useState, useEffect } from "react";
import Product from "./Product";
import "./ProductTab.css";
import axios from "axios";

function ProductTabs() {
  const [data, setData] = useState([]);

  useEffect(() => {
    let getProducts = async () => {
      const response = await axios.get("https://dummyjson.com/products");
      setData(response.data.products);
    };

    getProducts();
  }, []);

  return (
    <div className="ProductContainer">
      {data.map((x) => {
        return (
          <Product
            key={x.id}
            title={x.title}
            brand={x.brand}
            price={x.price}
            imgLink={x.images[0]}
            rating={x.rating}
          />
        );
      })}
    </div>
  );
}

export default ProductTabs;
