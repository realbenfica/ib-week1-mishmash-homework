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

function addSomePromises(somePromise) {
    somePromise
        .then(function (value) {
            return value;
    })
}

module.exports = { giveItBackLater, addSomePromises, promiseToGiveItBackLater }