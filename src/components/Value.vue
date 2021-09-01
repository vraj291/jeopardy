<template>
    <div :class='`block ${active? "active" : "inactive"}`'>
        &#36;
        <span class="amount">
            {{value}}
        </span>
    </div>
</template>

<script>
export default {
    name: 'Value',
    props: {
        value : {
            type : Number,
            required: true
        },
        active: {
            type: Boolean,
            required: true
        }
    }
}
</script>

<style scoped>
    .block{
        color: var(--gold);
        font-family: 'Raleway', sans-serif;
        width: 15rem;
        padding: 2.4rem;
        border: solid 8px black;
        font-size: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .active{
        background-color: var(--blue);
        cursor: pointer;
    }

    .inactive{
        background-color: black;
        border: solid 8px var(--gold);
        cursor: not-allowed;
    }

    .active:hover{
        background-color: rgb(0, 60, 255);
    }

    .amount{
        font-size: 3rem;
    }
</style>