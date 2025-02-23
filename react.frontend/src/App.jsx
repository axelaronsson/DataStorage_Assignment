import { useState, useEffect } from 'react'
import './App.css'

function App() {
    const [appData, setAppData] = useState([])
    const [loadingMsg, setLoadingMsg] = useState("Laddar..")
    const statusCode = {
        active: 5,
        notStarted: 4,
        closed: 6
    }

    let content = JSON.parse(localStorage.getItem('content'));

    useEffect(() => {
        getData();
    }, []);

    return (
    <>
        <h1>Projekthanteraren</h1>
        <a href="/create">Nytt projekt</a>
        <div className="card">
        { appData.length == 0 ? loadingMsg : ''}
        <ul>
            {
                appData.map(item => {
                    return <li
                        style={{ border: '1px solid white', borderRadius: '5px', listStyleType: 'none', margin: '10px', textAlign: 'left', padding: '5px', cursor: 'pointer' }}
                        key={item.id}>
                        <a href={"/get/" + item.id}>
                            <span className="primary">Projektnr: {item.projectId}</span>
                            <span>Titel: {item.title}</span>
                            <span className="success">Startdatum: { item.startDate.slice(0,10)}</span>
                            <span className="attention">Slutdatum: { item.endDate.slice(0,10)}</span>
                            <span className="secondary">Status: {content[statusCode[item.status]]}</span>
                        </a>
                    </li>
                })
            }
        </ul>
        </div>
    </>
    )

    async function getData() {

        const response = await fetch('https://localhost:7081/api/projects/GetAll');

        if (response.ok) {
            const data = await response.json();
            console.log(data);
            setAppData(data);
            if (data.length == 0)
                setLoadingMsg("Inga projekt sparade")
        }
    }
}

export default App
