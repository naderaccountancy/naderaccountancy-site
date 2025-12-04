"use client";

import { useState, useEffect } from "react";

/* ===========================================
   TESTIMONIALS COMPONENT
   
   Social proof section with creator testimonials
   =========================================== */

const testimonials = [
  {
    quote: "I was doing my own taxes and leaving thousands on the table. Ben helped me set up an S-corp and I'm saving over $15K a year in self-employment tax alone. Plus, no more April panic.",
    author: "YouTube Creator",
    role: "500K+ Subscribers",
    properties: "Tech & Education Content",
    image: null,
  },
  {
    quote: "Finally, an accountant who doesn't ask me to explain what AdSense is. Ben understands creator income inside and out. The quarterly planning alone has been a game-changer for my stress levels.",
    author: "Course Creator",
    role: "$300K+ Annual Revenue",
    properties: "Online Education",
    image: null,
  },
  {
    quote: "I had income from Twitch, YouTube, sponsors, and Patreon—all mixed together and confusing. Ben organized everything, found deductions I didn't know existed, and made tax season actually manageable.",
    author: "Streamer & Podcaster",
    role: "Full-Time Creator",
    properties: "Gaming & Entertainment",
    image: null,
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[var(--color-gold)] font-semibold text-sm uppercase tracking-wider">
            Creator Experiences
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[var(--color-navy-deep)]">
            What Creators Are Saying
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Hear from content creators who stopped stressing about taxes.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Quote Icon */}
          <div className="absolute -top-4 left-0 sm:left-8 text-[var(--color-gold)]/20">
            <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>

          {/* Testimonial Cards */}
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-[var(--color-gray-50)] rounded-2xl p-8 sm:p-12">
                    <p className="text-xl sm:text-2xl text-[var(--color-navy-deep)] leading-relaxed mb-8 font-medium">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    
                    <div className="flex items-center gap-4">
                      {/* Avatar */}
                      <div className="w-14 h-14 rounded-full bg-[var(--color-navy-deep)] flex items-center justify-center text-[var(--color-gold)] font-bold text-lg">
                        {testimonial.image ? (
                          <img
                            src={testimonial.image}
                            alt={testimonial.author}
                            className="w-full h-full rounded-full object-cover"
                          />
                        ) : (
                          testimonial.author.split(" ").map((n) => n[0]).join("")
                        )}
                      </div>
                      
                      <div>
                        <p className="font-semibold text-[var(--color-navy-deep)]">
                          {testimonial.author}
                        </p>
                        <p className="text-sm text-gray-600">
                          {testimonial.role} • {testimonial.properties}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-[var(--color-gold)] w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "$10K+", label: "Avg. Annual Savings" },
            { number: "100%", label: "Creator-Focused" },
            { number: "0", label: "April Surprises" },
            { number: "24hr", label: "Response Time" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-[var(--color-gold)]">
                {stat.number}
              </p>
              <p className="text-gray-600 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
