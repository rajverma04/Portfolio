import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt, FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

export default function Resume() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200 p-6">
      {/* A4 Paper Container */}
      <div className="bg-white text-black w-[794px] h-[1123px] shadow-xl p-10 font-serif leading-relaxed text-[15px]">
        {/* ===== Header ===== */}
        <header className="border-b-2 border-gray-800 pb-2 mb-4">
          <h1 className="text-4xl font-bold">Raj Kumar Verma</h1>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[14px] mt-2 text-gray-800">
            <div className="flex items-center gap-1">
              <MdOutlineEmail className="text-gray-700" />
              <span>rajkumargrd56@gmail.com</span>
            </div>
            <div className="flex items-center gap-1">
              <FaPhoneAlt className="text-gray-700" />
              <span>+91 87894 29404</span>
            </div>
            <div className="flex items-center gap-1">
              <IoLogoLinkedin className="text-gray-700" />
              <span>rajverma04</span>
            </div>
            <div className="flex items-center gap-1">
              <FaGithub className="text-gray-700" />
              <span>rajverma04</span>
            </div>
            <div className="flex items-center gap-1">
              <FaLocationDot className="text-gray-700" />
              <span>Giridih, Jharkhand</span>
            </div>
          </div>
        </header>

        {/* ===== Objective ===== */}
        <section className="mb-4">
          <h2 className="font-bold text-[17px] mb-1 underline">OBJECTIVE</h2>
          <p>
            Aspiring full-stack web developer with a strong foundation in computer science
            and hands-on experience in both frontend and backend development. Always passionate
            about learning new technologies and applying them to build scalable, user-focused
            web applications. Driven to innovate and contribute to impactful tech solutions.
          </p>
        </section>

        {/* ===== Education ===== */}
        <section className="mb-4">
          <h2 className="font-bold text-[17px] mb-2 underline">EDUCATION</h2>
          <div className="flex justify-between">
            <div>
              <p className="font-semibold">
                Computer Science Engineering – Bachelor of Technology
              </p>
              <p className="italic">
                Lovely Professional University – Phagwara, Punjab
              </p>
            </div>
            <p>Aug 23 – Present</p>
          </div>
          <p>CGPA: <strong>7.64</strong></p>

          <div className="flex justify-between mt-2">
            <div>
              <p className="font-semibold">Higher Secondary Certificate</p>
              <p className="italic">B N Saha DAV Pub School – Giridih, Jharkhand</p>
            </div>
            <p>Apr 20 – Feb 22</p>
          </div>
          <p>Percentage: <strong>83%</strong></p>

          <div className="flex justify-between mt-2">
            <div>
              <p className="font-semibold">Secondary School Certificate</p>
              <p className="italic">B N Saha DAV Pub School – Giridih, Jharkhand</p>
            </div>
            <p>Apr 19 – Feb 20</p>
          </div>
          <p>Percentage: <strong>82%</strong></p>
        </section>

        {/* ===== Skills ===== */}
        <section className="mb-4">
          <h2 className="font-bold text-[17px] mb-2 underline">SKILLS</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>Languages:</strong> C++, JavaScript, Python, Java
            </li>
            <li>
              <strong>Frameworks & Libraries:</strong> React.js, Node.js, Tailwind CSS, Bootstrap
            </li>
            <li>
              <strong>Database:</strong> MongoDB, MySQL
            </li>
            <li>
              <strong>Platform & Other:</strong> Git & GitHub, VS Code
            </li>
            <li>
              <strong>Soft Skills:</strong> Quick Learner, Problem Solving, Team Management, Project Management
            </li>
          </ul>
        </section>

        {/* ===== Certifications ===== */}
        <section className="mb-4">
          <h2 className="font-bold text-[17px] mb-2 underline">CERTIFICATION</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>
              NPTEL Certification in Cloud Computing – Elite Category, issued by IIT Kharagpur <span className="float-right">Apr 2025</span>
            </li>
            <li>
              Charitable Trust – Yuva Sanskriti Charitable Trust <span className="float-right">June – July 2024</span>
            </li>
            <li>
              C++ Programming Certificate – NeoColab <span className="float-right">Dec 2024</span>
            </li>
          </ul>
        </section>

        {/* ===== Projects & Events ===== */}
        <section>
          <h2 className="font-bold text-[17px] mb-2 underline">PROJECTS & EVENTS</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Swiggy Clone –</strong> Developed web application using Swiggy live API 
              <span className="float-right">Oct 2025</span>
            </li>
            <li>
              <strong>GST-INVOICE GENERATOR –</strong> Developed web app using React.js & MongoDB, 
              deployed at{" "}
              <a
                href="https://gstinvoice.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                gstinvoice.vercel.app
              </a>
              <span className="float-right">Aug 2025</span>
            </li>
            <li>
              <strong>AI CHATBOT –</strong> Personalized Learning Platform
              <span className="float-right">Apr 2025</span>
            </li>
            <li>
              <strong>File Distributed System –</strong> Developed a web-based DFS using Flask & C++
              <span className="float-right">Apr 2025</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
