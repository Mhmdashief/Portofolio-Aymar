import { useState } from 'react';
import { useDarkMode } from '../../contexts/DarkModeContext';
import { useThemeColors } from '../../hooks/useThemeColors';
import { Eye, FileText, ExternalLink } from 'lucide-react';

// Import JPEG certificates directly via ES modules
import sertifikat1 from '../../assets/sertficate/Sertifikat 1.jpeg';
import sertifikat4 from '../../assets/sertficate/sertifikat 4.jpeg';
import sertifikat5 from '../../assets/sertficate/sertifikat 5.jpeg';
import sertifikat6 from '../../assets/sertficate/sertifikat 6.jpeg';

// PDFs are served from /public so we reference them as static URLs
const PDF_SERTIFIKAT2 = '/sertifikat2.pdf';
const PDF_SERTIFIKAT3 = '/sertifikat3.pdf';

type CertificateType = {
  id: string;
  title: string;
  issuer: string;
  type: 'image' | 'pdf';
  file: string;
};

const Certifications = () => {
  const { isDarkMode } = useDarkMode();
  const themeColors = useThemeColors();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedTitle, setSelectedTitle] = useState<string | null>(null);

  const certificates: CertificateType[] = [
    {
      id: 'cert-1',
      title: 'Sertifikat 1',
      issuer: 'Malang, East Java',
      file: sertifikat1,
      type: 'image'
    },
    {
      id: 'cert-2',
      title: 'Sertifikat 2',
      issuer: 'Malang, East Java',
      file: PDF_SERTIFIKAT2,
      type: 'pdf'
    },
    {
      id: 'cert-3',
      title: 'Sertifikat 3',
      issuer: 'Malang, East Java',
      file: PDF_SERTIFIKAT3,
      type: 'pdf'
    },
    {
      id: 'cert-4',
      title: 'Sertifikat 4',
      issuer: 'Malang, East Java',
      file: sertifikat4,
      type: 'image'
    },
    {
      id: 'cert-5',
      title: 'Sertifikat 5',
      issuer: 'Malang, East Java',
      file: sertifikat5,
      type: 'image'
    },
    {
      id: 'cert-6',
      title: 'Sertifikat 6',
      issuer: 'Malang, East Java',
      file: sertifikat6,
      type: 'image'
    }
  ];

  const openPreview = (file: string, title: string) => {
    setSelectedImage(file);
    setSelectedTitle(title);
  };

  const closePreview = () => {
    setSelectedImage(null);
    setSelectedTitle(null);
  };

  return (
    <section
      id="certifications"
      className="py-20 relative overflow-hidden"
      style={{
        background: themeColors.background.sections?.certifications || themeColors.background.gradient,
        transition: 'background 0.3s ease-in-out'
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
          zIndex: 1
        }}
      />

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <header className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{
              fontFamily: "'DK Crayonista', cursive, sans-serif",
              color: isDarkMode ? themeColors.colors.white : themeColors.colors.pink[600]
            }}
          >
            My Certifications
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: themeColors.text.secondary }}>
            A gallery of verified licenses, credentials, and academic/professional certificates obtained.
          </p>
        </header>

        {/* Certificates Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert) => {
            const isImage = cert.type === 'image';

            return (
              <article
                key={cert.id}
                className="rounded-2xl shadow-lg border hover:-translate-y-1.5 transition-all duration-300 relative group flex flex-col overflow-hidden"
                style={{
                  backgroundColor: themeColors.card.background,
                  borderColor: themeColors.colors.pink[100],
                }}
              >
                {/* Washi tape decoration */}
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-16 h-4 bg-pink-100/40 border-l border-r border-dashed border-pink-200/50 rotate-[2deg] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                {/* Thumbnail */}
                <div
                  className="relative overflow-hidden flex items-center justify-center bg-gray-100 dark:bg-gray-800"
                  style={{ aspectRatio: '4/3' }}
                >
                  {isImage ? (
                    <>
                      <img
                        src={cert.file}
                        alt={cert.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      {/* Hover overlay with eye icon */}
                      <div
                        onClick={() => openPreview(cert.file, cert.title)}
                        className="absolute inset-0 bg-pink-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer"
                      >
                        <div className="p-3 bg-white rounded-full text-pink-600 shadow-md transform scale-75 group-hover:scale-100 transition-transform duration-300">
                          <Eye size={22} />
                        </div>
                      </div>
                    </>
                  ) : (
                    /* PDF placeholder card */
                    <div className="w-full h-full p-6 flex flex-col items-center justify-center text-center bg-gradient-to-br from-pink-50 to-rose-50/20 dark:from-gray-800 dark:to-gray-900 relative">
                      <div className="absolute top-3 right-3 text-pink-500 font-bold text-xs border border-pink-500/30 px-2 py-0.5 rounded">
                        PDF
                      </div>
                      <div className="p-4 bg-pink-100/60 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 rounded-full mb-3 shadow-md">
                        <FileText size={36} />
                      </div>
                      <p className="text-xs font-bold text-gray-500 tracking-wider uppercase">Official Certificate</p>
                      <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">Click below to open</p>
                    </div>
                  )}
                </div>

                {/* Info + Actions */}
                <div className="p-5 flex flex-col flex-grow">
                  <h4
                    className="text-base font-bold mb-1 leading-snug"
                    style={{ color: themeColors.text.primary }}
                  >
                    {cert.title}
                  </h4>
                  <p className="text-xs font-medium mb-4 flex items-center gap-1" style={{ color: themeColors.colors.pink[500] }}>
                    📍 {cert.issuer}
                  </p>

                  <div className="mt-auto">
                    {isImage ? (
                      <button
                        onClick={() => openPreview(cert.file, cert.title)}
                        className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-semibold transition-all duration-300 hover:brightness-95"
                        style={{
                          backgroundColor: isDarkMode ? themeColors.colors.pink[900] + '55' : themeColors.colors.pink[50],
                          color: themeColors.colors.pink[600],
                          border: `1.5px solid ${themeColors.colors.pink[200]}`
                        }}
                      >
                        <Eye size={16} />
                        Preview Certificate
                      </button>
                    ) : (
                      <a
                        href={cert.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-semibold transition-all duration-300 hover:brightness-110"
                        style={{
                          backgroundColor: themeColors.colors.pink[500],
                          color: '#ffffff'
                        }}
                      >
                        <ExternalLink size={16} />
                        Open PDF
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal for image certificates */}
      {selectedImage && (
        <div
          onClick={closePreview}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out"
          style={{ animation: 'fadeIn 0.2s ease' }}
        >
          <div
            className="relative max-w-4xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt={selectedTitle || 'Certificate preview'}
              className="max-w-full max-h-[78vh] object-contain rounded-xl shadow-2xl border-4 border-white/10"
            />
            {selectedTitle && (
              <p className="text-white font-medium text-center mt-4 px-6 py-2 bg-black/60 rounded-full text-sm">
                {selectedTitle}
              </p>
            )}
            <button
              onClick={closePreview}
              className="absolute -top-12 right-0 text-white/80 hover:text-pink-400 font-semibold text-sm py-2 px-4 bg-white/10 rounded-full transition-colors"
            >
              ✕ Close
            </button>
          </div>
        </div>
      )}

      {/* Bottom gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: '100px',
          background: isDarkMode
            ? `linear-gradient(180deg, transparent 0%, ${themeColors.background.gradientEnd} 100%)`
            : `linear-gradient(180deg, transparent 0%, ${themeColors.colors.pink[25]} 100%)`,
          zIndex: 1
        }}
      />
    </section>
  );
};

export default Certifications;