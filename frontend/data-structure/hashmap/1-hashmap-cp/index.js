function ageDistribution(persons) {
    let result = new Map();
    // TODO: answer here
    for (let i = 0; i < persons.length; i++) {
        let age = persons[i].age
        if (result.has(age)) {
            let ageCounter = result.get(age) + 1
            result.set(age, ageCounter)
        } else {
            result.set(age, 1)
        }
    }
    return result
}

function groupByAge(persons) {
    let result = new Map();
    // TODO: answer here
    for (let i = 0; i < persons.length; i++) {
        let age = persons[i].age 
        if (result.has(age)) {
            // age = 21
            let resultArray = result.get(age) // [{name: "Bob", age: 21}]
            resultArray.push(persons[i]) // resultArray = [{name: "Bob", age: 21}, { name: "Ann", age: 21 }]
            result.set(age, resultArray) // 21 => [{name: "Bob", age: 21}, { name: "Ann", age: 21 }]
        } else {
            result.set(age, [persons[i]])
            //loop 1 : 21 => [{name: "Bob", age: 21}]
            //loop 2 : 28 => [{name: "Sam", age: 28}]
        }
    }
    return result
}

let people = [
    { name: "Bob", age: 21 },
    { name: "Sam", age: 28 },
    { name: "Ann", age: 21 },
    { name: "Joe", age: 22 },
    { name: "Ben", age: 28 },
]

console.log(ageDistribution(people));
console.log(groupByAge(people));

module.exports = {
    ageDistribution, groupByAge
}