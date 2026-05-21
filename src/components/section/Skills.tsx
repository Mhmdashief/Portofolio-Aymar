import { useState } from "react";
import { useDarkMode } from "../../contexts/DarkModeContext";
import { useThemeColors, withAlpha } from "../../hooks/useThemeColors";
import { 
  Palette, 
  TrendingUp, 
  FileText, 
  Wrench, 
  BarChart, 
  Brain, 
  MessageSquare, 
  Users, 
  RefreshCw, 
  Layers
} from "lucide-react";

const Skills = () => {
  const { isDarkMode } = useDarkMode();
  const themeColors = useThemeColors();
  const [activeCategory, setActiveCategory] = useState<'all' | 'technical' | 'soft'>('all');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const technicalSkills = [
    {
      name: "Graphic Design",
      tools: ["Canva", "Pixelab"],
      description: "Creating visually stunning marketing collateral, social media assets, and presentation decks.",
      icon: Palette,
      gradient: "from-pink-400 to-rose-500",
      level: 90
    },
    {
      name: "Social Media Strategy & Analytics",
      tools: ["Algorithm Analysis", "Metrics Tracking", "Growth Strategy"],
      description: "Optimizing platform growth, understanding trends, and translating analytics into action.",
      icon: TrendingUp,
      gradient: "from-purple-400 to-indigo-500",
      level: 85
    },
    {
      name: "Content Planning & Copywriting",
      tools: ["Content Calendars", "Storyboarding", "Creative Writing"],
      description: "Drafting high-conversion copy and planning strategic, cohesive content schedules.",
      icon: FileText,
      gradient: "from-amber-400 to-orange-500",
      level: 88
    },
    {
      name: "Marketing Tools",
      tools: ["Meta Ads", "Google Analytics", "SEO/SEM Basics"],
      description: "Leveraging digital marketing suites to launch campaigns and measure audience reach.",
      icon: Wrench,
      gradient: "from-teal-400 to-emerald-500",
      level: 80
    },
    {
      name: "BMC & SWOT Analysis",
      tools: ["Business Model Canvas", "SWOT Evaluations", "Strategic Planning"],
      description: "Analyzing business potential, mapping structures, and evaluating strategic strengths.",
      icon: BarChart,
      gradient: "from-blue-400 to-cyan-500",
      level: 85
    }
  ];

  const softSkills = [
    {
      name: "Data-Driven Problem Solving",
      tools: ["Analytical Thinking", "Insights Evaluation"],
      description: "Evaluating options using factual data and structured analysis to solve complex business cases.",
      icon: Brain,
      gradient: "from-fuchsia-400 to-pink-500",
      level: 88
    },
    {
      name: "Strategic Communication & Pitching",
      tools: ["Public Speaking", "Idea Pitching", "Persuasion"],
      description: "Presenting business ideas, pitches, and organizational campaigns with high clarity and impact.",
      icon: MessageSquare,
      gradient: "from-rose-400 to-pink-500",
      level: 90
    },
    {
      name: "Project Coordination & Management",
      tools: ["Event Planning", "Timeline Organizing", "Milestone Tracking"],
      description: "Managing committee tasks, timeline tracking, and executing large-scale organizational events.",
      icon: Layers,
      gradient: "from-purple-400 to-pink-500",
      level: 92
    },
    {
      name: "Adaptability & Continuous Learning",
      tools: ["Trend Spotting", "Self-Growth", "Skill Acquisition"],
      description: "Quickly learning new business trends, adopting digital tools, and adjusting to dynamic workspaces.",
      icon: RefreshCw,
      gradient: "from-indigo-400 to-pink-500",
      level: 95
    },
    {
      name: "Cross-Functional Collaboration",
      tools: ["Team Leadership", "Synergy Building", "Empathy"],
      description: "Unifying multi-disciplinary teams, fostering collaborative synergy, and coordinating cross-department efforts.",
      icon: Users,
      gradient: "from-cyan-400 to-pink-500",
      level: 94
    }
  ];

  return (
    <section id="skills" className="min-h-screen py-20 relative overflow-hidden animate-fadeIn" style={{
      background: themeColors.background.sections?.skills || themeColors.background.gradient,
      transition: 'background 0.3s ease-in-out'
    }}>
      {/* Background aesthetics */}
      <div 
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: '300px',
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
            My Expertise & Skills
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: themeColors.text.secondary }}>
            A curated mix of technical capabilities and interpersonal skills developed through academic studies and active leadership in student organizations.
          </p>
        </header>

        {/* Category Filters */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {(['all', 'technical', 'soft'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-6 py-2.5 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
              style={{
                backgroundColor: activeCategory === cat 
                  ? themeColors.colors.pink[500] 
                  : isDarkMode ? themeColors.colors.dark[800] : themeColors.colors.white,
                color: activeCategory === cat 
                  ? themeColors.colors.white 
                  : isDarkMode ? themeColors.colors.pink[200] : themeColors.colors.pink[700],
                border: `2px solid ${activeCategory === cat ? themeColors.colors.pink[500] : themeColors.colors.pink[200]}`,
                boxShadow: activeCategory === cat ? '0 4px 14px rgba(236, 72, 153, 0.4)' : 'none'
              }}
            >
              {cat === 'all' && '✨ All Skills'}
              {cat === 'technical' && '🛠️ Technical Skills'}
              {cat === 'soft' && '🤝 Soft Skills'}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Technical Skills Section */}
          {(activeCategory === 'all' || activeCategory === 'technical') && (
            <div className="space-y-6">
              <h3 
                className="text-2xl font-bold flex items-center gap-2 mb-6"
                style={{ 
                  fontFamily: "'DK Crayonista', cursive, sans-serif",
                  color: isDarkMode ? themeColors.colors.pink[300] : themeColors.colors.pink[600] 
                }}
              >
                <span>🛠️</span> Technical Skills
              </h3>
              
              <div className="space-y-6">
                {technicalSkills.map((skill) => {
                  const Icon = skill.icon;
                  const isHovered = hoveredSkill === skill.name;
                  return (
                    <div
                      key={skill.name}
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      className="p-6 rounded-2xl shadow-lg border transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group"
                      style={{
                        backgroundColor: themeColors.card.background,
                        borderColor: isHovered ? themeColors.colors.pink[300] : themeColors.colors.pink[100],
                        boxShadow: isHovered 
                          ? `0 10px 25px -5px ${withAlpha(themeColors.colors.pink[500], 0.15)}` 
                          : '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
                      }}
                    >
                      {/* Crayon-themed Washi Tape top ornament */}
                      <div 
                        className="absolute -top-1.5 left-10 w-16 h-4 bg-pink-100/40 border-l border-r border-dashed border-pink-200/60 rotate-[-4deg] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      />

                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${skill.gradient} text-white shadow-md`}>
                          <Icon size={24} />
                        </div>
                        <div className="flex-grow min-w-0">
                          <h4 
                            className="text-lg font-bold mb-1 break-words"
                            style={{ color: themeColors.text.primary }}
                          >
                            {skill.name}
                          </h4>
                          
                          {/* Tools Badges */}
                          <div className="flex flex-wrap gap-1.5 mb-3">
                            {skill.tools.map((tool) => (
                              <span 
                                key={tool}
                                className="px-2.5 py-0.5 rounded-full text-xs font-semibold"
                                style={{
                                  backgroundColor: isDarkMode ? themeColors.colors.dark[700] : themeColors.colors.pink[50],
                                  color: themeColors.colors.pink[600]
                                }}
                              >
                                {tool}
                              </span>
                            ))}
                          </div>

                          <p className="text-sm mb-4 leading-relaxed" style={{ color: themeColors.text.secondary }}>
                            {skill.description}
                          </p>

                          {/* Skill Level Progress Bar */}
                          <div>
                            <div className="flex justify-between text-xs font-bold mb-1" style={{ color: themeColors.colors.pink[500] }}>
                              <span>Proficiency</span>
                              <span>{skill.level}%</span>
                            </div>
                            <div className="h-2 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                              <div 
                                className={`h-full bg-gradient-to-r ${skill.gradient} transition-all duration-1000 ease-out`}
                                style={{ width: isHovered ? `${skill.level}%` : '35%' }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Soft Skills Section */}
          {(activeCategory === 'all' || activeCategory === 'soft') && (
            <div className="space-y-6">
              <h3 
                className="text-2xl font-bold flex items-center gap-2 mb-6"
                style={{ 
                  fontFamily: "'DK Crayonista', cursive, sans-serif",
                  color: isDarkMode ? themeColors.colors.pink[300] : themeColors.colors.pink[600] 
                }}
              >
                <span>🤝</span> Soft & Interpersonal Skills
              </h3>

              <div className="space-y-6">
                {softSkills.map((skill) => {
                  const Icon = skill.icon;
                  const isHovered = hoveredSkill === skill.name;
                  return (
                    <div
                      key={skill.name}
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      className="p-6 rounded-2xl shadow-lg border transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group"
                      style={{
                        backgroundColor: themeColors.card.background,
                        borderColor: isHovered ? themeColors.colors.pink[300] : themeColors.colors.pink[100],
                        boxShadow: isHovered 
                          ? `0 10px 25px -5px ${withAlpha(themeColors.colors.pink[500], 0.15)}` 
                          : '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
                      }}
                    >
                      {/* Crayon-themed Washi Tape top ornament */}
                      <div 
                        className="absolute -top-1.5 left-10 w-16 h-4 bg-pink-100/40 border-l border-r border-dashed border-pink-200/60 rotate-[-4deg] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      />

                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${skill.gradient} text-white shadow-md`}>
                          <Icon size={24} />
                        </div>
                        <div className="flex-grow min-w-0">
                          <h4 
                            className="text-lg font-bold mb-1 break-words"
                            style={{ color: themeColors.text.primary }}
                          >
                            {skill.name}
                          </h4>
                          
                          {/* Core Attributes Badges */}
                          <div className="flex flex-wrap gap-1.5 mb-3">
                            {skill.tools.map((attr) => (
                              <span 
                                key={attr}
                                className="px-2.5 py-0.5 rounded-full text-xs font-semibold"
                                style={{
                                  backgroundColor: isDarkMode ? themeColors.colors.dark[700] : themeColors.colors.pink[50],
                                  color: themeColors.colors.pink[600]
                                }}
                              >
                                {attr}
                              </span>
                            ))}
                          </div>

                          <p className="text-sm mb-4 leading-relaxed" style={{ color: themeColors.text.secondary }}>
                            {skill.description}
                          </p>

                          {/* Soft Skill Strength Indicator */}
                          <div>
                            <div className="flex justify-between text-xs font-bold mb-1" style={{ color: themeColors.colors.pink[500] }}>
                              <span>Strength Level</span>
                              <span>{skill.level}%</span>
                            </div>
                            <div className="h-2 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                              <div 
                                className={`h-full bg-gradient-to-r ${skill.gradient} transition-all duration-1000 ease-out`}
                                style={{ width: isHovered ? `${skill.level}%` : '35%' }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;