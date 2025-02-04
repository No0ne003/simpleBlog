import { siteConfig } from "@/config/site";
import { Icons } from "../icons";
import Link from "next/link";

export function Footer() {
  const socialLinks = [
    {
      href: siteConfig.links.twitter,
      label: "Twitter",
      icon: <Icons.twitter className="size-6" />,
    },
    {
      href: siteConfig.links.github,
      label: "Github",
      icon: <Icons.gitHub className="size-6" />,
    },
  ];

  return (
    <footer>
      <div className="mb-6 mt-14 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          {socialLinks.map(({ href, label, icon }) => (
            <Link
              key={label}
              target="_blank"
              rel="noreferrer"
              href={href}
              aria-label={label}
              className="transition-transform hover:scale-110"
            >
              {icon}
            </Link>
          ))}
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-muted-foreground">
          <p>{siteConfig.author}</p>
        </div>
      </div>
    </footer>
  );
}
