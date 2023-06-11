import { InputSearch } from "../InputSearch/index.jsx"
import { Logo } from "../Logo/index.jsx"
import { CartShopping } from "../CartShopping/index.jsx"


export function Header({ shoppingCart, setList, listDefault, setModalStatus }) {

    return (
        <header>
            <div className="containerHeader">
                <div>
                    <Logo />
                    <CartShopping setModalStatus={setModalStatus} shoppingCart={shoppingCart} />
                </div>
                <InputSearch listDefault={listDefault} setList={setList} />
            </div>
        </header>
    )
}