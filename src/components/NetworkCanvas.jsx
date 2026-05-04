import React, { useEffect, useRef } from "react";

const DOT_COUNT = 90;
const MAX_DIST = 140;       // px — max distance to draw a line
const SPEED = 0.35;         // base drift speed
const DOT_RADIUS = 2;
const MOUSE_RADIUS = 160;   // px — mouse repulsion zone

// Columbia DSI palette
const DOT_COLOR = "rgba(180, 210, 255, 0.75)";
const LINE_COLOR_RGB = "99, 172, 255";  // used in rgba()

function rand(min, max) {
  return Math.random() * (max - min) + min;
}

function createDot(w, h) {
  return {
    x: rand(0, w),
    y: rand(0, h),
    vx: rand(-SPEED, SPEED),
    vy: rand(-SPEED, SPEED),
  };
}

const NetworkCanvas = () => {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: -9999, y: -9999 });
  const dotsRef = useRef([]);
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
      dotsRef.current = Array.from({ length: DOT_COUNT }, () =>
        createDot(canvas.width, canvas.height)
      );
    };

    const onMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY + window.scrollY };
    };

    const onMouseLeave = () => {
      mouse.current = { x: -9999, y: -9999 };
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);
    resize();

    const draw = () => {
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);

      const dots = dotsRef.current;
      const mx = mouse.current.x;
      const my = mouse.current.y;

      // Update positions with mouse repulsion
      for (const d of dots) {
        const dx = d.x - mx;
        const dy = d.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < MOUSE_RADIUS && dist > 0) {
          const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS;
          d.vx += (dx / dist) * force * 0.4;
          d.vy += (dy / dist) * force * 0.4;
        }

        // Dampen velocity back to base speed
        d.vx *= 0.98;
        d.vy *= 0.98;

        d.x += d.vx;
        d.y += d.vy;

        // Bounce off edges
        if (d.x < 0 || d.x > width) d.vx *= -1;
        if (d.y < 0 || d.y > height) d.vy *= -1;
        d.x = Math.max(0, Math.min(width, d.x));
        d.y = Math.max(0, Math.min(height, d.y));
      }

      // Draw lines between close dots
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * 0.45;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${LINE_COLOR_RGB}, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw dots
      for (const d of dots) {
        ctx.beginPath();
        ctx.arc(d.x, d.y, DOT_RADIUS, 0, Math.PI * 2);
        ctx.fillStyle = DOT_COLOR;
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
        opacity: 0.6,
      }}
    />
  );
};

export default NetworkCanvas;
