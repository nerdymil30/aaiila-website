<script setup lang="ts">
interface Props {
  title: string
  subtitle: string
  description: string
  backgroundImage: string
  link?: string
  animationDelay?: number
}

const props = withDefaults(defineProps<Props>(), {
  link: '#',
  animationDelay: 0
})

const isFlipped = ref(false)
const hasAnimated = ref(false)

const toggleFlip = () => {
  isFlipped.value = !isFlipped.value
}

onMounted(() => {
  // Trigger entrance animation
  setTimeout(() => {
    hasAnimated.value = true
  }, props.animationDelay)
})
</script>

<template>
  <div
    class="flip-card-container"
    :class="{ 'has-animated': hasAnimated }"
    :style="{ '--animation-delay': `${animationDelay}ms` }"
    @mouseenter="toggleFlip"
    @mouseleave="toggleFlip"
  >
    <div class="flip-card" :class="{ 'is-flipped': isFlipped }">
      <!-- Front Face -->
      <div
        class="flip-card-face flip-card-front"
        :style="{ backgroundImage: `url(${backgroundImage})` }"
      >
        <div class="flip-card-overlay"></div>
        <div class="flip-card-content">
          <h4 class="flip-card-title" v-html="title"></h4>
          <h5 class="flip-card-subtitle">{{ subtitle }}</h5>
        </div>
      </div>

      <!-- Back Face -->
      <div class="flip-card-face flip-card-back">
        <div class="flip-card-content">
          <p class="flip-card-description">{{ description }}</p>
          <NuxtLink
            v-if="link !== '#'"
            :to="link"
            class="flip-card-link"
          >
            Learn More →
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.flip-card-container {
  perspective: 1000px;
  height: 400px;
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
  transition-delay: var(--animation-delay);
  position: relative;
  z-index: 1;
}

.flip-card-container:hover {
  z-index: 10;
}

.flip-card-container.has-animated {
  opacity: 1;
  transform: translateY(0);
}

.flip-card {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  cursor: pointer;
}

.flip-card.is-flipped {
  transform: rotateY(180deg);
}

.flip-card-face {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.flip-card-front {
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.flip-card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.4) 100%);
}

.flip-card-content {
  position: relative;
  z-index: 10;
  text-align: center;
  padding: 2rem;
  color: white;
}

.flip-card-title {
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.4;
  margin-bottom: 1rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.flip-card-subtitle {
  font-size: 1rem;
  line-height: 1.6;
  opacity: 0.95;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

.flip-card-back {
  background: linear-gradient(135deg, #4a5568 0%, #2d3748 100%);
  transform: rotateY(180deg);
  display: flex;
  align-items: center;
  justify-content: center;
}

.flip-card-description {
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.flip-card-link {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: #3b82f6;
  color: white;
  border-radius: 0.375rem;
  font-weight: 600;
  transition: background-color 0.3s ease;
  text-decoration: none;
}

.flip-card-link:hover {
  background-color: #2563eb;
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .flip-card-container {
    height: 350px;
  }

  .flip-card-title {
    font-size: 1.25rem;
  }

  .flip-card-subtitle {
    font-size: 0.9rem;
  }

  .flip-card-description {
    font-size: 0.875rem;
  }
}
</style>
