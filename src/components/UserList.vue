<template>
    <div class="rank" v-for="user in users" :key="user.name">
        <div class="name">
            {{user.name}}
        </div>
        <div class="score">
            {{user.score}}
        </div>
    </div>
</template>

<script>
export default {
    name: 'UserList',
    props: {
      users: {
        type: Object,
        required: true,
      },
    },
}
</script>

<style scoped>
.rank{
    display: flex;
    justify-content: space-between;
    gap: 3rem;
    font-size: 2.3rem;
    font-family: 'Raleway', sans-serif;
}
</style>