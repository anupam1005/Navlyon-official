import { createClient, SupabaseClient } from '@supabase/supabase-js'

const validateEnvironmentVariables = () => {
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
  const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

  // Debug logging for production
  console.log('=== SUPABASE DEBUG ===')
  console.log('supabaseUrl:', supabaseUrl)
  console.log('typeof supabaseUrl:', typeof supabaseUrl)
  console.log('window.location.origin:', typeof window !== 'undefined' ? window.location.origin : 'SSR')
  console.log('===================')

  if (!supabaseUrl || !supabaseAnonKey) {
    const isDevelopment = import.meta.env.DEV
    if (isDevelopment) {
      console.error('Supabase ENV not injected — check Vercel build environment.')
      console.error('Missing variables:', {
        VITE_SUPABASE_URL: !!supabaseUrl,
        VITE_SUPABASE_ANON_KEY: !!supabaseAnonKey
      })
    }
    throw new Error('Missing required Supabase environment variables: VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY must be set')
  }

  // Ensure no trailing slash
  const normalizedUrl = supabaseUrl.replace(/\/$/, '')

  return { supabaseUrl: normalizedUrl, supabaseAnonKey }
}

const { supabaseUrl, supabaseAnonKey } = validateEnvironmentVariables()

let supabaseInstance: SupabaseClient | null = null

export const getSupabaseClient = (): SupabaseClient => {
  if (!supabaseInstance) {
    supabaseInstance = createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true
      }
    })

    if (import.meta.env.DEV) {
      console.log('Supabase client initialized successfully')
    }
  }
  return supabaseInstance
}

export const supabase = getSupabaseClient()
