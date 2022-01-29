const questions = [
    "O que aprendi hoje?",
    "O que me deixou aborrecido? E o que eu poderia fazer para melhorar?",
    "O que me deixou feliz hoje?",
    "Quantas pessoas eu ajudei hoje?",
]

const ask = ( index = 0 ) => {
    process.stdout.write("\n\n" + questions[index] + " > ")
}

ask()

const answers = []

process.stdin.on("data", data => {
    answers.push(data.toString().trim())
    if (answers.length < questions.length) {
        ask(answers.length)
    } else {
        //console.log(answers)
        process.exit()
    }
})

process.on('exit', () => {
    console.log(`
    Bacana manin!
    
    O que você aprendeu hoje foi:
    ${answers[0]}
    
    O que te deixou aborrecido hoje e o que você poderia fazer para melhorar é:
    ${answers[1]}
    
    O que te deixou feliz hoje foi:
    ${answers[2]}
    
    As pessoas que você ajudou foram:
    ${answers[3]}`)
})