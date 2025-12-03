import TaskColor from "../utils/TaskColor";
import StatusCard from "./StatusCard";

type count = {
  work: number;
  fitness: number;
  project: number;
  personal: number;
};

type Props = {
  count: count;
};

const Status = ({ count }: Props) => {
  const taskColors = TaskColor;
  return (
    <div className="grid grid-cols-2 gap-4 py-4">
      {taskColors.map((color, i) => (
        <StatusCard key={i} taskColor={color} count={count} />
      ))}
    </div>
  );
};

export default Status;
