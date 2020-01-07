function wakeDog(dogName, dogBreed) {
    const wake = `Wake ${dogName} the ${dogBreed}`
    return wake
}

function leashDog(dogName, dogBreed) {
    const leash = `Leash ${dogName} the ${dogBreed}`
    return leash
}

function walkToPark(dogName, dogBreed) {
    const walkP = `Walk to the park with ${dogName} the ${dogBreed}`
    return walkP
}

function throwFrisbee(dogName, dogBreed) {
    const fris = `Throw the frisbee for ${dogName} the ${dogBreed}`
    return fris
}

function walkHome(dogName, dogBreed) {
    const walkH = `Walk home with ${dogName} the ${dogBreed}`
    return walkH
}

function unleashDog(dogName, dogBreed) {
    const unleash = `Unleash ${dogName} the ${dogBreed}`
    return unleash
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]
const routineWithArgs = []

function exerciseDog(dogName, dogBreed) {
    for (let i = 0; i < routine.length; i++) {
        routineWithArgs.push(routine[i](dogName, dogBreed));
    }
    return routineWithArgs
}