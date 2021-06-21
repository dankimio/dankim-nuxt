<template>
  <div class="container">
    <nav class="flex mb-8 text-lg font-medium gap-x-4 text-gray-900">
      <NuxtLink :to="'/'" class="">
        Dan Kim
      </NuxtLink>
      <NuxtLink :to="{ name: 'world' }">
        Travel
      </NuxtLink>
    </nav>

    <h2 class="mb-4">
      Posts
    </h2>

    <ul>
      <li v-for="post of posts" :key="post.slug">
        <NuxtLink :to="{ name: 'slug', params: { slug: post.slug } }">
          <h2>{{ post.title }}</h2>
        </NuxtLink>
      </li>
    </ul>
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
