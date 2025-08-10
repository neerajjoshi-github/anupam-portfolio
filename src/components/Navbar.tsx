import type React from "react";
import { useState } from "react";
import Button from "./Button";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { fadeInAnimation } from "@utils/animations";

const navLinks = [
  { id: "about", title: "About" },
  { id: "experience", title: "Experience" },
  { id: "certifications", title: "Certifications " },
  { id: "contact", title: "Contact" },
];

const Navbar = () => {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (current) => {
    setScrolled(current >= 150);
  });

  return (
    <div className="fixed top-0 z-10 left-0 w-full flex items-center justify-center p-2">
      <motion.nav
        animate={{
          backdropFilter: scrolled ? "blur(4px)" : "none",
          backgroundColor: scrolled
            ? "oklch(from var(--background) l c h / 0.35)"
            : "transparent",
          scaleX: scrolled ? 0.975 : 1,
        }}
        transition={{
          type: "tween",
        }}
        className="flex items-center justify-between  max-w-[1200px] w-full py-3 px-6 rounded-xl"
      >
        <motion.a
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 2,
          }}
          href="/"
          className="font-bold text-primary"
        >
          [ Anupam Singh ]
        </motion.a>
        <div className="flex items-center gap-8">
          <div className="items-center gap-8 hidden lg:flex">
            {navLinks.map((link, index) => {
              return (
                <NavLink
                  key={link.id}
                  id={link.id}
                  title={link.title}
                  index={index}
                />
              );
            })}
          </div>
          <motion.div {...fadeInAnimation(navLinks.length * 0.15)}>
            <Button
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </Button>
          </motion.div>
        </div>
      </motion.nav>
    </div>
  );
};

type NavLinkProps = {
  id: string;
  title: string;
  index: number;
};

const NavLink: React.FC<NavLinkProps> = ({ id, title, index }) => {
  return (
    <motion.a
      {...fadeInAnimation(index * 0.15)}
      href={`#${id}`}
      className="text-white font-semibold text-sm hover:text-primary flex items-center gap-2"
    >
      <span className="text-primary">0{index + 1}.</span> {title}
    </motion.a>
  );
};

export default Navbar;
