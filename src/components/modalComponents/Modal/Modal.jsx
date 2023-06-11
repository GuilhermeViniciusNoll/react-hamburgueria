import { useEffect, useRef } from "react";
import { ModalHeader } from "../ModalHeader/Modal.jsx";
import { ModalList } from "../ModalList/Modal.jsx";
import { ModalTotal } from "../ModalTotal/Modal.jsx";
import { useClosedModal } from "../../../hooks/useCloseModal.js"

export function Modal({ setModalStatus, setShoppingCart, shoppingCart }) {

    const modal = useRef(null)
    const buttonClose = useRef(null)

    useEffect(() => {
        let keyID

        window.addEventListener('mousedown', () => { useClosedModal(event.target, keyID = null, buttonClose, modal) })
        window.addEventListener('keydown', () => { useClosedModal(event.key, keyID = "Escape", buttonClose, modal) })

        return () => {
            window.removeEventListener('mousedown', () => { useClosedModal(event.target, keyID = null, buttonClose, modal) })
            window.removeEventListener('keydown', () => { useClosedModal(event, keyID = "Escape", buttonClose, modal) })
        }
    }, [])

    return (
        <div >
            <div ref={modal}>
                <ModalHeader buttonClose={buttonClose} setModalStatus={setModalStatus} />
                <ModalList setModalStatus={setModalStatus} setShoppingCart={setShoppingCart} shoppingCart={shoppingCart} />
                <ModalTotal setShoppingCart={setShoppingCart} shoppingCart={shoppingCart} />
            </div>
        </div>
    )
}

