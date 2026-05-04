import React, { useEffect, useRef } from "react";

const DOT_COUNT = 120;
const MAX_DIST = 130;
const SPEED = 0.4;
const DOT_RADIUS = 2.2;
const MOUSE_RADIUS = 140;

// Columbia DSI blue palette
const DOT_COLOR  = "rgba(200, 225, 255, 0.85)";
const LINE_RGB   = "110, 180, 255";

function rand(min, max) { return Math.random() * (max - min) + min; }

function makeDot(w, h) {
  return { x: rand(0, w), y: rand(0, h), vx: rand(-SPEED, SPEED), vy: rand(-SPEED, SPEED) };
}

const HeroNetworkCanvas = () => {
  const canvasRef = useRef(null);
  const mouse     = useRef({ x: -9999, y: -9999 });
  const dotsRef   = useRef([]);
  const rafRef    = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx    = canvas.getContext("2d");

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      dotsRef.current = Array.from({ length: DOT_COUNT }, () =>
        makeDot(canvas.width, canvas.height)
      );
    };

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const onLeave = () => { mouse.current = { x: -9999, y: -9999 }; };

    window.addEventListener("resize", resize);
    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseleave", onLeave);
    resize();

    const draw = () => {
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);

      const dots = dotsRef.current;
      const { x: mx, y: my } = mouse.current;

      for (const d of dots) {
        const dx   = d.x - mx;
        const dy   = d.y - my;
        const dist = Math.hypot(dx, dy);

        if (dist < MOUSE_RADIUS && dist > 0) {
          const f = (MOUSE_RADIUS - dist) / MOUSE_RADIUS;
          d.vx += (dx / dist) * f * 0.5;
          d.vy += (dy / dist) * f * 0.5;
        }

        d.vx *= 0.97;
        d.vy *= 0.97;
        d.x  += d.vx;
        d.y  += d.vy;

        if (d.x < 0 || d.x > width)  d.vx *= -1;
        if (d.y < 0 || d.y > height) d.vy *= -1;
        d.x = Math.max(0, Math.min(width,  d.x));
        d.y = Math.max(0, Math.min(height, d.y));
      }

      // Lines
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx   = dots[i].x - dots[j].x;
          const dy   = dots[i].y - dots[j].y;
          const dist = Math.hypot(dx, dy);
          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * 0.55;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${LINE_RGB}, ${alpha})`;
            ctx.lineWidth   = 0.9;
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.stroke();
          }
        }
      }

      // Dots with glow
      for (const d of dots) {
        ctx.shadowBlur  = 6;
        ctx.shadowColor = `rgba(${LINE_RGB}, 0.6)`;
        ctx.beginPath();
        ctx.arc(d.x, d.y, DOT_RADIUS, 0, Math.PI * 2);
        ctx.fillStyle = DOT_COLOR;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position:       "absolute",
        inset:          0,
        width:          "100%",
        height:         "100%",
        pointerEvents:  "none",
        zIndex:         0,
        display:        "block",
      }}
    />
  );
};

export default HeroNetworkCanvas;
