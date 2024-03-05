import { Product } from "../shop/product";
import { SALES } from "../../products";
import './laminatedFloor.css'
export default function LaminatedFloor () {
    return (
        <div className="laminatee">
            <div className="products catalogProducts">
                {SALES.map((product,) => (
                <Product data={product}  className="da" />
                ))}
            </div>
        </div>
    )
}