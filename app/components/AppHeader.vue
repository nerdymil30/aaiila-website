<template>
  <header class="bg-white shadow-sm sticky top-0 z-50">
    <div class="container mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <div class="flex items-center space-x-4">
          <NuxtLink to="/" class="text-2xl font-bold">
            <span class="text-gray-700">AAII</span>
            <span class="text-green-500">LA</span>
          </NuxtLink>
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex space-x-6">
          <NuxtLink to="/" class="text-gray-600 hover:text-green-600 font-medium transition-colors">
            Home
          </NuxtLink>
          <NuxtLink to="/all-meetings" class="text-gray-600 hover:text-blue-700 font-medium transition-colors">
            All Meetings
          </NuxtLink>
          <NuxtLink to="/chapter-leadership" class="text-gray-600 hover:text-green-600 font-medium transition-colors">
            Chapter Leadership
          </NuxtLink>
          <NuxtLink to="/about-us" class="text-gray-600 hover:text-green-600 font-medium transition-colors">
            About Us
          </NuxtLink>

          <!-- Contact Dropdown -->
          <div id="contact-dropdown" class="relative">
            <button
              type="button"
              class="text-gray-600 hover:text-gray-800 font-medium transition-colors flex items-center"
              @click="toggleContactDropdown"
            >
              Contact Us
              <svg
                class="w-4 h-4 ml-1 transition-transform"
                :class="{ 'rotate-180': isContactDropdownOpen }"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <!-- Dropdown Menu -->
            <Transition
              enter-active-class="transition ease-out duration-200"
              enter-from-class="opacity-0 translate-y-1"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition ease-in duration-150"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 translate-y-1"
            >
              <div
                v-if="isContactDropdownOpen"
                class="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2 z-50 border border-gray-200"
              >
                <NuxtLink
                  to="/contact/subscribe"
                  class="block px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                  @click="closeContactDropdown"
                >
                  <div class="font-semibold">Subscribe to Updates</div>
                  <div class="text-xs text-gray-500">Get program notifications</div>
                </NuxtLink>
                <NuxtLink
                  to="/contact/message"
                  class="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  @click="closeContactDropdown"
                >
                  <div class="font-semibold">Send a Message</div>
                  <div class="text-xs text-gray-500">Contact the admin</div>
                </NuxtLink>
              </div>
            </Transition>
          </div>

          <a href="#" class="text-blue-600 hover:text-blue-700 font-medium">
            CONTRIBUTIONS
          </a>
        </nav>

        <!-- Social Icons -->
        <div class="flex items-center space-x-3">
          <a
            href="https://www.facebook.com/AAIILA"
            target="_blank"
            rel="noopener noreferrer"
            class="text-blue-600 hover:text-blue-700 transition-colors"
            aria-label="Facebook"
          >
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a
            href="https://www.meetup.com/aaii-los-angeles/"
            target="_blank"
            rel="noopener noreferrer"
            class="text-red-600 hover:text-red-700 transition-colors"
            aria-label="Meetup"
          >
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.98 9.98c0-.53.43-.96.96-.96s.96.43.96.96-.43.96-.96.96-.96-.43-.96-.96zm11.5 6.5c-.53 0-.96-.43-.96-.96s.43-.96.96-.96.96.43.96.96-.43.96-.96.96zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
// Dropdown state
const isContactDropdownOpen = ref(false)

const toggleContactDropdown = () => {
  isContactDropdownOpen.value = !isContactDropdownOpen.value
}

const closeContactDropdown = () => {
  isContactDropdownOpen.value = false
}

// Close dropdown when clicking outside
onMounted(() => {
  const handleClickOutside = (e: MouseEvent) => {
    const dropdown = document.getElementById('contact-dropdown')
    if (dropdown && !dropdown.contains(e.target as Node)) {
      closeContactDropdown()
    }
  }

  document.addEventListener('click', handleClickOutside)

  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside)
  })
})
</script>
