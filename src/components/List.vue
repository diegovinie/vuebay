<template>
  <div>
      <div v-for="item in items" :key="item.id">
          <p>{{ item.name }}</p>
      </div>
  </div>
</template>

<script>
export default {
  data(){
      return 
  }
}
</script>
