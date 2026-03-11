import { useState, useRef, useEffect } from 'react';
import Style from './certificates.module.css';
import imgNoAvailable from '../../Images/no-image-available.jpg';

export default function Certificates({ lenguage }) {
  const [certificateHighlight, setCertificateHighlight] = useState(null);
  const containerRef = useRef(null);

  const title = {
    es: 'Certificados',
    en: 'Certificates',
  };
  
  /* Convierteme este objeto en un array de objeto donde tenga la key de titulo y url de imagen*/
  const cetificates = [
    {
      name:"Full Stack Web Developer",
      img:"/certificates/Full-Stack-Web-Developer.png",
    },
    {
      name:"Scrum",
      img:"/certificates/Scrum-foundation-profesional-certificate-SFPC-TM.jpg",
    },
    {
      name:"Angular",
      img:"/certificates/Angular-Sololearn.png",
    },
    {
      name:"SQL",
      img:"/certificates/SQL-Sololearn.png",
    },
    {
      name:"JavaScript",
      img:"/certificates/JavaScript-Sololearn.png",
    },
    {
      name:"CSS",
      img:"/certificates/CSS-Sololearn.png",
    },
    {
      name:"HTML",
      img:"/certificates/HTML-Sololearn.png",
    },
    {
      name:"Java",
      img:"/certificates/Java-Sololearn.png",
    },
    {
      name:"PHP",
      img:"/certificates/PHP-Sololearn.png",
    },
    {
      name:"Python",
      img:"/certificates/Python-Sololearn.png",
    },
    {
      name:"Gaming Industry",
      img:"/certificates/Fundamentos-de-la-Industria-del-Desarrollo-de-Videojuegos.png",
    },
    {
      name:"Ingeniero Industrial",
      img:"/certificates/Ingeniero-Industrial.jpg",
    },

    // {
    //   name:"React",
    //   img:"/certificates/react-Sololearn.png",
    // },
    // {
    //   name:"TypeScript",
    //   img:"/certificates/TypeScript-Sololearn.png",
    // },
  ];

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const handleWheel = (e) => {
        if (e.deltaY !== 0) {
          e.preventDefault();
          container.scrollLeft += e.deltaY;
        }
      };
      // Passive false to allow preventDefault
      container.addEventListener('wheel', handleWheel, { passive: false });
      return () => container.removeEventListener('wheel', handleWheel);
    }
  }, []);
  
  return (
      <section id="certificates">
        <div className="tituloH2">
          <h1>{title[lenguage]}</h1>
        </div>  
        <div className={Style.containerCertificates} ref={containerRef}>
          {cetificates &&
            cetificates.map((r) => {
              return (
                // <div
                //   className={`${Style.container} mySlides w3-animate-fading`}
                //   key={r.name}
                // >
                  <img
                    className={`${Style.img_thumbnail}`}
                    src={window.location.origin + window.location.pathname + r.img}
                    onError={({ currentTarget }) => {
                      currentTarget.onerror = null; // prevents looping
                      currentTarget.src = imgNoAvailable;
                    }}
                    onClick={() => setCertificateHighlight(r)}
                    alt={r.name}
                  />
                //  </div>
              );
            })}
        </div>
        {
          certificateHighlight?.img &&
          <div 
            className={Style.certificateView}
            onClick={()=>{
              setCertificateHighlight(null)
            }}
            >
            <img 
              src={window.location.origin + window.location.pathname + certificateHighlight?.img} 
              alt={certificateHighlight?.name} 
              className={Style.imgHighlight}
              />
          </div>
        }
      </section>
  );
}
