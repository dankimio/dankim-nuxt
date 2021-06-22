<template>
  <div class="container px-4 md:px-8">
    <Nav />

    <div class="grid grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-5 mb-8">
      <div
        v-for="post of posts"
        :key="post.slug"
        class="flex flex-col gap-1"
      >
        <NuxtLink :to="{ name: 'world-slug', params: { slug: post.slug } }">
          <img
            src="https://source.unsplash.com/random/300x200?random=1"
            alt="Photo"
            class="block w-full object-cover"
          >
        </NuxtLink>
        <NuxtLink :to="{ name: 'world-slug', params: { slug: post.slug } }">
          London
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const posts = await $content('world')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'desc')
      .fetch()

    return {
      posts
    }
  }
}
</script>
