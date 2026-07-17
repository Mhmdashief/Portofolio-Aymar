import { useEffect, useState, useRef } from 'react';

import { ChevronLeft, ChevronRight, Mail, Phone, Linkedin, Instagram } from 'lucide-react';
import AsciiMorphText from '../AsciiMorphText';
import TypewriterCarousel from '../TypewriterCarousel';
import { useDarkMode } from '../../contexts/DarkModeContext';
import { useThemeColors, withAlpha } from '../../hooks/useThemeColors';

import aymarAboutUsImg from '../../assets/foto about us aymar.jpeg';
import { socialLinks } from '../../config/socialLinks';

// Import all 10 custom photos added by the user
import foto1 from '../../assets/foto1.jpeg';
import foto2 from '../../assets/foto 2.jpeg';
import foto3 from '../../assets/foto 3.jpeg';
import foto4 from '../../assets/foto 4.jpeg';
import foto5 from '../../assets/foto 5.jpeg';
import foto6 from '../../assets/foto 6.jpeg';
import foto7 from '../../assets/foto 7.jpeg';
import foto8 from '../../assets/foto 8.jpeg';
import foto9 from '../../assets/foto 9.jpeg';
import foto10 from '../../assets/foto 10.jpeg';


const About = () => {
  
  const [asciiText, setAsciiText] = useState('');
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { isDarkMode } = useDarkMode();
  const themeColors = useThemeColors();

  const roles = [
    'Digital Marketing',
    'Business Development',
  ];

  const profileImages = [
    aymarAboutUsImg,
    foto1,
    foto2,
    foto3,
    foto4,
    foto5,
    foto6,
    foto7,
    foto8,
    foto9,
    foto10,
  ];

  const fullAsciiArt = `⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⢠⡾⠲⠶⣤⣀⣠⣤⣤⣤⡿⠛⠿⡴⠾⠛⢻⡆⠀⠀⠀
⠀⠀⠀⣼⠁⠀⠀⠀⠉⠁⠀⢀⣿⠐⡿⣿⠿⣶⣤⣤⣷⡀⠀⠀
⠀⠀⠀⢹⡶⠀⠀⠀⠀⠀⠀⠈⢯⣡⣿⣿⣀⣰⣿⣦⢂⡏⠀⠀
⠀⠀⢀⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠹⣍⣭⣾⠁⠀⠀
⠀⣀⣸⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣸⣧⣤⡀
⠈⠉⠹⣏⡁⠀⢸⣿⠀⠀⠀⢀⡀⠀⠀⠀⣿⠆⠀⢀⣸⣇⣀⠀
⠀⠐⠋⢻⣅⡄⢀⣀⣀⡀⠀⠯⠽⠂⢀⣀⣀⡀⠀⣤⣿⠀⠉⠀
⠀⠀⠴⠛⠙⣳⠋⠉⠉⠙⣆⠀⠀⢰⡟⠉⠈⠙⢷⠟⠈⠙⠂⠀
⠀⠀⠀⠀⠀⢻⣄⣠⣤⣴⠟⠛⠛⠛⢧⣤⣤⣀⡾⠀⠀⠀⠀⠀`;

  // Typewriter effect for ASCII art
  useEffect(() => {
    let currentIndex = 0;
    const typingSpeed = 3; // Speed in milliseconds

    const typeWriter = () => {
      if (currentIndex < fullAsciiArt.length) {
        setAsciiText(fullAsciiArt.substring(0, currentIndex + 1));
        currentIndex++;
        setTimeout(typeWriter, typingSpeed);
      }
    };

    // Start typing after a small delay
    const startDelay = setTimeout(() => {
      typeWriter();
    }, 500);

    return () => clearTimeout(startDelay);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Only run once on mount

  

  // Focus management for modal
  useEffect(() => {
    if (showProfileModal) {
      // Focus the modal when it opens
      const timer = setTimeout(() => {
        const modal = document.querySelector('[role="region"][aria-label="Profile photo carousel"]') as HTMLElement;
        if (modal) {
          modal.focus();
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [showProfileModal]);

  // Carousel navigation functions
  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? profileImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === profileImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Jump to a specific slide (used by dot indicators)
  const goToSlide = (index: number) => {
    setCurrentImageIndex(index);
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      goToPrevious();
    } else if (e.key === 'ArrowRight') {
      goToNext();
    } else if (e.key === 'Escape') {
      setIsClosing(true);
      setTimeout(() => {
        setShowProfileModal(false);
        setIsClosing(false);
      }, 300);
    }
  };

  

  

  return (
    <section id="about" ref={sectionRef} className="min-h-[75vh]" style={{
      background: themeColors.background.sections?.about || themeColors.background.gradient,
      transition: 'background 0.3s ease-in-out',
      width: '100%',
      maxWidth: '100vw',
    }}>


      {/* ── HERO: Two-column layout (Photo Left | Bio + Cards Right) ── */}
      <div className="pt-6 pb-2 md:pt-10 md:pb-6">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 md:gap-10 lg:gap-16 max-w-6xl mx-auto">

            {/* ── LEFT COLUMN: Profile Photo with Glow Frame ── */}
            <div className="flex-shrink-0 flex flex-col items-center gap-4">
              {/* Animated glow border wrapper */}
              <div
                className="relative w-56 sm:w-56 md:w-64 lg:w-72"
                style={{
                  borderRadius: '1.25rem',
                  padding: '3px',
                  background: `linear-gradient(135deg, ${themeColors.colors.pink[400]}, ${isDarkMode ? '#7c3aed' : themeColors.colors.pink[300]}, ${themeColors.colors.pink[500]})`,
                  boxShadow: isDarkMode
                    ? `0 0 32px ${withAlpha(themeColors.colors.pink[400], 0.45)}, 0 0 64px ${withAlpha('#7c3aed', 0.2)}`
                    : `0 0 24px ${withAlpha(themeColors.colors.pink[300], 0.5)}, 0 8px 32px ${withAlpha(themeColors.colors.pink[400], 0.25)}`,
                  animation: 'glowPulse 3s ease-in-out infinite',
                }}
              >
                {/* Inner container: aspect-ratio 3/4 (portrait) — matches the profile photo naturally */}
                <div
                  style={{
                    borderRadius: '1.1rem',
                    overflow: 'hidden',
                    aspectRatio: '3 / 4',
                    width: '100%',
                    background: isDarkMode ? '#0f172a' : '#f9f0f2',
                  }}
                >
                  <img
                    src={aymarAboutUsImg}
                    alt="Aymardayanti Pagril"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center',
                      display: 'block',
                    }}
                    onClick={() => setShowProfileModal(true)}
                    className="cursor-pointer transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
              {/* Available for work badge */}
              <div
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold"
                style={{
                  backgroundColor: isDarkMode ? withAlpha(themeColors.colors.dark[800], 0.8) : withAlpha(themeColors.colors.pink[50], 0.95),
                  border: `1px solid ${withAlpha(themeColors.colors.pink[400], 0.4)}`,
                  color: themeColors.text.primary,
                  backdropFilter: 'blur(8px)',
                  boxShadow: `0 4px 12px ${withAlpha(themeColors.colors.dark[950], 0.15)}`,
                }}
              >
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: '#22c55e',
                    boxShadow: '0 0 6px #22c55e',
                    animation: 'ping 1.5s cubic-bezier(0,0,0.2,1) infinite',
                    display: 'inline-block',
                  }}
                />
                Available for work
              </div>
            </div>

            {/* ── RIGHT COLUMN: Bio + Contact Info + CTA ── */}
            <div className="flex-1 min-w-0 text-center lg:text-left">

              {/* Name & Role */}
              <div className="mb-1">
                <div className="ascii-container mx-auto text-2xl sm:text-3xl md:text-4xl lg:text-4xl" style={{ color: (themeColors.colors.utility?.info || themeColors.colors.pink[400]) }}>
                  <AsciiMorphText text="Hi, I'm Aymardayanti Pagril" />
                </div>
                <div className="hero-subtitle mx-auto text-center text-base md:text-lg mt-2">
                  <div className="flex flex-wrap items-center justify-center">
                    <span className={isDarkMode ? 'hero-subtitle-dark' : 'hero-subtitle-light'}>I specialize in&nbsp;</span>
                    <TypewriterCarousel roles={roles} className={isDarkMode ? 'hero-subtitle-dark' : 'hero-subtitle-light'} />
                  </div>
                </div>
              </div>

              {/* Bio Paragraphs */}
              <div className="mt-4 space-y-3 max-w-prose mx-auto lg:mx-0">
                <p className="text-sm md:text-base leading-relaxed text-left" style={{ color: themeColors.text.secondary }}>
                  Hello, I'm Aymardayanti Pagril, a 4th-semester Business Administration student at Universitas Brawijaya. I have a huge passion for business development, digital marketing, as well as organization and event management.
                </p>
                <p className="text-sm md:text-base leading-relaxed hidden sm:block text-left" style={{ color: themeColors.text.secondary }}>
                  Throughout my college years, I have been actively involved in various organizations, committees, and volunteer activities that help me develop communication, leadership, teamwork, and project management skills.
                </p>
              </div>

              {/* ── Contact Info Cards 2×2 ── */}
              <div className="mt-6 grid grid-cols-2 gap-3" aria-label="Contact information">

                {/* Email */}
                <a
                  href={`mailto:${socialLinks.email}`}
                  aria-label={`Send email to ${socialLinks.email}`}
                  className="flex flex-col sm:flex-row w-full items-center sm:items-start gap-3 rounded-xl px-4 py-3 min-h-[72px] transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                  style={{
                    backgroundColor: isDarkMode ? withAlpha(themeColors.colors.dark[800], 0.7) : withAlpha(themeColors.colors.pink[50], 0.95),
                    border: `1px solid ${isDarkMode ? withAlpha(themeColors.colors.pink[500], 0.25) : withAlpha(themeColors.colors.pink[200], 0.9)}`,
                    backdropFilter: 'blur(10px)',
                    boxShadow: isDarkMode ? `0 2px 12px ${withAlpha(themeColors.colors.dark[950], 0.5)}` : `0 2px 8px ${withAlpha(themeColors.colors.pink[200], 0.4)}`,
                  }}
                >
                  <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-lg mx-auto sm:mx-0"
                    style={{ backgroundColor: isDarkMode ? withAlpha(themeColors.colors.pink[500], 0.18) : withAlpha(themeColors.colors.pink[400], 0.15) }}
                  >
                    <Mail className="w-[18px] h-[18px]" style={{ color: themeColors.colors.pink[500] }} />
                  </span>
                  <div className="min-w-0 text-center sm:text-left">
                    <p className="text-[10px] font-semibold uppercase tracking-widest mb-0.5" style={{ color: themeColors.text.tertiary }}>Email</p>
                    <p className="text-xs font-bold truncate" style={{ color: themeColors.text.primary }}>{socialLinks.display.email || 'aymardayanti@gmail.com'}</p>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/6287700721012"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat via WhatsApp"
                  className="flex flex-col sm:flex-row w-full items-center sm:items-start gap-3 rounded-xl px-4 py-3 min-h-[72px] transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                  style={{
                    backgroundColor: isDarkMode ? withAlpha(themeColors.colors.dark[800], 0.7) : withAlpha(themeColors.colors.pink[50], 0.95),
                    border: `1px solid ${isDarkMode ? withAlpha(themeColors.colors.pink[500], 0.25) : withAlpha(themeColors.colors.pink[200], 0.9)}`,
                    backdropFilter: 'blur(10px)',
                    boxShadow: isDarkMode ? `0 2px 12px ${withAlpha(themeColors.colors.dark[950], 0.5)}` : `0 2px 8px ${withAlpha(themeColors.colors.pink[200], 0.4)}`,
                  }}
                >
                  <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-lg mx-auto sm:mx-0"
                    style={{ backgroundColor: isDarkMode ? withAlpha(themeColors.colors.pink[500], 0.18) : withAlpha(themeColors.colors.pink[400], 0.15) }}
                  >
                    <Phone className="w-[18px] h-[18px]" style={{ color: themeColors.colors.pink[500] }} />
                  </span>
                  <div className="min-w-0 text-center sm:text-left">
                    <p className="text-[10px] font-semibold uppercase tracking-widest mb-0.5" style={{ color: themeColors.text.tertiary }}>WhatsApp</p>
                    <p className="text-xs font-bold truncate" style={{ color: themeColors.text.primary }}>+62 877-0072-1012</p>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Connect on LinkedIn"
                  className="flex flex-col sm:flex-row w-full items-center sm:items-start gap-3 rounded-xl px-4 py-3 min-h-[72px] transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                  style={{
                    backgroundColor: isDarkMode ? withAlpha(themeColors.colors.dark[800], 0.7) : withAlpha(themeColors.colors.pink[50], 0.95),
                    border: `1px solid ${isDarkMode ? withAlpha(themeColors.colors.pink[500], 0.25) : withAlpha(themeColors.colors.pink[200], 0.9)}`,
                    backdropFilter: 'blur(10px)',
                    boxShadow: isDarkMode ? `0 2px 12px ${withAlpha(themeColors.colors.dark[950], 0.5)}` : `0 2px 8px ${withAlpha(themeColors.colors.pink[200], 0.4)}`,
                  }}
                >
                  <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-lg mx-auto sm:mx-0"
                    style={{ backgroundColor: isDarkMode ? withAlpha(themeColors.colors.pink[500], 0.18) : withAlpha(themeColors.colors.pink[400], 0.15) }}
                  >
                    <Linkedin className="w-[18px] h-[18px]" style={{ color: themeColors.colors.pink[500] }} />
                  </span>
                  <div className="min-w-0 text-center sm:text-left">
                    <p className="text-[10px] font-semibold uppercase tracking-widest mb-0.5" style={{ color: themeColors.text.tertiary }}>LinkedIn</p>
                    <p className="text-xs font-bold truncate" style={{ color: themeColors.text.primary }}>Connect</p>
                  </div>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/aymardyanti"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow on Instagram @aymardyanti"
                  className="flex flex-col sm:flex-row w-full items-center sm:items-start gap-3 rounded-xl px-4 py-3 min-h-[72px] transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                  style={{
                    backgroundColor: isDarkMode ? withAlpha(themeColors.colors.dark[800], 0.7) : withAlpha(themeColors.colors.pink[50], 0.95),
                    border: `1px solid ${isDarkMode ? withAlpha(themeColors.colors.pink[500], 0.25) : withAlpha(themeColors.colors.pink[200], 0.9)}`,
                    backdropFilter: 'blur(10px)',
                    boxShadow: isDarkMode ? `0 2px 12px ${withAlpha(themeColors.colors.dark[950], 0.5)}` : `0 2px 8px ${withAlpha(themeColors.colors.pink[200], 0.4)}`,
                  }}
                >
                  <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-lg mx-auto sm:mx-0"
                    style={{ backgroundColor: isDarkMode ? withAlpha(themeColors.colors.pink[500], 0.18) : withAlpha(themeColors.colors.pink[400], 0.15) }}
                  >
                    <Instagram className="w-[18px] h-[18px]" style={{ color: themeColors.colors.pink[500] }} />
                  </span>
                  <div className="min-w-0 text-center sm:text-left">
                    <p className="text-[10px] font-semibold uppercase tracking-widest mb-0.5" style={{ color: themeColors.text.tertiary }}>Instagram</p>
                    <p className="text-xs font-bold truncate" style={{ color: themeColors.text.primary }}>@aymardyanti</p>
                  </div>
                </a>

              </div>
              {/* ── End Contact Cards ── */}

              {/* ── CTA Buttons ── */}
              <div className="mt-4 sm:mt-0 flex flex-col sm:flex-row items-center gap-3 w-full justify-center sm:justify-start">
                {/* Resume — highly highlighted */}
                <button
                  id="resume-btn"
                  onClick={() => window.open('/resume.pdf', '_blank')}
                  className="relative overflow-hidden flex w-full sm:w-auto justify-center items-center gap-3 px-8 py-4 sm:px-10 sm:py-4 rounded-2xl font-bold text-base md:text-lg transition-transform duration-200 transform hover:scale-105 active:scale-95"
                  style={{
                    background: `linear-gradient(135deg, ${themeColors.colors.pink[500]}, #7c3aed, ${themeColors.colors.pink[400]})`,
                    backgroundSize: '200% 200%',
                    color: '#ffffff',
                    boxShadow: `0 10px 30px ${withAlpha(themeColors.colors.pink[500], 0.24)}`,
                    border: 'none',
                    letterSpacing: '0.03em',
                    animation: 'gradientShift 4s ease infinite',
                    zIndex: 2,
                  }}
                >
                  {/* Shimmer overlay */}
                  <span
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.18) 50%, transparent 60%)',
                      animation: 'shimmer 2.5s infinite',
                    }}
                  />
                  <span style={{ fontSize: '18px' }}>📄</span>
                  <span style={{ paddingLeft: 6, paddingRight: 6 }}>View Resume</span>
                  <span style={{ fontSize: '14px', opacity: 0.95 }}>↗</span>
                </button>

                {/* ASCII art (decorative, desktop only) */}
                <div className="hidden lg:flex ml-auto" style={{ fontSize: '0.7rem', lineHeight: '1.15', fontFamily: 'monospace', color: isDarkMode ? themeColors.primary : themeColors.colors.pink[500], opacity: 0.75 }}>
                  <pre>{asciiText}</pre>
                </div>
              </div>

            </div>
            {/* ── End Right Column ── */}

          </div>
        </div>
      </div>

      {/* Profile Modal */}
      {showProfileModal && (
        <div
          className={`fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 ${isClosing ? 'animate-fadeOut' : 'animate-fadeIn'}`}
          style={{
            backgroundColor: themeColors.background.overlay,
            // Force stacking context back to root via high z-index
          }}
          onClick={() => {
            setIsClosing(true);
            setTimeout(() => {
              setShowProfileModal(false);
              setIsClosing(false);
            }, 300);
          }}
          onKeyDown={handleKeyDown}
          tabIndex={-1}
        >
          {/* Modal card — stops click propagation so it doesn't close when clicking inside */}
          <div
            className={`relative w-full flex flex-col ${isClosing ? 'animate-scaleOut' : 'animate-scaleIn'}`}
            style={{ maxWidth: '380px' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button — positioned outside the carousel box, at top-right of card */}
            <button
              className="absolute -top-3 -right-3 z-10 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110 hover:rotate-90"
              style={{
                backgroundColor: themeColors.colors.pink[500],
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = themeColors.colors.pink[600]}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = themeColors.colors.pink[500]}
              aria-label="Close photo gallery"
              onClick={(e) => {
                e.stopPropagation();
                setIsClosing(true);
                setTimeout(() => {
                  setShowProfileModal(false);
                  setIsClosing(false);
                }, 300);
              }}
            >
              ✕
            </button>

            {/* Carousel Image Box — aspect-ratio based, objectFit contain to avoid any cropping */}
            <div
              className="relative w-full rounded-2xl overflow-hidden shadow-2xl"
              style={{
                aspectRatio: '3 / 4',
                maxHeight: '70vh',
                background: '#111827',
              }}
              role="region"
              aria-label="Profile photo carousel"
              aria-live="polite"
              tabIndex={0}
              onKeyDown={handleKeyDown}
            >
              {/* Images — contain so nothing is cropped */}
              {profileImages.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Photo ${index + 1} of ${profileImages.length}`}
                  className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  style={{ objectFit: 'contain', objectPosition: 'center' }}
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
              ))}

              {/* Counter badge */}
              <div className="absolute top-3 left-3 bg-black/50 text-white text-xs px-2.5 py-1 rounded-full backdrop-blur-sm">
                {currentImageIndex + 1} / {profileImages.length}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={goToPrevious}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-pink-300"
                style={{
                  backgroundColor: withAlpha('#000000', 0.45),
                  color: '#ffffff',
                  backdropFilter: 'blur(4px)',
                }}
                aria-label="Previous image"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <button
                onClick={goToNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-pink-300"
                style={{
                  backgroundColor: withAlpha('#000000', 0.45),
                  color: '#ffffff',
                  backdropFilter: 'blur(4px)',
                }}
                aria-label="Next image"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            {/* Dot Indicators */}
            <div className="flex justify-center items-center gap-1.5 mt-4">
              {profileImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className="transition-all focus:outline-none"
                  style={{
                    width: index === currentImageIndex ? '28px' : '8px',
                    height: '8px',
                    borderRadius: '9999px',
                    backgroundColor: index === currentImageIndex
                      ? themeColors.colors.pink[300]
                      : withAlpha(themeColors.colors.pink[300], 0.3),
                    transition: 'all 0.3s ease',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                  }}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;