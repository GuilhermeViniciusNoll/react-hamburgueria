import { toast } from "react-toastify";
import { ButtonStyled } from "../../../styles/buttonStyle.js"
import { StyledLi } from "./style.js"

export function ProductCart({ item, setShoppingCart, shoppingCart }) {

    const value = item.price.toLocaleString("pt-br", { style: "currency", currency: "BRL" });

    const addCart = () => {
        const productRepeated = shoppingCart.find((element) => element.id == item.id)
        if (productRepeated == undefined) {
            item.amount = 1
            setShoppingCart([...shoppingCart, item])
        } else {
            const newList = shoppingCart.filter((element) => element.id != item.id)
            item.amount = item.amount + 1
            setShoppingCart([...newList, item])
        }
        toast(`😋 Pedido adicionado!`, {
            autoClose: 1000,
            hideProgressBar: true,
            pauseOnHover: false,
        });
    }

    return (
        <StyledLi key={item.id}>
            <div className="firstDiv">
                <img src={item.img} alt="imagem lanche" />
            </div>
            <div className="secondDiv">
                <h2>{item.name}</h2>
                <p>{item.category}</p>
                <span>{value}</span>
                <ButtonStyled model="medium" onClick={addCart}>Adicionar</ButtonStyled>
            </div>
        </StyledLi >
    )
}