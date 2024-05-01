import { TrashIcon } from '../../../utils/icons';
import { Task } from '../pages/Kanban/types';

type TaskCardProps = {
  task: Task;
};

const TaskCard = ({ task }: TaskCardProps) => {
  return (
    <div className="bg-blue-200 p-2.5 h-[100px] min-h-[100px] items-center flex text-left rounded-xl hover:ring-2 hover:ring-inset hover:ring-blue-500  cursor-grab relative">
      {task.content}

      <button className="stroke-white absolute right-4  bg-blue-700 p-2 rounded">
        <TrashIcon />
      </button>
    </div>
  );
};

export default TaskCard;
