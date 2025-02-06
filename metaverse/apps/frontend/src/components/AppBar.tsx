import { Calendar, CircleHelp, CirclePlus, CircleUser, Sparkles } from "lucide-react";
import { AppButton } from "./ui/AppButton";
import { DialogCardCarousel } from "./DialogCardCarousel";
import { useDialog } from "../contexts/DialogContext";
import { MapDialogCard } from "./ui/MapDialogCard";
import { DialogBox } from "./ui/DialogBox";

export const AppBar = () => {
  const { currentDialog, openDialog } = useDialog(); // Access dialog context

  return (
    <div className="bg-primary px-12 py-8 text-secondary flex items-center justify-between relative">
      <div className="flex items-center gap-4">
        <h1 className="tracking-tighter text-3xl font-SyneExtra">Convo</h1>
        <AppButton name={"Events"} icon={<Calendar size={16} />} />
        <AppButton name={"My Spaces"} icon={<Sparkles size={16} />} />
      </div>
      <div className="flex items-center gap-4">
        <AppButton name={"username"} icon={<CircleUser size={20} />} />
        <AppButton name={"Resources"} icon={<CircleHelp size={20} />} />
        <div onClick={() => openDialog(1)}> {/* Opens dialog with index 0 */}
          <AppButton
            name={"Create Space"}
            icon={<CirclePlus size={20} />}
            color="text-white"
            bgColor="bg-gradient-to-br from-gradientSecondary to-gradientRight"
          />
        </div>
      </div>

      {/* Conditionally render dialog based on currentDialog state */}
      {currentDialog === 1 && (
        <div className="absolute top-0 left-0 w-full h-full">
          <DialogCardCarousel openNextDialog={() => openDialog(2)} />
        </div>
      )}

      {currentDialog === 2 && (
        <div className="absolute top-0 left-0 w-full h-full">
          <MapDialogCard openNextDialog={() => openDialog(3)} />
        </div>
      )}

      {currentDialog === 3 && (
        <div className="absolute top-0 left-0 w-full h-full">
          <DialogBox />
        </div>
      )}

      {/* Style to prevent body scrolling when a dialog is open */}
      {currentDialog !== null && (
        <style>
          {`
            body {
              overflow: hidden;
            }
          `}
        </style>
      )}
    </div>
  );
};
