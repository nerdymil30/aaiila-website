<script setup lang="ts">
interface Meeting {
  id: string
  title: string
  slug: string
  date: string
  status: string
  category: string
  thumbnailId?: string
  backgroundImage?: string
  topics: number
  filename: string
}

const { data: meetings } = await useFetch<Meeting[]>('/meetings-index.json', {
  baseURL: '',
  server: false
})

const futureMeetings = computed(() => 
  meetings.value?.filter(m => m.status !== 'ARCHIVED') || []
)

const archivedMeetings = computed(() => 
  meetings.value?.filter(m => m.status === 'ARCHIVED') || []
)

const getImageUrl = (meeting: Meeting) => {
  // Use the background image from custom fields
  if (meeting.backgroundImage) {
    // Extract filename from URL
    const match = meeting.backgroundImage.match(/([^/]+)\.(jpg|jpeg|png|webp)$/i)
    if (match) {
      return `/assets/images/${match[0]}`
    }
  }
  // Fallback to a default image
  return '/assets/images/slide_skirball-1.jpg'
}
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <AppHeader />

    <!-- Main Content -->
    <main class="container mx-auto px-4 py-12">
      <h1 class="text-5xl font-bold text-center text-blue-700 mb-2">All Meetings</h1>
      
      <!-- Future Meetings Section -->
      <section v-if="futureMeetings.length > 0" class="mb-16">
        <h2 class="text-4xl font-bold text-center text-blue-600 mb-8 mt-12">
          Future Meetings of the AAII Los Angeles Chapter
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="meeting in futureMeetings"
            :key="meeting.id"
            class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div class="h-48 overflow-hidden">
              <img 
                :src="getImageUrl(meeting)" 
                :alt="meeting.title"
                class="w-full h-full object-cover"
                @error="(e) => (e.target as HTMLImageElement).src = '/assets/images/slide_skirball-1.jpg'"
              >
            </div>
            <div class="p-6">
              <h4 class="text-xl font-bold mb-3">{{ meeting.title }}</h4>
              <p class="text-gray-600 mb-4">
                Financial Education meeting information that focuses on the broad overview of basic individual investing in today's market.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Archived Meetings Section -->
      <section class="mb-16">
        <h2 class="text-4xl font-bold text-center text-blue-600 mb-4">
          All Archived Meeting Presentations
        </h2>
        <h5 class="text-xl text-center text-green-500 mb-8">
          Browse all past presentations and associated PDF materials
        </h5>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="meeting in archivedMeetings"
            :key="meeting.id"
            class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div class="h-48 overflow-hidden">
              <img
                :src="getImageUrl(meeting)"
                :alt="meeting.title"
                class="w-full h-full object-cover"
                @error="(e) => (e.target as HTMLImageElement).src = '/assets/images/slide_skirball-1.jpg'"
              >
            </div>
            <div class="p-6">
              <h4 class="text-xl font-bold mb-3">{{ meeting.title }}</h4>
              <p class="text-gray-600 text-sm mb-4">
                Financial Education meeting information that focuses on the broad overview of basic individual investing in today's market.
              </p>
              <a
                :href="`/meeting/${meeting.slug}`"
                class="inline-block bg-red-500 hover:bg-red-600 text-white font-medium px-6 py-2 rounded transition-colors"
              >
                Read more
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>

    <AppFooter />
  </div>
</template>
