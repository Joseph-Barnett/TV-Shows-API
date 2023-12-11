import React from 'react';
import { ShowCard, FilterControls } from '../';
import { useAuth } from '../../contexts'

export default function ShowList() {

    const { ratingOrder, englishOnly, showData } = useAuth()

    function compareRating(a, b) {
        if (!ratingOrder) {
            return 0;
        } else {
            const aVal = a.rating.average || 0;
            const bVal = b.rating.average || 0;
            return bVal - aVal;
        }
    }

    function renderShows() {
        return showData
            .filter(s => s.summary && s.image ? true : false)
            .filter(s => (s.language == "English" || !englishOnly) ? true : false)
            .sort(compareRating)
            .map(s => <ShowCard key={s.id} show={s} />)
    }

    return <div className="show-list">
        <FilterControls />
        {renderShows()}
    </div>
};
