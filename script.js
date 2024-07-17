//initial game setup
let currentLevel = '';
let questions = {
    easy: [],
    medium: [],
    hard: []
};
let questionIndex = 0;
let score = 0;
let timer;
let totalQuestions = 0; 

// Fetch questions from localStorage
const getQuestions = () => {
    const storedQuizData = localStorage.getItem('quizData');
    if (storedQuizData) {
        questions = JSON.parse(storedQuizData);
        console.log("Quiz data fetched successfully:", questions);
    } else {
        console.log("Error while fetching quiz data");
    }
};
getQuestions();

// Function to start quiz
function startQuiz(level) {
    currentLevel = level;
    questionIndex = 0;
    score = 0;
    totalQuestions = questions[currentLevel].length -1; // Set total questions based on selected level
    displayQuestion();
    showQuizSection();
}

// Function to display question
function displayQuestion() {
    let currentQuestion = questions[currentLevel][questionIndex];
    if (currentQuestion) {
        document.getElementById('question').innerHTML = currentQuestion.question;
        document.getElementById('counter').innerHTML = totalQuestions - questionIndex;
        let optionButtons = document.querySelectorAll('#options button');
        optionButtons.forEach((btn, index) => {
            btn.innerHTML = currentQuestion.options[index];
            btn.classList.remove('correct', 'incorrect');
            btn.disabled = false;
        });
    } else {
        console.error(`Question not found for level '${currentLevel}' and index '${questionIndex}'`);
    }
}

// Function to show quiz section
function showQuizSection() {
    document.getElementById('buttons').style.display = 'none';
    document.getElementById('quiz-section').style.display = 'block';
    document.getElementById('next-btn').disabled = true;
    startTimer();
}

// Function to check answer
function checkAnswer(optionIndex) {
    let currentQuestion = questions[currentLevel][questionIndex];
    let selectedOption = document.querySelectorAll('#options button')[optionIndex];
    let correctAnswer = currentQuestion.answer;

    if (selectedOption.innerHTML === correctAnswer) {
        score++;
        // console.log(score);
        selectedOption.classList.add('correct');
    } else {
        selectedOption.classList.add('incorrect');
        document.querySelectorAll('#options button').forEach(btn => {
            if (btn.innerHTML === correctAnswer) {
                btn.classList.add('correct');
            }
        })
    }
    // Disable all option buttons after selection
    document.querySelectorAll('#options button').forEach(btn => btn.disabled = true);
    document.getElementById('next-btn').disabled = false;
}

// Function to move to next question
function nextQuestion() {
    if (questionIndex < totalQuestions) {
        questionIndex++;
        displayQuestion();
        document.getElementById('next-btn').disabled = true;
    } else {
        endQuiz();
    }
}

// Function to start timer
function startTimer() {
    let time = 6; // 6 seconds timer
    document.getElementById('remaining-time').innerHTML = time;
    timer = setInterval(function() {
        time--;
        document.getElementById('remaining-time').innerHTML = time;
        if (time <= 0) {
            clearInterval(timer);
            endQuiz();
        }
    }, 1000);
}


// Function to end quiz
function endQuiz() {
    document.getElementById('quiz-section').style.display= 'block';
    document.querySelectorAll('#options button').forEach(btn => btn.disabled = true);
    document.getElementById('next-btn').style.display = 'none';
    document.getElementById('remaining-time').style.display = 'block';
    if(score < questions[currentLevel].length/2){
        document.getElementById('result').innerHTML = `Sorry You Lost.😞 You scored : ${score} out of ${totalQuestions +1}.`;
    }else{
        document.getElementById('result').innerHTML = `Congratulations. 🎉 You scored: ${score} out of ${totalQuestions +1}.`;
    }
    document.getElementById('leaderboard').innerHTML = `Leaderboard:<br />Score: ${score}.`;
}


