"use client";

import ClientsLogo from "@/components/ClientsLogo";
import FeturedProducts from "@/components/FeturedProducts";
import Hero from "@/components/Hero";
import Trending from "@/components/Trending";
import { motion } from "framer-motion";

export default function Home() {
  const pageVariants = {
    initial: {
      opacity: 0,
      y: "-100%",
    },
    animate: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      y: "100%",
    },
  };

  const pageTransition = {
    type: "tween",
    duration: 1,
  };

  return (
    <>
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        transition={pageTransition}
      >
        <Hero />
        <div className="py-8 flex flex-row w-full mx-auto justify-evenly">
          <div className="flex flex-col w-1/5">
            <FeturedProducts />
          </div>
          <div className="flex flex-row w-3/5">
            <Trending />
          </div>
        </div>
        <ClientsLogo />
      </motion.div>
    </>
  );
}
