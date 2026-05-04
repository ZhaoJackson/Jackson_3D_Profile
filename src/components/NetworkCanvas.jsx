import React, { useEffect, useRef } from "react";

// ── tunables ──────────────────────────────────────────────
const DOT_COUNT    = 110;
const BASE_SPEED   = 0.2;          // constant drift speed
const MAX_DIST     = 150;          // px – line draw threshold
const DOT_RADIUS   = 1.8;
const MOUSE_RADIUS = 160;          // px – repulsion zone
const LINE_WIDTH   = 0.45;         // slim lines
const DOT_ALPHA    = 0.82;
const LINE_RGB     = "100, 175, 255";
const DOT_COLOR    = `rgba(200, 228, 255, ${DOT_ALPHA})`;
const GLOW_COLOR   = `rgba(${LINE_RGB}, 0.5)`;
// ─────────────────────────────────────────────────────────

function angle() { return Math.random() * Math.PI * 2; }

function makeDot(w, h) {
  const a = angle();
  return {
    x:  Math.random() * w,
    y:  Math.random() * h,
    vx: Math.cos(a) * BASE_SPEED * (0.6 + Math.random() * 0.8),
    vy: Math.sin(a) * BASE_SPEED * (0.6 + Math.random() * 0.8),
  };
}

const NetworkCanvas = () => {
  const canvasRef = useRef(null);
  const mouse     = useRef({ x: -9999, y: -9999 });
  const dotsRef   = useRef([]);
  const rafRef    = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx    = canvas.getContext("2d");

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
      // re-seed so dots fill new size
      dotsRef.current = Array.from({ length: DOT_COUNT }, () =>
        makeDot(canvas.width, canvas.height)
      );
    };

    const onMouseMove = (e) => { mouse.current = { x: e.clientX, y: e.clientY }; };
    const onLeave     = ()    => { mouse.current = { x: -9999,   y: -9999    }; };

    window.addEventListener("resize",      resize);
    window.addEventListener("mousemove",   onMouseMove);
    window.addEventListener("mouseleave",  onLeave);
    resize();

    const draw = () => {
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);

      const dots      = dotsRef.current;
      const { x: mx, y: my } = mouse.current;

      // ── update positions ──────────────────────────────
      for (const d of dots) {
        // mouse repulsion (brief velocity kick, no damping)
        const dx   = d.x - mx;
        const dy   = d.y - my;
        const dist = Math.hypot(dx, dy);
        if (dist < MOUSE_RADIUS && dist > 0) {
          const f = (MOUSE_RADIUS - dist) / MOUSE_RADIUS;
          d.vx += (dx / dist) * f * 0.6;
          d.vy += (dy / dist) * f * 0.6;
        }

        // clamp speed so mouse kick doesn't run away
        const speed = Math.hypot(d.vx, d.vy);
        if (speed > BASE_SPEED * 4) {
          d.vx = (d.vx / speed) * BASE_SPEED * 4;
          d.vy = (d.vy / speed) * BASE_SPEED * 4;
        }
        // restore base drift when far from mouse
        if (dist > MOUSE_RADIUS && speed < BASE_SPEED * 0.5) {
          d.vx = (d.vx / speed || Math.cos(angle())) * BASE_SPEED * 0.6;
          d.vy = (d.vy / speed || Math.sin(angle())) * BASE_SPEED * 0.6;
        }

        d.x += d.vx;
        d.y += d.vy;

        // wrap edges (seamless teleport)
        if (d.x < -10)       d.x = width  + 10;
        if (d.x > width + 10) d.x = -10;
        if (d.y < -10)       d.y = height + 10;
        if (d.y > height + 10) d.y = -10;
      }

      // ── draw lines ────────────────────────────────────
      ctx.lineWidth = LINE_WIDTH;
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx   = dots[i].x - dots[j].x;
          const dy   = dots[i].y - dots[j].y;
          const dist = Math.hypot(dx, dy);
          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * 0.6;
            ctx.strokeStyle = `rgba(${LINE_RGB}, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.stroke();
          }
        }
      }

      // ── draw dots ─────────────────────────────────────
      ctx.shadowBlur  = 5;
      ctx.shadowColor = GLOW_COLOR;
      ctx.fillStyle   = DOT_COLOR;
      for (const d of dots) {
        ctx.beginPath();
        ctx.arc(d.x, d.y, DOT_RADIUS, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.shadowBlur = 0;

      rafRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize",     resize);
      window.removeEventListener("mousemove",  onMouseMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position:      "fixed",
        top:           0,
        left:          0,
        width:         "100vw",
        height:        "100vh",
        pointerEvents: "none",
        zIndex:        0,
        opacity:       0.75,
      }}
    />
  );
};

export default NetworkCanvas;
