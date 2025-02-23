import { createRoot } from 'react-dom/client'
import { BrowserRouter,Routes, Route } from "react-router";
import './index.css'
import App from './App.jsx'
import ProjectView from './ProjectView'
import ErrorPage from './Error'
import Success from './Success'
import Add from './Add'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/create" element={<Add />} />
            <Route path="/get/:id" element={<ProjectView />} />
            <Route path="/fail" element={<ErrorPage />} />
            <Route path="/success" element={<Success />} />
        </Routes>
    </BrowserRouter>,
)
