<script setup lang="ts">
interface Testimonial {
  quote: string
  author: string
}

const testimonials: Testimonial[] = [
  {
    quote: 'AAII speakers share their considerable research of and experience with financial markets, providing a great opportunity for all to advance their knowledge in the financial world. I find the meetings interesting, informative, and helpful in investing.',
    author: 'Dolores T.'
  }
]
</script>

<template>
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <h3 class="text-3xl font-bold text-center text-gray-800 mb-12">
        Here is what people are saying about<br>
        <span class="text-blue-600">AAII Los Angeles Chapter</span>
      </h3>

      <div class="max-w-4xl mx-auto">
        <div
          v-for="(testimonial, index) in testimonials"
          :key="index"
          class="bg-white p-8"
        >
          <p class="text-gray-700 text-lg italic mb-4">
            "{{ testimonial.quote }}"
          </p>
          <p class="text-right text-gray-600 font-semibold">— {{ testimonial.author }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
