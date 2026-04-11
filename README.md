# FrontEndPracticas2026
Practica 1
Al principio conseguí que aparecieran por pantalla todos los personajes de la primera página. Quería coger con otro .the todos los datos de los planetas con un promise.All por que es un array de URLs y ponerlo en un set para que no hubiera planetas repetidos(malgasto de almacenamiento). Con cada URL del set se hace un fetch y se tipa con Planeta. 

Con esto conseguimos Personajes y Planetas, para pasarlo al componente se compara que URL del homeworld con el URL del planeta, para asi pasarle al componente el Peronaje y su planeta cogido del array.

Estoy teniendo un problema, por que aun que haciendo un console.log() si me saca bien todo y se ve que tengo mis personajes y mis planetas, no se por que no me muestra nada en la pagina una vez se lo paso.
