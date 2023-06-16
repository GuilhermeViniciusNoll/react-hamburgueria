import { toast } from "react-toastify"
import { StyledDiv } from "./style.js"
import { ButtonStyled } from "../../../styles/buttonStyle.js"

export function ModalTotal({ setShoppingCart, shoppingCart }) {

    let value = shoppingCart.reduce((acc, element) => acc + (element.price * element.amount), 0)
    value = value.toLocaleString("pt-br", { style: "currency", currency: "BRL" })

    const deleteAllProducts = () => {
        if (shoppingCart.length > 0) {
            setShoppingCart([])
            toast(`Todos os pedidos foram removido!`, {
                autoClose: 1000,
                hideProgressBar: true,
                pauseOnHover: false,
            })
        }
    }

    return (
        <StyledDiv>
            <div>
                <span>Total</span>
                <span className="value">{value}</span>
            </div>
            <ButtonStyled onClick={() => deleteAllProducts()}>Remover Todos</ButtonStyled>
        </StyledDiv>
    )
}

