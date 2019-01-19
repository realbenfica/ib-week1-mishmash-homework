function giveItBackLater(value, callback) {
    function loadComplete() {
        callback(value)
    }
    setTimeout(loadComplete, 200)
}

function promiseToGiveItBackLater(value) {
    return new Promise((resolve) => {       
        return setTimeout(() => resolve(value), giveItBackLater)  
    })
}

// Unfortunately I could not get the following section to work.
// This is as far as I could get chaining the promises and implementing a fulfillment and 
// rejection handlers. I could not make the reject parameter work in the function addSomePromises,
// and the timeout does not seem to feed in from the callback function giveItBackLater.
// My attempt is commented out.
function addSomePromises(somePromise) {
    return new Promise((resolve) => {  
        // if(resolve) {      
            return setTimeout(() => resolve(somePromise), promiseToGiveItBackLater)   
        // }  
        // reject(value) 
    })   
}

addSomePromises()
    .then(value => console.log(value + value))
    .catch(value => console.log(value + value + value))

module.exports = { giveItBackLater, addSomePromises, promiseToGiveItBackLater }