import React from "react";

export default function Education() {
  const educationData = [
    {
      title: "Bachelor of Technology - B.Tech (CSE)",
      institution: "Lovely Professional University, Punjab",
      duration: "Aug 2023 – Present",
      grade: "CGPA: 7.64",
    },
    {
      title: "Higher Secondary Certificate (XII)",
      institution: "B N Saha DAV Pub School, Giridih, Jharkhand",
      duration: "Apr 2020 – Feb 2022",
      grade: "Percentage: 83%",
    },
    {
      title: "Secondary School Certificate (X)",
      institution: "B N Saha DAV Pub School, Giridih, Jharkhand",
      duration: "Apr 2019 – Feb 2020",
      grade: "Percentage: 82%",
    },
  ];

  return (
    <section
      id="education"
      className="min-h-screen flex flex-col items-center justify-center text-white px-6 py-12"
    >
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-[#7dd3fc]">
        Education
      </h2>
      <p className="text-gray-400 mb-10 text-center max-w-2xl">
        My education journey has been all about learning, exploring, and building with technology.
      </p>

      {/* Education Cards */}
      <div className="flex flex-wrap justify-center gap-6 max-w-6xl">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="bg-[#0f172a] border border-[#7dd3fc]/50 rounded-xl shadow-[0_0_20px_rgba(125,211,252,0.3)] 
                       p-6 w-[320px] sm:w-[340px] md:w-[360px] hover:shadow-[0_0_30px_rgba(125,211,252,0.5)] 
                       transition-all duration-300"
          >
            <h3 className="text-lg sm:text-xl font-semibold text-[#7dd3fc] mb-1">
              {edu.title}
            </h3>
            <p className="text-sm text-gray-300 italic mb-3">{edu.institution}</p>
            <p className="text-sm text-gray-400 mb-2">{edu.duration}</p>
            <p className="text-sm font-medium">
              <span className="text-gray-400">Grade: </span>
              <span className="text-white">{edu.grade}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
