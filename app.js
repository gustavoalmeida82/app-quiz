const form = document.querySelector('form')
const button = document.querySelector('button')
const paragraph = document.createElement('p')

const correctAnswers = ['B', 'A', 'C', 'D']

const getUserScore = answers => {
    let score = 0

    answers.forEach((userAnswer, index) => {
        const isAnswerCorrect = userAnswer === correctAnswers[index]
        
        if (isAnswerCorrect) {
            score += 25
        }            
    })

    return score
}

const insertParagraphIntoDOM = score => {
    paragraph.textContent = `A sua pontuação foi ${score}`
    paragraph.classList.add('text-center')
    button.insertAdjacentElement('beforebegin', paragraph)
}

const handleSubmit = event => {
    event.preventDefault()    

    const userAnswers = [
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value
    ]    

    const userScore = getUserScore(userAnswers)

    insertParagraphIntoDOM(userScore)
}

form.addEventListener('submit', handleSubmit)

