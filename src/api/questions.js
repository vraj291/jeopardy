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

export const getQuestions = async (date) => {
    let random= false
    if(date == undefined){
        date = getDate()
        random = true
    }
    return axios({
        url:`https://jarchive-json.glitch.me/game/${date}`,
        method:'GET'
    }).then(res => {
        if(res.data.message){
            if(random)
                return getQuestions()
            else
                return null
        }else{
            let data = processData(res.data)
            return data
        }
    })
}