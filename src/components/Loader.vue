<template>
  <div class="loader">
    <div class="lds-ellipsis">
        <div :style="rippleStyle">
        </div>
        <div :style="rippleStyle">
        </div>
        <div :style="rippleStyle">
        </div>
        <div :style="rippleStyle">
        </div>
    </div>
    <div class="text" :style="textStyle">
        {{text}}
    </div>
  </div>
</template>

<script>
export default {
    name: "Loader",
    props: {
      text: {
        type: String,
        required: true,
      },
      color:{
        type: Number
      }
    },
    computed: {
      rippleStyle () {
        return 'background: ' + (this.color == 1? 'var(--blue)':'var(--gold)') + ';' 
      },
      textStyle () {
        return 'color: ' + (this.color == 1? 'var(--blue)':'var(--gold)') + ';' 
        
      }
    }
}
</script>

<style scoped>
.loader{
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
}
.text{
    font-size: 2rem;
    font-family: 'Raleway', sans-serif;
}
.lds-ellipsis {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ellipsis div {
  position: absolute;
  top: 33px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
  left: 8px;
  animation: lds-ellipsis1 0.6s infinite;
}
.lds-ellipsis div:nth-child(2) {
  left: 8px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
  left: 32px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
  left: 56px;
  animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
}
</style>