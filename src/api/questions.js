import axios from 'axios'

export const getQuestion = async() => {
    return axios({
        url:'http://jservice.io/api/random',
        method:'GET',
        params:{
            count: 10
        }
    }).then(res => res.data.map(e => ({
        question: e.question,
        answer: e.answer,
        category: e.category.title,
        value: e.value
    })))
}

const shuffle = (array) => {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

export const getQuestionAlt = async() => {
    let ques = await getQuestions()
    let result = []
    if(ques == null) return null
    for(let i of Object.keys(ques)){
        for(let e of ques[i]){
            result.push({
                question: e.question,
                answer: e.answer,
                category: i,
                value: e.value
            })
        }
    }
    result = shuffle(result);
    return result;
}

const getDate = () => {
    let day = Math.round(Math.random()*28);
    if(day < 10){
        day = `0${day}`
    }
    let month = Math.round(Math.random()*12);
    if(month < 10){
        month = `0${month}`
    }
    let year = 1965 + Math.round(Math.random()*65);
    return `${month}/${day}/${year}`
}

const processData = (data) => {
    let questions = data.jeopardy
    let cats = {}
    for(let i in questions){
        let temp = {
            question: questions[i].clue,
            value: (Math.floor(i/6) + 1)*200,
            answer: questions[i].answer,
            active: true
        }
        if(cats[questions[i].category] == undefined){
            cats[questions[i].category] = [temp]
        }else{
            cats[questions[i].category].push(temp)
        }
    }
    return cats
}

export const getQuestions = async (attempt,date) => {
    let random= false
    if(date == undefined){
        date = getDate()
        random = true
    }
    if(attempt == undefined){
        attempt=1;
    }
    return axios({
        url:`https://jarchive-json.glitch.me/game/${date}`,
        method:'GET'
    }).then(res => {
        if(res.data.message){
            if(random && attempt < 10)
                return getQuestions(attempt+1)
            else
                return null
        }else{
            let data = processData(res.data)
            return data
        }
    })
}