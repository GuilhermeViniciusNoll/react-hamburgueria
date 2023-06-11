
export function ModalTotal({ setShoppingCart, shoppingCart }) {

    let value = shoppingCart.reduce((acc, element) => acc + (element.price * element.amount), 0);
    value = value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })

    return (
        <div>
            <div>
                <span>Total</span>
                <span>{value}</span>
            </div>
            <button onClick={() => setShoppingCart([])}>Remover Todos</button>
        </div>
    )
}

