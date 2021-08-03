<template>
  <nav class="flex mb-6 text-lg gap-x-4 text-gray-900">
    <NuxtLink :to="'/'" class="font-medium">
      Dan Kim
    </NuxtLink>
    <NuxtLink :to="{ name: 'blog' }" class="text-gray-800">
      Blog
    </NuxtLink>
    <NuxtLink :to="{ name: 'world' }" class="text-gray-800">
      Travel
    </NuxtLink>
  </nav>
</template>
