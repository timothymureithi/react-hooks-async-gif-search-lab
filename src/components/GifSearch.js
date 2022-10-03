import React, { useState } from "react";

function GifSearch({ onSubmit }) {
    const [search, setSearch] = useState('');

    function handleSearchChange(event) {
        setSearch(event.target.value);
    }

    function handleSearch(event) {
        event.preventDefault();
        onSubmit(search);
    }

    return ( 
        <div  style={{
            position: 'absolute',
            right: 5,
             }} >
            <form onSubmit={handleSearch}>
                <div className="form-group">
                    <label htmlFor="search">Enter a Search Term:</label>
                    <input
                    id="search"
                    className="form-control"
                    type="text"
                    value={search}
                    onChange={handleSearchChange}/>
                </div>
                <button  type="submit" className="btn btn-success">
                    Find Gifs
                </button>
            </form>
        </div>
    )


}
export default GifSearch;