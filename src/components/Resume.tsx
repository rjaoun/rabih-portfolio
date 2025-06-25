
import React from 'react';
import { Download, Mail, Phone, MapPin, Globe, Github, Linkedin } from 'lucide-react';

const Resume = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-4xl mx-auto bg-white text-gray-900 shadow-2xl print:shadow-none print:max-w-none">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#51e2f5] to-[#2dd4bf] text-white p-8 print:bg-gray-800">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-4xl font-bold mb-2">Rabih Aoun</h1>
            <h2 className="text-xl opacity-90">Vibe Developer & Digital Experience Creator</h2>
          </div>
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-all print:hidden"
          >
            <Download size={16} />
            Download PDF
          </button>
        </div>
        
        <div className="flex flex-wrap gap-4 mt-6 text-sm">
          <div className="flex items-center gap-1">
            <Mail size={14} />
            <span>rjaoun@gmail.com</span>
          </div>
          <div className="flex items-center gap-1">
            <Phone size={14} />
            <span>(647) 569-8471</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin size={14} />
            <span>Waterloo, ON</span>
          </div>
          <div className="flex items-center gap-1">
            <Globe size={14} />
            <span>rabihaoun.com</span>
          </div>
        </div>
      </header>

      <div className="p-8 space-y-8">
        {/* Summary */}
        <section>
          <h3 className="text-2xl font-bold text-gray-800 border-b-2 border-[#51e2f5] pb-2 mb-4">
            Vibe Developer Philosophy
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Passionate vibe developer who creates digital experiences that don't just function—they resonate. 
            With a foundation in computer programming and web development, I specialize in crafting applications 
            that blend aesthetic appeal with seamless functionality. My approach combines technical precision 
            with creative vision to build projects that capture the right energy and connect with users on a deeper level.
          </p>
        </section>

        {/* Experience */}
        <section>
          <h3 className="text-2xl font-bold text-gray-800 border-b-2 border-[#51e2f5] pb-2 mb-4">
            Creative Development Journey
          </h3>
          
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">Vibe-Focused Full Stack Developer</h4>
                  <p className="text-[#51e2f5] font-medium">Budget Tracker - Personal Finance Revolution</p>
                </div>
                <span className="text-gray-600">2024</span>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Engineered a vibe-driven personal finance app that makes budgeting feel intuitive and engaging</li>
                <li>Crafted real-time data visualization with React, TypeScript, and Node.js that tells your money story</li>
                <li>Designed drag-and-drop interactions that transform complex financial data into playful experiences</li>
                <li>Deployed with seamless scaling on Replit, ensuring the vibe never breaks</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">Creative Frontend Architect</h4>
                  <p className="text-[#51e2f5] font-medium">Islamic Sticker Haven - Cultural E-commerce</p>
                </div>
                <span className="text-gray-600">2023</span>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Built culturally-conscious e-commerce platform with React and modern design principles</li>
                <li>Implemented customization features that let creativity flow through user interactions</li>
                <li>Utilized Shadcn UI and Tailwind CSS for a cohesive, accessible design system</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">Digital Experience Creator</h4>
                  <p className="text-[#51e2f5] font-medium">RenTools - Community Connection Platform</p>
                </div>
                <span className="text-gray-600">2023</span>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Developed community-driven platform connecting tool owners with renters</li>
                <li>Focused on user experience that builds trust and facilitates meaningful connections</li>
                <li>Created responsive design that works seamlessly across all devices and contexts</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section>
          <h3 className="text-2xl font-bold text-gray-800 border-b-2 border-[#51e2f5] pb-2 mb-4">
            Vibe Tech Stack
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Creative Frontend</h4>
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Tailwind CSS', 'Three.js', 'WebGL', 'Framer Motion'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-[#51e2f5]/10 text-[#51e2f5] rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Backend & Data Flow</h4>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'PostgreSQL', 'RESTful API', 'MongoDB', 'Express', 'Supabase'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-[#51e2f5]/10 text-[#51e2f5] rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Design & UX Vibes</h4>
              <div className="flex flex-wrap gap-2">
                {['Figma', 'Adobe Creative Suite', 'UI/UX Design', 'Responsive Design', 'Accessibility'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-[#51e2f5]/10 text-[#51e2f5] rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Development Workflow</h4>
              <div className="flex flex-wrap gap-2">
                {['Git', 'Agile', 'Testing', 'CI/CD', 'Performance Optimization'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-[#51e2f5]/10 text-[#51e2f5] rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section>
          <h3 className="text-2xl font-bold text-gray-800 border-b-2 border-[#51e2f5] pb-2 mb-4">
            Vibe Projects That Hit Different
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-gray-800 mb-2">Budget Tracker</h4>
              <p className="text-gray-600 text-sm mb-2">Full-Stack Financial Vibe App</p>
              <p className="text-gray-700 text-sm">
                Personal finance reimagined with intuitive design and real-time analytics that make budgeting feel natural.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-gray-800 mb-2">RenTools Platform</h4>
              <p className="text-gray-600 text-sm mb-2">Community Connection Web App</p>
              <p className="text-gray-700 text-sm">
                Bridging communities through tool sharing, built with trust and user experience at the core.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-gray-800 mb-2">Islamic Sticker Haven</h4>
              <p className="text-gray-600 text-sm mb-2">Cultural E-commerce Platform</p>
              <p className="text-gray-700 text-sm">
                Culturally-conscious e-commerce with customization features that celebrate identity and creativity.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-gray-800 mb-2">Portfolio Showcase</h4>
              <p className="text-gray-600 text-sm mb-2">Interactive Developer Portfolio</p>
              <p className="text-gray-700 text-sm">
                Dynamic portfolio showcasing development philosophy through immersive digital experiences.
              </p>
            </div>
          </div>
        </section>

        {/* Education */}
        <section>
          <h3 className="text-2xl font-bold text-gray-800 border-b-2 border-[#51e2f5] pb-2 mb-4">
            Learning Journey & Credentials
          </h3>
          
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">Web Development Certificate</h4>
                  <p className="text-[#51e2f5] font-medium">Humber College</p>
                </div>
                <span className="text-gray-600">2018-2019</span>
              </div>
              <p className="text-gray-700 text-sm ml-4">
                Specialized in modern web technologies, user experience design, and responsive development practices.
              </p>
            </div>
            
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">Computer Programming Diploma</h4>
                  <p className="text-[#51e2f5] font-medium">Seneca College</p>
                </div>
                <span className="text-gray-600">2014-2017</span>
              </div>
              <p className="text-gray-700 text-sm ml-4">
                Comprehensive programming foundation covering software development, database management, and system architecture.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 p-6 print:bg-gray-100">
        <div className="flex justify-center space-x-6">
          <div className="flex items-center gap-1 text-gray-600">
            <Github size={14} />
            <span className="text-sm">github.com/rjaoun</span>
          </div>
          <div className="flex items-center gap-1 text-gray-600">
            <Linkedin size={14} />
            <span className="text-sm">linkedin.com/in/rabih-aoun</span>
          </div>
        </div>
        <div className="text-center mt-2 text-xs text-gray-500">
          "Building digital experiences that vibe with purpose"
        </div>
      </footer>
    </div>
  );
};

export default Resume;
