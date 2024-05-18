import { useState } from 'react';
import { TrashIcon } from '../../../utils/icons';
import { Task, Id } from '../pages/Kanban/types';

type TaskCardProps = {
  task: Task;
  deleteTask: (id: Id) => void;
  updateTask: (id: Id, content: string) => void;
};

const TaskCard = ({ task, deleteTask, updateTask }: TaskCardProps) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleEditTask = () => {
    setIsPopupOpen(true);
  };

  const handleDeleteTask = () => {
    deleteTask(task.id);
  };

  const handleTaskUpdate = (content: string) => {
    updateTask(task.id, content); // Pass the updated content
    setIsPopupOpen(false);
  };

  return (
    <>
      <div
        className="bg-secondary text-slate-100 mb-2 p-2 border-l-4 border-l-dark h-[40] hover:bg-extraDark transition-all duration-500 flex justify-between"
        onClick={handleEditTask}
      >
        {task.content}
        <button
          className="stroke-white right-4 p-1 rounded opacity-60 hover:opacity-100"
          onClick={(e) => {
            e.stopPropagation();
            handleDeleteTask();
          }}
        >
          <TrashIcon />
        </button>
      </div>
      {isPopupOpen && <EditTaskPopup task={task} onUpdate={handleTaskUpdate} onClose={() => setIsPopupOpen(false)} />}
    </>
  );
};

export default TaskCard;

interface EditTaskPopupProps {
  task: Task;
  onUpdate: (content: string) => void;
  onClose: () => void;
}

const EditTaskPopup: React.FC<EditTaskPopupProps> = ({ task, onUpdate, onClose }) => {
  const [newContent, setNewContent] = useState(task.content);

  const handleSave = () => {
    onUpdate(newContent);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60 z-10">
      <div className="bg-white p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Edit Task</h2>
        <div className="mb-4">
          <label htmlFor="taskContent" className="text-lg font-medium mb-2 block">
            Task Content
          </label>
          <input type="text" id="taskContent" className="border rounded-md p-1 w-full" value={newContent} onChange={(e) => setNewContent(e.target.value)} />
        </div>
        <div className="flex justify-center gap-2">
          <button className="bg-blue-500 text-white px-4 py-1 rounded-md hover:bg-blue-600 transition-all duration-300" onClick={handleSave}>
            Save
          </button>
          <button className="bg-gray-400 text-white px-4 py-1 rounded-md hover:bg-gray-500 transition-all duration-300" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
