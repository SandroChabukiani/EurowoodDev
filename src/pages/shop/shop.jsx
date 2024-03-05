import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import './../shop/shop.css'
import "./shop.css";
// import { Height } from "@mui/icons-material";
export const Shop = () => {
  return (
      <div className="products catalogProducts">
        {PRODUCTS.map((product,) => (
          <Product data={product}  className="da" />
        ))}
      </div>
  );
};