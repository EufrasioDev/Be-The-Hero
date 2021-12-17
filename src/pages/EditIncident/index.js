import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../../services/api";
import { FiArrowLeft } from "react-icons/fi";
import Logo from "../../assets/img/logo.svg"; 

import "./style.css";

export default function EditIncident() {
  const { id } = useParams();
  const ongId = localStorage.getItem("ongId");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  
  async function getOneIncident(pid) {
    const response = await api.get("incidents/"+pid);
    const incident = response.data.filter(element => {
      return element === pid
    });
    setTitle(incident.title);
    setDescription(incident.description);
    setValue(incident.value);
  }

  useEffect(() => {
    getOneIncident(id)
  }, [id]);
  
  async function handleEditIncident(e) {
    e.preventDefault();

    const data = {
      title,
      description,
      value
    }

    try {
      const response = await api.put("/incidents/edit/"+id, data, {
        headers: {
          authorization: ongId
        }
      });
      alert(response);
    } catch (error) {
      alert("Problemas ao editar caso "+error);
    }
  }

  return(
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={Logo} alt="Be The Hero" />
          <h1>Editar caso</h1>
          <p>Descreva o caso detalhadamente para encontrar um herói e resolver o problema.</p>
          <Link to="/profile" className="back-link">
            <FiArrowLeft size={16} color="E02041"/>
            Voltar para o home
          </Link>
        </section>
        <form onSubmit={handleEditIncident}>
          <input 
            placeholder="Titulo do caso" 
            autoComplete="false" 
            required
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Descrição"
            value={description} 
            onChange={e => setDescription(e.target.value)}
            required
          />
          <input 
            placeholder="Valor em AKZ"
            value={value} 
            onChange={e => setValue(e.target.value)}
            required
          />
          <button type="submit" className="button">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}