// process.argv enthält übergebenen Argumente in Array in dieser Form: [pfad zu Node, pfad zum programm, ab hier die Argumente]
const myArg = process.argv

// console.log('Das sind die Argumente: ', myArg)

// const arrayOhnePfade = process.argv.slice(2)
// console.log(arrayOhnePfade)

// const arrayNum = process.argv.slice(3)
// console.log(arrayNum)

// Destructuring um Werte aus Array auszulesen:
let [, , operand, ...numbers] = process.argv
console.log(`Destructuring funktioniert:\n Operand: ${operand} \n Numbers: ${numbers}`)


// Aufgabe 4 überprüfen ob alle Elemente im Array Zahlen sind
let isNumber = true    
numbers.forEach((el) => {
    
    // isNaN() überprüft ob Element NaN ist - isNumber unsere Variable die solange true ist bis eine nicht Zahl gefunden wurde, bei einer zweiten NaN soll das if nicht nochmal starten
    if(isNaN(el) && isNumber){
        // throw new Error('Das ist ein Error, --> Error sollten immer aufgefangen werden, sonst Absturz!')
        
        // Variable umstellen wenn eine nicht Zahl im Array ist 
        isNumber = !isNumber
    }
})

if (operand === 'sum' && isNumber){
    
    // längere Variante mit for Schleife
    // let sum = 0;
    // for (let i=0; i<numbers.length; i++){
    //     sum = sum + Number(numbers[i])
    // }
    
    // kürzere Variante mit reduce
    const sum = numbers.reduce((acc, curr) => acc += Number(curr), 0)
    
    // Ergebnis ausgeben
    console.log('Die Summe ist: ',sum)
} else if (operand === 'avg' && isNumber){
    // Für Durchschnitt erneut SUmme ausrechnen
    const sum = numbers.reduce((acc, curr) => acc += Number(curr), 0)
    // Diese Summe durch Anzahl der Zahlen teilen
    const result = sum /numbers.length
    console.log('Average: ', result)
} else {
    isNumber ? console.log('Sorry what? Wrong Input: ', operand) : console.log('Das ist keine korrekte Zahlenreihe')
}



