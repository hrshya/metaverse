import { motion } from "motion/react";

interface ButtonProps {
    name: string;
}

export const Button = ({name}: ButtonProps) => {
  return (
    <div>
        <motion.button  whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }} 
                  className="bg-gradient-to-r from-gradientRight to-gradientLeft text-white rounded-full p-0.5">
            <span className="flex w-full bg-gradient-to-r from-primary to-primary hover:from-gradientRight hover:to-gradientLeft transition-all ease-in-out hover:text-primary text-white font-medium rounded-full px-6 py-2">
                {name}
            </span>
        </motion.button>
    </div>
  )
}
