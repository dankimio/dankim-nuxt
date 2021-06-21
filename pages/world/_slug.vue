<template>
  <div class="container max-w-3xl">
    <NuxtLink :to="'/'">
      <h1>Blog</h1>
    </NuxtLink>

    <h1>{{ post.title }}</h1>
    <p>{{ post.description }}</p>
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
