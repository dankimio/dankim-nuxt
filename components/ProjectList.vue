<template>
  <div>
    <h2 class="mb-4 md:text-lg text-gray-900 font-medium">
      What I've been working on
    </h2>

    <Project
      v-for="project in projects"
      v-bind="project"
      :key="project.name"
      class="mb-6 md:mb-8"
    />
  </div>
</template>

<script>
import Project from './Project.vue'

export default {
  name: 'ProjectList',
  components: { Project },
  data () {
    return {
      projects: [
        {
          name: 'Frogogo',
          description: 'Leading a team of 9 developers and designers. I joined the project at its inception as the CTO. Frogogo is a loyalty platform for e-commerce.',
          status: 'current',
          src: '/images/logo-frogogo.svg',
          url: 'https://frogogo.ru'
        },
        {
          name: 'Chisto',
          description: 'I started Chisto in 2016 along with my co-founder. We had a team of 2 mobile developers. Chisto brought on-demand laundry to Russian customers.',
          status: 'inactive',
          src: '/images/logo-chisto.svg',
          url: 'https://chisto.xyz'
        },
        {
          name: 'Spacecards',
          description: "I'm trying to reimagine spaced repetition with Spacecards. A web app, that is currently a work in progress.",
          status: 'work in progress',
          src: '/images/logo-spacecards.svg',
          url: 'https://spacecards.app'
        }
      ]
    }
  }
}
</script>

<style lang="postcss" scoped>
</style>
