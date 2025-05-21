import Link from 'next/link'
import TikTokEmbed from './components/TikTokEmbed'
import SkillTree from './components/SkillTree'
import Timeline from './components/Timeline'
import { skills, experience, education, achievements } from './data/profile'

export default function Home() {
  return (
    <main className="min-h-screen">
      <TikTokEmbed />
      
      {/* Navigation */}
      <nav className="fixed w-full glass-nav z-50">
        <div className="modern-container">
          <div className="flex justify-between h-20 items-center">
            <Link href="/" className="text-2xl font-bold gradient-text">
              Youssef Alkhodary
            </Link>
            <div className="hidden md:flex items-center space-x-1">
              <Link href="#about" className="modern-nav-link">About</Link>
              <Link href="#skills" className="modern-nav-link">Skills</Link>
              <Link href="#experience" className="modern-nav-link">Experience</Link>
              <Link href="#videos" className="modern-nav-link">Videos</Link>
              <Link href="#contact" className="modern-nav-link">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="section-spacing pt-32">
        <div className="modern-container">
          <div className="text-center animate-fade-in">
            <h1 className="modern-heading mb-6">
              <span className="block">Youssef Alkhodary</span>
              <span className="block mt-4 gradient-text">Content Creator & Digital Media Specialist</span>
            </h1>
            <p className="modern-text max-w-3xl mx-auto mb-12">
              Creating engaging content that connects with audiences across multiple platforms. 
              Specializing in YouTube, TikTok, and Instagram content creation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://www.youtube.com/@youssefalkhodary"
                target="_blank"
                rel="noopener noreferrer"
                className="social-button bg-red-600 hover:bg-red-700"
              >
                YouTube
              </a>
              <a
                href="https://www.tiktok.com/@1youssefalkhodary"
                target="_blank"
                rel="noopener noreferrer"
                className="social-button bg-black hover:bg-gray-900"
              >
                TikTok
              </a>
              <a
                href="https://www.instagram.com/_youssefelkhodary/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-button bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="section-spacing bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="modern-container">
          <h2 className="modern-subheading text-center mb-16">Achievements</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="modern-card p-8 hover-card">
                <h3 className="text-2xl font-semibold mb-4 gradient-text">{achievement.title}</h3>
                <p className="modern-text mb-6">{achievement.description}</p>
                <div className="grid grid-cols-3 gap-4">
                  {achievement.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="text-center">
                      <div className="text-2xl font-bold gradient-text">{metric.value}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-spacing">
        <div className="modern-container">
          <h2 className="modern-subheading text-center mb-16">Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <SkillTree skills={[skills.contentCreation, skills.technicalSkills]} title="Professional Skills" />
            <SkillTree skills={[skills.softSkills]} title="Soft Skills" />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-spacing bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="modern-container">
          <div className="grid md:grid-cols-2 gap-8">
            <Timeline items={experience} title="Professional Experience" />
            <Timeline items={education} title="Education & Training" />
          </div>
        </div>
      </section>

      {/* Video Portfolio Section */}
      <section id="videos" className="section-spacing">
        <div className="modern-container">
          <h2 className="modern-subheading text-center mb-16">Featured Videos</h2>
          <div className="modern-grid md:grid-cols-2 lg:grid-cols-3">
            {/* YouTube Videos */}
            <div className="video-container">
              <iframe
                className="w-full aspect-video"
                src="https://www.youtube.com/embed/jgCPqPBJKU4"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="video-container">
              <iframe
                className="w-full aspect-video"
                src="https://www.youtube.com/embed/Yj6vIJQ4toI"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            {/* TikTok Videos */}
            <div className="video-container">
              <blockquote
                className="tiktok-embed"
                cite="https://www.tiktok.com/@1youssefalkhodary/video/7478072962797620497"
                data-video-id="7478072962797620497"
              >
                <section></section>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-spacing bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="modern-container">
          <h2 className="modern-subheading text-center mb-16">Get in Touch</h2>
          <div className="max-w-2xl mx-auto text-center">
            <p className="modern-text mb-12">
              Interested in collaborating or have a project in mind? Feel free to reach out through any of my social media platforms.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <a
                href="https://www.youtube.com/@youssefalkhodary"
                target="_blank"
                rel="noopener noreferrer"
                className="modern-nav-link"
              >
                YouTube
              </a>
              <a
                href="https://www.tiktok.com/@1youssefalkhodary"
                target="_blank"
                rel="noopener noreferrer"
                className="modern-nav-link"
              >
                TikTok
              </a>
              <a
                href="https://www.instagram.com/_youssefelkhodary/"
                target="_blank"
                rel="noopener noreferrer"
                className="modern-nav-link"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-200/50 dark:border-gray-800/50">
        <div className="modern-container text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Youssef Alkhodary. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  )
}
