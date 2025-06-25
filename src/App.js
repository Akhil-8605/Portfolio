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
} from "lucide-react";
import { FaFeatherAlt } from "react-icons/fa";
import ResumePDF from "./Assets/Akhil Adam Resume.pdf";
import { Helmet } from "react-helmet"
import "./App.css";

import UnicoreImage1 from "./Assets/Unicore/image1.png";
import UnicoreImage2 from "./Assets/Unicore/image2.png";
import UnicoreImage3 from "./Assets/Unicore/image3.png";
import UnicoreImage4 from "./Assets/Unicore/image4.png";
import UnicoreImage5 from "./Assets/Unicore/image5.png";
import UnicoreImage6 from "./Assets/Unicore/image6.png";
import UnicoreImage7 from "./Assets/Unicore/image7.png";
import UnicoreImage8 from "./Assets/Unicore/image8.png";
import UnicoreImage9 from "./Assets/Unicore/image9.png";
import UnicoreImage10 from "./Assets/Unicore/image10.png";

import KiteesImage1 from "./Assets/Kitees/image1.png";
import KiteesImage2 from "./Assets/Kitees/image2.png";
import KiteesImage3 from "./Assets/Kitees/image3.png";
import KiteesImage4 from "./Assets/Kitees/image4.png";
import KiteesImage5 from "./Assets/Kitees/image5.png";
import KiteesImage6 from "./Assets/Kitees/image6.png";
import KiteesImage7 from "./Assets/Kitees/image7.png";
import KiteesImage8 from "./Assets/Kitees/image8.png";
import KiteesImage9 from "./Assets/Kitees/image9.png";
import KiteesImage10 from "./Assets/Kitees/image10.png";

import FutureMindsImage1 from "./Assets/Futureminds/image1.png";
import FutureMindsImage2 from "./Assets/Futureminds/image2.png";
import FutureMindsImage3 from "./Assets/Futureminds/image3.png";
import FutureMindsImage4 from "./Assets/Futureminds/image4.png";
import FutureMindsImage5 from "./Assets/Futureminds/image5.png";
import FutureMindsImage6 from "./Assets/Futureminds/image6.png";
import FutureMindsImage7 from "./Assets/Futureminds/image7.png";
import FutureMindsImage8 from "./Assets/Futureminds/image8.png";

import TextNTalkImage1 from "./Assets/Textntalk/image1.jpg";
import TextNTalkImage2 from "./Assets/Textntalk/image2.jpg";
import TextNTalkImage3 from "./Assets/Textntalk/image3.jpg";
import TextNTalkImage4 from "./Assets/Textntalk/image4.jpg";
import TextNTalkImage5 from "./Assets/Textntalk/image5.jpg";
import TextNTalkImage6 from "./Assets/Textntalk/image6.jpg";
import TextNTalkImage7 from "./Assets/Textntalk/image7.jpg";
import TextNTalkImage8 from "./Assets/Textntalk/image8.jpg";
import TextNTalkImage9 from "./Assets/Textntalk/image9.jpg";
import TextNTalkImage10 from "./Assets/Textntalk/image10.jpg";

import GroceryImage1 from "./Assets/Grocery/image1.png";
import GroceryImage2 from "./Assets/Grocery/image2.png";
import GroceryImage3 from "./Assets/Grocery/image3.png";
import GroceryImage4 from "./Assets/Grocery/image4.png";
import GroceryImage5 from "./Assets/Grocery/image5.png";
import GroceryImage6 from "./Assets/Grocery/image6.png";
import GroceryImage7 from "./Assets/Grocery/image7.png";

import StudentMarksImage1 from "./Assets/Studentmarks/image1.png";
import StudentMarksImage2 from "./Assets/Studentmarks/image2.png";
import StudentMarksImage3 from "./Assets/Studentmarks/image3.png";
import StudentMarksImage4 from "./Assets/Studentmarks/image4.png";
import StudentMarksImage5 from "./Assets/Studentmarks/image5.png";

import ProjectNestImage1 from "./Assets/Projectnest/image1.png";
import ProjectNestImage2 from "./Assets/Projectnest/image2.png";
import ProjectNestImage3 from "./Assets/Projectnest/image3.png";
import ProjectNestImage4 from "./Assets/Projectnest/image4.png";
import ProjectNestImage5 from "./Assets/Projectnest/image5.png";
import ProjectNestImage6 from "./Assets/Projectnest/image6.png";
import ProjectNestImage7 from "./Assets/Projectnest/image7.png";
import ProjectNestImage8 from "./Assets/Projectnest/image8.png";

export default function App() {
  const [activeProject, setActiveProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeSkillCategory, setActiveSkillCategory] = useState("All");
  const { scrollYProgress } = useScroll();
  const yRange = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const projects = [
    {
      id: 1,
      title: "Unicore",
      category: "Web Application",
      description:
        "A modern University Management System designed to efficiently handle academic and administrative tasks for mid-level institutions",
      fullDescription:
        "The University Management System is a modern, user-friendly platform built to streamline and manage day-to-day academic and administrative operations for mid-sized universities. It includes features like student dashboard, admin panel, course scheduling, events management, notice board, class-test result, and library management — all within a centralized dashboard. Designed with a clean UI and scalable architecture, this system simplifies coordination across departments and improves overall institutional efficiency.",
      tech: ["React", "Node.js", "Firebase", "Firestore"],
      link: "https://unicore-8605.vercel.app",
      images: [
        UnicoreImage1,
        UnicoreImage2,
        UnicoreImage3,
        UnicoreImage4,
        UnicoreImage5,
        UnicoreImage6,
        UnicoreImage7,
        UnicoreImage8,
        UnicoreImage9,
        UnicoreImage10,
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 2,
      title: "Kitees",
      category: "E-commerce",
      description:
        "A modern e-commerce platform for electronics kits and components, tailored for electronics students and enthusiasts.",
      fullDescription:
        "An innovative e-commerce platform crafted specifically for electronics students and hobbyists, offering a wide range of electronic kits, components, and DIY tools. The platform features a clean, intuitive interface with smart filtering, detailed product information, student-friendly pricing, and secure checkout. Designed to support academic projects and hands-on learning, it simplifies the process of finding and purchasing quality components needed for practical electronics work.",
      tech: ["React", "Node.js", "Firebase", "Framer Motion", "Firestore"],
      link: "https://kitees.vercel.app",
      images: [
        KiteesImage1,
        KiteesImage2,
        KiteesImage3,
        KiteesImage4,
        KiteesImage5,
        KiteesImage6,
        KiteesImage7,
        KiteesImage8,
        KiteesImage9,
        KiteesImage10,
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 3,
      title: "FutureMinds",
      category: "Corporate Website",
      description:
        "High-end company website with advanced animations for organizing summer vacation programs for kids.",
      fullDescription:
        "An award-winning company website featuring cutting-edge animations and modern design principles. Built for a company organizing summer vacation programs for children, with interactive elements, engaging user experience, advanced CSS animations, and optimized performance for all devices.",
      tech: ["React", "Framer Motion", "GSAP", "CSS3"],
      link: "https://futureminds-fun.vercel.app",
      images: [
        FutureMindsImage1,
        FutureMindsImage2,
        FutureMindsImage3,
        FutureMindsImage4,
        FutureMindsImage5,
        FutureMindsImage6,
        FutureMindsImage7,
        FutureMindsImage8,
      ],
      color: "from-green-500 to-teal-500",
    },
    {
      id: 4,
      title: "TextNTalk",
      category: "Mobile Application",
      description:
        "Advanced Android translation app with AI-powered features supporting five Indian languages.",
      fullDescription:
        "Sophisticated Android application built with Java and XML, featuring ML Kit integration. Supports real-time translation between five Indian languages, includes advanced text-to-speech functionality, image text recognition using machine learning, offline translation capabilities, and AI-powered word descriptions with contextual explanations.",
      tech: ["Android Studio", "Java", "XML", "ML Kit", "Firebase"],
      link: "#",
      images: [
        TextNTalkImage1,
        TextNTalkImage2,
        TextNTalkImage3,
        TextNTalkImage4,
        TextNTalkImage5,
        TextNTalkImage6,
        TextNTalkImage7,
        TextNTalkImage8,
        TextNTalkImage9,
        TextNTalkImage10,
      ],
      color: "from-orange-500 to-red-500",
    },
    {
      id: 5,
      title: "Grocery",
      category: "E-commerce",
      description:
        "A modern online grocery platform with seamless payment integration and real-time delivery tracking.",
      fullDescription:
        "A user-centric online grocery platform designed for a smooth shopping experience, featuring a modern UI, secure payment integration, and real-time delivery tracking. Customers can browse a wide range of grocery items, place orders with ease, and monitor deliveries from dispatch to doorstep. The platform ensures convenience, speed, and reliability, making everyday grocery shopping smarter and more efficient.",
      tech: ["HTML5", "CSS3", "JavaScript", "Firestore"],
      link: "https://akhil-8605.github.io/grocery/",
      images: [
        GroceryImage1,
        GroceryImage2,
        GroceryImage3,
        GroceryImage4,
        GroceryImage5,
        GroceryImage6,
        GroceryImage7,
      ],
      color: "from-emerald-500 to-green-500",
    },
    {
      id: 6,
      title: "Student Marks Management",
      category: "Educational Tool",
      description:
        "A comprehensive student marks management system with advanced Excel/image export and detailed reporting features.",
      fullDescription:
        "A powerful and intuitive student marks management system designed to simplify academic performance tracking. It offers advanced features such as subject-wise mark entry, automated grade calculation, and generation of performance reports. The system supports exporting data in both Excel and image formats, making it ideal for documentation and sharing. With customizable reports, clean UI, and accurate analytics, it streamlines result processing for schools, colleges, and coaching centers.",
      tech: ["HTML5", "CSS3", "JavaScript", "Chart.js", "ExcelJS", "Canvas"],
      link: "https://akhil-8605.github.io/student-marks/",
      images: [
        StudentMarksImage1,
        StudentMarksImage2,
        StudentMarksImage3,
        StudentMarksImage4,
        StudentMarksImage5,
      ],
      color: "from-yellow-500 to-orange-500",
    },
    {
      id: 7,
      title: "ProjectNest",
      category: "Marketplace",
      description:
        "A comprehensive online marketplace for engineering students to explore, customize, and purchase final year projects.",
      fullDescription:
        "An all-in-one online marketplace tailored for engineering students to discover, customize, and purchase high-quality final year projects. The platform features a wide range of project categories, including electronics, computer science, mechanical, and civil engineering. With detailed project descriptions, demo videos, source code, and support options, students can easily find solutions that match their academic requirements. Built for convenience and credibility, it empowers students to succeed with ready-to-implement, innovation-driven projects.",
      tech: ["HTML5", "CSS3", "JavaScript"],
      link: "https://akhil-8605.github.io/ProjectNest/",
      images: [
        ProjectNestImage1,
        ProjectNestImage2,
        ProjectNestImage3,
        ProjectNestImage4,
        ProjectNestImage5,
        ProjectNestImage6,
        ProjectNestImage7,
        ProjectNestImage8,
      ],
      color: "from-indigo-500 to-purple-500",
    },
  ];

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
      icon: <Gamepad2 className="w-8 h-8" />,
      title: "Game Development",
      description:
        "Developing engaging games using Unreal Engine and Unity Engine",
      features: [
        "3D Modeling",
        "Game Mechanics",
        "Level Design",
        "Cross-platform",
      ],
      color: "from-purple-500 to-pink-500",
      bgPattern: "game-pattern",
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

  useEffect(() => {
    if (activeProject) {
      const interval = setInterval(() => {
        const project = projects.find((p) => p.id === activeProject);
        if (project) {
          setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
        }
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [activeProject]);

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
        <meta property="og:image" content="https://ik.imagekit.io/akhil8605unicore/Akhilesh%20Profile%20PIC.jpg?updatedAt=1749207129643" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@your_twitter_handle" />
        <meta name="twitter:creator" content="@your_twitter_handle" />
        <meta name="twitter:title" content="Akhil Adam – Software Engineer & Creative Developer" />
        <meta name="twitter:description" content="Explore the portfolio of Akhil Adam: web & mobile apps built with React, Node.js, Firebase and more." />
        <meta name="twitter:image" content="https://ik.imagekit.io/akhil8605unicore/Akhilesh%20Profile%20PIC.jpg?updatedAt=1749207129643" />

        {/* Robots */}
        <meta name="robots" content="index, follow" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Akhil Adam",
            url: "https://ik.imagekit.io/akhil8605unicore/Akhilesh%20Profile%20PIC.jpg?updatedAt=1749207129643",
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
                  src="https://ik.imagekit.io/akhil8605unicore/Akhilesh%20Profile%20PIC.jpg?updatedAt=1749207129643"
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

        {/* Stats Section */}
        {/* <motion.section
        className="stats-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-card"
                variants={itemVariants}
              >
                <div className="stat-icon">{stat.icon}</div>
                <motion.div
                  className="stat-number"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 200,
                  }}
                >
                  {stat.number}
                </motion.div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section> */}

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
                      whileHover={{ x: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="timeline-dot" />
                      <div className="timeline-content">
                        <h4>Diploma in Computer Science & Engineering</h4>
                        <p>SPM Polytechnic College (2022 - 2025)</p>
                        <span className="timeline-year">Current</span>
                      </div>
                    </motion.div>
                    <motion.div
                      className="timeline-item"
                      whileHover={{ x: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="timeline-dot" />
                      <div className="timeline-content">
                        <h4>Secondary (X) SSC</h4>
                        <p>Shri Markandeya High School</p>
                        <span className="timeline-year">2022 - 84.20%</span>
                      </div>
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
                      <div
                        className={`enhanced-service-icon bg-gradient-to-r ${service.color}`}
                      >
                        {service.icon}
                      </div>
                      <div className="service-number">0{index + 1}</div>
                    </div>

                    <h3 className="service-title">{service.title}</h3>
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
                      activeProjectData.id == 4 ? "1fr 1fr" : "1fr",
                  }}
                >
                  <div className="modal-images">
                    <div
                      className="image-carousel"
                      style={{
                        minHeight: activeProjectData.id == 4 ? "600px" : "none",
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
