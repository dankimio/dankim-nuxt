<template>
  <div class="container">
    <div>
      <NuxtLink :to="'/'">
        <h1>Blog</h1>
      </NuxtLink>

      <ul>
        <li v-for="post of posts" :key="post.slug">
          <NuxtLink :to="`/${post.slug}`">
            <h2>{{ post.title }}</h2>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const posts = await $content('posts')
      .only(['title', 'description', 'slug'])
      .sortBy('createdAt', 'asc')
      .fetch()

    return {
      posts
    }
  }
}
</script>

<style>
</style>
