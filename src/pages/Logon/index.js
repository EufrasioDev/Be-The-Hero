import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import api from "../../services/api";
import "./styles.css";
import people from "../../assets/img/heroes.png";
import logo from "../../assets/img/logo.svg";

export default function Logon() {

    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogon(e) {
        e.preventDefault();

        try {
            const response = await api.post("session", { id });
            localStorage.setItem("OngId", id);
            localStorage.setItem("OngName", response.data.name);
            history.push("/profile");
        } catch (error) {
            alert("Opsss... Parece que o ID informado não esta cadastrado")
        }
    }
    return(
        <div className="logon-container">
            <section className="form">
                <img src={logo} alt="Be the hero" />
                <form onSubmit={handleLogon}>
                    <h1>Faça seu logon</h1>
                    <input
                        placeholder="Sua ID"
                        value={id}
                        onChange={e => setId(e.target.value)}
                        required
                    />
                    <button className="button" type="submit">Entrar</button>
                    <Link to="/register" className="back-link">
                        <FiLogIn size={16} color="#E02041" />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
            <img src={people} alt="Heroes" />
        </div>
    );
}