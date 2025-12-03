import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import History from "./pages/History";
import NewTask from "./components/NewTask";
import { Toaster } from "sonner";

const App = () => {
  return (
    <div className="w-screen min-h-screen block sm:hidden font-merriweather dark bg-background text-foreground">
      <Navbar />
      <NewTask />
      <Toaster />
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
