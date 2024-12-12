import React from 'react';
import { useNavigate } from 'react-router-dom';

const ExitButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // remove o acesso depois que vc sair, pra nao conseguir entrar 
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');

    navigate('/'); // vai mandar pro login
  };

  return (
    <button onClick={handleLogout} className="exit-button">
      Sair
    </button>
  );
};

export default ExitButton;
