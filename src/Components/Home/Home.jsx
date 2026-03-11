import React from 'react';
import Perfil from '../Perfil/Perfil.jsx';
import Proyects from '../Proyects/Proyects.jsx';
import Contact from '../Contact/Contact.jsx';
import './home.css';
import Skills from '../Skills/Skills.jsx';
import Lenguage from '../Lenguage/Lenguage.jsx';
import Certificates from '../Certificates/Certificates.jsx';

export default function Home({ lenguage, setLenguage }) {
  return (
    <div className="home-wrapper">
      <Lenguage lenguage={lenguage} setLenguage={setLenguage} />
      <Perfil lenguage={lenguage} />
      <Skills lenguage={lenguage} />
      <Certificates lenguage={lenguage} />
      <Proyects lenguage={lenguage} />
      <Contact lenguage={lenguage} />
    </div>
  );
}
