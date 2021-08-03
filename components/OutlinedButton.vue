<template>
  <a
    href="#"
    :target="target"
    class="inline-flex items-center text-center px-3 py-1 border border-gray-400 text-gray-800 tracking-wide cursor-pointer hover:bg-gray-800 hover:text-white hover:border-gray-800"
  >
    <slot />
  </a>
</template>

<script>
export default {
  name: 'OutlinedButton',
  props: {
    image: String,
    target: String
  }
}
</script>
