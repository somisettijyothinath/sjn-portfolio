import React, { useEffect, useRef, useState } from "react";
import "../css/SkillCard.css";

/**
 * SkillCard
 * A professional 3D tilt card that shows a skill with an icon,
 * an animated circular progress ring, and the percentage.
 * The ring animates when the card scrolls into view.
 */
function SkillCard({ icon, label, percentage, color }) {
  const cardRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // Animate the ring when the card scrolls into view
  useEffect(() => {
    const node = cardRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setVisible(entry.isIntersecting));
      },
      { threshold: 0.3 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Circle math for the progress ring
  const radius = 34;
  const circumference = 2 * Math.PI * radius;
  const offset = visible
    ? circumference - (percentage / 100) * circumference
    : circumference;

  // 3D tilt follows the mouse
  const handleMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateY = ((x - rect.width / 2) / rect.width) * 16;
    const rotateX = -((y - rect.height / 2) / rect.height) * 16;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
  };

  const handleLeave = () => {
    const card = cardRef.current;
    if (card) card.style.transform = "";
  };

  return (
    <div
      className="skill-card"
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ "--skill-color": color }}
    >
      <div className="skill-card-inner">
        <div className="skill-ring">
          <svg viewBox="0 0 80 80" width="80" height="80">
            <circle className="skill-ring-track" cx="40" cy="40" r={radius} />
            <circle
              className="skill-ring-progress"
              cx="40"
              cy="40"
              r={radius}
              style={{
                strokeDasharray: circumference,
                strokeDashoffset: offset,
                stroke: color,
              }}
            />
          </svg>
          <div className="skill-ring-center">
            <i className={icon} style={{ color }} />
          </div>
        </div>
        <div className="skill-card-text">
          <h6 className="skill-card-label">{label}</h6>
          <span className="skill-card-percent" style={{ color }}>
            {visible ? percentage : 0}%
          </span>
        </div>
      </div>
    </div>
  );
}

export default SkillCard;
