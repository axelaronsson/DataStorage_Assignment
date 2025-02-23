import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from "react-router";
import Form from './Form'
import './App.css'

function ProjectView() {
    let { id } = useParams();
    const [projectData, setProjectData] = useState(null);
    const [isEdit, setIsEdit] = useState(false);

    let content = JSON.parse(localStorage.getItem('content'));

    const statusCode = {
        active: 5,
        notStarted: 4,
        closed: 6
    }

    useEffect(() => {
        async function getData() {

            const response = await fetch(`https://localhost:7081/api/projects/get?projectId=${id}`);

            if (response.ok) {
                const data = await response.json();
                console.log(data);
                setProjectData(data);
            }
            else {
                window.location.href = "/fail"
                console.log()
            }
        }
        getData(); 
    }, [id]);

    return (
        <main style={{position: 'relative'}}>
            <div style={{display: isEdit ? 'block' : 'none', position: 'absolute', height: '100%', width: '100%', backgroundColor: 'black', opacity: 0.7, top: 0, left: 0}}>

            </div>
            <div style={{ position: 'absolute', height: '100%', width: '100%', top: 0, left: 0, display: isEdit ? 'flex' : 'none', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{backgroundColor: 'white', width: '50%', padding: '40px 0px'}}>
                    {isEdit && <Form formData={projectData}></Form>}
                    <button onClick={() => setIsEdit(false)}>Avbryt</button>
                </div>
            </div>
            <h1>Projekt { projectData?.projectId }</h1>
            {
                projectData &&
                <div style={{ textAlign: 'left', border: '1px solid', padding: '10px 80px', backgroundColor: 'white', display: 'flex', minHeight: '500px' }}>
                <div style={{marginRight: '20px'}}>
                    <h4>Titel:</h4>
                    <p>{projectData.title}</p>
                    <h4>Startdatum:</h4>
                    <p>{projectData.startDate.slice(0, 10)}</p>
                    <h4>Slutdatum:</h4>
                    <p>{projectData.endDate.slice(0, 10)}</p>
                    <h4>Klient/{content[0]}:</h4>
                    <p>{projectData.customer.customerName}</p>
                    <h4>Status:</h4>
                    <p>{content[statusCode[projectData.status]]}</p>
                    <h4>{content[1]} {content[3].toLowerCase() }:</h4>
                    <p>{projectData.userFirstName}</p>
                </div>

                <div style={{marginLeft: '20px'}}>
                    <h4>{content[1]} efternamn:</h4>
                    <p>{projectData.userLastName}</p>
                    <h4>{content[1]} email:</h4>
                    <p>{projectData.userEmail}</p>
                    <h4>{content[2]}:</h4>
                    <p>{projectData.productName}</p>
                    <h4>Timpris:</h4>
                    <p>{projectData.productPrice}</p>
                    <h4>Totalpris:</h4>
                    <p>{projectData.totalPrice}</p>
                </div>
            </div>

            }
            <div>
                <Link style={{color: 'white', marginRight: '20px'}} className="home-button" to="/">Tillbaka</Link>
                <button onClick={() => setIsEdit(!isEdit)} style={{ backgroundColor: '#0062cc', marginTop: '10px' }}>Redigera</button>
            </div>
        </main>
    )

}

export default ProjectView
