import {
  createVariantsWithTransition,
  presetVariants,
} from "@utils/animations";
import { cn } from "@utils/index";
import { motion } from "motion/react";

type SectionWrapperProps = {
  children: React.ReactNode;
  id: string;
  className?: string;
  title: string;
  position: number;
};

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  id,
  className,
  title,
  position,
}) => {
  return (
    <motion.section
      variants={createVariantsWithTransition(
        presetVariants["fade-in-blur"].item
      )}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        type: "tween",
        duration: 0.5,
      }}
      id={id}
      className={cn(`w-full`, className)}
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl whitespace-nowrap font-bold mb-8 flex items-center gap-6 text-primary">
        <span>
          <span className="">0{position}.</span> <span>{title}</span>
        </span>
        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          className="h-[2px] rounded-full bg-gradient-to-r from-primary from-10% to-90% via-black/50 to-transparent flex-1 min-w-0"
        />
      </h2>
      {children}
    </motion.section>
  );
};

export default SectionWrapper;
