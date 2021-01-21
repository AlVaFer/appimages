
# appimages Alvaro Vallejos

Notas para evaluadores:

Desarrollé la aplicación según lo que entendí como más lógico, es decir, desde un frontend que enviara en un submit una imagen y se guardara esa imagen y dos copias cada una en una carpeta con diferentes tamaños (variando anchura y ajustando proporcionalmente el alto a tal anchura). La subida la gestioné con multer y las alteraciones de las imágenes con Jimp. Al no encontrar rápidamente librerías para hallar la resolución de una imagen, la ajusté  con Jimp y la guardé con ese valor. La gestión de la base de datos con mongoose y he aplicado Typescript.

Una vez guardada la imagen se procedería a guardar los datos en la base de datos.

Al ver "actualizaciones" imaginé que /task/:taskId permitiría borrar primero la imagen y luego actualizarla, es decir, volver a subir otra borrando las anteriores.

No comprendí el sentido del modelo Tasks, concretamente "el estado de las tareas del procesado". 

Con más tiempo y resolviendo dudas habría podido realizar la tarea.

Saludos.




