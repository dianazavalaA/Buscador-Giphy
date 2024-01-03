Ejercicio 1 - Worky
Objetivo: Desarrollar una aplicación web consumiendo la API de Giphy dentro de dicha aplicación vamos a poder buscar GIFs de perritos así como poder guardar el historial de las búsquedas que realicemos, marcar como favoritos los GIFs que deseemos y de igual forma si se recarga o actualiza la página se debe poder seguir viendo las búsquedas como los GIFs favoritos para poder lograr lo anterior mencionado.

¿Qué tecnologías se van a usar?
Para poder crear el proyecto, vamos a usar varias tecnologías para poderlo armar, adicional hay que ayudarnos a la par de la documentación correspondiente de cada una para cualquier duda que surja, las tecnologías a usar son las siguientes:
Vue 3 Composition API
Pinia
TailwindCSS
API de Giphy
Crear proyecto con Vue
Para comenzar con el desarrollo, tenemos que crear primero el proyecto con ayuda de Vue, los pasos son los siguientes:
Primero desde la terminal vamos a ubicarnos en la carpeta donde vamos a crear el proyecto, una vez dentro haremos uso del comando npm create vue@latest
Una vez que se ejecute el comando anteriormente mencionado el mismo framework nos ayudará a decidir que queremos agregar al mismo, primeramente nos pedirá el nombre de nuestro proyecto y después nos va a ir preguntando que tecnologías y/o librerías queremos agregar.
Una vez que ya nombramos el proyecto y seleccionamos las tecnologías a utilizar vamos a correr los siguientes dos comandos cd api-giphy⬅️ Este es para entrar a la carpeta de nuestro proyecto y el otro comando es npm install ⬅️ Este otro comando se utiliza para poder agregar los paquetes necesarios a nuestro proyecto.
Ahora que ya todo esta creado de manera correcta, vamos a correr nuestro proyecto recordando que hay que estar dentro nuestra carpeta del proyecto, nuestro comando para echar a andar todo es npm run dev en mi caso me dice que de manera local lo voy a checar con la siguiente url: **http://localhost:5173/**

Instalación de Tailwind CSS
Ahora que nuestro proyecto esta creado con las estructuras necesarias vamos a agregar Tailwind CSS, es una potente herramienta que nos ayudara con el desarrollo del diseño, a continuación tenemos la manera en la que vamos a realizar la instalación de dicha herramienta.
Primero instalaremos Tailwind, nos vamos a posicionar dentro de la carpeta de nuestro proyecto y vamos a tirar el siguiente comando
npm install -D tailwindcss ⬅️Este nos ayudara a realizar la instalación dentro de nuestro proyecto con todos los paquetes necesarios.
Después de ejecutar el anterior comando, vamos a tirar el siguiente comando npx tailwindcss init ⬅️Este comando nos ayudara para que se cree un archivo de configuración de Tailwind, lo que hace es que va a permitir poder definir y personalizar lo que son colores, variantes, extensiones, etc que es lo que justamente nos ayudará a personalizar nuestra aplicación.
Una vez que se ejecutaron los dos anteriores comandos, en nuestro proyecto vamos a tener un archivo nuevo bajo el nombre tailwind.config.js donde le vamos a añadir las rutas de los archivos donde se van a posicionar para aplicar los estilos.
Por último añadimos las directivas a nuestros archivo principal de CSS para que podamos usar ahora si TailwindCSS en todo nuestro proyecto.
¿Cómo es la API? y ¿Cómo se usa?
Bien dado que tenemos que haces consumo de una API, nos damos a la tarea de explorar como es esta y como funciona, antes de poder realizar nuestro código y todo lo necesario para crear al 100% nuestra aplicación, vamos a checarla.
De inicio vemos que se requiere tener un token de la API, a continuación vamos a marcar los paso a seguir para obtenerlo y no tener problemas a futuro.
Vamos a irnos a la página de https://developers.giphy.com/
Una vez que entramos de manera general a la página nos vamos al apartado de API Explorer -> https://developers.giphy.com/explorer/
Nos aparecerán dos apartados, el primero es Request y el segundo Parameters, uno depende del otro por lo que primero vamos con Request para poder obtener Parameters.
En el apartado de Request, vamos a elegir Choose an endpoint, en esta parte nos dará a elegir varias opciones como Autocomplete, Categories, Random, Search, Translate, en esta opción vamos a elegir Search ya que lo que nosotros tenemos como objetivo es realizar la búsqueda de GIFTs.
Ahora hacemos una pausa a este apartado para crear la API Key entonces en la parte de arriba a mano superior derecha tenemos el nombre del usuario justo aun lado nos encontramos con un botón que dice “Create an App” y ahí vamos a realizar nuestro token.

6. Una vez que se haya presionado el botón antes mencionado (Create an App) nos
   van a aparecer dos opciones una SDK y otra que es la que nos interesa a nosotros
   API, seleccionamos API y le damos click en “Next Step”.

7. Después de darle click al botón “Next Step”, nos va a arrojar una nueva  
   ventana donde ahora si vamos a crear formalmente nuestra API Key, por lo
   que te va a pedir el nombre de tu APP y una pequeña descripción de la
   misma, llenamos lo que nos solicita, aceptamos y le damos click al botón
   “Create App”.

8. Lo que pasara después es que nos arrojara un código alfanumérico que será
   nuestro key para poderla usar en el apartado de Request que dejamos en pausa, en
   este punto lo vamos a retomar y como la misma aplicación es muy inteligente solito
   va a tomar la key que acabamos de generar tal como se muestra a continuación, y
   de esta forma ya terminamos con el apartado Request.

9. Ahora seguimos con el apartado Parameters, que en este lo que nos va a
   faltar es nuestro parámetro q, el cual nos pide una frase o termino que sea
   relacionado o referente a la búsqueda, por lo que pondremos la palabra
   “doggy”, ya que recordemos que queremos búsquedas relacionadas a
   perritos, así como se muestra a continuación.

10. Ahora que ya tenemos llenos nuestros dos apartados y que hemos completado los datos solicitados, la misma aplicación nos va a arrojar los siguiente, en esta parte le damos click al botón “Send Request” para ello nos mostrará un formato JSON con la extracción de la información de la API.

11. Ahora que hemos obtenido nuestra key, esta la vamos a guardar para ello
    crearemos un archivo con el nombre .env, en este archivo vamos a
    guardar nuestra key, este archivo NO lo vamos a subir a nuestro repo, si la
    subimos corremos el riesgo de que nos la puedan robar y si se esta pagando
    por el servicio nos puede salir más caro.

12. Vamos a crear un archivo llamado CallApi.ts, este archivo es muy importante ya que con el haremos el llamado correspondiente a nuestra API y hacemos uso de un await fetch donde mandamos la URL de nuestra API, que recordemos se obtiene esta liga completa en el punto #8 donde se explica como obtenerla.

Diseño de la aplicación web
Antes de seguir con todo lo demás, en este caso hice un pequeño diseño rápido para ver como podían quedar los elementos distribuidos y así de esa idea poderlo pasar a código y poder ir viendo que elementos utilizar, de esta forma es más fácil en mi caso poder tener una idea más visual y de ahí partir.

Creación de la aplicación web en código
Vistas
Ya basandonos en el diseño que se tiene para ver como se van a distribuir los elementos, vamos a crear nuestros archivos de vista que se van a crear dentro de la carpeta view la cual se encuentra dentro de la carpeta src.
Vamos a crear los archivos para cada vista que vamos a necesitar, en este caso voy a necesitar una vista de Home para nuestro inicio, Fav para nuestro GIF marcados como favoritos, History para poder visualizar nuestro historial de búsqueda y adicional se agregara uno de ListImage, este último es para poder jalar un par de GIFs y tenerlos de muestra en el inicio, cabe mencionar que todos tendrás el mismo formato es decir, HomeView, FavView, HistoryView, ListImageView con la terminación de la extensión .vue
En nuestra vista de HomeView.vue manejamos varias funciones la primera es una función async await, que usamos justamente para realizar la búsqueda, mostrar los valores y también para poder agregar el historial de lo que se ha buscado.
Se crearon 3 funciones, una es para agregar nuestros GIFs a favoritos, otra es para agregar nuestro historial en base a las palabras que estamos buscando almacenamos estás mismas para poder obtener el historial y por último tenemos para remover nuestros favoritos, como toda aplicación donde hemos agregado a favoritos también debemos poder quitar esos favoritos, por último en nuestro template manejamos toda la parte de Vue con Tailwind y obtener nuestra vista del inicio completa.
En nuestra vista de FavView.vue, lo que hacemos es mostrar en esta parte nuestros GIFs favoritos aquí también tenemos la función para removerlos, ya que como lo mencioné anteriormente podemos agregarlos tanto eliminarlos, lo que hace esta vista es que arroja todos los GIFs añadidos pero adicional tiene un botón para eliminarlos.
En el archivo HistoryView.vue, es nuestra vista donde se muestra todo el historial de lo que hemos ingresado en el input, en este sólo mandamos llamar nuestro store y todo lo demás se estructura dentro del template, donde se arroja el listado de lo almacenado y adicional se tiene un botón para poder eliminarlo del historial.
En nuestra vista ListImageView.vue, se agrego principalmente para poder obtener las imagenes que se muestran en el inicio, se agregaron algunos GIFs al azar cargandolos mediante la URL, y en nuestro template maquetamos la manera en la que se presentan en el inicio (Home).
En el archivo App.vue, tenemos las opciones de nuestro menú, así como el uso de RouterLink para la navegación entre vistas.

TypeScritp - Lógica
En la carpeta store se han creado dos archivos que contienen toda la lógica para poder mostrar la información de la API, estos dos archivos están estructurados bajo la biblioteca de gestión de pinia, que es algo muy similar a Vuex.
Nuestro primer archivo lleva el nombre de favorites.ts, en el primero se importa la librería de pinia, se crea una interface de fav donde se hará uso del id, title y url.
Dentro de está lógica vamos construir un store que nos ayudará a que de los GIFs obtenidos por la API podamos obtener una lista a la le podamos agrega los favoritos y hacer la búsqueda por ID, además de que en nuestras acciones, vamos a establecer nuestro listado de GIFs, agregar nuestros favoritos logrando ubicar el id, title y la URL de dicho GIF, mostrar esta lista de los que se agregaron a favoritos y por último la lógica para eliminarlos.
El segundo archivo history.ts es para realizar una lógica y estructura algo similar a la anterior, donde de igual manera creamos un store que almacene lo ingresado mediante el input con el v-model “search”, establecemos acciones donde justo busquemos que lo que esta entrando en el input se obtenga y se almacene, para poderlo mostrar en la vista de History, además de tener la parte de eliminar uno a uno lo que se encontró en el historial, filtrarlo y poder ver que queremos eliminar.
Cabe mencionar que ambos cuenta ya con validaciones para que una si vuelves a buscar alguna palabra que ya habías ingresado no se vuelva a agregar al historial y la otra es que al mostrar nuestro listado de GIFs si en su momento ya había agregado algún GIF en lugar de aparecerte la opción “Agregar Favorito” te saldrá la opción “Eliminar Favorito” así sabrás que ese GIF ya se encuentra en tu lista.

¿Qué hacer con el repositorio?
Lista de comandos a utilizar y explicación:
git clone + URL
cd repositorio
OJO aquí tenemos 2 carpetas por lo que podemos movernos al proyecto 1 o proyecto 2, ¿cómo lo hacemos?, bien ponemos cd proyecto 1 o cd proyecto 2 según sea el caso a necesitar.
En el primero requerimos un archivo .env con el nombre de la variable del entorno y su valor antes de correrlo y para correrlo sería con el comando npm run dev
En el segundo caso sólo nos movemos a la carpeta como se indico anteriormente y de igual manera el comando para correrlo sería con npm run dev.

Una vez que el proyecto esta arriba, para poderlo continuar trabajando, lo ideal sería realizar lo siguiente:
Una vez dentro de GitLab, vamos a botón de Fork, nos va a mandar a un formulario donde nos dirá que esa es una copia de dicho proyecto al que ingresamos, podemos dejar el mismo nombre o cambiarlo, adicional nos pide que en la URL se asigné un namespace que en este caso es nuestra cuenta de GitLab y nos da opción a ver que ramas se van a incluir y la visibilidad que dicho repositorio va a tener.
Una vez realizado lo anterior vamos a proceder a configurar el SSH (en mi caso no lo tenía configurado), en nuestra terminal vamos a ejecutar lo siguiente cd .ssh y después el comando ls para ver que archivos tenemos, debemos visualizar uno que tenga extensión .pub, ahora con el comando cat más ese archivo que termina con extensión .pub nos va a arrojar nuestra key.
Nos vamos al apartado de User Settings, tenemos un botón que dice SSH Keys donde podemos acceder y después tenemos un botón a mano derecha que nos dice “Add new key”, daremos click ahí para poder agregar nuestra key que obtuvimos previamente. copiamos nuestra key y agregamos un titulo.
Ahora vamos a clonar el repositorio en nuestra máquina, en la misma pantalla del repo viene un apartado con la URL que dice “clone with ssh” copiamos esa URL.
Nos ubicamos donde queramos realizar la clonación del repositorio(en mi caso lo hice en el escritorio), abrimos nuestra GitBash, y ponemos el siguiente comando git clone + URL que copiamos previamente
