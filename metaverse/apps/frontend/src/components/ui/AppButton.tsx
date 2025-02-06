import { ReactNode } from "react";
import { cn } from "../../utils/Utils";

type AppButtonProps = {
    name: string;
    icon?: ReactNode;
    color?: string;
    bgColor?: string;
    round?: string;
    flip?: boolean;
    padding?: string;
}

export const AppButton = ({name, icon, color, bgColor, round, flip, padding}: AppButtonProps) => {
  return (
    <div>
        <button className={cn(
          `${bgColor ? `hover:text-white active:text-white focus:text-white` : ""} hover:bg-[#262626] bg-[#262626] active:bg-[#262626] focus:bg-[#262626]`,
          bgColor || "bg-transparent",
          color || "text-secondary",
          round || "rounded-xl",
          padding || "px-6 py-2",
        )}>
                {flip === true ?
                <div className="flex items-center justify-center gap-2">
                  <h4 className="font-semibold">{name}</h4>
                  <div className="">{icon}</div>
                </div>
                 : 
                <div className="flex items-center justify-center gap-2">
                  <div className="">{icon}</div>
                  <h4 className="font-semibold">{name}</h4>
                </div>
                }
        </button>
    </div>
  )
}
