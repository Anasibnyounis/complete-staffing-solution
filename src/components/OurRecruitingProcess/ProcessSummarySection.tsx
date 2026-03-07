"use client";

import React from "react";

const TIMELINE_STEPS = [
  { letter: "I", title: "Identify", subtitle: "Talent" },
  { letter: "S", title: "Shortlist", subtitle: "Top Candidates" },
  { letter: "O", title: "Onsite", subtitle: "Support" },
  { letter: "R", title: "Referrals", subtitle: "& Network" },
  { letter: "T", title: "Team", subtitle: "Approach" },
];

const ProcessSummarySection: React.FC = () => {
  return (
    <section
      className="w-full bg-[#F7F9FC]"
      style={{ marginTop: "50px", marginBottom: "40px" }}
    >
      <div
        className="mx-auto flex flex-col items-center px-6"
        style={{ maxWidth: "1200px" }}
      >
        {/* Row 1: Circles and connectors on same horizontal line */}
        <div
          className="flex flex-wrap md:flex-nowrap justify-center items-center"
          style={{ gap: "" }}
        >
          {TIMELINE_STEPS.map((step, index) => (
            <React.Fragment key={step.letter}>
              <div
                className="flex items-center justify-center rounded-full text-white font-bold shrink-0"
                style={{
                  width: "100px",
                  height: "100px",
                  background: "linear-gradient(135deg, #2D7FC1, #3455A5)",
                  fontSize: "32px",
                  fontWeight: 700,
                  boxShadow: "0 4px 14px rgba(45, 127, 193, 0.4)",
                }}
              >
                {step.letter}
              </div>
              {index < TIMELINE_STEPS.length - 1 && (
                <div
                  className="hidden md:flex items-center justify-center shrink-0 relative"
                  style={{ width: "130px", height: "4px", background: "#BFD0EA" }}
                >
                  <div
                    className="rounded-full shrink-0 absolute"
                    style={{
                      width: "10px",
                      height: "10px",
                      background: "#3A63A9",
                      left: "50%",
                      top: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Row 2: Labels under each circle - same flex layout so they align */}
        <div
          className="flex flex-wrap md:flex-nowrap justify-center items-start"
          style={{ gap: "5px", marginTop: "10px" }}
        >
          {TIMELINE_STEPS.map((step, index) => (
            <React.Fragment key={step.letter}>
              <div
                className="flex flex-col items-center text-center shrink-0 font-[var(--font-plus-jakarta)]"
                style={{ width: "140px", color: "#2B3A4B" }}
              >
                <div style={{ fontSize: "18px", fontWeight: 700 }}>{step.title}</div>
                <div className="whitespace-nowrap" style={{ fontSize: "14px", fontWeight: 400, marginTop: "4px" }}>{step.subtitle}</div>
              </div>
              {index < TIMELINE_STEPS.length - 1 && (
                <div
                  className="hidden md:block shrink-0"
                  style={{ width: "80px" }}
                  aria-hidden
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSummarySection;
