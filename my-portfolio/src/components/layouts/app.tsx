"use client";

import React from "react";
import { SWRConfig } from "swr";
import Navbar from "./navbar";
import Footer from "./footer";
import { Toaster } from "../ui/toaster";
import { LoadingIndicatorProvider } from "@/lib/LoadingIndicatorProvider";

const App = ({ children }: { children: React.ReactNode }) => {
  return (
    <SWRConfig>
      <div className="bg-custom-gradient min-h-screen">
        <LoadingIndicatorProvider />
        <Navbar />
        {children}
        <Footer />
        <Toaster />
      </div>
    </SWRConfig>
  );
};

export default App;
