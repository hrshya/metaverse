import React, { createContext, useContext, useState } from "react";

// Define the types for your dialog state
export interface DialogContextType {
  currentDialog: number | null; // `null` if no dialog is open, or an index for the dialog
  openDialog: (index: number) => void; // Function to open a specific dialog
  closeDialog: () => void; // Function to close all dialogs
  goBack: () => void; // Function to go back to the previous dialog
}

// Create the context
const DialogContext = createContext<DialogContextType | undefined>(undefined);

// Provide the dialog context
export const DialogProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentDialog, setCurrentDialog] = useState<number | null>(null);
  const [previousDialog, setPreviousDialog] = useState<number | null>(null);

  const openDialog = (index: number) => {
    setPreviousDialog(currentDialog);
    setCurrentDialog(index);
  };
  const closeDialog = () => {
    setPreviousDialog(null);
    setCurrentDialog(null);
  };
  const goBack = () => setCurrentDialog(previousDialog);

  return (
    <DialogContext.Provider value={{ currentDialog, openDialog, closeDialog, goBack }}>
      {children}
    </DialogContext.Provider>
  );
};

// Hook to use the dialog context
export const useDialog = () => {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error("useDialog must be used within a DialogProvider");
  }
  return context;
};
