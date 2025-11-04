<script setup lang="ts">
const benefits = [
  'Build your know-how about markets and finances',
  'Hear and see experts in wealth accumulation and management',
  'Meet and exchange ideas with fellow investors',
  'Get current knowledge about investing strategies',
  'Have certainty that your adviser is steering you in the right direction'
]
</script>

<template>
  <section class="py-16 bg-gradient-to-br from-blue-50 to-green-50">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="text-4xl font-bold text-gray-800 mb-8">
            Why Come to Our Meetings at AAII Los Angeles?
          </h2>

          <ul class="space-y-4">
            <li
              v-for="(benefit, index) in benefits"
              :key="index"
              class="flex items-start"
            >
              <span class="text-green-500 text-2xl mr-3">✓</span>
              <span class="text-gray-700 text-lg">{{ benefit }}</span>
            </li>
          </ul>

          <NuxtLink
            to="/all-meetings"
            class="inline-block mt-8 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-3 transition-colors"
          >
            UPCOMING CHAPTER MEETINGS
          </NuxtLink>
        </div>

        <div>
          <img
            src="/assets/images/slide_skirball-1.jpg"
            alt="Meeting attendees"
            class="w-full h-auto"
          >
        </div>
      </div>
    </div>
  </section>
</template>
