import React from 'react';

function GitIgnoreInstructions() {
  return (
    <div>
      <div className="content2">
        <p>
          <strong>Paso 1:</strong> Crear o editar el archivo <code>.gitignore</code>
          <br />
          El archivo <code>.gitignore</code> debe estar en el directorio raíz de tu repositorio. Si no existe, créalo.
          <br />
          Ejemplo de comando:
          <br />
          <code>touch .gitignore</code>
          <br />
          Abre el archivo <code>.gitignore</code> con un editor de texto o tu IDE preferido.
          <br />
          Ejemplo de comando:
          <br />
          <code>nano .gitignore</code>
        </p>
      </div>

      <div className="content2">
        <p>
          <strong>Paso 2:</strong> Añadir reglas para ignorar archivos de imágenes y videos
          <br />
          Para evitar que Git haga seguimiento de ciertos tipos de archivos, debes añadir patrones en <code>.gitignore</code>.
          <br />
          Para ignorar todos los archivos <code>.jpg</code> en cualquier parte del repositorio, añade:
          <br />
          <code>*.jpg</code>
          <br />
          Ignorar archivos <code>.mp3</code>: Para ignorar todos los archivos <code>.mp3</code>, añade:
          <br />
          <code>*.mp3</code>
          <br />
          Ignorar otros tipos de archivos: Puedes añadir más extensiones según sea necesario. Aquí tienes un ejemplo para otros tipos de archivos de imágenes y videos:
          <br />
          <code>
            # Imágenes
            <br />
            *.jpg
            <br />
            *.jpeg
            <br />
            *.png
            <br />
            *.gif
            <br />
            *.svg
            <br />
            <br />
            # Videos
            <br />
            *.mp4
            <br />
            *.avi
            <br />
            *.mov
            <br />
            *.mkv
            <br />
            <br />
            # Audios
            <br />
            *.mp3
            <br />
            *.wav
            <br />
            *.flac
            <br />
          </code>
          <br />
          Ignorar carpetas completas: Si quieres ignorar una carpeta completa (por ejemplo, <code>media</code>), añade:
          <br />
          <code>media/</code>
        </p>
      </div>

      <div className="content2">
        <p>
          <strong>Paso 3:</strong> Asegurarte de que Git ignore estos archivos
          <br />
          Los archivos que aún no han sido agregados al repositorio se ignorarán automáticamente si coinciden con las reglas del <code>.gitignore</code>.
          <br />
          Si ya has agregado y confirmado estos archivos, Git seguirá haciéndoles seguimiento, incluso si están en <code>.gitignore</code>.
          <br />
          Para detener el seguimiento, haz lo siguiente:
          <br />
          Eliminar archivos del seguimiento, pero no del sistema:
          <br />
          <code>git rm --cached *.jpg</code>
          <br />
          <code>git rm --cached *.mp3</code>
          <br />
          Agregar los cambios:
          <br />
          <code>git add .gitignore</code>
          <br />
          <code>git commit -m "Ignorar archivos de imágenes y videos"</code>
        </p>
      </div>

      <div className="content2">
        <p>
          <strong>Paso 4:</strong> Confirmar y probar
          <br />
          Confirma los cambios realizados en el archivo <code>.gitignore</code>.
          <br />
          Comando:
          <br />
          <code>git add .gitignore</code>
          <br />
          <code>git commit -m "Añadir reglas para ignorar imágenes y videos"</code>
          <br />
          Prueba: Crea un archivo <code>.jpg</code> o <code>.mp3</code> en tu repositorio y verifica que Git no lo incluya en la lista de archivos no confirmados:
          <br />
          Deberías ver que los archivos <code>.jpg</code> y <code>.mp3</code> no aparecen en la salida del comando <code>git status</code>.
        </p>
      </div>
    </div>
  );
}

export default GitIgnoreInstructions;