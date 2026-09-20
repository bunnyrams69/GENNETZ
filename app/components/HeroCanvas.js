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
            <span>STRATEGY-LED &bull; CONTENT-FOCUSED &bull; BUSINESS-READY</span>
          </div>

          <h1 className="hero-title">
            WE DON&apos;T PROMISE<br />
            VIRAL NUMBERS.<br />
            <span className="accent">WE BUILD THE PROCESS</span><br />
            BEHIND REAL GROWTH.
          </h1>

          <p className="hero-sub">
            End-to-end Instagram management &mdash; strategy, content, shooting, editing, publishing, and reporting.
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
              Chat on WhatsApp
            </MagneticLiquidButton>
            <MagneticLiquidButton
              variant="glass"
              size="lg"
              href="#services"
              rightIcon={<span className="text-base leading-none">&darr;</span>}
              className="font-head uppercase tracking-wider text-base"
            >
              See Plans
            </MagneticLiquidButton>
          </div>

          <div className="trust-row">
            <div className="trust-item">
              <span className="status-dot"></span>
              <span>Full-cycle Management</span>
            </div>
            <div className="trust-item">
              <span className="status-dot"></span>
              <span>Strategy &rarr; Content &rarr; Growth</span>
            </div>
            <div className="trust-item">
              <span className="status-dot"></span>
              <span>Your Instagram. Our Responsibility.</span>
            </div>
          </div>
        </div>

        <div className="hero-visual reveal reveal-right">
          {/* Interactive constellation canvas in background */}
          <canvas ref={canvasRef} className="hero-canvas" />

          {/* Luminous Halo Ring effect behind portrait */}
          <div className="hero-halo-glow" aria-hidden="true" />
          <div className="hero-halo-ring" aria-hidden="true" />

          {/* 3D Constellation Centerpiece */}
          <div className="hero-portrait-frame hero-3d-frame">
            <img 
              src="/images/logo-3d-vignette.png" 
              alt="GENNETZ 3D Constellation Emblem"
              className="hero-3d-img"
            />
          </div>

          {/* Floating Glass Badge */}
          <div className="hero-floating-badge">
            <span className="hero-floating-badge-dot" />
            <div>
              <p className="hero-badge-title">Direct Strategy</p>
              <p className="hero-badge-sub">Full Execution</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
