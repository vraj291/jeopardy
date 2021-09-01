<template>
    <QuestionWrapper 
        :user="user"
        :question="question"
        :loading="loading"
        :skip="skip"
        :exit="exit"
        :check="checkAnswer"
    />
</template>

<script>

import { getQuestion } from '@/api/questions'
import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css'
import QuestionWrapper from '../components/QuestionWrapper.vue'

export default {
    name: 'Practice',
    components:{
        QuestionWrapper
    },
    data(){
        return{
            loading: false,
            user : {
                name : '',
                score: 0
            },
            questionId: -1,
            question: {},
        }
    },
    created(){
        this.user.name = this.$store.getters.getUser
        if(this.user.name == undefined){
            this.$router.push('/')
        }else{
            this.getNewQuestion()
        }
    },
    methods: {
        checkAnswer(answer){
            if(this.question.answer.toLowerCase().includes(answer.toLowerCase())){
                createToast({
                    title: "Correct Answer"
                },{
                    type: 'success'
                })
                this.markAsCorrect();
            }else{
                createToast({
                    title: "Incorrect Answer",
                    description: `Actual Answer : ${this.question.answer}`
                },{
                    type: 'danger'
                })
                this.getNewQuestion()
            }
        },
        async getNewQuestion(){
            this.loading = true
            if(this.questionId == -1 || this.questionId == 9){
                getQuestion().then(data => {
                    this.$store.dispatch('addQuestions',{
                        questions: data
                    })
                    this.question = data[0]
                    this.questionId = 0
                    this.loading = false
                })
            }else{
                this.questionId++;
                this.question = this.$store.getters.getQuestion(this.questionId)
                this.loading = false
            }    
        },
        skip(){
            createToast({
                title: "You were so close.",
                description: `Actual Answer : ${this.question.answer}`
            },{
                type: 'warning'
            })
            this.getNewQuestion()
        },
        markAsCorrect(){
            this.$store.dispatch('updateScores',{
                player: this.user.name,
                score: this.question.value
            })
            this.user.score += this.question.value
            this.getNewQuestion()
        },
        exit(){
            this.$router.push('/result')
        }
    }
}
</script>

<style scoped>

</style>