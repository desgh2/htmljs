function elementById(id) {
    return document.getElementById(id);
}

var sun = new Planet(2, 'sun', 'Солнце', './images/sun.png', 300, 750, 250, 250, true);
var mercury = new Planet(3, 'planet', 'Меркурий', './images/mercury.png', 400, 1000, 50, 50, true);
var planet = new Planet(1, 'planet', 'Земля', './images/earth.png', 550, 650, 100, 100, true);

/**
 * Создание экземпляров класса Planet
 */
planet.render();
sun.render();
mercury.render();


var star = new Stars(500);
star.render();
