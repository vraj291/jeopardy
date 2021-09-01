export const sortPlayers = (players) => {
    let temp = []
    for(let i of Object.keys(players)){
        temp.push({
            name: i,
            score: players[i]
        })
    }
    temp = temp.sort((a,b) => b.score - a.score)
    return temp
}