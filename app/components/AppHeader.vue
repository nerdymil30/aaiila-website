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
          <a href="#" class="text-gray-600 hover:text-gray-800 font-medium">
            About Us
          </a>
          <a href="#" class="text-gray-600 hover:text-gray-800 font-medium">
            Contact Us
          </a>
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
// No script needed for now
</script>
