import rocket from "../assets/images/Rocket.webp";
import Status from "../components/Status";
import TaskCard from "../components/TaskCard";

const Home = () => {
  const data = [
    {
      title: "work",
      count: 20,
      icon: "work",
      bg: "#dcfce7",
      fg: "#16a34a",
    },
    {
      title: "fitness",
      count: 12,
      icon: "fitness_center",
      bg: "#ffe4e6",
      fg: "#e11d48",
    },
    {
      title: "personal",
      count: 10,
      icon: "person",
      bg: "#dbeafe",
      fg: "#2563eb",
    },
    {
      title: "project",
      count: 5,
      icon: "assignment",
      bg: "#ffedd5",
      fg: "#ea580c",
    },
  ];

  return (
    <div className="w-screen h-screen p-6">
      <div className="w-full flex justify-between">
        {/* Icons and Tiltle */}
        <div className="text-2xl font-semibold ">InfiniteShadow</div>
        <div className="">
          <img src={rocket} alt="" className="w-10 h-10" />
        </div>
      </div>
      <Status />
      <div>task cards</div>
      <div className="grid gap-4 py-4">
        {data.map((i, idx) => (
          <TaskCard key={idx} data={i} />
        ))}
      </div>
    </div>
  );
};

export default Home;
