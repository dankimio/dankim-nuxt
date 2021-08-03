<template>
  <div>
    <h2 class="mb-3 md:text-lg text-gray-900 font-medium">
      Photography
    </h2>

    <p class="mb-5 text-gray-800">
      I carry my camera everywhere. Whether it's my iPhone or an old 35mm Zenit loaded with film. I share my photography on <a href="https://www.instagram.com/dankimio/" target="_blank">Instagram</a>.
    </p>

    <div class="photo-grid">
      <a v-for="photo in photos" :key="photo.src" href="https://www.instagram.com/dankimio/" target="_blank">
        <img :src="photo.src" :alt="photo.alt" class="w-full h-full">
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Photography',
  data () {
    return {
      photos: [
        {
          src: '/images/photography/instagram-1.jpg',
          alt: 'Natural History Museum in London'
        },
        {
          src: '/images/photography/instagram-2.jpg',
          alt: 'Waterhouse Square in London'
        },
        {
          src: '/images/photography/instagram-3.jpg',
          alt: "Fremaasons' Hall in London"
        },
        {
          src: '/images/photography/instagram-4.jpg',
          alt: 'Church at White Square in Moscow'
        },
        {
          src: '/images/photography/instagram-5.jpg',
          alt: 'Houses in Moscow'
        },
        {
          src: '/images/photography/instagram-6.jpg',
          alt: 'Houses in Moscow'
        }
      ]
    }
  }
}
</script>

<style scoped>
.photo-grid {
  display: grid;
  grid-gap: .5rem;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-auto-rows: 0;
  overflow-y: hidden;
}

@media screen and (min-width: 768px) {
  .photo-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
