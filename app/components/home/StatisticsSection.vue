<script setup lang="ts">
interface Statistic {
  target: number
  label: string
  description: string
  duration?: number
}

const statistics: Statistic[] = [
  {
    target: 600,
    label: 'Investment Classes',
    description: 'We have presented over 600 investment classes dating back to the 1980s!',
    duration: 2000
  },
  {
    target: 1800,
    label: 'Active AAII LA Members',
    description: 'We have over 1800 AAII members across "Greater Los Angeles"',
    duration: 2000
  },
  {
    target: 30,
    label: 'Keynote Speakers',
    description: 'We feature over 30 keynote speakers each year to showcase their secrets and strategies',
    duration: 1500
  }
]

// Create animated counters for each statistic
const animatedStats = statistics.map(stat => ({
  ...stat,
  current: useCounterAnimation(stat.target, stat.duration)
}))
</script>

<template>
  <section class="py-16 bg-white">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        <div v-for="(stat, index) in animatedStats" :key="index">
          <div class="text-6xl font-bold text-blue-600 mb-4">{{ stat.current }}</div>
          <h4 class="text-xl font-bold text-gray-800 mb-2">{{ stat.label }}</h4>
          <p class="text-gray-600">{{ stat.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
