import video from "../assets/Videos/HeroVideo.mp4";
import heroSecondary from "../assets/Images/HeroSecondary2.jpg"
import { cubicBezier, motion } from "motion/react";
import { spring } from "motion";


export const HeroSection = () => {
  return (
    <div>
      <h1 className="text-[148px] leading-none font-ExtraNeue uppercase flex items-center">
        Y
        <motion.div initial={{width: "91px"}} animate={{width: "192px"}} transition={{ type: spring, bounce: .25, duration: 1.5}} className="h-[86px] mt-2.5 mx-1 w-48 bg-secondary rounded-2xl flex items-center justify-center">
          <motion.div initial={{width: "46px"}} animate={{width: "138px"}} transition={{ type: spring, bounce: .25, duration: 1.5}} className="h-[46px] w-36 bg-primary"></motion.div>
        </motion.div>
        ur Virtual
      </h1>
      <div className="flex justify-between">
        <div>
          <div className="flex items-center gap-6">
            <h1 className="text-[148px] leading-none font-ExtraNeue uppercase">
              HQ
            </h1>
            <div style={{
                backgroundImage: `url(${heroSecondary})`,
                backgroundPosition: 'top',
            }} className="h-[80px] mt-2.5 w-72 border-[3px] p-2 flex items-center rounded-full border-secondary overflow-hidden">
              <motion.div initial={{x: "320%", rotate: 360}} animate={{x: "0%", rotate: 0}} transition={{ type: spring, bounce: .3, duration: 2}} className="h-[64px] w-[64px] rounded-full text-secondary flex items-center justify-center bg-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="url(#gradient)"
                    fill="url(#gradient)"
                    className="size-8"
                  >
                    <defs>
                      <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stop-color="var(--tw-gradient-stops, #f43f5e)" />
                        <stop offset="100%" stop-color="var(--tw-gradient-stops, #3b82f6)" />
                      </linearGradient>
                    </defs>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                    />
                  </svg>
                </motion.div>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="font-SyneRegular text-2xl">
              Convo brings the best of in-person collaboration to <br />{" "}
              distributed teams.
            </h3>
            <motion.button  className="flex items-center gap-2 font-SyneRegular text-md mt-4 bg-secondary hover:bg-gray-300 text-primary rounded-full">
              <motion.p initial={{paddingLeft: 0, paddingTop: 0, paddingBottom: 0, display: "none"}} animate={{paddingLeft: "32px", paddingTop: "12px", paddingBottom: "12px", width:"100%", display: "block"}} transition={{ type: spring, bounce: .3, duration: 2}} className=" pl-8 py-3">LETS GET STARTED</motion.p>
              <motion.div whileHover={{rotate: 90}} className="p-2 mr-1.5 rounded-full bg-gradient-to-tr from-gradientSecondary to-gradientRight text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </motion.div>
            </motion.button>
          </div>
        </div>
        <motion.div initial={{x: "200%"}} animate={{x: "0%", transition: {duration: 1, easings: cubicBezier}}} className="w-[38vw] h-80 rounded-xl overflow-hidden ">
          <video
            muted
            playsInline
            loop
            src={video}
            className="rounded-xl"
          ></video>
        </motion.div>
      </div>
    </div>
  );
};
