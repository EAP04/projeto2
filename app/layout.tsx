// import Navbar from "./components/navbar";
import Navbar from "./components/navbar";
// import SearchBox from "@/components/SearchBox";
import React from "react";
import "./globals.css";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
