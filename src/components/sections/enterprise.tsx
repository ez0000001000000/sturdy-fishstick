"use client";

import React, { useState, useEffect, useRef } from "react";
import { ChevronsUpDown, Check } from "lucide-react";
import posthog from "posthog-js";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";

const EnterpriseSection = () => {
  const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);
  const [jobDropdownOpen, setJobDropdownOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedJob, setSelectedJob] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  
  const countryDropdownRef = useRef<HTMLDivElement>(null);
  const jobDropdownRef = useRef<HTMLDivElement>(null);

  const countries = [
    "United States",
    "United Kingdom", 
    "Canada",
    "Australia",
    "Germany",
    "Other"
  ];

  const jobFunctions = [
    "Engineering",
    "Product Management",
    "Design",
    "Marketing",
    "Sales",
    "Other"
  ];

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        countryDropdownRef.current &&
        !countryDropdownRef.current.contains(event.target as Node)
      ) {
        setCountryDropdownOpen(false);
      }
      if (
        jobDropdownRef.current &&
        !jobDropdownRef.current.contains(event.target as Node)
      ) {
        setJobDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle country dropdown click (close other dropdown)
  const handleCountryDropdownClick = () => {
    setCountryDropdownOpen(!countryDropdownOpen);
    if (jobDropdownOpen) {
      setJobDropdownOpen(false);
    }
  };

  // Handle job dropdown click (close other dropdown)
  const handleJobDropdownClick = () => {
    setJobDropdownOpen(!jobDropdownOpen);
    if (countryDropdownOpen) {
      setCountryDropdownOpen(false);
    }
  };
  return (
    <section id="enterprise" className="relative overflow-hidden bg-white">
      {/* Structural Grid Background */}
      <div className="pointer-events-none absolute inset-0 mx-auto hidden max-w-5xl grid-cols-4 lg:grid">
        <div className="h-full border-r border-dashed border-[#d1d5db]"></div>
        <div className="h-full border-r border-dashed border-[#d1d5db]"></div>
        <div className="h-full border-r border-dashed border-[#d1d5db]"></div>
        <div className="h-full border-transparent"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-24 lg:py-32">
        {/* Top Content Row */}
        <div className="grid gap-16 md:grid-cols-2 md:gap-12 lg:gap-12">
          {/* Left Column: Text Content */}
          <div className="flex flex-col max-md:text-center">
            <h1 className="mt-8 text-balance text-[2.25rem] font-semibold leading-[1.1] tracking-[-0.02em] text-[#09090b] md:text-[3rem] lg:text-[3.75rem]">
              Get Started with Snowbase Studio
            </h1>
            <p className="mt-6 max-w-sm text-balance text-[1.125rem] leading-[1.5] text-[#71717a] max-md:mx-auto">
              Contact Snowbase Studio to bring your web project to life with our expert development team.
            </p>
            <div className="mt-8">
              <a
                href="mailto:hi@snowbasestudio.com"
                className="inline-flex h-10 items-center justify-center rounded-md border-[0.5px] border-white/25 bg-[#6366f1] px-8 text-sm font-medium text-white shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)] transition-colors hover:bg-[#6366f1]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#6366f1]"
                onClick={() => posthog.capture("contact_snowbase_clicked", {
                  destination_url: "mailto:hi@snowbasestudio.com",
                  cta_text: "Contact Snowbase Studio",
                })}
              >
                Contact Snowbase Studio
              </a>
            </div>
          </div>

          {/* Right Column: Lead Form Card */}
          <div className="relative">
            <div className="absolute -inset-6 px-6 pt-4 [mask-image:linear-gradient(to_bottom,black_50%,transparent_100%)]">
              <div className="h-full w-full rounded-t-2xl bg-white/75 ring-1 ring-[#e4e4e7] shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)]"></div>
            </div>
            <form
              ref={formRef}
              className="relative space-y-6 rounded-t-2xl p-8"
              onSubmit={async (e) => {
                e.preventDefault();
                
                const name = (document.getElementById("name") as HTMLInputElement)?.value;
                const email = (document.getElementById("email") as HTMLInputElement)?.value;
                const website = (document.getElementById("website") as HTMLInputElement)?.value;
                const message = (document.getElementById("msg") as HTMLTextAreaElement)?.value;

                // Validate required fields
                if (!name?.trim()) {
                  toast.error("Please enter your name");
                  return;
                }
                
                if (!email?.trim()) {
                  toast.error("Please enter your email");
                  return;
                }
                
                if (!message?.trim()) {
                  toast.error("Please enter a message");
                  return;
                }

                setIsSubmitting(true);
                
                const formData = new FormData(e.currentTarget);

                posthog.capture("contact_form_submitted", {
                  form_name: "enterprise_contact",
                  has_name: !!name,
                  has_email: !!email,
                  has_website: !!website,
                  has_message: !!message,
                  country: selectedCountry || "not_selected",
                  job_function: selectedJob || "not_selected",
                });

                // Identify user if email is provided
                if (email) {
                  posthog.identify(email, {
                    email: email,
                    name: name || undefined,
                    company_website: website ? `https://${website}` : undefined,
                    country: selectedCountry || undefined,
                    job_function: selectedJob || undefined,
                  });
                }

                try {
                  // Save to Supabase
                  const { data, error } = await supabase
                    .from('messages')
                    .insert({
                      name: name || null,
                      email: email || null,
                      website: website ? `https://${website}` : null,
                      country: selectedCountry || null,
                      job_function: selectedJob || null,
                      message: message || null
                    });

                  if (error) {
                    console.error('Error saving to Supabase:', error);
                    toast.error("Error sending message. Please try again.");
                  } else {
                    console.log('Message saved successfully:', data);
                    toast.success("Your message has been received and we will try to get back to you between 1-3 business days");
                    // Reset form
                    formRef.current?.reset();
                    setSelectedCountry("");
                    setSelectedJob("");
                  }
                } catch (error) {
                  console.error('Unexpected error:', error);
                  toast.error("Error sending message. Please try again.");
                } finally {
                  setIsSubmitting(false);
                }
              }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-[#09090b]">Full name</label>
                  <input
                    type="text"
                    id="name"
                    className="flex h-9 w-full rounded-md border border-transparent bg-white px-3 py-1 text-sm shadow-sm ring-1 ring-[#09090b]/10 transition-shadow focus:outline-none focus:ring-2 focus:ring-[#6366f1]/25"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-[#09090b]">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="flex h-9 w-full rounded-md border border-transparent bg-white px-3 py-1 text-sm shadow-sm ring-1 ring-[#09090b]/10 transition-shadow focus:outline-none focus:ring-2 focus:ring-[#6366f1]/25"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-[#71717a]">Country/Region (Optional)</label>
                <div className="relative" ref={countryDropdownRef}>
                  <button
                    type="button"
                    onClick={handleCountryDropdownClick}
                    className="flex h-9 w-full items-center justify-between rounded-md border-transparent bg-white px-3 py-2 text-sm shadow-sm ring-1 ring-[#09090b]/10"
                  >
                    <span className={selectedCountry ? "text-[#09090b]" : "text-[#71717a]"}>
                      {selectedCountry || "Select Country/Region"}
                    </span>
                    <ChevronsUpDown className="h-4 w-4 opacity-50" />
                  </button>
                  
                  {countryDropdownOpen && (
                    <div className="absolute top-full left-0 right-0 z-50 mt-1 rounded-md border border-[#e4e4e7] bg-white shadow-lg">
                      <div className="max-h-60 overflow-auto">
                        {countries.map((country) => (
                          <button
                            key={country}
                            type="button"
                            onClick={() => {
                              setSelectedCountry(country);
                              setCountryDropdownOpen(false);
                            }}
                            className="flex w-full items-center justify-between px-3 py-2 text-sm hover:bg-[#f8fafc] transition-colors"
                          >
                            <span>{country}</span>
                            {selectedCountry === country && (
                              <Check className="h-4 w-4 text-[#6366f1]" />
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="website" className="text-sm font-medium text-[#71717a]">Company Website (Optional)</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-[#71717a]">https://</span>
                  <input
                    type="text"
                    id="website"
                    placeholder="acme.com"
                    className="flex h-9 w-full rounded-md border border-transparent bg-white pl-16 pr-3 py-1 text-sm shadow-sm ring-1 ring-[#09090b]/10 transition-shadow focus:outline-none focus:ring-2 focus:ring-[#6366f1]/25"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-[#71717a]">Job function (Optional)</label>
                <div className="relative" ref={jobDropdownRef}>
                  <button
                    type="button"
                    onClick={handleJobDropdownClick}
                    className="flex h-9 w-full items-center justify-between rounded-md border-transparent bg-white px-3 py-2 text-sm shadow-sm ring-1 ring-[#09090b]/10"
                  >
                    <span className={selectedJob ? "text-[#09090b]" : "text-[#71717a]"}>
                      {selectedJob || "Select Job Function"}
                    </span>
                    <ChevronsUpDown className="h-4 w-4 opacity-50" />
                  </button>
                  
                  {jobDropdownOpen && (
                    <div className="absolute top-full left-0 right-0 z-50 mt-1 rounded-md border border-[#e4e4e7] bg-white shadow-lg">
                      <div className="max-h-60 overflow-auto">
                        {jobFunctions.map((job) => (
                          <button
                            key={job}
                            type="button"
                            onClick={() => {
                              setSelectedJob(job);
                              setJobDropdownOpen(false);
                            }}
                            className="flex w-full items-center justify-between px-3 py-2 text-sm hover:bg-[#f8fafc] transition-colors"
                          >
                            <span>{job}</span>
                            {selectedJob === job && (
                              <Check className="h-4 w-4 text-[#6366f1]" />
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="msg" className="text-sm font-medium text-[#09090b]">Message</label>
                <textarea
                  id="msg"
                  rows={3}
                  className="flex min-h-[80px] w-full rounded-md border border-transparent bg-white px-3 py-2 text-sm shadow-sm ring-1 ring-[#09090b]/10 transition-shadow focus:outline-none focus:ring-2 focus:ring-[#6366f1]/25 resize-none"
                ></textarea>
              </div>

              <div className="grid gap-6 sm:grid-cols-[1fr_auto] items-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex h-9 items-center justify-center rounded-md border-[0.5px] border-white/25 bg-[#6366f1] px-4 py-2 text-sm font-medium text-white shadow-md transition-colors hover:bg-[#6366f1]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#6366f1] max-sm:w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Submitting..." : "Get in touch"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseSection;
