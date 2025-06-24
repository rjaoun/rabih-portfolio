
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
            <h2 className="text-xl opacity-90">Full Stack Developer & Digital Designer</h2>
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
            <span>contact@rabihaoun.dev</span>
          </div>
          <div className="flex items-center gap-1">
            <Phone size={14} />
            <span>+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin size={14} />
            <span>Your Location</span>
          </div>
          <div className="flex items-center gap-1">
            <Globe size={14} />
            <span>portfolio-url.com</span>
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
            Digital designer and developer with over 5 years of experience creating exceptional digital experiences. 
            Specializes in blending creative design with technical implementation to build projects that stand out. 
            Focused on innovation, attention to detail, and creating meaningful connections through digital interfaces.
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
                  <h4 className="text-lg font-semibold text-gray-800">Full Stack Developer</h4>
                  <p className="text-[#51e2f5] font-medium">Budget Tracker Project</p>
                </div>
                <span className="text-gray-600">2024</span>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Built responsive personal finance app with React, TypeScript, and Node.js</li>
                <li>Implemented real-time data sync, drag-and-drop UI, and interactive analytics</li>
                <li>Designed PostgreSQL database schema and RESTful API with 95% test coverage</li>
                <li>Deployed on Replit with automatic scaling and HTTPS configuration</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">Frontend Developer</h4>
                  <p className="text-[#51e2f5] font-medium">Islamic Sticker Haven</p>
                </div>
                <span className="text-gray-600">2023</span>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Developed e-commerce platform with React, Tailwind CSS, and TypeScript</li>
                <li>Implemented customization options and responsive design</li>
                <li>Utilized Shadcn UI for consistent component library</li>
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
                {['React', 'TypeScript', 'Tailwind CSS', 'Three.js', 'WebGL'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-[#51e2f5]/10 text-[#51e2f5] rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Backend & Database</h4>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'PostgreSQL', 'RESTful API', 'MongoDB', 'Express'].map((skill) => (
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
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-800 mb-2">Budget Tracker</h4>
              <p className="text-gray-600 text-sm mb-2">Full-Stack Application</p>
              <p className="text-gray-700 text-sm">
                Comprehensive personal finance app with real-time data sync and interactive analytics.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-800 mb-2">RenTools Website</h4>
              <p className="text-gray-600 text-sm mb-2">Web Application</p>
              <p className="text-gray-700 text-sm">
                Platform connecting tool owners with people who need to rent equipment.
              </p>
            </div>
          </div>
        </section>

        {/* Education */}
        <section>
          <h3 className="text-2xl font-bold text-gray-800 border-b-2 border-[#51e2f5] pb-2 mb-4">
            Education & Certifications
          </h3>
          
          <div>
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="text-lg font-semibold text-gray-800">Computer Science Degree</h4>
                <p className="text-[#51e2f5] font-medium">University Name</p>
              </div>
              <span className="text-gray-600">Year</span>
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
      </footer>
    </div>
  );
};

export default Resume;
