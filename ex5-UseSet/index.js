let animalName;
let animals = ["monkey", "cat", "tiger", "elephant", "sheep"];
let animalManager = new Set(animals);
let addError = document.getElementById('add-error');
let existMessage = document.getElementById('exist-message');
let listAnimals = document.querySelector('.list-animals');

// modify animal name for any input
function promtAnimal(obj) {
    animalName = obj.value;
}

// add animal
function add() {
    addAnimal(animalName);
    console.log(animalManager);
}

// check existence
function checkExist() {
    if (isExist(animalName)) {
        existMessage.innerText = "Animal already existed";
    } else {
        existMessage.innerText = "Animal not found";
    }
}

// check animal existence
function isExist(animalName) {
    return animalManager.has(animalName);
}

// add animal to the manager
function addAnimal(animalName) {
    if (!isExist(animalName)) {
        animalManager.add(animalName);
        addError.innerText = "";
    } else {
        addError.innerText = "Animal already existed";
    }
}

// delete animal from the manager
function deleteAnimal(animalName) {
    if (!isExist(animalName)) {
        console.log('Animal not found');
    } else {
        animalManager.delete(animalName);
    }
}

// print all animals
function showAllAnimals() {
    let animalArr = [...animalManager];
    let allAnimals = [];
    for (const animal of animalArr) {
        allAnimals.push(`
            <li>${animal}</li>
        `)
    }
    listAnimals.innerHTML = allAnimals.join('')
}