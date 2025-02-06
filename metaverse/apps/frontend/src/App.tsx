import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { Signin, Signup } from "./pages/AuthPages";
import { Dashboard } from "./pages/Dashboard";
import { DialogProvider } from "./contexts/DialogContext";
import TestPage from "./pages/TestPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <LandingPage /> } />
        <Route path="/signin" element={ <Signin /> } />
        <Route path="/signup" element={ <Signup /> } />
        <Route path="/app" element={  <DialogProvider> <Dashboard /> </DialogProvider> } />
        <Route path="/remote" element={ <TestPage /> } />
        <Route path="*" element={ <h1>404 Not Found</h1> } />
      </Routes>
    </BrowserRouter>
  )
}


export default App;