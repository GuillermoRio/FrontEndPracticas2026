# FrontEndPracticas2026
Practica 1
Al principio conseguí que aparecieran por pantalla todos los personajes de la primera página. Quería coger con otro .the todos los datos de los planetas con un promise.All por que es un array de URLs y ponerlo en un set para que no hubiera planetas repetidos(malgasto de almacenamiento). Con cada URL del set se hace un fetch y se tipa con Planeta. 

Con esto conseguimos Personajes y Planetas, para pasarlo al componente se compara que URL del homeworld con el URL del planeta, para asi pasarle al componente el Peronaje y su planeta cogido del array.

Estoy teniendo un problema, por que aun que haciendo un console.log() si me saca bien todo y se ve que tengo mis personajes y mis planetas, no se por que no me muestra nada en la pagina una vez se lo paso.

El problema principal es que no estaba haciendo ningún return en el map, por lo que no me devolvía y no mostraba nada por pantalla.

Hice todo en un mismo componente, poniendo los personajes, planetas y vehículos, por lo que tuve que cambiar y hacer cada uno en su componente propio, por lo que me consto un poco pero luego no era dificil para nada.

Para correr este proyecto lo primero que hay que hacer es comprobar si tienes o no node instalado, axios y npm que es el gestor de node(modulo de paquete de node). Una vez con todo instalado, clonarse el repositorio y cuando estes dentro de la carpeta deberia bastar con un npm run dev.
