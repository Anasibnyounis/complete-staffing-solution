"use client";

import React, { useRef, useState, useEffect } from "react";

const VIDEO_TITLE = "Complete Staffing Solutions — Who We Are";

const MuteIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
    <line x1="23" y1="9" x2="17" y2="15" />
    <line x1="17" y1="9" x2="23" y2="15" />
  </svg>
);

const UnmuteIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
  </svg>
);

const PlayIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M8 5v14l11-7z" />
  </svg>
);

const PauseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M6 5h4v14H6zm8 0h4v14h-4z" />
  </svg>
);

const stats = [
  { number: "35,000+", description: "Successful Placements" },
  { number: "200,000+", description: "Qualified Candidates" },
  { number: "25+", description: "Years of Experience" },
];

const pillars = [
  {
    title: "Understand Your Needs",
    body: "We learn your company culture, goals, and hiring challenges.",
    Icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="h-8 w-8 text-sky-500"
        aria-hidden
      >
        <path
          d="M10.5 4.5a6 6 0 0 0-4.243 10.243l-1.757 1.757 1.414 1.414 1.757-1.757A6 6 0 1 0 10.5 4.5z"
          fill="currentColor"
        />
        <circle cx="10.5" cy="10.5" r="2.5" fill="white" />
      </svg>
    ),
  },
  {
    title: "Find the Right Talent",
    body: "Our recruiters identify qualified professionals who match your requirements.",
    Icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="h-8 w-8 text-emerald-500"
        aria-hidden
      >
        <circle cx="12" cy="7" r="3.25" fill="currentColor" />
        <path
          d="M6 19.5C6.75 15.75 9 14 12 14s5.25 1.75 6 5.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M18 11.5a3 3 0 1 1 2.5-4.75"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Deliver Results",
    body: "We connect you with candidates ready to contribute from day one.",
    Icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="h-8 w-8 text-emerald-500"
        aria-hidden
      >
        <path
          d="M7 11.5 10 15l7-8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 6.5h2.25A1.75 1.75 0 0 1 22 8.25v8.5A1.75 1.75 0 0 1 20.25 18.5H7.75A1.75 1.75 0 0 1 6 16.75V7.25A1.75 1.75 0 0 1 7.75 5.5H14"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export default function LandingVideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isStatsVisible, setIsStatsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsStatsVisible(true);
        });
      },
      { threshold: 0.1, rootMargin: "50px" }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const toggleMute: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (video) {
      video.muted = !video.muted;
      setIsMuted(video.muted);
    }
  };

  const togglePlayPause: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  return (
    <section
      className="relative w-full overflow-hidden border-t border-white/10 flex flex-col items-center"
      aria-label="Video and impact stats"
    >
      {/* Background image — faded (not grayed); soft overlay for readability */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{
          backgroundImage: "url('/modern-minimalist-office.jpg')",
          opacity: 0.5,
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-linear-to-b from-black/25 via-black/15 to-black/35"
        aria-hidden
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Header text */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-(--font-plus-jakarta) text-sky-100 text-xs sm:text-sm uppercase tracking-[0.18em]">
            How We Partner With You
          </h2>
          <p className="mt-3 font-(--font-plus-jakarta) text-white text-xl sm:text-2xl md:text-3xl">
            See How We Help Businesses Find Talent
          </p>
          <p className="mt-3 text-sm sm:text-base md:text-lg text-slate-100/85 font-(--font-inter)">
            Watch how we partner with employers to understand their{" "}
            <span className="font-semibold">needs</span> and deliver qualified
            candidates ready to succeed from day one.
          </p>
        </div>

        {/* Pillars row */}
        <div className="mt-8 sm:mt-10 grid gap-4 sm:gap-5 md:grid-cols-3">
          {pillars.map(({ title, body, Icon }) => (
            <div
              key={title}
              className="flex flex-col items-start gap-3 rounded-2xl bg-white/95 px-5 py-5 sm:px-6 sm:py-6 shadow-[0_18px_40px_rgba(15,23,42,0.18)]"
            >
              <div className="inline-flex items-center justify-center rounded-full bg-sky-50 p-2.5">
                <Icon />
              </div>
              <div>
                <h3 className="font-(--font-plus-jakarta) text-slate-900 text-base sm:text-lg">
                  {title}
                </h3>
                <p className="mt-1 text-sm sm:text-[15px] leading-relaxed text-slate-600 font-(--font-inter)">
                  {body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Video container */}
        <div className="mt-9 sm:mt-11 lg:mt-12">
          <div
            className="relative mx-auto aspect-video w-full max-w-4xl rounded-[26px] overflow-hidden flex items-center justify-center select-none
            bg-slate-950/80
            border border-white/80
            shadow-[0_30px_70px_rgba(15,23,42,0.65)]"
          >
            <video
              ref={videoRef}
              src="/videos/landing-bottom-video.mp4"
              title={VIDEO_TITLE}
              muted={isMuted}
              className="w-full h-full object-cover"
              playsInline
              controls={false}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />

            <button
              type="button"
              onClick={togglePlayPause}
              onKeyDown={(e) => {
                if (e.key === " ") e.preventDefault();
              }}
              className="absolute inset-0 z-10 flex items-center justify-center"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              <span className="flex items-center justify-center w-[70px] h-[70px] sm:w-[82px] sm:h-[82px] rounded-full bg-black/65 text-white backdrop-blur-[2px] border border-white/40">
                {isPlaying ? <PauseIcon /> : <PlayIcon />}
              </span>
            </button>

            <button
              type="button"
              onClick={toggleMute}
              className="absolute bottom-5 right-5 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-black/70 text-white hover:bg-black/85 focus:outline-none focus:ring-2 focus:ring-white/60 transition-colors"
              aria-label={isMuted ? "Unmute video" : "Mute video"}
            >
              {isMuted ? <MuteIcon /> : <UnmuteIcon />}
            </button>
          </div>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className={`mt-10 sm:mt-12 border-t border-white/20 pt-7 sm:pt-8 transition-all duration-700 ease-out ${
            isStatsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex flex-col items-center gap-5 text-white font-(--font-plus-jakarta) sm:flex-row sm:justify-center sm:gap-10 lg:gap-16">
            {stats.map((stat, index) => (
              <div
                key={stat.number}
                className={`flex flex-col items-center text-center px-4 sm:px-6 transition-all duration-500 ease-out ${
                  isStatsVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
                style={{
                  transitionDelay: isStatsVisible ? `${0.15 + index * 0.15}s` : "0s",
                }}
              >
                <span className="font-bold text-2xl sm:text-3xl md:text-[2rem] leading-tight tracking-tight">
                  {stat.number}
                </span>
                <span className="mt-1.5 text-xs sm:text-sm text-slate-100/85 font-(--font-inter)">
                  {stat.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
