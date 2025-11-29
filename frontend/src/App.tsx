import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="w-screen min-h-screen block sm:hidden font-merriweather dark bg-background text-foreground">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
