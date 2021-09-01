<template>
    <div class="main-wrapper">
        <div class='main-title'>
            Jeopardy
        </div>
        <div class='option-wrapper'>
            <Options mode='practice'/>
            <Options mode='play'/>
        </div>
    </div>
</template>

<script>
import Options from '@/components/Options.vue'

export default {
    name: 'Welcome',
    components: {
        Options
    }
}
</script>

<style scoped>

.main-wrapper{
    flex: 1 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.main-title{
    font-family: "Jeopardy";
    font-size: 12rem;
    color: var(--blue);
    text-align: center;
    margin-bottom: 3rem;
}

.option-wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
}

@media (max-width: 900px) {
    .main-title{
        font-size: 10rem;
    }
    .option-wrapper{
        flex-direction: column;
    }
}

</style>