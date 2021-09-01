<template>
    <div class="wrapper" @mousedown="dragStart">
    <div  v-if="open" >
        <div class="title"> Teams </div>
        <UserList :users="users" />
        <button class="butt" @click="exit">
            Exit Game
        </button>
        <button class="close-butt" @click="toggleOpen">
           <i class="far fa-times-circle fa-3x"></i>
        </button>
    </div>
    <div v-else @click="toggleOpen">
        <div class="closed-title"> Scores </div>
    </div>
    </div>
</template>

<script>

import UserList from '@/components/UserList.vue'

export default {
    name: "ScoreBoard",
    components:{
        UserList
    },
    props: {
        players: {
            type: Object,
            required: true
        },
        active: {
            type: Number,
            required: true
        },
        exit:{
            type: Function
        }
    },
    data(){
        return{
            open: false
        }
    },
    computed: {
        users(){
            let users = this.players
            return users.sort((a,b) => b.score - a.score)
        }
    },
    methods:{
        toggleOpen(){
            this.open = !this.open
        }
    }
}
</script>

<style scoped>

.wrapper{
    cursor: move;
    position: absolute;
    bottom: 0%;
    left: 50%;
    transform: translate(-50%,0);
    background-color: var(--gold);
    border: solid 7px black;
    border-radius: 10px; 
    font-family: 'Raleway', sans-serif;
    padding: 1rem 3rem;
    color: var(--blue);
    z-index: 3;
}

.title{
    font-family: "Jeopardy";
    font-size: 1.7rem;
    margin-bottom: 1rem;
}

.closed-title{
    font-family: "Jeopardy";
    font-size: 1.7rem;
    margin: -0.5rem;
    margin-bottom: 0;
    cursor: pointer;
}

    .butt{
        padding: 1rem;
        margin-top: 1rem;
        background-color: var(--blue);
        color: var(--gold);
        border:none;
        font-weight: 700;
        cursor: pointer;
        font-family: 'Raleway', sans-serif;
        font-size: 1.3rem;
    }

    .close-butt{
        outline: none;
        border: none;
        background-color: var(--gold);
        position: absolute;
        top: 5%;
        right: 2%;
    }

    .butt:hover{
        transform: scale(0.95,0.95);
    }

</style>