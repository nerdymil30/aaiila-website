<script setup lang="ts">
interface FAQ {
  question: string
  link: string
}

const faqs: FAQ[] = [
  {
    question: 'WHERE DO YOU MEET?',
    link: '#'
  },
  {
    question: 'WHEN DO YOU MEET?',
    link: '#'
  },
  {
    question: 'IS THERE A FEE OR CHARGE TO ATTEND MEETINGS?',
    link: '#'
  },
  {
    question: 'IS THERE A CHARGE FOR PARKING?',
    link: '#'
  },
  {
    question: 'WHAT TO EXPECT AT A CHAPTER MEETING AT SKIRBALL?',
    link: '#'
  },
  {
    question: 'WHO ATTENDS THESE MEETINGS?',
    link: '#'
  },
  {
    question: 'WILL THERE BE HANDOUTS FROM THE PRESENTERS?',
    link: '#'
  },
  {
    question: 'WILL I HAVE THE OPPORTUNITY TO ASK QUESTIONS?',
    link: '#'
  }
]
</script>

<template>
  <section class="py-16 bg-gradient-to-br from-blue-100 to-green-100">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold text-center text-gray-800 mb-4">
        Frequently Asked Questions
      </h2>
      <p class="text-center text-gray-600 mb-12">
        If you do not find the answer you are looking for, please contact us.
      </p>

      <div class="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        <a
          v-for="faq in faqs"
          :key="faq.question"
          :href="faq.link"
          class="block bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-4 transition-colors text-center"
        >
          {{ faq.question }}
        </a>
      </div>
    </div>
  </section>
</template>
