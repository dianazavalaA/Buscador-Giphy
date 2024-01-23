# Buscador GIPHY

## Objetivo

El objetivo de este primer ejercicio de la prueba técnica es poder desarrollar una aplicación web mediante la cual se va a demostrar las habilidades y conocimiento con Vue 3, Tailwind CSS, consumo de la **API de Giphy** y también demostrar conocimientos de creación de **componentes reutilizables** por lo que al final el usuario puede buscar **GIFs** de perritos, así como guardar el historial de las búsquedas que se realicen, marcar como favoritos los **GIFs** que se deseen y de igual forma si se recarga o actualiza la página se debe poder seguir viendo tanto las búsquedas como los GIFs favoritos.

## Tecnologías

Para poder realizar este ejercicio, se ocuparon varias tecnologías que permitieron que la construcción fuera más sencilla, se van enlistar cada unas de las librerías, frameworks, etc utilizados para el logro de la primera parte del test, además de que al dar click sobre ellas te llevaran al link de la documentación así será más fácil poder tener acceso a la información, a continuación se enlistan cada una de ellas:

- [Vue 3](https://vuejs.org/guide/introduction.html 'Vue 3'): Para poder construir esta aplicación se utilizó la versión 3 de vue para armar toda la estructura.
- [Pinia](https://pinia.vuejs.org/ 'Pinia'): Se hizo uso de esta librería que tiene la misma función que Vuex que justo nos ayudó a la gestión de la aplicación sobre todo porque se hace consumo de una API, se sabe que Pinia no es nuevo en este medio pero ha salido y llevado de la mano con la actualización de Vue a la versión 3, por ello se trato de integrar en esta tarea.
- [TailwindCSS](https://tailwindcss.com/ 'TailwindCSS'): Se hizo uso de este framework para poder darle el completo estilo a la estructura creada de esta manera se ve mucho más estetica nuestra aplicación.
- [API de Giphy](https://developers.giphy.com/ 'API de Giphy'): Se utilizó esta API para poder llevar acabo el objetivo que se tenía, en este caso más adelante hay un apartado donde se explica más a detalle esta parte, ya que esta juega un papel importante en todo nuestro desarrollo.

## Instalación y levantar el ambiente

Antes de poder levantar el ambiente para probar, se requiere lo siguiente:

1. Se requiere tener **Node** y **npm** para poder correrlo, en caso de no tenerlo lo puedes descargar de la siguiente liga [Descargar Node Js](https://nodejs.org/en 'Descargar Node Js')
2. Ya una vez que se tiene completo el punto #1 entonces se tiene que instalar dependencias del proyecto

#### Levantar el ambiente

1. Para poder levantar el ambiente de inicio se debe clonar el repositorio por medio de SSH o por medio de HTTPS
2. Ingresar al directorio del proyecto que ya se clono de la siguiente manera:
   `cd api-giphy`
3. Después de ingresar al directorio vamos a agregar las dependencias con el siguiente comando
   `npm install`
4. Ahora vamos a arrancar el proyecto con el siguiente comando:
   `npm run dev`
5. Aquí tenemos una caracteristica especial que es hacer uso de una **API Key** para la integración con GIPHY que en los siguientes puntos se explica como obtenerla.

## ¿Cómo es la API? y ¿Cómo se usa?

Como bien se mencionaba nuestra API juega un papel importante en el desarrollo ya que gracias a esta vamos a poder obtener la información que se necesita pero antes de sólo jalar la información y poderse a codear, es importante conocer, ¿Cómo esta conformada?, ¿Cómo se usa?, esta API y el uso de la misma tiene un punto interesante para este ejercicio ya que requiere tener un **token de la API**, se explicará a continuación como lograr esto último que se menciona.
Los pasos a seguir se enlistan a continuación:

1. Vamos a irnos a la página de https://developers.giphy.com/
2. Una vez que entramos de manera general a la página nos vamos al apartado de API Explorer -> https://developers.giphy.com/explorer/
3. Nos aparecerán dos apartados, el primero es Request y el segundo Parameters, uno depende del otro por lo que primero vamos con Request para poder obtener Parameters.
4. En el apartado de Request, vamos a elegir Choose an endpoint, en esta parte nos dará a elegir varias opciones como Autocomplete, Categories, Random, Search, Translate, en esta opción vamos a elegir Search ya que lo que nosotros tenemos como objetivo es realizar la búsqueda de GIFTs.
5. Ahora hacemos una pausa a este apartado para crear la **API Key** entonces en la parte de arriba a mano superior derecha tenemos el nombre del usuario justo aun lado nos encontramos con un botón que dice **"Create an App"** y ahí vamos a realizar nuestro token.
   ![](https://github.com/dianazavalaA/Buscador-Giphy/blob/main/Imagenes%20Readme/Punto%205.png?raw=true)
6. Una vez que se haya presionado el botón antes mencionado (Create an App) nos
   van a aparecer dos opciones una SDK y otra que es la que nos interesa a nosotros
   API, seleccionamos API y le damos click en **"Next Step"**.
   ![](https://github.com/dianazavalaA/Buscador-Giphy/blob/main/Imagenes%20Readme/Punto%206.png?raw=true)
7. Después de darle click al botón **"Next Step"**, nos va a arrojar una nueva  
   ventana donde ahora si vamos a crear formalmente nuestra **API Key**, por lo
   que te va a pedir el nombre de tu APP y una pequeña descripción de la
   misma, llenamos lo que nos solicita, aceptamos y le damos click al botón
   **“Create App”**.
   ![](https://github.com/dianazavalaA/Buscador-Giphy/blob/main/Imagenes%20Readme/Punto%207.png?raw=true)
8. Lo que pasara después es que nos arrojara un código alfanumérico que será
   nuestro key para poderla usar en el apartado de Request que dejamos en pausa, en
   este punto lo vamos a retomar y como la misma aplicación es muy inteligente solito
   va a tomar la key que acabamos de generar tal como se muestra a continuación, y
   de esta forma ya terminamos con el apartado Request.
   ![](https://github.com/dianazavalaA/Buscador-Giphy/blob/main/Imagenes%20Readme/Punto%208.png?raw=true)
   ![](https://github.com/dianazavalaA/Buscador-Giphy/blob/main/Imagenes%20Readme/Punto%208_1.png?raw=true)
9. Ahora seguimos con el apartado Parameters, que en este lo que nos va a
   faltar es nuestro parámetro q, el cual nos pide una frase o termino que sea
   relacionado o referente a la búsqueda, por lo que pondremos la palabra
   “doggy”, ya que recordemos que queremos búsquedas relacionadas a
   perritos, así como se muestra a continuación.
   ![](https://github.com/dianazavalaA/Buscador-Giphy/blob/main/Imagenes%20Readme/Punto%209.png?raw=true)
10. Ahora que ya tenemos llenos nuestros dos apartados y que hemos completado los datos solicitados, la misma aplicación nos va a arrojar los siguiente, en esta parte le damos click al botón “Send Request” para ello nos mostrará un formato JSON con la extracción de la información de la API.
    ![](https://github.com/dianazavalaA/Buscador-Giphy/blob/main/Imagenes%20Readme/Punto%2010.png?raw=true)
11. Ahora que hemos obtenido nuestra key, esta la vamos a guardar para ello
    crearemos un archivo con el nombre **.env**, en este archivo vamos a
    guardar nuestra **API Key**, este archivo NO lo vamos a subir a nuestro repo, si la
    subimos corremos el riesgo de que nos la puedan robar y si se esta pagando
    por el servicio nos puede salir más caro.
12. Vamos a crear un archivo llamado **CallApi.ts**, este archivo es muy importante ya que con el haremos el llamado correspondiente a nuestra API y hacemos uso de un _await fetch_ donde mandamos la URL de nuestra API, que recordemos se obtiene esta liga completa en el punto número 8 donde se explica como obtenerla.

## Implementación archivo .env (Explicación)

Se va a crear un archivo .env para guardar la _API_KEY_ de forma local, como se mencionó en la misma documentación, en el archivo **CallApi.ts** se va a crear una nueva variable de tipo _Const_, dentro de este archivo se le puso _const API_KEY = import.meta.env.API_KEY_, lo que quiere decir lo anterior es la forma en la que podemos acceder a las variables de entorno en cuanto a la ejecución de JS, si lo vamos dividiendo para entenderlo mejor _import.meta.env_ -> se refiere a la parte del entorno environment y _API_KEY_ -> es el nombre de la variable a la que vamos a acceder, esta última ya se configuro en el archivo _.env_, en este mismo archivo **CallApi.ts** se ha configurado y escrito en código TypeScript para poder hacer el llamado a la API, en esta exportamos una función llamada _getGifs_ que toma un parametro query de tipo string y nos devuelve una promise asincrona, aquí se metió un catch para el manejo de errores que nos pudiera salir en la ejecución, de igual manera se hace uso de fetch para poder hacer la solicitud al llamado de la API de GIPHY donde incluimos la URL y dentro de esta inclumos _API_KEY_ y el _query_ se nos devuelve un resultado de la solicitud en un formato de tipo _JSON_.
Si se dan cuenta en el archivo _.env_ se hizo uso de un _VITE_ -> _VITE_API_KEY_ el uso de esta palabra es porque hacemos uso de la biblioteca _VITE_
Ojo a continuación, se dará un ejemplo de la variable de entorno este valor es inventado, sólo es para mostrar como sería:

`VITE_API_KEY=aHahdud809439489484`

NOTA: Es importante no compartir este dato, ya que es una mala práctica y además las pueden robar y si estas pagando te puede salir caro por el uso que le den, por lo que debemos tomar en cuenta esta parte, por ello se puso como un ejemplo y no se compartio el API KEY real todas las imagenes que se muestran en el apartado de ¿Cómo es la API? y ¿Cómo se usa? son usadas para que se puedan dar una idea es importante comentar que esa no es la API que se utilizó para el proyecto, ya que toda lo que hay en la documentación es meramente informativo.

## Solución

Se tomó la **API de GIPHY** como ya se ha mencionado antes, al inicio me costo un poco de trabajo poderme imaginar la interfaz entonces lo que hice fue que en pain realicé un diseño rápido para darme la idea de como pasar los componentes visuales a código.
La estructura completa del proyecto fue con **Vue 3** se hizo uso de lo más actual de Vue para el desarrollo, de igual manera a la par se checo la documentación para podernos guiar.
Se hizo uso de componentes reutilizables aunque de inicio me costo pensar como buscar dichos componentes, se crearon 2 componentes reutilizables que son **Gif.vue** y **ImageGif.vue**, el primero (**Gif.vue**) trae el desarrollo de al momento de que nos arroja la búsqueda poder _añadir a favoritos_ , o bien _Eliminar de favoritos_, mientrás que el segundo (**ImageGif.vue**) es donde justamente vamos a recibir las imagenes que aparecen en el inicio.
Se hizo uso de **Tailwind CSS** para darle los estilos a toda la página desde los bordes hasta la parte del buscador y los botones.
Otra librería que no había ocupado es **Pinia** que funciona muy similar a Vuex y se utiliza justamente para poder tener una mejor gestión de la aplicación con el consumo de API bastante bueno poderlo aplicar.

## ¿Qué se puede mejorar?

La interfaz se puede mejorar, el resultado es el esperado porque se cumplió con poder realizar las busquedas, guardar el historial, marcar favoritos y bien lo más importante hacer uso de componentes reutilizables pero la interfaz puede ser más llamativa y mejor organizada hasta una páginación se le puede implementar para que la información se vea más organizada.

## ¿Qué aprendí?

Contenta con todo lo aprendido y desarrollado, sin duda alguna documentarte de más cosas es muy bueno y poderle sacar ventaja a todo lo que tenemos a la mano en tecnología, fue dificil realmente pensar en un diseño muy producido ya que lo que hice como lo comente antes fue pasar lo que se tenía en mi mente a un Paint y de ahí empezar a jalar las ideas a código.
