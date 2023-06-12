import trash from "../../../assets/trash.png"
import { toast } from "react-toastify";
import { StyledLi } from "./style.js"

export function ModalProduct({ element, shoppingCart, setShoppingCart }) {

    const deleteElement = () => {
        const newList = shoppingCart.filter((product) => product.id != element.id)
        setShoppingCart(newList)
        toast(`Pedido Removido!`, {
            autoClose: 1000,
            hideProgressBar: true,
            pauseOnHover: false,
        });
    }

    return (
        <StyledLi key={element.id}>
            <div className="container">
                <div className="divImg">
                    <img src={element.img} />
                </div>
                <div className="subContainerItem">
                    <h2>{element.name}</h2>
                    <p>Quantidade: <span>{element.amount}</span></p>
                </div>
            </div>
            <button onClick={() => { deleteElement() }}><img src={trash} alt="" /></button>
        </StyledLi>
    )
}

