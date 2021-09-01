<template>
    <div class='header-wrapper'>
        <button class='butt' @click="skip">
            Skip Question
        </button>
        <div>
            <div class="title">
                {{user.name}}
            </div>
            <div class="score">
                {{user.score}} - {{answer}}
            </div>
        </div>
        <button class='butt' @click="this.currentFunc">
            {{this.currentText}}
        </button>
    </div>
</template>

<script>
export default {
    name : 'Header',
    props: {
      user: {
        type: Object,
        required: true
      },
      answer: {
        type: String,
        required: true
      },
      skip: {
        type: Function,
        required: true
      },
      exit: {
        type: Function
      },
      pass: {
        type: Function
      },
    },
    data(){
        return{
            currentFunc: this.exit == undefined? this.pass : this.exit,
            currentText: this.exit == undefined? "Pass To Next Team" : "Exit Practice"
        }
    }   
}
</script>

<style scoped>

    .header-wrapper{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        margin: 1rem 0 2.5rem;
    }

    .butt{
        padding: 1rem;
        background-color: var(--gold);
        color: var(--blue);
        font-weight: 700;
        cursor: pointer;
        font-family: 'Raleway', sans-serif;
        font-size: 1.3rem;
    }

    .title,.score{
        font-size: 3.5rem;
        font-family: "Jeopardy";
        color: var(--gold);
    }

    .score{
        font-size: 3rem
    }
</style>
