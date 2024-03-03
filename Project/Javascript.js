document.addEventListener("DOMContentLoaded", function() {
    const questions = [
        {
            question: "What is the determinant of a 2x2 matrix?",
            options: ["2", "4", "6", "8"],
            answer: 1 // Index of the correct answer in the options array
        },
        {
            question: "What is the rank of the zero matrix?",
            options: ["0", "1", "2", "3"],
            answer: 0
        },
        {
            question: "What is the inverse of an identity matrix?",
            options: ["Identity matrix", "Zero matrix", "Transpose matrix", "Square matrix"],
            answer: 0
        },
        {
            question: "What does the eigenvalue represent?",
            options: ["Determinant of a matrix", "Trace of a matrix", "Scalar by which an eigenvector is scaled", "Inverse of a matrix"],
            answer: 2
        },
        {
            question: "What is the result of multiplying a matrix by its inverse?",
            options: ["Identity matrix", "Zero matrix", "Original matrix", "Transpose matrix"],
            answer: 0
        }
    ];

    let currentQuestion = 0;
    let score = 0;

    function loadQuestion() {
        const questionElement = document.getElementById('question');
        const optionsElement = document.getElementById('options');
        const progressBar = document.getElementById('progress-bar');

        if (currentQuestion >= questions.length) {
            questionElement.textContent = `Quiz completed! Your total score is ${score} out of 20.`;
            optionsElement.innerHTML = '';
            progressBar.style.width = '100%';
            return;
        }

        const currentQuizData = questions[currentQuestion];

        questionElement.textContent = `${currentQuestion + 1}. ${currentQuizData.question}`;

        optionsElement.innerHTML = '';
        currentQuizData.options.forEach((option, index) => {
            const optionElement = document.createElement('button');
            optionElement.textContent = option;
            optionElement.classList.add('option');
            optionElement.addEventListener('click', () => checkAnswer(index));
            optionsElement.appendChild(optionElement);
        });

        const progress = ((currentQuestion + 1) / questions.length) * 100;
        progressBar.style.width = `${progress}%`;
    }

    function checkAnswer(selectedOption) {
        const currentQuizData = questions[currentQuestion];
        if (selectedOption === currentQuizData.answer) {
            score += 4; // Add 4 points for correct answer
        }

        currentQuestion++; // Move to the next question
        loadQuestion();
    }

    loadQuestion();
});
