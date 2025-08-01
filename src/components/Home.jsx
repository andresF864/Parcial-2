import React from 'react';

function Home() {
  return (
    <div className="container">
      <div className="title">
        <h1>Portafolio</h1>
        <h3>Andres Felipe De La Cruz Uloa</h3>
      </div>
      <div className="content">
      <img className="imge" src="https://preview.redd.it/n5b2k59hhfgf1.png?width=317&format=png&auto=webp&s=70020fd3e17ce99bde7a85c9e518177e29eb2ad9" alt="Foto de Andres"/>
        <p>Estudiante de ingeniería multimedia en la Universidad Autónoma de Occidente con experiencia en proyectos que integran diferentes tipos de metodologías de diseño e inclusión de diversos contenidos multimedia, tales como: imágenes, video, gráficos, sonido y animación.</p>
      </div>
      <div className="content2">
        <p>HARD SKILLS:</p>
        <p>- Manejo avanzado del idioma inglés</p>
        <p>- Manejo adecuado  de la Suite de Adobe</p>
        <p>- Modelado 3D con texturizado y Render</p>
        <p>- Producción de contenido en Unity</p>
        <p>- Producción de contenido Audiovisual</p>
        <p>- Manejo de bases de datos SQL y NoSQL</p>
        <p>- Diseño web</p>
        <p>- Diseño de experiencias multimedia</p>
      </div>
      <div className="content3">
        <p>SOFT SKILLS:</p>
        <p>- Resolución de problemas</p>
        <p>- Comunicación efectiva</p>
        <p>- Creatividad</p>
        <p>- Adaptabilidad</p>
        <p>- Gestión del tiempo</p>
        <p>- Paciencia</p>
        <p>- Resiliencia</p>
        <p>- Pensamiento crítico</p>
      </div>
      <div className="content4">
        <p>Información de Contacto</p>
        <p>Tel: 3116071850</p>
        <a href="https://www.instagram.com/andresf_864/" className="subtitle">Instagram</a>
        <a href="https://www.linkedin.com/in/andres-de-la-cruz-ulloa-64846121b" className="subtitle">Linkedin</a>
      </div>
    </div>
  );
}

export default Home;