import { useEffect, useState } from "react";
import TaskCard from "../components/TaskCard";
import api from "../lib/api";

const History = () => {
  const [taskData, setTaskData] = useState([]);
  const [isLoading, SetIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await api
        .get("/api/history")
        .then((res) => setTaskData(res.data.task))
        .catch(() => console.log("error"))
        .finally(() => SetIsLoading(false));
    };
    fetchData();
  }, []);
  return (
    <div>
      <div className="p-4 text-2xl font-bold">History</div>
      {isLoading ? (
        <p className="text-muted-foreground text-center animate-spin">
          <span className="material-symbols-outlined">sync</span>
        </p>
      ) : taskData.length === 0 ? (
        <p className="text-muted-foreground text-center">No History found</p>
      ) : (
        <div className="grid gap-4 p-4">
          {taskData.map((i, idx) => (
            <TaskCard key={idx} data={i} delete={true} />
          ))}
        </div>
      )}
    </div>
  );
};

export default History;
