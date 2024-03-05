import { useParams } from "react-router-dom";
import { PRODUCTS } from "../../products";
import { useLocation } from "react-router-dom";
import { SALES } from "../../products";
import './singleProduct.css'
import { Link } from "react-router-dom";
export const SingleProduct = () => {
  const { id } = useParams();
  const location = useLocation();
  const currentRoute = location.pathname.split("/")[1];
  console.log(currentRoute);
  const currentProduct =
    currentRoute === "sales"
      ? SALES.find((el) => el.id == id)
      : PRODUCTS.find((el) => el.id == id);
  return (
      <div className="singleProductPage">
          <div className="flexDiv">
            <img src={currentProduct?.productImage} />
            <div className="singleProduct">
              <div className="singleInfo">
                <h1>{currentProduct?.productName}</h1>
                <p>{currentProduct?.description}</p>
                <h2>{currentProduct?.price} ლარი</h2>
              </div>
              <div className="done">
                <h1>შეძენა</h1>
              </div>
              <button className="wish" >
                <h1>კალათაში დამატება</h1>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                  <mask id="mask0_93_3929" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="24">
                    <rect x="0.5" width="24" height="24" fill="#D9D9D9"/>
                  </mask>
                  <g mask="url(#mask0_93_3929)">
                    <path d="M12.5 21L11.05 19.7C9.36667 18.1834 7.975 16.875 6.875 15.775C5.775 14.675 4.9 13.6875 4.25 12.8125C3.6 11.9375 3.14583 11.1334 2.8875 10.4C2.62917 9.66669 2.5 8.91669 2.5 8.15002C2.5 6.58336 3.025 5.27502 4.075 4.22502C5.125 3.17502 6.43333 2.65002 8 2.65002C8.86667 2.65002 9.69167 2.83336 10.475 3.20002C11.2583 3.56669 11.9333 4.08336 12.5 4.75002C13.0667 4.08336 13.7417 3.56669 14.525 3.20002C15.3083 2.83336 16.1333 2.65002 17 2.65002C18.5667 2.65002 19.875 3.17502 20.925 4.22502C21.975 5.27502 22.5 6.58336 22.5 8.15002C22.5 8.91669 22.3708 9.66669 22.1125 10.4C21.8542 11.1334 21.4 11.9375 20.75 12.8125C20.1 13.6875 19.225 14.675 18.125 15.775C17.025 16.875 15.6333 18.1834 13.95 19.7L12.5 21Z" fill="#1C1B1F"/>
                  </g>
                </svg>
              </button>
            </div>
            
          </div>
      </div>
    );
  };

 export default SingleProduct;