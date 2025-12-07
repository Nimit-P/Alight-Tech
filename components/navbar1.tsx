import { Book, Menu, Sunset, Trees, Zap } from "lucide-react";
import { usePathname } from "next/navigation";

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
  auth?: {
    login: {
      title: string;
      url: string;
    };
    signup: {
      title: string;
      url: string;
    };
  };
}

const Navbar1 = ({
  logo = {
    url: "#",
    src: "/Logo.png",
    alt: "logo",
    title: "",
  },
  menu = [
    { title: "Home", url: "#" },
    {
      title: "About Us",
      url: "#",
      items: [
        {
          title: "Introduction",   
          icon: <Book className="size-5 shrink-0" />, 
          url: "#",
        },
        {
          title: "Team",
          icon: <Trees className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Vision",
          icon: <Sunset className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Clients Industries",
          icon: <Zap className="size-5 shrink-0" />,
          url: "#",
        },
      ],
    },
    {
      title: "Services",
      url: "#",
      items: [
        {
          title: "Data Asset Modernization",
          icon: <Zap className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Cloud Migration",
          icon: <Sunset className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Application Modernization",
          icon: <Book className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Professional Services",
          icon: <Book className="size-5 shrink-0" />,
          url: "#",
        },
      ],
    },
    {
      title: "Careers",
      url: "#",
    },
    {
      title: "Contact Us",
      url: "#",
    },
  ],
  auth = {
    login: { title: "Login", url: "#" },
    signup: { title: "Sign up", url: "#" },
  },
}: Navbar1Props) => {
  const pathname = usePathname();

  return (
    <section className="py-2">
      <div className="container">
              {/* Desktop Menu */}
              <nav className="hidden lg:flex items-center justify-between py-4 px-6">

                {/* LEFT SIDE - LOGO (shifted left with px-6 padding) */}
                <a href={logo.url} className="flex items-center gap-2">
                  <img
                    src={logo.src}
                    className="h-14 w-auto dark:invert"
                    alt={logo.alt}
                  />
                  <span className="text-lg font-bold tracking-tight">
                    {logo.title}
                    </span>
                </a>

          {/* RIGHT SIDE — MENU + BUTTON */}
            <div className="flex items-center gap-10">

          <NavigationMenu>
            <NavigationMenuList className="flex items-center gap-6">

              {menu.map((item) => (
                <NavigationMenuItem key={item.title}>
                  <a
                    href={item.url}
                    className={`
                      relative text-[16px] font-medium transition
                      ${pathname === item.url ? "text-blue-600" : "text-gray-700 dark:text-gray-300"}
                    `}
                  >
                    {/* MENU TEXT */}
                    {item.title}

                    {/* UNDERLINE EFFECT */}
                      <span
                        className={`
                          absolute left-0 -bottom-1 h-[2px] w-full 
                          bg-gradient-to-r from-purple-500 via-sky-500 to-cyan-400
                          rounded-full transition-all duration-300
                          ${pathname === item.url ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}
                          group-hover:opacity-100 group-hover:scale-x-100
                        `}
                      ></span>
                  </a>
                </NavigationMenuItem>
              ))}

            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA BUTTON */}
          <Button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-md">
            LET’S TALK
          </Button>
        </div>

      </nav>

        {/* Mobile Menu */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href={logo.url} className="flex items-center gap-2">
              <img
                src={logo.src}
                className="max-h-8 dark:invert"
                alt={logo.alt}
              />
            </a>
            
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
            
<SheetContent className="overflow-y-auto p-0">

  {/* Mobile Logo Header */}
  <div className="flex items-center justify-between px-4 py-4 border-b bg-white">
    <a href={logo.url} className="flex items-center gap-2">
      <img
        src={logo.src}
        className="h-8 w-auto"
        alt={logo.alt}
      />
    </a>

    {/* Close Button */}
    <SheetTrigger asChild>
      <button className="p-2 text-gray-500 hover:text-gray-900">
        
      </button>
    </SheetTrigger>
  </div>

  <SheetHeader>
    <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>
  </SheetHeader>

  <div className="flex flex-col gap-6 p-4">
    <Accordion
      type="single"
      collapsible
      className="flex w-full flex-col gap-4"
    >
      {menu.map((item) => renderMobileMenuItem(item))}
    </Accordion>
  </div>
</SheetContent>

    </Sheet>
  </div>
</div>
      </div>
    </section>
  );
};

const renderMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
        <NavigationMenuContent className="bg-popover text-popover-foreground">
          {item.items.map((subItem) => (
            <NavigationMenuLink asChild key={subItem.title} className="w-80">
              <SubMenuLink item={subItem} />
            </NavigationMenuLink>
          ))}
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink
        href={item.url}
        className="bg-background hover:bg-muted hover:text-accent-foreground group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors"
      >
        {item.title}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <SubMenuLink key={subItem.title} item={subItem} />
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <a key={item.title} href={item.url} className="text-md font-semibold">
      {item.title}
    </a>
  );
};

const SubMenuLink = ({ item }: { item: MenuItem }) => {
  return (
    <a
      className="hover:bg-muted hover:text-accent-foreground flex min-w-80 select-none flex-row gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors"
      href={item.url}
    >
      <div className="text-foreground">{item.icon}</div>
      <div>
        <div className="text-sm font-semibold">{item.title}</div>
        {item.description && (
          <p className="text-muted-foreground text-sm leading-snug">
            {item.description}
          </p>
        )}
      </div>
    </a>
  );
};

export { Navbar1 };
