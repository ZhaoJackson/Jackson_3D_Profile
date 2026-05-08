import React, { useState, useRef, useEffect } from "react";
import "./MusicPlayer.scss";

const VIDEO_ID = "NE6aAN4o6Rw";

const PLAYER_VARS = {
  autoplay: 1,
  loop: 1,
  playlist: VIDEO_ID,
  controls: 0,
  playsinline: 1,   // iOS: play inline instead of forcing fullscreen
  disablekb: 1,
  fs: 0,
  iv_load_policy: 3,
  modestbranding: 1,
  rel: 0,
};

const MusicPlayer = () => {
  const [playing, setPlaying] = useState(false);
  const playerRef    = useRef(null);   // YT.Player instance
  const containerRef = useRef(null);   // div the YT player mounts into
  const apiReadyRef  = useRef(false);  // has YT IFrame API finished loading?

  // Load the YouTube IFrame API script once on mount
  useEffect(() => {
    if (window.YT?.Player) {
      apiReadyRef.current = true;
      return;
    }

    // Chain any existing callback so we don't clobber other uses
    const previousCb = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      previousCb?.();
      apiReadyRef.current = true;
    };

    const script = document.createElement("script");
    script.src   = "https://www.youtube.com/iframe_api";
    script.async = true;
    document.head.appendChild(script);
  }, []);

  // Creates a YT.Player instance inside containerRef.current.
  // Must be called from inside a user-gesture handler to satisfy
  // mobile browser autoplay policies.
  const createPlayer = () => {
    if (!containerRef.current || playerRef.current) return;

    playerRef.current = new window.YT.Player(containerRef.current, {
      videoId: VIDEO_ID,
      playerVars: PLAYER_VARS,
      events: {
        onReady: (e) => {
          e.target.setVolume(80);
          e.target.playVideo();
          setPlaying(true);
        },
        onStateChange: (e) => {
          // Keep UI in sync if YT pauses/ends for any reason
          setPlaying(e.data === window.YT.PlayerState.PLAYING);
        },
        onError: () => setPlaying(false),
      },
    });
  };

  const toggle = () => {
    if (playing) {
      playerRef.current?.pauseVideo();
      setPlaying(false);
    } else if (playerRef.current) {
      // Player already created — just resume
      playerRef.current.playVideo();
      setPlaying(true);
    } else if (apiReadyRef.current) {
      // API ready, create player now (still in user gesture context)
      createPlayer();
    } else {
      // API script not yet loaded; poll briefly then create.
      const interval = setInterval(() => {
        if (window.YT?.Player) {
          clearInterval(interval);
          apiReadyRef.current = true;
          createPlayer();
        }
      }, 100);
      // Stop polling after 5 s to avoid a runaway interval
      setTimeout(() => clearInterval(interval), 5000);
    }
  };

  return (
    <>
      {/*
        YT.Player replaces this div with an <iframe>.
        We keep it 1 × 1 px (not -9999 px) so mobile browsers
        don't treat it as "invisible" and block playback.
      */}
      <div
        style={{
          position:  "fixed",
          left:      0,
          top:       0,
          width:     "1px",
          height:    "1px",
          overflow:  "hidden",
          opacity:   0,
          pointerEvents: "none",
          zIndex:    -1,
        }}
      >
        <div ref={containerRef} />
      </div>

      {/* Floating music button */}
      <button
        className={`music-btn ${playing ? "music-btn--playing" : ""}`}
        onClick={toggle}
        title={playing ? "Stop music" : "Play background music"}
        aria-label={playing ? "Stop music" : "Play background music"}
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
