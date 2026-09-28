
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
            <h2 className="text-xl opacity-90">Web Developer & UI/UX Designer</h2>
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
            <a
              href="https://rabihaoun.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-[#51e2f5] underline-offset-2"
            >
              rabihaoun.netlify.app
            </a>
          </div>
        </div>
      </header>

      <div className="p-8 space-y-8">
        {/* Summary */}
        <section>
          <h3 className="text-2xl font-bold text-gray-800 border-b-2 border-[#51e2f5] pb-2 mb-4">
            Professional Summary
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Web developer and UI/UX designer focused on building fast, accessible, and visually
            polished web applications. With a foundation in computer programming and web
            development, I design and build responsive interfaces, wireframes, and interactive
            experiences that balance clean aesthetics with solid engineering. Comfortable across
            the full stack, from modern front-end frameworks to RESTful APIs and databases.
          </p>
        </section>

        {/* Experience */}
        <section>
          <h3 className="text-2xl font-bold text-gray-800 border-b-2 border-[#51e2f5] pb-2 mb-4">
            Experience
          </h3>

          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">Full Stack Web Developer</h4>
                  <p className="text-[#51e2f5] font-medium">Budget Tracker - Personal Finance Web Application</p>
                </div>
                <span className="text-gray-600">2024</span>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Built a responsive personal finance web app with React, TypeScript, and Node.js</li>
                <li>Implemented real-time data sync, drag-and-drop UI, and interactive analytics dashboards</li>
                <li>Designed the PostgreSQL database schema and RESTful API with 95% test coverage</li>
                <li>Deployed on Replit with automatic scaling and HTTPS configuration</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">Frontend Developer & UI Designer</h4>
                  <p className="text-[#51e2f5] font-medium">Islamic Sticker Haven - Cultural E-commerce Store</p>
                </div>
                <span className="text-gray-600">2023</span>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Designed and built a culturally-conscious e-commerce storefront with React</li>
                <li>Implemented product customization flows that guide users through personalization</li>
                <li>Used Shadcn UI and Tailwind CSS to create a cohesive, accessible design system</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">Web Developer & UX Designer</h4>
                  <p className="text-[#51e2f5] font-medium">RenTools - Community Tool-Sharing Platform</p>
                </div>
                <span className="text-gray-600">2023</span>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Developed a community platform connecting tool owners with renters</li>
                <li>Designed user flows that build trust and make listing, browsing, and contact frictionless</li>
                <li>Created responsive layouts that work seamlessly across mobile, tablet, and desktop</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section>
          <h3 className="text-2xl font-bold text-gray-800 border-b-2 border-[#51e2f5] pb-2 mb-4">
            Technical Skills
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Frontend Development</h4>
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Tailwind CSS', 'HTML/CSS', 'JavaScript ES6+', 'Responsive Design'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-[#51e2f5]/10 text-[#51e2f5] rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Backend & Databases</h4>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'PostgreSQL', 'RESTful APIs', 'MongoDB', 'Express', 'Supabase'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-[#51e2f5]/10 text-[#51e2f5] rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">UI/UX & Design</h4>
              <div className="flex flex-wrap gap-2">
                {['Figma', 'Adobe Creative Suite', 'Wireframing & Prototyping', 'Design Systems', 'Accessibility (WCAG)', 'User Research'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-[#51e2f5]/10 text-[#51e2f5] rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Workflow & Tools</h4>
              <div className="flex flex-wrap gap-2">
                {['Git/GitHub', 'Agile', 'Testing', 'CI/CD', 'Performance Optimization', 'Web Deployment'].map((skill) => (
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
            Featured Projects
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-gray-800 mb-2">Budget Tracker</h4>
              <p className="text-gray-600 text-sm mb-2">Full-Stack Web Application</p>
              <p className="text-gray-700 text-sm">
                Personal finance web app with real-time analytics, drag-and-drop budgeting, and a PostgreSQL-backed REST API.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-gray-800 mb-2">RenTools Platform</h4>
              <p className="text-gray-600 text-sm mb-2">Community Web Application</p>
              <p className="text-gray-700 text-sm">
                Tool-sharing platform built with trust-focused UX and fully responsive layouts across all devices.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-gray-800 mb-2">Islamic Sticker Haven</h4>
              <p className="text-gray-600 text-sm mb-2">Cultural E-commerce Platform</p>
              <p className="text-gray-700 text-sm">
                E-commerce storefront with product customization flows and a reusable, accessible component system.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-gray-800 mb-2">Portfolio Website</h4>
              <p className="text-gray-600 text-sm mb-2">Interactive Developer Portfolio</p>
              <p className="text-gray-700 text-sm">
                Animated, theme-aware portfolio with scroll navigation, micro-interactions, and case study pages.
              </p>
            </div>
          </div>
        </section>

        {/* Education */}
        <section>
          <h3 className="text-2xl font-bold text-gray-800 border-b-2 border-[#51e2f5] pb-2 mb-4">
            Education & Certificates
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
          "Building digital experiences with purpose"
        </div>
      </footer>
    </div>
  );
};

export default Resume;
