import { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Code,
  Smartphone,
  Palette,
  Gamepad2,
  Send,
  Github,
  Linkedin,
  Download,
  ArrowRight,
  Star,
  Award,
  Users,
  Coffee,
  Database,
  Cloud,
  Zap,
  Layers,
  Globe,
  Cpu,
  Instagram,
  Figma,
  Bird,
  Brain,
} from "lucide-react";
import { FaFeatherAlt } from "react-icons/fa";
import ResumePDF from "./Assets/Akhil Adam Resume.pdf";
import { Helmet } from "react-helmet"
import "./App.css";
import { projects } from "./Projects";

export default function App() {
  const [activeProject, setActiveProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeSkillCategory, setActiveSkillCategory] = useState("All");
  const { scrollYProgress } = useScroll();
  const yRange = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      description:
        "Building scalable web applications with React, Node.js, MongoDB, Firebase and modern technologies",
      features: [
        "Responsive Design",
        "API Integration",
        "Database Design",
        "Performance Optimization",
      ],
      color: "from-blue-500 to-purple-500",
      bgPattern: "web-pattern",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Development",
      description:
        "Creating native Android apps and cross-platform solutions with React Native",
      features: [
        "Native Android",
        "React Native",
        "API Integration",
        "App Store Deployment",
      ],
      color: "from-green-500 to-blue-500",
      bgPattern: "mobile-pattern",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description:
        "Designing beautiful and intuitive user interfaces and experiences using Figma",
      features: [
        "User Research",
        "Wireframing",
        "Prototyping",
        "Design Systems",
      ],
      color: "from-pink-500 to-red-500",
      bgPattern: "design-pattern",
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Artificial Intelligence",
      description:
        "Building intelligent systems using machine learning, neural networks, and natural language processing.",
      features: [
        "Machine Learning",
        "Deep Learning",
        "Natural Language Processing",
        "AI Automation",
      ],
      color: "from-blue-500 to-cyan-500",
      bgPattern: "ai-pattern",
    },

  ];

  const skills = [
    {
      name: "React",
      level: 95,
      category: "Frontend",
      icon: <Globe className="w-5 h-5" />,
      color: "#61DAFB",
    },
    {
      name: "Node.js",
      level: 75,
      category: "Backend",
      icon: <Cpu className="w-5 h-5" />,
      color: "#339933",
    },
    {
      name: "MongoDB",
      level: 60,
      category: "Database",
      icon: <Database className="w-5 h-5" />,
      color: "#47A248",
    },
    {
      name: "Android",
      level: 88,
      category: "Mobile",
      icon: <Smartphone className="w-5 h-5" />,
      color: "#3DDC84",
    },
    {
      name: "Java",
      level: 90,
      category: "Programming",
      icon: <Code className="w-5 h-5" />,
      color: "#ED8B00",
    },
    {
      name: "JavaScript",
      level: 98,
      category: "Programming",
      icon: <Zap className="w-5 h-5" />,
      color: "#F7DF1E",
    },
    {
      name: "Firebase",
      level: 95,
      category: "Cloud",
      icon: <Cloud className="w-5 h-5" />,
      color: "#FFCA28",
    },
    {
      name: "React Native",
      level: 80,
      category: "Mobile",
      icon: <Layers className="w-5 h-5" />,
      color: "#61DAFB",
    },
    {
      name: "HTML/CSS",
      level: 95,
      category: "Frontend",
      icon: <Globe className="w-5 h-5" />,
      color: "#E34F26",
    },
    {
      name: "C++",
      level: 85,
      category: "Programming",
      icon: <Code className="w-5 h-5" />,
      color: "#00599C",
    },
    {
      name: "GCP",
      level: 75,
      category: "Cloud",
      icon: <Cloud className="w-5 h-5" />,
      color: "#4285F4",
    },
    {
      name: "Figma",
      level: 92,
      category: "Design",
      icon: <Figma className="w-5 h-5" />,
      color: "#FF6B6B",
    },
  ];

  const skillCategories = [
    "All",
    "Frontend",
    "Backend",
    "Mobile",
    "Programming",
    "Cloud",
    "Database",
    "Design",
  ];

  const filteredSkills =
    activeSkillCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeSkillCategory);

  const stats = [
    {
      icon: <Award className="w-8 h-8" />,
      number: "7+",
      label: "Projects Completed",
    },
    {
      icon: <Users className="w-8 h-8" />,
      number: "50+",
      label: "Happy Clients",
    },
    {
      icon: <Star className="w-8 h-8" />,
      number: "2+",
      label: "Years Experience",
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      number: "1000+",
      label: "Cups of Coffee",
    },
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const [autoSlide, setAutoSlide] = useState(true); // 🔹 new state for auto/manual toggle

  useEffect(() => {
    if (activeProject) {
      setCurrentImageIndex(0); // always start from first image
    }
  }, [activeProject]);

  useEffect(() => {
    if (activeProject && autoSlide) { // 🔹 only auto-slide if enabled
      const interval = setInterval(() => {
        const project = projects.find((p) => p.id === activeProject);
        if (project) {
          setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
        }
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [activeProject, autoSlide]);


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/918605050804", "_blank");
  };

  const activeProjectData = projects.find((p) => p.id === activeProject);

  let isMobileView = window.innerWidth < 768;

  useEffect(() => {
    const handleResize = () => {
      isMobileView = window.innerWidth < 768;
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Akhil Adam – Software Engineer & Creative Developer</title>
        <meta name="description" content="Akhil Adam | Software Engineer & Creative Developer specializing in modern web and mobile applications. Explore portfolio, services, and contact." />
        <meta name="keywords" content="Akhil Adam, Akhilesh, Adam , Akhilesh Adam, Software Engineer, Web Developer, Mobile Developer, React, Node.js, Portfolio , Part time , Fresher, Job , Job Seeker, Developer , React developer , Figma , Ui/Ux , Frontend Developer, Backend Developer, Frontend , Backend , Resume" />
        <meta name="author" content="Akhil Adam" />
        <link rel="canonical" href="https://akhilesh-8605-portfolio.vercel.app/" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://akhilesh-8605-portfolio.vercel.app/" />
        <meta property="og:title" content="Akhil Adam – Software Engineer & Creative Developer" />
        <meta property="og:description" content="Explore the portfolio of Akhil Adam: web & mobile apps built with React, Node.js, Firebase and more." />
        <meta property="og:image" content="https://ik.imagekit.io/akhil8605unicore/Akhilesh%20Profile%20PIC.jpg?updatedAt=1763131380442" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@your_twitter_handle" />
        <meta name="twitter:creator" content="@your_twitter_handle" />
        <meta name="twitter:title" content="Akhil Adam – Software Engineer & Creative Developer" />
        <meta name="twitter:description" content="Explore the portfolio of Akhil Adam: web & mobile apps built with React, Node.js, Firebase and more." />
        <meta name="twitter:image" content="https://ik.imagekit.io/akhil8605unicore/Akhilesh%20Profile%20PIC.jpg?updatedAt=1763131380442" />

        {/* Robots */}
        <meta name="robots" content="index, follow" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Akhil Adam",
            url: "https://ik.imagekit.io/akhil8605unicore/Akhilesh%20Profile%20PIC.jpg?updatedAt=1763131380442",
            sameAs: [
              "https://github.com/akhil8605",
              "https://www.linkedin.com/in/akhil-8605-adam/",
              "https://www.instagram.com/itz__your__akil/",
              "https://www.freelancer.in/u/akhil8605",
              "https://akhilesh-8605-portfolio.vercel.app/static/media/Akhil%20Adam%20Resume.46b884d2b501932c7960.pdf",
            ],
            jobTitle: "Software Engineer & Creative Developer"
          })}
        </script>
      </Helmet>
      <div className="portfolio-container">
        {/* Cursor Follower */}
        <motion.div
          className="cursor-follower"
          animate={{
            x: mousePosition.x - 10,
            y: mousePosition.y - 10,
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 28,
          }}
        />

        {/* Header */}
        <motion.header
          className="header"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <nav className="nav">
            <motion.div
              className="logo"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Akhil Adam</span>
            </motion.div>
            <div className="nav-links">
              {["Home", "About", "Services", "Projects", "Contact"].map(
                (item, index) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                    whileHover={{ y: -2 }}
                  >
                    {item}
                  </motion.a>
                )
              )}
            </div>
            <motion.button
              className="cta-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleWhatsApp}
            >
              Hire Me
            </motion.button>
          </nav>
        </motion.header>

        {/* Hero Section */}
        <section id="home" className="hero">
          <div className="hero-background">
            <motion.div className="floating-shapes">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`shape shape-${i + 1}`}
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 3 + i,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </motion.div>
          </div>
          <div className="hero-content">
            <motion.div
              className="hero-text"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.div
                className="hero-badge"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              >
                👋 Hello, I'm
              </motion.div>
              <motion.h1
                className="hero-title"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Akhilesh Ambadas
                <span className="gradient-text"> Adam</span>
              </motion.h1>
              <motion.h2
                className="hero-subtitle"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Software Engineer & Creative Developer
              </motion.h2>
              <motion.p
                className="hero-description"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                Passionate about building dynamic and responsive websites and
                mobile applications with expertise in creating intuitive and
                engaging user experiences that make a difference.
              </motion.p>
              <motion.div
                className="hero-buttons"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <motion.button
                  className="btn-primary"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() =>
                    document
                      .getElementById("projects")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                >
                  View My Work
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.button
                  className="btn-secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    window.open(ResumePDF);
                  }}
                >
                  <Download className="w-5 h-5" />
                  Download CV
                </motion.button>
              </motion.div>
              <motion.div
                className="social-links"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                {[
                  {
                    icon: <Github className="w-5 h-5" />,
                    href: "https://github.com/akhil8605",
                  },
                  {
                    icon: <Linkedin className="w-5 h-5" />,
                    href: "https://www.linkedin.com/in/akhil-8605-adam/",
                  },
                  {
                    icon: (
                      <img
                        src="https://www.freelancer.com/favicon.ico"
                        alt="Freelancer"
                        width={24}
                        height={24}
                        style={{
                          verticalAlign: "middle",
                          filter:
                            "grayscale(1) brightness(0.5) sepia(1) hue-rotate(180deg) saturate(0%)",
                        }}
                      />
                    ),
                    href: "https://www.freelancer.in/u/akhil8605",
                    title: "Freelancer",
                  },
                  {
                    icon: <Instagram className="w-5 h-5" />,
                    href: "https://www.instagram.com/itz__your__akil/",
                  },
                  {
                    icon: <Mail className="w-5 h-5" />,
                    href: "mailto:akhileshadam186@gmail.com",
                  },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="social-link"
                    title={social.title ? social.title : ""}
                    whileHover={{ scale: 1.2, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
            <motion.div
              className="hero-image"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.div
                className="profile-card"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="profile-glow" />
                <img
                  src="https://ik.imagekit.io/akhil8605unicore/Akhilesh%20Profile%20PIC.jpg?updatedAt=1763131380442"
                  alt="Akhil Adam"
                  className="profile-img"
                />
                <motion.div
                  className="profile-ring"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <motion.section
          id="about"
          className="about"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="container">
            <motion.div className="section-header" variants={itemVariants}>
              <span className="section-badge">About Me</span>
              <h2 className="section-title">Crafting Digital Experiences</h2>
              <p className="section-subtitle">
                Passionate software engineer with a keen eye for design and
                innovation
              </p>
            </motion.div>
            <div className="about-content">
              <motion.div className="about-text" variants={itemVariants}>
                <p>
                  Hello! I'm Akhilesh Ambadas Adam, a passionate software engineer
                  and creative web developer with expertise in building dynamic
                  and responsive websites and mobile applications. I have a strong
                  background in web development and Android app development,
                  always focused on creating intuitive and engaging user
                  experiences.
                </p>
                <div className="education-timeline">
                  <h3>Education Journey</h3>
                  <div className="timeline">
                    <motion.div
                      className="timeline-item"
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="timeline-dot" />
                      <motion.div
                        whileHover={{ x: 10 }}
                        transition={{ type: "spring", stiffness: 300 }} className="timeline-content">
                        <h4>Secondary (X) SSC</h4>
                        <p>Shri Markandeya High School</p>
                        <span className="timeline-year">2022 - 84.20%</span>
                      </motion.div>
                    </motion.div>
                    <motion.div
                      className="timeline-item"
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="timeline-dot" />
                      <motion.div
                        whileHover={{ x: 10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="timeline-content">
                        <h4>Diploma in Computer Science & Engineering</h4>
                        <p>SPM Polytechnic College, Kumthe, Solapur (2022 - 2025)</p>
                        <span className="timeline-year">2025 - 79.54%</span>
                      </motion.div>
                    </motion.div>
                    <motion.div
                      className="timeline-item"
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="timeline-dot" />
                      <motion.div
                        whileHover={{ x: 10 }}
                        transition={{ type: "spring", stiffness: 300 }} className="timeline-content">
                        <h4>B.Tech in Computer Science & Engineering</h4>
                        <p>MAEER's MIT College of Railway Engineering and Research, Barshi</p>
                        <span className="timeline-year">2025 - Current</span>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="enhanced-skills-section"
                variants={itemVariants}
              >
                <h3>Technical Skills</h3>

                {/* Skill Categories Filter */}
                <div className="skill-categories">
                  {skillCategories.map((category) => (
                    <motion.button
                      key={category}
                      className={`category-btn ${activeSkillCategory === category ? "active" : ""
                        }`}
                      onClick={() => setActiveSkillCategory(category)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {category}
                    </motion.button>
                  ))}
                </div>

                {/* Enhanced Skills Grid */}
                <motion.div className="enhanced-skills-grid" layout>
                  <AnimatePresence mode="wait">
                    {filteredSkills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        className="enhanced-skill-card"
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: -20 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        whileHover={{
                          y: -8,
                          scale: 1.05,
                          boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                        }}
                        layout
                      >
                        <div className="skill-card-header">
                          <div
                            className="skill-icon"
                            style={{ color: skill.color }}
                          >
                            {skill.icon}
                          </div>
                          <div className="skill-info">
                            <h4 className="skill-name">{skill.name}</h4>
                            <span className="skill-category-tag">
                              {skill.category}
                            </span>
                          </div>
                          <div className="skill-percentage">{skill.level}%</div>
                        </div>

                        <div className="skill-progress-container">
                          <motion.div
                            className="skill-progress-bar"
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{
                              delay: index * 0.1 + 0.3,
                              duration: 1,
                              ease: "easeOut",
                            }}
                            style={{ backgroundColor: skill.color }}
                          />
                        </div>

                        <div className="skill-level-indicator">
                          {skill.level >= 90
                            ? "Expert"
                            : skill.level >= 80
                              ? "Advanced"
                              : skill.level >= 70
                                ? "Intermediate"
                                : "Beginner"}
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Enhanced Services Section */}
        <motion.section
          id="services"
          className="enhanced-services"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="container">
            <motion.div className="section-header" variants={itemVariants}>
              <span className="section-badge">Services</span>
              <h2 className="section-title">What I Do Best</h2>
              <p className="section-subtitle">
                Comprehensive solutions for your digital needs
              </p>
            </motion.div>

            <div className="enhanced-services-grid">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className={`enhanced-service-card ${service.bgPattern}`}
                  variants={itemVariants}
                  whileHover={{
                    y: -15,
                    scale: 1.02,
                    rotateY: 5,
                    rotateX: 5,
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="service-card-background">
                    <div
                      className={`service-gradient bg-gradient-to-br ${service.color}`}
                    />
                    <div className="service-pattern" />
                  </div>

                  <div className="service-card-content">
                    <div className="service-header">
                      <h3 className="service-title">
                        <div className={`enhanced-service-icon`}>
                          {service.icon}
                        </div>
                        {service.title}
                      </h3>
                      <div className="service-number">0{index + 1}</div>
                    </div>
                    <p className="service-description">{service.description}</p>

                    <div className="service-features-enhanced">
                      {service.features.map((feature, i) => (
                        <motion.div
                          key={i}
                          className="feature-item"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <div className="feature-dot" />
                          <span>{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* <motion.div
                    className="service-cta"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.div> */}
                  </div>

                  <motion.div
                    className="service-hover-glow"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          id="projects"
          className="projects"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="container">
            <motion.div className="section-header" variants={itemVariants}>
              <span className="section-badge">Portfolio</span>
              <h2 className="section-title">Featured Projects</h2>
              <p className="section-subtitle">
                Showcasing my best work and creative solutions
              </p>
            </motion.div>
            <div className="projects-grid">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="project-card"
                  variants={itemVariants}
                  whileHover={{ y: -15 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  onClick={() => setActiveProject(project.id)}
                >
                  <div className="project-image">
                    <img
                      src={project.images[0] || "/placeholder.svg"}
                      alt={project.title}
                    />
                    <div
                      className={`project-overlay bg-gradient-to-r ${project.color}`}
                    >
                      <ExternalLink className="w-8 h-8" />
                    </div>
                    <div className="project-category">{project.category}</div>
                  </div>
                  <div className="project-content">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-tech">
                      {project.tech.slice(0, 3).map((tech, i) => (
                        <span key={i} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="tech-more">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>
                    <motion.div
                      className="project-arrow"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          className="contact"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="container">
            <motion.div className="section-header" variants={itemVariants}>
              <span className="section-badge">Contact</span>
              <h2 className="section-title">Let's Work Together</h2>
              <p className="section-subtitle">
                Ready to bring your ideas to life
              </p>
            </motion.div>
            <div className="contact-content">
              <motion.div className="contact-info" variants={itemVariants}>
                <div className="contact-cards">
                  {[
                    {
                      icon: <Mail className="w-6 h-6" />,
                      label: "Email",
                      value: "akhileshadam186@gmail.com",
                    },
                    {
                      icon: <Phone className="w-6 h-6" />,
                      label: "Phone",
                      value: "+91 8605050804",
                    },
                    {
                      icon: <MapPin className="w-6 h-6" />,
                      label: "Location",
                      value: "Solapur, Maharashtra",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="contact-card"
                      whileHover={{ y: -5, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="contact-icon">{item.icon}</div>
                      <div className="contact-details">
                        <span className="contact-label">{item.label}</span>
                        <span className="contact-value">{item.value}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              <motion.div className="contact-cta" variants={itemVariants}>
                <motion.button
                  className="whatsapp-btn"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(37, 211, 102, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleWhatsApp}
                >
                  <Send className="w-5 h-5" />
                  Message on WhatsApp
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Project Modal */}
        <AnimatePresence>
          {activeProject && activeProjectData && (
            <motion.div
              className="modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
            >
              <motion.div
                className="modal-content"
                initial={{ scale: 0.8, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 50 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                onClick={(e) => e.stopPropagation()}
              >
                <motion.div
                  className={`modal-close switch ${autoSlide ? "on" : "off"}`}
                  style={{ translateX: "50px" }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setAutoSlide(!autoSlide)}
                >
                  <motion.div
                    className="switch-handle"
                    animate={{
                      x: autoSlide ? 50 : 0,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                  <span className="switch-text on-text">Play</span>
                  <span className="switch-text off-text">Pause</span>
                </motion.div>

                <motion.button
                  className="modal-close"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setActiveProject(null)}
                >
                  ×
                </motion.button>
                <div
                  className="modal-body"
                  style={{
                    gridTemplateColumns:
                      isMobileView ? "1fr" : activeProjectData.isApplication ? "1fr 1fr" : "1fr",
                  }}
                >
                  <div className="modal-images">
                    <div
                      className="image-carousel"
                      style={{
                        minHeight: activeProjectData.isApplication ? "600px" : "none",
                      }}
                    >
                      <AnimatePresence mode="wait">
                        <motion.img
                          key={currentImageIndex}
                          src={activeProjectData.images[currentImageIndex]}
                          alt={activeProjectData.title}
                          className="carousel-image"
                          initial={{ opacity: 0, x: 100 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -100 }}
                          transition={{ duration: 0.5 }}
                          style={{ objectFit: "fill" }}
                        />
                      </AnimatePresence>
                      {activeProjectData.images.length > 1 && (
                        <>
                          <motion.button
                            className="carousel-btn prev"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() =>
                              setCurrentImageIndex(
                                currentImageIndex === 0
                                  ? activeProjectData.images.length - 1
                                  : currentImageIndex - 1
                              )
                            }
                          >
                            <ChevronLeft className="w-6 h-6" />
                          </motion.button>
                          <motion.button
                            className="carousel-btn next"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() =>
                              setCurrentImageIndex(
                                (currentImageIndex + 1) %
                                activeProjectData.images.length
                              )
                            }
                          >
                            <ChevronRight className="w-6 h-6" />
                          </motion.button>
                          <div className="carousel-dots">
                            {activeProjectData.images.map((_, index) => (
                              <motion.button
                                key={index}
                                className={`dot ${index === currentImageIndex ? "active" : ""
                                  }`}
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.8 }}
                                onClick={() => setCurrentImageIndex(index)}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="modal-info">
                    <motion.div
                      className="modal-category"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {activeProjectData.category}
                    </motion.div>
                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      {activeProjectData.title}
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      {activeProjectData.fullDescription}
                    </motion.p>
                    <motion.div
                      className="modal-tech"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      {activeProjectData.tech.map((tech, i) => (
                        <span key={i} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </motion.div>
                    {activeProjectData.link !== "#" && (
                      <motion.a
                        href={activeProjectData.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="w-5 h-5" />
                        Visit Project
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
