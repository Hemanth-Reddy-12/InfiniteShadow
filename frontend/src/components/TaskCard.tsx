import axios from "axios";
import { useState } from "react";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import getColorByTitle from "../utils/GetColorByTitle";

type StatusData = {
  _id: number;
  title: string;
  isCompleted: boolean;
  tag: string;
};

interface Props {
  data: StatusData;
}

const TaskCard = ({ data }: Props) => {
  const [isHidden, setIsHidden] = useState(false);

  const { bg, fg, icon } = getColorByTitle(data.tag);

  const checked = async () => {
    try {
      const isCompleted = !data.isCompleted;

      setIsHidden(true);

      await axios.post("/api/complete", {
        id: data._id,
        isCompleted: isCompleted,
      });
    } catch (error) {
      console.log(error);
      setIsHidden(false);
    }
  };

  if (isHidden) return null;

  return (
    <Label className="hover:bg-accent/50 flex items-start gap-3 rounded-lg border p-3 cursor-pointer animate-collapsible-down">
      <Checkbox checked={data.isCompleted} onCheckedChange={checked} />
      <div className="flex justify-between items-center w-full gap-2 font-normal">
        <p className="text-sm leading-none font-medium flex-1">{data.title}</p>
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
      </div>
    </Label>
  );
};

export default TaskCard;
