import { motion, useInView } from "framer-motion"; // Corrected import for `framer-motion`
import { useRef } from "react";

interface ContentCard {
  title: string;
  titleTwo: string;
  description: string;
  image: string;
  reverse?: boolean;
}

export const ContentCard = ({ title, titleTwo, description, image, reverse }: ContentCard) => {
  const container = useRef(null);
  const isInView = useInView(container, { once: true });
  console.log(container)

  return (
    <div
      className={`flex items-center justify-between ${
        reverse ? "flex-row-reverse gap-12" : ""
      }`}
    >
      <div className="w-[55%]">
        <h4 className="text-xl font-SyneBold text-gray-400 mb-6">{title}</h4>
        <h1 className="text-4xl font-SyneExtra text-gray-300 uppercase mb-6">{titleTwo}</h1>
        <p className="text-xl font-SyneRegular">{description}</p>
      </div>
      <motion.div
        ref={container}
        initial={reverse ? { x: "-100%", opacity: 0 } : { x: "100%", opacity: 0 }} 
        animate={isInView ? { x: "0%", opacity: 1 } : {}} 
        transition={{ duration: 0.8, ease: "easeOut" }} 
      >
        <img src={image} className="rounded-2xl w-[35vw]" />
      </motion.div>
    </div>
  );
};
