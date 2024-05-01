import React, { useState } from 'react';
import { TrashIcon } from '../../../utils/icons';
import { Task, Id } from '../pages/Kanban/types';
import Overlay from '../../../components/Overlay';

type TaskCardProps = {
  task: Task;
  deleteTask: (id: Id) => void;
  updateTask: (id: Id, content: string) => void;
};

const TaskCard = ({ task, deleteTask, updateTask }: TaskCardProps) => {
  const [mouseIsOver, setMouseIsOver] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [newContent, setNewContent] = useState(task.content);

  const toggleEditMode = () => {
    setEditMode((prev) => !prev);
    setMouseIsOver(false);
  };

  const handleEdit = () => {
    updateTask(task.id, newContent);
    toggleEditMode();
  };

  if (editMode) {
    return (
      <>
        <div className="fixed z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-md shadow-md">
          <input type="text" value={newContent} onChange={(e) => setNewContent(e.target.value)} className="border rounded-md p-1 w-full" />
          <div className="mt-4 flex justify-end">
            <button className="bg-blue-500 text-white px-4 py-1 rounded-md mr-2" onClick={handleEdit}>
              Save
            </button>
            <button className="bg-red-500 text-white px-4 py-1 rounded-md" onClick={toggleEditMode}>
              Cancel
            </button>
          </div>
        </div>
        <Overlay />
      </>
    );
  }

  return (
    <div
      className="bg-blue-200 p-2.5 h-[100px] min-h-[100px] items-center flex text-left rounded-xl hover:ring-2 hover:ring-inset hover:ring-blue-900  cursor-grab relative"
      onMouseEnter={() => {
        setMouseIsOver(true);
      }}
      onMouseLeave={() => {
        setMouseIsOver(false);
      }}
      onClick={toggleEditMode}
    >
      {task.content}

      {mouseIsOver && (
        <button
          className="stroke-white absolute right-4 bg-blue-700 p-2 rounded opacity-60 hover:opacity-100"
          onClick={() => {
            deleteTask(task.id);
          }}
        >
          <TrashIcon />
        </button>
      )}
    </div>
  );
};

export default TaskCard;
