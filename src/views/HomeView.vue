<template>
  <div class="container">
    <div class="cards-list">
      <router-link :to="{ name: 'details', params: { id: item.id } }" v-for="item in data">
        <div class="card-item">
          <div class="card-image">
            <img
              :src="item.logo"
              alt="Gallery Card Img"
            />
          </div>
          <div class="card-info">
            {{ item.name }}
          </div>
        </div>
      </router-link>
      
    </div>
  </div>
</template>

<script>

import GalleryService from '@/services/GalleryService';

export default {
  data() {
    return {
      data: [],
    };
  },
  created() {
    GalleryService.getData()
      .then((r) => {
        this.data = r.data.data;
      })
      .catch((error) => console.error(error.message));
  },
};
</script>

<style>
.container {
  height: 100%;
  min-height: 100vh;
  width: 100%;
  background-color: #1f2838;
  padding: 100px 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cards-list {
  height: 100%;
  width: 100%;
  display: grid;
  max-width: 1200px;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.card-item {
  min-height: fit-content;
  height: 100%;
  border-radius: 10px;
  cursor: pointer;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 0px;
  user-select: none;
}

.card-item:hover {
  background-color: #eee;
}

.card-image {
  width: 100%;
  max-width: 200px;
  /* height: 80%; */
  height: 100%;
  padding: 20px;
}

.card-image img {
  /* width: 100%; */
  height: 100%;
  /* max-height: 300px; */
  object-fit: cover;
  border-radius: 10px;
}

.card-info {
  font-weight: 700;
  color: #1f2838;
  text-transform: uppercase;
}

a {
  text-decoration: none !important;
}
</style>
