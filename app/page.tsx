"use client";
import React from "react";
import { motion } from "motion/react";
import { LampContainer } from "@/components/ui/lamp";

export default function Home() {
  return (
    <LampContainer className="rounded-none">
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Lumos AI
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.5,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-4 bg-gradient-to-br from-slate-400 to-slate-600 bg-clip-text text-center text-xl font-medium tracking-tight text-transparent md:text-2xl max-w-3xl mx-auto"
      >
        Empowering camera-shy creators. Upload your videos, choose your
        style,and let AI generate the perfect commentary.
      </motion.p>
    </LampContainer>
  );
}
