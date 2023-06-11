
export function ModalHeader({ setModalStatus, buttonClose }) {

    return (
        <header>
            <div>
                <h2>Carrinho de compras</h2>
                <button ref={buttonClose} onClick={() => setModalStatus(false)}>X</button>
            </div>
        </header>
    )
}

