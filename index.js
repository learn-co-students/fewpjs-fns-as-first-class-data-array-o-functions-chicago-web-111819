function wakeDog(dogName, dogBreed) {
    const wake = `Wake ${dogName} the ${dogBreed}`;
    console.log(wake);
    return wake;
}

function leashDog(dogName, dogBreed) {
    const leash = `Leash ${dogName} the ${dogBreed}`;
    console.log(leash);
    return leash;
}

function walkToPark(dogName, dogBreed) {
    const walk = `Walk to the park with ${dogName} the ${dogBreed}`;
    console.log(walk);
    return walk;
}

function throwFrisbee(dogName, dogBreed) {
    const frisbee = `Throw the frisbee for ${dogName} the ${dogBreed}`;
    console.log(frisbee);
    return frisbee;
}

function walkHome(dogName, dogBreed) {
    const walkhome = `Walk home with ${dogName} the ${dogBreed}`;
    console.log(walkhome);
    return walkhome;
}

function unleashDog(dogName, dogBreed) {
    const unleash = `Unleash ${dogName} the ${dogBreed}`;
    console.log(unleash);
    return unleash;
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

function exerciseDog(dogName, dogBreed) {
    const returnArray = []
    for (var i = 0; i < routine.length; i++) {
        let result = routine[i](dogName, dogBreed);
        returnArray.push(result);
    }
    return returnArray;
}