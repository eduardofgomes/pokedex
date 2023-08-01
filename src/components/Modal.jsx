import React, {useState, useEffect} from 'react'

const Modal = (props) => {
    const {pokemon} = props

    const [modalIsOpen, setModalIsOpen] = useState(false)

    const toggleModal = () => {
        setModal(!modalIsOpen)
    }

    /*useEffect(() => {
        console.log('Modal')
    }, [modalIsOpen])*/

    return (
        <>
            {modalIsOpen && <div id={"pokemon" + pokemon?.id} className="modal" onClick={toggleModal}>
                <div className="modal-content">
                    <div className="modal-close">
                        <span className="close" onClick={toggleModal}>&times;</span>
                    </div>
                    <div className="modal-information">
                        <h1>{pokemon.name}</h1>
                        <img src={pokemon.other.official-art.front_default} className="image-modal text-modal" alt="Image not found" />
                        <h2 className="text-modal"></h2>
                    </div>
                </div>
            </div>}
        </>
    )
}

export default Modal