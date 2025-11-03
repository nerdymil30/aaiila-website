<template>
  <div class="hero-slider relative w-full h-[700px] overflow-hidden">
    <ClientOnly>
      <Swiper
        :modules="modules"
        :slides-per-view="1"
        :space-between="0"
        :loop="true"
        :autoplay="{
          delay: 12000,
          disableOnInteraction: false,
        }"
        :effect="'fade'"
        :fade-effect="{
          crossFade: true
        }"
        :navigation="true"
        class="h-full"
      >
        <!-- Slide 1: AAII Welcome -->
        <SwiperSlide>
          <div class="relative h-full">
            <!-- Background with Ken Burns effect -->
            <div class="absolute inset-0 overflow-hidden">
              <div class="hero-bg-zoom w-full h-full bg-cover bg-center"
                   style="background-image: url('/slider/images/background.jpg')">
              </div>
            </div>

            <!-- Content Overlay -->
            <div class="relative h-full flex flex-col items-center justify-center text-white z-10">
              <!-- Welcome Text -->
              <h2 class="hero-text-slide-bottom text-3xl md:text-4xl font-normal text-center mb-8 px-4 max-w-4xl">
                Welcome to the Los Angeles Chapter of AAII
              </h2>

              <!-- AAII LA Logo -->
              <div class="hero-logo-slide-up mb-8">
                <img
                  src="/slider/images/aaiilaslide_logo.png"
                  alt="AAII LA Logo"
                  class="w-[600px] h-auto max-w-full px-4"
                >
              </div>

              <!-- INVESTMENT + Rotating Words on Same Line -->
              <div class="flex flex-row flex-nowrap items-center justify-center gap-2 md:gap-4 mb-8 px-4">
                <!-- Animated Text: INVESTMENT -->
                <div class="hero-investment-text text-4xl md:text-5xl lg:text-6xl font-extrabold whitespace-nowrap">
                  INVESTMENT:
                </div>

                <!-- Rotating Words -->
                <div class="hero-words-rotate text-4xl md:text-5xl lg:text-6xl font-normal relative inline-block" style="min-width: 250px; height: 1.2em;">
                  <transition name="word-fade" mode="out-in">
                    <div :key="currentWord" class="absolute left-0 top-0 whitespace-nowrap">
                      {{ currentWord }}
                    </div>
                  </transition>
                </div>
              </div>

              <!-- CTA Button -->
              <NuxtLink
                to="/all-meetings"
                class="hero-button-fade bg-green-500/75 hover:bg-blue-600/85 text-white font-medium px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Click Here For Our Next Event
                <span class="ml-2">→</span>
              </NuxtLink>
            </div>
          </div>
        </SwiperSlide>

        <!-- Slide 2: Monthly Meetings at Skirball -->
        <SwiperSlide>
          <div class="relative h-full">
            <!-- Background with Ken Burns effect -->
            <div class="absolute inset-0 overflow-hidden">
              <div class="hero-bg-zoom w-full h-full bg-cover bg-center"
                   style="background-image: url('/slider/images/slide_skirball-1.jpg')">
              </div>
            </div>

            <!-- Content Overlay -->
            <div class="relative h-full flex flex-col items-center justify-center text-white z-10">
              <!-- Top Text -->
              <h2 class="slide-text-fade text-xl md:text-2xl font-normal text-center mb-4 px-4">
                Come Join us for our Monthly Meetings
              </h2>
              <h1 class="slide-text-fade text-4xl md:text-5xl font-extrabold text-center mb-12 px-4">
                AT SKIRBALL CENTER
              </h1>

              <!-- Number Circle -->
              <div class="relative mb-8">
                <div class="relative w-48 h-48 flex items-center justify-center">
                  <div class="absolute inset-0 bg-gray-900/70 rounded-full"></div>
                  <span class="relative text-9xl font-extrabold">2</span>
                </div>
              </div>

              <!-- Keynote Speakers Text -->
              <h2 class="slide-text-fade text-3xl md:text-4xl font-bold text-center mb-2 px-4">
                Keynote Speakers
              </h2>
              <h3 class="slide-text-fade text-xl md:text-2xl font-normal text-center mb-12 px-4">
                Sharing Expert Investing Knowledge
              </h3>

              <!-- CTA Button -->
              <NuxtLink
                to="/all-meetings"
                class="slide-button-fade bg-green-500/75 hover:bg-blue-600/85 text-white font-medium px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Click Here For Upcoming Meetings
                <span class="ml-2">→</span>
              </NuxtLink>
            </div>
          </div>
        </SwiperSlide>

        <!-- Slide 3: Retirement and Investing -->
        <SwiperSlide>
          <div class="relative h-full">
            <!-- Background with Ken Burns effect -->
            <div class="absolute inset-0 overflow-hidden">
              <div class="hero-bg-zoom w-full h-full bg-cover bg-center"
                   style="background-image: url('/slider/images/slide_retirement.jpg')">
              </div>
            </div>

            <!-- Content Overlay -->
            <div class="relative h-full flex flex-col items-center justify-center text-white z-10">
              <!-- Top Text -->
              <h1 class="slide-text-fade text-3xl md:text-4xl font-normal text-center mb-4 px-4 max-w-4xl">
                Learn How to Invest For The Future!
              </h1>

              <h3 class="slide-text-fade text-lg md:text-xl font-normal text-center mb-12 px-4 max-w-3xl">
                Join us for our special interest group meetings that focus on...
              </h3>

              <!-- Main Title -->
              <h2 class="slide-text-fade text-5xl md:text-6xl font-extrabold text-center mb-12 px-4">
                RETIREMENT and INVESTING
              </h2>

              <!-- CTA Button -->
              <NuxtLink
                to="/all-meetings"
                class="slide-button-fade bg-green-500/75 hover:bg-blue-600/85 text-white font-medium px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Click Here For Upcoming Meetings
                <span class="ml-2">→</span>
              </NuxtLink>
            </div>
          </div>
        </SwiperSlide>

        <!-- Slide 4: Strategic Investing -->
        <SwiperSlide>
          <div class="relative h-full">
            <!-- Background with Ken Burns effect -->
            <div class="absolute inset-0 overflow-hidden">
              <div class="hero-bg-zoom w-full h-full bg-cover bg-center"
                   style="background-image: url('/slider/images/slide_strategies.jpg')">
              </div>
            </div>

            <!-- Content Overlay -->
            <div class="relative h-full flex flex-col items-center justify-center text-white z-10">
              <!-- Top Text -->
              <h1 class="slide-text-fade text-3xl md:text-4xl font-normal text-center mb-4 px-4 max-w-4xl">
                Learn From Experts How To Maximize Your Investments
              </h1>

              <h3 class="slide-text-fade text-lg md:text-xl font-normal text-center mb-12 px-4 max-w-3xl">
                Join us for our special interest group meetings that focuses on...
              </h3>

              <!-- Main Title -->
              <h2 class="slide-text-fade text-5xl md:text-6xl font-extrabold text-center mb-12 px-4">
                STRATEGIC INVESTING
              </h2>

              <!-- CTA Button -->
              <NuxtLink
                to="/all-meetings"
                class="slide-button-fade bg-green-500/75 hover:bg-blue-600/85 text-white font-medium px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Click Here For Upcoming Meetings
                <span class="ml-2">→</span>
              </NuxtLink>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, EffectFade, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'

const modules = [Autoplay, EffectFade, Navigation]

// Rotating words animation
const words = ref(['TRAINING', 'EDUCATION', 'FELLOWSHIP', 'SUCCESS'])
const currentWordIndex = ref(0)
const currentWord = computed(() => words.value[currentWordIndex.value])

let wordInterval: NodeJS.Timeout | null = null

onMounted(() => {
  // Rotate words every 2 seconds (1s display + 1s transition)
  // Stop after one complete cycle through all 4 words
  let cycleCount = 0
  wordInterval = setInterval(() => {
    currentWordIndex.value = (currentWordIndex.value + 1) % words.value.length
    cycleCount++
    // Stop after 3 rotations (showing all 4 words: TRAINING initially, then EDUCATION, FELLOWSHIP, SUCCESS)
    if (cycleCount >= 3 && wordInterval) {
      clearInterval(wordInterval)
      wordInterval = null
    }
  }, 2000)
})

onUnmounted(() => {
  if (wordInterval) {
    clearInterval(wordInterval)
  }
})
</script>

<style scoped>
/* Ken Burns pan/zoom effect on background */
.hero-bg-zoom {
  animation: kenBurns 12s ease-in-out infinite alternate;
}

@keyframes kenBurns {
  0% {
    transform: scale(1) translateX(0) translateY(0);
  }
  100% {
    transform: scale(1.2) translateX(-5%) translateY(-3%);
  }
}

/* Text slide from bottom animation - "Welcome to Los Angeles..." - starts at 0.3s */
.hero-text-slide-bottom {
  animation: slideFromBottom 1s ease-out 0.3s backwards;
}

@keyframes slideFromBottom {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Logo slide from bottom animation - starts at 1.31s */
.hero-logo-slide-up {
  animation: slideFromBottom 1s ease-out 1.31s backwards;
}

/* Fade in animation for INVESTMENT text - starts at 3s */
.hero-investment-text {
  animation: fadeIn 1s ease-out 3s backwards;
}

/* Rotating words animation - starts at 3s with INVESTMENT */
.hero-words-rotate {
  animation: fadeIn 1s ease-out 3s backwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Word transition - 1s per word, 1s transition (2s total per word cycle) */
.word-fade-enter-active,
.word-fade-leave-active {
  transition: all 1s ease;
}

.word-fade-enter-from {
  opacity: 0;
  transform: translateX(50px);
}

.word-fade-leave-to {
  opacity: 0;
  transform: translateX(-50px);
}

/* Button fade in - starts at 2.1s */
.hero-button-fade {
  animation: fadeIn 0.5s ease-out 2.1s backwards;
}

/* Slide 2, 3, 4 text animations */
.slide-text-fade {
  animation: fadeIn 1.0s ease-out 0.5s backwards;
}

.slide-button-fade {
  animation: fadeIn 0.8s ease-out 1.5s backwards;
}

/* Swiper navigation button customization */
:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  color: rgba(255, 255, 255, 0.9);
  background: rgba(0, 0, 0, 0.3);
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

:deep(.swiper-button-next):hover,
:deep(.swiper-button-prev):hover {
  background: rgba(0, 0, 0, 0.5);
}

:deep(.swiper-button-next)::after,
:deep(.swiper-button-prev)::after {
  font-size: 20px;
}
</style>
