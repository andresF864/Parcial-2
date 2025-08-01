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
        <p>Numeros Iguales y Cual es el Mayor</p>
        <a href="https://github.com/andresF864/javascript-2.git" className="subtitle">GitHub</a>
        <img className="imge" src="https://preview.redd.it/trabajos-web-v0-345p7jz19ksd1.png?width=663&format=png&auto=webp&s=b9d89e52688064785ebfed620a00247253c0b072" alt="Imagen de la consola" />
      </div>
      <div className="content">
        <p>Cards</p>
        <a href="https://github.com/andresF864/Cards.git" className="subtitle">GitHub</a>
        <img className="imge" src="https://preview.redd.it/trabajos-web-v0-qfqi6fz19ksd1.png?width=1017&format=png&auto=webp&s=ab7ee0c9bcfd3084d5b497eeb50d92316bf5a64c" alt="Imagen de la consola" />
      </div>
    </div>
  );
}

export default Projects;