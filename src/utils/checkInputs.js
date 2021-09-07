export const checkUser = (name,index) => {
    let temp=''
    if(index == undefined){
        temp = 'player name'
    }else{
        temp = `name for Team ${index}`
    }
    if(name == ''){
        return({
            err: true,
            data: {
                title: "Name Error",
                description: `The ${temp} can not be empty.`
            }
        })
    }else if(name.match(/^[a-z A-Z 0-9 _]+$/i) == null){ 
        return({
            err: true,
            data: {
                title: "Name Error",
                description: `The ${temp} can not contain invalid characters.`
            }
        })
    }else{
        return({
            err: false
        })
    }
}

export const checkUnique = (arr,size) => {
    let map = {}, i
    for (i = 0; i < size; i++){
        if (arr[i] != '' && map[arr[i]] != undefined){
            return {
                err: true,
                data: {
                    title: "Name Error",
                    description: `The name for Teams ${map[arr[i]]+1} and ${i+1} are not unique.`
                }
            }
        }
        map[arr[i]] = i;
    }
    return {
        err : false
    }
}

export const checkDate = (date) => {

}