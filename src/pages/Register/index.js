import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from  "react-icons/fi";
import api from "../../service/api";
import Logo from "../../assets/img/logo.svg";
import "./style.css";

export default function Register() {

    const history = useHistory()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    async function handleRegister(e) {
        e.preventDefault()
        
        const data = {
            name,
            email,
            whatsapp,
            city,
            uf
        }

        try {

            const response = await api.post("ongs", data);
            alert(`Seu ID de acesso ${response.data.id}`);
            history.push("/profile");

        } catch (error) {
            alert("Opsss... Parece que houve um problema ao se cadastrar. <br>Tente novamente")
        }
    }

    return(
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={Logo} alt="Be The Hero" />
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
                    <Link to="/" className="back-link">
                        <FiArrowLeft size={16} color="E02041"/>
                        Voltar para o logon
                    </Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input 
                        placeholder="nome"
                        value={name}
                        onChange={e => setName(e.target.value)} required
                    />
                    <input 
                        type="email"
                        placeholder="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)} required
                    />
                    <input 
                        placeholder="Whatsapp" 
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)} required
                    />
                    <div className="input-group">
                        <input 
                            placeholder="Cidade" 
                            value={city}
                            onChange={e => setCity(e.target.value)} required
                        />
                        <input
                            placeholder="UF" 
                            style={ {width: 80} }
                            value={uf}
                            onChange={e => setUf(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="button">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}