<template>
  <main class="max-w-6xl w-full px-4 xl:px-0 mx-auto my-6">
    <h1 class="mx-4 mt-4 mb-2 text-center text-lg leading-6 font-medium text-gray-900">
      Rockets tracker <span class="whitespace-nowrap">legendary study report</span>
    </h1>
    <div class="my-2">
      <p class="text-sm">
        Reports for the
        <a
          href="https://wasmegg.netlify.app/rockets-tracker/"
          target="_blank"
          class="text-blue-500 hover:text-blue-600"
          >rockets tracker</a
        >
        legendary study are posted here. You can view historical reports and compare reports to see
        how legendary ownership of the player base has evolved over time. Keep in mind that data
        posted here are subject to selection bias; players who use the rockets tracker and opt in to
        the study are likely more avid than the majority of the Egg, Inc. player base at large.
      </p>
      <p class="text-sm mt-1">
        You can opt into the study yourself at
        <a
          href="https://wasmegg.netlify.app/rockets-tracker/"
          target="_blank"
          class="text-blue-500 hover:text-blue-600"
          >wasmegg.netlify.app/rockets-tracker</a
        >, in which case an irreversible hash of your ID and the list of legendary items you own is
        collected.
      </p>
      <p class="text-sm mt-1">
        You can find more of my Egg, Inc. tools at
        <a
          href="https://wasmegg.netlify.app/"
          target="_blank"
          class="text-blue-500 hover:text-blue-600"
          >wasmegg.netlify.app</a
        >.
      </p>
    </div>
    <router-view />
  </main>
</template>
