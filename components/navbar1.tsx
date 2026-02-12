"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { BookOpen, Users, Target, Building2, Database, Cloud, Layers3, Briefcase, Menu } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface Navbar1Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  menu?: MenuItem[];
}

const Navbar1 = ({
  logo = {
    url: "#",
    src: "/Logo.png",
    alt: "logo",
    title: "",
  },
  menu = [
    { title: "Home", url: "/" },
    {
      title: "About Us",
      url: "/about-us",
      items: [
        {
          title: "Introduction",
          icon: <BookOpen className="size-5 text-blue-500" />,
          url: "/about-us",
        },
        {
          title: "Team",
          icon: <Users className="size-5 text-indigo-500" />,
          url: "/about-us#team",
        },
        {
          title: "Vision",
          icon: <Target className="size-5 text-red-500" />,
          url: "/about-us#vision",
        },
        {
          title: "Clients Industries",
          icon: <Building2 className="size-5 text-orange-500" />,
          url: "/about-us#clients",
        },
      ],
    },

    {
      title: "Services",
      url: "/services",
      items: [
        {
          title: "Data Asset Modernization",
          icon: <Database className="size-5 text-purple-500" />,
          url: "/services/data-asset-modernization",
        },
        {
          title: "Cloud Migration",
          icon: <Cloud className="size-5 text-sky-500" />,
          url: "/services/cloud-migration",
        },
        {
          title: "Application Modernization",
          icon: <Layers3 className="size-5 text-green-500" />,
          url: "/services/application-modernization",
        },
        {
          title: "Professional Services",
          icon: <Briefcase className="size-5 text-rose-500" />,
          url: "/services/professional-services",
        },
      ],
    },

    { title: "Careers", url: "/careers" },
    { title: "Contact Us", url: "/contact-us" },
  ],
}: Navbar1Props) => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <section className="py-2">
      <div className="container">

        {/* ================= DESKTOP NAV ================= */}
        <nav className="hidden lg:flex items-center justify-between px-6 py-4">

          {/* Logo */}
          <a href={logo.url} className="flex items-center gap-2">
            <img src={logo.src} className="h-14 w-auto dark:invert" alt={logo.alt} />
            <span className="text-lg font-bold">{logo.title}</span>
          </a>

          {/* Menu + CTA */}
          <div className="flex items-center gap-10">

            <NavigationMenu>
              <NavigationMenuList className="flex items-center gap-6">
                {menu.map((item) => renderMenuItem(item, pathname, router))}
              </NavigationMenuList>
            </NavigationMenu>

            <Link href="/contact-us">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-md">
                LET’S TALK
              </Button>
            </Link>
          </div>
        </nav>

        {/* ================= MOBILE NAV ================= */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between py-4">

            <a href={logo.url}>
              <img src={logo.src} className="h-8 dark:invert" alt={logo.alt} />
            </a>

            <Sheet>
              <SheetTrigger asChild suppressHydrationWarning>
                <Button variant="outline" size="icon">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>

              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>
                </SheetHeader>

                <Accordion type="single" collapsible className="mt-6 space-y-4">
                  {menu.map((item) => renderMobileMenuItem(item))}
                </Accordion>
              </SheetContent>
            </Sheet>
          </div>
        </div>

      </div>
    </section>
  );
};

/* ================= HELPERS ================= */

/* ================= HELPERS (Inside Component to access router) ================= */

const renderMenuItem = (item: MenuItem, pathname: string, router: any) => {
  const isActive = pathname === item.url;

  if (item.items) {
    return (
      <NavigationMenuItem key={item.title} className="relative group">
        <NavigationMenuTrigger
          className="bg-transparent px-0 text-[16px] font-medium"
          suppressHydrationWarning
          onClick={() => router.push(item.url)}
        >
          {item.title}
          <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-gradient-to-r from-purple-500 via-sky-500 to-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform" />
        </NavigationMenuTrigger>

        <NavigationMenuContent className="mt-3 rounded-xl border bg-white shadow-xl">
          <div className="grid w-[420px] gap-2 p-3">
            {item.items.map((sub) => (
              <NavigationMenuLink asChild key={sub.title}>
                <SubMenuLink item={sub} />
              </NavigationMenuLink>
            ))}
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title} className="relative group">
      <NavigationMenuLink
        href={item.url}
        className={`text-[16px] font-medium ${isActive ? "text-blue-600" : ""}`}
      >
        {item.title}
        <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-gradient-to-r from-purple-500 via-sky-500 to-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform" />
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title}>
        <AccordionTrigger>{item.title}</AccordionTrigger>
        <AccordionContent className="space-y-2">
          <Link
            href={item.url}
            className="block py-2 px-3 text-blue-600 font-semibold border-b border-gray-100 dark:border-gray-800"
          >
            View All {item.title}
          </Link>
          {item.items.map((sub) => (
            <SubMenuLink key={sub.title} item={sub} />
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <Link key={item.title} href={item.url} className="block font-semibold">
      {item.title}
    </Link>
  );
};

const SubMenuLink = ({ item }: { item: MenuItem }) => (
  <a
    href={item.url}
    className="flex items-center gap-4 rounded-md p-3 hover:bg-muted transition"
  >
    {item.icon}
    <span className="font-medium">{item.title}</span>
  </a>
);

export { Navbar1 };
