import React from 'react'

const Modal = (open, children) => {
    if(!open) return
    return (
        <>
            <img src="${}" class="img-modal" data-modal="modal${pokemon?.id}" />

            <div id="modal${pokemon?.id}" class="modal">
                <div class="modal-content">
                    <div class="modal-close">
                        <span class="close">&times;</span>
                    </div>
                    <div class="modal-information">
                        <img src="${imageBaseUrl + movie?.backdrop_path}" class="image-modal text" alt="Image not found" />
                        <h2 class="text">${movie?.title}</h2>
                        <p class="text overview">${movie?.overview}</p>
                        <p class="info-movie text">${movie?.release_date ? movie?.release_date.split('-')[0] : "Not Released"}
                            Rate: ${movie?.vote_average ? movie?.vote_average : "Not rated"}
                            <a href="https://youtube.com/watch?v=${trailer.key}" target="_blank" class="trailer"><button class="button-trailer">Trailer</button></a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal