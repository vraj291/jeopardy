<template>
    <div class="wrapper">
        <div class="title">
            404
        </div>
        <div class="subtitle">
            Oops!!! It looks like the content you are trying to access is invalid or no longer exists.
        </div>
        <button class="butt" @click="goHome">
            Go Home
        </button>
    </div>
</template>

<script>

export default {
    name: "Error404",
    methods: {
        goHome(){
            this.$router.push('/')
        }
    }
}
</script>

<style scoped>
        .wrapper{
        flex: 1 0 auto;
        color: var(--blue);
        font-family: "Jeopardy";
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 2rem;
        align-items: center;
    }
    .title{
        font-size: 9rem;
    }
    .subtitle{
        width: 70%;
        font-size: 1.7rem;
    }
    .butt{
        padding: 1rem;
        background-color: var(--blue);
        color: var(--gold);
        font-weight: 700;
        cursor: pointer;
        font-family: 'Raleway', sans-serif;
        font-size: 1.3rem;
    }
</style>