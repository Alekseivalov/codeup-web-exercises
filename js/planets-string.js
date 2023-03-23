(function(){
    "use strict";

    var planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ];

    /**
     * TODO:
     * Read each console log below, and write some javascript code to perform
     * the step that it describes
     */
planets.unshift('The Sun')

    console.log(planets);
planets.push('Pluto')

    console.log(planets);
    var doneItem = planets.shift()

    console.log(planets);
var removedItem = planets.pop()




var index = planets.indexOf('Earth')
    console.log(index);


   planets.reverse()
console.log(planets)


   planets.sort()
    console.log(planets);

})();