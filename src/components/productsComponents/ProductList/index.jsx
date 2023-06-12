import { ProductCart } from "../ProductCard/index.jsx"
import { StyledSection } from "./style.js"

export function ProductList({ list, setShoppingCart, shoppingCart }) {

    return (
        <StyledSection>
            <div className="container">
                <ul>
                    {list.map((item) => <ProductCart item={item} shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} />)}
                </ul>
            </div>
        </StyledSection>
    )
}