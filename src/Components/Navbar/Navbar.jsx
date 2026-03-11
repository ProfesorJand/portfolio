import React, { useEffect, useState } from 'react';
import Styles from './navbar.module.css';

export default function Navbar({ lenguage }) {
  const About = {
    es: 'Acerca de mí',
    en: 'About',
  };
  const Skills = {
    es: 'Habilidades',
    en: 'Skills',
  };
  const Certificates = {
    es: 'Certificados',
    en: 'Certificates',
  };
  const Proyects = {
    es: 'Proyectos',
    en: 'Proyects',
  };
  const Organizations = {
    es: 'Organizaciones',
    en: 'Organizations',
  };
  const Contact = {
    es: 'Contáctame',
    en: 'Contact me',
  };

  // function openMenu() {
  //   var x = document.getElementById('myLinks');
  //   if (x.style.display === 'block') {
  //     x.style.display = 'none';
  //   } else {
  //     x.style.display = 'block';
  //   }
  // }

  useEffect(() => {
    const wrapper = document.querySelector('.home-wrapper');
    if (!wrapper) return;
    
    wrapper.addEventListener('scroll', highlightScroll);
    // Initial call to set active class correctly
    highlightScroll();

    return () => {
      wrapper.removeEventListener('scroll', highlightScroll);
    };
  }, []); // Run only once

  function highlightScroll() {
    const wrapper = document.querySelector('.home-wrapper');
    if (!wrapper) return;
    
    const sections = document.querySelectorAll('section');
    const navLi = document.querySelectorAll(`div .${Styles.topnav} a`);
    let current = '';
    
    sections.forEach((section) => {
      // OffsetTop is relative to the offsetParent. 
      // It might be needed to check sectionTop depending on relative positioning.
      const sectionTop = section.offsetTop;
      
      // We subtract a small offset to trigger the state change before hitting the exact pixel
      if (wrapper.scrollTop >= sectionTop - 100) {
        current = section.getAttribute('id');
      }
    });

    navLi.forEach((a) => {
      a.classList.remove(Styles.active);
      if (a.classList.contains(current)) {
        a.classList.add(Styles.active);
      }
    });
  }

  return (
    <div className={Styles.mobileContainer}>
      <div className={Styles.topnav}>
        <a className={`${Styles.active} aboutMe `} href="#aboutMe">
          {About[lenguage]}
        </a>
        <a className="skills" href="#skills">
          {Skills[lenguage]}
        </a>
        <a className="certificates" href="#certificates">
          {Certificates[lenguage]}
        </a>
        <a className="proyects" href="#proyects">
          {Proyects[lenguage]}
        </a>
        <a className="organizations" href="#organizations">
          {Organizations[lenguage]}
        </a>
        <a className="contact" href="#contact">
          {Contact[lenguage]}
        </a>
      </div>
    </div>
  );
}
