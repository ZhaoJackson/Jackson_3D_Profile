import React, { useState, useRef, useEffect } from "react";
import "./MusicPlayer.scss";

const VIDEO_ID = "NE6aAN4o6Rw";

const MusicPlayer = () => {
  const [playing, setPlaying] = useState(false);
  const playerRef    = useRef(null);
  const containerRef = useRef(null);

  // Load YT API and create a MUTED, auto-playing player immediately.
  // Muted autoplay is always allowed by browsers — no user gesture needed.
  // When the user clicks the button we simply unmute, which IS in a gesture
  // context and is therefore never blocked.
  useEffect(() => {
    const initPlayer = () => {
      if (!containerRef.current || playerRef.current) return;
      playerRef.current = new window.YT.Player(containerRef.current, {
        videoId: VIDEO_ID,
        playerVars: {
          autoplay: 1,
          loop: 1,
          playlist: VIDEO_ID,
          controls: 0,
          playsinline: 1,
          disablekb: 1,
          fs: 0,
          iv_load_policy: 3,
          modestbranding: 1,
          rel: 0,
          mute: 1,
        },
        events: {
          onReady: (e) => {
            e.target.setVolume(80);
            e.target.playVideo();
          },
          onStateChange: (e) => {
            const isMuted = playerRef.current?.isMuted?.() ?? true;
            setPlaying(
              e.data === window.YT.PlayerState.PLAYING && !isMuted
            );
          },
          onError: () => setPlaying(false),
        },
      });
    };

    if (window.YT?.Player) {
      initPlayer();
    } else {
      const prev = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        prev?.();
        initPlayer();
      };

      if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
        const script = document.createElement("script");
        script.src   = "https://www.youtube.com/iframe_api";
        script.async = true;
        document.head.appendChild(script);
      }
    }
  }, []);

  const toggle = () => {
    const p = playerRef.current;
    if (!p) return;

    if (playing) {
      p.mute();
      setPlaying(false);
    } else {
      p.unMute();
      p.playVideo();
      setPlaying(true);
    }
  };

  return (
    <>
      <div
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: "1px",
          height: "1px",
          overflow: "hidden",
          opacity: 0,
          pointerEvents: "none",
          zIndex: -1,
        }}
      >
        <div ref={containerRef} />
      </div>

      <button
        className={`music-btn ${playing ? "music-btn--playing" : ""}`}
        onClick={toggle}
        title={playing ? "Mute music" : "Unmute background music"}
        aria-label={playing ? "Mute music" : "Unmute background music"}
      >
        {playing ? (
          <span className="music-eq" aria-hidden="true">
            <span /><span /><span /><span />
          </span>
        ) : (
          <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22" aria-hidden="true">
            <path d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z"/>
          </svg>
        )}
      </button>
    </>
  );
};

export default MusicPlayer;
