<template>
  <div class="container">
    <Nav />

    <NuxtLink :to="'/'">
      <h1>Blog</h1>
    </NuxtLink>

    <h1>{{ post.title }}</h1>

    <article>
      <nuxt-content :document="post" />
    </article>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const post = await $content('world', params.slug).fetch()

    return {
      post
    }
  }
}
</script>

<style>
.nuxt-content > * {
  margin-bottom: 1rem;
}

.nuxt-content img {
  display: block;
  width: 100%;
}
</style>
