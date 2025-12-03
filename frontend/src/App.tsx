import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import History from "./pages/History";
import NewTask from "./components/NewTask";
import { Toaster } from "sonner";
import { useLaunchParams } from "@tma.js/sdk-react";

const App = () => {
  const params = useLaunchParams();

  const id = params.tgWebAppData?.user?.id;

  if (id !== 5507592055)
    return (
      <div className="h-screen w-screen flex justify-center items-center">
        <div>under Development</div>
      </div>
    );

  return (
    <div className="w-screen min-h-screen block sm:hidden font-merriweather dark bg-background text-foreground">
      <Toaster position="top-center" />
      <Navbar />
      <NewTask id={id} />
      <div className="p-6 pb-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
