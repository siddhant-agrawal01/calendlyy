"use client";
import React from "react";
import { motion } from "framer-motion";
import { Globe } from "@/components/ui/globe";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const Home = () => {
  const { user } = useUser();
  const router = useRouter();

  function handleGetStarted() {
    if (!user) {
      router.push("/sign-in");
    } else {
      router.push("/dashboard");
    }
  }

  return (
    <>
      {" "}
      <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        {/* <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(transparent_10%,black)]"></div> */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 mb-24">
          <div className="lg:w-1/2">
            <motion.h1
              className="text-7xl font-extrabold leading-40 gradient-title pb-6"
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{ duration: 1 }}
            >
              Easy Scheduling
              <br /> Any Time Any where
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600 mb-10"
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Smart scheduling made easy—share your availability, let others
              book in seconds, and stay focused on what truly matters.
            </motion.p>

            <ShimmerButton className="shadow-2xl" onClick={handleGetStarted}>
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                Get started
              </span>
            </ShimmerButton>
          </div>
          <div className="relative flex size-full max-w-lg items-center justify-center  rounded-lg  px-40 pb-40 pt-8 md:pb-60">
            <span className="pointer-events-none  mb-20 pb-20   bg-clip-text text-center text-4xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
              GLobally
            </span>

            <Globe className="" />
            {/* <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
