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
  { number: "200,000+", description: "Successful Placements" },
  { number: "1M+", description: "Qualified Candidates" },
  { number: "5,000+", description: "Career Opportunities" },
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
        className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/15 to-black/35"
        aria-hidden
      />

      <div className="relative z-10 w-full py-12 max-w-[900px] sm:py-14 sm:px-6 md:py-16 md:px-8 lg:py-20">
        {/* Headline */}
        <h2 className="font-(--font-plus-jakarta) font-bold text-white text-center mb-6 sm:mb-8 text-xl sm:text-2xl md:text-3xl">
          See How We Help Businesses Find Talent
        </h2>

        {/* Video container — rounded, shadow, glassy border */}
        <div
          className="relative aspect-video w-full rounded-2xl overflow-hidden flex items-center justify-center select-none
            bg-black/40
            border border-white/20
            shadow-[0_24px_48px_rgba(0,0,0,0.5),0_12px_24px_rgba(0,0,0,0.4)]
            ring-1 ring-white/10"
        >
          <video
            ref={videoRef}
            src="/videos/landing-bottom-video.mp4"
            title={VIDEO_TITLE}
            muted={isMuted}
            className="w-full h-full object-contain"
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
            <span className="flex items-center justify-center w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-full bg-black/55 text-white backdrop-blur-[2px] border border-white/15">
              {isPlaying ? <PauseIcon /> : <PlayIcon />}
            </span>
          </button>

          <button
            type="button"
            onClick={toggleMute}
            className="absolute bottom-4 right-4 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-black/60 text-white hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-white/50 transition-colors"
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? <MuteIcon /> : <UnmuteIcon />}
          </button>
        </div>
      </div>
      <div
        ref={statsRef}
        className={`mb-10 max-w-7xl flex items-center justify-center transition-all duration-700 ease-out ${isStatsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
      >
        <div className="flex flex-wrap justify-center items-center md:justify-between font-(--font-plus-jakarta) text-white">
          {stats.map((stat, index) => (
            <div
              key={stat.number}
              className={`flex flex-col items-center text-center px-6 sm:px-8 transition-all duration-500 ease-out
                    ${index < 2 ? "md:border-r md:border-white/20" : ""}
                    ${isStatsVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
              style={{
                transitionDelay: isStatsVisible ? `${0.15 + index * 0.15}s` : "0s",
              }}
            >
              <span className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] leading-tight text-white tracking-tight">
                {stat.number}
              </span>
              <span className="mt-2 text-sm sm:text-base text-white/80 font-(--font-inter)">
                {stat.description}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
