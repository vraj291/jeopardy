<template>
    <div class='wrapper'>
        <div class="title">
            Game Setup
        </div>
        <div v-if="mode == 0">
            <div class="input-wrapper">
                <label>Player Name</label>
                <input type="text" v-model="user"/>
            </div>
        </div>
        <div v-else>
            <div class="input-wrapper">
                <div class="line-wrapper">
                    <label>Episode Date</label>
                    <input type="date" v-model="date">
                </div>
                <label>Or</label>
                <label>Let the Game Suprise You</label>
                <div class="line-break"/>
                <div class="line-wrapper">
                    <label>Number of Teams</label>
                    <select name="cars" id="cars" v-model="teams">
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div class="line-break"/>
                <div class="line-wrapper" v-for="i in Number(teams)" :key="i">
                    <label>Team {{i}} Name</label>
                    <input type="text" v-model="user[i-1]"/>
                </div>
            </div>
        </div>
        <button class="butt" @click="checkInputs">
            Lets Go
        </button>
    </div>
</template>

<script>

import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css'
import { getQuestions } from '../api/questions';
import { checkUser, checkUnique } from '@/utils/checkInputs.js'

export default {
    name: "Setup",
    data(){
        return{
            user: [],
            teams: "2",
            date: ''
        }
    },
    props: {
      mode: {
        type: String,
        required: true,
      },
    },
    created(){
        if(this.mode == 0){
            this.user = ''
        }else if(this.mode == 1){
            this.user = ['','','','','','']
        }else{
            this.$router.push('/error')
        }
    },
    watch: {
        date(){
            if(this.date == '') return
            let date = `${this.date.slice(5,7)}/${this.date.slice(8,10)}/${this.date.slice(0,4)}`
            getQuestions(date).then(res => {
                if(res == null){
                    createToast({
                        title: "Date Error",
                        description: "No episode was aired on this date."
                    },{
                        type: 'danger'
                    })
                    this.date = ''
                }else{
                    this.$store.dispatch('addQuestions',{
                        questions: res
                    })
                }
            })
        }
    },
    methods: {
        checkInputs(){
            if(this.mode == 0){
                let result = checkUser(this.user)
                if(result.err){
                    createToast(result.data,{
                        type: 'danger'
                    })
                }else{
                    this.$store.dispatch('addTeams',{
                        player: this.user
                    })
                    this.$router.push('/practice')
                }
            }else{
                let errCount = 0;
                for(let i=0;i<Number(this.teams);i++){
                    let result = checkUser(this.user[i],i+1)
                    if(result.err){
                        errCount++;
                        createToast(result.data,{
                            type: 'danger'
                        })
                    }
                }
                let result = checkUnique(this.user,Number(this.teams))
                if(result.err){
                    errCount++;
                    createToast(result.data,{
                        type: 'danger'
                    })
                }
                if(errCount == 0){
                    this.$store.dispatch('addTeams',{
                        players: this.user.slice(0,Number(this.teams))
                    })
                    this.$router.push('/board')
                }
            }
        }
    }
}
</script>

<style scoped>
    .wrapper{
        color: var(--blue);
        flex: 1 0 auto;
        font-family: 'Raleway', sans-serif;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .title{
        font-size: 7rem;
        font-family: "Jeopardy";
    }
    .input-wrapper{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        font-size: 2rem;
        margin: 3rem 5rem;
    }
    input,select{
        font-size: 2rem;
        background-color: var(--gold);
        outline: none;
        border: none;
        padding: 0 0.5rem;
        color: var(--blue);
        font-family: 'Raleway', sans-serif;
        border-bottom: solid 5px var(--blue);
    }
    select{
        font-size: 2rem;
        padding: 0 0.5rem;
    }
    .butt{
        padding: 1.3rem;
        background-color: var(--blue);
        color: var(--gold);
        font-weight: 700;
        cursor: pointer;
        font-family: 'Raleway', sans-serif;
        font-size: 1.5rem;
        border-radius: 10px;
        outline: none;
        border: none;
    }
    .line-wrapper{
        display: flex;
        gap: 2rem;
        justify-content: center;
        align-items: center;
    }
    .line-break{
        margin-top: 1rem;
        position: relative;
        height: 1rem;
        border-top: dashed 5px black;
        width: 130%;
    }
</style>