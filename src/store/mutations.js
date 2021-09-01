export default {
    ADD_QUESTIONS(state,payload){
        state.questions = payload.questions
    },
    ADD_PLAYERS(state,payload){
        if(payload.player){
            state.players[payload.player] = 0
        }else{
            for(let i of payload.players){
                state.players[i] = 0
            }
        }
    },
    UPDATE_SCORES(state,payload){
        if(state.players[payload.player] != undefined){
            state.players[payload.player] += payload.score
        }
    },
    RESET_VALUES(state){
        state.players = {}
        state.questions = {}
    }
}