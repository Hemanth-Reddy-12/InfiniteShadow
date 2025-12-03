import { Card, CardContent } from "./ui/card";

type taskColor = {
  title: string;
  icon: string;
  bg: string;
  fg: string;
};
type count = {
  work: number;
  fitness: number;
  project: number;
  personal: number;
};

type Props = {
  taskColor: taskColor;
  count: count;
};

const StatusCard = ({ taskColor: { bg, fg, title, icon }, count }: Props) => {
  return (
    <Card style={{ backgroundColor: bg }}>
      <CardContent>
        <div className="w-full flex justify-between ">
          <div style={{ color: fg }}>
            <div className="text-xl font-extrabold mb-4">{title}</div>
            <div className="overflow-hidden">
              <span className="material-symbols-outlined">{icon}</span>
            </div>
          </div>
          <div
            className="flex items-center text-2xl font-bold"
            style={{ color: fg }}
          >
            {count[title as keyof count]}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatusCard;
