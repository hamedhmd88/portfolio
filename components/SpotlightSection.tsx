"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

const logos = [
  "/logo/React.png",
  "/logo/NextjsIcon.png",
  "/logo/TypescriptIcon.png",
  "/logo/TailwindcssIcon.png",
  "/logo/Framer.png",
  "/logo/GitIcon.png",
  // لوگوهای بیشتر اضافه کنید
];

export default function SpotlightSection() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const getRandomPosition = () => {
    return {
      x: Math.random() * 100,
      y: Math.random() * 100,
    };
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(getRandomPosition());
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(to right, black 0%, transparent 50%, black 100%), linear-gradient(to bottom, black 0%, transparent 50%, black 100%)",
        backgroundBlendMode: "multiply",
      }}
    >
      {/* گرید لوگوها */}
      <div className="grid grid-cols-3 gap-8 z-10 opacity-30">
        {logos.map((logo, index) => (
          <Image key={index} src={logo} alt={`Logo ${index}`} width={100} height={100} />
        ))}
      </div>

      {/* دایره سفید متحرک مانند لامپ */}
      <motion.div
        className="absolute bg-white rounded-full pointer-events-none"
        style={{
          width: "200px",
          height: "200px",
          filter: "blur(50px)",
          opacity: 0.8,
        }}
        animate={{
          x: `${position.x}vw`,
          y: `${position.y}vh`,
        }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />

      {/* لایه تاریک برای افزایش سایه */}
      <div className="absolute inset-0 bg-black/70 pointer-events-none" />
    </section>
  );
}
