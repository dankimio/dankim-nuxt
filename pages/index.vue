<template>
  <div class="container">
    <nav class="mb-8">
      <NuxtLink :to="'/'">
        Dan Kim
      </NuxtLink>
      <NuxtLink :to="'/photos'">
        Travel
      </NuxtLink>
    </nav>

    <div class="grid grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-5 mb-8">
      <div class="flex flex-col gap-1">
        <NuxtLink to="/">
          <img
            src="https://source.unsplash.com/random/300x200?random=1"
            alt="Photo"
            class="block w-full object-cover"
          >
        </NuxtLink>
        <NuxtLink to="/">
          London
        </NuxtLink>
      </div>
      <div class="flex flex-col gap-1">
        <NuxtLink to="/">
          <img
            src="https://source.unsplash.com/random/300x200?random=2"
            alt="Photo"
            class="block w-full object-cover"
          >
        </NuxtLink>
        <NuxtLink to="/">
          London
        </NuxtLink>
      </div>
      <div class="flex flex-col gap-1">
        <NuxtLink to="/">
          <img
            src="https://source.unsplash.com/random/300x200?random=3"
            alt="Photo"
            class="block w-full object-cover"
          >
        </NuxtLink>
        <NuxtLink to="/">
          London
        </NuxtLink>
      </div>
      <div class="flex flex-col gap-1">
        <NuxtLink to="/">
          <img
            src="https://source.unsplash.com/random/300x200?random=4"
            alt="Photo"
            class="block w-full object-cover"
          >
        </NuxtLink>
        <NuxtLink to="/">
          London
        </NuxtLink>
      </div>
    </div>

    <h2 class="mb-4">
      Posts
    </h2>

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
