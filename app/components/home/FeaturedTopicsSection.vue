<script setup lang="ts">
interface Topic {
  title: string
  subtitle: string
  description: string
  image: string
  link: string
}

const topics: Topic[] = [
  {
    title: 'Upcoming Major Speaker Webinar Schedule',
    subtitle: 'Speaker Seminars and Q&A',
    description: 'Chapter meetings at the Skirball Cultural Center cover a wide range of financial topics. Each month, two investment industry experts give presentations with slides, followed by a Q&A session.',
    image: '/assets/images/cat_smm-3.jpg',
    link: '#'
  },
  {
    title: 'Retirement and Investing',
    subtitle: 'A Subgroup Dedicated to Investing for Retirement',
    description: 'A Special Interest Group (SIG) dedicated to the retiree (or those planning for retirement) that meets on the first Saturday of every odd-numbered month. Whether you are an expert or a novice, we have something for everyone.',
    image: '/assets/images/cat_ri-1.jpg',
    link: '#'
  },
  {
    title: 'Strategic Investing',
    subtitle: 'A Subgroup for Advanced Investment Strategies',
    description: 'A Special Interest Group (SIG) to give the individual investor the opportunity--in a smaller group--to gain exposure to more advanced strategies/research to enhance his or her portfolio.',
    image: '/assets/images/cat_si.jpg',
    link: '#'
  },
  {
    title: 'Investing Fundamentals',
    subtitle: 'Seminars Providing an Introduction to Investing',
    description: 'Seminars for individuals wanting to learn how to invest, this six-part, monthly class gives a comprehensive look at the basics of investing--including choosing stocks, building a portfolio and selecting a broker.',
    image: '/assets/images/cat_if.jpg',
    link: '#'
  }
]
</script>

<template>
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <FlipCard
          v-for="(topic, index) in topics"
          :key="index"
          :title="topic.title"
          :subtitle="topic.subtitle"
          :description="topic.description"
          :background-image="topic.image"
          :link="topic.link"
          :animation-delay="index * 150"
        />
      </div>
    </div>
  </section>
</template>
