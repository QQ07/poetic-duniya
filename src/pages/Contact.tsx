import { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const form = document.querySelector('.contact-fade');
    if (form) {
      form.animate(
        [{ opacity: 0, transform: 'translateY(16px)' }, { opacity: 1, transform: 'translateY(0)' }],
        { duration: 600, easing: 'ease-out' }
      );
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to email service (e.g., EmailJS, Sendgrid)
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <Navigation />
      
      <div className="max-w-2xl mx-auto px-4 py-16">
        <div className="contact-fade">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl text-[#1A1A1A] mb-4">Get in Touch</h1>
            <p className="text-[#8B7355] text-lg">We'd love to hear from you</p>
          </div>

          {/* Divider */}
          <div className="flex justify-center mb-12">
            <div className="w-12 h-0.5 bg-[#D1D7C4]" />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name Field */}
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="w-full font-serif text-lg text-[#1A1A1A] bg-transparent border-b-2 border-[#D1D7C4] focus:border-[#E8D5D5] outline-none pb-3 transition-colors placeholder-[#8B7355]/50"
              />
            </div>

            {/* Email Field */}
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
                required
                className="w-full font-serif text-lg text-[#1A1A1A] bg-transparent border-b-2 border-[#D1D7C4] focus:border-[#E8D5D5] outline-none pb-3 transition-colors placeholder-[#8B7355]/50"
              />
            </div>

            {/* Message Field */}
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                required
                rows={6}
                className="w-full font-serif text-lg text-[#1A1A1A] bg-transparent border-b-2 border-[#D1D7C4] focus:border-[#E8D5D5] outline-none pb-3 transition-colors placeholder-[#8B7355]/50 resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-8">
              <button
                type="submit"
                className="w-full px-6 py-4 bg-[#E8D5D5] text-[#1A1A1A] font-medium rounded-full hover:bg-[#D1D7C4] transition-colors duration-300 shadow-lg"
              >
                Send Message
              </button>
            </div>
          </form>

          {/* Success Message */}
          {submitted && (
            <div className="mt-8 p-6 bg-[#D1D7C4]/20 border border-[#D1D7C4] rounded-lg text-center animate-pulse">
              <p className="font-serif text-lg text-[#1A1A1A]">
                Thank you for your message. We'll get back to you soon.
              </p>
            </div>
          )}

          {/* Footer Note */}
          <div className="mt-16 text-center">
            <p className="font-serif text-[#8B7355] italic">
              Or reach out directly at <span className="font-semibold">hello@poeticduniya.com</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
