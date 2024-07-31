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
