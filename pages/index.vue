<template>
  <div class="container">
    <Nav />

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
