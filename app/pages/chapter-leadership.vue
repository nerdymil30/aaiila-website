<script setup lang="ts">
interface LeadershipMember {
  name: string
  title: string
  photo: string
  bio?: string
  short_bio?: string
  email: string
}

const leadership: LeadershipMember[] = [
  {
    name: "Fred Wallace",
    title: "Programming Chair",
    photo: "boardmember_wallace-375x450.jpg",
    short_bio: "I became a 'Lifetime AAII Member' in 1996 at the age of 41. My $250 investment in becoming a lifetime member has generated the best ROI of any investment I have ever made!",
    bio: "Recognizing the excellent value of an AAII Life Membership. I became a 'Lifetime AAII Member' in 1996 at the age of 41. My $250 investment in becoming a lifetime member has generated the best ROI of any investment I have ever made! I spent the vast majority of my business career (28 years) as a Sales and Marketing executive with the cable network HBO. At the age of 56 I retired from HBO and became interested in transitioning to non-profit work and became the first 'Encore Fellow' in Los Angeles working for the Children and Family Services non-profit, Aspiranet. In addition to my work with Aspiranet (involve Community Engagement to support transitioning young adults exiting Foster Care), I have also served as a facilitator supporting AARP's Financial Literacy educational program. On the personal front, I enjoy playing golf twice a week and taking international trips with my family.",
    email: "fredwallace77@gmail.com"
  },
  {
    name: "Jeff Heller",
    title: "Programming Co-Chair",
    photo: "Jeff-Heller-375x450.jpg",
    short_bio: "I became interested in investing at a young age. I bought my first stock (Disney) when I was in high school. I was so excited about stocks that when I went to college (SDSU) I decided to major in Finance so I could learn more about the stock market.",
    bio: "I became interested in investing at a young age. I bought my first stock (Disney) when I was in high school. I was so excited about stocks that when I went to college (SDSU) I decided to major in Finance so I could learn more about the stock market. Later, I got a job with Al Frank who wrote the Prudent Speculator newsletter. After the market crashed in 1987 I lost my job and decided to go into education. I taught math and played Black Jack with Special Ed kids to improve their math skills. I retired in June 2018 from Hale Charter Academy in Woodland Hills. I spend my retirement reading books, managing my portfolio, and riding my Cervelo R5 bicycle. I am pleased to serve in my new role as Programming Co-Chair with the objective of finding the best speakers possible our Saturday morning Skirball Programs",
    email: "jeffheller81@gmail.com"
  },
  {
    name: "Alaistair Macdonald",
    title: "Facilities Chair",
    photo: "boardmember_macdonald-375x450.jpg",
    short_bio: "From 1974-1985, Alaistair was Director of Corporate Development (acquisitions and R&D) for the Oil Shale Corporation",
    bio: "From 1974-1985, Alaistair was Director of Corporate Development (acquisitions and R&D) for the Oil Shale Corporation, a Fortune 500 Company. In 1985, he acquired, owned and operated a Specialty Chemicals Company. He sold the company in 2015 and subsequently retired. Alaistair has been a member of AAII since the 1980s. His current interests include grandchildren, travel and investments.",
    email: "malaistair@gmail.com"
  },
  {
    name: "Chuck Spence",
    title: "Treasurer",
    photo: "testimonial_man-375x450.png",
    bio: "",
    email: "spencecb@ail.com"
  },
  {
    name: "Phillip Richards",
    title: "Secretary",
    photo: "boardmember_richards-375x450.jpg",
    bio: "Bio Coming Soon",
    email: "prichards-oba@sbcglobal.net"
  },
  {
    name: "Don Reinken",
    title: "Communications Director",
    photo: "Don-Fav-375x450.jpg",
    bio: "Don has had a long and successful career in sales and as an entrepreneur in construction and information technology. Investing with a broker during his working years he found that sometimes he made money and often he lost, but the broker always made money. Later, when Don retired and had more time, he discovered AAII and determined that he could be better off personally administering his own investments. After some years attending the LA Chapter meetings he found them so valuable that he decided to volunteer as chapter webmaster to help bring local, broad-based financial education to other investors.",
    email: "don@reinken.com"
  },
  {
    name: "Rene G. Rodriguez",
    title: "Webmaster",
    photo: "Rene-Rodriguez-375x450.jpg",
    short_bio: "I am a retired community college educator, taught Spanish and mathematics",
    bio: "I am a retired community college educator, taught Spanish and mathematics for the Ventura County Community College District, and then became an academic dean for most of my community college career.  I retired in 2004 as a Vice President of Business Services.  My work experiences have included serving as a senior electronics technician for Raytheon Company, and serving as principal trombonist for the Ventura County Symphony.  I studied computer programming in the 60s at UCSB, which served me well in my studies, my career as a community college educator, and now as webmaster for the AAII LA Chapter and the Ventura County Community College District Retirees’ Association in which I served as president for ten years.  Early on my eclectic interests included learning about investing, becoming a lifetime member of the AAII in the 1980s.",
    email: "aaiilawebmaster@gmail.com"
  },
  {
    name: "Ravi Vedula",
    title: "Assistant Webmaster",
    photo: "testimonial_man-375x450.png",
    bio: "",
    email: "vedularavipramod@gmail.com"
  },
  {
    name: "Daniel Joye",
    title: "Strategic Investing Group Leader",
    photo: "daniel-joye-372x373.png",
    short_bio: "I started my career in the Navy as a gunnery officer. After getting my MBA, I spent a decade in financial service in London investing and trading in energy for Morgan Stanley, Vitol and BP.",
    bio: "I started my career in the Navy as a gunnery officer. After getting my MBA, I spent a decade in financial service in London investing and trading in energy for Morgan Stanley, Vitol and BP. In 2017, my family and I moved to back to LA (I am originally from the Pasadena Area). Since moving back to LA I have been investing and working with some starts ups in the fintech space.",
    email: "daniel.joye@gmail.com"
  },
  {
    name: "Evan Press",
    title: "President and Retirement and Investing Group Leader",
    photo: "EvenPress2-375x450.jpg",
    bio: "After retiring from the U.S. Diplomatic Service, Evan began a career in financial advising in 2008. He was awarded the CFP designation in 2016 and now works as a financial consultant on an hourly basis. A past president, Evan has served on the AAII Los Angeles Chapter board for a long time.",
    email: "pressEL99@aol.com"
  }
]

const getPhotoUrl = (photo: string) => {
  return `/assets/images/${photo}`
}
</script>

<template>
  <div class="min-h-screen bg-white">
    <AppHeader />

    <!-- Page Header -->
    <section class="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
      <div class="container mx-auto px-4">
        <h1 class="text-5xl font-bold text-center mb-4">Chapter Leadership</h1>
      </div>
    </section>

    <!-- Subtitle Section -->
    <section class="py-12 bg-gray-50">
      <div class="container mx-auto px-4">
        <h3 class="text-3xl font-bold text-center text-blue-600 mb-4">
          Meet the Dedicated Volunteers Who Help to Bring You This Investing Education
        </h3>
        <div class="w-32 h-1 bg-blue-600 mx-auto"></div>
      </div>
    </section>

    <!-- Leadership Members Section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4 max-w-7xl">
        <div
          v-for="(member, index) in leadership"
          :key="index"
          class="mb-16 last:mb-0"
        >
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <!-- Photo Column (3/12 on large screens) -->
            <div class="lg:col-span-3">
              <div class="relative group overflow-hidden">
                <img
                  :src="getPhotoUrl(member.photo)"
                  :alt="member.name"
                  class="w-full h-auto object-cover object-top"
                  style="max-height: 450px; object-position: center 20%;"
                  @error="(e) => (e.target as HTMLImageElement).src = '/assets/images/testimonial_man-375x450.png'"
                >
                <!-- Hover Overlay with Short Bio -->
                <div v-if="member.short_bio" class="absolute inset-0 bg-gradient-to-t from-black/95 via-black/85 to-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 class="text-white font-bold text-lg mb-2">{{ member.name }}</h3>
                    <p class="text-green-400 font-semibold text-sm mb-3">{{ member.title }}</p>
                    <p class="text-white text-sm leading-relaxed">{{ member.short_bio }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Content Column (9/12 on large screens) -->
            <div class="lg:col-span-9">
              <!-- Name and Title -->
              <div class="mb-6">
                <h2 class="text-3xl font-bold text-blue-600 mb-1">{{ member.name }}</h2>
                <p class="text-xl text-green-500 font-semibold">{{ member.title }}</p>
              </div>

              <!-- Bio -->
              <div v-if="member.bio" class="text-gray-700 leading-relaxed mb-8">
                <p>{{ member.bio }}</p>
              </div>
              <div v-else-if="member.short_bio" class="text-gray-700 leading-relaxed mb-8">
                <p>{{ member.short_bio }}</p>
              </div>

              <!-- Email Button -->
              <div>
                <a
                  :href="`mailto:${member.email}`"
                  class="inline-block bg-white hover:bg-blue-600 text-blue-600 hover:text-white font-bold px-6 py-3 border-2 border-green-400 hover:border-blue-600 transition-colors duration-300"
                >
                  Email {{ member.name.split(' ')[0] }} {{ member.name.split(' ')[member.name.split(' ').length - 1] }}
                </a>
              </div>
            </div>
          </div>

          <!-- Section Divider (except for last item) -->
          <div v-if="index < leadership.length - 1" class="mt-12 border-b-2 border-gray-200"></div>
        </div>
      </div>
    </section>

    <AppFooter />
  </div>
</template>
