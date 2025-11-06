<script setup lang="ts">
import type { ContactFormData, ContactFormErrors, SubmissionState } from '~/types/contact'

// Form state
const formData = ref<ContactFormData>({
  email: '',
  firstName: '',
  lastName: '',
  phone: '',
  message: ''
})

const errors = ref<ContactFormErrors>({})
const submissionState = ref<SubmissionState>('idle')
const notificationMessage = ref('')
const showNotification = ref(false)

// Validation functions
const validateEmail = (email: string): string | undefined => {
  if (!email) return 'Email is required'
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) return 'Please enter a valid email address'
  return undefined
}

const validatePhone = (phone: string): string | undefined => {
  if (!phone) return undefined // Phone is optional
  const phoneRegex = /^[\d\s\-\+\(\)]+$/
  if (!phoneRegex.test(phone)) return 'Please enter a valid phone number'
  if (phone.replace(/\D/g, '').length < 10) return 'Phone number must be at least 10 digits'
  return undefined
}

const validateMessage = (message: string): string | undefined => {
  if (!message) return 'Message is required'
  if (message.length < 10) return 'Message must be at least 10 characters'
  return undefined
}

// Validate form
const validateForm = (): boolean => {
  errors.value = {}

  const emailError = validateEmail(formData.value.email)
  if (emailError) errors.value.email = emailError

  const phoneError = validatePhone(formData.value.phone)
  if (phoneError) errors.value.phone = phoneError

  const messageError = validateMessage(formData.value.message)
  if (messageError) errors.value.message = messageError

  return Object.keys(errors.value).length === 0
}

// Handle form submission
const handleSubmit = async () => {
  if (!validateForm()) return

  submissionState.value = 'submitting'
  showNotification.value = false

  try {
    await $fetch('/api/contact/send-to-admin', {
      method: 'POST',
      body: formData.value
    })

    submissionState.value = 'success'
    notificationMessage.value = 'Thank you for your message! We\'ll get back to you as soon as possible.'
    showNotification.value = true

    // Reset form
    formData.value = {
      email: '',
      firstName: '',
      lastName: '',
      phone: '',
      message: ''
    }
    errors.value = {}
  }
  catch (error: any) {
    console.error('Contact admin error:', error)
    submissionState.value = 'error'
    notificationMessage.value = error.data?.message || 'Something went wrong. Please try again.'
    showNotification.value = true
  }
  finally {
    setTimeout(() => {
      if (submissionState.value !== 'success') {
        submissionState.value = 'idle'
      }
    }, 3000)
  }
}

// Real-time validation
const validateField = (field: keyof ContactFormData) => {
  if (field === 'email') {
    const error = validateEmail(formData.value.email)
    if (error) {
      errors.value.email = error
    }
    else {
      delete errors.value.email
    }
  }
  else if (field === 'phone') {
    const error = validatePhone(formData.value.phone)
    if (error) {
      errors.value.phone = error
    }
    else {
      delete errors.value.phone
    }
  }
  else if (field === 'message') {
    const error = validateMessage(formData.value.message)
    if (error) {
      errors.value.message = error
    }
    else {
      delete errors.value.message
    }
  }
}
</script>

<template>
  <div class="max-w-2xl mx-auto">
    <FormNotification
      :type="submissionState === 'success' ? 'success' : 'error'"
      :message="notificationMessage"
      :show="showNotification"
      @close="showNotification = false"
    />

    <form
      class="space-y-6"
      @submit.prevent="handleSubmit"
    >
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- First Name -->
        <div>
          <label
            for="admin-firstName"
            class="block text-sm font-medium text-gray-700 mb-2"
          >
            First Name
          </label>
          <input
            id="admin-firstName"
            v-model="formData.firstName"
            type="text"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="John"
          >
        </div>

        <!-- Last Name -->
        <div>
          <label
            for="admin-lastName"
            class="block text-sm font-medium text-gray-700 mb-2"
          >
            Last Name
          </label>
          <input
            id="admin-lastName"
            v-model="formData.lastName"
            type="text"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="Doe"
          >
        </div>
      </div>

      <!-- Email -->
      <div>
        <label
          for="admin-email"
          class="block text-sm font-medium text-gray-700 mb-2"
        >
          Email <span class="text-red-500">*</span>
        </label>
        <input
          id="admin-email"
          v-model="formData.email"
          type="email"
          required
          class="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          :class="errors.email ? 'border-red-500' : 'border-gray-300'"
          placeholder="john.doe@example.com"
          @blur="validateField('email')"
        >
        <p
          v-if="errors.email"
          class="mt-1 text-sm text-red-600"
        >
          {{ errors.email }}
        </p>
      </div>

      <!-- Phone -->
      <div>
        <label
          for="admin-phone"
          class="block text-sm font-medium text-gray-700 mb-2"
        >
          Phone Number
        </label>
        <input
          id="admin-phone"
          v-model="formData.phone"
          type="tel"
          class="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          :class="errors.phone ? 'border-red-500' : 'border-gray-300'"
          placeholder="(555) 123-4567"
          @blur="validateField('phone')"
        >
        <p
          v-if="errors.phone"
          class="mt-1 text-sm text-red-600"
        >
          {{ errors.phone }}
        </p>
      </div>

      <!-- Message -->
      <div>
        <label
          for="admin-message"
          class="block text-sm font-medium text-gray-700 mb-2"
        >
          Message <span class="text-red-500">*</span>
        </label>
        <textarea
          id="admin-message"
          v-model="formData.message"
          required
          rows="6"
          class="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
          :class="errors.message ? 'border-red-500' : 'border-gray-300'"
          placeholder="Tell us how we can help you..."
          @blur="validateField('message')"
        />
        <p
          v-if="errors.message"
          class="mt-1 text-sm text-red-600"
        >
          {{ errors.message }}
        </p>
      </div>

      <!-- Submit Button -->
      <div>
        <button
          type="submit"
          class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          :disabled="submissionState === 'submitting'"
        >
          <span v-if="submissionState === 'submitting'" class="flex items-center">
            <svg
              class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              />
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Sending...
          </span>
          <span v-else>Send Message</span>
        </button>
      </div>

      <p class="text-sm text-gray-500 text-center">
        We typically respond within 24-48 hours.
      </p>
    </form>
  </div>
</template>

<style scoped>
input:focus,
textarea:focus,
button:focus {
  outline: none;
}

input,
textarea,
button {
  transition: all 0.3s ease;
}
</style>
