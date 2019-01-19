
function groupAdultsByAgeRange (people)  {
    
    return people
        //filter out younger than 18
        .filter(({age}) => age >= 18)
        
        //I assume the last part of the exercise would go here, but I couldn't quite get the steps
        // first you need 

        //empty input return empty object
        .reduce((accumulator, currentValue) => accumulator + currentValue, {})

        
        
}

module.exports.groupAdultsByAgeRange = groupAdultsByAgeRange