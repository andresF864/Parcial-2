import React from 'react';

function Projects() {
  return (
    <div className="container">
      <div className="title">
        <h1>Proyectos</h1>
        <h3>Clase de Desarrollo Web</h3>
      </div>
      <div className="content">
        <p>Práctica HTML + Media Query</p>
        <a href="https://github.com/andresF864/Tarea.git" className="subtitle">GitHub</a>
        <img className="imge" src="./img/T1.png" alt="Imagen de html básico" />
      </div>
      <div className="content">
        <p>Formulario de Registro y Recuperación de Contraseñas UAO</p>
        <a href="https://github.com/edwinmgallego/clase-practica-css.git" className="subtitle">GitHub</a>
        <img className="imge" src="./img/T2.png" alt="Imagen del Formulario" />
      </div>
    </div>
  );
}

export default Projects;