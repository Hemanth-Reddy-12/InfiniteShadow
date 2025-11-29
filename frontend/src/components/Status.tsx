import StatusCard from "./StatusCard";

const Status = () => {
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
    <div className="grid grid-cols-2 gap-3 my-2">
      {data.map((i, idx) => (
        <StatusCard key={i.title ?? idx} data={i} />
      ))}
    </div>
  );
};

export default Status;
