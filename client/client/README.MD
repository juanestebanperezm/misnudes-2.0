# Mis Nudes Frontend
Pagina de adultos de la comunidad Nmsk Amigos construido en React.js
## Intalacion en local
~~~
git clone git@github.com:juanestebanperezm/misnudes-2.0.git
cd misnudes-2.0
npm install
~~~ 
## Desarrollo
~~~
npm run dev
~~~
## Generar build
~~~
npm run build
~~~

### Scripts extras
~~~
npm run commit // te ayuda a estructurar un commit
~~~
## Estructura de carpetas 
~~~
src // Root folder
 ┣ app // Aqui Se encuentra la configuracion del store de redux
 ┃ ┗ store.js
 ┣ components // Los componentes de la aplicacion 
 ┃ ┣ Cards
 ┃ ┃ ┗ index.jsx
 ┃ ┣ FeedVideos
 ┃ ┃ ┗ index.jsx
 ┃ ┣ Footer
 ┃ ┃ ┗ index.jsx
 ┃ ┗ Header
 ┃ ┃ ┗ index.jsx
 ┣ context
 ┃ ┗ videosContext.jsx //Contexto: aqui se ejecuta los reducers
 ┣ features // Aqui futuros slices de la aplicacion
 ┣ layout // El layout de la aplicacion para estructurarla
 ┃ ┗ index.jsx
 ┣ pages // Se encuentra las rutas
 ┃ ┣ Categories
 ┃ ┣ Home
 ┃ ┃ ┗ index.jsx
 ┃ ┗ User
 ┣ App.jsx
 ┣ index.css
 ┗ main.jsx
 ~~~

## PILAS CON LAS RAMAS
se va a trabajar sobre la rama development, la rama principal no se toca, ni con la mano ni los dedos, porque nosotros somos team #nofap