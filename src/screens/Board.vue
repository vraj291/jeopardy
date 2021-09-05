<template>
    <div class="wrapper" :style="background">
        <div class="loader" v-if="loading">
            <Loader text="Preparing a Fun Time for You" :color="1" />
        </div>
        <div class="loader" v-else-if="error">
            <Error :press="prepareQuestions" :color="1"/>
        </div>
        <div v-else>
            <div class="column-wrapper">
                <div v-for="(cat,index) in Object.keys(questions)" :key="index">
                    <CategoryColumn 
                        :category="cat" 
                        :isActive="questions[cat].map(e => e.active)"
                        :getQuestion="showQuestion"
                    />
                </div>
            </div>
            <div class="question-wrapper" v-if="questionVisible">
                <QuestionWrapper 
                    :user="currPlayer"
                    :question="currQuestion"
                    :skip="closeQuestion"
                    :pass="passTurn"
                    :check="checkAnswer"
                />
            </div>
            <ScoreBoard
                :players="players"
                :active="currPlayer.id"
                :exit="exit"
            />    
        </div>
    </div>
</template>

<script>
import { getQuestions } from '@/api/questions';
import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css'
import CategoryColumn from '@/components/CategoryColumn.vue';
import Loader from '@/components/Loader.vue'
import Error from '@/components/Error.vue'
import QuestionWrapper from '@/components/QuestionWrapper.vue'
import ScoreBoard from '@/components/ScoreBoard.vue'

export default {
    name: 'Board',
    data(){
        return {
            loading : false,
            error: false,
            questionVisible: false,
            lastPass: -1,
            players: [],
            currPlayer: {
                id: 0,
                name: '',
                score: 0
            },
            currQuestion: {},
            questions:  {}
        }
    },
    components: { 
        CategoryColumn,
        Loader,
        Error,
        QuestionWrapper,
        ScoreBoard
    },
    created(){
        let temp = this.$store.getters.getTeams
        if(Object.keys(temp).length == 0){
            this.$router.push('/')
        }
        for(let i of Object.keys(temp)){
            this.players.push({
                name: i,
                score: temp[i]
            })
        }
        this.currPlayer = {
            ...this.players[0],
            id: 0
        }
        console.log(this.currPlayer)
    },
    mounted(){
        this.prepareQuestions()
    },
    computed:{
        background(){
            return 'background-color: ' + (this.questionVisible? 'var(--blue)':'black') + ';' 
        }
    },
    methods: {
        prepareQuestions(){
            this.loading = true;
            this.error = false;
            let result = this.$store.getters.getQuestions
            if(Object.keys(result).length == 0){
                getQuestions().then(data => {
                    if(data != null){
                        this.questions = data
                        this.$store.dispatch('addQuestions',{
                            questions: data
                        })
                    }else{
                        this.error = true;
                    }
                    this.loading = false;
                })
            }else{
                this.questions = result
                this.loading = false;
            }
        },
        checkAnswer(answer){
            if(this.currQuestion.answer.toLowerCase().includes(answer.toLowerCase())){
                createToast({
                    title: "Correct Answer"
                },{
                    type: 'success'
                })
                this.markAsCorrect()
            }else{
                createToast({
                    title: "Incorrect Answer",
                    description: `Actual Answer : ${this.currQuestion.answer}`
                },{
                    type: 'danger'
                })
                this.closeQuestion()
            }
        },
        showQuestion(category,value,isActive){
            if(isActive == false) return
            this.currQuestion = this.questions[category].find(e => e.value == value)
            this.currQuestion.category = category
            this.currQuestion.active = false
            this.questionVisible = true
        },
        closeQuestion(){
            this.questionVisible = false
            this.currQuestion = {}
            this.changeTurn()
        },
        markAsCorrect(){
            this.$store.dispatch('updateScores',{
                player: this.currPlayer.name,
                score: this.currQuestion.value
            })
            this.players[this.currPlayer.id].score += this.currQuestion.value
            this.closeQuestion()
        },
        passTurn(){
            if(this.lastPass == -1){
                this.lastPass = this.currPlayer.id
                this.changeTurn()
            }else if(this.lastPass == this.getNextTurn()){
                this.lastPass = -1;
                createToast({
                    title: "Question was skipped."
                },{
                    type: 'danger'
                })
                this.closeQuestion()
            }else{
                this.changeTurn()
            }
        },
        getNextTurn(){
            return (this.currPlayer.id + 1)%(this.players.length)
        },
        changeTurn(){
            let turn = this.getNextTurn()
            this.currPlayer = {
                ...this.players[turn],
                id : turn
            }
        },
        exit(){
            this.$router.push('/result')
        }
    }
}
</script>

<style scoped>
    .wrapper{
        flex: 1 0 auto;
        font-family: "Jeopardy";
        margin: 0.5rem 0;
    }
    .column-wrapper{
        display: flex;
        flex-direction: row;
        background-color: black;
        padding: 0.5rem 0.7rem;
    }
    .question-wrapper{
        position: absolute;
        top: calc(0% - 0.5rem);
        left: 0%;
    }
</style>