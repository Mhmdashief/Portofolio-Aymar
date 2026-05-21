import React from 'react';
import { Mail, Github, Linkedin, Phone, Instagram } from 'lucide-react';
import { useDarkMode } from '../contexts/DarkModeContext';
import { useThemeColors } from '../hooks/useThemeColors';
import Aurora from '../components/ui/aurora';
import BackButton from '../components/BackButton';
import { socialLinks } from '../config/socialLinks';

const Contact = () => {
  const { isDarkMode } = useDarkMode();
  const themeColors = useThemeColors();

  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main aria-label="Contact page" className="min-h-screen py-20 transition-colors duration-300 relative overflow-hidden" style={{ backgroundColor: themeColors.background.primary }}>
      {/* Aurora Background */}
      <div className="fixed inset-0 z-0" style={{ opacity: isDarkMode ? 1 : 0.3 }}>
        <Aurora
          colorStops={isDarkMode ? [themeColors.primary, themeColors.colors.special.aurora.dark, themeColors.secondary] : [themeColors.colors.special.aurora.light[1], themeColors.colors.special.aurora.light[2], themeColors.colors.special.aurora.light[3]]}
          blend={isDarkMode ? 0.3 : 0.25}
          amplitude={isDarkMode ? 0.8 : 0.6}
          speed={0.3}
        />
      </div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        {/* Back Button */}
        <BackButton
          to="/"
          scrollToId=""
          label="Back to Home"
          ariaLabel="Navigate back to homepage"
        />

        {/* Contact Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4" style={{ color: isDarkMode ? themeColors.colors.pink[300] : themeColors.colors.pink[600] }}>Let's Connect!</h1>
          <p className="text-lg" style={{ color: themeColors.text.secondary }}>
          </p>
        </header>

        {/* Contact Cards */}
        <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto" aria-label="Contact methods">

          {/* Email Card */}
          <article className="rounded-lg shadow-lg p-6 text-center hover:scale-105 transition-transform duration-300 flex flex-col justify-between" style={{ backgroundColor: themeColors.card.background }} aria-labelledby="email-heading">
            <div>
              <div className="flex justify-center mb-4">
                <Mail className="h-12 w-12" style={{ color: themeColors.colors.pink[500] }} aria-hidden="true" />
              </div>
              <h3 id="email-heading" className="text-xl font-semibold mb-2" style={{ color: themeColors.text.primary }}>Email</h3>
            </div>
            <div>
              <a
                href={`mailto:${socialLinks.email}`}
                aria-label={`Send email to ${socialLinks.email}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors hover:opacity-80 w-full justify-center"
                style={{
                  backgroundColor: themeColors.interactive.primary,
                  color: themeColors.text.pink
                }}
              >
                Send Email
              </a>
              <p className="text-xs mt-3 break-all" style={{ color: themeColors.text.tertiary }}>{socialLinks.display.email}</p>
            </div>
          </article>

          {/* WhatsApp & Phone Card */}
          <article className="rounded-lg shadow-lg p-6 text-center hover:scale-105 transition-transform duration-300 flex flex-col justify-between" style={{ backgroundColor: themeColors.card.background }} aria-labelledby="phone-heading">
            <div>
              <div className="flex justify-center mb-4">
                <Phone className="h-12 w-12" style={{ color: themeColors.colors.pink[500] }} aria-hidden="true" />
              </div>
              <h3 id="phone-heading" className="text-xl font-semibold mb-2" style={{ color: themeColors.text.primary }}>WhatsApp</h3>
            </div>
            <div>
              <a
                href="https://wa.me/6287700721012"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat via WhatsApp on +62 877-0072-1012"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors hover:opacity-80 w-full justify-center"
                style={{
                  backgroundColor: themeColors.interactive.primary,
                  color: themeColors.text.pink
                }}
              >
                Chat / Call
              </a>
              <p className="text-xs mt-3" style={{ color: themeColors.text.tertiary }}>+62 877-0072-1012</p>
            </div>
          </article>

          {/* LinkedIn Card */}
          <article className="rounded-lg shadow-lg p-6 text-center hover:scale-105 transition-transform duration-300 flex flex-col justify-between" style={{ backgroundColor: themeColors.card.background }} aria-labelledby="linkedin-heading">
            <div>
              <div className="flex justify-center mb-4">
                <Linkedin className="h-12 w-12" style={{ color: themeColors.colors.pink[500] }} aria-hidden="true" />
              </div>
              <h3 id="linkedin-heading" className="text-xl font-semibold mb-2" style={{ color: themeColors.text.primary }}>LinkedIn</h3>
            </div>
            <div>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Connect on LinkedIn at ${socialLinks.display.linkedin} (opens in new tab)`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors hover:opacity-80 w-full justify-center"
                style={{
                  backgroundColor: themeColors.interactive.primary,
                  color: themeColors.text.pink
                }}
              >
                Connect
              </a>
              <p className="text-xs mt-3 break-all" style={{ color: themeColors.text.tertiary }}>{socialLinks.display.linkedin}</p>
            </div>
          </article>

          {/* Instagram Card */}
          <article className="rounded-lg shadow-lg p-6 text-center hover:scale-105 transition-transform duration-300 flex flex-col justify-between" style={{ backgroundColor: themeColors.card.background }} aria-labelledby="instagram-heading">
            <div>
              <div className="flex justify-center mb-4">
                <Instagram className="h-12 w-12" style={{ color: themeColors.colors.pink[500] }} aria-hidden="true" />
              </div>
              <h3 id="instagram-heading" className="text-xl font-semibold mb-2" style={{ color: themeColors.text.primary }}>Instagram</h3>
            </div>
            <div>
              <a
                href="https://www.instagram.com/aymardyanti?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect on Instagram @aymardyanti (opens in new tab)"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors hover:opacity-80 w-full justify-center"
                style={{
                  backgroundColor: themeColors.interactive.primary,
                  color: themeColors.text.pink
                }}
              >
                Follow Me
              </a>
              <p className="text-xs mt-3 break-all" style={{ color: themeColors.text.tertiary }}>@aymardyanti</p>
            </div>
          </article>

        </section>
      </div>
    </main>
  );
};

export default Contact;