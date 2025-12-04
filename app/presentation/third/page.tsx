"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const sections = [
  {
    title: "Problem",
    content: (
      <>
        <p>Complixety in client-server communication especially in meta frameworks, main problems:</p>
        <ul className="list-disc pl-5 mt-2">
          <li>Boilerplate by pre-typing calls</li>
          <li>Overfetching or under-fetching data</li>
          <li>Over abstracting network communication between client and server</li>
        </ul>
        <p>You can visit problem&apos;s code from here <code>/app/third-challenge/problem</code></p>
      </>
    ),
  },
  {
    title: "Solution",
    content: (
      <p>
        Use RPCs selectively via <strong>server actions</strong>, targeting only specific parts of the application to reduce unnecessary network calls.
      </p>
    ),
  },
  {
    title: "Solution: Audience Exercise",
    content: (
      <p>
        Create another RPC function to fetch all users&apos;s attributes and log them.
      </p>
    ),
  },
  {
    title: "Theory",
    content: (
      <p>
        RPCs help simplify network communication in modern web apps and reduce boilerplate, while giving more control over what data is requested and when.
      </p>
    ),
  },
];

export default function RPCPresentationPage() {
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
            className={`w-3 h-3 rounded-full ${idx === current ? "bg-blue-600" : "bg-gray-300"}`}
          />
        ))}
      </div>
    </div>
  );
}
