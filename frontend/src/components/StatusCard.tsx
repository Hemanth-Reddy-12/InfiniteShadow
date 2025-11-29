import { Card, CardContent } from "./ui/card";

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

const StatusCard = ({ data: { title, count, icon, bg, fg } }: Props) => {
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
            {count}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatusCard;
