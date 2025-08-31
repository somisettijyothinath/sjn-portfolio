import React, { useEffect, useRef } from "react";

// Reusable skill bar
function SkillBar({ label, percentage, colorClass }) {
  const barRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            barRef.current.style.width = `${percentage}%`;
          } else {
            barRef.current.style.width = "0%";
          }
        });
      },
      { threshold: 0.3 }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => observer.disconnect();
  }, [percentage]);

  return (
    <div className="skill mt-2">
      <h6>{label}</h6>
      <div
        className="progress bg-light rounded-0"
        role="progressbar"
        aria-valuenow={percentage}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div
          ref={barRef}
          className={`progress-bar ${colorClass}`}
          style={{
            width: "0%",
            transition: "width 2s ease-in-out"
          }}
        >
          {percentage}%
        </div>
      </div>
    </div>
  );
}

export default SkillBar;
