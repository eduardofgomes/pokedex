import React from 'react'

const Pagination = (props) => {
    const {page, totalPages, onLeftClick, onRightClick} = props
    return (
        <div className="pagination-container">
            <button className="text-white" onClick={onLeftClick}><div>🡄</div></button>
            <div className="text-white">{page} of {totalPages}</div>
            <button className="text-white" onClick={onRightClick}><div>🡆</div></button>
        </div>
    )
}

export default Pagination