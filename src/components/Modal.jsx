import React, {useState, useEffect} from 'react'

const Modal = (props) => {
    {pokemon.name, pokemon.id, pokemon}

    const [modalIsOpen, setModalIsOpen] = useState(false)

    useEffect(() => {
        console.log('Modal')
    }, [modalIsOpen])

    return (
        <>
            {modalIsOpen && <div id={"pokemon" + pokemon?.id} class="modal">
                <div class="modal-content">
                    <div class="modal-close">
                        <span class="close">&times;</span>
                    </div>
                    <div class="modal-information">
                        <h1>{pokemon.name}</h1>
                        <img src="" class="image-modal text-modal" alt="Image not found" />
                        <h2 class="text-modal"></h2>
                    </div>
                </div>
            </div>}
        </>
    )
}

export default Modal