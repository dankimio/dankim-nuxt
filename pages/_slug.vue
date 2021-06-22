<template>
  <div class="container">
    <Nav />

    <div class="mx-auto max-w-3xl">
      <h1>{{ post.title }}</h1>

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
