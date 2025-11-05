import { refreshAccessToken } from '~/server/utils/constant-contact'

export default eventHandler(async (event) => {
  try {
    const config = useRuntimeConfig(event)

    // Validate configuration
    if (!config.constantContact.clientId || !config.constantContact.clientSecret || !config.constantContact.refreshToken) {
      throw createError({
        statusCode: 500,
        message: 'Constant Contact configuration is incomplete'
      })
    }

    // Refresh the token
    const tokenResponse = await refreshAccessToken(
      config.constantContact.clientId,
      config.constantContact.clientSecret,
      config.constantContact.refreshToken
    )

    // Note: In production, you should store the new tokens securely
    // For example, using NuxtHub KV storage or a database
    console.log('Token refreshed successfully. New access token expires in:', tokenResponse.expires_in)

    return {
      success: true,
      message: 'Token refreshed successfully',
      data: {
        access_token: tokenResponse.access_token,
        expires_in: tokenResponse.expires_in
      }
    }
  }
  catch (error: any) {
    console.error('Token refresh error:', error)

    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || 'Failed to refresh access token'
    })
  }
})
