import React from 'react';

function Home() {
  return (
    <div className="container">
      <div className="title">
        <h1>Portafolio</h1>
        <h3>Andres Felipe De La Cruz Uloa</h3>
      </div>
      <div className="content">
      <img className="imge" src="https://lh3.googleusercontent.com/a/ACg8ocLqD0Hdi6EJIpKOEzjb8t2-n5z_87GR-_mlX9h5-2x7FKzXsQo=s288-c-no" alt="Foto de Andres"/>
        <p>Estudiante de ingeniería multimedia en la Universidad Autónoma de Occidente con experiencia en proyectos que integran diferentes tipos de metodologías de diseño e inclusión de contenidos diversos, tales como: imágenes, video, gráficos, sonido y animación.</p>
      </div>
      <div className="content2">
        <p>HARD SKILLS:</p>
        <p>- Manejo del idioma inglés</p>
        <p>- Adecuado manejo de la Suite de Adobe</p>
        <p>- Modelado 3D con texturizado y Render</p>
        <p>- Producción de contenido en Unity</p>
        <p>- Producción Audiovisual</p>
        <p>- Manejo de bases de datos SQL y NoSQL</p>
        <p>- Diseño de páginas web</p>
      </div>
      <div className="content3">
        <p>SOFT SKILLS:</p>
        <p>- Procesamiento de Señales</p>
      </div>
      <div className="content4">
        <p>Información de Contacto</p>
        <p>Tel: 3116071850</p>
        <a href="https://www.instagram.com/andresf_864/" className="subtitle">Instagram</a>
      </div>
    </div>
  );
}

export default Home;