<template>
    <div class="block">
        {{value}}
    </div>
</template>

<script>
export default {
    name: 'Category',
    props: {
        value : {
            type : String,
            required: true
        }
    }
}
</script>

<style scoped>

    .block{
        background-color: var(--blue);
        font-family: "Jeopardy";
        color:white;
        width: 15rem;
        padding: 2.4rem;
        border: solid 8px black;
        height: 5rem;
        font-size: 2.2rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

</style>