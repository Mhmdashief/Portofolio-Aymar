import { useState } from 'react';
import { 
  Calendar, 
  MapPin, 
  Briefcase, 
  Users, 
  Mic, 
  FileText, 
  Presentation, 
  Radio, 
  Heart, 
  Award
} from 'lucide-react';
import { useDarkMode } from '../../contexts/DarkModeContext';
import { useThemeColors, withAlpha } from '../../hooks/useThemeColors';

const Experience = () => {
  const { isDarkMode } = useDarkMode();
  const themeColors = useThemeColors();
  const [activeTab, setActiveTab] = useState<'main' | 'committee'>('main');
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const mainExperiences = [
    {
      title: "Program Participant",
      company: "Relawan Gesit Salam Setara",
      location: "Malang, East Java",
      period: "02/2026 – Present",
      icon: Heart,
      color: "from-pink-400 to-rose-500",
      description: [
        "Actively participated in volunteer programs focused on social awareness, community engagement, and inclusive initiatives.",
        "Contributed ideas and insights during program activities to support collective learning and effective community impact.",
        "Developed empathy, leadership awareness, and social responsibility through direct involvement in community-based programs."
      ]
    },
    {
      title: "Faculty Representative Participant",
      company: "Outbound Student Program",
      location: "Malaysia",
      period: "11/2025 – 11/2025",
      icon: Award,
      color: "from-purple-400 to-indigo-500",
      description: [
        "Represented the faculty as an active participant in an international outbound student program in Malaysia.",
        "Participated in academic, cultural, and collaborative activities aimed at enhancing cross-cultural communication and global perspective.",
        "Actively engaged in discussions, group projects, and program sessions with international participants."
      ]
    },
    {
      title: "Event and Program Staff",
      company: "Narasi Jawa Timur Community",
      location: "Surabaya, East Java",
      period: "02/2025 – 12/2025",
      icon: Briefcase,
      color: "from-teal-400 to-emerald-500",
      description: [
        "Actively involved in internal planning communications to support the preparation and implementation of community programs.",
        "Actively participated in mentoring classes and learning sessions organized by Narasi events.",
        "Collaborated in supporting program implementation and information dissemination on social media."
      ]
    },
    {
      title: "Vice Chairman",
      company: "Business Administration Student Association Vocational Faculty UB",
      location: "Malang, East Java",
      period: "02/2025 – 12/2025",
      icon: Users,
      color: "from-blue-400 to-cyan-500",
      description: [
        "Assisted in leading organizational strategy, program planning, and execution of student activities.",
        "Coordinated cross divisional teams to ensure alignment between organizational goals and program implementation.",
        "Supported leadership decision making and monitored the effectiveness of organizational programs."
      ]
    },
    {
      title: "Program Participant",
      company: "Funsioner – Fiksioner Indonesia",
      location: "Jakarta",
      period: "01/2025 – 01/2025",
      icon: Presentation,
      color: "from-amber-400 to-orange-500",
      description: [
        "Participated in community-based programs focused on organizational development, creativity, and collaborative work.",
        "Engaged in interactive sessions, discussions, and activities designed to enhance teamwork, communication, and problem-solving skills.",
        "Actively contributed ideas and feedback during group activities and program evaluations."
      ]
    },
    {
      title: "Internship Staff",
      company: "Student Executive Board (BEM) Vocational Faculty UB",
      location: "Malang, East Java",
      period: "10/2024 – 12/2024",
      icon: FileText,
      color: "from-fuchsia-400 to-pink-500",
      description: [
        "Actively contributed to the planning and execution of ministry work programs and faculty level activities.",
        "Played an active role in organizing and coordinating internal programs and organizational initiatives.",
        "Actively supported and assisted the implementation of work programs across other ministries within the student executive board."
      ]
    }
  ];

  const committeeExperiences = [
    {
      role: "Social Media Content Planner",
      event: "Mendjahit.id",
      location: "Malang, East Java",
      period: "02/2025 – 06/2025",
      icon: FileText,
      color: "from-pink-400 to-rose-400"
    },
    {
      role: "Chief Executive",
      event: "AETURNA",
      location: "Malang, East Java",
      period: "09/2025 – 12/2025",
      icon: Award,
      color: "from-purple-400 to-indigo-400"
    },
    {
      role: "Steering Committee",
      event: "Samba ADBIS (Departement Orientation)",
      location: "Malang, East Java",
      period: "08/2025 – 08/2025",
      icon: Users,
      color: "from-teal-400 to-emerald-400"
    },
    {
      role: "Master of Ceremony",
      event: "First Gathering Brawijaya Star",
      location: "Malang, East Java",
      period: "08/2025 – 08/2025",
      icon: Mic,
      color: "from-blue-400 to-cyan-400"
    },
    {
      role: "Moderator",
      event: "PRIMA Talkshow",
      location: "Malang, East Java",
      period: "06/2025 – 08/2025",
      icon: Mic,
      color: "from-amber-400 to-orange-400"
    },
    {
      role: "Event Division Staff",
      event: "Raja Brawijaya (Brawijaya University Orientation)",
      location: "Malang, East Java",
      period: "06/2025 – 08/2025",
      icon: Presentation,
      color: "from-fuchsia-400 to-pink-400"
    },
    {
      role: "Chief Executive",
      event: "Peluk Asa Volunteer",
      location: "Malang, East Java",
      period: "05/2025 – 05/2025",
      icon: Heart,
      color: "from-rose-400 to-pink-400"
    },
    {
      role: "Moderator",
      event: "BRODI Talkshow",
      location: "Malang, East Java",
      period: "11/2024 – 11/2024",
      icon: Mic,
      color: "from-indigo-400 to-purple-400"
    },
    {
      role: "Competition Division Staff",
      event: "Creanomic",
      location: "Malang, East Java",
      period: "10/2024 – 11/2024",
      icon: Presentation,
      color: "from-teal-400 to-cyan-400"
    },
    {
      role: "Master of Ceremony",
      event: "Vocational Business Education Seminar",
      location: "Malang, East Java",
      period: "10/2024 – 10/2024",
      icon: Mic,
      color: "from-orange-400 to-amber-400"
    },
    {
      role: "Host Podcast",
      event: "BRODI Podcast",
      location: "Malang, East Java",
      period: "10/2024 – 10/2024",
      icon: Radio,
      color: "from-pink-400 to-purple-400"
    }
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden" style={{
      background: themeColors.background.sections?.experience || themeColors.background.gradient,
      transition: 'background 0.3s ease-in-out'
    }}>
      {/* Subtle top edge gradient overlay */}
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

      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        <header className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ 
              fontFamily: "'DK Crayonista', cursive, sans-serif",
              color: isDarkMode ? themeColors.colors.white : themeColors.colors.pink[600] 
            }}
          >
            My Journey & Experience
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: themeColors.text.secondary }}>
            A comprehensive record of my professional internships, organizational leadership, and event committees.
          </p>
        </header>

        {/* Custom Tab Switcher */}
        <div className="flex justify-center gap-4 mb-16 flex-wrap">
          <button
            onClick={() => setActiveTab('main')}
            className="px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            style={{
              backgroundColor: activeTab === 'main' 
                ? themeColors.colors.pink[500] 
                : isDarkMode ? themeColors.colors.dark[800] : themeColors.colors.white,
              color: activeTab === 'main' 
                ? themeColors.colors.white 
                : isDarkMode ? themeColors.colors.pink[200] : themeColors.colors.pink[700],
              border: `2px solid ${activeTab === 'main' ? themeColors.colors.pink[500] : themeColors.colors.pink[200]}`,
              boxShadow: activeTab === 'main' ? '0 4px 14px rgba(236, 72, 153, 0.4)' : 'none'
            }}
          >
            <span>💼</span> Professional & Organization
          </button>
          <button
            onClick={() => setActiveTab('committee')}
            className="px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            style={{
              backgroundColor: activeTab === 'committee' 
                ? themeColors.colors.pink[500] 
                : isDarkMode ? themeColors.colors.dark[800] : themeColors.colors.white,
              color: activeTab === 'committee' 
                ? themeColors.colors.white 
                : isDarkMode ? themeColors.colors.pink[200] : themeColors.colors.pink[700],
              border: `2px solid ${activeTab === 'committee' ? themeColors.colors.pink[500] : themeColors.colors.pink[200]}`,
              boxShadow: activeTab === 'committee' ? '0 4px 14px rgba(236, 72, 153, 0.4)' : 'none'
            }}
          >
            <span>🎗️</span> Committee Experience
          </button>
        </div>

        {/* Tab Contents */}
        {activeTab === 'main' ? (
          /* Main Experiences */
          <div className="space-y-6 max-w-4xl mx-auto">
            {mainExperiences.map((exp, index) => {
              const Icon = exp.icon;
              const isHovered = hoveredCard === index;
              return (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="p-6 rounded-2xl shadow-lg border transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group"
                  style={{
                    backgroundColor: themeColors.card.background,
                    borderColor: isHovered ? themeColors.colors.pink[300] : themeColors.colors.pink[100],
                    boxShadow: isHovered 
                      ? `0 10px 25px -5px ${withAlpha(themeColors.colors.pink[500], 0.1)}` 
                      : '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
                  }}
                >
                  {/* Scrapbook Pin decoration */}
                  <div className="absolute -top-1 right-12 w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-xl">📌</span>
                  </div>

                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 pb-4 border-b border-gray-100 dark:border-gray-700">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${exp.color} text-white shadow-md`}>
                        <Icon size={24} />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold" style={{ color: themeColors.text.primary }}>
                          {exp.company}
                        </h4>
                        <p className="text-md font-semibold mt-0.5" style={{ color: themeColors.colors.pink[500] }}>
                          {exp.title}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm animate-fadeIn" style={{ color: themeColors.text.secondary }}>
                      <div className="flex items-center gap-1">
                        <Calendar size={16} className="text-pink-400" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={16} className="text-pink-400" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {exp.description.map((bullet, i) => (
                      <li key={i} className="flex items-start text-sm md:text-base leading-relaxed" style={{ color: themeColors.text.secondary }}>
                        <span className="mr-2 text-pink-400 mt-1.5">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        ) : (
          /* Committee Experiences */
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {committeeExperiences.map((comm, index) => {
              const Icon = comm.icon;
              return (
                <div
                  key={index}
                  className="p-5 rounded-2xl shadow-md border hover:scale-105 transition-all duration-300 relative group flex flex-col justify-between"
                  style={{
                    backgroundColor: themeColors.card.background,
                    borderColor: themeColors.colors.pink[100],
                  }}
                >
                  {/* Decorative Washi Tape top-center */}
                  <div 
                    className="absolute -top-1 left-1/2 -translate-x-1/2 w-12 h-3.5 bg-pink-100/40 border-l border-r border-dashed border-pink-200/50 rotate-[-2deg] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />

                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div className={`p-2.5 rounded-lg bg-gradient-to-br ${comm.color} text-white shadow-sm`}>
                        <Icon size={20} />
                      </div>
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full" style={{
                        backgroundColor: isDarkMode ? themeColors.colors.dark[700] : themeColors.colors.pink[50],
                        color: themeColors.colors.pink[600]
                      }}>
                        {comm.period}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold mb-1 leading-snug" style={{ color: themeColors.text.primary }}>
                      {comm.event}
                    </h4>
                    <p className="text-sm font-semibold mb-3" style={{ color: themeColors.colors.pink[500] }}>
                      {comm.role}
                    </p>
                  </div>

                  <div className="flex items-center gap-1 mt-2 pt-2 border-t border-gray-50 dark:border-gray-800 text-xs" style={{ color: themeColors.text.tertiary }}>
                    <MapPin size={12} className="text-pink-300" />
                    <span>{comm.location}</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;