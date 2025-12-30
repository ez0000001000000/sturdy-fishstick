"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import posthog from "posthog-js";

/**
 * Navigation items and dropdown choices can be expanded here.
 * According to instructions: Product, Solutions, Pricing, Company.
 */
const NAV_LINKS = [
  { 
    name: "Product", 
    href: "#", 
    hasDropdown: true,
    dropdownItems: [
      { title: "Features", href: "#features", description: "Explore our powerful features" },
      { title: "Pricing", href: "#pricing", description: "Simple, transparent pricing" },
      { title: "Enterprise", href: "#enterprise", description: "Solutions for large teams" },
    ]
  },
  { 
    name: "Solutions", 
    href: "#", 
    hasDropdown: true,
    dropdownItems: [
      { title: "For Startups", href: "#startups", description: "Perfect for growing companies" },
      { title: "For Enterprise", href: "#enterprise-solutions", description: "Scale with confidence" },
      { title: "For Developers", href: "#developers", description: "Build faster with our APIs" },
    ]
  },
  { name: "Blog", href: "/blog", hasDropdown: false },
  { name: "Company", href: "#", hasDropdown: false },
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
          <div className="relative flex flex-wrap items-center justify-between lg:py-5 py-3">
            {/* Logo Section */}
            <div className="flex justify-between items-center gap-8 max-lg:w-full">
              <a aria-label="home" className="flex items-center space-x-2" href="/">
                <div className="flex items-center gap-2">
                  <div className="relative h-6 w-6">
                    <img
                      src="/EZ-Blocks-Icon.png"
                      alt="21Labs Logo"
                      className="h-full w-auto"
                    />
                  </div>
                  <span className="text-foreground text-base font-semibold tracking-tight">
                    21Labs
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
              <NavigationMenu>
                <NavigationMenuList className="flex items-center justify-center gap-3">
                  {NAV_LINKS.map((link) => (
                    <NavigationMenuItem key={link.name}>
                      {link.hasDropdown ? (
                        <>
                          <NavigationMenuTrigger className="nav-link inline-flex h-8 items-center justify-center rounded-md px-4 py-1 text-sm font-medium transition-all hover:bg-foreground/5 hover:text-foreground group-data-[state=open]:bg-foreground/5">
                            {link.name}
                          </NavigationMenuTrigger>
                          <NavigationMenuContent>
                            <div className="grid w-[400px] gap-3 p-4">
                              {link.dropdownItems?.map((item) => (
                                <NavigationMenuLink
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
                                </NavigationMenuLink>
                              ))}
                            </div>
                          </NavigationMenuContent>
                        </>
                      ) : (
                        <NavigationMenuLink 
                          href={link.href}
                          className="nav-link inline-flex h-8 items-center justify-center rounded-md px-4 py-1 text-sm font-medium transition-all hover:bg-foreground/5 hover:text-foreground group-data-[state=open]:bg-foreground/5"
                        >
                          {link.name}
                        </NavigationMenuLink>
                      )}
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Auth Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="#"
                className="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap text-xs font-medium transition-all duration-200 h-8 rounded-md px-4 border border-transparent bg-background text-foreground ring-1 ring-foreground/10 hover:bg-muted/50 shadow-sm shadow-black/5"
                onClick={() => posthog.capture("header_login_clicked", {
                  location: "header_desktop",
                  cta_text: "Login",
                })}
              >
                Login
              </a>
              <a
                href="#"
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
                    href="#"
                    className="flex h-10 w-full items-center justify-center rounded-md border border-border bg-background text-sm font-medium text-foreground px-4 shadow-sm"
                    onClick={() => posthog.capture("header_login_clicked", {
                      location: "header_mobile",
                      cta_text: "Login",
                    })}
                  >
                    Login
                  </a>
                  <a
                    href="#"
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