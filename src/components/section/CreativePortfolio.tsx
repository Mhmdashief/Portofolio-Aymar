import { useDarkMode } from '../../contexts/DarkModeContext';
import { useThemeColors } from '../../hooks/useThemeColors';
import { ExternalLink, Download, Sparkles, BookOpen } from 'lucide-react';

const PDF_PORTFOLIO = '/Portofolio.pdf';

const CreativePortfolio = () => {
  const { isDarkMode } = useDarkMode();
  const themeColors = useThemeColors();

  return (
    <section
      id="creative-portfolio"
      className="py-12 md:py-20 relative overflow-hidden"
      style={{
        background: isDarkMode
          ? themeColors.background.gradientEnd
          : 'linear-gradient(180deg, rgb(254 252 253) 0%, rgb(255 255 255) 40%, rgb(254 248 250) 100%)',
        transition: 'background 0.3s ease-in-out',
      }}
    >
      {/* Top edge gradient */}
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: '100px',
          background: isDarkMode
            ? `linear-gradient(180deg, ${themeColors.background.gradientEnd} 0%, transparent 100%)`
            : `linear-gradient(180deg, ${themeColors.colors.pink[25]} 0%, transparent 100%)`,
          zIndex: 1,
        }}
      />

      {/* Decorative floating circles — hidden on small screens to reduce clutter */}
      <div
        className="hidden md:block absolute top-16 right-10 w-48 h-48 rounded-full pointer-events-none opacity-20"
        style={{
          background: isDarkMode
            ? `radial-gradient(circle, ${themeColors.colors.pink[900]} 0%, transparent 70%)`
            : `radial-gradient(circle, ${themeColors.colors.pink[200]} 0%, transparent 70%)`,
        }}
      />
      <div
        className="hidden md:block absolute bottom-20 left-8 w-32 h-32 rounded-full pointer-events-none opacity-15"
        style={{
          background: isDarkMode
            ? `radial-gradient(circle, ${themeColors.colors.pink[800]} 0%, transparent 70%)`
            : `radial-gradient(circle, ${themeColors.colors.pink[300]} 0%, transparent 70%)`,
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-6xl">
        {/* Section Header */}
        <header className="text-center mb-8 md:mb-16">
          <div className="flex items-center justify-center gap-2 md:gap-3 mb-3">
            <Sparkles
              size={22}
              style={{ color: themeColors.colors.pink[400] }}
              className="md:hidden"
            />
            <Sparkles
              size={28}
              style={{ color: themeColors.colors.pink[400] }}
              className="hidden md:block"
            />
            <h2
              className="text-3xl md:text-5xl font-bold"
              style={{
                fontFamily: "'DK Crayonista', cursive, sans-serif",
                color: isDarkMode
                  ? themeColors.colors.white
                  : themeColors.colors.pink[600],
              }}
            >
              My Creative Work
            </h2>
            <Sparkles
              size={22}
              style={{ color: themeColors.colors.pink[400] }}
              className="md:hidden"
            />
            <Sparkles
              size={28}
              style={{ color: themeColors.colors.pink[400] }}
              className="hidden md:block"
            />
          </div>
          <p
            className="text-sm md:text-lg max-w-2xl mx-auto"
            style={{ color: themeColors.text.secondary }}
          >
            A comprehensive overview of my professional experiences, projects,
            achievements, and creative works all compiled into one portfolio
            document.
          </p>
        </header>

        {/* ─── MOBILE LAYOUT: Compact horizontal card ─── */}
        <div className="block md:hidden">
          <div
            className="rounded-2xl shadow-lg border overflow-hidden"
            style={{
              backgroundColor: themeColors.card.background,
              borderColor: themeColors.colors.pink[100],
            }}
          >
            {/* Top strip: mini mockup + title side by side */}
            <div className="flex items-center gap-4 p-5"
              style={{
                background: isDarkMode
                  ? `linear-gradient(135deg, ${themeColors.colors.dark[800]} 0%, ${themeColors.colors.dark[900]} 100%)`
                  : `linear-gradient(135deg, ${themeColors.colors.pink[50]} 0%, ${themeColors.colors.pink[100]} 100%)`,
              }}
            >
              {/* Mini PDF mockup */}
              <div
                className="relative flex-shrink-0 w-16 h-20 rounded-xl flex flex-col items-center justify-center border-2 shadow-md"
                style={{
                  backgroundColor: isDarkMode
                    ? themeColors.colors.dark[700]
                    : themeColors.colors.white,
                  borderColor: themeColors.colors.pink[200],
                }}
              >
                {/* Corner fold */}
                <div
                  className="absolute top-0 right-0 w-5 h-5"
                  style={{
                    background: `linear-gradient(225deg, ${themeColors.colors.pink[200]} 50%, ${isDarkMode ? themeColors.colors.dark[700] : themeColors.colors.white} 50%)`,
                    borderRadius: '0 10px 0 0',
                  }}
                />
                {/* PDF badge */}
                <span
                  className="absolute top-1 left-1.5 text-[8px] font-bold px-1 rounded border"
                  style={{
                    color: themeColors.colors.pink[500],
                    borderColor: themeColors.colors.pink[300],
                    backgroundColor: isDarkMode
                      ? `${themeColors.colors.pink[900]}33`
                      : themeColors.colors.pink[50],
                  }}
                >
                  PDF
                </span>
                <BookOpen
                  size={24}
                  style={{ color: themeColors.colors.pink[500] }}
                />
              </div>

              {/* Title & badge */}
              <div className="flex flex-col gap-1 min-w-0">
                <span
                  className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full self-start"
                  style={{
                    backgroundColor: isDarkMode
                      ? `${themeColors.colors.pink[900]}44`
                      : themeColors.colors.pink[100],
                    color: themeColors.colors.pink[500],
                  }}
                >
                  Portfolio PDF
                </span>
                <h3
                  className="text-base font-bold leading-snug"
                  style={{ color: themeColors.text.primary }}
                >
                  Explore My Professional Journey
                </h3>
                <p
                  className="text-xs"
                  style={{ color: themeColors.text.secondary }}
                >
                  Professional Portfolio Document
                </p>
              </div>
            </div>

            {/* Bottom: description + bullets + buttons */}
            <div className="p-5 flex flex-col gap-4">
              <p
                className="text-sm leading-relaxed"
                style={{ color: themeColors.text.secondary }}
              >
                This portfolio highlights my professional experiences, projects,
                leadership activities, certifications, and selected creative works.
              </p>

              {/* Compact bullet list — 2 columns on mobile */}
              <ul className="grid grid-cols-1 gap-1.5">
                {[
                  'Professional experiences & internships',
                  'Business development & digital projects',
                  'Product support & project management',
                  'Certifications & achievements',
                  'Creative works & portfolio highlights',
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-xs font-medium"
                    style={{ color: themeColors.text.secondary }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: themeColors.colors.pink[400] }}
                    />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Action buttons — full width on mobile */}
              <div className="flex flex-col gap-3 pt-1">
                <a
                  id="open-creative-portfolio-mobile"
                  href={PDF_PORTFOLIO}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-300 active:scale-95"
                  style={{
                    backgroundColor: themeColors.colors.pink[500],
                    color: '#ffffff',
                  }}
                >
                  <ExternalLink size={16} />
                  View Portfolio
                </a>
                <a
                  id="download-creative-portfolio-mobile"
                  href={PDF_PORTFOLIO}
                  download="Creative_Portfolio_Aymardayanti.pdf"
                  className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-300 active:scale-95"
                  style={{
                    backgroundColor: isDarkMode
                      ? `${themeColors.colors.pink[900]}55`
                      : themeColors.colors.pink[50],
                    color: themeColors.colors.pink[600],
                    border: `1.5px solid ${themeColors.colors.pink[200]}`,
                  }}
                >
                  <Download size={16} />
                  Download Portfolio
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ─── DESKTOP LAYOUT: Original side-by-side card ─── */}
        <div
          className="hidden md:block rounded-3xl shadow-2xl border overflow-hidden transition-all duration-300 hover:-translate-y-1"
          style={{
            backgroundColor: themeColors.card.background,
            borderColor: themeColors.colors.pink[100],
          }}
        >
          <div className="flex flex-col lg:flex-row">
            {/* Left: Visual Preview Panel */}
            <div
              className="lg:w-2/5 flex flex-col items-center justify-center p-10 relative"
              style={{
                background: isDarkMode
                  ? `linear-gradient(135deg, ${themeColors.colors.dark[800]} 0%, ${themeColors.colors.dark[900]} 100%)`
                  : `linear-gradient(135deg, ${themeColors.colors.pink[50]} 0%, ${themeColors.colors.pink[100]} 100%)`,
              }}
            >
              {/* PDF Document Mockup */}
              <div className="relative group">
                {/* Shadow stack effect */}
                <div
                  className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl opacity-30"
                  style={{ backgroundColor: themeColors.colors.pink[300] }}
                />
                <div
                  className="absolute -bottom-1.5 -right-1.5 w-full h-full rounded-2xl opacity-50"
                  style={{ backgroundColor: themeColors.colors.pink[200] }}
                />

                {/* Main document card */}
                <div
                  className="relative w-52 h-72 rounded-2xl flex flex-col items-center justify-center gap-4 shadow-xl border-2 transition-transform duration-300 group-hover:scale-105"
                  style={{
                    backgroundColor: isDarkMode
                      ? themeColors.colors.dark[700]
                      : themeColors.colors.white,
                    borderColor: themeColors.colors.pink[200],
                  }}
                >
                  {/* Top corner fold */}
                  <div
                    className="absolute top-0 right-0 w-10 h-10"
                    style={{
                      background: `linear-gradient(225deg, ${themeColors.colors.pink[100]} 50%, ${isDarkMode ? themeColors.colors.dark[700] : themeColors.colors.white} 50%)`,
                      borderRadius: '0 16px 0 0',
                    }}
                  />

                  {/* PDF Badge */}
                  <span
                    className="absolute top-3 left-4 text-xs font-bold px-2 py-0.5 rounded border"
                    style={{
                      color: themeColors.colors.pink[500],
                      borderColor: themeColors.colors.pink[300],
                      backgroundColor: isDarkMode
                        ? `${themeColors.colors.pink[900]}33`
                        : themeColors.colors.pink[50],
                    }}
                  >
                    PDF
                  </span>

                  {/* Icon */}
                  <div
                    className="p-5 rounded-full shadow-md"
                    style={{
                      backgroundColor: isDarkMode
                        ? `${themeColors.colors.pink[900]}44`
                        : themeColors.colors.pink[100],
                    }}
                  >
                    <BookOpen
                      size={44}
                      style={{ color: themeColors.colors.pink[500] }}
                    />
                  </div>

                  {/* Decorative lines (mimics document content) */}
                  <div className="w-32 flex flex-col gap-2 mt-2">
                    {[80, 100, 60, 90, 75].map((width, i) => (
                      <div
                        key={i}
                        className="h-1.5 rounded-full opacity-40"
                        style={{
                          width: `${width}%`,
                          backgroundColor: themeColors.colors.pink[400],
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* File label below mockup */}
              <p
                className="mt-8 text-sm font-semibold tracking-wide text-center"
                style={{ color: themeColors.text.secondary }}
              >
                Professional Portfolio Document
              </p>
            </div>

            {/* Right: Info + Actions Panel */}
            <div className="lg:w-3/5 p-10 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-3">
                <span
                  className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                  style={{
                    backgroundColor: isDarkMode
                      ? `${themeColors.colors.pink[900]}44`
                      : themeColors.colors.pink[100],
                    color: themeColors.colors.pink[500],
                  }}
                >
                  Portfolio PDF
                </span>
              </div>

              <h3
                className="text-2xl md:text-3xl font-bold mb-4 leading-snug"
                style={{ color: themeColors.text.primary }}
              >
                Explore My Professional Journey
              </h3>

              <p
                className="text-base leading-relaxed mb-8"
                style={{ color: themeColors.text.secondary }}
              >
                This portfolio highlights my professional experiences, projects,
                leadership activities, certifications, and selected creative
                works. It reflects my passion for solving problems, building
                impactful solutions, and continuously learning across business
                and digital fields.
              </p>

              {/* Feature highlights */}
              <ul className="mb-8 space-y-2">
                {[
                  'Professional experiences & internships',
                  'Business development & digital projects',
                  'Product support & project management',
                  'Certifications & achievements',
                  'Creative works & portfolio highlights',
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm font-medium"
                    style={{ color: themeColors.text.secondary }}
                  >
                    <span
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ backgroundColor: themeColors.colors.pink[400] }}
                    />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  id="open-creative-portfolio"
                  href={PDF_PORTFOLIO}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl text-sm font-semibold transition-all duration-300 hover:brightness-110 hover:shadow-lg hover:-translate-y-0.5"
                  style={{
                    backgroundColor: themeColors.colors.pink[500],
                    color: '#ffffff',
                  }}
                >
                  <ExternalLink size={18} />
                  View Portfolio
                </a>

                <a
                  id="download-creative-portfolio"
                  href={PDF_PORTFOLIO}
                  download="Creative_Portfolio_Aymardayanti.pdf"
                  className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    backgroundColor: isDarkMode
                      ? `${themeColors.colors.pink[900]}55`
                      : themeColors.colors.pink[50],
                    color: themeColors.colors.pink[600],
                    border: `1.5px solid ${themeColors.colors.pink[200]}`,
                  }}
                >
                  <Download size={18} />
                  Download Portfolio
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: '100px',
          background: isDarkMode
            ? `linear-gradient(180deg, transparent 0%, ${themeColors.background.gradientEnd} 100%)`
            : `linear-gradient(180deg, transparent 0%, ${themeColors.colors.pink[25]} 100%)`,
          zIndex: 1,
        }}
      />
    </section>
  );
};

export default CreativePortfolio;
