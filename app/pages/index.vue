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
    <!-- Header -->
    <header class="bg-white shadow-sm sticky top-0 z-50">
      <div class="container mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-4">
            <h1 class="text-2xl font-bold">
              <span class="text-gray-700">AAII</span>
              <span class="text-green-500">LA</span>
            </h1>
          </div>
          <nav class="hidden md:flex space-x-6">
            <a href="#" class="text-green-500 font-medium hover:text-green-600">Home</a>
            <a href="#" class="text-blue-600 font-medium hover:text-blue-700 border-b-2 border-blue-600">All Meetings</a>
            <a href="#" class="text-gray-600 hover:text-gray-800">Chapter Leadership</a>
            <a href="#" class="text-gray-600 hover:text-gray-800">About Us</a>
            <a href="#" class="text-gray-600 hover:text-gray-800">Contact Us</a>
            <a href="#" class="text-blue-600 font-medium hover:text-blue-700">CONTRIBUTIONS</a>
          </nav>
          <div class="flex items-center space-x-3">
            <a href="https://www.facebook.com/AAIILA" target="_blank" class="text-blue-600 hover:text-blue-700">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="https://www.meetup.com/aaii-los-angeles/" target="_blank" class="text-red-600 hover:text-red-700">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M6.98 9.98c0-.53.43-.96.96-.96s.96.43.96.96-.43.96-.96.96-.96-.43-.96-.96zm11.5 6.5c-.53 0-.96-.43-.96-.96s.43-.96.96-.96.96.43.96.96-.43.96-.96.96zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </header>

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

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-8">
      <div class="container mx-auto px-4 text-center">
        <p class="text-sm mb-2">
          <strong>DISCLAIMER:</strong> Investing involves the risk of loss, including principle. Information on this website is provided for your education and consideration;
        </p>
        <p class="text-sm mb-2">
          AAII and the Los Angeles Chapter do not make any recommendations to buy or sell any product, service or investment style
        </p>
        <p class="text-sm mb-4">
          and cannot be held accountable or responsible for the decisions you make.
        </p>
        <p class="text-xs text-gray-400">
          © 2019, 2020 AAII Los Angeles | Brought to you by <a href="https://webidpro.com" class="text-green-500 hover:text-green-400">Webidpro.com</a>
        </p>
      </div>
    </footer>
  </div>
</template>
