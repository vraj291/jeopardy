<template>
    <div class="wrapper">
        <Header 
            :user="user"
            :answer="Object.keys(question).length == 0? '' : question.answer"
            :skip="skip"
            :exit="exit"
            :pass="pass"
        />
        <div v-if="loading">
            <Loader text="Fetching Data" />
        </div>
        <div v-else-if="error">
            <Error :press="next" />
        </div>
        <div v-else>
            <Question 
                :question="question"
                :check="check"
            />
        </div>
    </div>
</template>

<script>

import Question from '@/components/Question.vue'
import Loader from '@/components/Loader.vue'
import Error from '@/components/Error.vue'
import Header from '@/components/Header.vue'

export default {
    name: 'QuestionWrapper',
    components:{
        Question,
        Loader,
        Error,
        Header
    },
    props:{
      user: {
        type: Object,
        required: true
      },
      question: {
        type: Object,
        required: true
      },
      loading: {
        type: Boolean,
        default: false
      },
      error: {
        type: Boolean,
        default: false
      },
      skip: {
        type: Function,
        required: true
      },
      next: {
        type: Function
      },
      check: {
        type: Function,
        required: true
      },
      exit: {
        type: Function
      },
      pass: {
        type: Function
      },
    }
}
</script>

<style scoped>
.wrapper{
    position: absolute;
    height: 100vh;
    width: 100vw;
    overflow-y: auto;
    overflow-x: hidden;
    z-index: 5;
    background-color: var(--blue);
}
</style>