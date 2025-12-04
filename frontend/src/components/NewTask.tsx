import { useState, useRef, useEffect } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import TaskColor from "../utils/TaskColor";
import api from "../lib/api";
import { toast } from "sonner";

interface Prop {
  id?: number;
}

const NewTask = ({ id }: Prop) => {
  const [clicked, setClicked] = useState(false);
  const [title, setTitle] = useState("");
  const [selectedTag, setSelectedTag] = useState<string>("");
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (boxRef.current && !boxRef.current.contains(event.target as Node)) {
        setClicked(false);
      }
    };

    if (clicked) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [clicked]);

  const selectTag = (tag: string) => {
    setSelectedTag(tag);
  };

  const handleSave = async () => {
    try {
      setClicked(false);
      const userId = id;

      await api.post("/api/task", {
        userId: userId,
        title: title,
        tag: selectedTag,
      });
      toast.success("Task has been created");
      window.location.reload();
      console.log("Task created successfully");
    } catch (error) {
      console.error("Error saving task:", error);
    }
  };

  if (!clicked)
    return (
      <div className="fixed bottom-18 right-4">
        <Button
          className="bg-blue-500 h-10 w-10"
          onClick={() => setClicked(true)}
        >
          <span className="material-symbols-outlined">add</span>
        </Button>
      </div>
    );

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
      <div
        ref={boxRef}
        className="bg-background rounded-lg border p-6 w-full max-w-md space-y-4"
      >
        <div className="space-y-2">
          <Label htmlFor="title">Task Title</Label>
          <Input
            id="title"
            placeholder="Enter task title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label>Category</Label>
          <div className="flex flex-wrap gap-2">
            {TaskColor.map((category) => (
              <button
                key={category.title}
                onClick={() => selectTag(category.title)}
                style={{
                  backgroundColor:
                    selectedTag === category.title ? category.fg : category.bg,
                  color: selectedTag === category.title ? "#fff" : category.fg,
                }}
                className="px-3 py-1.5 rounded-full text-sm font-medium transition-all flex items-center gap-1.5"
              >
                <span className="material-symbols-outlined text-sm">
                  {category.icon}
                </span>
                {category.title}
              </button>
            ))}
          </div>
        </div>

        <Button onClick={handleSave} className="w-full">
          Save
        </Button>
      </div>
    </div>
  );
};

export default NewTask;
