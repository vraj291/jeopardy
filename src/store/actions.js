export default {
    addQuestions(context,payload){
        context.commit('ADD_QUESTIONS',payload)
    },
    addTeams(context,payload){
        context.commit('ADD_PLAYERS',payload)
    },
    updateScores(context,payload){
        context.commit('UPDATE_SCORES',payload)
    },
    reset(context){
        context.commit('RESET_VALUES')
    }
}