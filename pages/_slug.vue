<template>
  <div class="container">
    <Nav />

    <div class="mx-auto max-w-3xl">
      <NuxtLink :to="'/'">
        <h1>Blog</h1>
      </NuxtLink>

      <h1>{{ post.title }}</h1>
      <p>{{ post.description }}</p>
      <nuxt-content :document="post" />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const post = await $content('posts', params.slug).fetch()

    return {
      post
    }
  }
}
</script>
