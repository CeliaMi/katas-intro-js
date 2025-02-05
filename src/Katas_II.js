//1️⃣ Crea una función para felicitar el cumpleaños que pueda darte respuesta en tres idiomas ( español, inglés y Alemán) y que tenga una respuesta con iconos, en el caso de que no sea ninguno de los tres idiomas🎂.

// ¡Feliz cumpleaños Pepita!
// Happy birthday Pepita!
// Alles Gute zum Geburtstag, Pepita!


function congratulateBirthday(name, language) {
    if (language === 'es') {
        console.log(`¡Feliz cumpleaños ${name}!`);
    } else if (language === 'en') {
        console.log(`Happy birthday ${name}!`);
    } else if (language === 'de') {
        console.log(`Alles Gute zum Geburtstag, ${name}!`);
    } else {
        console.log(`🎂🎂🎂`);
    }
}

congratulateBirthday('Pepita', 'es'); 
congratulateBirthday('maria');

//2️⃣ Crea una función que sea un dado, es decir, que devuelva un número aleatorio de 1 al 6 🎲

    function dado() {
        return Math.floor(Math.random() * 6) + 1;
    }


//3️⃣Crea una función que devuelva la tabla de múltiplicar completa del número que le indiquemos ✍

function multiplicationTable(table_number) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${table_number} x ${i} = ${table_number * i}`);
    }
}

//llamamos nuestra función para que haga la tabla del 3
multiplicationTable(3);


//En este ejemplo hacemos una tabla de multiplicar con respuesta en una sola línea, es decir, que nos devuelve un único string con toda la tabla de multiplicar y no un console.log por cada multiplicación como pasaba en el ejemplo anterior
function multiplicationTableOneString(table_number) {
    let result = '';
    
    for (let i = 1; i <= 10; i++) {
        result += `${table_number} x ${i} = ${table_number * i}\n`;
    }
    
    return result;
}

//llamamos nuestra función para que haga la tabla del 3 en un solo String
console.log(multiplicationTableOneString(3));

// 4️⃣Crea una función que sea un contador de las ovejas que están dormidas 🐑


const sleepSheep = [
    true,  true,  true, false,
    true,  true,  true,  true,
    true,  false, true,  false,
    true,  false, false, true,
    true,  true,  true,  true,
    false, false, true,  true, false
  ];
  
  function countSleepingSheep(array_of_sheep) {
    // inicializamos el contador a 0, es decir tenemos cero ovejas dormidas
    let counter = 0;
    for (let i = 0; i < array_of_sheep.length; i++) {
      if (array_of_sheep[i] === true) {
        // si la oveja está dormida, incrementamos el contador a 1 más
        counter++;
      }
    }
    // devolvemos la suma de las ovejas dormidas
    return counter;
  }
  
  // llamamos a nuestra función pasandole por parámetro nuestro array de ovejas dormidas
  console.log(countSleepingSheep(sleepSheep))


  // este código se puede hacer de manera más sencilla con el método filter, un método moderno de Js.

  function modernCountSleepingSheep(array_of_sheep) {
    return array_of_sheep.filter(sheep => sheep === true).length;
  }
  
  // llamamos a nuestra función pasandole por parámetro nuestro array de ovejas dormidas
  console.log(modernCountSleepingSheep(sleepSheep));

//5️⃣ Crea un objeto planeta tierra, que tenga las siguientes propiedades: su distancia del sol, sus vecinos (especificando que planeta tiene delante y cuál detrás), una lista de su composición atmosférica, y que también tenga un método saludar que devuelva en consola Hola soy el planeta tierra 🌍

const earth = {
    distanceFromSun: 150000000,
    neighbors: {
        front: 'Venus',
        back: 'Mars'
    },
    atmosphericComposition: ['Nitrogen', 'Oxygen', 'Argon'],
    greet: function() {
        console.log('Hola soy el planeta tierra 🌍');
    }
};

earth.greet()

//6️⃣ Basándote en la especificaciones del objeto anterior crea la clase planeta y haz instancias de, al menos dos planetas, más abajo te especifico las propiedades: 🪐🐱‍🚀


class Planet {
    constructor(distanceFromSun, neighbors, atmosphericComposition) {
        this.distanceFromSun = distanceFromSun;
        this.neighbors = neighbors;
        this.atmosphericComposition = atmosphericComposition;
    }

    greet() {
        console.log('Hola soy el planeta tierra 🌍');
    }
}

const venus = new Planet(108000000, { front: 'Mercury', back: 'Earth' }, ['Carbon Dioxide', 'Nitrogen']);

const mars = new Planet(228000000, { front: 'Earth', back: 'Jupiter' }, ['Carbon Dioxide', 'Nitrogen', 'Argon']);

const jupiter = new Planet(778000000, { front: 'Mars', back: 'Saturn' }, ['Hydrogen', 'Helium']);

