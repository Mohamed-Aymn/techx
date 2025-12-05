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
        <ul className="pl-5 mt-2 list-disc">
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
      <>
        <p>Implement SPA as in <code>/(challenges)/first-challenge/first-solution</code> using React routing and partial page updates.</p>
        <Image
          className="mx-auto p-4"
          src="data:image/png;base64,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"
          width={350}
          height={350}
          alt="img"
          unoptimized
        />
        <q>client server architecture</q>
      </>
    ),
  },
  {
    title: "Solution: Audience Exercise",
    content: (
      <p>Create another router with different content and number of routes, and different paths.</p>
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
