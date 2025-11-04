<script setup lang="ts">
interface IconBox {
  icon: string
  title: string
  description: string
}

const boxes: IconBox[] = [
  {
    icon: 'tourism-eighteenth-column',
    title: 'Non-Biased Education',
    description: 'The LA Chapter of AAII has nothing to sell...we offer only financial education to help the individual investor.'
  },
  {
    icon: 'tourism-eighteenth-arm-2',
    title: 'Relationship Building',
    description: 'You have the opportunity to interact with other investors and exchange experiences and knowledge.'
  },
  {
    icon: 'tourism-eighteenth-mouthpiece',
    title: 'Keynote Speakers',
    description: 'You will hear wealth-building experts share their valuable financial know-how for your benefit.'
  },
  {
    icon: 'tourism-eighteenth-calendar',
    title: 'Chapter Meetings',
    description: 'Covers a wide range of financial topics, plus Special Interest Groups (SIGs), from basic to advanced.'
  }
]
</script>

<template>
  <section class="py-16 bg-white">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="box in boxes" :key="box.title" class="dfd-info-box style-1 layout-1 text-center">
          <div class="head-wrap">
            <div class="icon-wrapper">
              <div class="module-icon">
                <div class="icon-container">
                  <i :class="['featured-icon', box.icon]"></i>
                </div>
              </div>
            </div>
            <div class="title-wrap">
              <div class="info-box-title dfd-content-title-big">
                {{ box.title }}
              </div>
            </div>
          </div>
          <div class="container-info">
            <div class="empty-cell"></div>
            <div class="content-cell">
              <div class="description">
                {{ box.description }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
/* Import the tourism-eighteenth icon font */
@font-face {
  font-family: 'tourism-eighteenth';
  src: url('/tourism-eighteenth/fonts/tourism-eighteenth.eot?pkc8wj');
  src: url('/tourism-eighteenth/fonts/tourism-eighteenth.eot?pkc8wj#iefix') format('embedded-opentype'),
    url('/tourism-eighteenth/fonts/tourism-eighteenth.ttf?pkc8wj') format('truetype'),
    url('/tourism-eighteenth/fonts/tourism-eighteenth.woff?pkc8wj') format('woff'),
    url('/tourism-eighteenth/fonts/tourism-eighteenth.svg?pkc8wj#tourism-eighteenth') format('svg');
  font-weight: normal;
  font-style: normal;
}

/* Apply font to tourism-eighteenth-* classes */
[class^="tourism-eighteenth-"],
[class*=" tourism-eighteenth-"] {
  font-family: 'tourism-eighteenth' !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Icon unicode mappings */
.tourism-eighteenth-column:before {
  content: "\e91a";
}

.tourism-eighteenth-arm-2:before {
  content: "\e905";
}

.tourism-eighteenth-mouthpiece:before {
  content: "\e940";
}

.tourism-eighteenth-calendar:before {
  content: "\e910";
}
</style>

<style scoped>
.dfd-info-box {
  padding: 1.5rem;
}

.head-wrap {
  margin-bottom: 1rem;
}

.icon-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;
}

.module-icon {
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.featured-icon {
  font-size: 80px;
  color: #34d389;
  line-height: 1;
}

.info-box-title {
  font-size: 23px;
  line-height: 23px;
  letter-spacing: -1px;
  font-weight: bold;
  color: #333;
  margin-bottom: 1rem;
}

.container-info {
  display: flex;
  flex-direction: column;
}

.content-cell {
  padding: 0 1rem;
}

.description {
  font-size: 16px;
  line-height: 1.6;
  color: #666;
}

/* Mobile spacing */
@media (max-width: 1023px) {
  .dfd-info-box {
    margin-bottom: 30px;
  }
}

@media (max-width: 799px) {
  .dfd-info-box {
    margin-bottom: 30px;
  }
}
</style>
