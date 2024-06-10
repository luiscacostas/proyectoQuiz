//**************************VARIABLES*******************************
const url = 'https://opentdb.com/api.php?amount=10';
const quiz = document.querySelector('.quiz');
const index = 0;
let options = [];



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
            throw 'error';
        }
    } catch {
        throw error;
    }
}

const printQuiz = (results, i) => {
    options = results[i].incorrect_answers;
    options.push(results[i].correct_answer);
    

};



getData()
// .then(resp => console.log(resp))
// .catch(error => console.error(error))
