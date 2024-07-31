//1️⃣ Crea una función que salude por consola a  la persona que le indiques por parámetro.

function greet(name) {
    console.log(`Hello ${name} 🤙`);
}

//2️⃣ Crea este array y consulta sus posiciones en este orden 9,0,7,2,6,3,1,4,10,5,8.

//const mensajeOculto = ['U',' ','N','S','D','A', 'O', 'E', 'S','B','I' ]

const hiddenMessage = ['U', ' ', 'N', 'S', 'D', 'A', 'O', 'E', 'S', 'B', 'I'];

const positions = [9, 0, 7, 2, 6, 3, 1, 4, 10, 5, 8];

//consultando posiciones manualmente

console.log(hiddenMessage[positions[0]]+ hiddenMessage[positions[1]]+ hiddenMessage[positions[2]]+ hiddenMessage[positions[3]]+ hiddenMessage[positions[4]]+ hiddenMessage[positions[5]]+ hiddenMessage[positions[6]]+ hiddenMessage[positions[7]]+ hiddenMessage[positions[8]]+ hiddenMessage[positions[9]]+hiddenMessage[positions[10]]);

//utilizando bucle for
for (let i = 0; i < positions.length; i++) {
    console.log(hiddenMessage[positions[i]]);
}

//👆 Esta opción enseña el mensaje separado por cada letra, si queremos ponerlo en una sola línea debemos ir guardando cada letra en una misma variable por cada vuelta y después pintarla en consola, lo vemos aquí abajo 👇


let messageWithFor = '';

for (let i = 0; i < positions.length; i++) {
    messageWithFor = messageWithFor + hiddenMessage[positions[i]];
}
console.log(messageWithFor);

//utilizando el método forEach
let messageWithForEach = '';

positions.forEach(position => {
    messageWithForEach = messageWithForEach + hiddenMessage[position];
});
console.log(messageWithForEach);


//3️⃣ Con ayuda de los métodos que disponen los Arrays en Js ordena este listado de planetas y elimina los que no lo sean🪐

//const listadoPlanetas = ['Narnia','Venus','Tierra','Marte','Júpiter','Saturno','Urano','Neptuno','Plutón', 'Mercurio' ]

const planetList = ['Narnia', 'Venus', 'Tierra', 'Marte', 'Júpiter', 'Saturno', 'Urano', 'Neptuno', 'Plutón', 'Mercurio'];

//eliminamos Narnia
planetList.shift();
//eliminamos Mercurio y lo guardamos en una variable, esta es la clave⭐ que aprenderas en esta kata, los métodos de array tienen devuelven cosas.

const Mercury = planetList.pop();
planetList.unshift(Mercury);

console.log(planetList);

//bueno puedes elimar también plutón si es que no lo consideras un planeta, pero...💔