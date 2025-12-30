 "use client";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import {
  Activity,
  DollarSign,
  Home,
  Infinity,
  LinkIcon,
  Package2,
  Percent,
  PieChart,
  Settings,
  ShoppingBag,
  Sparkles,
  Store,
  TrendingUp,
  Users,
} from "lucide-react";
import { Logo } from "@/components/sidebar-03/logo";
import type { Route } from "./nav-main";
import DashboardNavigation from "@/components/sidebar-03/nav-main";

// Hero icon component
const HeroIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M14 21h1" />
    <path d="M21 14v1" />
    <path d="M21 19a2 2 0 0 1-2 2" />
    <path d="M21 9v1" />
    <path d="M3 14v1" />
    <path d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2" />
    <path d="M3 9v1" />
    <path d="M5 21a2 2 0 0 1-2-2" />
    <path d="M9 21h1" />
  </svg>
);

const dashboardRoutes: Route[] = [
  {
    id: "hero",
    title: "Hero",
    icon: <HeroIcon className="size-4" />,
    link: "/blocks/hero",
  },
  {
    id: "products",
    title: "Products",
    icon: <Package2 className="size-4" />,
    link: "#",
    subs: [
      {
        title: "Catalogue",
        link: "#",
        icon: <Package2 className="size-4" />,
      },
      {
        title: "Checkout Links",
        link: "#",
        icon: <LinkIcon className="size-4" />,
      },
      {
        title: "Discounts",
        link: "#",
        icon: <Percent className="size-4" />,
      },
    ],
  },
  {
    id: "usage-billing",
    title: "Usage Billing",
    icon: <PieChart className="size-4" />,
    link: "#",
    subs: [
      {
        title: "Meters",
        link: "#",
        icon: <PieChart className="size-4" />,
      },
      {
        title: "Events",
        link: "#",
        icon: <Activity className="size-4" />,
      },
    ],
  },
  {
    id: "benefits",
    title: "Benefits",
    icon: <Sparkles className="size-4" />,
    link: "#",
  },
  {
    id: "customers",
    title: "Customers",
    icon: <Users className="size-4" />,
    link: "#",
  },
  {
    id: "sales",
    title: "Sales",
    icon: <ShoppingBag className="size-4" />,
    link: "#",
    subs: [
      {
        title: "Orders",
        link: "#",
        icon: <ShoppingBag className="size-4" />,
      },
      {
        title: "Subscriptions",
        link: "#",
        icon: <Infinity className="size-4" />,
      },
    ],
  },
  {
    id: "storefront",
    title: "Storefront",
    icon: <Store className="size-4" />,
    link: "#",
  },
  {
    id: "analytics",
    title: "Analytics",
    icon: <TrendingUp className="size-4" />,
    link: "#",
  },
  {
    id: "finance",
    title: "Finance",
    icon: <DollarSign className="size-4" />,
    link: "#",
    subs: [
      { title: "Incoming", link: "#" },
      { title: "Outgoing", link: "#" },
      { title: "Payout Account", link: "#" },
    ],
  },
  {
    id: "settings",
    title: "Settings",
    icon: <Settings className="size-4" />,
    link: "#",
    subs: [
      { title: "General", link: "#" },
      { title: "Webhooks", link: "#" },
      { title: "Custom Fields", link: "#" },
    ],
  },
];

export function DashboardSidebar() {
  return (
    <Sidebar variant="floating" collapsible="icon">
      <SidebarHeader className="flex md:pt-3.5 flex-row items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="relative h-8 w-8">
            <img
              src="/EZ-Blocks-Icon.png"
              alt="EZ-Blocks Logo"
              className="h-full w-auto"
            />
          </div>
          <span className="font-semibold text-black dark:text-white">
            EZ-Blocks
          </span>
        </a>
      </SidebarHeader>
      <SidebarContent className="gap-4 px-2 py-4">
        <DashboardNavigation routes={dashboardRoutes} />
      </SidebarContent>
    </Sidebar>
  );
}
