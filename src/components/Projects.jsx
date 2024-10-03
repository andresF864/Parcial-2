import React from 'react';

function Projects() {
  return (
    <div className="container">
      <div className="title">
        <h1>Proyectos</h1>
        <h3>Clase de Desarrollo Web</h3>
      </div>
      <div className="content">
        <p>Práctica HTML + Media Query-Pagina Responsive</p>
        <a href="https://github.com/andresF864/Tarea.git" className="subtitle">GitHub</a>
        <img className="imge" src="https://preview.redd.it/trabajos-web-v0-ijkpiiz19ksd1.png?width=1871&format=png&auto=webp&s=35ed2e83fe6443277419ceedd911ee5a5224625b" alt="Imagen de html básico" />
      </div>
      <div className="content">
        <p>Formulario de Registro y Recuperación de Contraseñas UAO</p>
        <a href="https://github.com/edwinmgallego/clase-practica-css.git" className="subtitle">GitHub</a>
        <img className="imge" src="https://preview.redd.it/trabajos-web-v0-3ypodiz19ksd1.png?width=752&format=png&auto=webp&s=7a15cc69e8f41e307540f23df28d34114a8d9576" alt="Imagen del Formulario" />
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