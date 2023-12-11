import React, { useState, useContext, createContext, useEffect } from "react"

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [ratingOrder, setRatingOrder] = useState()
    const [englishOnly, setEnglishOnly] = useState()
    const [searchString, setSearchString] = useState("Married at First Sight");
    const [showData, setShowData] = useState([]);
    const [shows, setShows] = useState([]);

    function handleSearch(userInput) {
        setSearchString(userInput);
    }

    useEffect(() => {

        async function searchAPI() {
            const response = await fetch(`https://api.tvmaze.com/search/shows?q=${searchString}`);
            const rawData = await response.json();
            const data = rawData.map(s => s.show);
            setShowData(data);
        }

        searchAPI();

    }, [searchString]);

    useEffect(() => {
    
      async function displayShows() {
        const response = await fetch("https://api.tvmaze.com/shows");
        const data = await response.json();
        setShows(data);
      }
    
        displayShows();
    
    }, []);
  

    return (
        <AuthContext.Provider value={{ ratingOrder, setRatingOrder, englishOnly, setEnglishOnly, searchString, setSearchString, handleSearch, showData, setShowData, shows, setShows }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext)
