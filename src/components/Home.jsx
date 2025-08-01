import React from 'react';

function Home() {
  return (
    <div className="container">
      <div className="title">
        <h1>Portafolio</h1>
        <h3>Andres Felipe De La Cruz Uloa</h3>
      </div>
      <div className="content">
      <img className="imge" src="https://instagram.fclo3-2.fna.fbcdn.net/v/t51.2885-19/283627621_401368778545953_2747038346111575136_n.jpg?stp=dst-jpg_s150x150_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=instagram.fclo3-2.fna.fbcdn.net&_nc_cat=109&_nc_oc=Q6cZ2QG_mAbS6zk8BPmW3c9q4sgfXsOgoaqjjW-Ms47mkVHWu-bSRvbAvQCVDKNHj7dwQz0&_nc_ohc=0E2M5MZM3W0Q7kNvwGFf6OF&_nc_gid=r_VROPCoAXlzHe_tSAfjqw&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AfQezaGq3WzjQ64C7mbGrx0RUil_MJ5uw74WybRt3hhz-g&oe=6892963C&_nc_sid=7a9f4b" alt="Foto de Andres"/>
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