export default{
    getQuestion: (state) => (index) => state.questions[index],
    getQuestions: (state) => state.questions,
    getUser: (state) => Object.keys(state.players)[0],
    getTeams: (state) => state.players,
    getUserScore: (state) => (player) => state.players[player],
    getAll: (state) => state
}