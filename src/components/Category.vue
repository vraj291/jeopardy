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
        width: 10rem;
        padding: 2rem;
        border: solid 8px black;
        height: 3.5rem;
        font-size: 1.7rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

</style>