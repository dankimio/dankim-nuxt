<template>
  <div class="container">
    <nav>
      <NuxtLink :to="'/'">
        Dan Kim
      </NuxtLink>
      <NuxtLink :to="'/photos'">
        Travel
      </NuxtLink>
    </nav>

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
