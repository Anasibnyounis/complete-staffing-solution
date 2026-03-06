"use client";

import React, { useMemo, useRef, useState } from "react";

/**
 * Video section on the landing page.
 * Placed before the overview numbers (Industries stats). Audio defaults to muted; use the sound icon to toggle.
 */
// Dropbox: use dl=1 for direct playback in <video>
const VIDEO_SRC: string =
  "https://www.dropbox.com/scl/fi/3sabzhf0vs9lfuv9v5cth/0304-1.mp4?rlkey=ex8lvzg3mh81g58ltwd291suy&e=2&st=y4iya2ct&dl=1";
const VIDEO_TITLE = "Complete Staffing Solutions — Who We Are";

const POSTER_SRC: string = ""; // optional, e.g. "/videos/overview-poster.jpg"

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
  const [isBuffering, setIsBuffering] = useState(false);
  const [hasError, setHasError] = useState(false);

  const resolvedVideoSrc = useMemo(() => {
    if (!VIDEO_SRC) return "";
    // If someone pastes a Dropbox share link with dl=0, ensure streaming.
    return VIDEO_SRC.replace(/([?&])dl=0\b/, "$1dl=1");
  }, []);

  const toggleMute: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (video) {
      video.muted = !video.muted;
      setIsMuted(video.muted);
    }
  };

  const togglePlay = async () => {
    const video = videoRef.current;
    if (!video) return;

    try {
      if (video.paused) {
        setHasError(false);
        setIsBuffering(true);
        await video.play();
      } else {
        video.pause();
      }
    } catch {
      setHasError(true);
      setIsBuffering(false);
    }
  };

  if (!VIDEO_SRC) {
    return (
      <section
        className="w-full bg-[#f5f7fa] py-12 px-4 sm:py-14 sm:px-6 md:py-16 md:px-8 lg:py-20 2xl:py-24"
        aria-label="Overview video"
      >
        <div className="w-full max-w-[900px] mx-auto">
          <h2 className="font-(--font-plus-jakarta) font-bold text-[#19478e] text-center mb-6 sm:mb-8 text-xl sm:text-2xl md:text-3xl">
            See How We Help Our Clients
          </h2>
          <div className="aspect-video w-full rounded-xl bg-[#19478e]/10 flex items-center justify-center border border-[#19478e]/20">
            <p className="text-[#19478e]/70 font-(--font-inter) text-sm sm:text-base text-center px-4">
              Video placeholder — add your video URL in{" "}
              <code className="bg-white/60 px-1.5 py-0.5 rounded">
                src/components/LandingVideoSection/LandingVideoSection.tsx
              </code>
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className="w-full bg-[#f5f7fa] py-12 px-4 sm:py-14 sm:px-6 md:py-16 md:px-8 lg:py-20 2xl:py-24"
      aria-label="Overview video"
    >
      <div className="w-full max-w-[900px] mx-auto">
        <h2 className="font-(--font-plus-jakarta) font-bold text-[#19478e] text-center mb-6 sm:mb-8 text-xl sm:text-2xl md:text-3xl">
          See How We Help Our Clients
        </h2>
        <div
          className="relative aspect-video w-full rounded-xl overflow-hidden bg-black group select-none cursor-pointer"
          onClick={togglePlay}
        >
          <video
            ref={videoRef}
            src={resolvedVideoSrc}
            title={VIDEO_TITLE}
            muted
            preload="auto"
            poster={POSTER_SRC || undefined}
            className="w-full h-full object-contain"
            playsInline
            controls={false}
            disablePictureInPicture
            onLoadedMetadata={(e) => {
              (e.target as HTMLVideoElement).muted = true;
            }}
            onPlay={() => {
              setIsPlaying(true);
              setIsBuffering(false);
            }}
            onPause={() => {
              setIsPlaying(false);
              setIsBuffering(false);
            }}
            onWaiting={() => setIsBuffering(true)}
            onPlaying={() => setIsBuffering(false)}
            onCanPlay={() => setIsBuffering(false)}
            onError={() => {
              setHasError(true);
              setIsBuffering(false);
            }}
          />

          {/* Center play/pause button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              togglePlay();
            }}
            onKeyDown={(e) => {
              if (e.key === " ") e.preventDefault();
            }}
            className="absolute inset-0 z-10 flex items-center justify-center opacity-0 scale-95 translate-y-1 pointer-events-none transition-all duration-300 ease-out group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:scale-100 group-focus-within:translate-y-0 group-focus-within:pointer-events-auto"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            <span className="flex items-center justify-center w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-full bg-black/55 text-white backdrop-blur-[2px] border border-white/15">
              {isPlaying ? <PauseIcon /> : <PlayIcon />}
            </span>
          </button>

          {/* Buffering indicator */}
          {isBuffering && (
            <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
              <div className="w-10 h-10 rounded-full border-2 border-white/30 border-t-white/90 animate-spin" />
            </div>
          )}

          {/* Sound toggle */}
          <button
            type="button"
            onClick={toggleMute}
            className="absolute bottom-4 right-4 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-black/60 text-white hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-white/50 transition-colors"
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? <MuteIcon /> : <UnmuteIcon />}
          </button>

          {hasError && (
            <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/70 px-6 text-center">
              <p className="text-white/90 text-sm sm:text-base font-(--font-inter)">
                Video couldn’t load. For the smoothest playback, host the MP4 in your app (e.g. in <code className="bg-white/10 px-1.5 py-0.5 rounded">public/videos</code>) or a CDN that supports byte-range streaming.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
