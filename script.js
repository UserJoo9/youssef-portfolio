document.addEventListener('DOMContentLoaded', function() {
    // Load portfolio data from localStorage
    const loadPortfolioData = () => {
        const portfolioData = JSON.parse(localStorage.getItem('portfolioData'));
        
        if (portfolioData) {
            // Update profile info
            if (portfolioData.profile) {
                const logo = document.querySelector('.logo');
                logo.innerHTML = `${portfolioData.profile.fullName.split(' ')[0]}<span>${portfolioData.profile.fullName.split(' ')[1] || ''}</span>`;
                
                // Update hero section
                if (portfolioData.hero && portfolioData.hero.description) {
                    document.getElementById('hero-description').textContent = portfolioData.hero.description;
                }
                
                // Update about section
                if (portfolioData.about && portfolioData.about.bio) {
                    document.getElementById('about-bio').textContent = portfolioData.about.bio;
                }
                
                // Update social links
                if (portfolioData.about) {
                    const socialLinks = document.querySelectorAll('#social-links a, .footer-social a, .contact-info .social-links a');
                    socialLinks[0].href = portfolioData.about.youtubeLink || '#';
                    socialLinks[1].href = portfolioData.about.githubLink || '#';
                    socialLinks[2].href = portfolioData.about.linkedinLink || '#';
                }
                
                // Update profile photos
                const profilePhotos = document.querySelectorAll('.profile-img, .hero-image img');
                profilePhotos.forEach(img => {
                    img.src = portfolioData.profile.photo || 'profile.jpg';
                });
                
                // Update skills
                updateSkillsSection(portfolioData.skills);
                
                // Update projects
                updateProjectsSection(portfolioData.projects);
                
                // Update certificates
                updateCertificatesSection(portfolioData.certificates);
            }
        }
    };
    
    function updateSkillsSection(skills) {
        if (!skills) return;
        
        // Clear existing skills
        document.querySelectorAll('.skill-category').forEach(category => {
            const categoryName = category.querySelector('h3').textContent.toLowerCase();
            let skillData = [];
            
            if (categoryName.includes('networking')) {
                skillData = skills.networking || [];
            } else if (categoryName.includes('security')) {
                skillData = skills.security || [];
            } else if (categoryName.includes('programming')) {
                skillData = skills.programming || [];
            }
            
            // Clear existing skill bars
            category.querySelector('.skill-bars').innerHTML = '';
            
            // Add new skill bars
            skillData.forEach(skill => {
                const skillBar = `
                    <div class="skill-bar">
                        <p>${skill.name}</p>
                        <div class="progress">
                            <div class="progress-bar" style="width: ${skill.level}%"></div>
                        </div>
                    </div>
                `;
                category.querySelector('.skill-bars').insertAdjacentHTML('beforeend', skillBar);
            });
        });
    }
    
    function updateProjectsSection(projects) {
        if (!projects) return;
        
        const projectsGrid = document.querySelector('.projects-grid');
        projectsGrid.innerHTML = '';
        
        projects.forEach(project => {
            const categoryClass = project.categories.join(' ');
            
            const projectHTML = `
                <div class="project-item" data-category="${categoryClass}">
                    <div class="project-img glass-card">
                        <img src="${project.image || 'projects/default.jpg'}" alt="${project.name}" class="project-thumbnail">
                    </div>
                    <div class="project-info">
                        <h3>${project.name}</h3>
                        <p class="project-tech">${project.tech}</p>
                        <p class="project-desc">${project.desc}</p>
                        <a href="#" class="project-link">View Project <i class="fas fa-arrow-right"></i></a>
                    </div>
                </div>
            `;
            projectsGrid.insertAdjacentHTML('beforeend', projectHTML);
        });
        
        // Reinitialize project filtering
        initializeProjectFiltering();
    }
    
    function updateCertificatesSection(certificates) {
        if (!certificates) return;
        
        const timeline = document.querySelector('.timeline');
        timeline.innerHTML = '';
        
        certificates.forEach((cert, index) => {
            const timelineItem = `
                <div class="timeline-item ${index % 2 === 0 ? '' : 'timeline-item-odd'}">
                    <div class="timeline-content glass-card">
                        <h3>${cert.name}</h3>
                        <p class="timeline-date">${cert.date}</p>
                        <p class="timeline-subtitle">${cert.issuer}</p>
                    </div>
                </div>
            `;
            timeline.insertAdjacentHTML('beforeend', timelineItem);
        });
    }
    
    function initializeProjectFiltering() {
        const filterBtns = document.querySelectorAll('.filter-btn');
        const projectItems = document.querySelectorAll('.project-item');
        
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Update active button
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                const filter = btn.getAttribute('data-filter');
                
                projectItems.forEach(item => {
                    const categories = item.getAttribute('data-category').split(' ');
                    
                    if (filter === 'all' || categories.includes(filter)) {
                        item.style.display = 'block';
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'translateY(0)';
                        }, 50);
                    } else {
                        item.style.opacity = '0';
                        item.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }
    
    // Mobile Menu Toggle
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    
    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        burger.classList.toggle('toggle');
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            burger.classList.remove('toggle');
        });
    });
    
    // Navigation scroll effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Active nav link based on scroll position
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });
    
    // Animate skill bars on scroll
    const skillBars = document.querySelectorAll('.progress-bar');
    
    const animateSkills = () => {
        skillBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0%';
            setTimeout(() => {
                bar.style.width = width;
            }, 500);
        });
    };
    
    // Trigger animation when skills section is in view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkills();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    const skillsSection = document.querySelector('.skills');
    if (skillsSection) {
        observer.observe(skillsSection);
    }
    
    // Animate timeline items on scroll
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    
    timelineItems.forEach(item => {
        timelineObserver.observe(item);
    });
    
    // Form submission (prevent default for demo)
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.textContent = 'Message Sent!';
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    this.reset();
                }, 1500);
            }, 1000);
        });
    }
    
    // Initialize project items with animation
    setTimeout(() => {
        document.querySelectorAll('.project-item').forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, 200 * index);
        });
    }, 500);
    
    // Load portfolio data
    loadPortfolioData();
});