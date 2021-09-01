<template>
    <div>
        <Category :value="category"/>
        <div v-for="value in [200,400,600,800,1000]" :key="value">
            <Value :value="value" :active="isActive[(value/200)-1]" @click="() => getQuestion(category,value,isActive[(value/200)-1])"/>
        </div>
    </div>
</template>

<script>
import Category from './Category.vue'
import Value from './Value.vue'

export default {
    name: 'CategoryColumn',
    components: { 
        Category,
        Value
    },
    props: {
      category: {
        type: String,
        required: true,
      },
      getQuestion: Function,
      isActive: {
          type: Object,
          required: true,
      }
    }
}
</script>

<style>

</style>