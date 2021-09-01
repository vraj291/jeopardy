<template>
    <div class="wrapper">
        <div class="title">
            Congratulations {{winner}}
        </div>
        <div class="subtitle">
            You scored {{score}} Points <br>
            {{mode == 0? 'Are you ready to take on the actual game now?' : ''}}
        </div>
        <div class="list" v-if="mode == 1">
            <div class="subtitle"> Final Standings </div>
            <div class="item-wrapper">
                <UserList :users="players" />
            </div>
        </div>
        <button class="butt" @click="goHome">
            {{mode == 0? 'Lets Go' : 'Play Again'}}
        </button>
    </div>
</template>

<script>

import {sortPlayers} from '@/utils/sortPlayers.js'
import UserList from '@/components/UserList.vue'

export default {
    name: "Results",
    components:{
        UserList
    },
    data(){
        return{
            players: [],
            winner: '',
            score: 0,
            mode: 1
        }
    },
    created(){
        let temp = this.$store.getters.getTeams
        if(Object.keys(temp).length == 0){
            this.$router.push('/')
        }else if(Object.keys(temp).length == 1){
            this.mode = 0
        }
        this.players = sortPlayers(temp)
        this.winner = this.players[0].name
        this.score = this.players[0].score
        this.$store.dispatch('reset')
    },
    methods: {
        goHome(){
            this.$router.push('/')
        }
    }
}
</script>

<style scoped>
    .wrapper{
        flex: 1 0 auto;
        color: var(--blue);
        font-family: "Jeopardy";
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 4rem;
        align-items: center;
    }
    .title{
        font-size: 6rem;
    }
    .subtitle{
        font-size: 4rem;
    }
    .butt{
        padding: 1.3rem;
        background-color: var(--blue);
        color: var(--gold);
        font-weight: 700;
        cursor: pointer;
        font-family: 'Raleway', sans-serif;
        font-size: 1.5rem;
    }
    .list{
        margin: 5rem 0;
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
    .item-wrapper{
        padding: 0 3rem;
    }
</style>