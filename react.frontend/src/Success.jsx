import { useEffect } from 'react'
import './App.css'

function Success() {

    useEffect(() => {
        //getData();
    }, []);

    return (
        <>
            <h3>Projektet sparat!</h3>
            <a href="/">Tillbaka</a>
        </>
    )

}

export default Success
