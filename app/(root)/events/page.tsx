'use client';
import { useEffect, useState } from "react";
import eventData from "@/data/events.json"; // Adjust the path as needed
import { motion, useAnimation } from "framer-motion";
import Timeline from "@/components/shared/Timeline";

const Page = () => {
  return (
    <div className="w-full mt-12">
      <div className="flex flex-col justify-center items-center mb-24">
        <div className="mt-12 sm:mt-48 text-xl font-medium text-neutral-100/[0.7] text-center">
          This is the Cultural Society, IIT Mandi
        </div>
        <h1 className="text-6xl max-sm:text-3xl max-w-screen-md font-semibold text-center leading-tight">
          Our events
        </h1>
      </div>

      <Timeline />
    </div>
  );
};

export default Page;

