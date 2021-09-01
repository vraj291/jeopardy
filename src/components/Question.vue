<template>
<div class="inner-wrapper">
    <div class="category">
        {{question.category}} for {{question.value}}
    </div>
    <div class="question">
        <div class="text">
            {{question.question}}
        </div>
        <div class="answer">
            What is <input v-model="answer"/> ?
        </div>
        <button class="butt" @click="checkAnswer">
            Lock In Answer
        </button>
    </div>
</div>
</template>

<script>

import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css'

export default {
    name : 'Question',
    data(){
        return{
            answer: ''
        }
    },
    props: {
        question: {
            type: Object,
            required: true,
        },
        check: {
            type: Function
        }
    },
    methods: {
        checkAnswer(){
            if(this.answer == '') {
                createToast({
                    title: "Answer Error",
                    description: `The answer field cant be left empty.`
                },{
                    type: 'danger'
                })
                return
            }
            this.check(this.answer)
            this.answer = ''
        }
    }
}
</script>

<style scoped>
    .question{
        width: 100vw;
        background-color: var(--blue);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .text{
        margin-bottom: 3rem;
    }
    .text,.answer,input{
        font-family: "Jeopardy";
        color: white;
        font-size: 5.5rem;
    }
    .answer{
        font-size: 3rem;
    }
    input{
        margin-left: 3rem;
        font-size: 3rem;
        background-color: var(--blue);
        border: none;
        outline: none;
        border-bottom: solid 10px black;
    }
    .butt{
        padding: 1.3rem;
        margin-top: 5rem;
        background-color: var(--gold);
        color: var(--blue);
        font-weight: 700;
        cursor: pointer;
        font-family: 'Raleway', sans-serif;
        font-size: 1.5rem;
    }
    .inner-wrapper{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        gap: 2rem;
        margin-bottom: 3rem;
    }
    .category{
        font-size: 5rem;
        font-family: "Jeopardy";
        color: var(--gold);
    }
</style>