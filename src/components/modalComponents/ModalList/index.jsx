import { ModalProduct } from "../ModalProduct/index.jsx";
import { StyledUlModal } from "./style.js"

export function ModalList({ setShoppingCart, shoppingCart }) {

    return (
        <StyledUlModal>
            {shoppingCart.map((element) => <ModalProduct setShoppingCart={setShoppingCart} shoppingCart={shoppingCart} element={element} />)}
        </StyledUlModal>
    )
}

