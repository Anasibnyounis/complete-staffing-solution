"use client";

import React, { useRef, useState } from "react";

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

export default function LandingVideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

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
      className="w-full bg-[#f5f7fa] py-12 px-4 sm:py-14 sm:px-6 md:py-16 md:px-8 lg:py-20 2xl:py-24"
      aria-label="Overview video"
    >
      <div className="w-full max-w-[900px] mx-auto">
        <h2 className="font-(--font-plus-jakarta) font-bold text-[#19478e] text-center mb-6 sm:mb-8 text-xl sm:text-2xl md:text-3xl">
          See How We Help Our Clients
        </h2>
        <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-black flex items-center justify-center select-none">
          <video
            ref={videoRef}
            src="/videos/landing-bottom-video.mp4"
            title={VIDEO_TITLE}
            muted={isMuted}
            className="w-full h-full object-contain"
            playsInline
            controls={false}
            onPlay={() => {
              setIsPlaying(true);
            }}
            onPause={() => {
              setIsPlaying(false);
            }}
          />

          {/* Center play/pause button */}
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

          {/* Sound toggle */}
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
    </section>
  );
}
