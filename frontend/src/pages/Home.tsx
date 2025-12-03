import { useEffect, useState } from "react";
import rocket from "../assets/images/Rocket.webp";
import Status from "../components/Status";
import TaskCard from "../components/TaskCard";
import api from "../lib/api";

type Task = {
  _id: number;
  title: string;
  isCompleted: boolean;
  category?: string;
  tag: string;
};

type Count = {
  work: number;
  fitness: number;
  project: number;
  personal: number;
};

const Home = () => {
  const [taskData, setTaskData] = useState<Task[]>([]);
  const [count, setCount] = useState<Count>({
    work: 0,
    fitness: 0,
    project: 0,
    personal: 0,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await api.get("/upcomingTask");
        setTaskData(res.data.task);
        setCount(res.data.count);
      } catch (error) {
        console.error("Can't retrieve the task data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="w-full h-full">
      <div className="w-full flex justify-between items-center">
        <div className="text-2xl font-semibold">InfiniteShadow</div>
        <img src={rocket} alt="Rocket" className="w-10 h-10" />
      </div>
      <Status count={count} />
      <div className="text-xl font-semibold">Task Mission</div>
      <div className="grid gap-4 py-4">
        {isLoading ? (
          <p className="text-muted-foreground text-center animate-spin">
            <span className="material-symbols-outlined">sync</span>
          </p>
        ) : taskData.length === 0 ? (
          <p className="text-muted-foreground text-center">No tasks found</p>
        ) : (
          taskData.map((task) => <TaskCard key={task._id} data={task} />)
        )}
      </div>
    </div>
  );
};

export default Home;
