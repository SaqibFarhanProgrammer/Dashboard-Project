"use client";
import Navbar from "../components/Navbar";
import TopNavbar from "../components/TopNavbar";
import { useState, useEffect } from "react";

const Page = () => {
  

  return (
    <div className="main-container flex h-screen bg-gray-50">
      <div className="sidebar-container">
        <Navbar />
      </div>
      
      <div className="main-content flex flex-col flex-grow">
        <TopNavbar />
     
      </div>
    </div>
  );
};

export default Page;