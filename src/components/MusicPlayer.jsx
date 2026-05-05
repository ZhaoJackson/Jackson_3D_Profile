import React, { useState } from "react";
import "./MusicPlayer.scss";

const VIDEO_ID = "NE6aAN4o6Rw";

// Build the embed URL only when the user clicks play.
// Injecting src on click satisfies browser autoplay policy
// and bypasses YouTube's programmatic-playback restrictions.
const EMBED_SRC =
  `https://www.youtube.com/embed/${VIDEO_ID}` +
  `?autoplay=1&loop=1&playlist=${VIDEO_ID}` +
  `&controls=0&disablekb=1&fs=0&iv_load_policy=3` +
  `&modestbranding=1&rel=0&showinfo=0`;

const MusicPlayer = () => {
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying((p) => !p);

  return (
    <>
      {/* Off-screen iframe – only gets a src while playing */}
      <iframe
        title="bg-music"
        src={playing ? EMBED_SRC : undefined}
        allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
        allowFullScreen
        style={{
          position:      "fixed",
          left:          "-9999px",
          top:           "-9999px",
          width:         "320px",
          height:        "180px",
          border:        "none",
          pointerEvents: "none",
        }}
      />

      {/* Floating icon-only button */}
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
