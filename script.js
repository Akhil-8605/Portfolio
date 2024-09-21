document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Smooth scrolling
    document.querySelectorAll('a[data-scroll]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('data-scroll');
            const targetElement = document.getElementById(targetId);
            const headerOffset = 70; // Adjust this value based on your header height
            const elementPosition = targetElement.getBoundingClientRect().top;
            console.log(elementPosition);
            const offsetPosition = elementPosition + window.scrollY - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            // Close mobile menu if open
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });

    // Parallax effect for hero section
    const hero = document.querySelector('.hero');
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    });

    // Animate on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.portfolio-item, .service-item');
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('animate');
            } else {
                element.classList.remove('animate');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check on page load


    // Active menu item highlight
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');

    const highlightActiveSection = () => {
        let scrollPosition = window.scrollY;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.clientHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navItems.forEach(item => {
                    item.classList.remove('active');
                    if (item.getAttribute('data-scroll') === sectionId) {
                        item.classList.add('active');
                    }
                });
            }
        });
    };

    window.addEventListener('scroll', highlightActiveSection);
    highlightActiveSection(); // Initial check on page load

    const portfolio = document.getElementById("featured-portfolio")
    const portfolioItems = [
        {
            title: "TextNTalk : Language Translator App – Android App",
            description: "<br>This Android application, built using Java ,XML and ML Kit, offers translation support between five Indian languages with advanced features like text-to-speech and image text recognition. It allows users to capture images containing text and convert it into translatable text using machine learning. The app also includes AI-powered descriptions, offering detailed word explanations in the translated language. The offline translation capability ensures it works without an internet connection, making it highly practical for users in any situation.<br><br>",
            link: "https://github.com/Akhil-8605/TextNTalk"
        },
        {
            title: "ProjectNest – Online Project Selling Website",
            description: "<br>ProjectNest is a fully responsive web platform built using React.js and Firebase to enable engineering students to easily buy, sell, and request custom projects. The website features real-time updates, dynamic project listings, and secure user authentication. It integrates cloud storage for hosting project details like images, videos, and sample code. The platform’s intuitive design allows for smooth user interactions across different devices, making it an ideal solution for students seeking a seamless project discovery and management experience.<br><br>",
            link: "https://akhil-8605.github.io/ProjectNest"
        },
    ];

    // Dynamically generate the portfolio items
    portfolioItems.forEach(item => {
        portfolio.innerHTML += `
              <div class="portfolio-item">
                  <div class="portfolio-info">
                      <h3>${item.title}</h3>
                      <p>${item.description}</p>
                      <a href=${item.link}><button class="btn primary-btn">View On GitHub</button></a>
                  </div>
              </div>
          `;
    });

    const services = [
        {
            icon: 'fa fa-mobile-alt',
            title: 'Mobile App Development',
            description: 'I develop Android apps using Kotlin and Java, incorporating advanced features like AI and machine learning for a smooth, high-performance user experience.'
        },
        {
            icon: 'fa fa-code',
            title: 'Web Development',
            description: 'I build responsive, modern websites using React, HTML, CSS, and JavaScript, ensuring high performance and user-friendly designs. From custom sites to e-commerce platforms, I handle everything from design to deployment.'
        },
        {
            icon: 'fa fa-paint-brush',
            title: 'UI/UX Design',
            description: 'I design visually appealing, user-centric interfaces with a focus on usability and brand consistency. My designs ensure an intuitive user experience with engaging aesthetics.'
        },
        {
            icon: 'fa fa-lightbulb',
            title: 'Project Consultation',
            description: 'I offer technical guidance for project development, from selecting the right technologies to creating scalable solutions tailored to your business needs.'
        },
        {
            icon: 'fa fa-chart-line',
            title: 'SEO & Performance Optimization',
            description: 'I optimize websites for better search engine rankings and faster load times, enhancing user experience and boosting traffic.'
        },
        {
            icon: 'fas fa-gamepad',
            title: 'Game Development',
            description: 'I create immersive games using Unity and C#, specializing in 2D/3D mechanics and physics-based environments, delivering engaging and enjoyable gameplay.'
        }
    ];

    const servicesGrid = document.getElementById('my-services');

    services.forEach(service => {
        const serviceItem = document.createElement('div');
        serviceItem.classList.add('service-item');

        serviceItem.innerHTML = `
            <i class="${service.icon}"></i>
            <h3>${service.title}</h3>
            <p>${service.description}</p>
        `;

        servicesGrid.appendChild(serviceItem);
    });


});

function sendMessage() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('msg').value;

    const whatsappNumber = '918605050804'; // Replace with your WhatsApp number
    const text = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    window.open(url);
}
