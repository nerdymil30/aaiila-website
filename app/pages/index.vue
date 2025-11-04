<script setup lang="ts">
import type { Meeting } from '@/types/meeting'

const { data: meetings } = await useFetch<Meeting[]>('/meetings-index.json', {
  baseURL: '',
  server: false
})

const futureMeetings = computed(() =>
  meetings.value?.filter(m => m.status !== 'ARCHIVED').slice(0, 3) || []
)
</script>

<template>
  <div class="min-h-screen bg-white">
    <AppHeader />
    <HeroSlider />
    <HomeFeaturedTopicsSection />
    <HomeFutureMeetingsSection :meetings="futureMeetings" />
    <HomeWelcomeSection />
    <HomeIconBoxesSection />
    <HomeWhyAttendSection />
    <HomeStatisticsSection />
    <HomeTestimonialsSection />
    <HomeFaqSection />
    <AppFooter />
  </div>
</template>
