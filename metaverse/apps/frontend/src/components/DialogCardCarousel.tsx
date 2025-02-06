import { DialogCard } from "./ui/DialogCard"
import { DialogCardData } from "../data/DialogCardData"
import { useState } from "react";



export const DialogCardCarousel = ({ openNextDialog }: { openNextDialog: () => void }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : DialogCardData.cards.length - 1));
    };
    const handleNext = () => {
        setCurrentIndex((prevIndex) => {
            if (prevIndex < DialogCardData.cards.length - 1) {
                return prevIndex + 1;
            } else {
                openNextDialog();
                return prevIndex;
            }
        });
    };

    return (
            <div>
                <DialogCard
                    card={{
                        ...DialogCardData.cards[currentIndex],
                        leftButton: currentIndex === 0 ? "Skip onboarding" : "Prev",
                        rightButton: currentIndex === DialogCardData.cards.length - 1 ? "Create my office" : (currentIndex === 0 ? "Explore" : "Next")
                    }}
                    onPrev={handlePrev}
                    onNext={handleNext}
                />
            </div>
        );
}