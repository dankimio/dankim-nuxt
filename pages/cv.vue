<template>
  <div class="container px-4 md:px-8 max-w-prose">
    <Nav />

    <div class="text-gray-900">
      <h1 class="text-4xl font-semibold mb-4">
        Dan Kim — CV
      </h1>

      <p>
        I write software and help make software with product in mind.
      </p>

      <div class="border mr-2 px-2 py-1 text-sm inline-flex items-center">
        <img src="/images/cv/globe.svg" alt="globe" class="inline-block w-3 h-3 mr-2 text-gray-300">

        <a href="https://dan.kim" target="_blank">dan.kim</a>
      </div>

      <div class="border mr-2 px-2 py-1 text-sm inline-flex items-center">
        <img src="/images/cv/phone.svg" alt="phone" class="inline-block w-3 h-3 mr-2 text-gray-300">

        <a href="tel:+79999636633">+7 999 963-66-33</a>
      </div>

      <div class="border mr-2 px-2 py-1 text-sm inline-flex items-center">
        <img src="/images/cv/mail.svg" alt="mail" class="inline-block w-3 h-3 mr-2 text-gray-300">

        <a href="mailto:itsdanya@gmail.com">itsdanya@gmail.com</a>
      </div>

      <div class="border mr-2 px-2 py-1 text-sm inline-flex items-center">
        <img src="/images/cv/send.svg" alt="telegram" class="inline-block w-3 h-3 mr-2 text-gray-300">

        <a href="https://t.me/dankimio" target="_blank">dankimio</a>
      </div>

      <h2 class="mt-6">
        Experience
      </h2>

      <div class="mb-5">
        <h3 class="text-lg font-medium">
          frogogo <span class="years">2018–2022</span>
        </h3>
        <p class="mb-2 text-sm text-gray-700">
          CTO
        </p>
        <p>
          I lead a team of 5 developers and a designer. I joined the project at its inception as the CTO. I wrote the initial version of the web app and built its most crucial components: UI framework, mobile API, search, payments, CRM. I oversee tech hiring and architecture design. Frogogo is a loyalty platform for e-commerce.
        </p>
      </div>

      <div class="mb-5">
        <h3 class="text-lg font-medium">
          YouModels <span class="years">2017–2018</span>
        </h3>
        <p class="mb-2 text-sm text-gray-700">
          CTO, full-stack developer
        </p>
        <p>
          I joined YouModels as a full-stack developer. My responsibilities included: building a search engine, working on UI, SEO optimization, upgrading the app to latest technology. YouModels.com is an online platform for booking and managing models with agency contracts.
        </p>
      </div>

      <div class="mb-5">
        <h3 class="text-lg font-medium">
          chisto <span class="years">2016</span>
        </h3>
        <p class="mb-2 text-sm text-gray-700">
          CTO, co-founder
        </p>
        <p>
          Chisto brought on-demand laundry to Russian customers. I started Chisto in 2016 along with my co-founder. I designed the architecture of the app, developed the web interface and managed a team of 2 mobile developers.
        </p>
      </div>

      <div class="mb-5">
        <h3 class="text-lg font-medium">
          Binary Blitz <span class="years">2015–2018</span>
        </h3>
        <p class="mb-2 text-sm text-gray-700">
          CTO, co-founder
        </p>
        <p>
          I joined Binary Blitz in late 2014 as a back-end developer later to become a co-founder and the CTO. Initially I was responsible for building backends and APIs for mobile applications. Later I scaled our development department to 2 teams. Binary Blitz was an app development agency.
        </p>
      </div>

      <h2>
        Education
      </h2>

      <div>
        <h3 class="text-lg font-medium">
          Software Engineering, Bachelor

          <span class="years">2013–2017</span>
        </h3>

        <p>Higher School of Economics</p>
      </div>

      <!-- <h2>Projects</h2>

      <div class="mb-4">
        <h3 class="text-lg font-medium">
          spacecards <span class="years">2019</span>
        </h3>
        <p>
          I'm trying to reimagine spaced repetition with Spacecards. A web app, that is currently a work in progress.
        </p>
      </div> -->

      <h2>
        Skills
      </h2>

      <p class="mb-2">
        <span class="font-medium">Tech skills:</span>
        Ruby, Ruby on Rails, Turbo, JavaScript, Tailwind CSS, web design, modern front-end development.
      </p>

      <p class="mb-2">
        <span class="font-medium">Secondary:</span>
        iOS development (Swift, SwiftUI), Vue.js, Nuxt, UI design (Sketch, Figma).
      </p>

      <p class="mb-2">
        <span class="font-medium">Management:</span>
        hiring, tech interviews, building and leading teams.
      </p>

      <h2>
        Languages
      </h2>

      <p>English <span class="text-gray-500">(fluent)</span>, Russian <span class="text-gray-500">(fluent)</span>, French <span class="text-gray-500">(A2)</span>.</p>
    </div>
  </div>
</template>

<script>
</script>

<style>
.years {
  @apply text-gray-500 font-normal text-base ml-1;
}

p {
  @apply mb-3;
}

h2 {
  @apply mb-3 text-3xl font-medium mt-4;
}
</style>
