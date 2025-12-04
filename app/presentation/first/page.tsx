"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image"

const sections = [
  {
    title: "Problem",
    content: (
      <>
        <p>Old websites often required full page reloads for every interaction.</p>
        <ul className="pl-5 mt-2">
          <li>Legacy UI in <code>public/pages-old</code></li>
          <li>
            <a href="https://en.wikipedia.org/wiki/Egypt" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
              Wikipedia
            </a> and old Facebook.
          </li>
          <Image
            src="https://www.feedough.com/wp-content/uploads/2020/03/Feedough_Facebook_News_Feed.webp"
            alt="img"
            unoptimized
            width={350}
            height={350}
            className="mx-auto py-2"
          />
          <q>
            Especially in case of slow and interrupted internet connections.
          </q>
        </ul>
      </>
    ),
  },
  {
    title: "Solution",
    content: (
      <p>Implement SPA as in <code>/first-challenge/first-solution</code> using React routing and partial page updates.</p>
    ),
  },
  {
    title: "Solution: Audience Exercise",
    content: (
      <p>Create another router with different content and number of routes to see SPA behavior.</p>
    ),
  },
  {
    title: "Solution in Real Life",
    content: (
      <p>
        Example: <a href="https://www.linkedin.com/my-items/saved-jobs/" className="text-blue-600 underline">LinkedIn saved jobs</a> uses SPA-like navigation.
      </p>
    ),
  },
  {
    title: "Conclusion",
    content: <p>Partial page update allows changing only necessary components instead of reloading the entire page for smoother and uninterrupted experience.</p>,
  },
];

export default function PresentationPage() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    if (current < sections.length - 1) setCurrent(current + 1);
  };

  const prevSlide = () => {
    if (current > 0) setCurrent(current - 1);
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-gray-50">
      {/* Slide */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 flex items-center justify-center p-6"
        >
          <Card className="w-4/5 h-4/5 shadow-lg flex flex-col justify-center">
            <CardHeader>
              <CardTitle className="text-2xl text-center">{sections[current].title}</CardTitle>
            </CardHeader>
            <CardContent className="text-center">{sections[current].content}</CardContent>
          </Card>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      {current > 0 && (
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 -translate-y-1/2 p-3 bg-white rounded-full shadow hover:bg-gray-100"
        >
          ↑
        </button>
      )}
      {current < sections.length - 1 && (
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 -translate-y-1/2 p-3 bg-white rounded-full shadow hover:bg-gray-100"
        >
          ↓
        </button>
      )}

      {/* Bullets */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {sections.map((_, idx) => (
          <span
            key={idx}
            className={`w-3 h-3 rounded-full ${idx === current ? "bg-blue-600" : "bg-gray-300"
              }`}
          />
        ))}
      </div>
    </div>
  );
}
