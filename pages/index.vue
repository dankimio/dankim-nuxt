<template>
  <div class="container">
    <Nav />

    <div v-for="post of posts" :key="post.slug">
      <NuxtLink :to="{ name: 'slug', params: { slug: post.slug } }">
        <a>{{ post.title }}</a>
      </NuxtLink>
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
