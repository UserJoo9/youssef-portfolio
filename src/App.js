
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Youtube, Instagram, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function YoussefPortfolio() {
  const [lang, setLang] = useState("ar");
  const isAr = lang === "ar";

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <header className="p-6 text-center bg-gradient-to-r from-blue-900 to-purple-900">
        <img
          src="/assets/youssef-profile.jpg"
          alt="Youssef Alkhodary"
          className="w-32 h-32 mx-auto rounded-full border-4 border-white mb-4"
        />
        <h1 className="text-4xl font-bold">يوسف الخضرية</h1>
        <p className="text-lg mt-2">
          {isAr ? "مهندس شبكات وأمن سيبراني | صانع محتوى تقني" : "Network & Cybersecurity Engineer | Tech Content Creator"}
        </p>
        <Button onClick={() => setLang(isAr ? "en" : "ar")} className="mt-4">
          {isAr ? "English" : "العربية"}
        </Button>
      </header>

      <section className="grid md:grid-cols-2 gap-6 p-6">
        <Card className="bg-zinc-900 border border-zinc-700 shadow-xl rounded-2xl">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">{isAr ? "من أنا" : "About Me"}</h2>
            <p>
              {isAr
                ? "أنا يوسف عبد الستار محمد، مهندس شبكات وأمن سيبراني، بخبرة تمتد لأكثر من 6 سنوات في إنشاء محتوى تعليمي على يوتيوب وتيك توك، متخصص في الشبكات، الأنظمة، البرمجة، والسايبر سيكيورتي."
                : "I'm Youssef Abd-AlSattar, a Network & Cybersecurity Engineer with 6+ years of experience in educational content creation on YouTube and TikTok, specializing in networks, systems, coding, and ethical hacking."}
            </p>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900 border border-zinc-700 shadow-xl rounded-2xl">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">{isAr ? "المهارات" : "Skills"}</h2>
            <ul className="list-disc pl-4">
              <li>{isAr ? "تصميم وإدارة الشبكات" : "Network Design & Management"}</li>
              <li>{isAr ? "تحليل المخاطر والثغرات" : "Threat & Risk Analysis"}</li>
              <li>Python, C/C++, Java, HTML/CSS/JS</li>
              <li>Linux (Kali, Ubuntu), Windows Server</li>
              <li>Premiere, Final Cut Pro</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900 border border-zinc-700 shadow-xl rounded-2xl md:col-span-2">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">{isAr ? "فيديوهاتي المميزة" : "Featured Videos"}</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <iframe className="w-full h-64 rounded-xl" src="https://www.youtube.com/embed/jgCPqPBJKU4" title="YouTube Video 1" allowFullScreen></iframe>
              <iframe className="w-full h-64 rounded-xl" src="https://www.youtube.com/embed/Yj6vIJQ4toI" title="YouTube Video 2" allowFullScreen></iframe>
              <iframe className="w-full h-64 rounded-xl" src="https://www.tiktok.com/embed/v2/7478072962797620497" title="TikTok 1" allowFullScreen></iframe>
              <iframe className="w-full h-64 rounded-xl" src="https://www.tiktok.com/embed/v2/7467319800482614535" title="TikTok 2" allowFullScreen></iframe>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900 border border-zinc-700 shadow-xl rounded-2xl md:col-span-2">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Portfolio</h2>
            <ul className="space-y-2">
              <li><strong>CCNA R&S:</strong> Cisco Certified</li>
              <li><strong>Network Security Course:</strong> ITI 2023</li>
              <li><strong>Security Project:</strong> Threat analysis & firewall implementation</li>
              <li><strong>Web Development Courses:</strong> HTML, CSS (ITI)</li>
              <li><strong>Programming & IoT:</strong> Arduino, Big Data, AI Intro</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900 border border-zinc-700 shadow-xl rounded-2xl md:col-span-2">
          <CardContent className="p-6 space-y-2">
            <h2 className="text-2xl font-semibold mb-2">{isAr ? "تواصل معي" : "Contact"}</h2>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2"><Phone size={20} /> +20 101 408 7701</div>
              <div className="flex items-center gap-2"><Mail size={20} /> JooDevo890@gmail.com</div>
              <div className="flex items-center gap-2"><Youtube size={20} /> <a href="https://www.youtube.com/@youssefalkhodary" target="_blank">YouTube</a></div>
              <div className="flex items-center gap-2"><Instagram size={20} /> <a href="https://www.instagram.com/_youssefelkhodary/" target="_blank">Instagram</a></div>
              <div className="flex items-center gap-2"><ShieldCheck size={20} /> <a href="https://www.tiktok.com/@1youssefalkhodary" target="_blank">TikTok</a></div>
            </div>
          </CardContent>
        </Card>
      </section>

      <footer className="text-center text-sm text-zinc-400 p-4">
        © {new Date().getFullYear()} يوسف الخضرية - جميع الحقوق محفوظة / All rights reserved
      </footer>
    </div>
  );
}
