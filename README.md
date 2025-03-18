# 🎁 Amigo Secreto

¡Bienvenido a **Amigo Secreto**! 🎉 Este es un proyecto web interactivo que permite agregar nombres a una lista y sortear aleatoriamente un amigo secreto. Ideal para juegos entre amigos y familiares.  

## 🚀 Características

✅ Agregar nombres a la lista de amigos.  
✅ Visualizar la lista de participantes.  
✅ Sortear un amigo secreto de manera aleatoria.  
✅ Diseño atractivo y responsive.  

## 🖥️ Tecnologías utilizadas

- **HTML5** 🏗️ - Estructura del sitio.  
- **CSS3** 🎨 - Estilización y diseño responsivo.  
- **JavaScript** ⚡ - Lógica del sorteo y manipulación del DOM.  

## 📌 Cómo usar

1. Ingresa nombres en el campo de texto y haz clic en "Añadir".  
2. Los nombres aparecerán en la lista de amigos.  
3. Cuando hayas agregado todos los nombres, presiona "Sortear amigo".  
4. Se mostrará el nombre del amigo secreto seleccionado al azar.  

## 📂 Estructura del proyecto

```
📂 challenge-amigo-secreto/
├── 📄 index.html # Estructura principal del sitio
├── 🎨 style.css # Estilos del proyecto
├── ⚡ app.js # Lógica del sorteo y manejo de la lista
└── 🖼️ assets/ # Imágenes y otros recursos
```


## 🎯 Funcionalidades en JavaScript

### `agregarAmigo()`
- Captura el valor ingresado en el input.  
- Valida que el campo no esté vacío.  
- Agrega el nombre a la lista de amigos.  
- Actualiza la lista en pantalla.  

### `actualizarListaAmigos()`
- Limpia la lista antes de actualizarla.  
- Itera sobre el array de amigos y los muestra en pantalla.  

### `sortearAmigo()`
- Valida si hay nombres en la lista.  
- Genera un índice aleatorio usando `Math.random()`.  
- Muestra el nombre sorteado en pantalla.  

## 🛠️ Instalación y ejecución

1. Descargar el repositorio o clonarlo con:  
```sh
git clone https://github.com/tu-usuario/amigo-secreto.git
```
2. Abrir index.html en cualquier navegador moderno.

## 📌 Mejoras futuras
- Eliminar amigos de la lista.
- Permitir nombres sin repetir.
- Animaciones en la interfaz.

## 🎉 Contribuciones
¡Las contribuciones son bienvenidas! Puedes abrir un issue o enviar un pull request con tus mejoras.
