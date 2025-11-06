import React from "react";

export default function GitHubStats() {
    const username = "rajkumarverma"; // Your GitHub username
    
    return (
        <div className="my-24 px-6">
            {/* Section Heading */}
            <h2 className="text-4xl font-bold text-center font-audiowide text-white drop-shadow-lg mb-12 animate-fadeIn">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                    GitHub Activity
                </span>
            </h2>

            {/* Grid Wrapper */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">

                {/* Stats & Streak */}
                <div className="space-y-8 animate-fadeInUp">
                    <div className="p-4 rounded-2xl backdrop-blur-xl bg-white/5 hover:bg-white/10 transition transform hover:scale-[1.02] shadow-xl">
                        <img 
                            src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&count_private=true&theme=radical&hide_border=true&bg_color=0d1117`}
                            alt="GitHub Stats"
                            className="rounded-xl w-full h-auto"
                        />
                    </div>

                    <div className="p-4 rounded-2xl backdrop-blur-xl bg-white/5 hover:bg-white/10 transition transform hover:scale-[1.02] shadow-xl">
                        <img 
                            src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=radical&hide_border=true&background=0d1117`}
                            alt="GitHub Streak"
                            className="rounded-xl w-full h-auto"
                        />
                    </div>
                </div>

                {/* Languages & Trophies */}
                <div className="space-y-8 animate-fadeInUp delay-150">
                    <div className="p-4 rounded-2xl backdrop-blur-xl bg-white/5 hover:bg-white/10 transition transform hover:scale-[1.02] shadow-xl">
                        <img 
                            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=radical&hide_border=true&bg_color=0d1117`}
                            alt="Top Languages"
                            className="rounded-xl w-full h-auto"
                        />
                    </div>

                    <div className="p-4 rounded-2xl backdrop-blur-xl bg-white/5 hover:bg-white/10 transition transform hover:scale-[1.02] shadow-xl">
                        <img 
                            src={`https://github-profile-trophy.vercel.app/?username=${username}&theme=radical&no-frame=true&row=2&column=4`}
                            alt="GitHub Trophies"
                            className="rounded-xl w-full h-auto"
                        />
                    </div>
                </div>
            </div>

            {/* Profile Button */}
            <div className="text-center mt-12 animate-fadeInUp">
                <a 
                    href={`https://github.com/${username}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-xl transition transform hover:scale-105 shadow-lg"
                >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 ..."/>
                    </svg>
                    View Full GitHub Profile
                </a>
            </div>
        </div>
    );
}
