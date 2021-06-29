<template>
  <div class="card-container">
    <img class="card-image" :src="image" :alt="title">
    <h3 class="card-title">{{title}}</h3>
    <p class="card-subtitle">Rp. <span>{{price}}</span></p>
  </div>
</template>

<script>
export default {
  props: ['title', 'image', 'price']

}
</script>

<style scoped>

.card-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  border: solid 2px #333;
  border-radius: 6px;
}

.card-container .card-image {
  max-width: 100%;
  height: auto;
}

.card-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #333;
}

.card-subtitle {
  font-size: 1rem;
  font-weight: 500;
  color: #666;
}

</style>