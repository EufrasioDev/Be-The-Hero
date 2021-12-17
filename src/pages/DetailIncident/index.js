import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import api from "../../services/api";
import people from "../../assets/img/heroes.png";
import "./style.css";

export default function Details() {

  const { pid }  = useParams();
  const [incident, setIncident] = useState([])

  function handleOpenWhatsapp() {
    alert("Abrir seu whatsapp para uma possivel conversação?");
  }

  function handleOpenEmail() {
    alert("Abrir seu  Email para uma possivel conversação?");
  }
  
  async function getOneIncident(id) {
    const response = await api.get("incidents/"+id);
    setIncident(response.data);
  }
  useEffect(() => {
    getOneIncident(pid);
  }, [pid]);

  return(
    <div className="details-container">
      <img src={people} alt="Heroes" />
      <section className="form">
        <h2>Detalhes do caso</h2>
        <ul>
          {incident.map((element =>{
            return(
              <li key={element.id}>
                <strong>ONG</strong>
                <p>{element.name}</p>
                <strong>Caso</strong>
                <p>{element.title}</p>
                <strong>Valor</strong>
                <p>{element.value}</p>
              </li>
            )
            }
          ))}
        </ul>
        <div className="contatos">
          <h2>Salve o dia!</h2>
          <h2>Seja o herói desse caso :)</h2>
          <p>Entre em contato:</p>
          <button onClick={handleOpenEmail}>Email</button>
          <button onClick={handleOpenWhatsapp}>Whatsapp</button>
        </div>
        <Link to="/register" className="back-link">
          <FiArrowLeft size={16} color="#E02041" />
          Voltar para home
        </Link>
      </section>
    </div>
  );
}