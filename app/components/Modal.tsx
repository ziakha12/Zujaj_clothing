"use client"
import Image from "next/image";
import { useState, useEffect } from "react";
import Logo from '@/public/logo.png'

export default function ComingSoonModal() {
  const targetDate = new Date("2025-09-15T12:00:00").getTime(); // 🎯 Target Date

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="fixed inset-0 h-screen w-screen bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-lg p-6 max-w-[900px] text-center">
        <Image src={Logo} alt="logo" className="text-center mx-auto"/>
        <h1 className="font-serif text-6xl text-slate-800 font-bold my-9 ">
          We Will Live Soon
        </h1>

        {/* Countdown Timer */}
        <div className="flex justify-center gap-4 text-slate-700 font-mono text-lg">
          <div className="text-center bg-slate-900 text-white p-2 rounded-md">
            <p className="text-2xl font-bold">{timeLeft.days}</p>
            <span className="text-sm">Days</span>
          </div>
          <div className="text-center bg-slate-900 text-white p-2 rounded-md">
            <p className="text-2xl font-bold">{timeLeft.hours}</p>
            <span className="text-sm">Hours</span>
          </div>
          <div className="text-center bg-slate-900 text-white p-2 rounded-md">
            <p className="text-2xl font-bold">{timeLeft.minutes}</p>
            <span className="text-sm">Minutes</span>
          </div>
          <div className="text-center bg-slate-900 text-white p-2 rounded-md">
            <p className="text-2xl font-bold">{timeLeft.seconds}</p>
            <span className="text-sm">Seconds</span>
          </div>
        </div>
      </div>
    </div>
  );
}
