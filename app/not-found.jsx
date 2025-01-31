"use client";

import { Calendar, MoveLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted px-6">
      <div className="text-center">
        <motion.div
          initial={{ scale: 0, opacity: 0, rotate: 45 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex justify-center mb-8"
        >
          <Calendar className="w-48 h-48 text-primary" />
        </motion.div>
        
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50"
        >
          404
        </motion.h1>
        
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl mb-8 text-muted-foreground"
        >
          Oops! This time slot doesn&apos;t exist
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Link href="/">
            <Button
              className="group flex items-center gap-2 text-lg hover:scale-105 transition-transform duration-300"
              size="lg"
            >
              <MoveLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Return Home
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}