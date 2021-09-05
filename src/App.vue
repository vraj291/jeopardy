<template>
  <div class="app" v-if="canAccess">
    <router-view/>
    <Footer/>
  </div>
  <div class="app" v-else>
    <div class="access-error">
      We are extremely sorry but this application needs a larger screen to operate. Try reloading or accessing it from another device.
    </div>
    <Footer/>
  </div>
</template>

<script>
import Footer from './components/Footer.vue';

export default {
  components: { 
    Footer
  },
  name: 'App',
  computed:{
    canAccess(){
      if(window.innerWidth > 1900 && window.innerHeight > 900){
        return true
      }
      return false
    }
  }
};
</script>

<style>

:root{
  --blue: #060CE9;
  --gold: #FFD700;
}

@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap');

@font-face {
  font-family: "Jeopardy";
  src: local("Jeopardy"),
   url(./assets/fonts/gyparodyhv.ttf) format("truetype");
}

body{
  margin: 0;
  padding: 0;
  background-color: var(--gold);
}

.access-error{
  flex: 1 0 auto;
  font-family: "Jeopardy";
  color: var(--blue);
  width: 70%;
  display:flex;
  align-items: center;
  font-size: 2.5rem;
}

::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 6px;
  }

::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: var(--gold);
    box-shadow: 0 0 1px rgba(20, 19, 19, 0.5);
}

.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

</style>
