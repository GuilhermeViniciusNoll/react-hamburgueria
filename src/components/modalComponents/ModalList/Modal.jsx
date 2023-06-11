import { ModalProduct } from "../ModalProduct/Modal.jsx";

export function ModalList({ setShoppingCart, shoppingCart }) {

    return (
        <ul>
            {shoppingCart.map((element) => <ModalProduct setShoppingCart={setShoppingCart} shoppingCart={shoppingCart} element={element} />)}
        </ul>
    )
}

