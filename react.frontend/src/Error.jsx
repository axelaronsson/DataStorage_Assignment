import { useEffect } from 'react'
import './App.css'

function ErrorPage() {

    useEffect(() => {
        //getData();
    }, []);

    return (
        <>
            <h1>Error</h1>
            <h4>Something went wrong</h4>
            <a href="/">Tillbaka</a>
        </>
    )

}

export default ErrorPage
