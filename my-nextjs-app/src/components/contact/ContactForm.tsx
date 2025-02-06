/*
 * File: src/components/contact/ContactForm.tsx
 * Purpose: Animated contact form with with EmailJS integration, validation and micro-interactions
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Check, AlertCircle, Mail, User, MessageSquare } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { emailConfig } from '@/config/email';
import { FormData, FormErrors, FormStatus } from '@/types/contact';

export const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formStatus, setFormStatus] = useState<FormStatus>({ type: null, message: '' });
  const [focusedField, setFocusedField] = useState<keyof FormData | null>(null);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    setFormStatus({ type: null, message: '' });

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message
      };

      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        templateParams,
        emailConfig.publicKey
      );

      setFormStatus({
        type: 'success',
        message: 'Message sent successfully! I will get back to you soon.'
      });

      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

    } catch (error) {
      setFormStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // ... (previous input classes and style functions remain the same)

  return (
    <div className="max-w-2xl mx-auto p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
      >
        <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>

        {/* Status Message */}
        <AnimatePresence mode="wait">
          {formStatus.type && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`p-4 rounded-lg mb-6 ${
                formStatus.type === 'success' 
                  ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200'
                  : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200'
              }`}
            >
              <div className="flex items-center">
                {formStatus.type === 'success' ? (
                  <Check className="w-5 h-5 mr-2" />
                ) : (
                  <AlertCircle className="w-5 h-5 mr-2" />
                )}
                {formStatus.message}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Form fields remain the same as before */}
          {/* ... */}

          {/* Submit Button with loading and disabled states */}
          <motion.button
            type="submit"
            disabled={isSubmitting}
            className={`
              w-full py-3 px-6 rounded-lg
              bg-blue-500 hover:bg-blue-600
              text-white font-medium
              flex items-center justify-center
              transition-colors
              ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}
              ${formStatus.type === 'success' ? 'bg-green-500 hover:bg-green-600' : ''}
            `}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isSubmitting ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              >
                <Send className="w-5 h-5" />
              </motion.div>
            ) : (
              <>
                <Send className="w-5 h-5 mr-2" />
                {formStatus.type === 'success' ? 'Message Sent!' : 'Send Message'}
              </>
            )}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};