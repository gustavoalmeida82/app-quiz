const form = document.querySelector('form')
const button = document.querySelector('button')
const paragraph = document.createElement('p')

const correctAnswers = ['B', 'A', 'C', 'D']

const getUserScore = answers => {
    let points = 0

    answers.forEach((userAnswer, index) => {
        const isAnswerCorrect = userAnswer === correctAnswers[index]
        
        if (isAnswerCorrect) {
            points += 25
        }            
    })

    return points
}

const insertParagraphIntoDOM = points => {
    paragraph.textContent = `A sua pontuação foi ${points}`
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

    const userPoints = getUserScore(userAnswers)

    insertParagraphIntoDOM(userPoints)
}

form.addEventListener('submit', handleSubmit)

