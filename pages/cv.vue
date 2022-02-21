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

      <h2>
        Experience
      </h2>

      <div class="mb-4">
        <h3 class="text-lg font-medium">
          frogogo <span class="years">2018–2022</span>
        </h3>
        <p class="mb-1 text-sm text-gray-700">
          CTO
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dignissimos, debitis inventore ea itaque quos fuga.
        </p>
      </div>

      <div class="mb-4">
        <h3 class="text-lg font-medium">
          YouModels <span class="years">2017–2018</span>
        </h3>
        <p class="mb-1 text-sm text-gray-700">
          CTO, full-stack developer
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dignissimos, debitis inventore ea itaque quos fuga.
        </p>
      </div>

      <div class="mb-4">
        <h3 class="text-lg font-medium">
          chisto <span class="years">2017</span>
        </h3>
        <p class="mb-1 text-sm text-gray-700">
          CTO, co-founder
        </p>
        <p>
          I started Chisto in 2016 along with my co-founder. We had a team of 2 mobile developers. Chisto brought on-demand laundry to Russian customers.
        </p>
      </div>

      <div class="mb-4">
        <h3 class="text-lg font-medium">
          Binary Blitz <span class="years">2015–2018</span>
        </h3>
        <p class="mb-1 text-sm text-gray-700">
          CTO, co-founder
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dignissimos, debitis inventore ea itaque quos fuga.
        </p>
      </div>

      <h2>
        Education
      </h2>

      <div>
        <h3>
          Software Engineering, Bachelor

          <span class="years">2013–2017</span>
        </h3>

        <p>Higher School of Economics</p>

        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi a explicabo repellat rerum, architecto temporibus facere optio, consequuntur.</p>
      </div>

      <h2>Projects</h2>

      <div class="mb-4">
        <h3 class="text-lg font-medium">
          spacecards <span class="years">2019</span>
        </h3>
        <p>
          I'm trying to reimagine spaced repetition with Spacecards. A web app, that is currently a work in progress.
        </p>
      </div>

      <h2>
        Languages
      </h2>

      <p>English — C2</p>
      <p>Russian — Native</p>
      <p>French — A2</p>
    </div>
  </div>
</template>

<script>
</script>

<style>
.years {
  @apply text-gray-500 font-normal text-base ml-1;
}

h1, h2, p {
  @apply mb-4;
}

h2 {
  @apply text-3xl font-medium;
}
</style>
