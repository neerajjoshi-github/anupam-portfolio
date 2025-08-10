import {
  createVariantsWithTransition,
  presetVariants,
} from "@utils/animations";
import Button from "./Button";
import { TextEffect } from "./ui/TextEffect";
import * as m from "motion/react-m";

const Hero = () => {
  return (
    <div className="min-h-screen flex w-full items-center pt-20">
      <div className="flex flex-col gap-6">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-tanker lowercase">
          <TextEffect per="char" delay={0.25} preset="fade-in-blur">
            Hello,
          </TextEffect>
          <TextEffect per="char" delay={0.5} as="span" preset="fade-in-blur">
            I'm Anupam Singh
          </TextEffect>
          <TextEffect
            className="text-primary"
            delay={0.95}
            preset="fade-in-blur"
            per="char"
            as="span"
          >
            .
          </TextEffect>
        </h1>
        <TextEffect
          delay={1.15}
          preset="fade-in-blur"
          per="line"
          className="text-sm lg:text-base text-primary font-semibold text-balance"
        >
          Cybersecurity Analyst | Penetration Tester | Bug Hunter
        </TextEffect>
        <TextEffect
          delay={1.35}
          preset="fade-in-blur"
          per="line"
          className="text-subtle text-sm lg:text-base font-semibold"
        >
          I specialize in finding and fixing security flaws before attackers can
          exploit them. From vulnerability assessments to web app pentesting and
          business logic exploitation, I combine deep technical expertise with a
          passion for protecting digital assets. Always learning, always
          securing.
        </TextEffect>
        <m.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={createVariantsWithTransition(
            presetVariants["fade-in-blur"].item
          )}
          transition={{
            delay: 1.55,
            type: "tween",
          }}
        >
          <Button
            href="#contact"
            className="w-fit text-base sm:text-lg h-12 sm:h-14 px-8 font-semibold"
          >
            Get In Touch
          </Button>
        </m.div>
      </div>
    </div>
  );
};

export default Hero;
