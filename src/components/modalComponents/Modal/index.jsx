import { useEffect, useRef } from "react";
import { ModalHeader } from "../ModalHeader/index.jsx";
import { ModalList } from "../ModalList/index.jsx";
import { ModalTotal } from "../ModalTotal/index.jsx";
import { useClosedModal } from "../../../hooks/useCloseModal.js"
import { StyledDiv } from "./style.js"

export function Modal({ setModalStatus, setShoppingCart, shoppingCart }) {

    const modal = useRef(null)
    const buttonClose = useRef(null)

    useEffect(() => {
        let keyID

        window.addEventListener("mousedown", () => { useClosedModal(event.target, keyID = null, buttonClose, modal) })
        window.addEventListener("keydown", () => { useClosedModal(event.key, keyID = "Escape", buttonClose, modal) })

        return () => {
            window.removeEventListener("mousedown", () => { useClosedModal(event.target, keyID = null, buttonClose, modal) })
            window.removeEventListener("keydown", () => { useClosedModal(event, keyID = "Escape", buttonClose, modal) })
        }
    }, [])

    return (
        <StyledDiv>
            <div className="subContainer" ref={modal}>
                <ModalHeader buttonClose={buttonClose} setModalStatus={setModalStatus} />
                <ModalList setModalStatus={setModalStatus} setShoppingCart={setShoppingCart} shoppingCart={shoppingCart} />
                <ModalTotal setShoppingCart={setShoppingCart} shoppingCart={shoppingCart} />
            </div>
        </StyledDiv>
    )
}

