// console.log("Wake Byron the poodle");
// console.log("Leash Byron the poodle");
// console.log("Walk to the park with Byron the poodle");
// console.log("Throw the frisbee for Byron the poodle");
// console.log("Walk home with Byron the poodle");
// console.log("Unleash Byron the poodle");

// abstract actions
function perform(action, dogName, dogBreed) {
  return `${action} ${dogName} the ${dogBreed}`;
}

function wakeDog(dogName, dogBreed) {
  let str = perform("Wake", dogName, dogBreed);
  console.log(str);
  return str;
}

function leashDog(dogName, dogBreed) {
  let str = perform("Leash", dogName, dogBreed);
  console.log(str);
  return str;
}

function walkToPark(dogName, dogBreed) {
  let str = perform("Walk to the park with", dogName, dogBreed);
  console.log(str);
  return str;
}

function throwFrisbee(dogName, dogBreed) {
  let str = perform("Throw the frisbee for", dogName, dogBreed);
  console.log(str);
  return str;
}

function walkHome(dogName, dogBreed) {
  let str = perform("Walk home with", dogName, dogBreed);
  console.log(str);
  return str;
}

function unleashDog(dogName, dogBreed) {
  let str = perform("Unleash", dogName, dogBreed);
  console.log(str);
  return str;
}

let routine = [
  wakeDog,
  leashDog,
  walkToPark,
  throwFrisbee,
  walkHome,
  unleashDog
];

function exerciseDog(dogName, dogBreed) {
  let dogExercises = [];
  for (let i = 0; i < routine.length; i++) {
    dogExercises.push(routine[i](dogName, dogBreed));
  }
  return dogExercises;
}

