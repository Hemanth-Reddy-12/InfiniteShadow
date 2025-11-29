import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";

type StatusData = {
  title: string;
  count: number;
  icon: string;
  bg: string;
  fg: string;
};

interface Props {
  data: StatusData;
}

const TaskCard = ({ data: { title, bg, fg } }: Props) => {
  return (
    <Label className="hover:bg-accent/50 flex items-start gap-3 rounded-lg border p-3 ">
      <Checkbox />
      <div className="grid gap-1.5 font-normal">
        <p className="text-sm leading-none font-medium">{title}</p>
      </div>
    </Label>
  );
};

export default TaskCard;
