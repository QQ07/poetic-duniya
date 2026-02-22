const Footer = () => {
  return (
    <footer className="bg-[#FAF9F6] border-t border-[#E8D5D5] py-8 px-6 mt-16">
      <div className="max-w-6xl mx-auto">
        {/* Divider */}
        <div className="flex justify-center mb-8">
          <div className="w-12 h-0.5 bg-[#D1D7C4]" />
        </div>

        {/* Footer Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <p className="font-serif text-lg text-[#1A1A1A] font-semibold">
              Poetic Duniya
            </p>
            <p className="text-xs uppercase tracking-widest text-[#8B7355] mt-1">
              A sanctuary for poetry
            </p>
          </div>

          {/* Credits */}
          <div className="text-center">
            <p className="text-sm text-[#1A1A1A]">
              Written by <span className="font-medium">Mrunmai Vaidya</span>
            </p>
            <p className="text-xs text-[#8B7355] mt-1">
              Website by{' '}
              <a
                href="https://www.linkedin.com/in/vrohann/"
                className="hover:text-[#E8D5D5] transition-colors duration-300 font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rohan Vaidya
              </a>
            </p>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-xs text-[#8B7355]">
              © {new Date().getFullYear()} Poetic Duniya
            </p>
            <p className="text-xs text-[#8B7355] mt-1">
              All poems preserved with care
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="flex justify-center mt-8">
          <div className="w-12 h-0.5 bg-[#D1D7C4]" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
