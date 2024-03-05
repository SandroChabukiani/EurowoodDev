import React from "react";
import './catalog.css';
import HomeSectionOne from "../home/HomeSectionOne";
import HomeSectionTen from "../home/HomeSectionTen";
import { PRODUCTS } from "../../products";
import { Product, SALE } from "../shop/product";
import { ShopContext } from "../../context/shop-context";
import { useContext } from "react";
import { Shop } from "../shop/shop";
export default function Catalog() {  
  
    return(
        <div>
           {/* <HomeSectionOne /> */}
            <div className="catalog">
                <div>
                    <div className="filter">
                        <div className="categories">
                            <h1>Categories</h1>
                            <ul>
                                <li className="categoriesLi">Long sleeved tops <input type="checkbox" /> </li>
                                <li className="categoriesLi">Short sleeved tops <input type="checkbox" /> </li>
                                <li className="categoriesLi">Evening tops <input type="checkbox" /> </li>
                                <li className="categoriesLi">Sweater<input type="checkbox" /> </li>
                                <li className="categoriesLi">T-shirts <input type="checkbox" /> </li>
                                <li className="categoriesLi">Blouses<input type="checkbox" /> </li>
                            </ul>
                        </div>
                    </div>
                    <div className="categories meore">
                        <h1>Size</h1>
                        <ul>
                            <li className="categoriesLi">XXS<input type="checkbox" /> </li>
                            <li className="categoriesLi">XS<input type="checkbox" /> </li>
                            <li className="categoriesLi">S<input type="checkbox" /> </li>
                            <li className="categoriesLi">M<input type="checkbox" /> </li>
                            <li className="categoriesLi">L<input type="checkbox" /> </li>
                            <li className="categoriesLi">XL <input type="checkbox" /> </li>
                            <li className="categoriesLi">XXL<input type="checkbox" /> </li>
                        </ul>
                    </div>
                    <div className="categories meore">
                        <h1>Price</h1>
                        <ul>
                            <li className="categoriesLi">$100-200<input type="checkbox" /> </li>
                            <li className="categoriesLi">$200-300<input type="checkbox" /> </li>
                            <li className="categoriesLi">$300-400<input type="checkbox" /> </li>
                            <li className="categoriesLi">$400-500<input type="checkbox" /> </li>
                            <li className="categoriesLi">$500-600<input type="checkbox" /> </li>
                            <li className="categoriesLi">$600-700<input type="checkbox" /> </li>
                            <li className="categoriesLi">$700-800<input type="checkbox" /> </li>
                        </ul>
                    </div>
                </div>
                <div className="catalogProducts">   
                    <Shop />
                </div>
            </div>
            <div  style={{backgroundColor: 'white'}}>
                <HomeSectionTen/>
            </div>
        </div>
    )
}