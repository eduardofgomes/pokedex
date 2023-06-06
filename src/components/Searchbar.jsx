import react from 'react'

const Searchbar = () => {
    return (
        <>
            <div className="searchbar-container">
                <div className="searchbar">
                    <input placeholder='search pokemon' />
                </div>
                <div className="searchbar-btn">
                    <button onCLick={onButtonClickHandler}>Search</button>
                </div>
            </div>
        </>
    )
}

export default Searchbar