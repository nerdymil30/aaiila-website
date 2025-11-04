<template>
  <div>
    <AppHeader />

    <main class="min-h-screen bg-white">
      <!-- Hero Title Section -->
      <section class="bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 border-b-2 border-gray-100">
        <div class="container mx-auto px-4">
          <div class="text-center max-w-4xl mx-auto">
            <div class="inline-block mb-4">
              <span class="bg-green-100 text-green-700 text-sm font-semibold px-4 py-2 rounded-full">
                Est. 1982
              </span>
            </div>
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Los Angeles Chapter of the American Association of Individual Investors
            </h1>
            <p class="text-xl text-gray-600 max-w-2xl mx-auto">
              Over 40 years of providing non-biased financial education to help individual investors make informed decisions
            </p>
          </div>
        </div>
      </section>

      <!-- Main Content Section -->
      <section class="py-16 px-4">
        <div class="container mx-auto">
          <!-- Two Column Layout: Text + Image -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16 items-start">
            <!-- Left Column: Text Content -->
            <div class="space-y-8">
              <!-- Section: The Beginning -->
              <div>
                <h3 class="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-green-500 pl-4">
                  The Beginning
                </h3>
                <p class="text-gray-700 text-lg leading-relaxed">
                  The Los Angeles Chapter of the American Association of Individual Investors was founded in 1982 by a group of men who gathered at the Statler Hilton in downtown Los Angeles. They were already members of the national association that was founded as an educational nonprofit organization in 1978 by <span class="font-semibold">Dr. James Cloonan</span>, a professor at DePaul University in Chicago who believed an individual could learn to manage and invest his own money without needing a professional.
                </p>
                <p class="text-gray-700 text-lg leading-relaxed mt-4">
                  The meeting at the Statler Hilton was by invitation—a formal letter in the days before email. The goal was to start a chapter and recruit volunteers to lead the fledgling organization. <span class="font-semibold">Scott Rowen</span>, the chapter's first president, along with Joe Michell, Dave Wright, Norm Langhout and others, held the newly formed chapter's first meeting later in 1982 at the Holiday Inn on Pico Boulevard in Santa Monica.
                </p>
              </div>

              <!-- Section: Growth and Evolution -->
              <div>
                <h3 class="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-green-500 pl-4">
                  Growth and Evolution
                </h3>
                <p class="text-gray-700 text-lg leading-relaxed">
                  The Los Angeles Chapter of AAII members met monthly at the Proud Bird on Aviation Boulevard near the Los Angeles Airport and then moved to the <span class="font-semibold">Skirball Cultural Center</span> as membership continued to grow. Because members came from a wide geographical area, the idea of neighborhood groups meeting on alternate days from the main chapter meetings was conceived.
                </p>
                <p class="text-gray-700 text-lg leading-relaxed mt-4">
                  These localized area groups—now called <span class="font-semibold text-blue-700">Special Interest Groups (SIGs)</span>—were not intended to compete with monthly speakers and topics; these groups focused on specific areas and levels of investing for their members. Today, Special Interest Groups include investing education for beginners, retirement planning, and investing tools and charts for more advanced investors.
                </p>
              </div>

              <!-- Section: Today's Meetings -->
              <div>
                <h3 class="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-green-500 pl-4">
                  Today's Meetings
                </h3>
                <p class="text-gray-700 text-lg leading-relaxed">
                  Monthly meetings, held the <span class="font-semibold">third Saturday morning</span> of each month (except August and December) at the Skirball Cultural Center in Los Angeles, feature two speaker presentations with Q&amp;A time. Speakers come from a wide variety of backgrounds in the investment sector, including:
                </p>
                <ul class="mt-4 space-y-2 text-gray-700 text-lg">
                  <li class="flex items-start">
                    <svg class="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                    <span>Morningstar and the Federal Reserve Board</span>
                  </li>
                  <li class="flex items-start">
                    <svg class="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                    <span>Private investment firms and financial planners</span>
                  </li>
                  <li class="flex items-start">
                    <svg class="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                    <span>AAII Chicago and financial journalists</span>
                  </li>
                </ul>
                <p class="text-gray-600 text-base italic mt-4 pl-4 border-l-2 border-gray-300">
                  Former Los Angeles Times business reporter Tom Petruno remains an annual favorite.
                </p>
              </div>
            </div>

            <!-- Right Column: Image -->
            <div class="flex flex-col items-center justify-start lg:sticky lg:top-24">
              <div class="w-full max-w-md">
                <img
                  src="public/assets/images/aaiilahistory-500x650.jpg"
                  alt="AAII LA History"
                  class="rounded-xl shadow-2xl w-full h-auto border-4 border-gray-100"
                />
                <p class="text-center text-sm text-gray-500 mt-4 italic">
                  Over 40 years of investment education in Los Angeles
                </p>
              </div>
            </div>
          </div>

          <!-- Divider -->
          <div class="my-16">
            <div class="relative">
              <div class="absolute inset-0 flex items-center" aria-hidden="true">
                <div class="w-full border-t-2 border-gray-200"></div>
              </div>
              <div class="relative flex justify-center">
                <span class="bg-white px-6 text-lg font-semibold text-gray-500">
                  Why Choose AAII Los Angeles
                </span>
              </div>
            </div>
          </div>

          <!-- Four Icon Boxes -->
          <HomeIconBoxesSection />
        </div>
      </section>
    </main>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'About Us - AAII Los Angeles',
  meta: [
    {
      name: 'description',
      content: 'Learn about the history of the Los Angeles Chapter of the American Association of Individual Investors, founded in 1982.'
    }
  ]
})
</script>
