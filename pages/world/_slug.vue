<template>
  <div class="container px-4 md:px-8">
    <Nav />

    <div class="prose md:prose-lg mb-8">
      <h1>{{ post.title }}</h1>
    </div>

    <nuxt-content :document="post" />
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
