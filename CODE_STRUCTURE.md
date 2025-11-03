# AAII Los Angeles Meetings Website - Complete Code Structure

## Project Overview
A Nuxt 4/NuxtHub website with Tailwind CSS that displays AAII Los Angeles chapter meetings, including archived presentations with speakers, materials, and learning outcomes.

## Technology Stack
- **Framework**: Nuxt 4
- **Styling**: Tailwind CSS
- **Package Manager**: pnpm
- **Node.js**: v22.13.0

## Project Structure

```
aaii-meetings-site/
├── app/
│   ├── app.vue                    # Root application component
│   └── pages/
│       ├── index.vue              # Main meetings listing page
│       └── meeting/
│           └── [slug].vue         # Dynamic meeting detail page
├── public/
│   ├── data/                      # Meeting JSON data files (50 files)
│   ├── assets/
│   │   ├── images/                # Meeting images and backgrounds
│   │   └── pdfs/                  # Presentation PDFs
│   ├── meetings-index.json        # Index of all meetings
│   └── favicon.ico
├── scripts/
│   └── generate-meetings-index.js # Script to generate meetings index
├── server/
│   └── api/
│       └── ping.ts                # API health check endpoint
├── nuxt.config.ts                 # Nuxt configuration
├── tailwind.config.js             # Tailwind CSS configuration
├── package.json                   # Dependencies and scripts
├── tsconfig.json                  # TypeScript configuration
├── todo.md                        # Project task tracking
└── PROJECT_README.md              # Project documentation
```

## Key Files

### 1. `nuxt.config.ts`
```typescript
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  vite: {
    server: {
      hmr: {
        protocol: 'wss',
        clientPort: 443,
      },
      host: '0.0.0.0',
      allowedHosts: [
        '3001-il9is9gthz3nck52yr5kr-9a2afbc4.manusvm.computer'
      ]
    }
  }
})
```

### 2. `app/app.vue`
```vue
<template>
  <div>
    <NuxtPage />
  </div>
</template>
```

### 3. `app/pages/index.vue` (Main Meetings Listing)
```vue
<script setup lang="ts">
interface Meeting {
  id: string
  title: string
  slug: string
  date: string
  status: string
  category: string
  thumbnailId: string
  backgroundImage: string
  topics: number
  filename: string
}

const meetings = ref<Meeting[]>([])
const loading = ref(true)

onMounted(async () => {
  try {
    const response = await fetch('/meetings-index.json')
    const data = await response.json()
    meetings.value = data
  } catch (error) {
    console.error('Failed to load meetings:', error)
  } finally {
    loading.value = false
  }
})

const futureMeetings = computed(() => 
  meetings.value.filter(m => m.status === 'FUTURE')
)

const archivedMeetings = computed(() => 
  meetings.value.filter(m => m.status === 'ARCHIVED')
)
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <header class="bg-white shadow-sm sticky top-0 z-50">
      <div class="container mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-4">
            <NuxtLink to="/" class="text-2xl font-bold">
              <span class="text-gray-700">AAII</span>
              <span class="text-green-500">LA</span>
            </NuxtLink>
          </div>
          <nav class="hidden md:flex space-x-6">
            <a href="#" class="text-green-500 font-medium hover:text-green-600">Home</a>
            <NuxtLink to="/" class="text-blue-600 font-medium hover:text-blue-700 border-b-2 border-blue-600">All Meetings</NuxtLink>
            <a href="#" class="text-gray-600 hover:text-gray-800">Chapter Leadership</a>
            <a href="#" class="text-gray-600 hover:text-gray-800">About Us</a>
            <a href="#" class="text-gray-600 hover:text-gray-800">Contact Us</a>
            <a href="#" class="text-blue-600 font-medium hover:text-blue-700">CONTRIBUTIONS</a>
          </nav>
          <div class="flex items-center space-x-3">
            <a href="https://www.facebook.com/AAIILA" target="_blank" class="text-blue-600 hover:text-blue-700">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="https://www.meetup.com/aaii-los-angeles/" target="_blank" class="text-red-600 hover:text-red-700">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.98 9.98c0-.53.43-.96.96-.96s.96.43.96.96-.43.96-.96.96-.96-.43-.96-.96zm11.5 6.5c-.53 0-.96-.43-.96-.96s.43-.96.96-.96.96.43.96.96-.43.96-.96.96zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="container mx-auto px-4 py-12">
      <!-- Page Title -->
      <div class="text-center mb-12">
        <h1 class="text-5xl font-bold text-blue-600 mb-4">All Meetings</h1>
      </div>

      <!-- Future Meetings Section -->
      <section v-if="futureMeetings.length > 0" class="mb-16">
        <h2 class="text-3xl font-bold text-blue-600 text-center mb-2">
          Future Meetings of the AAII Los Angeles Chapter
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          <div v-for="meeting in futureMeetings" :key="meeting.id" class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
            <img 
              :src="`/assets/images/slide_skirball-1.jpg`" 
              :alt="meeting.title"
              class="w-full h-48 object-cover"
            >
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">{{ meeting.title }}</h3>
              <p class="text-gray-600 text-sm mb-4">
                Financial Education meeting information that focuses on the broad overview of basic individual investing in today's market.
              </p>
              <NuxtLink 
                :to="`/meeting/${meeting.slug}`"
                class="inline-block bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-2 rounded transition-colors"
              >
                Read more
              </NuxtLink>
            </div>
          </div>
        </div>
      </section>

      <!-- Archived Meetings Section -->
      <section>
        <h2 class="text-3xl font-bold text-blue-600 text-center mb-2">
          All Archived Meeting Presentations
        </h2>
        <p class="text-center text-green-500 text-lg mb-8">
          Browse all past presentations and associated PDF materials
        </p>

        <div v-if="loading" class="text-center py-12">
          <p class="text-xl text-gray-600">Loading meetings...</p>
        </div>

        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="meeting in archivedMeetings" :key="meeting.id" class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
            <img 
              :src="`/assets/images/slide_skirball-1.jpg`" 
              :alt="meeting.title"
              class="w-full h-48 object-cover"
            >
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">{{ meeting.title }}</h3>
              <p class="text-gray-600 text-sm mb-4">
                Financial Education meeting information that focuses on the broad overview of basic individual investing in today's market.
              </p>
              <NuxtLink 
                :to="`/meeting/${meeting.slug}`"
                class="inline-block bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-2 rounded transition-colors"
              >
                Read more
              </NuxtLink>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-8 mt-12">
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
```

### 4. `app/pages/meeting/[slug].vue` (Meeting Detail Page)
```vue
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
    <!-- Header (same as index.vue) -->
    <header class="bg-white shadow-sm sticky top-0 z-50">
      <!-- ... header content ... -->
    </header>

    <!-- Loading State -->
    <div v-if="loading" class="container mx-auto px-4 py-12 text-center">
      <p class="text-xl text-gray-600">Loading meeting details...</p>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="container mx-auto px-4 py-12 text-center">
      <p class="text-xl text-red-600 mb-4">{{ error }}</p>
      <NuxtLink 
        to="/"
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
          to="/"
          class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded transition-colors"
        >
          ← BACK TO ALL MEETINGS
        </NuxtLink>
      </div>
    </main>

    <!-- Footer (same as index.vue) -->
    <footer class="bg-gray-900 text-white py-8 mt-12">
      <!-- ... footer content ... -->
    </footer>
  </div>
</template>
```

### 5. `scripts/generate-meetings-index.js`
```javascript
const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '../public/data');
const outputFile = path.join(__dirname, '../public/meetings-index.json');

const files = fs.readdirSync(dataDir).filter(file => file.endsWith('.json'));

const meetings = files.map(file => {
  const content = JSON.parse(fs.readFileSync(path.join(dataDir, file), 'utf-8'));
  
  return {
    id: content.metadata.post_id,
    title: content.metadata.title,
    slug: content.metadata.post_name,
    date: content.event.date,
    status: content.event.status,
    category: content.metadata.category,
    thumbnailId: content.custom_fields?.find(f => f.meta_key === '_thumbnail_id')?.meta_value || '',
    backgroundImage: content.custom_fields?.find(f => f.meta_key === 'stunnig_headers_bg_img')?.meta_value || '',
    topics: content.topics.length,
    filename: file
  };
});

// Sort by date (newest first)
meetings.sort((a, b) => new Date(b.date) - new Date(a.date));

fs.writeFileSync(outputFile, JSON.stringify(meetings, null, 2));
console.log(`Generated meetings index with ${meetings.length} meetings`);
```

### 6. `package.json`
```json
{
  "name": "nuxt-app",
  "private": true,
  "type": "module",
  "scripts": {
    "build": "nuxt build",
    "dev": "nuxt dev",
    "generate": "nuxt generate",
    "preview": "nuxt preview",
    "postinstall": "nuxt prepare"
  },
  "dependencies": {
    "nuxt": "^3.14.159",
    "vue": "latest"
  },
  "devDependencies": {
    "@nuxtjs/tailwindcss": "^6.12.2"
  }
}
```

### 7. `tailwind.config.js`
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## Data Structure

### Meeting JSON Format (`public/data/*.json`)
```json
{
  "metadata": {
    "title": "July 2025 Webinar ARCHIVE",
    "link": "https://aaiila.org/...",
    "post_id": "17614",
    "post_name": "july-2025-webinar-archive",
    "post_date": "2025-07-19 21:00:00",
    "category": "Hotel ANGELENO Monthly Meeting Archived",
    "creator": "admin"
  },
  "custom_fields": [
    {
      "meta_key": "stunnig_headers_bg_img",
      "meta_value": "slide_skirball-1.jpg"
    }
  ],
  "event": {
    "date": "Saturday, July 19, 2025",
    "status": "ARCHIVED"
  },
  "topics": [
    {
      "id": 1,
      "speakers": [
        {
          "name": "Dan Niles",
          "title": "Founder of Dan Niles Investment Management",
          "bio": "Dan Niles is the Founder...",
          "photo_local_path": "assets/images/dan-niles.jpg"
        }
      ],
      "presentation": {
        "title": "Dreaming of Sleigh Bells...",
        "description": "...",
        "learning_outcomes": [
          "Why I was bearish...",
          "Why the economy..."
        ]
      },
      "materials": [
        {
          "type": "recording",
          "url": "https://...",
          "label": "Webinar Recording",
          "local_path": "assets/pdfs/..."
        }
      ]
    }
  ]
}
```

### Meetings Index Format (`public/meetings-index.json`)
```json
[
  {
    "id": "17801",
    "title": "October 2025 HOTEL Angeleno /Webinar ARCHIVE",
    "slug": "october-2025-hotel-angeleno-webinar-archive",
    "date": "Saturday, October 18, 2025",
    "status": "ARCHIVED",
    "category": "Hotel ANGELENO Monthly Meeting Archived",
    "thumbnailId": "17142",
    "backgroundImage": "slide_skirball-1.jpg",
    "topics": 2,
    "filename": "october-2025-hotel-angeleno-webinar-archive-17801.json"
  }
]
```

## Development Commands

```bash
# Install dependencies
pnpm install

# Generate meetings index
node scripts/generate-meetings-index.js

# Run development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Features Implemented

1. **Main Meetings Listing Page**
   - Grid layout with 4 columns (responsive)
   - Displays all 50 archived meetings
   - Meeting cards with images and descriptions
   - "Read more" buttons linking to detail pages

2. **Meeting Detail Pages**
   - Dynamic routing based on meeting slug
   - Meeting title, date, and archived status banner
   - Multiple topics per meeting
   - Speaker information with photos and bios
   - Presentation titles and descriptions
   - Learning outcomes lists
   - Archive materials (webinar recordings and PDFs)
   - Back button to return to main listing

3. **Styling**
   - Blue headings (#2563eb)
   - Green accents (#22c55e)
   - Red buttons (#dc2626)
   - Responsive design
   - Hover effects and transitions

4. **Header & Footer**
   - AAII LA branding
   - Navigation menu
   - Social media icons (Facebook, Meetup)
   - Disclaimer and copyright information

## Assets

- **Images**: 50+ meeting images in `public/assets/images/`
- **PDFs**: Presentation materials in `public/assets/pdfs/`
- **JSON Data**: 50 meeting JSON files in `public/data/`

## Notes

- All meeting data is loaded client-side from JSON files
- Images are served from the public directory
- The site is fully static and can be deployed to any hosting platform
- Meeting slugs are used for routing (e.g., `/meeting/july-2025-webinar-archive`)
