import React from 'react';
import { useNavigate } from 'react-router-dom';


const About = () => {
    const navigate = useNavigate(); 

    const handleGoHome = () => {
    navigate('/'); 
  };
  return (
    <div>
      <h2>About</h2>
      <p>Questa è un'applicazione per gestire la lista dei to-do. Puoi aggiungere, cercare e visualizzare i tuoi to-do.</p>
      <button onClick={handleGoHome}>Torna alla Home</button> 

    </div>
  );
};

export default About;