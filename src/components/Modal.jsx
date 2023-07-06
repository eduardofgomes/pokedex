import React from 'react'

const Modal = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false)

    useEffect(() => {
        console.log('Modal')
    }, [modalIsOpen])

    return (
        <>
            <div id={"modal${pokemon?.id}"} class="modal">
                <div class="modal-content">
                    <div class="modal-close">
                        <span class="close">&times;</span>
                    </div>
                    <div class="modal-information">
                        <img src="" class="image-modal text-modal" alt="Image not found" />
                        <h2 class="text-modal"></h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal