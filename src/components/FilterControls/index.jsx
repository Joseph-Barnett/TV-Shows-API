import React from 'react';
import { useAuth } from '../../contexts'

export default function FilterControls () {

    const {ratingOrder, setRatingOrder, englishOnly, setEnglishOnly} = useAuth()

    function toggleRatingFilter () {
        setRatingOrder(!ratingOrder);
    }

    function toggleEnglishFilter () {
        setEnglishOnly(!englishOnly);
    }

    return <div className="filter-controls">
        <label>Highest rated first<input type="checkbox"
         checked={ratingOrder}
         onChange={toggleRatingFilter}></input></label>
        <label>English language only<input type="checkbox"
         checked={englishOnly}
         onChange={toggleEnglishFilter}></input></label>
    </div>
};
