# 🎁 Amigo Secreto

Proyecto en **JavaScript** que permite agregar amigos a una lista y realizar un sorteo aleatorio para seleccionar un “amigo secreto”.  
Ideal para practicar **manipulación del DOM**, **arrays** y **eventos en JS**.

---

## 📂 Estructura del proyecto
/AmigoSecreto
│
├─ index.html # Archivo HTML principal
├─ style.css # Estilos del proyecto
└─ app.js # Lógica en JavaScript


---

## ✨ Funcionalidades

### 1️⃣ Agregar amigos
- El usuario ingresa un nombre en un campo de texto.  
- Se valida que el campo no esté vacío.  
- Se agrega el nombre al array `amigosInvisibles`.  
- La lista de amigos en pantalla se actualiza automáticamente.  

### 2️⃣ Mostrar lista de amigos
- Todos los nombres agregados se muestran en una lista `<ul>`.  
- Cada vez que se añade un amigo, la lista se limpia y se vuelve a renderizar para evitar duplicados visuales.

### 3️⃣ Sortear un amigo secreto
- Selecciona de manera aleatoria un nombre del array `amigosInvisibles`.  
- Antes de sortear, valida que haya al menos un amigo en la lista.  
- Muestra el resultado en la página en un elemento `<ul>` o `<p>` con id `resultado`.  
- Opcional: el amigo sorteado puede eliminarse de la lista para que no se repita en futuros sorteos.  

---

## ⚡ Tecnologías utilizadas

- HTML5  
- CSS3  
- JavaScript (DOM, arrays, eventos)  

---

## 📌 Cómo usar el proyecto

1. Abrir `index.html` en un navegador moderno.  
2. Escribir nombres de amigos en el campo de texto y hacer clic en **“Añadir”**.  
3. Una vez agregados todos los amigos, hacer clic en **“Sortear amigo”** para seleccionar un amigo secreto al azar.  
4. El resultado se mostrará en la sección **Resultado** de la página.  

---

## 💡 Notas de desarrollo

- Se utilizan **comentarios en app.js** para explicar la lógica de cada función.  
- `innerHTML` y `appendChild` se usan para actualizar dinámicamente la lista y el resultado en la página.  
- Se valida la entrada para que no se puedan agregar nombres vacíos.  
- La función de sorteo utiliza `Math.random()` y `Math.floor()` para generar un índice aleatorio del array.  


