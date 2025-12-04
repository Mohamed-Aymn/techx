"use client";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function A() {
  return <h1>This is the first page</h1>;
}

function B() {
  return <h1>And this is the second one!!! without reload!!!</h1>;
}

export default function Page() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/a">A</Link>
        <Link to="/b">B</Link>
      </nav>

      <Routes>
        <Route path="/a" element={<A />} />
        <Route path="/b" element={<B />} />
      </Routes>
    </BrowserRouter>
  );
}
