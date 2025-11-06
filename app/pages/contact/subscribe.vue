<script setup lang="ts">
// Set page metadata
useHead({
  title: 'Subscribe to Updates - AAII LA',
  meta: [
    {
      name: 'description',
      content: 'Stay informed about AAII LA investment education programs, upcoming meetings, and exclusive content. Subscribe to our newsletter today!'
    }
  ]
})
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-green-600 to-green-800 text-white py-20">
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
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
          </div>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Subscribe to Program Updates
          </h1>
          <p class="text-xl md:text-2xl text-green-100">
            Get notified about our upcoming investment education programs and meetings
          </p>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="py-12 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold text-center text-gray-800 mb-8">
            What You'll Receive
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Benefit 1 -->
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
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-800 mb-2">
                Meeting Notifications
              </h3>
              <p class="text-gray-600">
                Be the first to know about upcoming meetings and events
              </p>
            </div>

            <!-- Benefit 2 -->
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
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-800 mb-2">
                Educational Content
              </h3>
              <p class="text-gray-600">
                Access exclusive investment education resources
              </p>
            </div>

            <!-- Benefit 3 -->
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-800 mb-2">
                Community Updates
              </h3>
              <p class="text-gray-600">
                Stay connected with the AAII LA investor community
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Form Section -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-2xl mx-auto">
          <div class="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div class="text-center mb-8">
              <h2 class="text-3xl font-bold text-gray-800 mb-3">
                Subscribe Now
              </h2>
              <p class="text-gray-600">
                Join our mailing list to stay informed about upcoming programs
              </p>
            </div>

            <NewsletterSignupForm />

            <div class="mt-8 pt-8 border-t border-gray-200">
              <div class="flex items-center justify-center text-sm text-gray-500">
                <svg
                  class="w-5 h-5 mr-2 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
                We respect your privacy. Unsubscribe anytime.
              </div>
            </div>
          </div>

          <!-- Need Help Section -->
          <div class="mt-12 text-center">
            <p class="text-gray-600 mb-4">
              Need to send us a message instead?
            </p>
            <NuxtLink
              to="/contact/message"
              class="inline-block text-blue-600 hover:text-blue-700 font-semibold underline"
            >
              Contact Admin
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
