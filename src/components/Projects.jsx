import React from 'react';

function Projects() {
  return (
    <div className="container">
      <div className="title">
        <h1>Proyectos</h1>
      </div>
      <div className="content">
        <p>Práctica para bombreos en Realidad Virtual</p>
        <p>Roles: Programador, Diseñador VFX y Diseño de mecánicas</p>
        <a href="https://github.com/Salomon-David123/vr_parciar_3" className="subtitle">GitHub</a>
        <img className="imge" src="https://preview.redd.it/uoo0edl8ufgf1.png?width=1080&crop=smart&auto=webp&s=097fc94f0a4edc2b527f953fd79a12c9d8823ef6" alt="Imagen de poyecto RV" />
      </div>
      <div className="content">
        <p>Aplicacion para restaurar imagenes antiguas</p>
        <p>Roles: Programador de las funciones principales y encargado de la implementación de librerías</p>
        <a href="https://github.com/andresF864/Proyecto-PDI" className="subtitle">GitHub</a>
        <img className="imge" src="https://preview.redd.it/nnz1wsv4wfgf1.png?width=1080&crop=smart&auto=webp&s=668eb9d5acb10c7b7955c0b3577e4a52b813bd1b" alt="Imagen de la interfaz de la App" />
      </div>
      <div className="content">
        <p>Animacion 3D</p>
        <p>Rol: Autor</p>
        <a href="https://youtu.be/vpArY6-Ar0U" className="subtitle">Youtube</a>
        <img className="imge" src="https://preview.redd.it/adokhxb42ggf1.png?width=1080&crop=smart&auto=webp&s=ee08a0149c4595e83b4f1837fd2d17ed503e944b" alt="Imagen de la consola" />
      </div>
      <div className="content">
        <p>Motion Graphics</p>
        <p>Rol: Autor</p>
        <a href="https://youtube.com/shorts/aqFOBk7W-_E?feature=shared" className="subtitle">Youtube</a>
      </div>
    </div>
  );
}

export default Projects;