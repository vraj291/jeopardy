<template>
    <div class='footer-wrapper'>
        <div class="footer-text"> 
            Hosted On <a href="https://github.com/vraj291/jeopardy"> Github </a>
        </div>
        <div class="footer-text"> 
            &#169; Copyright {{new Date().getFullYear()}}, Vraj Parikh
        </div>
    </div>
</template>

<script>
export default {
    name : 'Footer',
}
</script>

<style scoped>

    .footer-wrapper{
        flex-shrink: 0;
        width: 100%;
        color: var(--gold);
        padding: 0.9rem 0;
        background-color: var(--blue);
        display: flex;
        justify-content: space-around;
    }

    .footer-text{
        font-family: 'Raleway', sans-serif;
        font-size: 1.3rem;
    }

    a{
        color: var(--gold);
    }

</style>