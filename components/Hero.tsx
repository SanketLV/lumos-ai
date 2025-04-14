import React from "react";
import { LampContainer } from "./ui/lamp";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import Link from "next/link";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

const Hero = () => {
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
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.7,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="flex w-full items-center justify-center gap-8"
      >
        <Link href={"/login"}>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            {/* <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="dark:bg-black bg-transparent text-black dark:text-white flex items-center space-x-2"
          > */}
            <Button
              className="mt-10 bg-white text-black hover:bg-slate-300"
              size={"lg"}
            >
              Get Started
            </Button>
            {/* </HoverBorderGradient> */}
          </motion.div>
        </Link>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Button
            className="mt-10 bg-white text-black hover:bg-slate-300"
            size={"lg"}
          >
            About more
          </Button>
        </motion.div>
      </motion.div>
    </LampContainer>
  );
};

export default Hero;
