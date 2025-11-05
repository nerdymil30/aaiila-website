<script setup lang="ts">
// Set page metadata
useHead({
  title: 'Contact Us - AAII LA',
  meta: [
    {
      name: 'description',
      content: 'Get in touch with the American Association of Individual Investors Los Angeles Chapter. We\'d love to hear from you!'
    }
  ]
})
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Contact Us
          </h1>
          <p class="text-xl md:text-2xl text-blue-100">
            Have a question or want to learn more about AAII LA? We're here to help!
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Form Section -->
    <section class="py-16 md:py-24 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <!-- Info Cards -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <!-- Email Card -->
            <div class="bg-white rounded-lg shadow-md p-6 text-center">
              <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  class="w-6 h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 class="font-semibold text-gray-800 mb-2">
                Email Us
              </h3>
              <p class="text-sm text-gray-600">
                info@aaii-la.org
              </p>
            </div>

            <!-- Meetings Card -->
            <div class="bg-white rounded-lg shadow-md p-6 text-center">
              <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  class="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 class="font-semibold text-gray-800 mb-2">
                Meetings
              </h3>
              <p class="text-sm text-gray-600">
                Every 2nd Saturday
              </p>
            </div>

            <!-- Location Card -->
            <div class="bg-white rounded-lg shadow-md p-6 text-center">
              <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  class="w-6 h-6 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 class="font-semibold text-gray-800 mb-2">
                Location
              </h3>
              <p class="text-sm text-gray-600">
                Los Angeles, CA
              </p>
            </div>
          </div>

          <!-- Form -->
          <div class="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div class="mb-8">
              <h2 class="text-3xl font-bold text-gray-800 mb-3 text-center">
                Send Us a Message
              </h2>
              <p class="text-gray-600 text-center">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>

            <ContactForm />
          </div>

          <!-- Additional Info -->
          <div class="mt-12 text-center">
            <h3 class="text-2xl font-bold text-gray-800 mb-4">
              Join Our Community
            </h3>
            <p class="text-gray-600 mb-6 max-w-2xl mx-auto">
              AAII LA is a chapter of the American Association of Individual Investors, dedicated to helping individuals become effective managers of their own assets through investment education programs.
            </p>
            <a
              href="/all-meetings"
              class="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
            >
              View Upcoming Meetings
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
