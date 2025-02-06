import { HeroSection } from "../components/HeroSection"
import { Navbar } from "../components/Navbar"
import { GradientEffect } from "../components/ui/GradientEffect"
import heroImage1 from "../assets/Images/HeroImage2.webp"
import { cubicBezier, motion } from "motion/react";
import { ContentCard } from "../components/ContentCard";
import image1 from "../assets/Images/image1.png"
import image2 from "../assets/Images/image2.png"
import image3 from "../assets/Images/image3.png"
import { Button } from "../components/ui/Button";
import { ChevronRight } from "lucide-react";
import { Footer } from "../components/Footer";



export const LandingPage = () => {
  return (
    <div className="bg-primary text-secondary px-24 py-12 min-h-[100vh] overflow-hidden relative">
      <div className="absolute top-[-20vw] left-[-13vw] z-0">
        <GradientEffect />
      </div>
      <div className="absolute right-[-20vw] flex flex-col gap-12 items-center top-[60vh]">
        <div className="h-28 w-28 bg-gradientLeft rounded-full  blur-3xl"></div>
        <div className="h-32 w-44 bg-gradientRight rounded-full  blur-3xl"></div>
        <div className="h-72 w-[40vw] bg-gradientSecondary rounded-full  blur-3xl"></div>
      </div>
      <div className="absolute w-[50vw] top-[50vh] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <img src={heroImage1} />
      </div>
      <div className="relative z-20">
        <motion.div initial={{ y: -100 }} animate={{y: 0, transition: {duration: 1, easings: cubicBezier}}}>
          <Navbar />
        </motion.div>
        <div className="mt-16">
          <HeroSection />
        </div>
        <div className="mt-32">
          <div className="text-7xl font-ExtraNeue flex flex-col items-center justify-center">
            <h1>The in-person moments</h1>
            <h1 className="bg-gradient-to-t from-gradientRight from-10% via-gradientSecondary via-30% to-gradientLeft to-60% bg-clip-text text-transparent">you’ve been missing</h1>
          </div>
          <div className="flex flex-col gap-32 mt-32">
            <ContentCard title={"PROXIMITY AND VISIBILITY"} titleTwo={"Bring your remote team closer together"} description={"Communicate, collaborate, and feel more connected in a persistent space that reflects your unique team culture."} image={image1}  />
            <ContentCard title={"SERENDIPITOUS MOMENTS"} titleTwo={"Talk naturally throughout your day"} description={"Stop by someone's desk, say hi in the hallway, and bring back water cooler chats. No scheduling required."} image={image2} reverse={true} />
            <ContentCard title={"PRODUCTIVE CONVERSATIONS"} titleTwo={"Meet in the moment"} description={"Collaborate in the moment or schedule team meetings to keep everyone aligned and work moving forward."} image={image3}  />
          </div>
          <div className="flex flex-col items-center gap-16 mt-44">
            <div>
              <video src="https://cdn.vidzflow.com/v/MB29PHd9nF_1080p_1691443966.mp4" className="rounded-2xl w-[70vw]" />
            </div>
            <div className="flex flex-col items-center justify-center gap-12">
              <div className="text-6xl w-full font-SuperNeue leading-none flex flex-col">
                <h1>Build a culture your</h1>
                <h1 className="bg-gradient-to-t from-gradientRight from-10% via-gradientSecondary via-30% to-gradientLeft to-60% bg-clip-text text-transparent">remote team loves</h1>
              </div>
              <div className="flex items-center gap-8">
                <Button name="Get Started" />
                <button className="bg-transparent text-md text-secondary flex items-center gap-1">View Pricing <ChevronRight /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="relative z-10">
          <Footer />
        </div>
        <div className="">
            <div className="absolute top-0 right-20">
                <GradientEffect />
            </div>
            <div className="absolute top-60 right-80">
                <GradientEffect />
            </div>
            <div className="absolute top-32 -left-[40vw]">
                <GradientEffect />
            </div>
            <div className="absolute top-96 -left-[30vw]">
                <GradientEffect />
            </div>
        </div>
      </div>
    </div>
  );
};
