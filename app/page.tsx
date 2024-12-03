"use client";

import React, { useState } from "react";
import {
  Sparkles,
  Type,
  Image,
  FileText,
  Menu,
  X,
  Zap,
  Target,
  Clock,
  Rocket,
  ArrowRight,
} from "lucide-react";

export default function Home() {
  const [contentType, setContentType] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const contentTypes = [
    {
      icon: <Type className="w-10 h-10 text-primary" />,
      title: "Text Generation",
      description: "Create articles, blog posts, and written content",
    },
    {
      icon: <Image className="w-10 h-10 text-green-600" />,
      title: "Image Generation",
      description: "Generate AI-powered images and graphics",
    },
    {
      icon: <FileText className="w-10 h-10 text-purple-600" />,
      title: "Content Summarization",
      description: "Summarize long-form content quickly and accurately",
    },
  ];

  const howItWorksSteps = [
    {
      icon: <Target className="w-12 h-12 text-primary" />,
      title: "Define Your Needs",
      description:
        "Select the type of content you want to generate and provide specific details or guidelines.",
    },
    {
      icon: <Zap className="w-12 h-12 text-yellow-600" />,
      title: "AI Generates Content",
      description:
        "Our advanced AI analyzes your input and creates high-quality, tailored content in seconds.",
    },
    {
      icon: <Clock className="w-12 h-12 text-green-600" />,
      title: "Instant Results",
      description:
        "Receive precisely crafted content that meets your exact specifications, saving time and effort.",
    },
  ];

  const whyUseSection = [
    {
      title: "Save Time",
      description:
        "Eliminate hours of content creation with AI-powered generation that produces high-quality materials in minutes.",
    },
    {
      title: "Boost Productivity",
      description:
        "Focus on strategy and creativity while AI handles the routine content generation tasks.",
    },
    {
      title: "Consistent Quality",
      description:
        "Get professionally written content that maintains a consistent tone and style across all your materials.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Sparkles className="mr-2 text-yellow-500" />
            <h1 className="text-2xl font-bold text-primary">AI Generator</h1>
          </div>

          <nav className="hidden md:flex space-x-6">
            <a
              href="#"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Home
            </a>
            <a
              href="/dashboard"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Dashboard
            </a>
            <a
              href="/dashboard/billing"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Pricing
            </a>
            <a
              href=""
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Contact
            </a>
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-primary hover:text-primary"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white shadow-md">
            <nav className="flex flex-col p-4 space-y-4">
              <a href="#" className="text-gray-700 hover:text-primary">
                Home
              </a>
              <a href="#" className="text-gray-700 hover:text-primary">
                Features
              </a>
              <a href="#" className="text-gray-700 hover:text-primary">
                Pricing
              </a>
              <a href="#" className="text-gray-700 hover:text-primary">
                Contact
              </a>
            </nav>
          </div>
        )}
      </header>

      <main className="container mx-auto px-4 py-24 flex-grow">
        {/* Floating Decorative Elements */}
        <div className="absolute -top-12 left-0 right-0 flex justify-center opacity-20">
          <Rocket className="w-64 h-64 text-blue-300 rotate-45" />
        </div>
        <div className="flex items-end justify-center">
          {/* Main Headline with Dynamic Background */}
          <div className="relative z-10 bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-2xl border border-blue-100 mb-12 flex flex-col justify-center items-center">
            <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gradient1 via-gradient2 to-gradient1 flex justify-center text-white">
              Unleash AI-Powered Content
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-6 text-center">
              Transform your content creation with cutting-edge AI that
              generates, refines, and elevates your ideas in moments.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="flex items-center bg-primary text-white px-6 py-3 rounded-full hover:bg-primary transition-colors">
                Get Started <ArrowRight className="ml-2" />
              </button>
              <button className="flex items-center border-2 border-primary text-primary px-6 py-3 rounded-full hover:bg-blue-50 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div className="text-center">
          <h2 className="text-4xl font-bold text-primary mb-4">
            AI Content Generator
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Unlock creativity and productivity with our AI-powered content
            generation tools
          </p>

          <section className="mb-16">
            <h3 className="text-3xl font-bold text-primary mb-8">
              How It Works
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {howItWorksSteps.map((step, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex justify-center mb-4">{step.icon}</div>
                  <h4 className="text-xl font-semibold text-primary mb-2 text-center">
                    {step.title}
                  </h4>
                  <p className="text-gray-600 text-center">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h3 className="text-3xl font-bold text-primary mb-8">
              Why Use Our AI Content Generator
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {whyUseSection.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <h4 className="text-2xl font-semibold text-primary mb-4 text-center">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-center">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <div className="grid md:grid-cols-3 gap-8">
            {contentTypes.map((type, index) => (
              <div
                key={index}
                className={`
                  bg-white 
                  p-6 
                  rounded-xl 
                  shadow-lg 
                  hover:shadow-2xl 
                  hover:scale-105 
                  transition-all 
                  duration-300 
                  cursor-pointer
                  ${contentType === type.title ? "ring-4 ring-blue-500" : ""}
                `}
                onClick={() => setContentType(type.title)}
              >
                <div className="flex items-center justify-center mb-4">
                  {type.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2 text-center">
                  {type.title}
                </h3>
                <p className="text-gray-600 text-center">{type.description}</p>
              </div>
            ))}
          </div>

          {contentType && (
            <div className="mt-12 bg-white p-8 rounded-xl shadow-lg max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Generate {contentType}
              </h3>
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <input
                  type="text"
                  placeholder={`Enter ${contentType.toLowerCase()} details`}
                  className="flex-grow p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <button className="bg-primary text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">
                  Generate
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Sparkles className="mr-2 text-yellow-500" />
            <span className="font-bold">AI Content Generator</span>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-blue-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              Contact
            </a>
          </div>
          <div className="mt-4 md:mt-0">
            <p className="text-sm">
              © {new Date().getFullYear()} All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
