import { CircleCheck, X } from "lucide-react"
import { useDialog } from "../../contexts/DialogContext";
import { AppButton } from "./AppButton";



export const DialogBox = () => {
    const { closeDialog, goBack } = useDialog();
    return (
        <div className="h-screen w-full bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-[#282D4E] w-2/5 p-6 h-2/5 shadow-xl rounded-3xl flex flex-col justify-between">
                <div className="flex items-center justify-between">
                    <h1 className="font-semibold text-2xl">Create a new office space for your team</h1>
                    <div className="hover:cursor-pointer">
                        <X onClick={() => closeDialog()} />
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <p className="font-semibold text-sm">Space name* (Appears at the end of URL)</p>
                    <input type="text" id="voice-search" className="bg-transparent border-2 border-gray-300 outline-none caret-white text-white text-md font-semibold rounded-lg block w-full p-2.5" placeholder="yourspacename" required />
                </div>
                <div className="flex items-center justify-between">
                    <div onClick={() => goBack()}>
                        <AppButton name={"Back"} bgColor="bg-[#545C8F]" color="text-white" padding="px-4 py-3" />
                    </div>
                    <AppButton name={"Confirm selection"} bgColor="bg-teal-500" icon={<CircleCheck />} color="text-teal-950" padding="px-4 py-3" />
                </div>
            </div>
        </div>
    )
}