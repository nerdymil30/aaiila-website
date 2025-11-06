import { isValidEmail, isValidPhone, sanitizeInput } from '../../utils/constant-contact'
import type { ContactFormData } from '../../../app/types/contact'

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

    if (!body.message) {
      throw createError({
        statusCode: 400,
        message: 'Message is required'
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

    // Validate message length
    if (body.message.length < 10) {
      throw createError({
        statusCode: 400,
        message: 'Message must be at least 10 characters'
      })
    }

    // Sanitize inputs
    const sanitizedData = {
      email: sanitizeInput(body.email.toLowerCase()),
      firstName: body.firstName ? sanitizeInput(body.firstName) : '',
      lastName: body.lastName ? sanitizeInput(body.lastName) : '',
      phone: body.phone ? sanitizeInput(body.phone) : '',
      message: sanitizeInput(body.message)
    }

    // Get configuration
    const config = useRuntimeConfig(event)

    // In production, you would send an email here using a service like:
    // - Resend
    // - SendGrid
    // - AWS SES
    // - Nodemailer with SMTP

    // For now, we'll log the message
    console.log('=== NEW CONTACT MESSAGE ===')
    console.log('From:', sanitizedData.firstName, sanitizedData.lastName)
    console.log('Email:', sanitizedData.email)
    console.log('Phone:', sanitizedData.phone || 'N/A')
    console.log('Message:', sanitizedData.message)
    console.log('========================')

    // TODO: Implement actual email sending
    // Example with a hypothetical email service:
    /*
    await sendEmail({
      to: config.adminEmail,
      from: 'noreply@aaii-la.org',
      subject: `New Contact Message from ${sanitizedData.firstName} ${sanitizedData.lastName}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>From:</strong> ${sanitizedData.firstName} ${sanitizedData.lastName}</p>
        <p><strong>Email:</strong> ${sanitizedData.email}</p>
        <p><strong>Phone:</strong> ${sanitizedData.phone || 'N/A'}</p>
        <p><strong>Message:</strong></p>
        <p>${sanitizedData.message}</p>
      `
    })
    */

    return {
      success: true,
      message: 'Thank you for your message! We will get back to you soon.'
    }
  }
  catch (error: any) {
    console.error('Send to admin error:', error)

    // Return appropriate error response
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || 'Failed to send message. Please try again later.'
    })
  }
})
