import React from 'react';

import logo from '../assets/facebook.png';
import perfilicon from '../assets/perfilicon.png';

export default function header() {
  return (
    <header className="header-logo">
      <img src={logo} className="facebooklogo" alt="" />

      <p className="header-perfil">Meu Perfil</p>
      <img src={perfilicon} className="perfilicon" alt="" />
    </header>
  );
}
