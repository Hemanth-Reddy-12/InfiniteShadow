import { useState } from "react";
import { Checkbox } from "./ui/checkbox";
import getColorByTitle from "../utils/GetColorByTitle";
import { toast } from "sonner";
import api from "../lib/api";

type StatusData = {
  _id: number;
  title: string;
  isCompleted: boolean;
  tag: string;
};

interface Props {
  data: StatusData;
  delete?: boolean;
}

const TaskCard = ({ data, delete: showDelete }: Props) => {
  const [isHidden, setIsHidden] = useState(false);

  const { bg, fg, icon } = getColorByTitle(data.tag);

  const checked = async () => {
    try {
      const isCompleted = !data.isCompleted;

      setIsHidden(true);
      if (isCompleted) toast.success("task completed");
      else toast.error("unchecked the task");

      await api.post("/api/complete", {
        id: data._id,
        isCompleted: isCompleted,
      });
    } catch (error) {
      console.log(error);
      setIsHidden(false);
    }
  };

  const handleDelete = async () => {
    try {
      setIsHidden(true);
      toast("Task is deleted");
      await api.delete("/api/task", {
        data: { id: data._id },
      });
    } catch (error) {
      console.log(error);
    }
  };

  if (isHidden) return null;

  return (
    <div className=" flex items-start gap-3 rounded-lg border p-3 ">
      <div className="flex justify-between items-center w-full gap-2 font-normal ">
        <Checkbox checked={data.isCompleted} onCheckedChange={checked} />
        <p className="text-sm font-medium flex-1 overflow-hidden">
          {data.title}
        </p>
        <div
          className="border rounded-full px-2.5 py-0.5 flex items-center gap-1"
          style={{
            backgroundColor: bg,
            color: fg,
          }}
        >
          <span
            className="material-symbols-outlined"
            style={{ fontSize: "12px" }}
          >
            {icon}
          </span>
          <span className="text-[0.65rem] font-semibold capitalize">
            {data.tag}
          </span>
        </div>
        <span>
          {showDelete ? (
            <div onClick={handleDelete}>
              <span
                className="material-symbols-outlined"
                style={{ fontSize: "24px", color: "red" }}
              >
                delete
              </span>
            </div>
          ) : (
            ""
          )}
        </span>
      </div>
    </div>
  );
};

export default TaskCard;
