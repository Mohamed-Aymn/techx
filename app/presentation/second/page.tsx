"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const sections = [
  {
    title: "Problem",
    content: (
      <>
        <p>Server-Side Rendering solves SEO issues that pure CSR (SPA) cannot handle.</p>
        <ul className="pl-5 mt-2 list-disc">
          <li>SPA does not support SEO</li>
          <li>Slow websites on initial load</li>
        </ul>
      </>
    ),
  },
  {
    title: "Solution",
    content: (
      <>
        <p>
          Implemented SSR in <code>/app/(challenges)/second-challenge/first-solution</code>
        </p>
        <p>Trigger these commands to check the validity of SEO Meta tags:</p>
        <ul className="pl-5 mt-2 list-disc">
          <li><code>curl http://localhost:3000/second-challenge/first-solution -o page.html</code></li>
          <li><code>grep -oP &apos;(?&lt;=&lt;title&gt;).*?(?=&lt;/title&gt;)&apos; page.html</code></li>
          <li><code>grep -iPo &apos;(?&lt;= &lt;meta name=&quot;description&quot; content=&quot;).*?(?=&quot;)&apos; page.html</code></li>
          <li><code>grep -iPo &apos;(?&lt;= &lt;meta name=&quot;keywords&quot; content=&quot;).*?(?=&quot;)&apos; page.html</code></li>
        </ul>
      </>
    ),
  },
  {
    title: "Solution: Audience Exercise",
    content: (
      <p>
        Import a client component in SSR page to demonstrate hybrid rendering (CSR + SSR) and interactivity.
      </p>
    ),
  },
  {
    title: "Theory",
    content: (
      <p>
        In modern web apps, <b>boundaries between CSR and SSR are getting blured.</b> You can combine server rendering for SEO with client components for interactivity.
      </p>
    ),
  },
];

export default function SSRPresentationPage() {
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
