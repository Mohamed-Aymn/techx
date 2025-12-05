"use client";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function A() {
  return <h1>This is the first page</h1>;
}

function B() {
  return <h1>And this is the second one!!! without reload!!!</h1>;
}

export default function ClientPage() {
  return (
    <BrowserRouter>
      <nav className="flex gap-2">
        <Link
          className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
          to="/first-challenge/first-solution/a"
        >
          A
        </Link>
        <Link
          className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
          to="/first-challenge/first-solution/b"
        >
          B
        </Link>
      </nav>

      <Routes>
        <Route path="/first-challenge/first-solution/a" element={<A />} />
        <Route path="/first-challenge/first-solution/b" element={<B />} />
      </Routes>
    </BrowserRouter>
  );
}
