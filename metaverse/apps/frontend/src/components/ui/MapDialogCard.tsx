import { X } from "lucide-react"
import { MapThemeData } from "../../data/DialogCardData"
import { AppButton } from "./AppButton"
import { useDialog } from "../../contexts/DialogContext";



export const MapDialogCard = ({openNextDialog}: {openNextDialog: () => void}) => {
    const { closeDialog, goBack } = useDialog();
    return (
        <div className="h-screen w-full bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-[#282D4E] w-3/5 p-6 h-[35vw] shadow-xl rounded-3xl flex flex-col justify-between">
                <div className="flex flex-col">
                    <div className="flex items-center justify-between">
                        <h1 className="font-bold text-2xl">Choose your office template</h1>
                        <div className="hover:cursor-pointer">
                            <X onClick={() => closeDialog()} />
                        </div>
                    </div>
                    <p className="text-gray-300 font-semibold">Select the size and theme of your office. You can change this later!</p>
                </div>
                <div className="flex items-start mt-8 justify-between h-full">
                    <div className="w-3/5 h-[90%] rounded-xl bg-red-500">
                        <img src={""} alt="dialogCard" className="object-cover w-full h-full rounded-xl" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <h1 className="font-bold">MAP THEME</h1>
                        <div className="grid grid-cols-2 gap-2 top-0">
                            {MapThemeData.themes.map((theme, index) => (
                                <div key={index} className="px-5 py-3 bg-[#545C8F] border-2 border-transparent active:border-teal-500 focus:border-teal-500 rounded-xl hover:cursor-pointer flex flex-col items-center">
                                    <div>{theme.emoji}</div>
                                    <h1 className="font-semibold">{theme.title}</h1>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <div onClick={() => goBack()}>
                        <AppButton name={"Back"} bgColor="bg-[#545C8F]" color="text-white" padding="px-4 py-3" />
                    </div>
                    <div onClick={openNextDialog}>
                        <AppButton name={"Confirm selection"} bgColor="bg-teal-500" color="text-teal-950" padding="px-4 py-3" />
                    </div>
                </div>
            </div>
        </div>
    )
}