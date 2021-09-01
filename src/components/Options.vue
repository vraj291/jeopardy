<template>
    <router-link class='link' :to="links[index]"> 
        <div class='wrapper'>
            <div class='title'>
                {{title[index]}}
            </div>
            <div class='description'>
                {{description[index]}}
            </div>
        </div>
    </router-link>
</template>

<script>
export default {
    name: 'Options',
    data(){
        return {
            index: 0,
            title: ['Practice','Play a Game'],
            description: ['You can practice and warm up your trivia skills on some randomly generated clues.','You can start a Jeopardy game from given aired episode and play with upto 5 teams.'],
            links: ['/create/0','/create/1']
        }
    },
    props: {
      mode: {
        type: String,
        required: true,
      },
    },
    created(){
        if(this.mode == 'play'){
            this.index = 1;
        }
    }
}
</script>

<style scoped>

.wrapper{
    flex: 1;
    background-color: var(--blue);
    border-radius: 20px;
    padding: 3rem;
    width: 30rem;
    margin: 2rem;
}

.title{
    color: var(--gold);
    font-family: "Jeopardy";
    font-size: 3rem;
    margin-bottom: 2rem;
    text-transform: uppercase;
}

.description{
    color: var(--gold);
    font-family: 'Raleway', sans-serif;
    font-size: 1.6rem; 
}

.link{
    text-decoration: none;
}

@media (max-width: 700px) {
    
}

</style>