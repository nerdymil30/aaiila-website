<script setup lang="ts">
import type { Meeting } from '@/types/meeting'

const { data: meetings } = await useFetch<Meeting[]>('/meetings-index.json', {
  baseURL: '',
  server: false
})

const futureMeetings = computed(() =>
  meetings.value?.filter(m => m.status !== 'ARCHIVED').slice(0, 3) || []
)

// Newsletter popup state
const showNewsletterPopup = ref(false)

// Show popup after 5 seconds, but only if user hasn't seen it recently
onMounted(() => {
  const hasSeenPopup = localStorage.getItem('newsletter-popup-seen')
  const lastSeen = hasSeenPopup ? parseInt(hasSeenPopup) : 0
  const daysSinceLastSeen = (Date.now() - lastSeen) / (1000 * 60 * 60 * 24)

  // Show popup if user hasn't seen it in the last 7 days
  if (!hasSeenPopup || daysSinceLastSeen > 7) {
    setTimeout(() => {
      showNewsletterPopup.value = true
    }, 5000) // Show after 5 seconds
  }
})

const closeNewsletterPopup = () => {
  showNewsletterPopup.value = false
  // Remember that user has seen the popup
  localStorage.setItem('newsletter-popup-seen', Date.now().toString())
}
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

    <!-- Newsletter Popup -->
    <NewsletterPopup
      :is-open="showNewsletterPopup"
      @close="closeNewsletterPopup"
    />
  </div>
</template>
