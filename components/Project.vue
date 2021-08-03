<template>
  <div class="flex items-start">
    <img :src="src" :alt="name" class="w-12 h-12 mr-5">

    <div class="flex flex-col items-start">
      <a
        :href="url"
        target="_blank"
        class="mb-1 md:text-lg text-gray-900 hover:text-gray-700"
      >
        {{ name }}

        <!-- <img src="/images/icon-arrow.svg" class="inline-block ml-2 w-3 h-3" alt="Arrow"> -->
      </a>
      <p class="text-sm md:text-base text-gray-700">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Project',
  props: {
    description: String,
    name: String,
    src: String,
    url: String
  }
}
</script>

<style scoped>
</style>
