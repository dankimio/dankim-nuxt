<template>
  <div>
    <h1 class="mb-5 text-4xl md:text-5xl font-bold text-gray-900">
      Hi, I'm Dan Kim.
    </h1>
    <p class="mb-5 text-2xl md:text-3xl text-gray-700">
      I write software and design interfaces.
    </p>
    <p class="mb-6 md:mb-8 md:text-lg text-gray-800">
      Currently based in Europe
    </p>

    <OutlinedButton
      href="https://www.instagram.com/dankimio/"
      target="_blank"
      class="mr-3 mb-3 sm:mb-1 md:mr-4"
    >
      <!-- FIXME: https://github.com/nuxt/vite/issues/109#issuecomment-804175411 -->
      <img :src="'/images/icon-instagram.svg'" class="mr-2 h-4 w-4">
      dankimio
    </OutlinedButton>

    <OutlinedButton
      href="https://twitter.com/dankimio"
      target="_blank"
      class="mr-3 mb-3 sm:mb-1 md:mr-4"
    >
      <!-- FIXME: https://github.com/nuxt/vite/issues/109#issuecomment-804175411 -->
      <img :src="'/images/icon-twitter.svg'" class="mr-2 h-4 w-4">
      dankimio
    </OutlinedButton>

    <OutlinedButton
      href="https://github.com/dankimio"
      target="_blank"
      class="mr-3 mb-3 sm:mb-1 md:mr-4"
    >
      <!-- FIXME: https://github.com/nuxt/vite/issues/109#issuecomment-804175411 -->
      <img :src="'/images/icon-github.svg'" class="mr-2 h-4 w-4">
      dankimio
    </OutlinedButton>
  </div>
</template>

<script>
import OutlinedButton from './OutlinedButton.vue'

export default {
  name: 'About',
  components: { OutlinedButton },
  props: {}
}
</script>

<style scoped lang="css">
</style>
