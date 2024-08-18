"use client";
import { connectToDatabase } from "@/lib/database";
import { connect } from "http2";
import Image from "next/image";
import { useEffect } from "react";
import Carousel from "@/components/shared/Carousel";
import LandingSection from "@/components/shared/LandingSection";
export default function Home() {
  return (
    <>
      <LandingSection />
    </>
  );
}
