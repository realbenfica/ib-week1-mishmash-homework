
function groupAdultsByAgeRange (people)  {
    return people
        // Filter out younger than 18
        .filter(({age}) => age >= 18)

        // I assume the last part of the exercise should fit between the filter and the reduce
        // that are already working, but I couldn't quite get the steps.
        // I tried to use a reduce function to 
        // .reduce((accumulator,currentValue) => {
        //     if (accumulator.age =< 20) {
        //         return currentValue
        //     }
        // }, {'20 and younger': })
        
        // This attempt would give me an array with objects with the age value of 18-19-20,
        // but it also would filter out all the other objects. 
        // .filter(({age}) => age <= 20)
        // .reduce((accumulator, currentValue) => accumulator + currentValue, {'20 and younger': })

        // Empty input returns empty object
        .reduce((accumulator, currentValue) => accumulator + currentValue, {})
}

module.exports.groupAdultsByAgeRange = groupAdultsByAgeRange