import { Logo, LogoImage, LogoText } from "@/components/logo";
import Image from "next/image";

interface MenuItem {
  title: string;
  links: {
    text: string;
    url: string;
  }[];
}

interface Footer2Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  tagline?: string;
  menuItems?: MenuItem[];
  copyright?: string;
  bottomLinks?: {
    text: string;
    url: string;
  }[];
}

const Footer2 = ({
  logo = {
    src: "/Logo.png",
    alt: "Alightech",
    title: "",
    url: "#",
  },
  tagline = "",
  menuItems = [
    {
      title: "Services",
      links: [
        { text: "Data Asset Modernization", url: "/services/data-asset-modernization" },
        { text: "Cloud Migration", url: "/services/cloud-migration" },
        { text: "Application Modernization", url: "/services/application-modernization" },
        { text: "Professional Services", url: "/services/professional-services" },
      ],
    },
    {
      title: "Company",
      links: [
        { text: "About Us", url: "/about-us" },
        { text: "Careers", url: "/careers" },
        { text: "Contact Us", url: "/contact-us" },
      ],
    },
    {
      title: "Legal",
      links: [
        { text: "Privacy Policy", url: "#" },
        { text: "Terms of Service", url: "#" },
        { text: "Cookie Policy", url: "#" },
      ],
    },
  ],
  copyright,
  bottomLinks = [
    { text: "Terms and Conditions", url: "#" },
    { text: "Privacy Policy", url: "#" },
  ],
}: Footer2Props) => {
  return (
    <section className="py-10 ">
      <div className="container mx-auto">
        <footer>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
            <div className="col-span-2 mb-8 lg:mb-0">
              <div className="flex items-center justify-center max-h-50 h-full">
                <Image src={logo.src} alt="logo-image" width={350} height={350} />
              </div>
              <p className="mt-4 font-bold">{tagline}</p>
            </div>

            {menuItems.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold">{section.title}</h3>
                <ul className="text-muted-foreground space-y-4">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="hover:text-primary font-medium"
                    >
                      <a href={link.url}>{link.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-muted-foreground mt-24 flex flex-col justify-between gap-4 border-t pt-8 text-sm font-medium md:flex-row md:items-center">
            <p>{copyright}</p>
            <ul className="flex gap-4">
              {bottomLinks.map((link, linkIdx) => (
                <li key={linkIdx} className="hover:text-primary underline">
                  <a href={link.url}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </footer>
      </div >
    </section >
  );
};

export { Footer2 };
