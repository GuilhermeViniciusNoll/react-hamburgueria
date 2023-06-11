import imgCart from "../../../assets/cart.png"

export function CartShopping({ shoppingCart,setModalStatus }) {
   

    const value = shoppingCart.reduce((acc, element) => acc + element.amount, 0);


    return (
        <div onClick={() => setModalStatus(true)}>
            <p>{value}</p>
            <img src={imgCart} alt="Imagem Carrinho de compras" />
        </div>
    )
}