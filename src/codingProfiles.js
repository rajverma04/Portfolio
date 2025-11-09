import React from "react";
import { SiLeetcode, SiGeeksforgeeks, SiHackerrank } from "react-icons/si";

export default function CodingProfiles() {
  const codingProfiles = [
    {
      platform: "LeetCode",
      link: "https://leetcode.com/u/rajverma04/",
      icon: <SiLeetcode className="text-6xl text-[#FFA116] group-hover:scale-110 transition-transform duration-300" />,
      tooltip: "View my LeetCode Profile",
    },
    {
      platform: "GeeksforGeeks",
      link: "https://auth.geeksforgeeks.org/user/rajverma04/practice/",
      icon: <SiGeeksforgeeks className="text-6xl text-[#00A86B] group-hover:scale-110 transition-transform duration-300" />,
      tooltip: "View my GeeksforGeeks Profile",
    },
    {
      platform: "HackerRank",
      link: "https://www.hackerrank.com/rajverma04",
      icon: <SiHackerrank className="text-6xl text-[#2EC866] group-hover:scale-110 transition-transform duration-300" />,
      tooltip: "View my HackerRank Profile",
    },
  ];

  return (
    <section
      id="coding"
      className="min-h-screen flex flex-col items-center justify-center text-white px-6 py-12 overflow-visible"
    >
      {/* Section Title */}
      <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#a855f7]">
        🏆 Coding Profiles
      </h2>

      <p className="text-gray-400 mb-10 text-center max-w-2xl">
        Solving problems and building logical thinking through coding platforms.
      </p>

      {/* Profile Cards */}
      <div className="flex flex-wrap justify-center gap-8 max-w-5xl overflow-visible">
        {codingProfiles.map((profile, index) => (
          <a
            key={index}
            href={profile.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-[#0f172a] border border-[#a855f7]/30 rounded-xl 
                       shadow-[0_0_15px_rgba(168,85,247,0.2)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] 
                       transition-all duration-300 w-[220px] h-[180px] flex flex-col items-center justify-center gap-3
                       hover:scale-105 overflow-visible"
          >
            {/* Tooltip */}
            <div
              className="absolute -top-10 bg-gray-800 text-gray-200 text-xs px-3 py-1 rounded-md opacity-0 
                         group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300 z-50"
            >
              {profile.tooltip}
            </div>

            {/* Icon */}
            {profile.icon}

            {/* Platform Name */}
            <p className="text-lg font-semibold">{profile.platform}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
