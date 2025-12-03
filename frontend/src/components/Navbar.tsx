import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="h-15 w-full fixed bottom-0 border-t-2 bg-background">
      <div className="grid grid-cols-2 justify-between items-center w-full h-full">
        <div className="w-full flex justify-center">
          <div className={location.pathname == "/" ? "text-blue-500" : ""}>
            <a href="/">
              <span className="material-symbols-outlined">task_alt</span>
            </a>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div
            className={location.pathname == "/history" ? "text-blue-500" : ""}
          >
            <a href="/history">
              <span className="material-symbols-outlined">history</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
