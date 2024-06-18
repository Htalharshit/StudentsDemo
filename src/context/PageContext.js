import React, { createContext, useState, useEffect } from 'react';
import Spinner from '../components/Spinner';

// Create a Context
export const PageContext = createContext();

// Create a Provider component
export const PageStateProvider = ({ children }) => {

    // eslint-disable-next-line
    const [data, setData] = useState([]);
    const [totalResults, setTotalResults] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchRecords = async () => {
        let url = 'http://3.223.98.72:1337/api/students';
        try {
            setLoading(true);
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const parseddata = await response.json();
            setData(parseddata.data);
            const total = parseddata.data.length;
            setTotalResults(total);

        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchRecords();
        // eslint-disable-next-line
    }, []);

    if (loading) return <Spinner/>;
    if (error) return <div>Error: {error.message}</div>;



    return (
        <PageContext.Provider value={{totalResults }}>
            {children}
        </PageContext.Provider>
    );
};