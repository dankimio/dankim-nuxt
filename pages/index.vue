<template>
  <div class="container px-4 md:px-8">
    <Nav />

    <div v-for="post of posts" :key="post.slug" class="mb-8">
      <NuxtLink
        :to="{ name: 'slug', params: { slug: post.slug } }"
        class="inline-block font-medium text-gray-900 hover:text-gray-600 text-2xl mb-2"
      >
        {{ post.title }}
      </NuxtLink>
      <p class="prose">
        {{ post.description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const posts = await $content('posts')
      .only(['title', 'description', 'slug'])
      .sortBy('createdAt', 'desc')
      .fetch()

    return {
      posts
    }
  }
}
</script>

<style>
</style>
