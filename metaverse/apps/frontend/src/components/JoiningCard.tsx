import { Camera, CameraOff, ChevronDown, Mic, MicOff } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../utils/Utils';

export const JoiningCard = () => {
    const [isMuted, setIsMuted] = useState(true);
    const [isCameraOff, setIsCameraOff] = useState(true);

    const toggleMute = () => setIsMuted(!isMuted);
    const toggleCamera = () => setIsCameraOff(!isCameraOff);

    return (
        <div className="min-h-screen bg-[#1B1D24] text-white relative overflow-hidden">
            
            {/* Header */}
            <header className="flex justify-between items-center p-6">
                <div className="flex items-center gap-2">
                    <span className="tracking-tighter text-3xl font-SyneExtra">Convo</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-white/80">random@gmail.com</span>
                    <ChevronDown />
                </div>
            </header>

            {/* Main content */}
            <main className="max-w-5xl mx-auto px-4 pt-20">
                <h1 className="text-5xl font-bold text-center text-white mb-16">
                    Welcome to <span className="text-[#8B9AC4]">remote</span>
                </h1>

                <div className="grid md:grid-cols-[1.5fr,1fr] gap-12 items-start">
                    {/* Video preview card */}
                    <div className="bg-black rounded-2xl border-none aspect-video relative">
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white/70 space-y-2">
                            <p>You are muted</p>
                            <p>Your camera is off</p>
                        </div>
                        {/* Camera controls */}
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
                            <button 
                                onClick={toggleMute}
                                className={cn("rounded-full bg-[#00BA88] hover:bg-[#00BA88]/90 w-12 h-12 flex items-center justify-center",
                                    isMuted && "bg-[#3B2930] text-[#F0696F] hover:bg-[#3B2930]/90"
                                )}
                            >
                                {isMuted ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
                            </button>
                            <button
                                onClick={toggleCamera}
                                className={cn("rounded-full bg-[#00BA88] hover:bg-[#00BA88]/90 w-12 h-12 flex items-center justify-center",
                                    isCameraOff && "bg-[#3B2930] text-[#F0696F] hover:bg-[#3B2930]/90"
                                )}
                            >
                                {isCameraOff ? <CameraOff className="h-5 w-5" /> : 
                                    <Camera className="h-5 w-5" />
                                } 
                            </button>
                        </div>
                    </div>

                    {/* Join section */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <input className="bg-[#1E2029] rounded-lg px-4 py-2 text-white/90 w-48" placeholder='fit minds' />
                            <button className="text-white/80">
                                Edit
                            </button>
                        </div>
                        <button 
                            className="w-full bg-[#00BA88] hover:bg-[#00BA88]/90 text-white rounded-xl py-6 text-lg"
                        >
                            Join
                        </button>
                    </div>
                </div>

                {/* Footer */}
                <footer className="text-center text-sm text-white/60 mt-24 pb-8">
                    By joining this space, you agree to our{" "}
                    <a href="#" className="text-white/80 hover:text-white">
                        Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-white/80 hover:text-white">
                        Privacy Policy
                    </a>
                    , and confirm that you're over 18 years of age.
                </footer>
            </main>
        </div>
    );
}
