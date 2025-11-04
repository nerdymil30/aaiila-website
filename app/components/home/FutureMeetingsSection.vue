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

interface Props {
  meetings: Meeting[]
}

const props = defineProps<Props>()

const getImageUrl = (meeting: Meeting) => {
  if (meeting.backgroundImage) {
    const match = meeting.backgroundImage.match(/([^/]+)\.(jpg|jpeg|png|webp)$/i)
    if (match) {
      return `/assets/images/${match[0]}`
    }
  }
  return '/assets/images/slide_skirball-1.jpg'
}
</script>

<template>
  <section class="py-16 bg-white">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold text-center mb-12" style="color: #525cbf;">
        Our Future Meetings . . .
      </h2>

      <div v-if="meetings.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="meeting in meetings"
          :key="meeting.id"
          class="meeting-card bg-white overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
        >
          <!-- Image Zone -->
          <div class="meeting-image-zone relative h-64 overflow-hidden bg-gray-200">
            <NuxtLink
              :to="`/meeting/${meeting.slug}`"
              class="absolute inset-0 z-10"
              :title="meeting.title"
            ></NuxtLink>
            <img
              :src="getImageUrl(meeting)"
              :alt="meeting.title"
              class="w-full h-full object-cover"
              @error="(e) => (e.target as HTMLImageElement).src = '/assets/images/slide_skirball-1.jpg'"
            >
          </div>

          <!-- Content Zone -->
          <div class="meeting-content-zone bg-gray-50 p-6 flex flex-col flex-grow">
            <h4 class="text-xl font-semibold text-left mb-3 text-gray-800">
              {{ meeting.title }}
            </h4>
            <p class="text-gray-700 text-sm text-left mb-5 leading-relaxed flex-grow">
              Financial Education meeting information that focuses on the broad overview of basic individual investing in today's market.
            </p>
            <div class="text-left mt-auto pt-4">
              <NuxtLink
                :to="`/meeting/${meeting.slug}`"
                class="meeting-button inline-block bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-3 rounded-md transition-colors duration-300"
                :title="`Read more about ${meeting.title}`"
              >
                Read more
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.meeting-card {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 0;
}

.meeting-card:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.meeting-image-zone {
  position: relative;
  background-color: #f5f5f5;
}

.meeting-content-zone {
  background-color: #f9f9f9;
}

.meeting-button {
  background-color: #e91e63;
  text-transform: none;
  font-size: 14px;
  line-height: 1;
  padding: 12px 24px;
  border-radius: 4px;
  box-shadow: none;
}

.meeting-button:hover {
  background-color: #c2185b;
}

/* Animation for cards on scroll */
.meeting-card {
  animation: fadeIn 0.6s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .meeting-image-zone {
    height: 200px;
  }
}
</style>
