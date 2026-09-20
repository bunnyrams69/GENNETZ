'use client';

import { useEffect, useRef } from 'react';
import { MessageCircle } from 'lucide-react';
import MagneticLiquidButton from './MagneticLiquidButton';

export default function HeroCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let nodes = [];
    let width = 0;
    let height = 0;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    const initNodes = () => {
      if (width === 0 || height === 0) return;
      const count = Math.min(Math.floor((width * height) / 16000), 32);
      nodes = Array.from({ length: Math.max(count, 22) }, () => {
        const isTeal = Math.random() > 0.65;
        return {
          x: width * 0.15 + Math.random() * (width * 0.75),
          y: height * 0.1 + Math.random() * (height * 0.8),
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          radius: isTeal ? 2.5 + Math.random() * 2 : 1.5 + Math.random() * 1.5,
          phase: Math.random() * Math.PI * 2,
          isTeal,
        };
      });
    };

    let packets = [];
    let lastPacketTime = 0;

    const animate = (timestamp) => {
      ctx.clearRect(0, 0, width, height);

      // Organic drift and boundary rebound
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;

        if (n.x < width * 0.05) { n.x = width * 0.05; n.vx *= -1; }
        if (n.x > width * 0.95) { n.x = width * 0.95; n.vx *= -1; }
        if (n.y < height * 0.05) { n.y = height * 0.05; n.vy *= -1; }
        if (n.y > height * 0.95) { n.y = height * 0.95; n.vy *= -1; }
      }

      const connectionDist = Math.min(width * 0.45, 140);

      // Draw connection lines
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDist) {
            const alpha = Math.pow(1 - dist / connectionDist, 1.8);
            const lineTeal = nodes[i].isTeal || nodes[j].isTeal;
            
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = lineTeal
              ? `rgba(45, 212, 191, ${alpha * 0.35})`
              : `rgba(255, 255, 255, ${alpha * 0.15})`;
            ctx.lineWidth = lineTeal ? 1.2 : 0.8;
            ctx.stroke();

            // Spawn data packet
            if (timestamp - lastPacketTime > 600 && Math.random() < 0.015) {
              packets.push({
                fromX: nodes[i].x,
                fromY: nodes[i].y,
                toX: nodes[j].x,
                toY: nodes[j].y,
                progress: 0,
                speed: 0.015 + Math.random() * 0.02,
              });
              lastPacketTime = timestamp;
            }
          }
        }
      }

      // Draw data packets
      for (let p = packets.length - 1; p >= 0; p--) {
        const pkt = packets[p];
        pkt.progress += pkt.speed;
        if (pkt.progress >= 1) {
          packets.splice(p, 1);
          continue;
        }
        const px = pkt.fromX + (pkt.toX - pkt.fromX) * pkt.progress;
        const py = pkt.fromY + (pkt.toY - pkt.fromY) * pkt.progress;

        ctx.beginPath();
        ctx.arc(px, py, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = '#2dd4bf';
        ctx.shadowColor = '#14b8a6';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        const pulse = Math.sin(timestamp * 0.0025 + n.phase) * 0.8;
        const r = Math.max(n.radius + pulse, 1.2);

        ctx.beginPath();
        ctx.arc(n.x, n.y, r, 0, Math.PI * 2);

        if (n.isTeal) {
          ctx.fillStyle = '#2dd4bf';
          ctx.shadowColor = '#14b8a6';
          ctx.shadowBlur = 12;
          ctx.fill();
          ctx.shadowBlur = 0;

          // Subtle outer halo on teal nodes
          ctx.beginPath();
          ctx.arc(n.x, n.y, r + 4, 0, Math.PI * 2);
          ctx.strokeStyle = 'rgba(45, 212, 191, 0.2)';
          ctx.lineWidth = 1;
          ctx.stroke();
        } else {
          ctx.fillStyle = 'rgba(255, 255, 255, 0.45)';
          ctx.shadowBlur = 0;
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      resize();
      initNodes();
    };

    window.addEventListener('resize', handleResize);
    resize();
    initNodes();
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="hero" id="home">
      <div className="container hero-container">
        <div className="hero-content reveal reveal-left">
          <div className="eyebrow-badge">
            <span className="pulse-dot"></span>
            <span>CREATOR-LED &bull; STRATEGY &bull; FULL EXECUTION</span>
          </div>

          <h1 className="hero-title">
            I GREW 0 TO 100K.<br />
            <span className="accent">NOW I DO IT FOR YOU.</span>
          </h1>

          <p className="hero-sub">
            Not an agency. Not a team of strangers. I&apos;m Chaithu &mdash; a creator who built a real audience from scratch and now applies that exact system to your brand&apos;s Instagram.
          </p>

          <div className="hero-btns">
            <MagneticLiquidButton
              variant="aurora"
              size="lg"
              href="https://wa.me/916383884581"
              target="_blank"
              leftIcon={<MessageCircle size={18} />}
              className="font-head uppercase tracking-wider text-base"
            >
              Chat on WhatsApp &rarr;
            </MagneticLiquidButton>
            <MagneticLiquidButton
              variant="glass"
              size="lg"
              href="#plans"
              rightIcon={<span className="text-base leading-none">&darr;</span>}
              className="font-head uppercase tracking-wider text-base"
            >
              See Plans
            </MagneticLiquidButton>
          </div>

          <div className="trust-row">
            <div className="trust-item">
              <span className="status-dot"></span>
              <span>I personally edit every reel</span>
            </div>
            <div className="trust-item">
              <span className="status-dot"></span>
              <span>100K followers built from 0</span>
            </div>
            <div className="trust-item">
              <span className="status-dot"></span>
              <span>Your Instagram. My responsibility.</span>
            </div>
          </div>
        </div>

        <div className="hero-visual reveal reveal-right">
          {/* Interactive constellation canvas in background */}
          <canvas ref={canvasRef} className="hero-canvas" />

          {/* Luminous Halo Ring effect behind portrait */}
          <div className="hero-halo-glow" aria-hidden="true" />
          <div className="hero-halo-ring" aria-hidden="true" />

          {/* Transparent Cutout Portrait with seamless background immersion */}
          <div className="hero-portrait-frame">
            <img 
              src="/images/hero-portrait-cutout.png" 
              alt="Chaithu — Creator & Strategist behind GEN-NETZ"
              className="hero-portrait-img"
            />
            <div className="hero-portrait-fade" aria-hidden="true" />
          </div>

          {/* Floating Credentials Card */}
          <div className="hero-floating-badge !flex-col !items-start gap-2 max-w-[270px] sm:max-w-xs border border-teal-500/40 bg-neutral-950/90 backdrop-blur-xl p-3 sm:p-4 rounded-2xl shadow-[0_10px_35px_rgba(0,0,0,0.8),0_0_25px_rgba(45,212,191,0.2)]">
            <div className="flex items-center gap-2">
              <span className="hero-floating-badge-dot" />
              <span className="text-xs sm:text-sm font-bold text-white tracking-wide uppercase font-head">100K+ Followers</span>
              <span className="text-[10px] text-teal-400 font-medium px-1.5 py-0.5 rounded bg-teal-500/10 border border-teal-500/20">Built from 0</span>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-0.5">
              <span className="text-[10px] sm:text-[11px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-neutral-300">Personal Editor</span>
              <span className="text-[10px] sm:text-[11px] px-2 py-0.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 font-medium">Real Creator</span>
              <span className="text-[10px] sm:text-[11px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-neutral-300">Strategy-First</span>
              <span className="text-[10px] sm:text-[11px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-neutral-300">Known Face</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
