
let dogName = "Goliath"
let dogBreed = "Mabari"


let exercise = [
    function wakeDog(dogName, dogBreed) {
        console.log('Wake ${dogName} the ${dogBreed}')
    },

    function leashDog(dogName, dogBreed) {
        console.log('Leash ${dogName} the ${dogBreed}')
    },

    function walkToPark(dogName, dogBreed) {
        console.log('Walk ${dogName} the ${dogBreed} to the park')
    },

    function throwFrisbee(dogName, dogBreed) {
        console.log('Throw frisbee for ${dogName} the ${dogBreed}')
    },

    function walkHome(dogName, dogBreed) {
        console.log('Walk ${dogName} the ${dogBreed} home')
    },

    function unleashDog(dogName, dogBreed) {
        console.log('Unleash ${dogName} the ${dogBreed}')
    }

]

function exerciseDog(dogName, dogBreed) {
   return exercise.map(dogName, dogBreed)
}

done()