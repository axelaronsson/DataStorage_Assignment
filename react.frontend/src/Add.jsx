import { useEffect } from 'react'
import { Link } from "react-router";
import AddForm from './AddForm'
import './App.css'

function Add() {


    useEffect(() => {

    }, []);

    return (
        <main style={{ position: 'relative' }}>
            <Link style={{ color: 'white', marginRight: '20px' }} className="home-button" to="/">Tillbaka</Link>
            <h1>Nytt projekt</h1>
            <AddForm className="add-form"></AddForm>
        </main>
    )

}

export default Add
