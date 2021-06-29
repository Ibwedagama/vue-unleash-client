<template>
  <div id="app">
    <!-- <h1>Online Course</h1>
    <div class="course-container">
      <div v-for="item in course" :key="item.id">
        <Card :title="item.title" :price="item.price" :image="item.image" />
      </div>
    </div> -->
  </div>
</template>

<script>
// import Card from './components/Card.vue'
import COURSE_LIST from './data/course'

export default {
  name: 'App',
  components: {
    
  },
  data() {
    return {
      course: COURSE_LIST
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding: 0 3rem;
}

.course-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 2rem;
}
</style>
