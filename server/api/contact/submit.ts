import { addContactToConstantContact, isValidEmail, isValidPhone, sanitizeInput, refreshAccessToken } from '~/server/utils/constant-contact'
import type { ContactFormData, ConstantContactContact } from '~/types/contact'

export default eventHandler(async (event) => {
  try {
    // Only allow POST requests
    if (event.method !== 'POST') {
      throw createError({
        statusCode: 405,
        message: 'Method not allowed'
      })
    }

    // Get the request body
    const body = await readBody<ContactFormData>(event)

    // Validate required fields
    if (!body.email) {
      throw createError({
        statusCode: 400,
        message: 'Email is required'
      })
    }

    // Validate email format
    if (!isValidEmail(body.email)) {
      throw createError({
        statusCode: 400,
        message: 'Invalid email format'
      })
    }

    // Validate phone if provided
    if (body.phone && !isValidPhone(body.phone)) {
      throw createError({
        statusCode: 400,
        message: 'Invalid phone number format'
      })
    }

    // Sanitize inputs
    const sanitizedData = {
      email: sanitizeInput(body.email.toLowerCase()),
      firstName: body.firstName ? sanitizeInput(body.firstName) : '',
      lastName: body.lastName ? sanitizeInput(body.lastName) : '',
      phone: body.phone ? sanitizeInput(body.phone) : '',
      message: body.message ? sanitizeInput(body.message) : ''
    }

    // Get configuration
    const config = useRuntimeConfig(event)

    // Validate configuration
    if (!config.constantContact.accessToken) {
      throw createError({
        statusCode: 500,
        message: 'Constant Contact configuration is incomplete'
      })
    }

    // Prepare contact data for Constant Contact
    const contact: ConstantContactContact = {
      email_address: {
        address: sanitizedData.email,
        permission_to_send: 'implicit' // or 'explicit' depending on your consent mechanism
      }
    }

    // Add optional fields if provided
    if (sanitizedData.firstName) {
      contact.first_name = sanitizedData.firstName
    }

    if (sanitizedData.lastName) {
      contact.last_name = sanitizedData.lastName
    }

    if (sanitizedData.phone) {
      contact.phone_numbers = [{
        phone_number: sanitizedData.phone,
        kind: 'mobile'
      }]
    }

    // Add to list if configured
    if (config.constantContact.listId) {
      contact.list_memberships = [config.constantContact.listId]
    }

    let accessToken = config.constantContact.accessToken

    try {
      // Try to add contact with current token
      const response = await addContactToConstantContact(accessToken, contact)

      console.log('Contact added successfully:', sanitizedData.email)

      return {
        success: true,
        message: 'Thank you for subscribing! You will receive a confirmation email shortly.',
        data: response
      }
    }
    catch (error: any) {
      // If token expired, try to refresh and retry
      if (error.message.includes('expired') && config.constantContact.refreshToken) {
        console.log('Access token expired. Attempting to refresh...')

        const tokenResponse = await refreshAccessToken(
          config.constantContact.clientId,
          config.constantContact.clientSecret,
          config.constantContact.refreshToken
        )

        accessToken = tokenResponse.access_token

        // Retry with new token
        const response = await addContactToConstantContact(accessToken, contact)

        console.log('Contact added successfully after token refresh:', sanitizedData.email)

        return {
          success: true,
          message: 'Thank you for subscribing! You will receive a confirmation email shortly.',
          data: response
        }
      }

      throw error
    }
  }
  catch (error: any) {
    console.error('Contact submission error:', error)

    // Return appropriate error response
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || 'Failed to process your request. Please try again later.'
    })
  }
})
