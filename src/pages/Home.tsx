import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import poemsData from "../data/poems.json";
import Footer from "../components/Footer";

export default function Home() {
  const featuredPoem = poemsData.poems[0];

  useEffect(() => {
    const heroSection = document.querySelector(".hero-fade");
    if (heroSection) {
      heroSection.animate(
        [
          { opacity: 0, transform: "translateY(16px)" },
          { opacity: 1, transform: "translateY(0)" },
        ],
        { duration: 600, easing: "ease-out" }
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <Navigation />

      <section className="hero-fade flex items-center justify-center min-h-screen px-4">
        <div className="w-full max-w-3xl text-center">
          {/* Overline */}
          <div className="mb-8">
            <p className="text-xs uppercase tracking-widest text-[#8B7355]">
              Welcome to
            </p>
          </div>

          {/* Main Title */}
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl text-[#1A1A1A] mb-6 leading-tight">
            Poetic<br />Duniya
          </h1>

          {/* Subtitle */}
          <p className="font-serif text-xl text-[#8B7355] mb-12 leading-relaxed max-w-xl mx-auto">
            A sanctuary for poetry in multiple languages. Discover verses that speak to the soul.
          </p>

          {/* Featured Snippet */}
          <div className="mb-12 p-8 bg-white/50 border border-[#E8D5D5]/30 rounded-lg backdrop-blur-sm">
            <p className="font-serif text-lg text-[#1A1A1A] italic leading-relaxed mb-4">
              "{featuredPoem.preview}"
            </p>
            <p className="text-xs uppercase tracking-widest text-[#8B7355]">
              — {featuredPoem.title}
            </p>
          </div>

          {/* CTA Button */}
          <Link
            to="/poems"
            className="inline-block px-12 py-4 bg-[#E8D5D5] text-[#1A1A1A] font-medium rounded-full hover:bg-[#D1D7C4] transition-colors duration-300 shadow-lg"
          >
            Start Reading
          </Link>

          {/* Decorative divider */}
          <div className="mt-16 flex justify-center">
            <div className="w-12 h-0.5 bg-[#D1D7C4]" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
