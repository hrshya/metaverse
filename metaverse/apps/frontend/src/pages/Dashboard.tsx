import { EllipsisVertical, ExternalLinkIcon } from "lucide-react"
import { AppBar } from "../components/AppBar"
import { AppButton } from "../components/ui/AppButton"


export const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#212026] to-black text-secondary">
        <div className="relative z-10">
            <AppBar />
        </div>
        <div className="px-12 py-4">
            <div className="flex items-center justify-end gap-4">
                <AppButton name={"Last Visited"} round="rounded-2xl" />
                <AppButton name={"Created Spaces"} round="rounded-2xl" />
                <div className="w-full max-w-[200px] min-w-[200px]">
                    <div className="relative flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="absolute w-5 h-5 top-2.5 left-2.5 text-white">
                            <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clip-rule="evenodd" />
                        </svg>
                    
                        <input
                        className="w-full bg-transparent placeholder:text-slate-400 font-semibold text-slate-700 text-md border border-slate-200 rounded-lg pl-10 pr-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                        placeholder="Search" 
                        />
                    </div>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-3 gap-4 px-12 gap-y-6">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => (
                <div className="flex flex-col gap-2 group">
                    <div className="w-full h-60 bg-red-900 rounded-2xl hover:cursor-pointer flex items-center justify-center">
                        <div className="p-2 bg-black rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <ExternalLinkIcon size={20} />
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <h1 className="text-base font-semibold">Remote</h1>
                        <div className="flex items-center justify-between gap-2">
                            <h6 className="text-sm text-gray-400">28 Days ago</h6>
                            <div className="hover:cursor-pointer">
                                <EllipsisVertical size={16} />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
