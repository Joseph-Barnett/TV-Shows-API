import React, { useState } from 'react';
import { useAuth } from '../../contexts'

export default function SearchForm () {

    const { handleSearch, lastSearch } = useAuth()
    const [inputValue, setInputValue] = useState("");

    function handleInput(e) {
        const newInput = e.target.value;
        setInputValue(newInput);
    }

    function handleSubmit(e) {
        e.preventDefault();
        handleSearch(inputValue);
        setInputValue("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleInput}
             placeholder={lastSearch}
             value={inputValue} required/>
            <input type="submit" value="Search"/>
        </form>
    )   
};
