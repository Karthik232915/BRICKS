import { createClient } from '@supabase/supabase-js'

// Supabase configuration
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Validate environment variables
if (!supabaseUrl) {
  throw new Error('Missing VITE_SUPABASE_URL environment variable')
}

if (!supabaseAnonKey) {
  throw new Error('Missing VITE_SUPABASE_ANON_KEY environment variable')
}

// Create Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Type definitions
export interface ContactForm {
  id?: string
  name: string
  email: string
  phone?: string
  message: string
  created_at?: string
}

export interface WhatsAppContact {
  id?: string
  name: string
  phone: string
  message: string
  created_at?: string
}

// Database check function
export const checkDatabase = async () => {
  try {
    console.log('🔍 Checking database setup...')
    
    // Test connection by trying to select from contacts table
    const { data, error } = await supabase
      .from('contacts')
      .select('count')
      .limit(1)
    
    if (error) {
      console.error('❌ Database check failed:', error)
      
      if (error.code === 'PGRST116' || error.message.includes('relation') || error.message.includes('does not exist')) {
        return {
          success: false,
          error: 'Database tables not found',
          details: 'The contacts table does not exist in your database.',
          solution: 'Please run the SQL migration in your Supabase dashboard to create the required tables.'
        }
      }
      
      return {
        success: false,
        error: 'Database connection failed',
        details: error.message,
        solution: 'Please check your Supabase configuration and ensure the database is accessible.'
      }
    }
    
    console.log('✅ Database is ready')
    return { success: true }
    
  } catch (error) {
    console.error('❌ Unexpected database error:', error)
    return {
      success: false,
      error: 'Unexpected database error',
      details: error instanceof Error ? error.message : 'Unknown error occurred',
      solution: 'Please check your Supabase configuration and try again.'
    }
  }
}

// Contact form submission function
export const submitContactForm = async (formData: Omit<ContactForm, 'id' | 'created_at'>) => {
  try {
    console.log('📝 Submitting contact form...')
    
    // Insert contact form data
    const { data, error } = await supabase
      .from('contacts')
      .insert([{
        name: formData.name,
        email: formData.email,
        phone: formData.phone || null,
        message: formData.message
      }])
      .select()
    
    if (error) {
      console.error('❌ Contact form submission failed:', error)
      
      if (error.code === 'PGRST116' || error.message.includes('relation') || error.message.includes('does not exist')) {
        return {
          success: false,
          error: 'Database tables not found',
          details: 'The contacts table does not exist in your database.',
          solution: 'Please run the SQL migration in your Supabase dashboard to create the required tables.'
        }
      }
      
      return {
        success: false,
        error: 'Form submission failed',
        details: error.message,
        solution: 'Please check your database configuration and try again.'
      }
    }
    
    console.log('✅ Contact form submitted successfully:', data)
    return { success: true, data: data[0] }
    
  } catch (error) {
    console.error('❌ Unexpected error during form submission:', error)
    return {
      success: false,
      error: 'Unexpected error',
      details: error instanceof Error ? error.message : 'Unknown error occurred',
      solution: 'Please try again or contact support if the problem persists.'
    }
  }
}