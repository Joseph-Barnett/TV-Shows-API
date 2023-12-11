import React from 'react';
import { SearchForm, ShowList } from '../';

export default function SearchWidget () {
    return <>
        <SearchForm />
        {<ShowList /> }
    </>
};
