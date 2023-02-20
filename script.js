// console.log('Hi')

const wrapper = document.getElementById("wrapper");


let prev = 0;
let next ;

setInterval(() => {
    let index = parseInt(Math.random() * combinations.length)
    next = index

    while (next===prev){
        index = parseInt(Math.random() * combinations.length)
        next=index
    }

        const combinaton = combinations[index]
    console.log(combinaton)
    wrapper.dataset.configuration = combinaton.configuration
    wrapper.dataset.roundness = combinaton.roundness
    prev = index
}, 2000)


const combinations = [
    { configuration: 1, roundness: 1 },
    { configuration: 1, roundness: 2 },
    { configuration: 1, roundness: 4 },
    { configuration: 2, roundness: 2 },
    { configuration: 2, roundness: 1 },
    // {configuration:3,roundness:3},
]
console.log(parseInt(Math.random() * combinations.length))
// console.log()