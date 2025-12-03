import TaskColor from "./TaskColor";

// Helper function to get color data by title
export const getColorByTitle = (title: string) => {
  const colorData = TaskColor.find(
    (color) => color.title.toLowerCase() === title.toLowerCase()
  );

  return (
    colorData || {
      title: "default",
      icon: "task",
      bg: "#f3f4f6",
      fg: "#374151",
    }
  );
};

export default getColorByTitle;
