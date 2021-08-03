<template>
  <div class="container px-4 md:px-8">
    <Nav />

    <div class="prose md:prose-lg">
      <h1>
        {{ post.title }}
      </h1>

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

<style>
.prose img {
  @apply rounded;

  margin-top: 0;
  margin-bottom: 0;
}
</style>
