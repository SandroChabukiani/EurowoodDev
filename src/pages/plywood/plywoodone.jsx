import React from "react";
import '../catalog/catalog.css';
import HomeSectionOne from "../home/HomeSectionOne";
import HomeSectionTen from "../home/HomeSectionTen";
import { PRODUCTS } from "../../products";
import { Product } from "../shop/product";
import { ShopContext } from "../../context/shop-context";
import { useContext } from "react";
import { Shop } from "../shop/shop";
export default function PlywoodOne() {
    return(
        <div className="white">
            <div className="catalogProducts">   
                <Shop />
            </div>
            <div  style={{backgroundColor: 'white'}}>
                <HomeSectionTen/>
            </div>
        </div>
    )
}
