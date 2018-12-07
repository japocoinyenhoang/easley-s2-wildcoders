Proyecto de Sprint2 - AWESOME PROFILE -CARD
Realizado por: WildCoders (Promoción Easley)
https://github.com/Adalab/easley-s2-wildcoders.git

El proyecto consta de 2 páginas:    una página de bienvenida
                                    una página con la aplicación de crear tarjetas

La aplicación funciona siguiendo estos pasos:
    Permitir al usuario elegir el estilo de la tarjeta:  eligiendo paleta de colores y                                                             tipografía
    Permitir al usuario que, mediante la introducción de información en un formulario, este texto se muestre maquetado automáticamente en un cuadro similar a una tarjeta de visita, que será la muestra del resultado final.
    Permitir que el usuario pueda compartir su tarjeta de visita por Twitter


La tarjeta de visita deberá tener los siguientes campos (entre paréntesis el nombre del campo a usar):  Nombre completo (full_name)
                Profesión (desarrolladora front-end ;)) (job)

                Datos personales    Teléfono (phone)
                                    Correo electrónico (email)

                                    RRSS    LinkedIn (linkedin)
                                            GitHub (github)

                Habilidades: a elegir máximo 3 de un listado (skills)


Respecto a la interacción con la web:
    Los campos deberán tener restricciones para su formato indicado. Campo de teléfono para el móvil, mail para el correo, etc.

    Las modificaciones que hacemos en el formulario (diseño y contenido), aparecen automáticamente en la vista previa de la tarjeta

    Las 3 partes del proceso de creación serán elementos colapsables, que al hacer clic en el título se mostrará/ocultará solo mostrando una sección de al vez

    Las opciones de habilidades las obtenemos al hacer una petición a un servicio en esta URL​: https://raw.githubusercontent.com/Adalab/dorcas-s2-proyecto-data/master/skills.json

    Se podrán seleccionar varias habilidades (hasta un máximo de 3)

    Toda la información del formulario debe almacenarse en LocalStorage (almacenamiento local del navegador), de forma que al recargar la página siga disponible y podamos borrarla con un botón de Reset. Para esto, debemos definir una estructura de datos compleja (con arrays y objetos) que es lo que guardaremos en el navegador

    Para compartir en Twitter seguiremos 2 pasos:
        Al hacer clic en el botón de "Enviar" enviaremos el formulario (submit) a un API que devolverá la URL de una web con la tarjeta de visita con la información rellena.
        Mostraremos esta URL para que el usuario verifique si la tarjeta está bien definida y un botón de "Compartir" que enlazará a Twitter donde habrá un tweet con texto predefinido que incluye la URL de la tarjeta


Diseño
Inspeccionando en el proyecto de zeplin correspondiente. https://app.zeplin.io/project/5b28021febd4990163e9020b
o desde el prototipo online del proyecto. https://sketch.cloud/s/wrO9V/09A5lzW/play

Las fuentes necesarias: Merriweather (google fonts)
                        Open sans (google fonts)
                        Comic Sans MS (sistema)
                        Montserrat (google fonts)
                        Ubuntu (google fonts)
                        FontAwesome (fontawesome.io)

Archivos
Los logos necesarios para completar el proyecto:   ​ Logo de Adalab​
                                                    ​Logo de Awesome Profile-cards​

Creatividad
Aunque el diseño del proyecto está cerrado,se nos ha permitido personalizar algunos aspectos:
    usar un logo personalizado del equipo (o nombre del equipo) en el pie de página, tras la información de copyright
    utilizar un fondo personalizado en la previsualización de la tarjeta
    añadir más paletas y fuentes a las definidas en el diseño, pero no eliminar las que os proponemos ;)



Hitos
Siguiendo los principios de las metodologías ágiles se nos han establecido pequeños ciclos iterativos de forma que al final de cada uno de estos generemos valor real de cara al usuario.

    Primero. Arranque del proyecto (kickoff)
             2 sesiones de trabajo

            Organizar el trabajo a realizar usando Trello, e ir asignando tareas y responsables
            Crear la infraestructura necesaria: repositorio en GitHub con acceso para todos los miembros del equipo.
            Establecer la estructura del contenido de la web y buscar referencias


    Segundo.Primera versión simple de la web
            3 sesiones de trabajo
             
            Desarrollar una primera versión básica de la web, con la maquetación de la estructura básica (para desktop y móvil) que incluye el formulario con los colapsables y la vista previa
            Funcionalidad básica: al modificar un campo del formulario, se actualiza la vista previa
    NOTA:   Para considerar terminado este hito y todos los siguientes debéis tener publicada la web en GitHub Pages.


    Tercero.Formulario interactivo
            5 sesiones de trabajo

            Formulario interactivo, que al modificar cualquier campo de datos o el diseño se actualice la vista previa
            En el campo de habilidades pueden añadirse hasta 3 datos (primero escribiremos las opciones a manita en el HTML)
            Sustituimos las opciones de habilidades por aquellas que nos devuelve el servidor


    Cuarto. Manejo de datos
            5 sesiones de trabajo

            Hacer que el contenido se almacene en LocalStorage del navegador
            Añadir la funcionalidad de compartir en Twitter, enviando primero los datos al servidor para obtener la URL para compartir
            Realizar validaciones de datos del formulario: campos obligatorios, que el número de habilidades seleccionadas sean máximo 3, etc.

    Quinto. Presentación final
            2 sesiones de trabajo

            El último día del sprint presentaréis la versión final de este proyecto. Para ello tendréis que dejarlo publicado y acabado con tiempo, y organizaros para preparar la presentación


Entrega
El formato de entrega de este proyecto será mediante la subida de este a la plataforma de GitHub. Para subirlo, se creará un repositorio en la organización de Adalab. El nombre del repositorio deberá estar compuesto de las siguientes partes, todo ello separado por guiones:

            Nombre de la promoción en minúsculas
            "s" minúscula seguida del número del sprint
            Nombre del equipo en minúsculas

De manera adicional, se deberá activar "GitHub Pages" en el proyecto para que este pueda ser visualizado como una web, es decir, que en el caso anterior, si alguien introdujese la dirección "adalab.github.io/web-hopper/" en un navegador web, este mostraría la web que se genera con el código del repositorio.


Presentacion del Proyecto
presentación de 10 minutos mostrando la web y explicando los siguientes puntos:
    Cómo está estructurada la web y el contenido y el por qué de cada cosa
    Cómo se ha diseñado
    La estructura del código y las partes más importantes de este (por encima, sin entrar mucho en detalle)
    Cómo ha sido la organización del equipo, el reparto de tareas y la coordinación a la hora de trabajar todas en el mismo código
    Cuál de las tareas o los puntos ha sido el que más esfuerzo ha requerido
    Cuál de las tareas o partes de la web es la que hace que el equipo esté más orgulloso

Al final de esta presentación habrá un turno breve de preguntas, de manera informal, tanto por parte de otras compañeras como por parte de los profesores.




ANEXO
Documentación del API de Awesome Profile Cards

API del back-end
La URL base del servicio es https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/

El API sigue una convención tipo REST para la gestión de tarjetas: creación y acceso a las mismas. Las acciones implementadas por este API son las siguientes:


CREATE: una petición 'POST' a la URL /card con los datos necesarios en formato JSON (especificados más abajo) creará una nueva tarjeta 

GET: una petición 'GET' a la URL /card/:id:/ devueleve una página web en HTML donde se muestran los datos de la tarjeta con el identificador 'id'

En el proyecto 2 de Adalab vamos a usar el servicio para crear una tarjeta. El servicio de acceder a una tarjeta (GET) lo usamos indirectamente porque lo usa la URL que nos devuelve el servicio de crear una tarjeta.

Datos necesarios para crear una tarjeta
Todos los campos son obligatorios, excepto las habilidades (skills).

Paleta colores  Nombre del campo: palette
                Descripción: número que representa la paleta elegida, de 1 a 3
                Ejemplo: 1

Tipografía  Nombre del campo: typography
            Descripción: número que representa la tipografía elegida, de 1 a 3
            Ejemplo: 1

Nombre  Nombre del campo: name
        Descripción: nombre completo
        Ejemplo: María García

Profesión   Nombre del campo: job
            Descripción: profesión
            Ejemplo: Programadora front-end

Teléfono    Nombre del campo: phone
            Descripción: teléfono
            Ejemplo: +34 666666666

Email   Nombre del campo: email
        Descripción: email
        Ejemplo: maria.garcia@example.com

LinkedIn    Nombre del campo: linkedin
            Descripción: nombre de usuario de LinkedIn
            Ejemplo: mariagar   

GitHub  Nombre del campo: github
        Descripción: nombre de usuario de GitHub
        Ejemplo: mariagar

Foto    Nombre del campo: photo
        Descripción: foto en codificación base64 (la que obtenemos al hacer FileReader.readAsDataURL)

Habilidades Nombre del campo: skills
            Descripción: listado de habilidades
            Ejemplo: ['HTML', 'Sass']


Ejemplo de JSON completo:
    {
    "palette": 1,
    "typography": 2,
    "name" : "María García",
    "job": "Front-end developer",
    "phone": "+34 666666666",
    "email": "mariagar@example.com",
    "linkedin": "mariagar",
    "github": "mariagar",
    "photo": "data:image/png;base64,2342ba...",
    "skills": ["HTML", "Sass", "JavaScript"]
    }

Formato de respuestas
La respuesta que da el API tiene el siguiente formato si todo ha ido bien:
    {
    "success": true,
    "cardURL": "https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/${cardId}"
    }


Si hay algún error, la respuesta tiene esta pinta:
    {
    "success": false,
    "error": "Error description"
    }


