import React from 'react';
import {BrowserRouter, Routes, Route, useNavigate, Link, Navigate} from "react-router-dom";
import './index.css';

function LoginPage() {
    const navigate = useNavigate();
    const kliknij = () => {
        navigate("/dashboard");
    }

    return(
        <>
            <input type="text" />
            <input type="text" />
            <button onClick={kliknij}>Zaloguj się</button>
        </>
    );
}

function Onas()
{
    return <h2>O nas</h2>
}

function Dashboard() {
    return(
        <>
            <h2>Dashboard</h2>
        </>
    );
}

function Error() {
    return(
        <>
            <h2>404 - Strona nie istnieje</h2>
            <Link to="/">Strona główna</Link>
        </>
    );
}

function Home() {
    const navigate = useNavigate();
    const kliknij = () => {
        navigate("/login");
    }

    return (
        <div>
            <button onClick={kliknij}>Login</button>
        </div>
    );
}

const RouterZadania = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/old-about" element={<Navigate to="/about"/>} />
                <Route path="/about" element={<Onas/>} />
                <Route path="*" element={<Error/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default RouterZadania;
