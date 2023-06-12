export function useClosedModal(event, keyID, refButton, refModal) {

    if (keyID === null) {
        if (!refModal.current?.contains(event)) refButton.current?.click()
    } else {
        if (event == keyID) refButton.current?.click()
    }
}