<template>
    <div class="wrapper">
        <div class="text" :style="textStyle">
            Something of a predicament occured while getting your questions.
        </div>
        <button @click="press" class="butt" :style="buttStyle">
            Try Again
        </button>
    </div>
</template>

<script>
export default {
    name: "Error",
    props: {
      press: {
        type: Function,
        required: true
      },
      color: {
          type: Number
      }
    },
    computed:{
        textStyle () {
            return 'color: ' + (this.color == 1? 'var(--blue)':'var(--gold)') + ';' 
        },
        buttStyle () {
            return 'background-color: ' + (this.color == 1? 'var(--blue)':'var(--gold)') + '; color: ' + (this.color == 1? 'var(--gold)':'var(--blue)') + ';' 
        }
    }
}
</script>

<style scoped>
.wrapper{
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%,-50%);
}
.text{
    font-size: 1.6rem;
    font-family: 'Raleway', sans-serif;
    color: var(--blue);
}
.butt{
    padding: 1rem;
    margin-top: 1rem;
    background-color: var(--blue);
    color: var(--gold);
    font-weight: 700;
    cursor: pointer;
    font-family: 'Raleway', sans-serif;
    font-size: 1.3rem;
}
</style>