# ProyectoFinal_LostInSpace

░▒▓█▓▒░ ░▒▓██████▓▒░ ░▒▓███████▓▒░ ░▒▓████████▓▒░ ░▒▓█▓▒░ ░▒▓███████▓▒░  
░▒▓█▓▒░ ░▒▓█▓▒░░▒▓█▓▒░ ░▒▓█▓▒░ ░▒▓█▓▒░ ░▒▓█▓▒░ ░▒▓█▓▒░░▒▓█▓▒░
░▒▓█▓▒░ ░▒▓█▓▒░░▒▓█▓▒░ ░▒▓█▓▒░ ░▒▓█▓▒░ ░▒▓█▓▒░ ░▒▓█▓▒░░▒▓█▓▒░
░▒▓█▓▒░ ░▒▓█▓▒░░▒▓█▓▒░ ░▒▓██████▓▒░ ░▒▓█▓▒░ ░▒▓█▓▒░ ░▒▓█▓▒░░▒▓█▓▒░
░▒▓█▓▒░ ░▒▓█▓▒░░▒▓█▓▒░ ░▒▓█▓▒░ ░▒▓█▓▒░ ░▒▓█▓▒░ ░▒▓█▓▒░░▒▓█▓▒░
░▒▓█▓▒░ ░▒▓█▓▒░░▒▓█▓▒░ ░▒▓█▓▒░ ░▒▓█▓▒░ ░▒▓█▓▒░ ░▒▓█▓▒░░▒▓█▓▒░
░▒▓████████▓▒░ ░▒▓██████▓▒░ ░▒▓███████▓▒░ ░▒▓█▓▒░ ░▒▓█▓▒░ ░▒▓█▓▒░░▒▓█▓▒░

░▒▓███████▓▒░ ░▒▓███████▓▒░ ░▒▓██████▓▒░ ░▒▓██████▓▒░ ░▒▓████████▓▒░
░▒▓█▓▒░ ░▒▓█▓▒░░▒▓█▓▒░ ░▒▓█▓▒░░▒▓█▓▒░ ░▒▓█▓▒░░▒▓█▓▒░ ░▒▓█▓▒░  
░▒▓█▓▒░ ░▒▓█▓▒░░▒▓█▓▒░ ░▒▓█▓▒░░▒▓█▓▒░ ░▒▓█▓▒░ ░▒▓█▓▒░  
 ░▒▓██████▓▒░ ░▒▓███████▓▒░ ░▒▓████████▓▒░ ░▒▓█▓▒░ ░▒▓██████▓▒░  
 ░▒▓█▓▒░ ░▒▓█▓▒░ ░▒▓█▓▒░░▒▓█▓▒░ ░▒▓█▓▒░ ░▒▓█▓▒░  
 ░▒▓█▓▒░ ░▒▓█▓▒░ ░▒▓█▓▒░░▒▓█▓▒░ ░▒▓█▓▒░░▒▓█▓▒░ ░▒▓█▓▒░  
░▒▓███████▓▒░ ░▒▓█▓▒░ ░▒▓█▓▒░░▒▓█▓▒░ ░▒▓██████▓▒░ ░▒▓████████▓▒░

## Lost in space

El siguiente proyecto tiene como finalidad el desarrollo de un juego en 2 dimensiones. el juego se trata de una nave espacial que queda atrapada en medio del espacio y lo que queda es sobrevivir a las oleada de naves espaciales enemigas que trataran destruirte, para poder moverte por el espacio usarás tus manos en distintas posiciones para dirigir tu nave, disparar, etc, cada mano hace una acción distinta, el juego contendrá varias ventajas para tu nave a medida que más y más enemigos llegan a la escena.

La intención de este proyecto es crear una manera fuera de lo normal de interactuar con un videojuego ya que el modelo tradicional de juego siempre ha sido el controlar acciones por medio de botones de un control, desaprovechando o no dandole mucha importancia a otras tecnologías que puedan mostrar interesantes formas de jugar, haciendo que la coordinación entre las 2 manos y el movimiento de la nave sean clave para poder llegar lejos dentro del mismo.

## Actualización final

### Se trató de hacer el juego con los siguientes elementos:

-HandPose Detection
-Pose Classifier with PoseNet and ml5.neuralNetwork(), pero orientado al uso de las manos.
-Juego mayoritariamente hecho con los recursos dados por copilot
-Sprites de nave, enemigos y escenarios hecho por mí

### Sin embargo hubo muchos problemas al momento de hacer dicho proyecto:

Las librerias correspondientes para HandPose Detection y para entrenar dichas poses (Neural Network) entraban en conflicto dentro del html, no se pudo encontrar algún otro tipo de libreria que aceptara a ambas, adicionalmente no se pudo usar las funciones para detectar las poses de manos mientras que en el caso del cuerpo no tiena problemas. Se trató de reemplazarlos por "Teachable Machine" sin embargo solo reconoce un objeto en la camara y no 2, como se tenía planeado.

La principal idea en la interfaze para el juego era dividir la pantalla 3 partes horizontales, en las que las pantallas de los extremos iban a mostrar el video de la cámara, uno para cada mano, mientras que la del medio iba a reproducir el juego.Sin embargo al momento de modificar el html y el js del juego hubo problemas aún desconocidos de la razón de la ausencia del juego en el recuadro del medio.

Debido a buscar soluciones u otras opciones para la correción de estos problemas, sin una solución aún, no se logró completar este proyecto a tiempo o tener alguna función del proyecto minimamente utilizable.
