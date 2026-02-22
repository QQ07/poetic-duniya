import { useEffect } from 'react';
import Navigation from '../components/Navigation';

export default function About() {
  useEffect(() => {
    const content = document.querySelector('.about-fade');
    if (content) {
      content.animate(
        [{ opacity: 0, transform: 'translateY(16px)' }, { opacity: 1, transform: 'translateY(0)' }],
        { duration: 600, easing: 'ease-out' }
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <Navigation />
      
      <div className="max-w-2xl mx-auto px-4 py-16">
        <div className="about-fade">
          {/* Profile Section */}
          <div className="text-center mb-16">
            <div className="mb-8 flex justify-center">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#E8D5D5] to-[#D1D7C4] flex items-center justify-center shadow-lg">
                <svg className="w-16 h-16 text-[#1A1A1A]/20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
            </div>
            <h1 className="font-serif text-4xl text-[#1A1A1A] mb-2">Poetic Duniya</h1>
            <p className="text-[#8B7355] text-lg">A sanctuary for verses in multiple languages</p>
          </div>

          {/* Divider */}
          <div className="flex justify-center mb-12">
            <div className="w-12 h-0.5 bg-[#D1D7C4]" />
          </div>

          {/* Letter Content */}
          <div className="prose prose-lg max-w-none space-y-6">
            <div className="bg-white/50 p-10 rounded-lg border border-[#E8D5D5]/30">
              <p className="font-serif text-lg text-[#1A1A1A] leading-relaxed mb-6">
                Dear Reader,
              </p>

              <p className="font-serif text-lg text-[#1A1A1A] leading-relaxed mb-6">
                Welcome to <span className="font-semibold">Poetic Duniya</span>, a digital sanctuary dedicated to the art of poetry across languages and cultures. This collection exists to celebrate the beauty of the written word—those verses that capture the essence of human emotion, yearning, and connection.
              </p>

              <p className="font-serif text-lg text-[#1A1A1A] leading-relaxed mb-6">
                In a world that moves at lightning speed, poetry asks us to pause. To breathe. To sit with our feelings. Each poem here—whether crafted in Hindi, Marathi, English, or beyond—carries the weight of the poet's heart.
              </p>

              <p className="font-serif text-lg text-[#1A1A1A] leading-relaxed mb-6">
                This is not just a collection; it's a conversation. Between poet and reader. Between languages and souls. We believe that beauty transcends borders, and that a verse in any language can speak to the heart.
              </p>

              <p className="font-serif text-lg text-[#1A1A1A] leading-relaxed">
                Thank you for being here. Thank you for reading. Thank you for letting these words touch your heart.
              </p>

              <div className="mt-8 pt-8 border-t border-[#D1D7C4]">
                <p className="font-serif text-lg text-[#1A1A1A]">With gratitude,</p>
                <p className="font-serif text-lg text-[#8B7355] mt-2">The Poetic Duniya Collective</p>
              </div>
            </div>

            {/* Mission Statement */}
            <div className="mt-12">
              <h2 className="font-serif text-2xl text-[#1A1A1A] mb-6">Our Mission</h2>
              <ul className="space-y-4 font-serif text-lg text-[#1A1A1A] leading-relaxed">
                <li className="flex gap-4">
                  <span className="text-[#E8D5D5]">✦</span>
                  <span>To celebrate poetry in all its forms and languages</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-[#E8D5D5]">✦</span>
                  <span>To create a space where readers can find solace and connection</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-[#E8D5D5]">✦</span>
                  <span>To preserve the timeless beauty of the written word</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
