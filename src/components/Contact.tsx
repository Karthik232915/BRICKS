import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, Send, AlertCircle, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { sendContactEmail } from '@/lib/email';
import { checkDatabase, submitContactForm } from '@/lib/supabase';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [databaseStatus, setDatabaseStatus] = useState<'checking' | 'ready' | 'error'>('checking');
  const [databaseError, setDatabaseError] = useState<string>('');
  const { toast } = useToast();

  // Test database setup on component mount
  useEffect(() => {
    const checkDatabaseStatus = async () => {
      console.log('🔍 Checking database setup...');
      
      const result = await checkDatabase();
      if (result.success) {
        setDatabaseStatus('ready');
        console.log('✅ Database is ready');
      } else {
        setDatabaseStatus('error');
        setDatabaseError(result.details || result.error);
        console.error('❌ Database setup issue:', result);
      }
    };
    
    checkDatabaseStatus();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (databaseStatus !== 'ready') {
      toast({
        title: "Database Not Ready",
        description: "Please wait for database initialization to complete.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      console.log('📝 Starting form submission...');
      
      // Submit to database using the new helper function
      const result = await submitContactForm(formData);
      
      if (!result.success) {
        console.error('❌ Form submission failed:', result);
        
        toast({
          title: result.error,
          description: `${result.details}${result.solution ? ` ${result.solution}` : ''}`,
          variant: "destructive",
        });
        return;
      }

      console.log('✅ Form submitted successfully:', result.data);

      // Try to send email notification (optional - don't fail if this doesn't work)
      try {
        await sendContactEmail(result.data);
        console.log('📧 Email notification sent');
      } catch (emailError) {
        console.warn('⚠️ Email notification failed (but form was saved):', emailError);
      }

      // Success!
      toast({
        title: "Message Sent Successfully! 🎉",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });

      // Reset form
      setFormData({ name: '', email: '', phone: '', message: '' });

    } catch (error) {
      console.error('❌ Unexpected error during form submission:', error);
      toast({
        title: "Unexpected Error",
        description: "Something went wrong. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-[#1E3D59] to-blue-700">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
            GET IN TOUCH
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-6">Let's Build Something Amazing Together</h3>
              <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                Ready to transform your brand's digital presence? Get in touch with us today and let's discuss 
                how we can help you achieve your marketing goals.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-[#FF6B35] p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email Us</h4>
                    <p className="text-blue-200">pafagelsoftwaresolution@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-[#FF6B35] p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Call Us</h4>
                    <p className="text-blue-200">+91 9514940379</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-2xl">
              {/* Database Status Indicator */}
              <div className="mb-6">
                {databaseStatus === 'checking' && (
                  <div className="flex items-center space-x-2 text-yellow-600 bg-yellow-50 p-3 rounded-lg">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-yellow-600"></div>
                    <span className="text-sm">Initializing database connection...</span>
                  </div>
                )}
                
                {databaseStatus === 'ready' && (
                  <div className="flex items-center space-x-2 text-green-600 bg-green-50 p-3 rounded-lg">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm">Database ready - form is operational</span>
                  </div>
                )}
                
                {databaseStatus === 'error' && (
                  <div className="flex items-start space-x-2 text-red-600 bg-red-50 p-3 rounded-lg">
                    <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <div className="text-sm">
                      <div className="font-medium">Database Setup Required</div>
                      <div className="mt-1">{databaseError}</div>
                      <div className="mt-2 text-xs">
                        Please run the SQL migration in your Supabase dashboard to create the required tables.
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={databaseStatus !== 'ready'}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent disabled:opacity-50"
                  />
                </div>
                
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email *"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={databaseStatus !== 'ready'}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent disabled:opacity-50"
                  />
                </div>
                
                <div>
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone Number (Optional)"
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={databaseStatus !== 'ready'}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent disabled:opacity-50"
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Tell us about your project... *"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    disabled={databaseStatus !== 'ready'}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent resize-none disabled:opacity-50"
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting || databaseStatus !== 'ready'}
                  className="w-full bg-gradient-to-r from-[#FF6B35] to-orange-500 hover:from-orange-500 hover:to-[#FF6B35] text-white py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : databaseStatus === 'checking' ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Initializing...</span>
                    </>
                  ) : databaseStatus === 'error' ? (
                    <>
                      <AlertCircle className="w-5 h-5" />
                      <span>Database Setup Required</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};