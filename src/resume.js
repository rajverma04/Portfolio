import React from "react";
const resumePdf = "/RAJ_CV.pdf";
export default function Resume() {
  return (
    <main className="clay-page min-h-screen py-24">
      <div className="clay-shell">
        <div className="flex justify-between items-center mb-8">
          <div>
            <span className="clay-kicker">Raj Verma / resume</span>
            <h1 className="clay-title text-5xl mt-3">
              The short
              <br />
              <span className="text-[#ff7657]">version.</span>
            </h1>
          </div>
          <a
            href={resumePdf}
            target="_blank"
            rel="noreferrer"
            className="clay-button"
          >
            Open PDF
          </a>
        </div>
        <div className="clay-panel p-6 md:p-10 grid md:grid-cols-[1.1fr_.9fr] gap-8">
          <div>
            <h2 className="text-2xl font-black">Raj Kumar Verma</h2>
            <p className="clay-copy mt-2">Full Stack Developer · India</p>
            <div className="clay-panel-inset p-6 mt-8">
              <p className="clay-kicker">Profile</p>
              <p className="clay-copy mt-4">
                Developer focused on scalable web applications, real-time
                systems, secure APIs, and practical product experiences.
              </p>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="clay-panel-inset p-5">
              <p className="clay-kicker">Core stack</p>
              <p className="clay-copy mt-3">
                React · Node · Express · MongoDB · PostgreSQL · Redis · Docker ·
                AWS
              </p>
            </div>
            <div className="clay-panel-inset p-5">
              <p className="clay-kicker">Selected work</p>
              <p className="clay-copy mt-3">
                CodeNexus · Taksy · GST Invoice App · Distributed File System
              </p>
            </div>
            <div className="clay-panel-inset p-5">
              <p className="clay-kicker">Education</p>
              <p className="clay-copy mt-3">
                B.Tech Computer Science, Lovely Professional University
              </p>
            </div>
          </div>
        </div>
        <p className="clay-copy text-center mt-8">
          Use the PDF for the complete one-page resume.
        </p>
      </div>
    </main>
  );
}
