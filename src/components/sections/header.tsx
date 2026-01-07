"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import posthog from "posthog-js";

interface NavItem {
  name: string;
  href: string;
  hasDropdown: boolean;
  dropdownItems?: Array<{
    title: string;
    href: string;
    description: string;
  }>;
}

/**
 * Navigation items and dropdown choices can be expanded here.
 * According to instructions: Product, Solutions, Pricing, Company.
 */
const NAV_LINKS: NavItem[] = [
  { 
    name: "Home", 
    href: "/", 
    hasDropdown: false,
    dropdownItems: [],
  },
  { name: "Blog", href: "/blog", hasDropdown: false },
  { name: "hi@snowbasestudio.com", href: "mailto:hi@snowbasestudio.com", hasDropdown: false },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "absolute inset-x-0 top-0 z-50 border-b border-foreground/5 transition-all duration-300",
          isScrolled
            ? "glass-nav bg-background/80"
            : "bg-transparent border-transparent"
        )}
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          <div className="relative flex flex-wrap items-center justify-between lg:py-3 py-2">
            {/* Logo Section */}
            <div className="flex justify-between items-center gap-8 max-lg:w-full">
              <a aria-label="home" className="flex items-center space-x-2" href="/">
                <div className="flex items-center gap-2">
                  <div className="relative h-6 w-6">
                    <img
                      src="/EZ-Blocks-Icon.png"
                      alt="Snowbase Studio Logo"
                      className="h-full w-auto"
                    />
                  </div>
                  <span className="text-foreground text-base font-semibold tracking-tight">
                    Snowbase Studio
                  </span>
                </div>
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => {
                  const newState = !mobileMenuOpen;
                  setMobileMenuOpen(newState);
                  posthog.capture("mobile_menu_toggled", {
                    action: newState ? "opened" : "closed",
                    location: "header",
                  });
                }}
                aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
                className="relative z-20 block cursor-pointer p-2 lg:hidden text-foreground"
              >
                {mobileMenuOpen ? (
                  <X className="size-5 transition-transform duration-200" />
                ) : (
                  <Menu className="size-5 transition-transform duration-200" />
                )}
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block absolute inset-0 m-auto size-fit">
              <nav className="flex items-center justify-center gap-3">
                {NAV_LINKS.map((link) => (
                  <div key={link.name} className="relative">
                    {link.hasDropdown ? (
                      <div className="group">
                        <button className="nav-link inline-flex h-8 items-center justify-center rounded-md px-4 py-1 text-sm font-medium transition-all hover:bg-foreground/5 hover:text-foreground">
                          {link.name}
                          <ChevronDown className="ml-1 size-3" />
                        </button>
                        <div className="absolute left-0 top-full mt-1 w-[400px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                          <div className="bg-background border border-border rounded-md shadow-lg p-4">
                            <div className="grid gap-3">
                              {link.dropdownItems?.map((item) => (
                                <a
                                  key={item.title}
                                  href={item.href}
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                  onClick={() => posthog.capture("nav_dropdown_item_clicked", {
                                    parent_menu: link.name,
                                    item_title: item.title,
                                    item_href: item.href,
                                    location: "header_desktop",
                                  })}
                                >
                                  <div className="text-sm font-medium leading-none">{item.title}</div>
                                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                    {item.description}
                                  </p>
                                </a>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <a 
                        href={link.href}
                        className="nav-link inline-flex h-8 items-center justify-center rounded-md px-4 py-1 text-sm font-medium transition-all hover:bg-foreground/5 hover:text-foreground"
                      >
                        {link.name}
                      </a>
                    )}
                  </div>
                ))}
              </nav>
            </div>

            {/* Auth Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="#enterprise"
                className="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap text-xs font-medium transition-all duration-200 h-8 rounded-md px-4 bg-[#6366f1] text-white border-[0.5px] border-white/20 shadow-md shadow-black/10 hover:bg-[#6366f1]/90 ring-1 ring-[#6366f1]/20"
                onClick={() => posthog.capture("header_get_started_clicked", {
                  location: "header_desktop",
                  cta_text: "Get Started",
                })}
              >
                Get Started
              </a>
            </div>

            {/* Mobile Navigation Drawer */}
            <div
              className={cn(
                "lg:hidden w-full overflow-hidden transition-all duration-300 ease-in-out",
                mobileMenuOpen ? "max-h-[500px] opacity-100 py-6" : "max-h-0 opacity-0"
              )}
            >
              <nav className="flex flex-col gap-4">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground text-sm font-medium py-1"
                  >
                    {link.name}
                  </a>
                ))}
                <hr className="border-border/50 my-2" />
                <div className="flex flex-col gap-3">
                  <a
                    href="#enterprise"
                    className="flex h-10 w-full items-center justify-center rounded-md bg-[#6366f1] text-sm font-medium text-white px-4 shadow-md"
                    onClick={() => posthog.capture("header_get_started_clicked", {
                      location: "header_mobile",
                      cta_text: "Get Started",
                    })}
                  >
                    Get Started
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}