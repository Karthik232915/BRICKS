import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ujefevsypbfdqcihkxgn.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVqZWZldnN5cGJmZHFjaWhreGduIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTExMjUyNjQsImV4cCI6MjA2NjcwMTI2NH0.QU4prPhbqsAsog5b0HrNpl8dox0oF8YPZbWVucJvxxc'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface ContactForm {
  id?: number
  name: string
  email: string
  phone?: string | null
  message: string
  created_at?: string
  source: string
}

export interface WhatsAppContact {
  id?: number
  name: string
  phone: string
  message: string
  created_at?: string
}

// Test database connection and table existence
export const testDatabaseSetup = async () => {
  try {
    console.log('🔍 Testing database connection...')
    
    // Test 1: Basic connection
    const { data: connectionTest, error: connectionError } = await supabase
      .from('contacts')
      .select('count', { count: 'exact', head: true })
    
    if (connectionError) {
      console.error('❌ Database connection failed:', connectionError)
      return {
        success: false,
        error: 'Database connection failed',
        details: connectionError.message,
        solution: 'Check your Supabase URL and API key'
      }
    }
    
    console.log('✅ Database connection successful')
    
    // Test 2: Try to insert a test record
    const testData = {
      name: 'Database Test',
      email: 'test@database.com',
      message: 'Testing database insert functionality',
      source: 'connection_test'
    }
    
    const { data: insertTest, error: insertError } = await supabase
      .from('contacts')
      .insert([testData])
      .select()
    
    if (insertError) {
      console.error('❌ Database insert test failed:', insertError)
      return {
        success: false,
        error: 'Database insert failed',
        details: insertError.message,
        solution: 'Run the SQL migration to create tables and set up permissions'
      }
    }
    
    console.log('✅ Database insert test successful:', insertTest)
    
    // Test 3: Clean up test record
    await supabase
      .from('contacts')
      .delete()
      .eq('source', 'connection_test')
    
    return {
      success: true,
      message: 'Database is properly configured and ready to use!'
    }
    
  } catch (error) {
    console.error('❌ Database test failed:', error)
    return {
      success: false,
      error: 'Unexpected database error',
      details: error.message,
      solution: 'Check browser console for more details'
    }
  }
}

// Validate contact form data
export const validateContactData = (data: Partial<ContactForm>) => {
  const errors: string[] = []
  
  if (!data.name?.trim()) {
    errors.push('Name is required')
  }
  
  if (!data.email?.trim()) {
    errors.push('Email is required')
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      errors.push('Please enter a valid email address')
    }
  }
  
  if (!data.message?.trim()) {
    errors.push('Message is required')
  }
  
  if (data.message && data.message.length < 10) {
    errors.push('Message must be at least 10 characters long')
  }
  
  return {
    isValid: errors.length === 0,
    errors
  }
}

// Submit contact form with comprehensive error handling
export const submitContactForm = async (formData: Partial<ContactForm>) => {
  try {
    // Validate data first
    const validation = validateContactData(formData)
    if (!validation.isValid) {
      return {
        success: false,
        error: 'Validation failed',
        details: validation.errors.join(', ')
      }
    }
    
    // Prepare clean data
    const contactData: ContactForm = {
      name: formData.name!.trim(),
      email: formData.email!.trim(),
      phone: formData.phone?.trim() || null,
      message: formData.message!.trim(),
      source: 'contact_form'
    }
    
    console.log('📤 Submitting contact form:', contactData)
    
    // Submit to database
    const { data, error } = await supabase
      .from('contacts')
      .insert([contactData])
      .select()
    
    if (error) {
      console.error('❌ Supabase submission error:', error)
      
      // Provide specific error messages
      if (error.message.includes('relation "contacts" does not exist')) {
        return {
          success: false,
          error: 'Database tables not found',
          details: 'The contacts table does not exist in your database.',
          solution: 'Please run the SQL migration in your Supabase dashboard to create the required tables.'
        }
      }
      
      if (error.message.includes('permission denied') || error.message.includes('RLS')) {
        return {
          success: false,
          error: 'Permission denied',
          details: 'Row Level Security is blocking the insert operation.',
          solution: 'Please check that RLS policies allow anonymous inserts on the contacts table.'
        }
      }
      
      return {
        success: false,
        error: 'Database error',
        details: error.message,
        solution: 'Please check your database configuration and try again.'
      }
    }
    
    console.log('✅ Contact form submitted successfully:', data)
    
    return {
      success: true,
      data: data[0],
      message: 'Your message has been sent successfully!'
    }
    
  } catch (error) {
    console.error('❌ Unexpected error during form submission:', error)
    return {
      success: false,
      error: 'Unexpected error',
      details: error.message,
      solution: 'Please try again or contact support if the problem persists.'
    }
  }
}