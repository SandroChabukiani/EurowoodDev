import react from "react";
import img1 from '../images/contemporary-chair-z0AGK2F-600.jpg';
import img2 from '../images/skam (1).png'
import './main.css'
import { Link } from "react-router-dom";
import { SALE } from "./shop/product";
import { SALES } from "../products";
import HomeSectionOne from "./home/HomeSectionOne";
import HomeSectionThree from "./home/HomeSectionThree";
import HomeSectionFour from "./home/HomeSectionFour";
import HomeSectionFive from "./home/HomeSectionFive";
import HomeSectionSix from "./home/HomeSectionSix";
import HomeSectionSeven from "./home/HomeSectionSeven";
import HomeSectionEight from "./home/HomeSectionEight";
import HomeSectionNine from "./home/HomeSectionNine";
import ImageSlider from "../components/carousel/carousel";
export default function Main () {
    return(
        <div>
            <div className="slide">
                <ImageSlider />
            </div>
            {/* <HomeSectionSix /> */}
            <HomeSectionFour />
            <HomeSectionThree />
        </div>
    )
}
{/* <div className="shop">
    <div className="products">
        {SALES.map((sl) => (
        <SALE data={sl} />
        ))}
    </div>
</div> */}