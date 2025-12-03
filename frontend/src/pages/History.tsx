import axios from "axios";
import { useEffect, useState } from "react";
import TaskCard from "../components/TaskCard";

const History = () => {
  const [taskData, setTaskData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("/api/history")
        .then((res) => setTaskData(res.data.task))
        .catch(() => console.log("error"));
    };
    fetchData();
  }, []);
  return (
    <div>
      <div className="p-4 text-2xl font-bold">History</div>
      <div className="grid gap-4 p-4">
        {taskData.map((i, idx) => (
          <TaskCard key={idx} data={i} />
        ))}
      </div>
    </div>
  );
};

export default History;
