import React, { useState } from "react";
import { Link } from "react-router-dom"
import {FiLogIn} from "react-icons/fi";
import "./styles.css";
import people from "../../assets/img/heroes.png";
import logo from "../../assets/img/logo.svg";

export default function Logon() {

    const [id, setId] = useState('');

    function handleLogon(id) {
        console.log(id);
    }
    return(
        <div className="logon-container">
            <section className="form">
            <img src={logo} alt="Be the hero❤️" />
            <form onSubmit={() => handleLogon(id)}>
                <h1>Faça seu logon ❤️</h1>
                <input
                    placeholder="Sua ID"
                    value={id}
                    onChange={e => setId(e.target.value)}
                    required
                 />
                <button className="button" type="submit">Entrar</button>
                <Link to="/register" className="back-link">
                    <FiLogIn size={16} color="#E02041"/>
                    Não tenho cadastro
                </Link>
            </form>
            </section>
            <img src={people} alt="Heroes" />
        </div>
    );
}