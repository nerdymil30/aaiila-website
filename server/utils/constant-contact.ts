import type { ConstantContactContact, ConstantContactTokenResponse } from '../../app/types/contact'

const CONSTANT_CONTACT_API_BASE = 'https://api.cc.email/v3'
const CONSTANT_CONTACT_AUTH_BASE = 'https://authz.constantcontact.com/oauth2/default/v1'

/**
 * Refresh the Constant Contact access token using the refresh token
 */
export async function refreshAccessToken(
  clientId: string,
  clientSecret: string,
  refreshToken: string
): Promise<ConstantContactTokenResponse> {
  try {
    const authString = Buffer.from(`${clientId}:${clientSecret}`).toString('base64')

    const response = await $fetch<ConstantContactTokenResponse>(`${CONSTANT_CONTACT_AUTH_BASE}/token`, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${authString}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: refreshToken
      }).toString()
    })

    return response
  }
  catch (error: any) {
    console.error('Error refreshing Constant Contact token:', error)
    throw new Error(`Failed to refresh access token: ${error.message}`)
  }
}

/**
 * Add a contact to Constant Contact
 * Uses the sign_up_form endpoint which handles duplicates automatically
 */
export async function addContactToConstantContact(
  accessToken: string,
  contact: ConstantContactContact
): Promise<any> {
  try {
    const response = await $fetch(`${CONSTANT_CONTACT_API_BASE}/contacts/sign_up_form`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      },
      body: contact
    })

    return response
  }
  catch (error: any) {
    console.error('Error adding contact to Constant Contact:', error)

    // Handle token expiration
    if (error.statusCode === 401) {
      throw new Error('Access token expired. Please refresh token.')
    }

    throw new Error(`Failed to add contact: ${error.message}`)
  }
}

/**
 * Add contact to a specific list
 */
export async function addContactToList(
  accessToken: string,
  contactId: string,
  listId: string
): Promise<any> {
  try {
    const response = await $fetch(`${CONSTANT_CONTACT_API_BASE}/activities/add_list_memberships`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      },
      body: {
        source: {
          contact_ids: [contactId]
        },
        list_ids: [listId]
      }
    })

    return response
  }
  catch (error: any) {
    console.error('Error adding contact to list:', error)
    throw new Error(`Failed to add contact to list: ${error.message}`)
  }
}

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Validate phone format (basic validation)
 */
export function isValidPhone(phone: string): boolean {
  if (!phone) return true // Phone is optional
  const phoneRegex = /^[\d\s\-\+\(\)]+$/
  return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10
}

/**
 * Sanitize user input
 */
export function sanitizeInput(input: string): string {
  return input.trim().replace(/[<>]/g, '')
}
