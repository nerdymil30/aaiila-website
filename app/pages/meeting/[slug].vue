<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug as string

interface Speaker {
  name: string
  title: string
  bio: string
  photo_id?: string
  photo_local_path?: string
}

interface Material {
  type: string
  url: string
  label: string
  local_path?: string
}

interface Topic {
  id: number
  speakers: Speaker[]
  presentation: {
    title: string
    description: string
    learning_outcomes?: string[]
  }
  materials: Material[]
}

interface MeetingData {
  metadata: {
    title: string
    link: string
    post_id: string
    post_name: string
    post_date: string
    category: string
    creator: string
  }
  custom_fields: Array<{
    meta_key: string
    meta_value: string
  }>
  event: {
    date: string
    status: string
  }
  topics: Topic[]
}

const meeting = ref<MeetingData | null>(null)
const loading = ref(true)
const error = ref<string | null>(null)

onMounted(async () => {
  try {
    // First, load the meetings index to find the filename
    const indexResponse = await fetch('/meetings-index.json')
    if (!indexResponse.ok) {
      throw new Error('Failed to load meetings index')
    }
    const meetings = await indexResponse.json()
    const meetingInfo = meetings.find((m: any) => m.slug === slug)
    
    if (!meetingInfo) {
      throw new Error('Meeting not found')
    }
    
    // Now load the actual meeting data using the filename
    const response = await fetch(`/data/${meetingInfo.filename}`)
    if (!response.ok) {
      throw new Error('Meeting data not found')
    }
    meeting.value = await response.json()
  } catch (e) {
    error.value = e instanceof Error ? e.message : 'Failed to load meeting'
  } finally {
    loading.value = false
  }
})

const backgroundImage = computed(() => {
  if (!meeting.value) return '/assets/images/slide_skirball-1.jpg'
  const bgField = meeting.value.custom_fields?.find(f => f.meta_key === 'stunnig_headers_bg_img')
  if (bgField?.meta_value) {
    const match = bgField.meta_value.match(/([^/]+)\.(jpg|jpeg|png|webp)$/i)
    if (match) {
      return `/assets/images/${match[0]}`
    }
  }
  return '/assets/images/slide_skirball-1.jpg'
})

const getSpeakerImage = (speaker: Speaker) => {
  if (speaker.photo_local_path) {
    return `/${speaker.photo_local_path}`
  }
  return ''
}

const getMaterialUrl = (material: Material) => {
  if (material.local_path) {
    return `/${material.local_path}`
  }
  return material.url
}
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <AppHeader />

    <!-- Loading State -->
    <div v-if="loading" class="container mx-auto px-4 py-12 text-center">
      <p class="text-xl text-gray-600">Loading meeting details...</p>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="container mx-auto px-4 py-12 text-center">
      <p class="text-xl text-red-600 mb-4">{{ error }}</p>
      <NuxtLink
        to="/all-meetings"
        class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded transition-colors"
      >
        ← Back to All Meetings
      </NuxtLink>
    </div>

    <!-- Main Content -->
    <main v-else-if="meeting" class="container mx-auto px-4 py-12 max-w-4xl">
      <!-- Meeting Header -->
      <div class="text-center mb-8">
        <h1 class="text-4xl font-bold text-blue-600 mb-4">{{ meeting.metadata.title }}</h1>
        <p class="text-2xl text-blue-700 mb-2">{{ meeting.event.date }}</p>
        <p v-if="meeting.event.status === 'ARCHIVED'" class="inline-block bg-yellow-400 text-gray-900 px-4 py-1 rounded font-medium">
          THIS IS AN ARCHIVED PRESENTATION FROM THE ABOVE DATE
        </p>
      </div>

      <hr class="border-gray-300 mb-8">

      <!-- Program Information -->
      <h2 class="text-2xl font-bold text-center text-gray-700 mb-8">PROGRAM INFORMATION</h2>

      <!-- Topics -->
      <div v-for="(topic, index) in meeting.topics" :key="topic.id" class="mb-12">
        <h3 class="text-2xl font-bold text-center text-green-500 mb-6">TOPIC {{ index + 1 }}</h3>

        <!-- Speaker -->
        <div v-for="speaker in topic.speakers" :key="speaker.name" class="text-center mb-6">
          <img 
            v-if="speaker.photo_local_path"
            :src="getSpeakerImage(speaker)" 
            :alt="speaker.name"
            class="w-48 h-48 object-cover mx-auto mb-4 rounded"
            @error="(e) => ((e.target as HTMLImageElement).style.display = 'none')"
          >
          <h4 class="text-xl font-bold mb-1">{{ speaker.name }}</h4>
          <p class="text-green-500 mb-4" v-html="speaker.title"></p>
          <p v-if="speaker.bio" class="text-gray-700 text-sm leading-relaxed mb-4 text-left">{{ speaker.bio }}</p>
        </div>

        <!-- Presentation Title -->
        <h4 class="text-2xl font-bold text-center mb-4">{{ topic.presentation.title }}</h4>

        <!-- Description -->
        <p class="text-gray-700 leading-relaxed mb-6 text-left">{{ topic.presentation.description }}</p>

        <!-- Learning Outcomes -->
        <div v-if="topic.presentation.learning_outcomes && topic.presentation.learning_outcomes.length > 0" class="mb-6">
          <h5 class="text-xl font-bold text-blue-600 mb-3">Attend this talk and learn...</h5>
          <ul class="space-y-2">
            <li v-for="(outcome, idx) in topic.presentation.learning_outcomes" :key="idx" class="flex items-start">
              <span class="text-green-500 mr-2 flex-shrink-0">→</span>
              <span class="text-gray-700">{{ outcome }}</span>
            </li>
          </ul>
        </div>

        <!-- Materials -->
        <div v-if="topic.materials && topic.materials.length > 0" class="bg-yellow-400 p-6 rounded mb-6">
          <h5 class="text-xl font-bold text-center mb-4">ARCHIVE MATERIALS</h5>
          <div class="flex flex-wrap justify-center gap-4">
            <a 
              v-for="material in topic.materials" 
              :key="material.label"
              :href="getMaterialUrl(material)"
              target="_blank"
              :class="material.type === 'recording' ? 'bg-blue-600' : 'bg-green-600'"
              class="text-white px-6 py-2 rounded font-medium hover:opacity-90 transition-opacity"
            >
              {{ material.label }}
            </a>
          </div>
        </div>
      </div>

      <!-- Back Button -->
      <div class="text-center mt-12">
        <NuxtLink
          to="/all-meetings"
          class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded transition-colors"
        >
          ← BACK TO ALL MEETINGS
        </NuxtLink>
      </div>
    </main>

    <AppFooter />
  </div>
</template>
