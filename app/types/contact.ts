export interface ContactFormData {
  email: string
  firstName: string
  lastName: string
  phone: string
  message: string
}

export interface ContactFormErrors {
  email?: string
  firstName?: string
  lastName?: string
  phone?: string
  message?: string
}

export type SubmissionState = 'idle' | 'submitting' | 'success' | 'error'

export interface ApiResponse {
  success: boolean
  message: string
  data?: any
  error?: string
}

export interface ConstantContactContact {
  email_address: {
    address: string
    permission_to_send: string
  }
  first_name?: string
  last_name?: string
  phone_numbers?: Array<{
    phone_number: string
    kind: string
  }>
  list_memberships?: string[]
}

export interface ConstantContactTokenResponse {
  access_token: string
  refresh_token: string
  token_type: string
  expires_in: number
}
