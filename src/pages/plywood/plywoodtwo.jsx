import React from "react";
import '../catalog/catalog.css';
import HomeSectionOne from "../home/HomeSectionOne";
import HomeSectionTen from "../home/HomeSectionTen";
import { PRODUCTS2 } from "../../products";
import { Product } from "../shop/product";
import { ShopContext } from "../../context/shop-context";
import { useContext } from "react";
import { Shop } from "../shop/shop";
export default function PlywoodTwo() {
    return(
        <div>
           {/* <HomeSectionOne /> */}
            <div className="catalog">
                <div className="catalogProducts">   
                    <div className="products catalogProducts">
                        {PRODUCTS2.map((product,) => (
                        <Product data={product}  className="da" />
                        ))}
                    </div>
                </div>
            </div>
            <div  style={{backgroundColor: 'white'}}>
                <HomeSectionTen/>
            </div>
        </div>
    )
}
