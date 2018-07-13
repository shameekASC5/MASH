function random(num) {
    const randomNumber = Math.random();
    const times = randomNumber * num;
    const final = Math.floor(times);
    return final;
}

function mash () {
    return `You will live in a ${getHome()}, have ${getChildrenCount()} kids, drive a ${getCar()}, and earn ${getSalary()} a year.`;
}

function getHome () {
    const array = ["Mansion", "Apartment", "Shack", "House", "Garbage barge"];
    // if user input is present add to array and continue to randomize it;
    if (process.argv[2]) {
        array.push(process.argv[2]);
    } 
    const final = random(array.length);
    //console.log(array[final]);
    return array[final];
}

function getChildrenCount () {
    let numOfChildren = random(101);
    let calculatedChance = random(2);
    //the following represents a 50/50 chance of the returning the random number or the users input;
    if (calculatedChance == 1) {
        if (process.argv[3]) {
            return process.argv[3];
            } 
        return numOfChildren;
    }
    return numOfChildren;
}

function getCar () {
    const carArray = ["Tesla Model S", "BMW 3 Series", "Dodge Challenger", "Minivan", "Honda Civic"];
    // if user input is present add to array and continue to randomize it;
    if (process.argv[4]) {
        carArray.push(process.argv[4]);
    }
    let randomCar = random(carArray.length);
    return carArray[randomCar];
}

function getSalary() {
    salaryArray = ["155,000", "475,000", "45,000", "-75,000", "-2,000", "500,000"];
    let randomSalary = random(salaryArray.length);
    return salaryArray[randomSalary];
}

console.log(mash());
