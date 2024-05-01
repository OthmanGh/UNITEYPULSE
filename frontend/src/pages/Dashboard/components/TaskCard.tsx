import { useState } from 'react';
import { TrashIcon } from '../../../utils/icons';
import { Task, Id } from '../pages/Kanban/types';

type TaskCardProps = {
  task: Task;
  deleteTask: (id: Id) => void;
};

const TaskCard = ({ task, deleteTask }: TaskCardProps) => {
  const [mouseIsOver, setMouseIsOver] = useState(false);

  return (
    <div
      className="bg-blue-200 p-2.5 h-[100px] min-h-[100px] items-center flex text-left rounded-xl hover:ring-2 hover:ring-inset hover:ring-blue-900  cursor-grab relative"
      onMouseEnter={() => {
        setMouseIsOver(true);
      }}
      onMouseLeave={() => {
        setMouseIsOver(false);
      }}
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
