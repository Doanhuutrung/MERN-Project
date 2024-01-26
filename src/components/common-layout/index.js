"use client";

import { motion } from "framer-motion";
import Head from "next/head";
import Navbar from "../navbar";
export default function CommonLayout() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <Head>
        <title>Netlfix Clone</title>
      </Head>
      <>
        <Navbar />
        <div className="relative pl-4 pb-4 lg:space-y-24"></div>
      </>
    </motion.div>
  );
}
