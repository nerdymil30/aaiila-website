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
  meetings.value?.filter(m => m.status !== 'ARCHIVED').slice(0, 3) || []
)

const getImageUrl = (meeting: Meeting) => {
  if (meeting.backgroundImage) {
    const match = meeting.backgroundImage.match(/([^/]+)\.(jpg|jpeg|png|webp)$/i)
    if (match) {
      return `/assets/images/${match[0]}`
    }
  }
  return '/assets/images/slide_skirball-1.jpg'
}

// Statistics counter animation
const investmentClasses = ref(0)
const activeMembers = ref(0)
const keynoteSpeakers = ref(0)

const animateCounter = (ref: any, target: number, duration: number = 2000) => {
  const start = 0
  const increment = target / (duration / 16)
  let current = start

  const timer = setInterval(() => {
    current += increment
    if (current >= target) {
      ref.value = target
      clearInterval(timer)
    } else {
      ref.value = Math.floor(current)
    }
  }, 16)
}

onMounted(() => {
  // Animate counters when page loads
  setTimeout(() => {
    animateCounter(investmentClasses, 600, 2000)
    animateCounter(activeMembers, 1800, 2000)
    animateCounter(keynoteSpeakers, 30, 1500)
  }, 500)
})
</script>

<template>
  <div class="min-h-screen bg-white">
    <AppHeader />

    <!-- Hero Slider -->
    <HeroSlider />

    <!-- Featured Topic Boxes - Flip Cards -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Upcoming Speaker Webinar -->
          <FlipCard
            title="Upcoming Major Speaker Webinar Schedule"
            subtitle="Speaker Seminars and Q&A"
            description="Chapter meetings at the Skirball Cultural Center cover a wide range of financial topics. Each month, two investment industry experts give presentations with slides, followed by a Q&A session."
            background-image="/assets/images/cat_smm-3.jpg"
            link="#"
            :animation-delay="0"
          />

          <!-- Retirement and Investing -->
          <FlipCard
            title="Retirement and Investing"
            subtitle="A Subgroup Dedicated to Investing for Retirement"
            description="A Special Interest Group (SIG) dedicated to the retiree (or those planning for retirement) that meets on the first Saturday of every odd-numbered month. Whether you are an expert or a novice, we have something for everyone."
            background-image="/assets/images/cat_ri-1.jpg"
            link="#"
            :animation-delay="150"
          />

          <!-- Strategic Investing -->
          <FlipCard
            title="Strategic Investing"
            subtitle="A Subgroup for Advanced Investment Strategies"
            description="A Special Interest Group (SIG) to give the individual investor the opportunity--in a smaller group--to gain exposure to more advanced strategies/research to enhance his or her portfolio."
            background-image="/assets/images/cat_si.jpg"
            link="#"
            :animation-delay="300"
          />

          <!-- Investing Fundamentals -->
          <FlipCard
            title="Investing Fundamentals"
            subtitle="Seminars Providing an Introduction to Investing"
            description="Seminars for individuals wanting to learn how to invest, this six-part, monthly class gives a comprehensive look at the basics of investing--including choosing stocks, building a portfolio and selecting a broker."
            background-image="/assets/images/cat_if.jpg"
            link="#"
            :animation-delay="450"
          />
        </div>
      </div>
    </section>

    <!-- Our Future Meetings Section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center text-gray-800 mb-12">Our Future Meetings . . .</h2>

        <div v-if="futureMeetings.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <p class="text-gray-600 text-sm mb-4">
                Financial Education meeting information that focuses on the broad overview of basic individual investing in today's market.
              </p>
              <NuxtLink
                :to="`/meeting/${meeting.slug}`"
                class="inline-block bg-red-500 hover:bg-red-600 text-white font-medium px-6 py-2 rounded transition-colors"
              >
                Read more
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Welcome Section -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-8">
          Welcome to the official site of the Los Angeles Chapter of the<br>
          <span class="text-blue-600">American Association of Individual Investors (AAII).</span>
        </h2>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div class="text-gray-700 space-y-4">
            <p>
              Here you'll learn about the more than 30 non-profit educational events we sponsor each year and find links to other investing web pages. All of this is provided by local volunteers in an effort to help you learn to be a wiser, more profitable investor. Membership in AAII is <strong>not</strong> required to attend our meetings.
            </p>
            <p>
              AAII (the National Headquarters) is an independent non-profit educational organization, based in Chicago, with over 150,000 members. For more information about AAII, <a href="https://www.aaii.com" target="_blank" class="text-blue-600 hover:text-blue-700 underline">click here</a> to go to the American Association of Individual Investors Website.
            </p>
            <p>
              Each AAII local chapter is a grassroots organizations led by volunteer AAII members, allowing AAII to extend its mission to individual investors in their own communities by organizing meetings to provide unbiased investment education in a social context.
            </p>
          </div>

          <div class="rounded-lg overflow-hidden shadow-lg">
            <img
              src="/assets/images/slide_skirball-1.jpg"
              alt="AAII Meeting"
              class="w-full h-auto"
            >
          </div>
        </div>
      </div>
    </section>

    <!-- Four Icon Boxes -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <!-- Non-Biased Education -->
          <div class="p-6">
            <div class="text-5xl mb-4">📚</div>
            <h4 class="text-xl font-bold mb-3 text-gray-800">Non-Biased Education</h4>
            <p class="text-gray-600">
              The LA Chapter of AAII has nothing to sell...we offer only financial education to help the individual investor.
            </p>
          </div>

          <!-- Relationship Building -->
          <div class="p-6">
            <div class="text-5xl mb-4">🤝</div>
            <h4 class="text-xl font-bold mb-3 text-gray-800">Relationship Building</h4>
            <p class="text-gray-600">
              You have the opportunity to interact with other investors and exchange experiences and knowledge.
            </p>
          </div>

          <!-- Keynote Speakers -->
          <div class="p-6">
            <div class="text-5xl mb-4">🎤</div>
            <h4 class="text-xl font-bold mb-3 text-gray-800">Keynote Speakers</h4>
            <p class="text-gray-600">
              You will hear wealth-building experts share their valuable financial know-how for your benefit.
            </p>
          </div>

          <!-- Chapter Meetings -->
          <div class="p-6">
            <div class="text-5xl mb-4">📊</div>
            <h4 class="text-xl font-bold mb-3 text-gray-800">Chapter Meetings</h4>
            <p class="text-gray-600">
              Covers a wide range of financial topics, plus Special Interest Groups (SIGs), from basic to advanced.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Come to Our Meetings Section -->
    <section class="py-16 bg-gradient-to-br from-blue-50 to-green-50">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-4xl font-bold text-gray-800 mb-8">
              Why Come to Our Meetings at AAII Los Angeles?
            </h2>

            <ul class="space-y-4">
              <li class="flex items-start">
                <span class="text-green-500 text-2xl mr-3">✓</span>
                <span class="text-gray-700 text-lg">Build your know-how about markets and finances</span>
              </li>
              <li class="flex items-start">
                <span class="text-green-500 text-2xl mr-3">✓</span>
                <span class="text-gray-700 text-lg">Hear and see experts in wealth accumulation and management</span>
              </li>
              <li class="flex items-start">
                <span class="text-green-500 text-2xl mr-3">✓</span>
                <span class="text-gray-700 text-lg">Meet and exchange ideas with fellow investors</span>
              </li>
              <li class="flex items-start">
                <span class="text-green-500 text-2xl mr-3">✓</span>
                <span class="text-gray-700 text-lg">Get current knowledge about investing strategies</span>
              </li>
              <li class="flex items-start">
                <span class="text-green-500 text-2xl mr-3">✓</span>
                <span class="text-gray-700 text-lg">Have certainty that your adviser is steering you in the right direction</span>
              </li>
            </ul>

            <NuxtLink
              to="/all-meetings"
              class="inline-block mt-8 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-3 rounded-lg transition-colors shadow-lg"
            >
              UPCOMING CHAPTER MEETINGS
            </NuxtLink>
          </div>

          <div class="rounded-lg overflow-hidden shadow-xl">
            <img
              src="/assets/images/slide_skirball-1.jpg"
              alt="Meeting attendees"
              class="w-full h-auto"
            >
          </div>
        </div>
      </div>
    </section>

    <!-- Statistics Section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <!-- Investment Classes -->
          <div>
            <div class="text-6xl font-bold text-blue-600 mb-4">{{ investmentClasses }}</div>
            <h4 class="text-xl font-bold text-gray-800 mb-2">Investment Classes</h4>
            <p class="text-gray-600">
              We have presented over 600 investment classes dating back to the 1980s!
            </p>
          </div>

          <!-- Active Members -->
          <div>
            <div class="text-6xl font-bold text-blue-600 mb-4">{{ activeMembers }}</div>
            <h4 class="text-xl font-bold text-gray-800 mb-2">Active AAII LA Members</h4>
            <p class="text-gray-600">
              We have over 1800 AAII members across "Greater Los Angeles"
            </p>
          </div>

          <!-- Keynote Speakers -->
          <div>
            <div class="text-6xl font-bold text-blue-600 mb-4">{{ keynoteSpeakers }}</div>
            <h4 class="text-xl font-bold text-gray-800 mb-2">Keynote Speakers</h4>
            <p class="text-gray-600">
              We feature over 30 keynote speakers each year to showcase their secrets and strategies
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <h3 class="text-3xl font-bold text-center text-gray-800 mb-12">
          Here is what people are saying about<br>
          <span class="text-blue-600">AAII Los Angeles Chapter</span>
        </h3>

        <div class="max-w-4xl mx-auto">
          <div class="bg-white p-8 rounded-lg shadow-lg">
            <p class="text-gray-700 text-lg italic mb-4">
              "AAII speakers share their considerable research of and experience with financial markets, providing a great opportunity for all to advance their knowledge in the financial world. I find the meetings interesting, informative, and helpful in investing."
            </p>
            <p class="text-right text-gray-600 font-semibold">— Dolores T.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-16 bg-gradient-to-br from-blue-100 to-green-100">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center text-gray-800 mb-4">
          Frequently Asked Questions
        </h2>
        <p class="text-center text-gray-600 mb-12">
          If you do not find the answer you are looking for, please contact us.
        </p>

        <div class="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          <a href="#" class="block bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-4 rounded-lg transition-colors text-center shadow-md">
            WHERE DO YOU MEET?
          </a>
          <a href="#" class="block bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-4 rounded-lg transition-colors text-center shadow-md">
            WHEN DO YOU MEET?
          </a>
          <a href="#" class="block bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-4 rounded-lg transition-colors text-center shadow-md">
            IS THERE A FEE OR CHARGE TO ATTEND MEETINGS?
          </a>
          <a href="#" class="block bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-4 rounded-lg transition-colors text-center shadow-md">
            IS THERE A CHARGE FOR PARKING?
          </a>
          <a href="#" class="block bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-4 rounded-lg transition-colors text-center shadow-md">
            WHAT TO EXPECT AT A CHAPTER MEETING AT SKIRBALL?
          </a>
          <a href="#" class="block bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-4 rounded-lg transition-colors text-center shadow-md">
            WHO ATTENDS THESE MEETINGS?
          </a>
          <a href="#" class="block bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-4 rounded-lg transition-colors text-center shadow-md">
            WILL THERE BE HANDOUTS FROM THE PRESENTERS?
          </a>
          <a href="#" class="block bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-4 rounded-lg transition-colors text-center shadow-md">
            WILL I HAVE THE OPPORTUNITY TO ASK QUESTIONS?
          </a>
        </div>
      </div>
    </section>

    <AppFooter />
  </div>
</template>
