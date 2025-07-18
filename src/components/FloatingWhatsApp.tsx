import React from 'react';
import { MessageSquare } from 'lucide-react';
import { supabase, WhatsAppContact } from '@/lib/supabase';
import { sendWhatsAppNotification } from '@/lib/email';

export const FloatingWhatsApp = () => {
  const handleWhatsAppClick = async () => {
    const message = "Hi! I'm interested in your services. Can we discuss my project?";
    const businessPhone = '+917200176760';
    
    try {
      // Save WhatsApp contact to database
      const whatsappData: WhatsAppContact = {
        name: 'WhatsApp User', // Default name since we don't have user's name
        phone: businessPhone,
        message: message
      };

      console.log('Saving WhatsApp contact:', whatsappData);

      // Save to Supabase
      const { data, error } = await supabase
        .from('whatsapp_contacts')
        .insert([whatsappData])
        .select();

      if (error) {
        console.error('Error saving WhatsApp contact:', error);
        // Don't show error to user for WhatsApp tracking, just log it
      } else {
        console.log('WhatsApp contact saved successfully:', data);
        
        // Send email notification (optional)
        try {
          await sendWhatsAppNotification(whatsappData);
        } catch (emailError) {
          console.warn('WhatsApp email notification failed:', emailError);
        }
      }

    } catch (error) {
      console.error('WhatsApp contact error:', error);
      // Continue to open WhatsApp even if database save fails
    }

    // Always open WhatsApp regardless of database save status
    const whatsappUrl = `https://wa.me/${businessPhone.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-1000 transform hover:scale-110 z-50 animate-bounce"
      aria-label="Contact us on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <MessageSquare className="w-6 h-6" />
    </button>
  );
};