/*
Suppose that you are working in a small town administration, and you're in charge of two town elements:
1. Parks 
2. Streets

It's a small town, so right now there are only 3 parks and 4 streets. All parks and streets. All parks and streets have a name and a build year. 

At an end-of-year meeting, your boss wants a final report with the following: 
1. Tree density of each park in the town (formula: number of trees / park area)
2. Average age of each town's park (formula: sum of all ages / number of parks)
3. The name of the park that as more than 1000 trees 
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal 

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, map, arrow functions, destructuring, etc.

*/



// PARKS
class Park {
    constructor(name, establishYear, area=undefined, numOfTrees=undefined) {
        this.name = name;
        this.age = new Date().getFullYear() - establishYear;
        this.density = numOfTrees / area;
        this.numOfTrees = numOfTrees;
    }
}

function writeParkReport(...parks) {
    console.log(`-----PARKS REPORT-----`);
    
    // average age report
    let sumAge = 0;
    parks.forEach(cur => sumAge += cur.age);
    const averageAge = sumAge / parks.length;
    console.log(`Our ${parks.length} parks have an average age of ${Math.round(averageAge)} years.`);
    
    // tree density report
    parks.forEach(cur => console.log(`${cur.name} has a tree density of ${cur.density} trees per square km.`));
    
    // more than 1000 trees report
    parks.forEach(cur => {
        if (cur.numOfTrees > 1000) {
            console.log(`${cur.name} has more than 1000 trees.`);
        }
    });
}

const green = new Park('Green park', 1746, 0.1897, 204);
const national = new Park('National park', 1860, 0.8599, 1050);
const oak = new Park('Oak park', 1835, 0.3372, 800);


writeParkReport(green, national, oak);


//STREETS
class Street {
    constructor(name, establishYear, length, classification = 'normal') {
        this.name = name;
        this.establishYear = establishYear;
        this.length = length;
        this.classification = classification;
    }
}

function writeStreetReport(...streets) {
    console.log(`-----STREETS REPORT-----`);
    
    // total and average length
    let totalLength = 0;
    streets.forEach(cur => totalLength += cur.length);
    const average = totalLength / streets.length;
    console.log(`Our ${streets.length} streets have a total length of ${totalLength} km, with an average of ${average} km.`);
    
    // size classification report
    streets.forEach(findClass);
    streets.forEach(cur => console.log(`${cur.name}, built in ${cur.establishYear}, is a ${cur.classification} street.`));
    
}

function findClass(street) {
    if (street.length <= 5) {
        street.classification = 'small';
    } else if (street.length > 5 && street.length <= 10) {
        street.classification = 'normal';
    } else if (street.length > 10 && street.length <= 15) {
        street.classification = 'big';
    } else if (street.length > 15) {
        street.classification = 'huge';
    }
}

const ocean = new Street('Ocean Avenue', 1999, 15);
const evergreen = new Street('Evergreen Street', 2008, 5);
const $4th = new Street('4th Street', 2015, 10);
const sunset = new Street('Sunset Boulevard', 1982, 20);

writeStreetReport(ocean, evergreen, $4th, sunset);

































































































