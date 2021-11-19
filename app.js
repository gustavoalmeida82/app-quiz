const form = document.querySelector('form')
const finalResult = document.querySelector('.result')

const correctAnswers = ['B', 'A', 'C', 'D']

const getUserScore = userAnswers => {
    let score = 0

    userAnswers.forEach((userAnswer, index) => {
        const isAnswerCorrect = userAnswer === correctAnswers[index]
        
        if (isAnswerCorrect) {
            score += 25
        }            
    })

    return score
}

const showScore = score => {
    scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })

    finalResult.classList.remove('d-none')

    let counter = 0

    const animateScore = () => {
        if (counter === score) {
            clearInterval(timer)
        }

        finalResult.querySelector('span').textContent = `${counter}%`
        counter++
    }

    const timer = setInterval(animateScore, 20)
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

    showScore(userScore)
}

form.addEventListener('submit', handleSubmit)

