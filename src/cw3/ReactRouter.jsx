import React from 'react';
import {BrowserRouter, Routes, Link, Route, useNavigate} from "react-router-dom";
import './index.css';

function Home() {
    return <h2>Strona główna</h2>
}

function User() {
    const { id } = useParams();
    return <h2>Profil użytkownika o ID: {id}</h2>;
}

function Contact() {
    const navigate = useNavigate();
    const kliknij = () =>
    {
        navigate('/about')
    }
    return(
            <>
                <h2>Kontakt</h2>
                <button onClick={kliknij}>Przejdź do strony o nas</button>
            </>
    )
}
function About() {
    return <h2>O nas</h2>
}

function NotFound() {
    return <h2>404 - Strona nie istnieje</h2>
}
const ReactRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <ul>
                    <li><Link to="/">Strona Główna</Link></li>
                    <li><Link to="/contact">Kontakt</Link></li>
                    <li><Link to="/about">O nas</Link></li>
                </ul>
                <nav>
                    <Link to="/users/1">Użytkownik 1</Link> |{" "}
                    <Link to="/users/2">Użytkownik 2</Link> |{" "}
                    <Link to="/users/3">Użytkownik 3</Link>
                </nav>

                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/contact" element={<Contact/>}></Route>
                    <Route path="/about" element={<About/>}></Route>
                    <Route path="*" element={<NotFound/>}></Route>
                    <Route path="/users/:id" element={<User/>} />
                </Routes>

            </BrowserRouter>
            
        </div>
    );
};

export default ReactRouter;