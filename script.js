//**************************VARIABLES*******************************
const url = 'https://opentdb.com/api.php?amount=10';
const quiz = document.querySelector('.quiz');
const index = 0;
let options = [];
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const questionH3 = document.querySelector('#question');
const offlineQuestions = [
    {
        "type": "multiple",
        "difficulty": "medium",
        "category": "Entertainment: Music",
        "question": "The &#039;In the Flesh&#039; tour was used in support of what Pink Floyd album?",
        "correct_answer": "Animals",
        "incorrect_answers": [
            "The Wall",
            "Wish You Were Here",
            "The Final Cut"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "medium",
        "category": "Entertainment: Video Games",
        "question": "Which of the following created and directed the Katamari Damacy series?",
        "correct_answer": "Keita Takahashi",
        "incorrect_answers": [
            "Hideki Kamiya",
            "Shu Takumi",
            "Shinji Mikami"
        ]
    },
    {
        "type": "boolean",
        "difficulty": "medium",
        "category": "Science: Mathematics",
        "question": "A &#039;Millinillion&#039; is a real number.",
        "correct_answer": "True",
        "incorrect_answers": [
            "False"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "hard",
        "category": "Entertainment: Video Games",
        "question": "In Monster Hunter Generations, which of these hunter arts are exclusive to the Longsword?",
        "correct_answer": "Unhinged Spirit",
        "incorrect_answers": [
            "Shoryugeki",
            "Provoke",
            "Demon Riot"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "medium",
        "category": "Entertainment: Musicals &amp; Theatres",
        "question": "Which of these musicals won the Tony Award for Best Musical?",
        "correct_answer": "Rent",
        "incorrect_answers": [
            "The Color Purple",
            "American Idiot",
            "Newsies"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "medium",
        "category": "History",
        "question": "Who was the leader of the Communist Party of Yugoslavia ?",
        "correct_answer": "Josip Broz Tito",
        "incorrect_answers": [
            "Karadjordje Petrovic",
            "Milos Obilic",
            "Aleskandar Petrovic"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "hard",
        "category": "Entertainment: Music",
        "question": "Who was not in the band &quot;The Smiths&quot;?",
        "correct_answer": "Martin Chambers",
        "incorrect_answers": [
            "Morrissey",
            "Andy Rourke",
            "Mike Joyce"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "hard",
        "category": "Entertainment: Film",
        "question": "In the &quot;Jurassic Park&quot; universe, when did &quot;Jurassic Park: San Diego&quot; begin construction?",
        "correct_answer": "1985",
        "incorrect_answers": [
            "1988",
            "1986",
            "1993"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "medium",
        "category": "General Knowledge",
        "question": "In a standard set of playing cards, which is the only king without a moustache?",
        "correct_answer": "Hearts",
        "incorrect_answers": [
            "Spades",
            "Diamonds",
            "Clubs"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "medium",
        "category": "General Knowledge",
        "question": "What did the Spanish autonomous community of Catalonia ban in 2010, that took effect in 2012?",
        "correct_answer": "Bullfighting",
        "incorrect_answers": [
            "Fiestas",
            "Flamenco",
            "Mariachi"
        ]
    }
]


//**************************EVENTS**********************************

//**************************FUNCTIONS*******************************

const getData = async () => {
    try {
        const resp = await fetch(url);
        if (resp.ok) {
            const data = await resp.json();
            const results = data.results;
            printQuiz(results, index);
            console.log(results);
        } else {
            throw 'there was a problem.';
        }
    } catch {
        throw 'the requested direction doesn\'t exists.';
    }
};

const printQuiz = (results, i) => {
    options = results[i].incorrect_answers;
    options.push(results[i].correct_answer);
    if(options.length < 3){
        option3.style.display = 'none';
        option4.style.display = 'none';
    }
    question = results[i].question;
    option1.innerHTML = options[0];
    option2.innerHTML = options[1];
    option3.innerHTML = options[2];
    option4.innerHTML = options[3];
    questionH3.innerHTML = question;
    

    console.log(question);
    console.log(options);
};

getData()
.then(resp => console.log(resp))
.catch(error => console.error(error))
