import React, { useState, useEffect } from "react";

function Countdown({ targetDate = "2026-08-01T00:00:00" }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = new Date(targetDate);

    const updateCountdown = () => {
      const now = new Date();
      const diff = target - now;

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };

    const timer = setInterval(updateCountdown, 1000);
    updateCountdown();

    return () => clearInterval(timer);
  }, [targetDate]);

  const format = (value) => String(value).padStart(2, '0');

  return (
    <div className="countdown-box">
      <div>
        <strong>{format(timeLeft.days)}</strong>
        <span>jours</span>
      </div>
      <div>
        <strong>{format(timeLeft.hours)}</strong>
        <span>heures</span>
      </div>
      <div>
        <strong>{format(timeLeft.minutes)}</strong>
        <span>minutes</span>
      </div>
      <div>
        <strong>{format(timeLeft.seconds)}</strong>
        <span>secondes</span>
      </div>
    </div>
  );
}

export default Countdown;
