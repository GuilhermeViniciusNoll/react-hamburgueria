
export function ProductCart({ item, setShoppingCart, shoppingCart }) {

    const value = item.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

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
    }

    return (
        <li key={item.id}>
            <img src={item.img} alt="imagem lanche" />
            <div>
                <h2>{item.name}</h2>
                <p>{item.category}</p>
                <span>{value}</span>
                <button onClick={addCart}>Adicionar</button>
            </div>
        </li >
    )
}