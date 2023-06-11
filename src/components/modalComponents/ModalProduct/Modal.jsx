import trash from "../../../assets/trash.png"

export function ModalProduct({ element, shoppingCart, setShoppingCart }) {

    const deleteElement = () => {
        const newList = shoppingCart.filter((product) => product.id != element.id)
        setShoppingCart(newList)
    }

    return (
        <li key={element.id}>
            <div>
                <img src={element.img} />
                <div>
                    <h2>{element.name}</h2>
                    <p>Quantidade: <span>{element.amount}</span></p>
                </div>
            </div>
            <button onClick={() => { deleteElement() }}><img src={trash} alt="" /></button>
        </li>
    )
}

