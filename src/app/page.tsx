import Link from 'next/link'
import TikTokEmbed from './components/TikTokEmbed'

export default function Home() {
  return (
    <main className="min-h-screen">
      <TikTokEmbed />
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="text-xl font-bold">
                Youssef Alkhodary
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                <Link href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  About
                </Link>
                <Link href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Skills
                </Link>
                <Link href="#videos" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Videos
                </Link>
                <Link href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              <span className="block">Youssef Alkhodary</span>
              <span className="block text-blue-600 dark:text-blue-400 mt-2">Content Creator & Digital Media Specialist</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Creating engaging content that connects with audiences across multiple platforms. 
              Specializing in YouTube, TikTok, and Instagram content creation.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <a
                href="https://www.youtube.com/@youssefalkhodary"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors"
              >
                YouTube
              </a>
              <a
                href="https://www.tiktok.com/@1youssefalkhodary"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-gray-800 transition-colors"
              >
                TikTok
              </a>
              <a
                href="https://www.instagram.com/_youssefelkhodary/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 dark:text-gray-300">
                I am a passionate content creator dedicated to producing engaging and meaningful content across various social media platforms. 
                My work focuses on creating authentic connections with my audience while delivering valuable and entertaining content.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                With a strong presence on YouTube, TikTok, and Instagram, I've built a community of engaged followers who appreciate 
                my unique perspective and creative approach to content creation.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2">Content Creation</h3>
                <p className="text-gray-600 dark:text-gray-300">Creating engaging videos and posts that resonate with audiences</p>
              </div>
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2">Social Media</h3>
                <p className="text-gray-600 dark:text-gray-300">Building and managing strong social media presence</p>
              </div>
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2">Community Building</h3>
                <p className="text-gray-600 dark:text-gray-300">Fostering engaged and interactive communities</p>
              </div>
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2">Digital Strategy</h3>
                <p className="text-gray-600 dark:text-gray-300">Developing effective content strategies</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Portfolio Section */}
      <section id="videos" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Videos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* YouTube Videos */}
            <div className="aspect-video">
              <iframe
                className="w-full h-full rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/jgCPqPBJKU4"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="aspect-video">
              <iframe
                className="w-full h-full rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/Yj6vIJQ4toI"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            {/* TikTok Videos */}
            <div className="aspect-[9/16]">
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
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Interested in collaborating or have a project in mind? Feel free to reach out through any of my social media platforms.
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="https://www.youtube.com/@youssefalkhodary"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors"
              >
                YouTube
              </a>
              <a
                href="https://www.tiktok.com/@1youssefalkhodary"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
              >
                TikTok
              </a>
              <a
                href="https://www.instagram.com/_youssefelkhodary/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto text-center text-gray-600 dark:text-gray-400">
          <p>© {new Date().getFullYear()} Youssef Alkhodary. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
