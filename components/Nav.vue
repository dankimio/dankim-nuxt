<template>
  <nav class="flex mb-6 text-lg font-medium gap-x-4 text-gray-900">
    <NuxtLink :to="'/'" class="">
      Dan Kim
    </NuxtLink>
    <NuxtLink :to="{ name: 'world' }">
      Travel
    </NuxtLink>
  </nav>
</template>
