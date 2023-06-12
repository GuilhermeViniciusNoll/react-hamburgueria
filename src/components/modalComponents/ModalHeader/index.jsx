import { StyleHeaderModal } from "./style.js"

export function ModalHeader({ setModalStatus, buttonClose }) {

    return (
        <StyleHeaderModal>
            <h2>Carrinho de compras</h2>
            <button ref={buttonClose} onClick={() => setModalStatus(false)}>X</button>
        </StyleHeaderModal>
    )
}

