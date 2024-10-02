import React from 'react';

function Home() {
  return (
    <div className="container">
      <div className="title">
        <h1>Portafolio</h1>
        <h3>Andres Felipe De La Cruz Uloa</h3>
      </div>
      <div className="content">
      <img className="imge" src="https://scontent.fpei2-1.fna.fbcdn.net/v/t39.30808-6/339457707_625032566157610_1632028288582428878_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFFhCilqV8ZQV_NmBaFRi9lczWXiJIQTyxzNZeIkhBPLBwRqCl8oEcppSBeLiqVOkee6kv13vELDbtGu8VuXmt2&_nc_ohc=y-utRGQLg24Q7kNvgFAQ2mt&_nc_ht=scontent.fpei2-1.fna&_nc_gid=ANIqOT0pQCEVs-z0kGNfOIH&oh=00_AYA44xBvg_4_GeIsU84et2dTVgOmf3EIAznFAR0RrNgIZg&oe=67025746" alt="Foto de Andres"/>
        <p>Ingeniero Multimedia, egresado de la Universidad Autonoma de Occidente con experiencia en proyectos que integran diferentes tipos de metodologías de diseño e inclusión de contenidos diversos, tales como: imágenes, video, gráficos, sonido y animación.</p>
      </div>
      <div className="content2">
        <p>HARD SKILLS:</p>
        <p>- Manejo del idioma inglés</p>
        <p>- Adecuado manejo de la Suite de Adobe</p>
        <p>- Modelado 3D con texturizado y Render</p>
        <p>- Producción de contenido en Unity</p>
        <p>- Producción Audiovisual</p>
      </div>
      <div className="content3">
        <p>SOFT SKILLS:</p>
        <p>- Manejo de bases de datos SQL y NoSQL</p>
        <p>- Diseño de páginas web</p>
        <p>- Procesamiento de Señales</p>
        <p>- Arquitecturas de Hardware</p>
        <p>- Procesos estadísticos</p>
      </div>
      <div className="content4">
        <p>Información de Contacto</p>
        <p>Tel: 3217065018</p>
        <a href="https://www.instagram.com/andresf_864/" className="subtitle">Instagram</a>
      </div>
    </div>
  );
}

export default Home;