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
          <div class="flip-card-description">{{ description }}</div>
        </div>
      </div>

      <!-- Full Box Link -->
      <NuxtLink
        v-if="link !== '#'"
        :to="link"
        class="full-box-link"
        title=""
      ></NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.flip-card-container {
  perspective: 1000px;
  min-height: 400px;
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
  transition: transform 0.6s ease;
  transform-style: preserve-3d;
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
  min-height: 400px;
  backface-visibility: hidden;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.flip-card-front {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
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
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.5) 100%);
}

.flip-card-content {
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 2rem 1.5rem;
  color: white;
  width: 100%;
}

.flip-card-title {
  font-family: 'Montserrat', sans-serif;
  font-size: 30px;
  font-weight: 600;
  line-height: 38px;
  margin-bottom: 0.5rem;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.flip-card-subtitle {
  font-family: 'Montserrat', sans-serif;
  font-size: 22px;
  font-weight: 600;
  line-height: 30px;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: white;
  opacity: 0.95;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

.flip-card-back {
  background-color: #666666;
  transform: rotateY(180deg);
  display: flex;
  align-items: center;
  justify-content: center;
}

.flip-card-description {
  font-size: 16px;
  line-height: 1.6;
  color: white;
  padding: 0 1rem;
}

/* Full box link covering entire card */
.full-box-link {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
  text-decoration: none;
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .flip-card-container {
    min-height: 350px;
    height: 350px;
  }

  .flip-card-face {
    min-height: 350px;
  }

  .flip-card-title {
    font-size: 24px;
    line-height: 30px;
  }

  .flip-card-subtitle {
    font-size: 18px;
    line-height: 26px;
    letter-spacing: 1px;
  }

  .flip-card-description {
    font-size: 14px;
  }
}
</style>
