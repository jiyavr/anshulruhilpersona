import { useState, FormEvent } from 'react';
import { supabase } from '../lib/supabase';
import Button from './Button';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([formData]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="relative">
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          className="peer w-full px-4 py-3 border-2 border-gray-300 focus:border-[#15E0FB] focus:outline-none transition-all duration-400"
          placeholder=" "
        />
        <label
          htmlFor="name"
          className="absolute left-4 -top-2.5 bg-white px-2 text-sm text-gray-600 transition-all duration-400 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-[#15E0FB]"
        >
          Name
        </label>
      </div>

      <div className="relative">
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          className="peer w-full px-4 py-3 border-2 border-gray-300 focus:border-[#15E0FB] focus:outline-none transition-all duration-400"
          placeholder=" "
        />
        <label
          htmlFor="email"
          className="absolute left-4 -top-2.5 bg-white px-2 text-sm text-gray-600 transition-all duration-400 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-[#15E0FB]"
        >
          Email
        </label>
      </div>

      <div className="relative">
        <textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
          rows={5}
          className="peer w-full px-4 py-3 border-2 border-gray-300 focus:border-[#15E0FB] focus:outline-none transition-all duration-400 resize-none"
          placeholder=" "
        />
        <label
          htmlFor="message"
          className="absolute left-4 -top-2.5 bg-white px-2 text-sm text-gray-600 transition-all duration-400 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-[#15E0FB]"
        >
          Message
        </label>
      </div>

      {submitStatus === 'success' && (
        <p className="text-[#15E0FB] text-sm">Message sent successfully!</p>
      )}
      {submitStatus === 'error' && (
        <p className="text-red-600 text-sm">Failed to send message. Please try again.</p>
      )}

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
}
