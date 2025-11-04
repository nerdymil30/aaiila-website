<template>
  <div>
    <AppHeader />

    <main class="min-h-screen bg-white">
      <!-- Hero Title Section -->
      <section class="bg-white py-16">
        <div class="container mx-auto px-4">
          <div class="text-center max-w-4xl mx-auto">
            <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Los Angeles Chapter of the American Association of Individual Investors
            </h1>
            <h5 class="text-2xl font-semibold text-green-500">
              Founded in 1982
            </h5>
          </div>
        </div>
      </section>

      <!-- Main Content Section -->
      <section class="py-16 bg-white">
        <div class="container mx-auto px-4">
          <!-- Two Column Layout: Text + Image -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-1 mb-16">
            <!-- Left Column: Text Content -->
            <div class="space-y-6 text-gray-700 leading-relaxed">
              <p>
                The Los Angeles Chapter of the American Association of Individual Investors was founded in 1982 by a group of men who gathered at the Statler Hilton in downtown Los Angeles. They were already members of the national association that was founded as an educational nonprofit organization in 1978 by Dr. James Cloonan, a professor at DePaul University in Chicago who believed an individual could learn to manage and invest his own money without needing a professional. The meeting at the Statler Hilton was by invitation…a formal letter in the days before email. The goal was to start a chapter and recruit volunteers to lead the fledgling organization. Scott Rowen, the chapter's first president, Joe Michell, Dave Wright, Norm Langhout and others then held the newly formed chapter's first meeting later in 1982 at the Holiday Inn on Pico Boulevard in Santa Monica.
              </p>

              <p>
                The Los Angeles Chapter of AAII members met monthly at the Proud Bird on Aviation Boulevard near the Los Angeles Airport and then moved to the Skirball Cultural Center in (date?) as membership continued to grow. Because members came from a wide geographical area, the idea of neighborhood groups meeting on alternate days from the main chapter meetings was conceived. These localized area groups—now called Special Interest Groups (SIGs)—were not intended to compete with monthly speakers and topics; these groups focused on specific areas and levels of investing for their members. Today, Special Interest Groups include investing education for beginners, retirement planning and investing tools and charts for more advanced investors.
              </p>

              <p>
                Monthly meetings, held the third Saturday morning of each month (except August and December) at the Skirball Cultural Center in Los Angeles, featured (and continue to do so today) two speaker presentations with Q&amp;A time. Speakers came/come from a wide variety of backgrounds in the investment sector, including Morningstar, the Federal Reserve Board, private investment firms, financial planners, AAII in Chicago and financial journalists who cover the investment world, with former Los Angeles Times business reporter Tom Petruno being an annual favorite.
              </p>
            </div>

            <!-- Right Column: Image -->
            <div class="flex items-start justify-center">
              <img
                src="/assets/images/aaiilahistory-500x650.jpg"
                alt="AAII LA History"
                class="w-full max-w-md"
              />
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
