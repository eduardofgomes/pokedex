import React, { useState } from 'react'

const Searchbar = (props) => {
    const [search, setSearch] = useState("Charizard")
    const {onSearch} = props
    const onChangeHandler = (e) => {
        setSearch(e.target.value)
        if(e.target.value.length === 0) {
            onSearch(undefined)
        }
    }

    const onButtonClickHandler = () => {
        onSearch(search.toLowerCase())
    }

    return (
        <>
            <div className="searchbar-container">
                <div className="searchbar">
                    <input placeholder='search pokemon' onChange={onChangeHandler} />
                </div>
                <div className="searchbar-btn">
                    <button onClick={onButtonClickHandler}>Search</button>
                </div>
                
            </div>
        </>
    )
}

export default Searchbar