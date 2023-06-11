import { ProductCart } from "../ProductCard/index.jsx"

export function ProductList({ list, setShoppingCart, shoppingCart }) {


    return (
        <ul>
            {list.map((item) => <ProductCart item={item} shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} />)}
        </ul>
    )
}