<template>
  <div class="container px-4 md:px-8">
    <Nav />

    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-5 mb-8">
      <div
        v-for="post of posts"
        :key="post.slug"
        class="flex flex-col gap-1"
      >
        <NuxtLink :to="{ name: 'world-slug', params: { slug: post.slug } }">
          <img
            :src="post.cover"
            :alt="post.title"
            class="block w-full object-cover"
          >
        </NuxtLink>
        <NuxtLink :to="{ name: 'world-slug', params: { slug: post.slug } }">
          {{ post.title }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const posts = await $content('world')
      .only(['title', 'cover', 'slug'])
      .sortBy('createdAt', 'desc')
      .fetch()

    return {
      posts
    }
  }
}
</script>
