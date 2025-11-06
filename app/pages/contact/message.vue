<script setup lang="ts">
// Set page metadata
useHead({
  title: 'Contact Admin - AAII LA',
  meta: [
    {
      name: 'description',
      content: 'Send a message to the AAII LA admin team. We\'re here to answer your questions and help with any inquiries.'
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
          <div class="flex justify-center mb-6">
            <div class="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <svg
                class="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
              </svg>
            </div>
          </div>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Send Us a Message
          </h1>
          <p class="text-xl md:text-2xl text-blue-100">
            Have a question or feedback? We'd love to hear from you!
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Info Section -->
    <section class="py-12 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Email Card -->
            <div class="text-center">
              <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  class="w-8 h-8 text-blue-600"
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
              <h3 class="text-lg font-semibold text-gray-800 mb-2">
                Email Us
              </h3>
              <p class="text-sm text-gray-600">
                info@aaii-la.org
              </p>
            </div>

            <!-- Response Time Card -->
            <div class="text-center">
              <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  class="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-gray-800 mb-2">
                Response Time
              </h3>
              <p class="text-sm text-gray-600">
                Within 24-48 hours
              </p>
            </div>

            <!-- Location Card -->
            <div class="text-center">
              <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  class="w-8 h-8 text-purple-600"
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
              <h3 class="text-lg font-semibold text-gray-800 mb-2">
                Location
              </h3>
              <p class="text-sm text-gray-600">
                Los Angeles, CA
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Form Section -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto">
          <div class="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div class="text-center mb-8">
              <h2 class="text-3xl font-bold text-gray-800 mb-3">
                Get In Touch
              </h2>
              <p class="text-gray-600">
                Fill out the form below and we'll get back to you as soon as possible
              </p>
            </div>

            <ContactAdminForm />
          </div>

          <!-- Subscribe Link -->
          <div class="mt-12 text-center">
            <p class="text-gray-600 mb-4">
              Want to receive program updates instead?
            </p>
            <NuxtLink
              to="/contact/subscribe"
              class="inline-block text-green-600 hover:text-green-700 font-semibold underline"
            >
              Subscribe to Newsletter
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Additional Info Section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h3 class="text-2xl font-bold text-gray-800 mb-4">
            About AAII LA
          </h3>
          <p class="text-gray-600 mb-8 max-w-2xl mx-auto">
            We're a chapter of the American Association of Individual Investors, dedicated to helping individuals become effective managers of their own assets through investment education programs.
          </p>
          <div class="flex flex-wrap justify-center gap-4">
            <NuxtLink
              to="/all-meetings"
              class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
            >
              View Meetings
            </NuxtLink>
            <NuxtLink
              to="/about-us"
              class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-8 rounded-lg transition-all duration-300"
            >
              Learn More
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
