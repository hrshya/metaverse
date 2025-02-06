import { ChevronLeft, ChevronRight } from 'lucide-react';
import playerImage from '../../assets/Images/playerMain.png';
import { AppButton } from './AppButton';

interface DialogCardProps {
    card: {
        title: string;
        description: string;
        imageUrl: string;
        leftButton: string;
        rightButton: string;
    },
    onPrev: () => void;
    onNext: () => void;
}

export const DialogCard = ({card, onPrev, onNext}: DialogCardProps) => {

    return (
        <div className="h-screen w-full bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white w-3/4 p-4 h-[40vw] rounded-3xl flex flex-col justify-between ">
                <div className="w-full h-[85%] rounded-xl">
                    <img src={card.imageUrl} alt="dialogCard" className="object-cover w-full h-full rounded-xl" />
                </div>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-4 text-black'>
                        <div className='w-16 h-16 bg-blue-600 border-2 border-blue-900 object-cover overflow-hidden rounded-full flex items-center justify-center'>
                            <img src={playerImage} alt="playerImage" className='scale-[2] mt-4 ml-2' />
                        </div>
                        <div className='flex flex-col'>
                            <h1 className='font-bold text-xl'>{card.title}</h1>
                            <p className='text-gray-600'>{card.description}</p>
                        </div>
                    </div>
                    <div className='flex gap-4'>
                        <div onClick={onPrev}>
                            <AppButton name={card.leftButton} icon={card.leftButton === "Prev" ? <ChevronLeft /> : ""} bgColor='bg-gray-200' color='text-gray-700' padding='px-4 py-3' />
                        </div>
                        <div onClick={onNext}>
                            <AppButton name={card.rightButton} icon={ card.rightButton === "Create my office"? "" : <ChevronRight /> } bgColor='bg-[#4358D8]' flip={true} color='text-white' padding='px-4 py-3' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}