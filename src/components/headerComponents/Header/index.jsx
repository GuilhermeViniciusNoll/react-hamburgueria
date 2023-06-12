import { InputSearch } from "../InputSearch/index.jsx"
import { Logo } from "../Logo/index.jsx"
import { CartShopping } from "../CartShopping/index.jsx"
import { StyledHeader } from "./style.js"


export function Header({ shoppingCart, setList, listDefault, setModalStatus }) {

    return (
        <StyledHeader>
            <div className="container">
                <div className="subContainer">
                    <Logo />
                    <CartShopping setModalStatus={setModalStatus} shoppingCart={shoppingCart} />
                </div>
                <InputSearch listDefault={listDefault} setList={setList} />
            </div>
        </StyledHeader>
    )
}